"use client";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartContainer } from "../_context/CartContainer";
import { Modal } from "../_ui/modal";

function Providers({ children }) {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Modal>
        <CartContainer>{children}</CartContainer>
      </Modal>
    </>
  );
}

export default Providers;
