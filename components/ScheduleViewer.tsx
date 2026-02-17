import React, { useState } from 'react';
import { ScheduleItem } from '../types';

const BUILDERS_SCHEDULE: ScheduleItem[] = [
  { time: "15:00 - 15:30", monday: "Arrival & Snack", tuesday: "Arrival & Snack", wednesday: "Arrival & Snack", thursday: "Arrival & Snack", friday: "Arrival & Snack" },
  { time: "15:30 - 16:30", monday: "Academic Support (Math/Science)", tuesday: "Academic Support (Reading/Writing)", wednesday: "Academic Support (Goal-Setting)", thursday: "Academic Support (Review/Prep)", friday: "Academic Support (Flexible)" },
  { time: "16:30 - 17:00", monday: "Structured Physical (Movement)", tuesday: "Structured Physical (Coordination)", wednesday: "Structured Physical (Play)", thursday: "Structured Physical (Fitness)", friday: "Structured Physical (Tumbling)" },
  { time: "17:00 - 18:00", monday: "Life Skills Workshop", tuesday: "Life Skills Workshop", wednesday: "Life Skills Workshop", thursday: "Life Skills Workshop", friday: "Life Skills Workshop" },
  { time: "18:00 - 18:45", monday: "Dinner & Reading", tuesday: "Dinner & Creative Play", wednesday: "Dinner & Social Time", thursday: "Dinner & Quiet Games", friday: "Dinner & Review" },
];

const CREATORS_SCHEDULE: ScheduleItem[] = [
  { time: "15:00 - 15:30", monday: "Arrival & Snack", tuesday: "Arrival & Snack", wednesday: "Arrival & Snack", thursday: "Arrival & Snack", friday: "Arrival & Snack" },
  { time: "15:30 - 16:30", monday: "Academic Autonomy & Peer Tutoring", tuesday: "Leadership Prep", wednesday: "Exam Strategy", thursday: "Skill Practice", friday: "Portfolio Review" },
  { time: "16:30 - 17:00", monday: "Adv. Physical Discipline", tuesday: "Adv. Physical Discipline", wednesday: "Adv. Physical Discipline", thursday: "Adv. Physical Discipline", friday: "Adv. Physical Discipline" },
  { time: "17:00 - 18:00", monday: "Entrepreneurship Project", tuesday: "Entrepreneurship Project", wednesday: "Entrepreneurship Project", thursday: "Entrepreneurship Project", friday: "Entrepreneurship Project" },
  { time: "18:00 - 19:00", monday: "Dinner & Networking", tuesday: "Dinner & Networking", wednesday: "Dinner & Networking", thursday: "Dinner & Networking", friday: "Dinner & Networking" },
];

const ScheduleViewer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'builders' | 'creators'>('builders');

  const schedule = activeTab === 'builders' ? BUILDERS_SCHEDULE : CREATORS_SCHEDULE;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
      <div className="flex border-b border-slate-200">
        <button
          onClick={() => setActiveTab('builders')}
          className={`flex-1 py-4 text-center font-bold text-lg transition-colors ${
            activeTab === 'builders' 
              ? 'bg-brand-navy text-white' 
              : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
          }`}
        >
          Builders (Ages 11-14)
        </button>
        <button
          onClick={() => setActiveTab('creators')}
          className={`flex-1 py-4 text-center font-bold text-lg transition-colors ${
            activeTab === 'creators' 
              ? 'bg-brand-navy text-white' 
              : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
          }`}
        >
          Creators (Ages 15-17)
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 text-slate-600 text-sm uppercase tracking-wider">
              <th className="p-4 border-b border-slate-200">Time</th>
              <th className="p-4 border-b border-slate-200">Monday</th>
              <th className="p-4 border-b border-slate-200">Tuesday</th>
              <th className="p-4 border-b border-slate-200">Wednesday</th>
              <th className="p-4 border-b border-slate-200">Thursday</th>
              <th className="p-4 border-b border-slate-200">Friday</th>
            </tr>
          </thead>
          <tbody className="text-slate-700 text-sm">
            {schedule.map((slot, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                <td className="p-4 font-semibold text-brand-navy whitespace-nowrap border-b border-slate-100">{slot.time}</td>
                <td className="p-4 border-b border-slate-100">{slot.monday}</td>
                <td className="p-4 border-b border-slate-100">{slot.tuesday}</td>
                <td className="p-4 border-b border-slate-100">{slot.wednesday}</td>
                <td className="p-4 border-b border-slate-100">{slot.thursday}</td>
                <td className="p-4 border-b border-slate-100">{slot.friday}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScheduleViewer;
