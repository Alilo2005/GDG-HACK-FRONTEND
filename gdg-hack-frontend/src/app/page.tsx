"use client"; // Now this is a client component

import { useState } from "react";
import { Sidebar } from "./components/Sidebar";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />;
}
