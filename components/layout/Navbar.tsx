"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Modal } from "../Modal";
import { ServiceInquiryForm } from "../ServiceInquiryForm";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [theme, setTheme] = useState("sustainable-green");
  // const { data: session } = useSession()

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "sustainable-green";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <nav className="bg-secondary/80 backdrop-blur-md fixed w-full z-50 top-0 left-0 font-sans">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-primary">
                <Image
                  src="/euclid.png"
                  alt="EUCLID Logo"
                  width={120}
                  height={40}
                  className="object-contain"
                  priority
                />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                <NavLink href="/about">About</NavLink>
                <NavLink href="/projects">Projects</NavLink>
                <NavLink href="/training-events">Connect</NavLink>
                
                <Select value={theme} onValueChange={handleThemeChange}>
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent className="w-[150px]">
                    <SelectItem value="sustainable-green">Green</SelectItem>
                    <SelectItem value="security-red">Red</SelectItem>
                    <SelectItem value="futuristic-purple">Purple</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setIsOpen(true)}
            >
              <Menu className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed top-0 left-0 right-0 h-screen bg-white z-50 md:hidden overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <Link href="/" className="text-xl font-bold text-primary">
                    <Image
                      src="/euclid.png"
                      alt="EUCLID Logo"
                      width={120}
                      height={40}
                      className="object-contain"
                      priority
                    />
                  </Link>
                  <button
                    className="p-2 rounded-lg hover:bg-gray-100"
                    onClick={() => setIsOpen(false)}
                  >
                    <X className="h-6 w-6 text-gray-600" />
                  </button>
                </div>
                <div className="flex flex-col space-y-6">
                  <MobileNavLink href="/about" onClick={() => setIsOpen(false)}>
                    About
                  </MobileNavLink>
                  <MobileNavLink
                    href="/projects"
                    onClick={() => setIsOpen(false)}
                  >
                    Projects
                  </MobileNavLink>
                  <MobileNavLink
                    href="/training-events"
                    onClick={() => setIsOpen(false)}
                  >
                    Connect
                  </MobileNavLink>
                  <Select value={theme} onValueChange={handleThemeChange}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sustainable-green">
                        Sustainable Green
                      </SelectItem>
                      <SelectItem value="security-red">Security Red</SelectItem>
                      <SelectItem value="futuristic-purple">
                        Futuristic Purple
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Service Inquiry Form Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-3xl font-bold mb-6">Service Inquiry Form</h2>
        <ServiceInquiryForm />
      </Modal>
    </>
  );
};

const NavLink = ({ href, children }: { href: string; children: string }) => (
  <Link
    href={href}
    className="text-gray-600 hover:text-primary font-medium transition-colors"
  >
    {children}
  </Link>
);

const MobileNavLink = ({
  href,
  children,
  onClick,
}: {
  href: string;
  children: string;
  onClick: () => void;
}) => (
  <Link
    href={href}
    onClick={onClick}
    className="text-lg font-medium text-gray-600 hover:text-primary transition-colors"
  >
    {children}
  </Link>
);

export default Navbar;
