import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import Marquee from "../Marquee";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="border-t border-primary/20 font-sans">
      <Marquee />
      <div className="max-w-7xl mx-auto py-16 px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full text-center">
          {/* Company Info */}
          <div className="space-y-6 mx-auto md:mx-0 md:text-left">
            <Link href="/" className="text-xl font-bold text-primary">
              {/* <Image
                src="/euclid.png"
                alt="EUCLID Logo"
                width={120}
                height={40}
                className="object-contain"
                priority
              /> */}
              EUCLUID
            </Link>
            <p className="text-secondary-foreground">
              Pioneering ethical blockchain solutions for a secure, sustainable
              future.
            </p>
            {/* <div className="flex space-x-4">
              <SocialLink href="#" aria-label="LinkedIn">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </SocialLink>
              <SocialLink href="#" aria-label="Twitter">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </SocialLink>
            </div> */}
          </div>

          {/* Quick Links */}
          <div className="mx-auto md:mx-0 md:text-left">
            <h3 className="text-sm font-semibold text-gray-900 uppercase mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4">
              <FooterLink href="/about">About</FooterLink>
              <FooterLink href="/projects">Projects</FooterLink>
              <FooterLink href="/achievements">Achievements</FooterLink>
              <FooterLink href="/training-events">Training & Events</FooterLink>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="mx-auto md:mx-0 md:text-left">
            <h3 className="text-sm font-semibold text-gray-900 uppercase mb-6">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <p className="text-secondary-foreground">
                  Somaiya Vidyavihar University
                  <br />
                  Mumbai, Maharashtra
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <a
                  href="mailto:info@euclid.edu"
                  className="text-secondary-foreground hover:text-secondary"
                >
                  info@euclid.edu
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <a
                  href="tel:+911234567890"
                  className="text-secondary-foreground hover:text-secondary"
                >
                  +91 123 456 7890
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary/20 w-full text-center">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} EUCLID. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children }: { href: string; children: string }) => (
  <li>
    <Link
      href={href}
      className="text-secondary-foreground hover:text-secondary transition-colors"
    >
      {children}
    </Link>
  </li>
);

// const SocialLink = ({ href, children, ...props }) => (
//   <a href={href} className="text-primary hover:text-secondary transition-colors" {...props}>
//     {children}
//   </a>
// )

export default Footer;
