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
      <div className="container mx-auto px-6 py-10">

        {/* LOGO */}
      <Link href="/">
        <Image src={Logo} alt="swiftcargo_logo" className="w-32" />
      </Link>

        <div className="grid gap-8 md:grid-cols-3">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 text-lg font-semibold">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
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
          <p className="text-sm">&copy; {new Date().getFullYear()} YourCompany. All rights reserved.</p>
          <nav className="flex gap-4">
            <Link href="/privacy" className="text-gray-400 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white">
              Terms of Service
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer