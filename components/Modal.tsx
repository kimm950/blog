import React from 'react';

export type ModalProps = {
  onClose: () => void;
  children: React.ReactElement | React.ReactNode[];
  title?: React.ReactNode;
  disabled?: boolean;
};

const Modal = ({ onClose, title, children }: ModalProps): JSX.Element => {
  return (
    <>
      <div
        data-testid="modal"
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto w-full fixed inset-0 z-50 outline-none focus:outline-none"
      >
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col xsm:w-80 sm:w-sm bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-center justify-between p-3 rounded-t max-h-16 font-semibold">
              <h5 id="modal-title" className="text-xl">
                {title}
              </h5>
              <button type="button" onClick={onClose}>
                X
              </button>
            </div>
            {/*body*/}
            <div className="relative sm:p-3 p-4 flex-auto">{children}</div>
            {/*footer*/}
            <div className="flex items-center justify-end sm:p-3 p-4 border-t border-solid border-blueGray-200 rounded-b"></div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default Modal;
