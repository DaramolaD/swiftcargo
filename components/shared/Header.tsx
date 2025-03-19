import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/icons/SwiftCargo.svg";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/#solutions" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 right-0 left-0 flex w-11/12 bg-white items-center justify-between container mx-auto py-6 px-6 md:px-8 border pr-6 mt-4 rounded-full z-40">
      
      {/* LOGO */}
      <Link href="/">
        <Image src={Logo} alt="swiftcargo_logo" className="w-20 md:w-32" />
      </Link>

      {/* Nav Menu */}
      <nav className="hidden lg:flex gap-10 items-center py-4 px-8 bg-blue-100 rounded-full">
        {navLinks.map(({ name, href }, index) => (
          <Link href={href} key={index} className="text-base">
            {name}
          </Link>
        ))}
      </nav>

      {/* Cta Btn */}
      <div className="hidden lg:flex">
        <Button variant="default" size="lg" className="rounded-full text-base font-medium">
          Login
        </Button>
      </div>

      <div className="flex lg:hidden">
        <Menu  className="text-Dark_One"/>
      </div>
    </header>
  );
};

export default Header;
