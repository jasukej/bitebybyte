'use client';

import React from 'react'
import BottomPadding from '@/components/meal-logging/bottomPadding'

import { useRouter } from 'next/navigation';
import { mealLogData } from '@/app/lib/data'; 
import { format } from 'date-fns';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';

export default function FoodDiary() {

    type MealType = 'breakfast' | 'lunch' | 'dinner' | 'snack';

  const router = useRouter();

  const mealTypeColors: { [key in MealType]: string } = {
    breakfast: 'bg-yellow-choice',
    lunch: 'bg-green-choice',
    dinner: 'bg-blue-choice',
    snack: 'bg-red-choice',
  };

  return (
    <div className="container ">
        <div className="mb-6 min-w-full">
            <div className="text-white bg-primary py-2 flex-row">
            <button
            onClick={() => router.push("/home")}
            className="text-sm py-2 px-4">
            Back
            </button>

            <div className="text-xl font-semibold text-center mb-4">Food Diary</div>
            </div>
      </div>
    
        <div className="flex justify-center">
      <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
      }}
    >

      {mealLogData.map((log, index) => (

        <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
        <span className="text-md font-light">{format(new Date(log.date), 'hh:mm a')}</span>
        </TimelineOppositeContent>
        <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>

        <div key={index} className="mb-8 p-4 max-w-[30rem] rounded shadow-lg bg-white">
          <div className="flex items-center justify-between mb-4">
            <span className={`px-3 py-1 text-sm rounded-full text-black ${mealTypeColors[log.mealType as MealType]} border border-black`}>
              {log.mealType.toUpperCase()}
            </span>
          </div>
          <div className="mb-2">
            <div className="text-xl font-semibold mb-1 font-serif">{log.mealContent}</div>
            <div className="text-gray-500 italic">I felt very {log.moodTags.join(' and ')}.</div>
          </div>
          <p className="text-gray-700">{log.reflection}</p>
        </div>
        </TimelineContent>
        </TimelineItem>
      ))}
      </Timeline>
      </div>
      <BottomPadding />
    </div>
  );
};
