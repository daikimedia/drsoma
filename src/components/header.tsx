import React, { useState } from "react";
import Image from "next/image";
import ClockIcon from "../../public/icons/clock_icon.svg";
import MenuIcon from "../../public/icons/menu_icon.svg";
import MenuCloseIcon from "../../public/icons/menu_close.svg";
// import MenuLogoIcon from "../../public/icons/menu_logo.svg";
import { useRouter } from "next/router";
import Link from "next/link";

const Header = () => {
  const router = useRouter();

  const linkClasses = (path: string) =>
    `input hover:text-primary text-para-white ${
      router.pathname === path ? "text-primary" : ""
    }`;

  const [sideNavOpened, setSideNavOpened] = useState(false);
  const handleSideNav = () => {
    setSideNavOpened(!sideNavOpened);
  };

  return (
    <>
      <header className="flex flex-col w-full">
        <section>
          <div className="flex containers w-full">
            <div className="lg:flex hidden w-full justify-between gap-30 py-[7px]">
              <h5 className="text-header-black">
                Where Aesthetic Treatments meet Scientific Evidence
              </h5>
              <div className="flex gap-10 items-center">
                <div className="flex">
                  <ClockIcon />
                </div>
                <h5 className="text-header-black">
                  9am-5pm (Mon-Fri) / 9am-1pm (Sat)
                </h5>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-black py-20">
          <div className="flex containers w-full">
            <div className="flex w-full justify-between gap-30 items-center">
              <div className="flex">
                <Image src="/images/dr_soma_logo.png" alt="Dr. Soma Clinical Aesthetics Logo" width={120} height={120} />
              </div>
              <div className="lg:flex hidden gap-40 items-center">
                <Link href={"/"}>
                  <h5 className={linkClasses("/")}>Home</h5>
                </Link>
                <Link href={"/aboutus"}>
                  <h5 className={linkClasses("/aboutus")}>About</h5>
                </Link>
                <Link href={"/servicespage"}>
                  <h5 className={linkClasses("/servicespage")}>Services</h5>
                </Link>
                <Link href={"/success-stories"}>
                  <h5 className={linkClasses("/success-stories")}>
                    Success Stories
                  </h5>
                </Link>
                <Link href={"/blog"}>
                  <h5 className={linkClasses("/blog")}>Blog</h5>
                </Link>
                <Link href={"/contact-us"}>
                  <h5 className={linkClasses("/contact-us")}>Contact</h5>
                </Link>
              </div>
              <div
                className="flex lg:hidden cursor-pointer active:scale-[.97] stroke-white"
                onClick={handleSideNav}
              >
                <MenuIcon />
              </div>
            </div>
          </div>
        </section>
      </header>

      <div
        className={`flex z-50 place-content-start fixed top-0 left-0 gap-30 max-w-[320px] w-full h-screen bg-black shadow-card pt-45 pb-20 min-[1100px]:lg:hidden -translate-x-[calc(100%+40px)] transition-all [&.opened]:translate-x-0 ${
          sideNavOpened && "opened"
        }`}
      >
        <div className="flex flex-col gap-20 w-full">
          <div className="flex w-full justify-between items-center px-30">
            <div className="flex">
              <Image src="/images/dr_soma_logo.png" alt="Dr. Soma Clinical Aesthetics Logo" width={120} height={120} />
            </div>
            <div className="flex cursor-pointer p-10" onClick={handleSideNav}>
              <MenuCloseIcon />
            </div>
          </div>
          <hr className="w-full border border-[#3D3D3D]" />
        </div>

        <div className="flex flex-col w-full gap-[40px] px-30">
          <Link href={"/"} onClick={handleSideNav}>
            <h5 className={linkClasses("/")}>Home</h5>
          </Link>
          <Link href={"/aboutus"} onClick={handleSideNav}>
            <h5 className={linkClasses("/aboutus")}>About</h5>
          </Link>
          <Link href={"/servicespage"} onClick={handleSideNav}>
            <h5 className={linkClasses("/servicespage")}>Services</h5>
          </Link>
          <Link href={"/success-stories"} onClick={handleSideNav}>
            <h5 className={linkClasses("/success-stories")}>Success Stories</h5>
          </Link>
          <Link href={"/blog"} onClick={handleSideNav}>
            <h5 className={linkClasses("/blog")}>Blog</h5>
          </Link>
          <Link href={"/contact-us"} onClick={handleSideNav}>
            <h5 className={linkClasses("/contact-us")}>Contact</h5>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
