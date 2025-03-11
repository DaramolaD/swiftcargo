import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/icons/SwiftCargo.svg";

const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Help Center", href: "/help" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
    ],
  },
  {
    title: "Contact",
    links: [
      { name: "Email Us", href: "mailto:support@example.com" },
      { name: "Call Us", href: "tel:+1234567890" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-Biscay-50 text-white">
      <div className="container mx-auto px-6 py-10 pt-20 flex flex-col gap-12 md:gap-16">
        {/* LOGO */}
        <Link href="/">
          <Image src={Logo} alt="swiftcargo_logo" className="w-32" />
        </Link>

        <div className="grid gap-8 md:grid-cols-3">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 text-lg font-semibold text-Dark_Two">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-Biscay-950 transition-colors hover:underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-700" />

        {/* Footer Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
          </p>
          <nav className="flex gap-4">
            <Link href="/privacy" className="text-Biscay-900 hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-Biscay-900 hover:underline">
              Terms of Service
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
