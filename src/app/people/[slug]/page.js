"use client";

import { usePathname } from 'next/navigation';
import Image from 'next/image';

const teamMembers = {
  'dr-dinh-duc-nha-nguyen': {
    name: 'Dr. Dinh Duc Nha Nguyen',
    position: 'Principal Investigator, Founder | Assistant Professor, VinUniversity',
    imageUrl: '/people/nha.jpg',
    website: 'https://ducnha.work/',
    description: `Dr. Dinh Duc Nha Nguyen (Tony/Nhã) is the Principal Investigator and Founder of the Cyber-Reasoning Lab at VinUniversity, leading pioneering work in symbolic AI, mathematical logic, and interpretable reasoning systems. His research focuses on building AI models that can reason, deduce, and explain, with applications across engineering physics, secure systems, and intelligent automation.

He has contributed to foundational algorithms for symbolic inference, hybrid neuro-symbolic models, and efficient logic engines for embedded systems. Dr. Nguyen advocates for transparency and robustness in AI, emphasizing the development of models aligned with human reasoning.

As an academic leader, he has published in top AI venues and mentors an interdisciplinary team in developing frameworks that integrate logic programming, cognitive modeling, and constraint-based reasoning. His work bridges theoretical advances and practical deployments in real-world decision systems.

Beyond symbolic AI, Dr. Nguyen is internationally recognized for his contributions to post‑quantum cryptography (PQC) and AI‑driven cyber defense. His recent projects deliver quantum‑resilient security frameworks, autonomous threat‑detection pipelines, and secure IoT/robotic platforms. He also serves as an Expert Advisor for PSI Testing and Certification JSC, aligning industrial compliance with cutting‑edge research.`
  },

  'dr-le-duy-dung': {
    name: 'Dr. Le Duy Dung (Andrew)',
    position: 'Associate Investigator',
    imageUrl: '/people/LeDuyDung.jpg',
    website: 'https://andrew-dungle.github.io',
    description: `Dr. Le Duy Dung is an expert in distributed reasoning and collaborative symbolic inference. His research investigates decentralized knowledge processing, federated reasoning protocols, and logical consensus models across AI agents operating in edge-cloud systems.

He heads R2Studio and IndoorCare at VinUniversity, where he designs AI‑powered search, recommendation, and smart‑environment models. His industry experience includes senior data‑science roles on Grab’s Ads & Personalization team and multiple funded projects on secure federated learning and multimodal cyber intelligence. Published in AAAI, ICML, SIGIR, and The Web Conference, he brings production‑scale insight to collaborative reasoning ecosystems.`
  },

  'vu-anh-le': {
    name: 'Le Vu Anh (Luffy)',
    position: 'Research Scientist',
    imageUrl: '/people/LuffyLe.jpg',
    description: `Le Vu Anh (Luffy) works on algorithmic reasoning, symbolic inference, and lightweight deterministic reasoning engines. With a background in mathematical logic and physics-informed neural networks, his current focus is on building interpretable reasoning modules for embedded AI systems and scalable symbolic solvers.

His recent work extends into designing scalable AI reasoning systems, drawing on internships at Google Research and MIT where he developed machine‑learning pipelines for scientific computing. Fluent in Python, C++, Haskell, and proof assistants such as Coq and Lean, he bridges formal methods with practical applications.`
  },

  'van-dong-bui': {
    name: 'Van Dong Bui (Will Bui)',
    position: 'Graduate Researcher',
    imageUrl: '/people/will_bui.jpeg',
    description: `Van Dong Bui explores intelligent diagnostics and symbolic interpretability in decision‑critical systems. His current work involves logic‑based anomaly detection, OSINT reasoning agents, and formal specification tools for trustworthy AI applications.

A former Senior Cybersecurity Analyst at Lynden Group and Group‑IB investigator, he has led red‑team operations for banks and crypto platforms and solved more than 200 cybercrime cases during his law‑enforcement tenure. Will earned a Master’s in Cyber Security Analysis from Macquarie University and runs the non‑profit “Take Them Down,” protecting Vietnamese users in cyberspace.`
  },

  'mai-do-thi-ngoc': {
    name: 'Mai Do Thi Ngoc (Mia Do)',
    position: 'Graduate Researcher',
    imageUrl: '/people/MiaDo.jpg',
    description: `Mai Do designs robust system architectures for AI agents that reason through complex event patterns. Her interests lie in integrating symbolic logic into critical infrastructure systems and building logic‑based decision engines for adaptive real‑time systems.

With 14 years across telecommunications and software engineering, she architects secure networks, automation back‑ends, and vulnerability‑assessment pipelines. A Certified Ethical Hacker and part‑time lecturer, Mia integrates penetration‑testing practice with research on adaptive secure‑network design.`
  },

  'le-quoc-dung': {
    name: 'Lê Quốc Dũng',
    position: 'Graduate Researcher',
    imageUrl: '/people/LeQuocDung.jpg',
    description: `Lê Quốc Dũng specializes in algebraic logic, graph deduction, and mathematical reasoning in symbolic AI. He has worked on Boolean‑logic verification and deduction chains, and he participates in international mathematics and algorithmic reasoning competitions.

Winner of the 2024 NSUCRYPTO Gold Medal, he implements high‑performance C/CUDA versions of Russian block ciphers and conducts power‑analysis cryptanalysis. His competitive accolades across global math and crypto Olympiads reinforce his focus on mathematically rigorous encryption analysis and LaTeX documentation craftsmanship.`
  },

  'nguyen-dinh-cuong': {
    name: 'Nguyễn Đình Cường',
    position: 'Graduate Researcher',
    imageUrl: '/people/NguyenDinhCuong.jpg',
    description: `Nguyen Dinh Cuong researches symbolic execution, automated code reasoning, and logic‑enhanced program analysis. A strong CTF competitor and teaching assistant in formal methods, he integrates symbolic interpreters into code‑security analysis and AI‑driven compilers.

Currently pursuing an M.S. at the University of Pennsylvania, he has delivered tooling for automated exploit generation and binary hardening, ranking in top international CTF contests. His publications target AI‑assisted vulnerability discovery and secure compilation.`
  },

  'tran-duc-anh': {
    name: 'Trần Đức Anh',
    position: 'Research Assistant',
    imageUrl: '/people/TranDucAnh.jpg',
    description: `Tran Duc Anh explores system‑level design for interpretable reasoning AI, including deployment of logic engines in modular and containerized environments. He contributes to logic‑inference libraries and distributed rule processing.

Active in UET’s Information Security Lab, he drives Rust‑based library fuzzing and cloud‑native security projects (eBPF, Cilium) while bringing deep reverse‑engineering expertise to Kubernetes and container hardening.`
  },

  'nguyen-hoang-anh': {
    name: 'Nguyễn Hoàng Anh',
    position: 'Research Assistant',
    imageUrl: '/people/NguyenHoangAnh.jpg',
    description: `Nguyen Hoang Anh studies secure symbolic protocols for AI agents, emphasizing verifiable reasoning and integrity‑preserving message exchange among distributed intelligent agents.

Having served at Viettel Cyber Security and Vietnam’s National Cyber Security Center (NCSC), he specializes in AI‑augmented threat intelligence, cryptographic‑protocol auditing, and compliance with NIST and CIS frameworks.`
  },

  'vo-hoang-khanh': {
    name: 'Võ Hoàng Khanh',
    position: 'Research Assistant',
    imageUrl: '/people/VoHoangKhanh.jpg',
    description: `Vo Hoang Khanh works on enterprise rule‑based inference systems, designing logic classifiers for threat detection and decision‑support systems using symbolic‑logic frameworks.

Industry stints at VNCS and DTG Technology saw him deploy enterprise SIEMs, privileged‑access management, and data‑loss‑prevention solutions while researching AI‑aided malware detection with Splunk analytics.`
  },

  'nguyen-ngoc-tu': {
    name: 'Nguyễn Ngọc Tú',
    position: 'Research Assistant',
    imageUrl: '/people/NguyenNgocTu.jpeg',
    description: `Nguyen Ngoc Tu focuses on DevOps for logic inference services. He specializes in CI/CD automation of reasoning models, deploying symbolic inference engines in cloud‑native infrastructures.`
  },

  'pham-ngoc-van': {
    name: 'Phạm Ngọc Vân',
    position: 'Graduate Researcher',
    imageUrl: '/people/phamngocvan.jpg',
    description: `Phạm Ngọc Vân investigates adversarial reasoning and counterfactual logic in symbolic AI systems. He contributes to interpretable inference pipelines and the robustness of logical agents.`
  },

  'michael-oduro-antwi': {
    name: 'Michael Oduro-Antwi',
    position: 'Graduate Researcher',
    imageUrl: '/people/michael_oduro_antwi.jpg',
    description: `Michael focuses on large‑scale deployment of reasoning AI into enterprise ecosystems. His current work centers on aligning organizational workflows with logic‑based automation for transparency and interpretability.`
  },

  'dang-kien-nguyen': {
    name: 'Dang Kien Nguyen',
    position: 'Affiliated PhD Researcher',
    imageUrl: '/people/DangKienNguyen.jpg',
    description: `Dang Kien Nguyen explores symbolic AI for resilient communication systems and logic‑enhanced protocol stacks in emerging network architectures. He researches inference mechanisms for adaptive systems in dynamic network conditions.`
  },

  'dr-keshav-sood': {
    name: 'Dr. Keshav Sood',
    position: 'Distinguished Research Fellow (Reasoning in IoT)',
    imageUrl: '/people/KeshavSood.jpg',
    description: `Dr. Sood investigates rule‑based control in sensor networks and edge reasoning for IoT devices. His research targets embedded rule engines and distributed logic systems for smart environments.

A recipient of Australian defense and Cyber CRC funding, he publishes in IEEE TMC, TIFS, and TDSC and serves as Associate Editor for several IEEE journals. His current focus is quantum‑resilient SDN architectures and federated security for critical infrastructure.`
  },

  'dr-syed-wajid-ali-shah': {
    name: 'Dr. Syed Wajid Ali Shah',
    position: 'Distinguished Research Fellow (Formal Reasoning)',
    imageUrl: '/people/AliShah.jpg',
    description: `Dr. Shah studies formal‑logic frameworks and algebraic reasoning for safety‑critical AI systems. He contributes to symbolic safety verification and formal methods in machine reasoning.

His portfolio spans secure cloud computing, privacy‑enhancing technologies, and human‑centered trust frameworks, supporting cyber‑resilience projects at Deakin’s Centre for Cyber Resilience and Trust.`
  },

  'thai-mai-thanh': {
    name: 'Dr. Thai Mai Thanh',
    position: 'Distinguished Research Fellow (Reasoning in Robotics)',
    imageUrl: '/people/Thai-Mai-Thanh.png',
    description: `Dr. Thanh applies symbolic reasoning to robotic control and structured planning. His research involves logic‑based decision engines and cognitive task modeling in autonomous systems.`
  },

  'assoc-prof-lei-pan': {
    name: 'Assoc. Prof. Lei Pan',
    position: 'Scientific Advisor | Associate Professor, Deakin University',
    imageUrl: '/people/LeiPan.jpg',
    description: `Assoc. Prof. Lei Pan provides expertise in algebraic reasoning, logic‑protocol design, and multi‑agent inference. He advises on foundational symbolic models and formal verification in distributed intelligent systems.

Ranked among the world’s leading PQC researchers, Prof. Pan pioneers quantum‑resilient cryptography for IoT and cloud infrastructures, bridging algorithm optimization with distributed‑system security.`
  },

  'prof-yong-xiang': {
    name: 'Prof. Yong Xiang',
    position: 'Scientific Advisor | Professor of Network Engineering, Deakin University',
    imageUrl: '/people/YongXiang.png',
    description: `Prof. Xiang leads research on trusted intelligent computing and explainable symbolic inference. He contributes to scalable logic‑engine designs and secure reasoning frameworks for AI networks.

Principal investigator on nine ARC Discovery and Linkage grants, he directs the Trustworthy Intelligent Computing Lab and has authored 270+ journal articles and seven books on AI‑driven cybersecurity, blockchain, and secure networking.`
  }
};

export default function TeamMemberPage() {
  const pathname = usePathname();
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
