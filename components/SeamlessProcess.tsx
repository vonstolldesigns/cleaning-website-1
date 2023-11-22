// components/SeamlessProcess.tsx
import React from "react";
import ProcessStep from "./ProcessStep";

// Replace these with your actual icons
const BookingIcon = () => <div>Booking Icon</div>;
const CleaningIcon = () => <div>Cleaning Icon</div>;
const RelaxingIcon = () => <div>Relaxing Icon</div>;

const SeamlessProcess: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 my-24">
      <h2 className="heading1 text-center text-gray-800 mb-6">
        Our Seamless <span className="text-orange">Cleaning Process</span>
      </h2>
      <p className="text-center paragraph-regular">
        At Crisp Cleaning Corporation, we believe in simplifying your life
        through our seamless process.
      </p>
      <div className="flex justify-around items-start my-16">
        <ProcessStep
          icon={<BookingIcon />}
          title="Booking"
          description="Simply tell us your preferences, select a date and time that suits you."
          showLine
        />
        <ProcessStep
          icon={<CleaningIcon />}
          title="Cleaning"
          description="We take pride in not only meeting but exceeding your expectations."
          showLine
        />
        <ProcessStep
          icon={<RelaxingIcon />}
          title="Relaxing"
          description="Kick back, enjoy the cleanliness, and savor your newfound free time."
        />
      </div>
    </div>
  );
};

export default SeamlessProcess;
