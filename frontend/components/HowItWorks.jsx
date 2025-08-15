"use client";

import { motion } from "framer-motion";
import { FileText, LayoutGrid, Code2, GitBranch, TestTube2, Rocket } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const workflowSteps = [
  { icon: <FileText className="h-5 w-5" />, title: "Describe Your Project", desc: "Explain what you're building in plain English", phase: "Planning" },
  { icon: <LayoutGrid className="h-5 w-5" />, title: "Get AI-Generated Flowchart", desc: "Visual breakdown of development phases", phase: "Planning" },
  { icon: <Code2 className="h-5 w-5" />, title: "Review Tech Stack", desc: "With explanations for each choice", phase: "Planning" },
  { icon: <GitBranch className="h-5 w-5" />, title: "Start Coding", desc: "With built-in documentation prompts", phase: "Execution" },
  { icon: <TestTube2 className="h-5 w-5" />, title: "Test & Refactor", desc: "Automated quality checks and suggestions", phase: "Execution" },
  { icon: <Rocket className="h-5 w-5" />, title: "Deploy & Iterate", desc: "Preview environments for early feedback", phase: "Execution" },
];

export default function HowItWorks() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 -z-10 bg-[url('/grid.svg')] bg-[size:100px_100px] opacity-5" />

      <div className="container px-4 mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            A streamlined process from idea to production-ready implementation
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className={`absolute top-0 w-0.5 h-full bg-gradient-to-b ${hasAnimated ? 'from-purple-500 via-pink-500 to-transparent' : 'from-transparent to-transparent'} left-6 md:left-1/2 md:-translate-x-1/2 transition-all duration-1000`} />

          {workflowSteps.map((step, index) => (
            <div
              key={index}
              className={`relative mb-12 last:mb-0 flex flex-col md:flex-row ${index % 2 === 0 ? "items-start" : "items-start md:flex-row-reverse"}`}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-5 w-3 h-3 rounded-full bg-purple-500 z-10">
                {hasAnimated && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring" }}
                    className="absolute inset-0 rounded-full bg-purple-500"
                  />
                )}
              </div>

              {/* Icon */}
              <div className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gray-900 border border-gray-800 shadow-sm z-10 mb-4 md:mb-0 ${index % 2 === 0 ? 'md:mr-6' : 'md:ml-6'}`}>
                {hasAnimated ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-purple-400"
                  >
                    {step.icon}
                  </motion.div>
                ) : (
                  <div className="text-purple-400">{step.icon}</div>
                )}
              </div>

              {/* Step card */}
              <div className={`relative flex-1 w-full md:w-auto ${index % 2 === 0 ? 'md:mr-16' : 'md:ml-16'}`}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="relative h-full bg-gray-900/80 border border-gray-800 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-200"
                >
                  <div className="flex items-center gap-3 mb-3 flex-wrap">
                    <span className="text-xs font-medium py-1 px-2 rounded-full bg-purple-900/30 text-purple-300">
                      Step {index + 1}
                    </span>
                    <span className="text-sm font-medium text-gray-500">
                      {step.phase}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">{step.desc}</p>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
