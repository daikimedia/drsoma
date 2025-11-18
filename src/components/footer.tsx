import React from "react";
import Image from "next/image";
import EmailIcon from "../../public/icons/email_dr_icon.svg";
import PhoneIcon from "../../public/icons/cell_dr_icon.svg";
import YoutubeIcon from "../../public/icons/youtube.svg";
import FacebookIcon from "../../public/icons/facebook.svg";
import InstagramIcon from "../../public/icons/instagram.svg";
import WhatsappIcon from "../../public/icons/whatsapp_icon.svg";
import TiktokIcon from "../../public/icons/tiktok.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="flex w-full">
        <section className="flex w-full bg-black">
          <div className="flex containers w-full">
            <div className="flex w-full flex-col">
              <div className="flex w-full gap-50 lg:gap-[92px] items-center py-50 lg:!flex-nowrap">
                <div className="flex">
                  <Image src="/images/dr_soma_logo.png" alt="Dr. Soma Clinical Aesthetics Logo" width={120} height={120} />
                </div>
                <div className="flex gap-50 lg:gap-[92px] w-full max-w-[934px] justify-start md:justify-center">
                  <div className="flex flex-col gap-10 w-full max-w-[125px]">
                    <h4 className="text-primary">Pages</h4>
                    <div className="flex flex-col gap-[6px]">
                      <Link href={"/"}>
                        <p className="text-para-white opacity-90">Home</p>
                      </Link>
                      <Link href={"/aboutus"}>
                        <p className="text-para-white opacity-90">About</p>
                      </Link>
                      <Link href={"/servicespage"}>
                        <p className="text-para-white opacity-90">Services</p>
                      </Link>
                      <Link href={"/success-stories"}>
                        <p className="text-para-white opacity-90">
                          Success Stories
                        </p>
                      </Link>
                      <Link href={"/blogs"}>
                        <p className="text-para-white opacity-90">Blog</p>
                      </Link>
                      <Link href={"/contact-us"}>
                        <p className="text-para-white opacity-90">Contact</p>
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-col gap-50 lg:gap-20 w-full max-w-[312px]">
                    <div className="flex flex-col gap-10 w-full">
                      <h4 className="text-primary">Business Hours</h4>
                      <div className="flex flex-col gap-[6px]">
                        <p className="text-[#EBEBEB] opacity-90">
                          Mon-Fri: 9am-5pm
                        </p>
                        <p className="text-[#EBEBEB] opacity-90">
                          Sat: 9am-1pm
                        </p>
                        <p className="text-[#EBEBEB] opacity-90">
                          Sunday & Public Holiday: Closed
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-10 w-full">
                      <h4 className="text-primary">Reach Us</h4>
                      <h5 className="text-[#EBEBEB] opacity-90">
                        Klinik Plastic Surgery Soma <br /> 45B, 2nd Floor, Jalan SS15/5A,<br /> 47500, Subang Jaya, Selangor, Malaysia
                      </h5>
                    </div>
                  </div>
                  <div className="flex flex-col gap-50 lg:gap-20 w-full max-w-[312px]">
                    <div className="flex flex-col gap-10 w-full max-w-[313px]">
                      <h4 className="text-primary">Contact Us</h4>
                      <div className="flex flex-col gap-[6px]">
                        <div className="flex gap-x-3 items-center">
                          <div className="flex">
                            <EmailIcon />
                          </div>
                          <p className="text-para-white opacity-90">
                             enquiry.drsoma@gmail.com
                          </p>
                        </div>
                        <div className="flex gap-x-3 items-center">
                          <div className="flex">
                            <PhoneIcon />
                          </div>
                          <p className="text-para-white opacity-90">
                             603 5887 4422
                          </p>
                        </div>
                        <div className="flex gap-x-3 items-center">
                          <div className="flex">
                            <WhatsappIcon />
                          </div>
                          <p className="text-para-white opacity-90">
                            014 261 6007
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-10 w-full max-w-[313px]">
                      <h4 className="text-primary">Follow Us On</h4>
                      <div className="flex gap-15 items-center !flex-nowrap">
                        <a href="https://www.facebook.com/somasurgery" target="_blank" rel="noopener noreferrer" className="flex">
                          <FacebookIcon />
                        </a>
                        <a href="https://www.youtube.com/channel/UCo6puB2cXTvirx0jm_lIOEQ" target="_blank" rel="noopener noreferrer" className="flex">
                          <YoutubeIcon />
                        </a>
                        <a href="https://www.instagram.com/drsomaplasticsurgery/" target="_blank" rel="noopener noreferrer" className="flex">
                          <InstagramIcon />
                        </a>
                        <a href="https://tiktok.com/drsomaplasticsurgery" target="_blank" rel="noopener noreferrer" className="flex">
                          <TiktokIcon />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="flex w-full border border-primary" />
              <div className="flex w-full justify-center py-20">
                <p className="text-[#EBEBEB] opacity-90 text-center">
                  Copyright © 2023. SJ Clinical Aesthetics Sdn Bhd 200401017853 (656356-A).
                  All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
