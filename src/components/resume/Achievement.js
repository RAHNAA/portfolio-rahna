import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
  <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
    <p className="text-sm text-designColor tracking-[4px]">2021</p>
    <h2 className="text-3xl md:text-4xl font-bold">Achievements</h2>
  </div>
  <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
    <ResumeCard
      title="Pat on the Back Award"
      subTitle="Recognized for excellence in performance"
      result="Success"
      des="Received multiple 'Pat on the Back' awards over the past 3 years for outstanding contributions and dedication towards project success."
    />
    <ResumeCard
      title="Client Appreciation"
      subTitle="Acknowledged by clients for exceptional service"
      result="Success"
      des="Consistently praised by clients for delivering high-quality solutions and exceeding expectations, resulting in strong long-term relationships."
    />
    <ResumeCard
      title="Top Performer"
      subTitle="Achieved a rating of 4.5/5"
      result="Success"
      des="Awarded a remarkable rating of 4.5/5 for performance in the last 3 years, reflecting commitment to excellence and client satisfaction."
    />
  </div>
</div>

      {/* <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Lorem ipsum dolor sit amet."
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
          <ResumeCard
            title="Lorem ipsum dolor sit amet."
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
          <ResumeCard
            title="Lorem ipsum dolor sit amet."
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
        </div>
      </div> */}
    </motion.div>
  );
};

export default Achievement;
