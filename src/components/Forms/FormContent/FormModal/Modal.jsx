export function Modal({ open, closeModal, children, size }) {
  const stopPropagation = (ev) => {
    ev.stopPropagation();
  };
  return (
    open && (
      <div onClick={closeModal} className="relative z-10">
        <div className="fixed z-0 inset-0 bg-gray-700 bg-opacity-50 transition-opacity"></div>
        <div className="fixed z-20 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
            <div
              onClick={stopPropagation}
              className={`relative bg-brand-500  rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-${
                size ? size : "lg"
              } sm:w-full`}
            >
              <div className="bg-brand-500 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
