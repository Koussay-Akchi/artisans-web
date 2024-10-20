"use client";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import ProductService from "@/services/ProductService";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
const test = async () => {
  const response = await ProductService.getProductsList();
  console.log(response.data);
}

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });

    test();
  });

  return (
    <>
      <Header />

      <main className="grow">{children}</main>

      <Footer border={true} />
    </>
  );
}
