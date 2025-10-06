"use client";

import {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { useOutSideClick } from "../_hooks/useOutSideClick";

const CartModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const open = setOpenName;
  const close = () => setOpenName("");

  return (
    <CartModalContext.Provider value={{ open, openName, close }}>
      {children}
    </CartModalContext.Provider>
  );
}

function Open({ open: OpenModal, children }) {
  const { open, openName, close } = useContext(CartModalContext);

  function handleClick() {
    openName === "" || openName !== OpenModal ? open(OpenModal) : close();
  }

  return <button onClick={handleClick}>{children}</button>;
}

function ModalWindow({ children, open: OpenModal, style }) {
  const { openName, close } = useContext(CartModalContext);
  const ref = useOutSideClick(close, true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (openName !== OpenModal) return null;
  return isMounted
    ? createPortal(
        <main className="bg-black/50 fixed top-0 left-0 z-[99999999] h-screen w-screen flex m-auto">
          <div ref={ref} className={style}>
            {children}
          </div>
        </main>,
        document.body
      )
    : null;
}

function Button({ children }) {
  const { close } = useContext(CartModalContext);
  return cloneElement(children, { onClick: () => close() });
}

Modal.Open = Open;
Modal.ModalWindow = ModalWindow;
Modal.Button = Button;

export { Modal, CartModalContext };
