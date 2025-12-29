import React, { useState, useEffect } from "react";
import BaseImage from "@/components/BaseImage";
import MenuIcon from "../../public/icons/menu_icon.svg";
import MenuCloseIcon from "../../public/icons/menu_close.svg";
import { useRouter } from "next/router";
import Link from "next/link";

const Header = () => {
  const router = useRouter();
  const [sideNavOpened, setSideNavOpened] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClasses = (path: string) =>
    `relative text-[15px] font-medium tracking-wide transition-all duration-300 hover:text-primary ${
      router.pathname === path ? "text-primary" : scrolled ? "text-white" : "text-black"
    }`;

  const mobileLinkClasses = (path: string) =>
    `text-[18px] font-medium tracking-wide transition-all duration-300 ${
      router.pathname === path ? "text-primary" : "text-white/80 hover:text-white"
    }`;

  const handleSideNav = () => {
    setSideNavOpened(!sideNavOpened);
  };

  useEffect(() => {
    setSideNavOpened(false);
  }, [router.pathname]);

  const bookingLink = "https://wa.me/60142616007?text=Hi%2C%20I%20would%20like%20to%20book%20a%20consultation.";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-black shadow-lg shadow-black/20" : "bg-white shadow-md"
        }`}
      >
        <div className="containers px-[30px]">
          <div className="flex flex-nowrap items-center justify-between h-[80px] lg:h-[90px]">
            <Link href="/" className="flex-shrink-0 transition-transform duration-300 hover:scale-105">
              <BaseImage src="/images/dr_soma_logo.png" alt="Dr. Soma Clinical Aesthetics Logo" width={80} height={80} className="w-[65px] h-[65px] lg:w-[75px] lg:h-[75px]" />
            </Link>
            <nav className="hidden lg:flex items-center justify-center flex-1 px-10">
              <div className="flex flex-nowrap items-center gap-[50px]">
                <Link href="/about-dr-soma"><span className={linkClasses("/about-dr-soma")}>About</span></Link>
                <Link href="/servicespage"><span className={linkClasses("/servicespage")}>Services</span></Link>
                <Link href="/blogs"><span className={linkClasses("/blogs")}>Blog</span></Link>
                <Link href="/contact-us"><span className={linkClasses("/contact-us")}>Contact</span></Link>
              </div>
            </nav>
            <div className="hidden lg:flex items-center flex-shrink-0">
              <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center gap-2 px-6 py-3 bg-primary text-white text-[14px] font-bold uppercase tracking-wider rounded-sm overflow-hidden transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30">
                <span className="relative z-10">Book Consultation</span>
                <svg className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-[#ff7a4d] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
            <button className={`flex lg:hidden items-center justify-center w-10 h-10 transition-transform duration-300 active:scale-95 ${scrolled ? "text-white" : "text-black"}`} onClick={handleSideNav} aria-label="Toggle menu"><MenuIcon className="w-6 h-6" /></button>
          </div>
        </div>
      </header>
      <div className="h-[80px] lg:h-[90px]"></div>
      <div className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] lg:hidden transition-opacity duration-300 ${sideNavOpened ? "opacity-100 visible" : "opacity-0 invisible"}`} onClick={handleSideNav}></div>
      <div className={`fixed top-0 left-0 z-[70] flex flex-col w-[300px] max-w-[85vw] h-screen bg-gradient-to-b from-black to-[#0a0a0a] lg:hidden transition-transform duration-500 ease-out ${sideNavOpened ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex flex-nowrap items-center justify-between p-6 border-b border-white/10">
          <Link href="/" onClick={handleSideNav}><BaseImage src="/images/dr_soma_logo.png" alt="Dr. Soma Clinical Aesthetics Logo" width={60} height={60} /></Link>
          <button className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 text-white transition-all duration-300 hover:bg-white/10 active:scale-95" onClick={handleSideNav} aria-label="Close menu"><MenuCloseIcon className="w-5 h-5" /></button>
        </div>
        <nav className="flex flex-col flex-1 p-6 pt-10">
          <div className="flex flex-col gap-8">
            <Link href="/about-dr-soma" onClick={handleSideNav}><span className={mobileLinkClasses("/about-dr-soma")}>About</span></Link>
            <Link href="/servicespage" onClick={handleSideNav}><span className={mobileLinkClasses("/servicespage")}>Services</span></Link>
            <Link href="/blogs" onClick={handleSideNav}><span className={mobileLinkClasses("/blogs")}>Blog</span></Link>
            <Link href="/contact-us" onClick={handleSideNav}><span className={mobileLinkClasses("/contact-us")}>Contact</span></Link>
          </div>
          <div className="mt-auto pb-8">
            <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="flex flex-nowrap items-center justify-center gap-2 w-full px-6 py-4 bg-primary text-white text-[14px] font-bold uppercase tracking-wider rounded-sm transition-all duration-300 hover:bg-primary/90" onClick={handleSideNav}>
              <span>Book Consultation</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>
        </nav>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-[#ff7a4d] to-primary opacity-50"></div>
      </div>
    </>
  );
};

export default Header;
