"use client";

import dynamic from "next/dynamic";
import { CartContainer } from "../_context/CartContainer";
// import { Modal } from "../_ui/modal";

const ToastContainer = dynamic(
  () => import("react-toastify").then((mod) => mod.ToastContainer),
  { ssr: false }
);

const Modal = dynamic(() => import("../_ui/modal").then((m) => m.Modal), {
  ssr: false,
});

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
