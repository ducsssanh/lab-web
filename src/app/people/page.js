export { notFound } from 'next/navigation';

export default function PeoplePage() {
  const generateSlug = (name) => {
    const cleanedName = name.replace(/\(.*\)/, '').trim();
    return cleanedName.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  };

  const groups = [
    {
      title: "PRINCIPAL INVESTIGATOR & FOUNDER",
      members: [
        {
          name: "Dr. Dinh Duc Nha Nguyen (Tony/Nhã)",
          role: "Principal Investigator, Founder | Assistant Professor, VinUniversity",
          img: "people/nha.jpg",
          about: "Leads the lab’s new direction in symbolic AI and reasoning-centric models. His current focus is on building interpretable AI systems that integrate mathematical logic, optimization, and human-aligned reasoning for trustworthy deployment across complex domains.",
        },
      ],
    },
    {
      title: "ASSOCIATE INVESTIGATOR",
      members: [
        {
          name: "Dr. Le Duy Dung (Andrew)",
          role: "Associate Investigator",
          img: "people/LeDuyDung.jpg",
          about: "Specialist in federated learning and distributed knowledge systems. His recent work explores decentralized symbolic inference and collaborative reasoning among AI agents in edge and cloud environments.",
        },
      ],
    },
    {
      title: "GRADUATE RESEARCHERS",
      members: [
        {
          name: "Mai Do Thi Ngoc (Mia Do)",
          role: "Graduate Researcher",
          img: "people/MiaDo.jpg",
          about: "Designs robust system architectures for AI agents that reason through complex event patterns. Passionate about embedding logic engines within critical infrastructure systems.",
        },
        {
          name: "Pham Ngoc Van",
          role: "Graduate Researcher",
          img: "people/phamngocvan.jpg",
          about: "Working on adversarial robustness in reasoning agents and counterfactual analysis in symbolic inference models.",
        },
        {
          name: "Tuan Nguyen Van",
          role: "Graduate Researcher",
          img: "people/Tuan.jpg",
          about: "Lecturer and researcher at Le Quy Don Technical University specializing in AI applications for cybersecurity. He holds an MSc from JAIST (Japan) and focuses on federated learning, network anomaly detection, and secure software development.",
        },
        {
          name: "Long Vo Minh Thien",
          role: "Graduate Researcher",
          img: "people/Long.jpg",
          about: "Assistant Lecturer at Le Quy Don Technical University with a background in Software Engineering from ITMO University (Russia). His expertise spans cybersecurity, microservice architectures, and anomaly detection using AI",
        },
      ],
    },
    {
      title: "MASTER'S STUDENTS",
      members: [
        {
          name: "Le Quoc Dung",
          role: "Master’s Student",
          img: "people/LeQuocDung.jpg",
          about: "Specializes in symbolic and mathematical reasoning in AI models, including algebraic logic, graph-based deduction, and formal verification of reasoning chains.",
        },
        {
          name: "Nguyen Dinh Cuong",
          role: "Master’s Student",
          img: "people/NguyenDinhCuong.jpg",
          about: "Researches automated code understanding and program reasoning using symbolic execution and logic-enhanced language models.",
        },
      ],
    },
    {
      title: "RESEARCH ASSISTANTS",
      members: [
        {
          name: "Tran Duc Anh",
          role: "Research Assistant",
          img: "people/TranDucAnh.jpg",
          about: "Explores system-level design for interpretable reasoning AI in real-time decision architectures, focusing on modular deployment in containerized environments.",
        },
        {
          name: "Nguyen Hoang Anh",
          role: "Research Assistant",
          img: "people/NguyenHoangAnh.jpg",
          about: "Investigating secure symbolic communication protocols between AI agents, with emphasis on verifiable reasoning.",
        },
        {
          name: "Vo Hoang Khanh",
          role: "Research Assistant",
          img: "people/VoHoangKhanh.jpg",
          about: "Applies data analytics to derive rule-based inference systems for enterprise intelligence. Current work involves SIEM integration with logic-based anomaly classifiers.",
        },
        {
          name: "Nguyen Ngoc Tu (Chrish)",
          role: "Research Assistant",
          img: "people/NguyenNgocTu.jpeg",
          about: "Focuses on CI/CD automation for reasoning model deployment, with expertise in orchestrating logic inference services within scalable cloud-native environments.",
        },
        {
          name: "Kiet Nguyen Ngoc",
          role: "Research Assistant",
          img: "people/Kiet.jpg",
          about: "IT student at Hanoi University of Science and Technology, specializing in Computer Science and Cyber Security. With a strong academic record (GPA 3.81) and achievements in national competitions, he is passionate about cryptography and applied cybersecurity.",
        },
      ],
    },
    {
      title: "AFFILIATED PHD RESEARCHERS",
      members: [
        {
          name: "Dang Kien Nguyen",
          role: "Affiliated PhD Researcher",
          img: "people/DangKienNguyen.jpg",
          about: "Researches symbolic AI architectures for next-generation network interfaces. Explores hybrid protocol stacks enhanced by machine reasoning for resilient and adaptive network behavior.",
        },
      ],
    },
    {
      title: "DISTINGUISHED RESEARCH FELLOWS",
      members: [
        {
          name: "Dr. Keshav Sood",
          role: "Distinguished Research Fellow",
          img: "people/KeshavSood.jpg",
          about: "Investigates reasoning-enabled control systems in IoT environments. Current research focuses on real-time rule engines embedded in sensor networks and adaptive edge agents.",
        },
        {
          name: "Dr. Syed Wajid Ali Shah",
          role: "Distinguished Research Fellow",
          img: "people/AliShah.jpg",
          about: "Explores formal logic frameworks and algebraic models for post-classical AI systems, with an emphasis on symbolic safety guarantees.",
        },
        {
          name: "Thai Mai Thanh",
          role: "Distinguished Research Fellow",
          img: "people/Thai-Mai-Thanh.png",
          about: "Applies reasoning AI to robotic decision-making. Investigating structured planning algorithms and logic-based control systems in autonomous agents.",
        },
      ],
    },
    {
      title: "SCIENTIFIC ADVISORS",
      members: [
        {
          name: "Assoc. Prof. Lei Pan",
          role: "Scientific Advisor | Associate Professor, Deakin University",
          img: "people/LeiPan.jpg",
          about: "Expert in formal methods and distributed logic systems. Advises on algebraic reasoning and logic protocol design in multi-agent inference systems.",
        },
        {
          name: "Prof. Yong Xiang",
          role: "Scientific Advisor | Professor of Network Engineering, Deakin University",
          img: "people/YongXiang.jpg",
          about: "Leads research on trusted intelligent computing. Special focus on scalable symbolic inference engines and explainable logic reasoning in AI networks.",
        },
      ],
    },
  ];

  return (
    <div className="text-[#000022] py-10 pt-20 px-4">
      {groups.map((group, index) => (
        <div key={index} className="mb-12">
          <h1 className="text-4xl font-bold mb-6">{group.title}</h1>
          <div className="grid md:grid-cols-2 gap-6">
            {group.members.map((member, idx) => (
              <div key={idx} className="flex items-center">
                <div className="flex items-start gap-6">
                  <div className="w-32 h-32 flex-shrink-0">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-lg border-4 border-gray-700"
                    />
                  </div>
                  <div>
                    <a href={`/people/${generateSlug(member.name)}`}>
                      <h3 className="font-bold text-2xl text-blue-600 hover:underline">
                        {member.name}
                      </h3>
                    </a>
                    <p className="text-lg text-gray-600 italic">{member.role}</p>
                    <p className="mt-2 text-black text-base leading-relaxed">{member.about}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}