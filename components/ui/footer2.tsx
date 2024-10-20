import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";
import Logo from "./logo";

export default function Footer2() {
  return (
    <footer className="bg-pink-900 text-pink-100 py-6 px-4 mt-32">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="mb-4 sm:mb-0 flex gap-4">
          <p className="text-lg font-semibold">Connect with us</p>{" "}
          <div className="space-y-2 sm:col-span-12 lg:col-span-4 -mt-1">
            <div>
              <Logo />
            </div>
          </div>
        </div>

        <div className="flex space-x-4">
          <Link
            href="https://www.facebook.com/profile.php?id=61567228835188"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <span className="sr-only">Facebook</span>
            <Facebook className="w-6 h-6" />
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <span className="sr-only">Instagram</span>
            <Instagram className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
