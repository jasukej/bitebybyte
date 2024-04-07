import React from "react";
import CheckIn from "@/components/checkIn";
import LastAte from "@/components/lastAte";
import HomeProgress from "@/components/homeProgress";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const HomePage = () => {
  return (

    <div className="bg-background min-h-screen">
      <div className="pt-10 mb-6 px-4">
        <h1 className="text-5xl ml-4 font-bold font-serif">
          Hey Glen!
        </h1>
      </div>
      <CheckIn />
      <LastAte />
      <HomeProgress />
    </div>
  );
};

export default HomePage;
