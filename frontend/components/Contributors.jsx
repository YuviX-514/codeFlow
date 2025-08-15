"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip.jsx";
const people = [
  {
    id: 1,
    name: "Samman Varshney",
    designation: "Founder & CEO",
    image: "/images/samman.jpg", 
  },
  {
    id: 2,
    name: "Yuvraj Singh",
    designation: "Frontend Developer",
    image: "/images/yuvi.jpg",
  },
  {
    id: 3,
    name: "Yash Bansal",
    designation: "Backend Developer",
    image: "/images/yash.jpg",
  },
  {
    id: 4,
    name: "Ritik Saxena",
    designation: "LLM Engineer",
    image: "/images/ritik.jpg",
  },
];


export default function Contributors() {
  return (
    <div className="flex flex-row items-center justify-center mb-20 w-full size-7">
      <AnimatedTooltip items={people} />
    </div>
  );
}
