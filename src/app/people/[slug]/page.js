"use client";

import { usePathname } from 'next/navigation';
import Image from 'next/image';

const teamMembers = {
  // PRINCIPAL INVESTIGATOR & FOUNDER
  'dr-dinh-duc-nha-nguyen': {
    name: 'Dr. Dinh Duc Nha Nguyen',
    position: 'Principal Investigator, Founder | Assistant Professor, VinUniversity',
    imageUrl: '/people/nha.jpg',
    description: `Dr. Dinh Duc Nha Nguyen (Tony/Nhã) is the Principal Investigator and Founder of VCyber Lab at VinUniversity, specializing in Post-Quantum Cryptography (PQC), AI-driven cybersecurity, and IoT & robotic security. His research focuses on developing next-generation cryptographic solutions, AI-powered cyber defense systems, and quantum-resilient security frameworks to address the evolving challenges of quantum computing, AI-driven cyber threats, and IoT vulnerabilities.

Dr. Nguyen has extensive academic and industry experience, contributing to both high-impact research and real-world cybersecurity applications. He has published extensively in top-tier cybersecurity journals, collaborating with academic institutions and industry partners to advance quantum-safe cryptographic systems, intelligent security automation, and AI-driven threat detection. His work spans securing next-generation networks, enhancing privacy-preserving cryptography, and building autonomous cybersecurity solutions.

In addition to his academic role, Dr. Nguyen serves as an Expert Advisor for PSI Testing and Certification Joint Stock Company (PSI), a leading organization in electrical-electronic product testing and certification in Vietnam. At PSI, he provides expertise in cybersecurity compliance, risk assessment, and secure system integration for telecommunications, industrial electronics, and lithium battery testing. His contributions help bridge academic research with practical cybersecurity implementations, ensuring compliance with international security standards.

Dr. Nguyen is passionate about mentoring and leading research collaborations, working closely with students, researchers, and industry professionals to drive innovations in post-quantum cybersecurity, AI-enhanced defense mechanisms, and IoT security.
`,
    website: 'https://ducnha.work/',
  },

  // ASSOCIATE INVESTIGATOR
  'dr-le-duy-dung': {
    name: 'Dr. Le Duy Dung (Andrew)',
    position: 'Associate Investigator',
    imageUrl: '/people/LeDuyDung.jpg',
    website: 'https://andrew-dungle.github.io',
    description: `Dr. Le Duy Dung (Andrew) is an AI-driven cybersecurity and federated learning researcher. Former Senior Data Scientist at Grab, with publications in top-tier AI conferences.
`,
  },

  // GRADUATE RESEARCHERS
  'van-dong-bui': {
    name: 'Van Dong Bui (Will Bui)',
    position: 'Graduate Researcher',
    imageUrl: '/people/WillBui.jpg',
    description: `Van Dong Bui is a Graduate Researcher at VCyber Lab, VinUniversity, specializing in cyber threat intelligence, OSINT, penetration testing, and digital risk protection. With years of experience in both the private and governmental sectors, he has actively worked against cybercriminal actors, providing cybersecurity consulting, red team assessments, and digital forensics expertise.

Before joining VCyber Lab, Will served as a Senior Cybersecurity Analyst at Lynden Group, conducting penetration testing, red teaming, and vulnerability assessments. He has also worked at Group-IB, protecting banking institutions and crypto platforms from phishing, fraud, and cybercrime activities. His background includes law enforcement experience as a Cybercrime Investigator, where he played a key role in solving over 200 cybercrime cases.

Will holds a Master’s in Cyber Security Analysis from Macquarie University, Australia, and a Bachelor’s in Cyber Crime Investigation from the People’s Police Academy, Vietnam. He is also recognized as a top 1% hacking player on TryHackMe and actively leads "Take Them Down", a non-profit project dedicated to protecting Vietnamese users in cyberspace.
`,
  },
  'mai-do-thi-ngoc': {
    name: 'Mai Do Thi Ngoc (Mia Do)',
    position: 'Graduate Researcher',
    imageUrl: '/people/MiaDo.jpg',
    description: `Mai Do is a Graduate Researcher at VCyber Lab, VinUniversity, specializing in network security, penetration testing, and secure system architecture. With 14 years of experience in telecommunications, software engineering, and cybersecurity, she focuses on secure network design, vulnerability assessment, and system optimization. 

Before joining VCyber Lab, she spent six years in telecommunications, working on network infrastructure and security in large-scale deployments. She later transitioned into software engineering, dedicating the past eight years to developing secure systems, automation, and backend security solutions. She is a Certified Ethical Hacker (CEH) and has practical experience in penetration testing, threat analysis, and network defense strategies. In addition to research, she has also served as a part-time lecturer at Cao Thắng College and Ho Chi Minh City University of Transport, teaching network security and software engineering. 

She holds a Master’s degree in Telecommunications and is passionate about cyber defense, secure system development, and bridging cybersecurity principles with real-world applications.
`,
  },

  // MASTER'S STUDENTS
  'le-quoc-dung': {
    name: 'Lê Quốc Dũng',
    position: 'Graduate Researcher',
    imageUrl: '/people/LeQuocDung.jpg',
    description: `Lê Quốc Dũng is a Master’s Student at VCyber Lab, VinUniversity, specializing in cryptography, symmetric key encryption, and post-quantum cryptographic security. He is currently pursuing a Master’s degree in Information Security at Moscow Engineering Physics Institute, following his Bachelor’s in Information Security from Moscow Power Engineering Institute, Russia.

His research interests lie in Boolean functions, cryptanalysis, and the security of symmetric key cryptographic algorithms. He has worked extensively on implementing and analyzing Russian block ciphers (Magma, Kuznechik), leveraging C/C++ and CUDA for high-performance cryptographic computations. His Bachelor’s thesis focused on cryptanalysis using power consumption analysis, applying correlation and differential analysis techniques to recover secret keys.

Dũng has also excelled in international cryptography competitions, earning a Gold Medal in the 2024 NSUCRYPTO International Olympiad in Cryptography, along with multiple Silver and Copper Medals in international mathematics and cryptography contests. He actively contributes to the cybersecurity community through Capture The Flag (CTF) competitions, cryptographic algorithm development, and mathematical modeling.

Beyond research, he is passionate about technical documentation and high-quality LaTeX formatting, actively contributing well-structured mathematical documentation and cryptography notebooks.
`,
  },
  'nguyen-dinh-cuong': {
    name: 'Nguyễn Đình Cường',
    position: 'Graduate Researcher',
    imageUrl: '/people/NguyenDinhCuong.jpg',
    description: `Nguyễn Đình Cường is a Master’s student in Computer and Information Science at The University of Pennsylvania and a researcher at VCyber Lab, VinUniversity. His research focuses on software and system security, automated program analysis, vulnerability detection, and binary security techniques, aiming to advance both offensive and defensive cybersecurity methodologies.

His expertise lies in reverse engineering, binary hardening, automated exploit detection, and program analysis, leveraging cutting-edge techniques to identify and mitigate software vulnerabilities. He previously worked as a Research Intern at the Systems Security Lab, Sungkyunkwan University (2023), where he contributed to vulnerability detection frameworks and automated security analysis tools.

Key Achievements & Research Contributions
✅ Top 10 Contestant, Bosch CodeRace CTF 2023 – Competed in high-level cybersecurity challenges organized by Robert Bosch GmbH.
✅ 17th Place, vikeCTF 2023 – Ranked among the top teams in a university-level cybersecurity competition hosted by the University of Victoria.
✅ First Prize, CECS Day 2022 – Recognized for developing the best programming project at VinUniversity’s College of Engineering & Computer Science.
✅ Third Prize, The 2020 ICPC Vietnam Northern and Central Provincial Programming Contest – Demonstrated excellence in competitive programming and algorithm design.
✅ Merit-Based Scholar, VinUniversity – Awarded a prestigious merit-based scholarship for academic and research excellence.
✅ National Recognition, Fourth Prize – National Science & Engineering Contest 2019 – Acknowledged by the Ministry of Education & Training for outstanding innovation in engineering.

At VCyber Lab, he is actively working on developing advanced binary security tools, automated vulnerability detection frameworks, and novel methods for program security analysis. His goal is to enhance software security through automation, AI-driven security analytics, and robust exploit mitigation strategies.
`,
  },

  // RESEARCH ASSOCIATE 
  'vu-anh-le': {
    name: 'Vũ Anh Lê (Luffy Le)',
    position: 'Research Associate',
    imageUrl: '/people/LuffyLe.JPG',
    description: `Vũ Anh Lê is a Research Assistant at VCyber Lab, VinUniversity, with expertise in algorithm design, mathematical modelling, and machine learning applications in cybersecurity. He received Bachelor of Science in Mathematics at Beloit College, Wisconsin, USA.

He has conducted advanced research on AI-driven cryptography, mathematical security frameworks, and optimization of neural networks for cybersecurity applications. He has interned at Google Research and MIT, working on machine learning for cyber threat detection, adversarial AI defense, and quantum-resistant cryptographic protocols.

His research contributions include:
• Post-Quantum Cryptographic Security Models – Developing novel mathematical techniques for quantum-resilient cryptographic algorithms.
• Computational Security Analysis – Utilizing complex analysis, topology, and differential equations to improve cybersecurity algorithms.
• AI-Driven Cyber Defense Systems – Applying deep learning and mathematical topology to enhance threat detection and adversarial AI resistance.

With a strong foundation in Python, C++, Haskell, and formal verification tools (Coq, Isabelle, Lean), he actively contributes to building mathematically rigorous cybersecurity models for the next generation of AI-optimized and quantum-safe encryption systems.
`,
  },

  // RESEARCH ASSISTANTS
  'tran-duc-anh': {
    name: 'Trần Đức Anh',
    position: 'Research Assistant',
    imageUrl: '/people/TranDucAnh.jpg',
    description: `Tran Duc Anh is a Research Assistant at VCyber Lab, VinUniversity, focusing on network security, vulnerability research, and malware analysis. He is currently pursuing a degree in Computer Networks and Data Communication at VNU University of Engineering and Technology (UET).
He has strong experience in web security, reverse engineering, and exploit development, with a particular interest in fuzzing and penetration testing. As part of the UET Information Security Laboratory, he has contributed to Rust library fuzzing and automated vulnerability detection.
In addition to research, he has worked on major projects in Kubernetes security, cloud security (eBPF and Cilium), and AI-enhanced threat analysis. His technical skillset includes C/C++, Python, Rust, Linux security, and web penetration testing (Burp Suite, Nmap, Wireshark).
Driven by the goal of strengthening Vietnam’s cybersecurity landscape, he actively collaborates on research projects that integrate AI, automation, and network security for next-generation cyber defense.
`,
  },
  'nguyen-hoang-anh': {
    name: 'Nguyễn Hoàng Anh',
    position: 'Research Assistant',
    imageUrl: '/people/NguyenHoangAnh.jpg',
    description: `Nguyen Hoang Anh is a Research Assistant at VCyber Lab, VinUniversity, specializing in network security, cryptography, and cybersecurity operations. He is a fourth-year student at Hanoi University of Science and Technology, majoring in Cybersecurity.

With hands-on experience at Viettel Cyber Security, the Vietnam National Cyber Security Center (NCSC), and VNCS, Hoàng Anh has worked extensively in threat intelligence, security operations, penetration testing, and cryptographic security frameworks. His expertise includes network defense strategies, AI-driven security automation, and advanced cryptographic protocols.

He has actively contributed to research projects on secure authentication, network intrusion detection, and post-quantum cryptography. Passionate about mathematics-based cybersecurity solutions, he is skilled in applied cryptography, security control frameworks (NIST, CIS), and firewall management (Cisco ASA, IPTables).
Hoàng Anh is committed to bridging theoretical cryptography with real-world security applications, working on secure AI-driven cybersecurity models and quantum-safe encryption frameworks.
`,
  },
  'vo-hoang-khanh': {
    name: 'Võ Hoàng Khanh',
    position: 'Research Assistant',
    imageUrl: '/people/VoHoangKhanh.jpg',
    description: `Vo Hoang Khanh is a Research Assistant at VCyber Lab, VinUniversity, specializing in enterprise cybersecurity, SIEM solutions, and threat analytics. He holds a degree in Information Security from the University of Information Technology (UIT), Vietnam National University - HCM.

He has industry experience at VNCS and DTG Technology, where he worked on penetration testing, SIEM deployment, and enterprise security solution integration. His expertise includes endpoint security (SentinelOne, TrendMicro), privileged access management (BeyondTrust), and data loss prevention (Zecurion DLP).
In research, Khanh focuses on AI-driven cybersecurity models, malware detection automation, and Web Application Firewalls (ModSecurity). He has contributed to Splunk-based threat analytics projects, cybersecurity policy compliance, and enterprise-level security architecture design.
With a passion for bridging security research and real-world defense mechanisms, he aims to develop next-generation cyber resilience frameworks for critical infrastructure security.
`,
  },

  // DISTINGUISHED RESEARCH FELLOWS 
  'dr-keshav-sood': {
    name: 'Dr. Keshav Sood',
    position: 'Distinguished Research Fellow (IoT, AI in cybersecurity)',
    imageUrl: '/people/KeshavSood.jpg',
    description: `Dr. Keshav Sood is a Senior Lecturer in Cybersecurity at Deakin University, Australia, specializing in next-generation network security with a focus on IoT and AI-driven cybersecurity. He earned his Ph.D. in Information Technology from Deakin University and has contributed extensively to research on SDN security and innovative network defense strategies.
`,
  },
  'dr-syed-wajid-ali-shah': {
    name: 'Dr. Syed Wajid Ali Shah',
    position: 'Distinguished Research Fellow (PQC)',
    imageUrl: '/people/AliShah.jpg',
    description: `Dr. Syed Wajid Ali Shah is a Casual Research Fellow at Deakin University’s Centre for Cyber Resilience and Trust, specializing in post-quantum cryptography (PQC) and advanced security frameworks. He earned his Ph.D. from the University of New South Wales (UNSW) and has contributed to state-of-the-art research on privacy-enhancing and quantum-resilient systems.
`,
  },

  // SCIENTIFIC ADVISORS
  'assoc-prof-lei-pan': {
    name: 'Assoc. Prof. Lei Pan',
    position: 'Scientific Advisor | Associate Professor, Deakin University',
    imageUrl: '/people/LeiPan.jpg',
    description: `Prof. Lei Pan is an Associate Professor at Deakin University’s School of Information Technology and a key researcher at the Deakin Cyber Research and Innovation Centre. He is recognized as one of the top researchers in Post-Quantum Cryptography (PQC) worldwide, contributing to quantum-resilient cryptographic protocols, distributed computing security, and advanced cryptographic systems.

He earned his Ph.D. from Deakin University, a Master of Science from Chalmers University of Technology, Sweden, and a Bachelor’s degree in Engineering from the University of Science and Technology of China. His research is deeply focused on cryptographic security frameworks, PQC algorithm optimization, and cybersecurity resilience in distributed systems.

At VCyber Lab, he serves as a Scientific Advisor, collaborating on post-quantum security architectures, cryptographic resilience strategies, and AI-enhanced cybersecurity frameworks.
`,
  },
  'prof-yong-xiang': {
    name: 'Prof. Yong Xiang',
    position: 'Scientific Advisor | Professor of Network Engineering, Deakin University',
    imageUrl: '/people/YongXiang.png',
    description: `Prof. Yong Xiang is a Professor of Network Engineering at Deakin University and a leading expert in cybersecurity, distributed computing, artificial intelligence, and trustworthy computing. He is the Director of the Trustworthy Intelligent Computing Lab and has held key leadership roles in multiple research clusters.

Prof. Xiang’s expertise spans AI-driven cybersecurity, blockchain-based security solutions, and secure communication protocols. His extensive publication record and numerous research grants underscore his leadership in the field.

At VCyber Lab, he collaborates on AI-enhanced cybersecurity, post-quantum cryptography research, and advanced network security solutions.
`,
  },
};

export default function TeamMemberPage() {
  const pathname = usePathname();
  
  // Extract the slug from the URL
  const slug = pathname.split('/').pop();
  const member = teamMembers[slug];

  if (!member) {
    return <div>Team member not found</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{member.name}</h1>
      <h2 className="text-xl mb-6">{member.position}</h2>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/3">
          <Image
            src={member.imageUrl}
            alt={member.name}
            width={600}
            height={800}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-2/3">
          <p className="mb-4 whitespace-pre-line">{member.description}</p>
          {member.website && (
            <a
              href={member.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Visit Website
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
