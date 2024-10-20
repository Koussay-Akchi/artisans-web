import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import Avatar01 from "@/public/images/avatar-01.jpg";
import Avatar02 from "@/public/images/avatar-02.jpg";
import Avatar03 from "@/public/images/avatar-03.jpg";
import Avatar04 from "@/public/images/avatar-04.jpg";
import Avatar05 from "@/public/images/avatar-05.jpg";
import Avatar06 from "@/public/images/avatar-06.jpg";

export default function HeroHome() {
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <div
              className="mb-6 border-y [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]"
              data-aos="zoom-y-out"
            >
              <div className="-mx-0.5 flex justify-center -space-x-3">
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar01}
                  width={45}
                  height={45}
                  alt="Avatar 01"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar02}
                  width={45}
                  height={45}
                  alt="Avatar 01"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar03}
                  width={45}
                  height={45}
                  alt="Avatar 02"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar04}
                  width={45}
                  height={45}
                  alt="Avatar 03"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar05}
                  width={45}
                  height={45}
                  alt="Avatar 04"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar06}
                  width={45}
                  height={45}
                  alt="Avatar 05"
                />
              </div>
            </div>
            <h1
              className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              From <span className=" text-pink-500">Women</span> hands to global
              markets. 
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Saluting the spirit of our artisans who weave stories of
                strength and elegance every day.
              </p>
              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a
                    className="btn group mb-4 w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="#0"
                  >
                    <span className="relative inline-flex items-center">
                      View Shop
                    </span>
                  </a>
                  <a
                    className="btn w-full bg-white text-gray-800 shadow hover:bg-gray-50 sm:ml-4 sm:w-auto"
                    href="https://www.facebook.com/profile.php?id=61567228835188"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Hero image */}
          <div
            className="mx-auto max-w-xl"
            data-aos="zoom-y-out"
            data-aos-delay={600}
          >
            <div className="relative aspect-video rounded-lg bg-pink-100 px-3 py-2 shadow-xl before:pointer-events-none before:absolute before:-inset-3 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.pink.300/.8),transparent)1] after:absolute after:-inset-3 after:-z-10 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,theme(colors.pink.300/.8),transparent)1] w-full max-h-40">
              <div className="font-mono text-pink-600 text-sm [&_span]:opacity-0">
                <span className="animate-[code-1_10s_infinite]">
                  Empowering women through community support
                </span>{" "}
                <br />
                <span className="animate-[code-2_10s_infinite]">
                  Collaborating with artisans from local communities
                </span>
                <br />
                <span className="animate-[code-3_10s_infinite]">
                  Fostering leadership and self-reliance
                </span>{" "}
                <br />
                <span className="animate-[code-4_10s_infinite]">
                  Creating lasting social impact.
                </span>
                <br />
                <br />
                <span className="animate-[code-5_10s_infinite] text-pink-700">
                  Supporting women-led businesses
                </span>
                <br />
                <span className="animate-[code-6_10s_infinite]">
                  Building a brighter future together.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
