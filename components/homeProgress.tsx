import React from "react";
import Clock from "react-live-clock";
import Image from "next/image";
import { mealLogData } from '@/app/lib/data';
import { LiaLinkSolid } from "react-icons/lia";

interface MealLogEntry {
    mealType: string;
    date: string;
    mealContent: string;
    moodTags: string[];
    reflection: string;
  }

  interface MealLogDataProps {
    mealLogData: MealLogEntry[];
  }

export default function HomeProgress() {
  return (
    <section id="homeProgress">
      <div className="bg-accent-1 p-8 mx-8 shadow-lg rounded-md border border-primary w-fit">
        <div
          className="text-white font-sans font-normal
        mb-4 text-xl flex flex-col gap-y-4"
        >
          <h1>Your Progress</h1>
          <div className="flex flex-col text-black gap-y-[10px]">
            <div className="flex flex-row gap-x-[10px]">
              <MealHighlight />
              <div className="flex flex-col max-w-[8rem] gap-y-[10px]">
                <ClockObj />
                <FeelingsToday />
              </div>
            </div>
            <div className="flex flex-row gap-x-[10px]">
              <MealsEaten />
              <DaysLogged />
              <ChatsMade />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MealHighlight() {
  return (
    <div>
      <div className="bg-white text-black border border-black p-6 max-w-[314px] flex flex-col gap-y-1">
        <div className="max-h-[7rem] max-w-[12rem] rounded-md">
          <Image
            src="/bulgogi_sample.jpeg"
            alt="Nasi Goreng"
            className="h-full w-full cover rounded-sm border border-black"
            width={300}
            height={300}
          />
        </div>
        <p className="text-sm font-sans mt-6">
          <span className="block bg-gradient-r bg-primary text-white w-fit px-4 py-1 rounded-full">
            12:16 PM | WED
          </span>
        </p>
        <h3 className="text-lg font-bold font-sans">
          Egg and Beef Bulgogi @ Nom Nom
        </h3>
        <p className="text-sm font-sans mt-2">your meal highlight</p>
      </div>
    </div>
  );
}

function ClockObj() {
  return (
    // <Clock
    //     format={'HH:mm'}
    //     ticking={true}
    //     timezone={'US/Pacific'} />
    <div className="flex text-sm border min-h-[3rem] border-black bg-white flex-row justify-center items-center">
      BITE BY BYTE
    </div>
  );
}

function FeelingsToday() {
  return (
    <div className="bg-white border border-black p-4 px-3 min-h-[251px]">
      <p className="text-sm font-sans mb-2">Today, you felt...</p>
      <div>
      <UniqueMoodTags mealLogData={mealLogData}/>
      </div>
    </div>
  );
}

export function UniqueMoodTags({ mealLogData }: MealLogDataProps) {

    const allMoodTags = mealLogData.flatMap(log => log.moodTags);
  
    // Remove duplicates by converting the array into a Set, then back into an array
    const uniqueMoodTags: string[] = [...new Set(allMoodTags)];
  
    return (
      <div className="flex flex-wrap">
        {uniqueMoodTags.slice(0, 4).map((item, index) => (
          <div
            className="bg-primary/[0.7] px-3  m-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
            key={index}
          >
            {item}
          </div>
        ))}
      </div>
    );
  };

function MealsEaten() {
  return (
    <div className="border-black border w-[9rem] h-[9rem] bg-white">
      <div className="flex flex-col gap-y-4 items-baseline p-3 relative mt-4">
        <h2 className="text-7xl font-bold font-serif">96</h2>
        <p className="font-sans-serif text-sm font-normal">MEALS EATEN</p>
      </div>
    </div>
  );
}

function DaysLogged() {
  return (
    <div className="border-black border w-[9rem] h-[9rem] bg-white">
      <div className="flex flex-col gap-y-4 items-baseline p-3 relative mt-4">
        <h2 className="text-7xl font-bold font-serif">23</h2>
        <p className="font-sans-serif text-sm font-normal">DAYS LOGGED</p>
      </div>
    </div>
  );
}

function ChatsMade() {
  return (
    <div className="border-black border w-[9rem] h-[9rem] bg-white">
      <div className="flex flex-col gap-y-4 items-baseline p-3 relative mt-4">
        <h2 className="text-7xl font-bold font-serif">5</h2>
        <p className="font-sans-serif text-sm font-normal">CHATS MADE</p>
      </div>
    </div>
  );
}
