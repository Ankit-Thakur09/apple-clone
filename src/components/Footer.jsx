import React from 'react'
import {footerLinks} from "../constants/index"
const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-[#86868b]   text-xs">
            More ways to shop:{" "}
            <span className="underline text-[#2997FF]">
              Find the Apple Store{" "}
            </span>
            or{" "}
            <span className="underline text-[#2997FF]">
              Find the other retailer{" "}
            </span>
            near you. Or call 1-800-MY-APPLE.
          </p>
          <p className="font-semibold text-[#86868b]   text-xs">
            Or call 1-800-0001-9999.
          </p>
        </div>
        <div className="bg-neutral-700 my-5 h-[1px] w-full" />
        <div className="flex justify-between flex-col md:flex-row md:items-center ">
          <p className="font-semibold text-[#86868b]   text-xs">
            {" "}
            Copyright @2025 Apple Inc. All rights reserved.
          </p>
          <div className="flex">
            {footerLinks.map((link, index) => (
              <p key={link} className="font-semibold text-[#86868b]   text-xs">
                {link}{" "}
                {index !== footerLinks.length - 1 && (
                  <span className="mx-2">|</span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer