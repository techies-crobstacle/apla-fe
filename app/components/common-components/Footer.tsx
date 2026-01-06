
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
export default function Page() {
  return (
    <section className="bg-[#440C03] text-white px-20 py-16 h-151 flex flex-col"> 
      {/* Top Main Section */}
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Left Section */}
        <div className="flex gap-16">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="flex flex-col w-72">
              <h1 className="mb-5 text-lg font-semibold">Heading</h1>
              <p className="mb-1">Page Title</p>
              <p className="mb-1">Page Title</p>
              <p className="mb-1">Page Title</p>
              <p className="mb-1">Page Title</p>
              <p className="mb-1">Page Title</p>
            </div>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex-1">
          <h1 className="mb-5 text-lg font-semibold">Heading</h1>

          <p className="mb-8 max-w-md">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>

          <div className="bg-[#A48068] px-4 py-3 flex items-center gap-3 rounded-full max-w-md">
            <input
              type="text"
              placeholder="Enter Email here"
              className="bg-transparent outline-none text-white placeholder-white flex-1"
            />
            <FaEnvelope className="w-5 h-5 text-black" />
          </div>
        </div>
      </div>

      {/* Address Section */}
      <div className="mt-16 flex flex-col md:flex-row justify-between gap-6 mb-10">
        <p>12 Shelley Street, Sydney, NSW 2000, Australia.</p>
        <p>© 2026 Arhem Land Marketplace. All rights reserved.</p>
      </div>

      <div className="flex justify-end mb-4">
        <Image src="/images/paypal.png" width={100} height={100} alt="Paypal" />
      </div>
      <hr className="text-[#A5816B] mb-5" />
        {/* Logo and Social icons..... */}

<div className="flex items-center justify-between">
  {/* Logo */}
  <Image
    src="/images/navbarLogo.png"
    height={100}
    width={100}
    alt="Logo"
  />

  {/* Social icons */}
  <div className="flex items-center gap-4">
    <Link href="https://www.instagram.com" target="_blank" aria-label="Instagram">
      <FaInstagram className="w-5 h-5 text-white cursor-pointer hover:opacity-80" />
    </Link>

    <Link href="https://www.facebook.com" target="_blank" aria-label="Facebook">
      <FaFacebookF className="w-5 h-5 text-white cursor-pointer hover:opacity-80" />
    </Link>

    <Link href="https://www.linkedin.com" target="_blank" aria-label="LinkedIn">
      <FaLinkedinIn className="w-5 h-5 text-white cursor-pointer hover:opacity-80" />
    </Link>

    <Link href="https://www.youtube.com" target="_blank" aria-label="YouTube">
      <FaYoutube className="w-5 h-5 text-white cursor-pointer hover:opacity-80" />
    </Link>

    <Link href="https://x.com" target="_blank" aria-label="X (Twitter)">
      <FaXTwitter className="w-5 h-5 text-white cursor-pointer hover:opacity-80" />
    </Link>
  </div>
</div>


    </section>
  );
}
