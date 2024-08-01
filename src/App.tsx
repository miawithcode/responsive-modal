import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { CSSProperties, useState } from "react";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="grid">
      <div className="mt-8 px-4 sm:mx-auto sm:px-0">
        <button
          className="inline-flex w-full justify-center rounded-md bg-gray-600 px-3 py-2 text-sm text-white shadow-sm hover:bg-gray-500 sm:ml-3 sm:w-auto"
          onClick={handleOpen}
        >
          Open
        </button>
      </div>

      <MotionConfig
        transition={{
          type: "spring",
          bounce: 0.3,
          duration: isOpen ? 0.7 : 0.4,
        }}
      >
        <AnimatePresence initial={false}>
          {isOpen && (
            <Dialog
              as={motion.div}
              initial="closed"
              animate="open"
              exit="closed"
              static
              className="relative z-50"
              open={isOpen}
              onClose={handleClose}
            >
              <motion.div
                variants={{ closed: { opacity: 0 }, open: { opacity: 1 } }}
                className="fixed inset-0 bg-gray-500 bg-opacity-75"
              >
                <div className="fixed inset-0 z-50 overflow-y-auto">
                  <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel
                      as={motion.div}
                      variants={{
                        closed: {
                          opacity: "var(--opacity-from)",
                          scale: "var(--scale-from, 1)",
                          y: "var(--y-from, 0px)",
                        },
                        open: {
                          opacity: "var(--opacity-to)",
                          scale: "var(--scale-to, 1)",
                          y: "var(--y-to, 0px)",
                        },
                      }}
                      className="relative overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl [--opacity-from:0%] [--opacity-to:100%] max-sm:[--y-from:16px] max-sm:[--y-to:0px] sm:my-8 sm:w-full sm:max-w-lg sm:p-6 sm:[--scale-from:80%] sm:[--scale-to:100%]"
                    >
                      <div className="sm:flex sm:items-start">
                        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                          <CheckIcon
                            className="size-6 text-green-600"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                          <DialogTitle
                            as="h3"
                            className="text-base font-semibold leading-6 text-gray-900"
                          >
                            Subscription confirmed
                          </DialogTitle>
                          <div className="mt-2">
                            <p className="text-sm text-gray-500">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Fugiat deserunt ea voluptate vel aliquam!
                              Quas, eum magnam nobis, necessitatibus quos natus
                              labore quod.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                        <button
                          type="button"
                          className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                          onClick={handleClose}
                        >
                          Dismiss
                        </button>
                      </div>
                    </DialogPanel>
                  </div>
                </div>
              </motion.div>
            </Dialog>
          )}
        </AnimatePresence>
      </MotionConfig>
    </div>
  );
};
export default App;
