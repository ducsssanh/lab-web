export { notFound } from 'next/navigation';

export default function PeoplePage() {
    // const generateSlug = (name) => name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    const generateSlug = (name) => {
  const cleanedName = name.replace(/\(.*\)/, '').trim();
  return cleanedName.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

    const groups = [
        {
            title: "PRINCIPAL INVESTIGATOR & FOUNDER",
            members: [
                {
                    name: "Dr. Dinh Duc Nha Nguyen (Tony/Nhã)",
                    role: "Principal Investigator, Founder | Assistant Professor, VinUniversity",
                    img: "people/nha.jpg",
                    about: "Specializing in Post-Quantum Cryptography (PQC), AI-driven cybersecurity, and IoT security. Advisor for PSI Testing and Certification, bridging research with real-world security applications."
                }
            ]
        },
        {
            title: "GRADUATE RESEARCHERS",
            members: [
                {
                    name: "Van Dong Bui (Will Bui)",
                    role: "Graduate Researcher",
                    img: "people/WillBui.jpg",
                    about: "Specialist in cyber threat intelligence, OSINT, and penetration testing. Senior Cybersecurity Analyst at Lynden Group, founder of 'Take Them Down' project."
                },
                {
                    name: "Mai Do Thi Ngoc (Mia Do)",
                    role: "Graduate Researcher",
                    img: "people/MiaDo.jpg",
                    about: "Expert in network security and secure system architecture. 14 years of experience, CEH-certified, and part-time lecturer."
                },
                {
                    name: "Le Quoc Dung",
                    role: "Graduate Researcher",
                    img: "people/LeQuocDung.jpg",
                    about: "Cryptography expert with a focus on symmetric key encryption and post-quantum security. Gold Medalist in NSUCRYPTO 2024."
                },
                {
                    name: "Nguyen Dinh Cuong",
                    role: "Graduate Researcher",
                    img: "people/NguyenDinhCuong.jpg",
                    about: "Researcher in software and system security, automated program analysis, and binary security. Top contestant in CTFs and programming contests."
                }
            ]
        },
        {
            title: "RESEARCH ASSISTANTS",
            members: [
                {
                    name: "Vu Anh Le (Luffy Le)",
                    role: "Research Assistant",
                    img: "people/LuffyLe.jpg",
                    about: "Algorithm design and mathematical modeling expert, working on adversarial AI defense and quantum-resistant cryptographic protocols."
                },
                {
                    name: "Tran Duc Anh",
                    role: "Research Assistant",
                    img: "people/TranDucAnh.jpg",
                    about: "Network security, vulnerability research, and malware analysis specialist with a focus on web security and Kubernetes/cloud security."
                },
                {
                    name: "Nguyen Hoang Anh",
                    role: "Research Assistant",
                    img: "people/NguyenHoangAnh.jpg",
                    about: "Network security and cryptography expert with hands-on experience in threat intelligence and secure protocols."
                },
                {
                    name: "Vo Hoang Khanh",
                    role: "Research Assistant",
                    img: "people/VoHoangKhanh.jpg",
                    about: "Enterprise cybersecurity expert, specializing in SIEM solutions, threat analytics, and AI-driven threat detection models."
                }
            ]
        },
        {
            title: "COLLABORATORS",
            members: [
                {
                    name: "Dr. Le Duy Dung (Andrew)",
                    role: "Collaborator | Assistant Professor, VinUniversity",
                    img: "people/LeDuyDung.jpg",
                    about: "AI-driven cybersecurity and federated learning researcher. Former Senior Data Scientist at Grab, published in top-tier AI conferences."
                },
                {
                    name: "Dr. Keshav Sood",
                    role: "Collaborator | Senior Lecturer, Deakin University",
                    img: "people/KeshavSood.jpg",
                    about: "Next-gen network security expert, researching SDN security and cyber resilience, with extensive editorial experience in IEEE journals."
                },
                {
                    name: "Dr. Syed Wajid Ali Shah",
                    role: "Collaborator | Research Fellow, Deakin Cyber Research and Innovation Centre",
                    img: "people/AliShah.jpg",
                    about: "Specialist in secure cloud computing, privacy-enhancing technologies, and AI-powered security solutions."
                }
            ]
        },
        {
            title: "SCIENTIFIC ADVISORS",
            members: [
                {
                    name: "Assoc. Prof. Lei Pan",
                    role: "Scientific Advisor | Associate Professor, Deakin University",
                    img: "people/LeiPan.jpg",
                    about: "Leading researcher in Post-Quantum Cryptography and distributed computing security, working on quantum-resilient algorithms."
                },
                {
                    name: "Prof. Yong Xiang",
                    role: "Scientific Advisor | Professor of Network Engineering, Deakin University",
                    img: "people/YongXiang.jpg",
                    about: "Director of the Trustworthy Intelligent Computing Lab, with extensive publications and research on AI-driven cybersecurity and blockchain."
                }
            ]
        }
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
                                            <h3 className="font-bold text-2xl text-blue-600 hover:underline">{member.name}</h3>
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
