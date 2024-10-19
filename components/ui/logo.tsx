import Link from "next/link";
import Image from "next/image";
import Logo01 from "@/public/images/logo.png";
export default function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="Cruip">
        <Image
          className="relative"
          src={Logo01}
          width={32}
          height={32}
          alt="Logo 01"
        />
    </Link>
  );
}
