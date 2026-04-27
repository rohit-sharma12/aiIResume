import React, { useState } from "react";

const data = {
  matchScore: 85,

  technicalQuestions: [
    {
      question: "How do you optimize a slow MongoDB query?",
      intention: "Evaluate DB optimization skills.",
      answer:
        "Use explain(), indexes, avoid full collection scan, and optimize aggregation.",
    },
  ],

  behavioralQuestions: [
    {
      question: "Describe a time you solved a challenging bug.",
      intention: "Test problem-solving ability.",
      answer: "Used logs, debugging tools, and fixed a race condition.",
    },
  ],

  preparationPlan: [
    {
      day: 1,
      focus: "Node.js Internals & Streams",
      tasks: [
        "Deep dive into the Event Loop phases and process.nextTick vs setImmediate.",
        "Practice implementing Node.js Streams for handling large data sets.",
      ],
    },
    {
      day: 2,
      focus: "Advanced MongoDB & Indexing",
      tasks: [
        "Study Compound Indexes, TTL Indexes, and Text Indexes.",
        "Practice writing complex Aggregation pipelines and using the .explain('executionStats') method.",
      ],
    },
    {
      day: 3,
      focus: "Caching & Redis Strategies",
      tasks: [
        "Read about Redis data types beyond strings (Sets, Hashes, Sorted Sets).",
        "Implement a Redis-based rate limiter or a caching layer for a sample API.",
      ],
    },
    {
      day: 4,
      focus: "System Design & Microservices",
      tasks: [
        "Study Microservices communication patterns (Synchronous vs Asynchronous).",
        "Learn about the API Gateway pattern and Circuit Breakers.",
      ],
    },
    {
      day: 5,
      focus: "Message Queues & DevOps Basics",
      tasks: [
        "Watch introductory tutorials on RabbitMQ or Kafka.",
        "Dockerize a project and write a simple GitHub Actions workflow for CI.",
      ],
    },
    {
      day: 6,
      focus: "Data Structures & Algorithms",
      tasks: [
        "Solve 5–10 Medium LeetCode problems focusing on Arrays, Strings, and Hash Maps.",
        "Review common sorting and searching algorithms.",
      ],
    },
    {
      day: 7,
      focus: "Mock Interview & Project Review",
      tasks: [
        "Conduct a mock interview focusing on explaining the Real-time Chat Application architecture.",
        "Review all previous topics and note down any weak areas for final revision.",
      ],
    },
  ],

  skillGaps: [
    { skill: "System Design", severity: "high" },
    { skill: "Docker", severity: "medium" },
    { skill: "Redis", severity: "low" },
  ],
};

