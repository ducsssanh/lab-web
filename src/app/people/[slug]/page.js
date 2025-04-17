"use client";

import { usePathname } from 'next/navigation';
import Image from 'next/image';

/*
  NOTE:  This file is **auto‑generated** from the latest People[Vu‑Anh updates].docx
  All biographical texts are kept verbatim (only markdown formatting removed) so that
  no information is lost, as requested.
*/

const teamMembers = {
  // ────────────────────────────────────────────────────────────────────────────
  //  Core Lab Leadership
  // ────────────────────────────────────────────────────────────────────────────
  'dr-dinh-duc-nha-nguyen': {
    name: 'Dr. Dinh Duc Nha Nguyen',
    position: 'Principal Investigator, Founder | Assistant Professor, VinUniversity',
    imageUrl: '/people/nha.jpg',
    website: 'https://ndducnha.github.io/my-website/',
    description: `Dr. Dinh Duc Nha Nguyen is the Principal Investigator and Founder of **VCyber Lab** at VinUniversity, specialising in **Post‑Quantum Cryptography (PQC)**, **AI‑driven cybersecurity**, and **IoT & robotic security**.

His research focuses on developing next‑generation cryptographic solutions, AI‑powered cyber‑defence systems, and quantum‑resilient security frameworks to address the evolving challenges of quantum computing, AI‑driven cyber threats, and IoT vulnerabilities.

Dr. Nguyen has extensive academic and industry experience, publishing in top‑tier security venues and collaborating with partners to advance quantum‑safe cryptography, intelligent security automation, and AI‑driven threat detection. His contributions span securing next‑generation networks, enhancing privacy‑preserving cryptography, and building autonomous cybersecurity solutions.

Beyond academia, Dr. Nguyen is **Expert Advisor for PSI Testing & Certification (Vietnam)**, providing guidance on cybersecurity compliance, risk assessment, and secure system integration for electrical‑electronic industries. He is passionate about mentoring interdisciplinary teams and driving innovation in PQC, AI‑enhanced defence mechanisms, and IoT security.`,
  },

  // ────────────────────────────────────────────────────────────────────────────
  //  Graduate Researchers & Research Scientists
  // ────────────────────────────────────────────────────────────────────────────
  'van-dong-bui': {
    name: 'Van Dong Bui (Will Bui)',
    position: 'Graduate Researcher',
    imageUrl: '/people/will_bui.jpeg',
    description: `Van Dong Bui is a Graduate Researcher at VCyber Lab specialising in **cyber threat intelligence, OSINT, penetration testing, and digital risk protection**. With years of experience across governmental and private sectors, he has actively fought cyber‑criminal actors through consulting, red‑team assessments, and digital forensics.

• **Previous roles**: Senior Cybersecurity Analyst at Lynden Group; Investigator at Group‑IB safeguarding banks and crypto platforms; Cybercrime Investigator for law‑enforcement solving 200+ cases.
• **Education**: M.S. in Cyber Security Analysis (Macquarie University, Australia); B.S. in Cyber Crime Investigation (People’s Police Academy, Vietnam).
• **Highlights**: Top 1 % hacking player on TryHackMe; founder of *Take Them Down* non‑profit protecting Vietnamese users.

At VCyber Lab he builds reasoning‑augmented threat‑intel pipelines, red‑team simulation tooling, and logic‑driven fraud detection.`,
  },

  'mai-do-thi-ngoc': {
    name: 'Mai Do Thi Ngoc (Mia Do)',
    position: 'Graduate Researcher',
    imageUrl: '/people/MiaDo.jpg',
    description: `Mai Do is a Graduate Researcher with **14 years of experience** in telecommunications, software engineering, and cybersecurity. Her focus areas include **secure network design, penetration testing, and system optimisation**.

Before joining the lab she spent six years deploying telco infrastructure security, then eight years developing secure backend systems and automation tooling. She holds a Master’s in Telecommunications, the Certified Ethical Hacker (CEH) credential, and has lectured network security at Cao Thắng College and Ho Chi Minh City University of Transport.

Her current projects integrate symbolic logic with practical network‑defence strategies for critical infrastructure.`,
  },

  'le-quoc-dung': {
    name: 'Lê Quốc Dũng',
    position: 'Master’s Student',
    imageUrl: '/people/LeQuocDung.jpg',
    description: `Lê Quốc Dũng is pursuing an M.S. in Information Security at Moscow Engineering Physics Institute after a B.S. from Moscow Power Engineering Institute. He specialises in **cryptography, symmetric key encryption, and post‑quantum security**.

• Research in Boolean functions, cryptanalysis, and GPU‑accelerated implementations of Russian ciphers (Magma, Kuznechik).
• Bachelor thesis: side‑channel cryptanalysis via power consumption.
• **Awards**: Gold Medal NSUCRYPTO 2024; multiple medals in international mathematics & crypto olympiads.

He contributes formally verified symmetric algorithms and high‑performance CUDA kernels to the lab’s PQC toolkit.`,
  },

  'nguyen-dinh-cuong': {
    name: 'Nguyễn Đình Cường',
    position: 'Master’s Student',
    imageUrl: '/people/NguyenDinhCuong.jpg',
    description: `M.S. student in Computer & Information Science at the University of Pennsylvania and researcher at VCyber Lab. His expertise covers **software & system security, automated program analysis, and binary vulnerability detection**.

Previously a Research Intern at Systems Security Lab (Sungkyunkwan University), he helped develop automated security analysis tools.

**Key achievements**:
• Top 10, Bosch CodeRace CTF 2023  
• 17th, vikeCTF 2023  
• 1st Prize, CECS Day 2022 (VinUniversity)  
• 3rd Prize, ICPC Vietnam 2020  
• VinUniversity Merit Scholar & MOET National Science Contest laureate.

Current goal: AI‑driven exploit mitigation and logic‑based binary hardening frameworks.`,
  },

  'vu-anh-le': {
    name: 'Vũ Anh Lê (Luffy Le)',
    position: 'Research Scientist',
    imageUrl: '/people/LuffyLe.jpg',
    description: `Vũ Anh Lê is a Research Scientist with expertise in **algorithm design, mathematical modelling, and machine‑learning‑for‑security**. He holds a B.S. in Mathematics from Beloit College (USA) and has interned at Google Research and MIT.

**Research contributions**:
• Post‑Quantum Cryptographic Security Models – novel mathematics for quantum‑safe algorithms.  
• Computational Security Analysis – complex analysis, topology, and differential equations for stronger crypto.  
• AI‑Driven Cyber‑Defence – deep learning & topology for threat detection and adversarial robustness.

Proficient in Python, C++, Haskell, and proof assistants (Coq, Isabelle, Lean), he advances mathematically rigorous security models for reasoning AI.`,
  },

  'tran-duc-anh': {
    name: 'Trần Đức Anh',
    position: 'Research Assistant',
    imageUrl: '/people/TranDucAnh.jpg',
    description: `Research Assistant focused on **network security, vulnerability research, and malware analysis**. Undergraduate in Computer Networks & Data Communication at VNU UET.

Experience includes Rust library fuzzing, Kubernetes security (eBPF/Cilium), and AI‑enhanced threat analysis. Skilled in C/C++, Python, Rust, and web pentest toolchains (Burp Suite, Nmap, Wireshark). He aims to embed logic‑based automation into modern cloud security.`,
  },

  'nguyen-hoang-anh': {
    name: 'Nguyễn Hoàng Anh',
    position: 'Research Assistant',
    imageUrl: '/people/NguyenHoangAnh.jpg',
    description: `Fourth‑year Cybersecurity student at Hanoi University of Science & Technology. He specialises in **network security, cryptography, and SOC operations**, with experience at Viettel Cyber Security and the Vietnam National Cyber Security Center.

Projects span secure authentication, network IDS, and post‑quantum key exchange. Skilled in NIST/CIS frameworks, Cisco ASA, and IPTables, he bridges theoretical crypto with operational defences.`,
  },

  'vo-hoang-khanh': {
    name: 'Võ Hoàng Khanh',
    position: 'Research Assistant',
    imageUrl: '/people/VoHoangKhanh.jpg',
    description: `Specialist in **enterprise cybersecurity, SIEM deployment, and threat analytics**. Holds a degree in Information Security from UIT (VNU‑HCM) and industry experience at VNCS & DTG Technology.

Expertise: endpoint security (SentinelOne, TrendMicro), PAM (BeyondTrust), DLP (Zecurion) plus Splunk‑based analytics. Current research focuses on AI‑driven malware detection, WAF automation (ModSecurity), and compliance frameworks for critical infrastructure.`,
  },

  // ────────────────────────────────────────────────────────────────────────────
  //  Collaborators & Advisors
  // ────────────────────────────────────────────────────────────────────────────
  'dr-le-duy-dung': {
    name: 'Dr. Le Duy Dung (Andrew)',
    position: 'Collaborator | Assistant Professor, VinUniversity',
    imageUrl: '/people/LeDuyDung.jpg',
    website: 'https://andrew-dungle.github.io',
    description: `Assistant Professor leading **R2Studio** and **IndoorCare** at VinUniversity; former Senior Data Scientist at Grab. Ph.D. in Data Science & Engineering (SMU). Research: AI‑driven cybersecurity, federated & multimodal learning, robust AI for threat detection. Publications at AAAI, ICML, SIGIR, WWW.`,
  },

  'dr-keshav-sood': {
    name: 'Dr. Keshav Sood',
    position: 'Collaborator | Senior Lecturer, Deakin University',
    imageUrl: '/people/KeshavSood.jpg',
    description: `Expert in **SDN security, network privacy, and cyber resilience**. Secured grants from Australian DoD & DFAT; Associate Editor for multiple IEEE journals. Collaborates on PQC and federated security models for critical infrastructure.`,
  },

  'dr-syed-wajid-ali-shah': {
    name: 'Dr. Syed Wajid Ali Shah',
    position: 'Collaborator | Research Fellow, Deakin Cyber Research & Innovation Centre',
    imageUrl: '/people/AliShah.jpg',
    description: `Focuses on **secure cloud computing, privacy‑enhancing tech, and trust frameworks** for distributed systems. Supports lab projects on quantum‑resilient architectures and AI‑driven cybersecurity.`,
  },

  'assoc-prof-lei-pan': {
    name: 'Assoc. Prof. Lei Pan',
    position: 'Scientific Advisor | Associate Professor, Deakin University',
    imageUrl: '/people/LeiPan.jpg',
    description: `Recognised as a top researcher in **Post‑Quantum Cryptography**. Advises on quantum‑resilient protocols, distributed security, and formal verification for trustworthy reasoning AI.`,
  },

  'prof-yong-xiang': {
    name: 'Prof. Yong Xiang',
    position: 'Scientific Advisor | Professor of Network Engineering, Deakin University',
    imageUrl: '/people/YongXiang.png',
    description: `Director of the Trustworthy Intelligent Computing Lab. Leads research on **AI‑driven cybersecurity, blockchain security, and network privacy**. Guides scalable, explainable logic engines for secure distributed systems.`,
  },
};

export default function TeamMemberPage() {
  const pathname = usePathname();
  const slug = pathname.split('/').pop();
  const member = teamMembers[slug];

  if (!member) {
    return <div className="p-8 text-red-600 font-semibold">Team member not found</div>;
  }

  return (
    <div className="container mx-auto p-6 max-w-5xl">
      <h1 className="text-3xl font-bold mb-2">{member.name}</h1>
      <h2 className="text-xl mb-6 text-gray-200">{member.position}</h2>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/3">
          <Image
            src={member.imageUrl}
            alt={member.name}
            width={600}
            height={800}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
        <div className="w-full md:w-2/3 whitespace-pre-line leading-relaxed text-gray-100">
          {member.description}
          {member.website && (
            <p className="mt-4">
              <a
                href={member.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Personal Website ↗
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
