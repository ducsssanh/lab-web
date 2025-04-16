"use client";
export { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

export default function Home() {
  const researchAreas = [
    {
      title: "Computation: Algorithms for Reasoning AI",
      description: "We develop novel algorithms to emulate reasoning through symbolic and neural integration.",
      subTopics: [
        { title: "Neuro-Symbolic Integration", content: "Develop hybrid models that combine neural networks with symbolic reasoning to enhance interpretability and logical inference capabilities." },
        { title: "Chain-of-Thought and Algorithm of Thoughts (AoT)", content: "Implement advanced reasoning techniques like Chain-of-Thought prompting and AoT to improve step-by-step problem-solving in AI models." },
        { title: "Reinforcement Learning for Logical Reasoning", content: "Apply reinforcement learning to train AI systems that can reason through complex tasks, improving decision-making accuracy over time." }
      ]
    },
    {
      title: "Software: Platforms for Reasoning AI",
      description: "We design platforms and tools that bring explainable reasoning into modern software ecosystems.",
      subTopics: [
        { title: "Distributed Reasoning Frameworks", content: "Design software architectures that support distributed reasoning across multiple AI agents, enabling collaborative problem-solving." },
        { title: "Explainability and Transparency Tools", content: "Develop tools that provide insights into AI decision-making processes, enhancing trust and accountability in reasoning systems." },
        { title: "Integration with Existing Systems", content: "Create middleware solutions that allow seamless integration of reasoning AI capabilities into current enterprise software ecosystems." }
      ]
    },
    {
      title: "Hardware: Architectures Supporting Reasoning AI",
      description: "Building efficient and scalable infrastructures that enable real-time, reasoning-based AI.",
      subTopics: [
        { title: "AI Accelerators Optimized for Reasoning Tasks", content: "Design specialized hardware accelerators that efficiently handle the computational demands of reasoning algorithms." },
        { title: "Edge Computing for Real-Time Reasoning", content: "Develop low-power, high-performance hardware solutions enabling reasoning AI applications on edge devices for real-time decision-making." },
        { title: "Scalable Infrastructure for Training Reasoning Models", content: "Build scalable and energy-efficient infrastructure to support the training and deployment of large-scale reasoning AI models." }
      ]
    },
    {
      title: "Applications: Cybersecurity and Threat Detection",
      description: "Using reasoning AI to enhance threat detection and response strategies.",
      subTopics: [
        { title: "Anomaly Detection Beyond Signatures", content: "Use logic-based AI models to infer unusual system behaviors that evade traditional signature-based detection." },
        { title: "Adaptive Threat Response", content: "Integrate reasoning engines with policy rules to deduce the most effective, real-time mitigation strategies." },
        { title: "Security Policy Verification", content: "Apply formal reasoning to verify access-control logic, configuration correctness, and policy enforcement across systems." }
      ]
    },
    {
      title: "Applications: Scientific Computing",
      description: "Applying reasoning AI to accelerate discovery and insight in scientific domains.",
      subTopics: [
        { title: "Hypothesis Generation from Data", content: "Enable machines to form logical hypotheses by reasoning over complex datasets, supporting scientific research and validation." },
        { title: "Symbolic Simulations", content: "Incorporate symbolic reasoning into simulations to ensure consistency with scientific laws and known constraints." },
        { title: "Automation of Experimental Design", content: "Use reasoning AI to optimize experimental workflows, suggesting configurations that reduce trial-and-error." }
      ]
    },
    {
      title: "Applications: Autonomous Systems and Robotics",
      description: "Equipping autonomous agents with structured reasoning for complex environments.",
      subTopics: [
        { title: "Decision-Making Under Uncertainty", content: "Use logic and probabilistic reasoning to navigate incomplete information and dynamically adapt behavior." },
        { title: "Task Planning and Execution", content: "Apply symbolic reasoning to break down complex tasks into executable actions in real-world environments." },
        { title: "Human-AI Interaction", content: "Enable robots to reason about human intentions and goals for more intuitive collaboration." }
      ]
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const [openSubIndexes, setOpenSubIndexes] = useState(new Set());

  const toggleSubTopic = (subIndex) => {
    setOpenSubIndexes((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(subIndex)) {
        newSet.delete(subIndex);
      } else {
        newSet.add(subIndex);
      }
      return newSet;
    });
  };

  return (
    <div className="text-left">
      <section
        className="mx-auto md:px-8 lg:px-16 aspect-[27/9] flex flex-col justify-center items-start relative"
        style={{ backgroundImage: "url('/background.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#000022] text-left leading-tight">
          WELCOME TO THE <span className="text-[#c10000]">VINUNI'S CYBER-REASONING LAB</span>
        </h1>

        <motion.p className="mt-6 text-base sm:text-lg text-[#191938]" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          At <span className="text-[#c10000] font-semibold">VCyber</span>, we are pioneering a new paradigm in artificial intelligence—developing systems that not only process data but also reason, deduce, and make informed decisions. While current trends in Large Language Models have overemphasized their statistical fluency, they often lack true reasoning capabilities—leading to unreliable outputs and hallucinated results. Our mission is to invent alternative AI models and algorithms that emulate human-like reasoning and enable them to solve complex challenges across engineering physics and system design with optimized efficiency.
        </motion.p>

        <motion.p className="mt-4 text-base sm:text-lg text-[#191938]" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}>
          Our interdisciplinary team, including backgrounds from computer science, electrical engineering, and applied mathematics, is dedicated to developing AI models that emulate human-like reasoning. By enforcing symbolic logic in a machine learning framework, we aim to create AI solutions capable of tackling complex, real-world problems with transparency and efficiency. Our research spans from foundational algorithm development to practical applications, all centered around enhancing the reasoning capabilities of AI systems.
        </motion.p>

        <motion.p className="mt-4 text-base sm:text-lg text-[#191938]" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} viewport={{ once: true }}>
          By focusing on reasoning capabilities, we aim to push the boundaries of what AI can achieve, ensuring that our systems are not only intelligent but also trustworthy and adaptable to the ever-evolving technological landscape.
        </motion.p>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#191938] text-left leading-tight">
          OUR <span className="text-[#c10000]">RESEARCH</span> FOCUS
        </h1>

        {researchAreas.map((area, index) => (
          <div key={index} className="bg-[#191938] text-white py-4 mb-4 mt-6 p-6 rounded-md">
            <button className="w-full text-left flex justify-between items-center text-xl font-semibold" onClick={() => setOpenIndex(openIndex === index ? null : index)}>
              {area.title} {openIndex === index ? <FaAngleUp /> : <FaAngleDown />}
            </button>

            <motion.div className="overflow-hidden" initial={{ height: 0 }} animate={{ height: openIndex === index ? "auto" : 0 }} transition={{ duration: 0.4, ease: "easeInOut" }}>
              <p className="mt-2">{area.description}</p>

              {area.subTopics.map((sub, subIndex) => (
                <div key={subIndex} className="mt-3 bg-[#32324e] p-5 rounded-md">
                  <button className="w-full font-semibold text-left flex justify-between items-center text-lg" onClick={() => toggleSubTopic(`${index}-${subIndex}`)}>
                    {sub.title} {openSubIndexes.has(`${index}-${subIndex}`) ? <FaAngleUp /> : <FaAngleDown />}
                  </button>

                  <motion.div className="overflow-hidden" initial={{ height: 0 }} animate={{ height: openSubIndexes.has(`${index}-${subIndex}`) ? "auto" : 0 }} transition={{ duration: 0.3, ease: "easeInOut" }}>
                    <p className="mt-2">{sub.content}</p>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>
        ))}
      </section>
    </div>
  );
}