const Interview = () => {
  const [active, setActive] = useState("roadmap");

  return (
    <div className="min-h-screen bg-[#0b1220] text-white flex">

      {/* SIDEBAR */}
      <div className="w-64 bg-[#0f172a] border-r border-gray-800 p-6 flex flex-col justify-between">
        <div>
          <ul className="space-y-3">
            <li
              onClick={() => setActive("technical")}
              className={`cursor-pointer px-3 py-2 rounded ${active === "technical"
                ? "bg-purple-600/20 text-purple-400"
                : "text-gray-400"
                }`}
            >
              Technical Questions
            </li>
            <li
              onClick={() => setActive("behavioral")}
              className={`cursor-pointer px-3 py-2 rounded ${active === "behavioral"
                ? "bg-purple-600/20 text-purple-400"
                : "text-gray-400"
                }`}
            >
              Behavioral Questions
            </li>
            <li
              onClick={() => setActive("roadmap")}
              className={`cursor-pointer px-3 py-2 rounded ${active === "roadmap"
                ? "bg-purple-600/20 text-purple-400"
                : "text-gray-400"
                }`}
            >
              Roadmaps
            </li>
          </ul>
        </div>
      </div>

      {/* MAIN */}
      <div className="flex-1 p-8 flex gap-6">

        {/* CENTER CONTENT */}
        <div className="flex-1 overflow-y-auto">

          {/* ROADMAP */}
          {active === "roadmap" && (
            <>
              {/* Header */}
              <div className="flex items-center gap-3 mb-8">
                <h2 className="text-2xl font-semibold">Preparation Road Map</h2>
                <span className="text-xs text-gray-400 border border-gray-700 rounded-full px-3 py-1">
                  7-day plan
                </span>
              </div>

              {/* Timeline */}
              <div className="relative">
                {/* Vertical dashed line */}
                <div
                  className="absolute left-[11px] top-4 bottom-4 w-px"
                  style={{
                    background:
                      "repeating-linear-gradient(to bottom, #e53e3e 0px, #e53e3e 6px, transparent 6px, transparent 12px)",
                    opacity: 0.5,
                  }}
                />

                <div className="space-y-8">
                  {data.preparationPlan.map((item) => (
                    <div key={item.day} className="relative flex gap-6 pl-2">
                      {/* Circle node */}
                      <div className="relative z-10 flex-shrink-0 mt-0.5">
                        <div
                          className="w-6 h-6 rounded-full border-2 border-red-500 bg-[#0b1220]"
                          style={{ boxShadow: "0 0 0 3px rgba(229,62,62,0.15)" }}
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1 pb-2">
                        <div className="flex items-center gap-3 mb-2">
                          {/* Day badge */}
                          <span className="text-xs font-bold bg-red-600 text-white rounded-full px-3 py-0.5 whitespace-nowrap">
                            Day {item.day}
                          </span>
                          <h3 className="text-base font-semibold text-white">
                            {item.focus}
                          </h3>
                        </div>

                        {/* Task bullets */}
                        <ul className="space-y-1 ml-1">
                          {item.tasks.map((task, ti) => (
                            <li
                              key={ti}
                              className="flex gap-2 text-sm text-gray-400"
                            >
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-600 flex-shrink-0" />
                              {task}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* TECHNICAL */}
          {active === "technical" && (
            <>
              <h2 className="text-2xl font-semibold mb-6">Technical Questions</h2>
              {data.technicalQuestions.map((q, i) => (
                <div
                  key={i}
                  className="bg-[#111827] border border-gray-800 rounded-xl p-6 mb-4"
                >
                  <h3 className="text-lg font-semibold mb-4">{q.question}</h3>
                  <p className="text-purple-400 text-sm font-semibold">INTENTION</p>
                  <p className="text-gray-400 mb-4">{q.intention}</p>
                  <p className="text-green-400 text-sm font-semibold">MODEL ANSWER</p>
                  <p className="text-gray-300">{q.answer}</p>
                </div>
              ))}
            </>
          )}

          {/* BEHAVIORAL */}
          {active === "behavioral" && (
            <>
              <h2 className="text-2xl font-semibold mb-6">Behavioral Questions</h2>
              {data.behavioralQuestions.map((q, i) => (
                <div
                  key={i}
                  className="bg-[#111827] border border-gray-800 rounded-xl p-6 mb-4"
                >
                  <h3 className="text-lg font-semibold mb-4">{q.question}</h3>
                  <p className="text-purple-400 text-sm font-semibold">INTENTION</p>
                  <p className="text-gray-400 mb-4">{q.intention}</p>
                  <p className="text-green-400 text-sm font-semibold">MODEL ANSWER</p>
                  <p className="text-gray-300">{q.answer}</p>
                </div>
              ))}
            </>
          )}
        </div>

        {/* RIGHT PANEL */}
        <div className="w-80 space-y-6">

          {/* MATCH SCORE */}
          <div className="bg-[#111827] border border-gray-800 rounded-xl p-6 text-center">
            <h3 className="text-gray-400 text-sm mb-4">MATCH SCORE</h3>
            <div className="w-28 h-28 mx-auto rounded-full border-4 border-purple-500 flex items-center justify-center text-2xl font-bold">
              {data.matchScore}%
            </div>
            <p className="text-purple-400 mt-3 text-sm">Strong match profile</p>
          </div>

          {/* SKILL GAPS */}
          <div className="bg-[#111827] border border-gray-800 rounded-xl p-6">
            <h3 className="text-gray-400 text-sm mb-4">SKILL GAPS</h3>
            <div className="space-y-3">
              {data.skillGaps.map((gap, i) => (
                <div
                  key={i}
                  className="bg-purple-500/10 text-purple-300 px-3 py-2 rounded text-sm"
                >
                  {gap.skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interview;