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
    imageUrl: '/people/will_bui.jpeg',
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
    description: `Nguyen Dinh Cuong - a Master’s student at University of Pennsylvania (UPenn), who spends way too much time breaking things that aren’t mine (legally, of course) in the name of science. He is currently a research apprentice at SEFCOM, which is basically where people like him gather to make computers cry. He focuses on kernel exploitation, binary exploitation, and reverse engineering.

When he is not doing research, he competes in hacking competitions called ctfs. He is part of Shellphish, one of the most legendary ctf teams out there. Back in undergrad, he started the VinUni Hacking Club, where he now serve as an advisor, training the next generation of talented hackers.

His go-to challenges are usually pwn and rev, but when they’re too hard, He’ll pretend he like web or osint just to feel productive. he competes under the handle sashaNull.

- Past Projects
+ Pwnnsylvania: UPenn’s innovative cybersecurity education platform, based on ASU’s pwn.college. It offers hands-on, challenge-based learning in exploit development, reverse engineering, cryptography and web security.
+ PennCloud: A scalable distributed system offering fault-tolerant storage, webmail, file management, user authentication, and an admin console for system monitoring and control.
+ VinUni Hacking Club CTF 2023: The official archive of challenges from VHC CTF 2023, organized by the VinUni Hacking Club.

- Honors and Awards
+ Blue Belt on pwn.college, 2024
+ 2nd Place in CSAW CTF Qualification Round, USA, 2024
+ 6th Place in corCTF, USA, 2024
+ 4th Prize in 2024 ASEAN Student Contest on Information Security, Vietnam, 2024
+ 4th Place in Digital Overdose Autumn CTF, USA, 2021
+ 3rd Prize in The ACM-ICPC Northern Provincial Programming Contest, Vietnam, 2021
+ Vingroup Science and Technology Scholarship, 2023

- Teaching
+ Spring 2025 : Cybersecurity (COMP4030) & Cryptography (COMP4050), VinUni
+ Fall 2024 : Computer and Network Security (CIS 5510), UPenn
`,
  },

  // RESEARCH ASSOCIATE 
  'vu-anh-le': {
    name: 'Le Vu Anh (Luffy)',
    position: 'Research Associate',
    imageUrl: '/people/LuffyLe.jpg',
    description: `Le Vu Anh, also known as Luffy, is a Research Associate at VCyber Lab, VinUniversity. His research focuses on advancing quantum information science with a special emphasis on:
    • Quantum Algorithms
    • Quantum Cryptography
    • Quantum-Resistant Cryptographic Protocols
    
    Under the supervision of Prof. Tony Nguyen and in collaboration with Prof. Sushmita Ruj at the University of New South Wales and Prof. Lei Pan at Deakin University, his work is dedicated to advancing both the theoretical foundations and practical implementations of quantum-resistant cryptographic protocols in a post-quantum era.
    
    Luffy has contributed to quantum algorithm design, analyzed computational hardness in quantum settings, and investigated cryptographic primitives resilient against quantum attacks. His work has been featured in IEEE publications and supported by patented innovations.
    
    He holds a Bachelor of Science in Mathematics from Beloit College, where he built a strong foundation in algorithmic theory and mathematical analysis, further honed through research internships at Google, MIT, and the University of Tokyo.
    
    Connect with him on LinkedIn (https://www.linkedin.com/in/luffyle) or visit his personal website (https://csplevuanh.github.io/vu-anhle).`
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

  'nguyen-ngoc-tu': {
    name: 'Nguyễn Ngọc Tú',
    position: 'Research Assistant',
    imageUrl: '/people/NguyenNgocTu.jpeg',
    description: `Nguyen Ngoc Tu (Chrish) is a Junior DevSecOps Engineer with expertise in cloud security, CI/CD pipeline development, and infrastructure automation. He has over three years of experience working with cloud platforms such as AWS and Azure, container orchestration with Kubernetes and Docker, and automation tools like Terraform and Ansible.

Tu holds a degree in Communications and Computer Networks from the University of Information Technology HCM, where he achieved a GPA of 7.75. His technical skills include cloud security, infrastructure as code, monitoring and logging solutions, and programming in Python, Bash, and Rust.

Currently working at TMA Solutions, he is responsible for maintaining and upgrading Kubernetes clusters, designing and optimizing CI/CD pipelines, managing cloud infrastructure using Terraform, and implementing monitoring solutions with Prometheus, Grafana, and ELK Stack. His work also extends to research and development of anomaly detection models for application logs in AKS and Splunk.

Certified in DevNet Associate (Cisco) and Microsoft Azure Fundamentals, Tu is dedicated to advancing security automation and cost-efficient cloud operations. His interests lie in cloud-native security architectures, DevSecOps methodologies, and AI-driven infrastructure monitoring.
`,
  },

  'pham-ngoc-van': {
    name: 'Phạm Ngọc Vân',
    position: 'Graduate Researcher',
    imageUrl: '/people/phamngocvan.jpg',
    description: `Phạm Ngọc Vân is a cybersecurity engineer with expertise in Threat Hunting, Malware Analysis, and Security Research with experience in cloud and on-premise security (AWS, GCP, Kubernetes).

Recently, Phạm Ngọc Vân have been exploring AI, Machine Learning, and Deep Learning, particularly their applications in malware de-tection, cybersecurity, and threat hunting. 

He is part of a research lab working on the application of Machine Learning in a cross-platform Cloud-based Malware Detection Framework, which has been submitted for publication.
`,
  },

  'michael-oduro-antwi': {
    name: 'Michael Oduro-Antwi',
    position: 'Graduate Researcher',
    imageUrl: '/people/michael_oduro_antwi.jpg',
    description: `Michael Oduro-Antwi is a results-driven Information Technology Leader with more than 18 years of work experience. 

He played a key role in achieving ISO 27001 certification with Nestlé’s Central West Africa Region (CWAR) through his direct efforts from 2014 to 2020. Michael has a proven track record of executing cybersecurity awareness programs that support an organization's mission, culture, and IT infrastructure. 

He is proficient in navigating the intersection of business, technology, and human behavior and is passionate about integrating emerging technologies to create future-ready organizations.
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

  'thai-mai-thanh': {
    name: 'Dr. Thai Mai Thanh',
    position: 'Distinguished Research Fellow (Robotics)',
    imageUrl: '/people/Thai-Mai-Thanh.png',
    description: `Dr. Thai Mai Thanh is an Assistant Professor of Mechanical Engineering at the College of Engineering and Computer Science, VinUniversity. 
    
He received a B.E. degree in Mechatronics Engineering from Ho Chi Minh City University of Technology (HCMUT), Vietnam in 2016 and an M.S. degree in Aerospace Engineering from Korea Advanced Institute of Science and Technology (KAIST), South Korea in 2019. 

In 2023, he obtained his Ph.D. degree in Biomedical Engineering from University of New South Wales (UNSW) Sydney, Australia.

He was a Vinscholar Cohort 2019 alumnus, and a postdoctoral researcher at UNSW Medical Robotics Lab, UNSW Sydney (February-August 2023). His research focuses on enhancing the human quality of life through robotics, advanced surgical systems, bio-printing, wearable haptics, soft robotics, medical devices, electronic circuit design, soft sensors, and nonlinear control. He has authored or co-authored over 30 papers published in international journals and conference proceedings and has filed three international patents.
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
