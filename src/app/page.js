"use client";
export { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

export default function Home() {
  const researchAreas = [
    {
      title: "Post-Quantum Cryptography (PQC) – The Next Era of Security",
      description: "Quantum computers will soon break traditional encryption (RSA, ECC, DH), making Post-Quantum Cryptography (PQC) essential for future cybersecurity. At VCyber Lab, we are at the forefront of designing quantum-resistant cryptographic solutions to secure communications, critical infrastructure, and data integrity.",
      subTopics: [
        { title: "Quantum-Resilient Algorithms", content: "Exploring lattice-based, code-based, and multivariate-based cryptography for future security." },
        { title: "Hybrid Cryptographic Systems", content: "Combining classical and PQC for a smooth transition to quantum-resistant security." },
        { title: "PQC for IoT & Cloud Security", content: "Developing lightweight post-quantum encryption for resource-constrained IoT and cloud environments." },
        { title: "Privacy-Preserving Cryptography", content: "Implementing zero-knowledge proofs, homomorphic encryption, and PQC-secured blockchain for enhanced privacy." },
        { title: "Secure Communication Protocols", content: "Strengthening VPNs, secure messaging, and authentication systems with PQC." },
        { title: "Migration Strategies for PQC", content: "Creating scalable transition plans to help industries move from classical to quantum-safe encryption." }
      ]
    },
    {
      title: "AI-Driven Cybersecurity – Intelligent Threat Detection & Defense",
      description: "Artificial Intelligence is transforming cyber defense mechanisms by enabling predictive threat intelligence, automated security responses, and real-time cyber threat detection.",
      subTopics: [
        { title: "AI-Powered Intrusion Detection Systems (IDS)", content: "Leveraging deep learning and anomaly detection to identify cyber threats in real time." },
        { title: "Self-Adaptive Cyber Defense", content: "Creating autonomous security agents capable of responding dynamically to cyberattacks." },
        { title: "Adversarial AI in Security", content: "Studying adversarial machine learning to strengthen AI-based cybersecurity systems against manipulation." },
        { title: "AI for Malware & Phishing Detection", content: "Training AI models to recognize evolving cyber threats with high precision." },
        { title: "Neural Cryptography & AI-Assisted PQC", content: "Exploring how AI can enhance cryptographic resilience in the quantum era." }
      ]
    },
    {
      title: "IoT & Robotics Security – Safeguarding Autonomous Systems",
      content: "The rapid expansion of IoT and robotics in critical infrastructure, smart cities, and industrial automation presents new cybersecurity risks. VCyber Lab focuses on ensuring secure, resilient, and quantum-safe IoT ecosystems.",
      subTopics: [
        { title: "Post-Quantum IoT Security", content: "Implementing lightweight PQC encryption for smart devices, industrial IoT (IIoT), and healthcare IoT." },
        { title: "AI-Driven Anomaly Detection for IoT", content: "Developing autonomous cybersecurity systems that detect and prevent attacks on IoT networks." },
        { title: "Zero-Trust IoT Architecture", content: "Applying decentralized, identity-based security for IoT and robotic systems." },
        { title: "Cybersecurity for Autonomous Robotics", content: "Enhancing robotic security frameworks to protect against cyber-physical threats." },
        { title: "5G & Edge Security", content: "Securing edge computing environments to prevent IoT-based cyberattacks." }
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
      {/* Hero Section */}
      <section
        className="mx-auto md:px-8 lg:px-16 aspect-[27/9] flex flex-col justify-center items-start relative"
        style={{ backgroundImage: "url('/background.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#000022] text-left leading-tight">
          WELCOME TO THE <span className="text-[#c10000]">VINUNI'S CYBERSECURITY LAB</span>
        </h1>
        
        <motion.p 
          className="mt-6 text-base sm:text-lg text-[#191938]"
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }} 
          viewport={{ once: true }}
        >
          The <span className="text-[#c10000] font-semibold">VCyber Lab</span> at VinUniversity is a cutting-edge research hub dedicated to pioneering advancements in modern cybersecurity, quantum computing, robotics, and artificial intelligence (AI). Our mission is to push the boundaries of cyber defense technologies, developing innovative solutions to tackle the evolving challenges of digital security in the era of quantum computing and AI-driven cyber threats.
        </motion.p>
        
        <motion.p 
          className="mt-4 text-base sm:text-lg text-[#191938]"
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }} 
          viewport={{ once: true }}
        >
          With a strong foundation in cybersecurity research, our lab is actively working on <span className="text-[#c10000] font-semibold">Post-Quantum Cryptography (PQC)</span>—one of the most transformative technologies poised to redefine security in the post-quantum world. We believe that quantum computing’s impact on cybersecurity will be a game-changer, and we are at the forefront of this paradigm shift.
        </motion.p>
        
        <motion.p 
          className="mt-4 text-base sm:text-lg text-[#191938]"
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.4 }} 
          viewport={{ once: true }}
        >
          At <span className="text-[#c10000] font-semibold">VCyber Lab</span>, we aim to become a leading cybersecurity research center, particularly in understanding and mitigating the risks posed by quantum computing on cryptographic systems. Through interdisciplinary collaborations and groundbreaking research, we strive to shape the future of secure computing in the quantum era.
        </motion.p>
      </section>
      <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#191938] text-left leading-tight">
        OUR <span className="text-[#c10000]">RESEARCH</span> FOCUS
      </h1>

      {researchAreas.map((area, index) => (
        <div key={index} className="bg-[#191938] text-white py-4 mb-4 mt-6 p-6 rounded-md">
          <button
            className="w-full text-left flex justify-between items-center text-xl font-semibold"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            {area.title} {openIndex === index ? <FaAngleUp /> : <FaAngleDown />}
          </button>

          <motion.div
            className="overflow-hidden"
            initial={{ height: 0 }}
            animate={{ height: openIndex === index ? "auto" : 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <p className="mt-2">{area.description}</p>

            {area.subTopics.map((sub, subIndex) => (
              <div key={subIndex} className="mt-3 bg-[#32324e] p-5 rounded-md">
                <button
                  className="w-full font-semibold text-left flex justify-between items-center text-lg"
                  onClick={() => toggleSubTopic(`${index}-${subIndex}`)}
                >
                  {sub.title} {openSubIndexes.has(`${index}-${subIndex}`) ? <FaAngleUp /> : <FaAngleDown />}
                </button>

                <motion.div
                  className="overflow-hidden"
                  initial={{ height: 0 }}
                  animate={{ height: openSubIndexes.has(`${index}-${subIndex}`) ? "auto" : 0 }}
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
