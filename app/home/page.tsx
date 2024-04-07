import React from "react";
import CheckIn from "@/components/checkIn";
import LastAte from "@/components/lastAte";
import HomeProgress from "@/components/homeProgress";
import BottomPadding from "@/components/meal-logging/bottomPadding";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import { useSession, signIn } from "next-auth/react";

const HomePage = () => {
    return (
      <div className="bg-background min-h-screen">
        <div className="flex justify-center">
          <CheckIn />
        </div>
        <LastAte />
        <div className="flex justify-center">
          <HomeProgress />
        </div>
        <BottomPadding />
      </div>
    );
};

export default HomePage;
