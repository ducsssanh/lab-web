export { notFound } from 'next/navigation';

export default function PeoplePage() {
  // slug helper shared with TeamMemberPage
  const generateSlug = (name) => {
    const cleanedName = name.replace(/\(.*\)/, '').trim();
    return cleanedName
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '');
  };

  // Lab roster – condensed summaries derived from People[Vu‑Anh updates].docx
  const groups = [
    {
      title: 'PRINCIPAL INVESTIGATOR & FOUNDER',
      members: [
        {
          name: 'Dr. Dinh Duc Nha Nguyen',
          role: 'Principal Investigator, Founder | Assistant Professor, VinUniversity',
          img: 'people/nha.jpg',
          about:
            'Specialises in Post‑Quantum Cryptography (PQC), AI‑driven cybersecurity, and IoT security. Leads development of quantum‑safe cryptographic frameworks and interpretable reasoning systems for autonomous cyber‑defence.'
        }
      ]
    },
    {
      title: 'ASSOCIATE INVESTIGATOR',
      members: [
        {
          name: 'Dr. Le Duy Dung',
          role: 'Associate Investigator | Assistant Professor, VinUniversity',
          img: 'people/LeDuyDung.jpg',
          about:
            'Former Grab Senior Data Scientist. Researches federated & multimodal learning for AI‑driven cyber‑defence, robust recommendation, and privacy‑preserving reasoning across edge‑cloud systems.'
        }
      ]
    },
    {
      title: 'RESEARCH SCIENTIST',
      members: [
        {
          name: 'Vu Anh Le (Luffy Le)',
          role: 'Research Scientist',
          img: 'people/LuffyLe.jpg',
          about:
            'Focuses on algorithmic reasoning, post‑quantum crypto models, and AI‑enhanced threat detection. Blends mathematical topology & deep learning to build deterministic reasoning engines for embedded devices.'
        }
      ]
    },
    {
      title: 'GRADUATE RESEARCHERS',
      members: [
        {
          name: 'Van Dong Bui (Will Bui)',
          role: 'Graduate Researcher',
          img: 'people/will_bui.jpeg',
          about:
            'Expert in cyber threat intelligence, OSINT, and penetration testing. Builds reasoning‑augmented red‑team simulation and fraud‑detection pipelines.'
        },
        {
          name: 'Mai Do Thi Ngoc (Mia Do)',
          role: 'Graduate Researcher',
          img: 'people/MiaDo.jpg',
          about:
            '14‑year telecom & software veteran. Designs secure network architectures and embeds symbolic logic into critical infrastructure defence.'
        },
        {
          name: 'Pham Ngoc Van',
          role: 'Graduate Researcher',
          img: 'people/phamngocvan.jpg',
          about:
            'Investigates adversarial robustness and counterfactual logic for resilient symbolic inference agents.'
        },
        {
          name: 'Michael Oduro-Antwi',
          role: 'Graduate Researcher',
          img: 'people/michael_oduro_antwi.jpg',
          about:
            'Aligns large‑scale enterprise workflows with logic‑based automation, ensuring transparency and compliance.'
        }
      ]
    },
    {
      title: "MASTER'S STUDENTS",
      members: [
        {
          name: 'Le Quoc Dung',
          role: "Master's Student",
          img: 'people/LeQuocDung.jpg',
          about:
            'Cryptography specialist – Boolean functions, GPU‑accelerated block‑ciphers, and formal verification of symmetric algorithms.'
        },
        {
          name: 'Nguyen Dinh Cuong',
          role: "Master's Student",
          img: 'people/NguyenDinhCuong.jpg',
          about:
            'Works on automated vulnerability detection and binary hardening using logic‑based program analysis.'
        }
      ]
    },
    {
      title: 'RESEARCH ASSISTANTS',
      members: [
        {
          name: 'Tran Duc Anh',
          role: 'Research Assistant',
          img: 'people/TranDucAnh.jpg',
          about:
            'Network security & malware analyst. Integrates fuzzing, eBPF, and logic‑based automation in cloud‑native defences.'
        },
        {
          name: 'Nguyen Hoang Anh',
          role: 'Research Assistant',
          img: 'people/NguyenHoangAnh.jpg',
          about:
            'Develops secure authentication and post‑quantum key‑exchange protocols for AI‑driven SOC environments.'
        },
        {
          name: 'Vo Hoang Khanh',
          role: 'Research Assistant',
          img: 'people/VoHoangKhanh.jpg',
          about:
            'Enterprise SIEM & threat‑analytics engineer; focuses on logic‑based anomaly classifiers and malware detection automation.'
        },
        {
          name: 'Nguyen Ngoc Tu',
          role: 'Research Assistant',
          img: 'people/NguyenNgocTu.jpeg',
          about:
            'CI/CD automation for symbolic inference micro‑services across scalable cloud‑native stacks.'
        }
      ]
    },
    {
      title: 'AFFILIATED PHD RESEARCHERS',
      members: [
        {
          name: 'Dang Kien Nguyen',
          role: 'Affiliated PhD Researcher',
          img: 'people/DangKienNguyen.jpg',
          about:
            'Explores symbolic AI for resilient communication systems and hybrid protocol stacks in dynamic networks.'
        }
      ]
    },
    {
      title: 'DISTINGUISHED RESEARCH FELLOWS',
      members: [
        {
          name: 'Dr. Keshav Sood',
          role: 'Distinguished Research Fellow',
          img: 'people/KeshavSood.jpg',
          about:
            'SDN security & cyber‑resilience expert; researches reasoning‑enabled control in IoT edge environments.'
        },
        {
          name: 'Dr. Syed Wajid Ali Shah',
          role: 'Distinguished Research Fellow',
          img: 'people/AliShah.jpg',
          about:
            'Works on privacy‑preserving systems and formal trust frameworks for distributed reasoning architectures.'
        },
        {
          name: 'Dr. Thai Mai Thanh',
          role: 'Distinguished Research Fellow',
          img: 'people/Thai-Mai-Thanh.png',
          about:
            'Applies symbolic planning and logic‑based control to autonomous robotics.'
        }
      ]
    },
    {
      title: 'SCIENTIFIC ADVISORS',
      members: [
        {
          name: 'Assoc. Prof. Lei Pan',
          role: 'Scientific Advisor',
          img: 'people/LeiPan.jpg',
          about:
            'World‑leading Post‑Quantum Cryptography researcher; advises on quantum‑resilient protocols and formal verification.'
        },
        {
          name: 'Prof. Yong Xiang',
          role: 'Scientific Advisor',
          img: 'people/YongXiang.jpg',
          about:
            'Directs research on trustworthy intelligent computing, AI‑driven cybersecurity, and explainable logic engines.'
        }
      ]
    }
  ];

  return (
    <div className="text-[#e5e7eb] py-10 pt-20 px-4 max-w-6xl mx-auto">
      {groups.map((group, index) => (
        <div key={index} className="mb-12">
          <h1 className="text-4xl font-bold mb-6 text-white">
            {group.title}
          </h1>
          <div className="grid md:grid-cols-2 gap-6">
            {group.members.map((member, idx) => (
              <div key={idx} className="flex items-start gap-6">
                <div className="w-28 h-28 flex-shrink-0 rounded-lg overflow-hidden border-4 border-gray-700">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <a href={`/people/${generateSlug(member.name)}`}>
                    <h3 className="font-bold text-2xl text-blue-400 hover:underline">
                      {member.name}
                    </h3>
                  </a>
                  <p className="text-lg text-gray-300 italic">{member.role}</p>
                  <p className="mt-2 text-gray-200 text-base leading-relaxed">
                    {member.about}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
