import React from "react";
import Image from "next/image";

function LastAte() {
  return (
    <div className="bg-primary text-background shadow flex flex-row gap-x-6 px-24 mb-6 py-6 items-center">
      <div className="h-[7rem] w-[7rem] rounded-md">
        <Image 
        src="/nasgor_sample.jpeg" 
        alt="Nasi Goreng"
        className="h-full w-full cover rounded-sm border border-black"
        width={300}
        height={300} />
      </div>
      <div className="flex-col gap-y-1">
        <p className="text-2xl font-bold font-serif">You last ate</p>
        <span className="text-md font-sans">Nasi Goreng @ Feast</span> <span className="text-md font-sans">[ 6 hours ago ]</span>
        <p className="text-sm font-sans">
          You felt <span className="font-bold">happy</span> and <span className="font-bold">nostalgic</span> eating this. 
        </p>
      </div>
    </div>
  );
}

export default LastAte;
