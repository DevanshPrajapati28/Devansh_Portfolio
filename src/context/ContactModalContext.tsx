"use client";

import React, { createContext, useContext, useState } from "react";

interface ContactModalContextType {
  isOpen: boolean;
  openContactModal: (defaultSubject?: string) => void;
  closeContactModal: () => void;
  defaultSubject: string;
}

const ContactModalContext = createContext<ContactModalContextType>({
  isOpen: false,
  openContactModal: () => {},
  closeContactModal: () => {},
  defaultSubject: "",
});

export function ContactModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [defaultSubject, setDefaultSubject] = useState("");

  const openContactModal = (subject = "") => {
    setDefaultSubject(subject);
    setIsOpen(true);
  };

  const closeContactModal = () => {
    setIsOpen(false);
  };

  return (
    <ContactModalContext.Provider
      value={{ isOpen, openContactModal, closeContactModal, defaultSubject }}
    >
      {children}
    </ContactModalContext.Provider>
  );
}

export function useContactModal() {
  return useContext(ContactModalContext);
}
