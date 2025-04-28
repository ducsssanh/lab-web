"use client";
export { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

export default function Home() {
  const researchAreas = [
    {
      title: "Cryptography: Post-Quantum Cryptography (PQC)",
      description:
        "We are at the forefront of Post-Quantum Cryptography (PQC) research, developing robust cryptographic primitives and protocols designed to remain secure against quantum adversaries. As classical cryptographic systems become vulnerable to quantum algorithms (e.g., Shor’s algorithm), our mission is to engineer lightweight, practical, and scalable solutions for next-generation secure infrastructures.",
      subTopics: [
        {
          title: "	Lightweight PQC Protocols for IoT and Embedded Systems",
          content:
            "We focus on optimizing post-quantum algorithms for constrained environments, including low-power IoT devices and embedded systems where computational and memory resources are limited.",
        },
        {
          title: "	Quantum-Resistant Secure Communication Frameworks",
          content:
            "We design and evaluate end-to-end secure communication protocols, integrating lattice-based, code-based, and multivariate cryptographic schemes tailored for future networks, including 5G/6G and satellite communications.",
        },
        {
          title: "	Standardization and Practical Deployment of PQC Algorithms",
          content:
            "Our team contributes to PQC standardization efforts and investigates practical challenges such as key management, certificate infrastructure adaptation, and hybrid cryptographic systems combining classical and quantum-safe mechanisms.",
        },
      ],
    },
    {
      title: "AI Applications Across Domains",
      description:
        "Beyond cybersecurity, we explore cutting-edge applications of AI across critical sectors, aiming to enhance system performance, optimize decision-making, and unlock new scientific and engineering frontiers.",
      subTopics: [
        {
          title: "AI for Scientific Computing",
          content:
            "Develop and deploy machine learning algorithms to accelerate scientific simulations, optimize complex system designs, and enable predictive modeling in physics, engineering, and environmental science.",
        },
        {
          title: "Autonomous Systems and Robotics Intelligence",
          content:
            "Design AI models for perception, reasoning, planning, and control, empowering autonomous systems — from aerial drones to ground robots — to operate effectively in complex, uncertain, and adversarial environments.",
        },
        {
          title: "AI-Driven Environmental Monitoring and Prediction",
          content:
            "Apply deep learning, time-series analysis, and anomaly detection to analyze environmental sensor data, predict pollution trends, and support smart urban management initiatives.",
        },
        {
          title: "AI for Threat Intelligence and Cyber Defense Automation",
          content:
            "Automate the collection, processing, and analysis of cyber threat intelligence; deploy AI agents capable of autonomously predicting, preventing, and responding to sophisticated attacks across enterprise and national cyber infrastructures.",
        },
        {
          title: "Secure and Trustworthy AI Systems",
          content:
            "Engineer AI architectures that prioritize robustness, interpretability, fairness, and accountability, ensuring that AI systems deployed in critical sectors operate transparently and resist both accidental failure and malicious exploitation.",
        },
        {
          title: "AI at the Edge for IoT Systems",
          content:
            "Develop lightweight AI models optimized for edge devices, enabling real-time local decision-making, anomaly detection, and energy-efficient operation across massive, distributed IoT deployments.",
        },
        {
          title: "Human-AI Collaboration and Reasoning Support",
          content:
            "Investigate methods to enhance human decision-making through AI-assisted reasoning, explanation generation, and intelligent recommendation systems, especially in complex cybersecurity and system operations environments.",
        },
      ],
    },
    {
      title: "Hardware: Architectures Supporting Reasoning AI",
      description:
        "Building efficient and scalable infrastructures that enable real-time, reasoning-based AI.",
      subTopics: [
        {
          title: "AI Accelerators Optimized for Reasoning Tasks",
          content:
            "Design specialized hardware accelerators that efficiently handle the computational demands of reasoning algorithms.",
        },
        {
          title: "Edge Computing for Real-Time Reasoning",
          content:
            "Develop low-power, high-performance hardware solutions enabling reasoning AI applications on edge devices for real-time decision-making.",
        },
        {
          title: "Scalable Infrastructure for Training Reasoning Models",
          content:
            "Build scalable and energy-efficient infrastructure to support the training and deployment of large-scale reasoning AI models.",
        },
      ],
    },
    {
      title: "AI for Cybersecurity",
      description:
        "Our research leverages artificial intelligence to transform cybersecurity from a reactive practice into a proactive, autonomous defense mechanism. By focusing on AI tailored specifically for cybersecurity, we aim to create intelligent systems that can reason, adapt, and defend against emerging and evolving threats.",
      subTopics: [
        {
          title: "AI-Based Intrusion Detection and Threat Hunting",
          content:
            "Develop machine learning models capable of identifying novel attacks, including zero-day exploits, ransomware activities, and insider threats, across cloud, edge, and enterprise environments.",
        },
        {
          title: "Adversarial Robustness and AI Security Hardening",
          content:
            "Investigate vulnerabilities of AI systems against adversarial examples and poisoning attacks; propose defensive techniques to ensure reliability under adversarial conditions.",
        },
        {
          title: "Explainable and Trustworthy AI in Cybersecurity",
          content:
            "Focus on making cybersecurity-focused AI systems interpretable and accountable, ensuring security analysts can trust and validate AI-driven decisions in critical threat response scenarios.",
        },
        {
          title: "Autonomous Incident Response Systems",
          content:
            "Design AI agents capable of autonomously analyzing security incidents and recommending or executing containment, eradication, and recovery procedures.",
        },
      ],
    },
    {
      title: "Cybersecurity for Robotics and Autonomous Systems",
      description:
        "Autonomous robotic systems, from self-driving vehicles to industrial robots, introduce complex attack surfaces. We aim to develop comprehensive cybersecurity frameworks that protect robotic agents operating in contested and dynamic environments.",
      subTopics: [
        {
          title: " Robotic Threat Modeling and Attack Surface Analysis",
          content:
            "Systematically map and categorize potential cyber threats unique to robotic systems, from sensor spoofing to control system hijacking.",
        },
        {
          title: " Secure Perception, Planning, and Control Layers",
          content:
            "Research techniques to safeguard critical robotic modules, ensuring that data fusion, navigation planning, and actuation pipelines are resilient to malicious interference.",
        },
        {
          title: " Cryptographic and Network Security for Multi-Robot Systems",
          content:
            "Design lightweight, real-time cryptographic solutions for secure inter-robot communication, ensuring integrity and confidentiality in collaborative missions.",
        },
        {
          title: " Resilient Autonomy under Adversarial Conditions",
          content:
            "Develop fail-safe behaviors and recovery strategies that allow robots to maintain operational capabilities even under cyber attack.",
        },
      ],
    },
    {
      title: "IoT Security and Smart Sensing Systems",
      description:
        "As the number of connected devices skyrockets, so do the risks. Our research into IoT Security focuses on designing resilient, scalable, and efficient security frameworks tailored for heterogeneous, dynamic IoT environments.",
      subTopics: [
        {
          title: " Secure and Scalable IoT Network Architectures",
          content:
            "Architect dynamic trust management systems, secure boot processes, firmware integrity verification, and distributed ledger technologies for device authentication and lifecycle management.",
        },
        {
          title: " Edge AI Security",
          content:
            "Integrate lightweight AI models on IoT edge devices to enable real-time anomaly detection and predictive threat identification without reliance on centralized cloud services.",
        },
        {
          title: " Privacy-Preserving Data Collection and Aggregation",
          content:
            "Develop federated learning and encrypted aggregation protocols to protect sensitive data in distributed IoT ecosystems, while still enabling effective model training and inference.",
        },
        {
          title: " End-to-End Secure Communication Protocols for IoT",
          content:
            "Adapt and deploy quantum-resistant cryptographic primitives for ensuring confidentiality, integrity, and availability across constrained networks.",
        },
      ],
    },
    {
      title: "Environmental Monitoring: Smart Air Quality Systems",
      description:
        "Air quality has a direct impact on public health and environmental sustainability. We integrate hardware, software, communication protocols, AI analytics, cybersecurity, and IoT innovations to develop advanced air quality monitoring platforms.",
      subTopics: [
        {
          title: " Development of Low-Cost, High-Accuracy Sensor Systems",
          content:
            "Engineer multi-sensor nodes capable of measuring PM2.5, PM10, NO2, SO2, O3, CO, and volatile organic compounds, optimized for power efficiency and long-term deployment.",
        },
        {
          title: " Mobile and Distributed Sensing Platforms",
          content:
            "Implement flexible architectures that combine static stations with mobile sensors deployed on vehicles, drones, and public transportation systems, enabling dynamic, high-resolution environmental mapping.",
        },
        {
          title: " AI-Enhanced Pollution Detection and Forecasting",
          content:
            "Use deep learning and statistical models to predict air quality trends, identify pollution hotspots, and provide actionable insights for policymakers and urban planners.",
        },
        {
          title:
            " Secure Data Transmission and Tamper-Proof Monitoring Systems",
          content:
            "Ensure the integrity and authenticity of environmental data streams using cryptographic techniques and blockchain-based audit trails to prevent falsification or unauthorized tampering.",
        },
        {
          title:
            " Interoperable Communication Standards for Environmental IoT",
          content:
            "Explore LoRaWAN, NB-IoT, and emerging ultra-low-power communication protocols to connect widespread sensor deployments securely and efficiently.",
        },
      ],
    },
    {
      title: "Smart City and Industry 4.0",
      description:
        "The future of urban living and industrial production is being transformed by digitalization, automation, and intelligent data systems. We integrate cybersecurity, artificial intelligence, IoT innovations, and post-quantum cryptography to design secure, resilient, and efficient ecosystems for Smart Cities and Industry 4.0 environments.",
      subTopics: [
        {
          title: " Cyber-Resilient Smart Infrastructures",
          content:
            "Develop secure frameworks for smart grids, transportation networks, healthcare systems, and public services, ensuring continuous and safe operation even under cyber-physical attacks.",
        },
        {
          title: " AI-Driven Urban Intelligence and Automation",
          content:
            "Apply machine learning and edge AI to optimize traffic flow, resource management, public services, and environmental monitoring, enabling real-time, adaptive city operations while safeguarding privacy.",
        },
        {
          title: " Industrial IoT and Autonomous System Security",
          content:
            "Engineer end-to-end protection for connected factories, logistics chains, and industrial control systems, embedding PQC and AI-based anomaly detection into critical automation layers.",
        },
        {
          title: " Secure Digital Twin Platforms and Predictive Maintenance",
          content:
            "Create secure digital twins for real-time simulation, monitoring, and predictive maintenance of urban and industrial assets, enhancing operational efficiency while minimizing vulnerabilities.",
        },
        {
          title: " Trusted Data Management and Privacy Protection",
          content:
            "Design privacy-preserving data exchange protocols and trusted identity frameworks to maintain citizen trust, corporate confidentiality, and regulatory compliance in smart environments.",
        },
      ],
    },
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
        style={{
          backgroundImage: "url('/background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></section>

      <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#000022] text-left leading-tight">
          WELCOME TO{" "}
          <span className="text-[#c10000]">VINUNI&apos;S RESEARCH LAB</span> FOR{" "}
          <span className="text-[#c10000]">CYBERSECURITY, AI,</span> AND{" "}
          <span className="text-[#c10000]">POST-QUANTUM CRYPTOGRAPHY</span>
        </h1>

        <motion.p
          className="mt-6 text-base sm:text-lg text-[#191938]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          At <span className="text-[#c10000] font-semibold">VCyber</span>, led
          by a team of experts specializing in{" "}
          <span className="text-[#c10000] font-semibold">
            Cybersecurity, Artificial Intelligence
          </span>
          , and{" "}
          <span className="text-[#c10000] font-semibold">
            Post-Quantum Cryptography (PQC)
          </span>
          , we are shaping the next generation of secure, intelligent systems.
          With deep expertise at the intersection of cryptography, AI reasoning,
          and cybersecurity architecture, we are pioneering innovative solutions
          to tackle emerging threats in the quantum and AI-driven era. In a time
          when traditional security models are being outpaced by the advances in
          quantum computing and intelligent attacks, our mission is to engineer
          <span className="text-[#c10000] font-semibold">
            quantum-resilient, AI-empowered
          </span>
          , and{" "}
          <span className="text-[#c10000] font-semibold">trustworthy</span>{" "}
          technologies. We develop cutting-edge PQC algorithms, AI systems
          specialized for cybersecurity, and secure IoT architectures that
          protect critical infrastructure, autonomous systems, smart cities, and
          environmental sensing platforms.
        </motion.p>

        <motion.p
          className="mt-4 text-base sm:text-lg text-[#191938]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Our interdisciplinary team, built upon strong foundations in{" "}
          <span className="text-[#c10000] font-semibold">
            computer science, electrical engineering, applied cryptography,
            robotic security, smart sensing,
          </span>{" "}
          and{" "}
          <span className="text-[#c10000] font-semibold">
            urban digitalization
          </span>
          , is committed to solving the world&apos;s most pressing technological
          challenges. Through focused research on{" "}
          <span className="text-[#c10000] font-semibold">
            Post-Quantum Cryptography, AI for Cyber Defense, Cybersecurity for
            Robotics, IoT-based Smart Environmental Monitoring
          </span>
          , and{" "}
          <span className="text-[#c10000] font-semibold">
            Smart City and Industry 4.0 Security
          </span>
          , we deliver practical, scalable solutions that ensure resilience,
          transparency, and security at every layer.
        </motion.p>

        <motion.p
          className="mt-4 text-base sm:text-lg text-[#191938]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          By combining expert knowledge across cybersecurity, AI, and PQC, we
          push the boundaries of what future technologies can achieve — ensuring
          that innovation remains{" "}
          <span className="text-[#c10000] font-semibold">
            secure, ethical, and trustworthy
          </span>{" "}
          in an increasingly interconnected world.
        </motion.p>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#191938] text-left leading-tight">
          OUR <span className="text-[#c10000]">RESEARCH</span> FOCUS
        </h1>

        {researchAreas.map((area, index) => (
          <div
            key={index}
            className="bg-[#191938] text-white py-4 mb-4 mt-6 p-6 rounded-md"
          >
            <button
              className="w-full text-left flex justify-between items-center text-xl font-semibold"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {area.title}{" "}
              {openIndex === index ? <FaAngleUp /> : <FaAngleDown />}
            </button>

            <motion.div
              className="overflow-hidden"
              initial={{ height: 0 }}
              animate={{ height: openIndex === index ? "auto" : 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <p className="mt-2">{area.description}</p>

              {area.subTopics.map((sub, subIndex) => (
                <div
                  key={subIndex}
                  className="mt-3 bg-[#32324e] p-5 rounded-md"
                >
                  <button
                    className="w-full font-semibold text-left flex justify-between items-center text-lg"
                    onClick={() => toggleSubTopic(`${index}-${subIndex}`)}
                  >
                    {sub.title}{" "}
                    {openSubIndexes.has(`${index}-${subIndex}`) ? (
                      <FaAngleUp />
                    ) : (
                      <FaAngleDown />
                    )}
                  </button>

                  <motion.div
                    className="overflow-hidden"
                    initial={{ height: 0 }}
                    animate={{
                      height: openSubIndexes.has(`${index}-${subIndex}`)
                        ? "auto"
                        : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
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
