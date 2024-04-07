"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ImSpoonKnife } from "react-icons/im";
import { MdOutlineTouchApp } from "react-icons/md";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { IoChatboxOutline } from "react-icons/io5";
import { LuHeartHandshake } from "react-icons/lu";
import { FormData } from "@/app/lib/types";
import LogMealForm from "./meal-logging/logMealForm";
import { useRouter } from "next/navigation";

export default function CheckIn() {
  const [isLoggingMeal, setIsLoggingMeal] = useState(false);

  const startLoggingMeal = () => {
    setIsLoggingMeal(true);
  };

  const closeForm = () => {
    setIsLoggingMeal(false);
  };

  const router = useRouter();
  return (
    <section id="checkIn">
      <div className="pt-10 mb-6 px-4">
        <h1 className="text-5xl ml-4 font-bold font-serif">Hey Glen!</h1>
      </div>
      <div className="mx-8 flex flex-col gap-y-2 max-w-[45rem]">
        <h3 className="text-lg">Check In</h3>
        <div className="grid grid-cols-2 gap-4 mb-6 px-4 py-6 rounded-md shadow-lg bg-white border">
          <button
            onClick={() => router.push("/log-meal")}
            className="flex flex-row gap-x-12 rounded bg-yellow-choice py-4 font-normal px-6 border border-black hover:bg-white active:bg-accent-1"
          >
            <div className="flex items-center gap-x-[1.5rem]">
              <div className="h-[40px] border border-black w-[40px] rounded-full bg-white">
                <ImSpoonKnife className="text-2xl absolute mx-2 my-2" />
              </div>
              <div className="text-lg">Log a Meal</div>
            </div>
          </button>
          {isLoggingMeal && (
            <LogMealForm
              isOpen={isLoggingMeal}
              onClose={closeForm}
              onCancel={closeForm}
            />
          )}

          <button className="flex flex-row gap-x-12 rounded bg-red-choice py-4 font-normal px-6 border border-black hover:bg-white active:bg-accent-1">
            <div className="flex items-center gap-x-[1.5rem]">
              <div className="h-[40px] border border-black w-[40px] rounded-full bg-white">
                <LuHeartHandshake className="text-2xl absolute mx-2 my-2" />
              </div>
              <div className="text-lg">Community</div>
            </div>
          </button>

          <button
            className="flex flex-row gap-x-12 rounded bg-green-choice py-4 font-normal px-6 border border-black hover:bg-white active:bg-accent-1"
            onClick={() => router.push("/chat")}
          >
            <div className="flex items-center gap-x-[1.5rem]">
              <div className="h-[40px] border border-black w-[40px] rounded-full bg-white">
                <IoChatboxOutline className="text-2xl absolute mx-2 my-2" />
              </div>
              <div className="text-lg">Chat</div>
            </div>
          </button>

          <button
            className="flex flex-row gap-x-12 rounded bg-blue-choice py-4 font-normal px-6 border border-black hover:bg-white active:bg-accent-1"
            onClick={() => router.push("/food-diary")}
          >
            <div className="flex items-center gap-x-[1.5rem]">
              <div className="h-[40px] border border-black w-[40px] rounded-full bg-white">
                <BsFillJournalBookmarkFill className="text-xl absolute mx-2 my-2" />
              </div>
              <div className="text-lg">Food Diary</div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
