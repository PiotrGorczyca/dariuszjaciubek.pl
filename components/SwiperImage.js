import React from "react";
import Image from "next/image";

export const SwiperImage = ({ itemLogo }) => {
  const imagePath = `/img/logotypes/${itemLogo}`;
  return (
    <div className="relative py-10">
      <Image src={imagePath} layout="fill" objectFit="contain" className="max-w-[5rem]" />
    </div>
  );
};
