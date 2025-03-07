import { notFound } from 'next/navigation';
import Image from 'next/image';

export default function PeoplePage() {
  const generateSlug = (name = '', index) => {
    const cleanedName = name.replace(/\(.*?\)/g, '').trim();
    return `${cleanedName.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}-${index}`;
  };

  const groups = [
    {
      title: "PRINCIPAL INVESTIGATOR & FOUNDER",
      members: [
        {
          name: "Dr. Dinh Duc Nha Nguyen (Tony/Nhã)",
          role: "Principal Investigator, Founder | Assistant Professor, VinUniversity",
          img: "/people/nha.jpg",
          about:
            "Specializing in Post-Quantum Cryptography (PQC), AI-driven cybersecurity, and IoT security. Advisor for PSI Testing and Certification, bridging research with real-world security applications.",
        },
      ],
    },
    {
      title: "ASSOCIATE INVESTIGATOR",
      members: [
        {
          name: "Dr. Le Duy Dung (Andrew)",
          role: "Associate Investigator",
          img: "/people/LeDuyDung.jpg",
          about:
            "AI-driven cybersecurity and federated learning researcher. Former Senior Data Scientist at Grab, published in top-tier AI conferences.",
        },
      ],
    },
    {
      title: "GRADUATE RESEARCHERS",
      members: [
        {
          name: "Van Dong Bui (Will Bui)",
          role: "Graduate Researcher",
          img: "/people/WillBui.jpg",
          about:
            "Specialist in cyber threat intelligence, OSINT, and penetration testing. Senior Cybersecurity Analyst at Lynden Group, founder of 'Take Them Down' project.",
        },
        {
          name: "Mai Do Thi Ngoc (Mia Do)",
          role: "Graduate Researcher",
          img: "/people/MiaDo.jpg",
          about:
            "Expert in network security and secure system architecture. 14 years of experience, CEH-certified, and part-time lecturer.",
        },
      ],
    },
    {
      title: "MASTER'S STUDENTS",
      members: [
        {
          name: "Le Quoc Dung",
          role: "Master's student",
          img: "/people/LeQuocDung.jpg",
          about:
            "Cryptography expert with a focus on symmetric key encryption and post-quantum security. Gold Medalist in NSUCRYPTO 2024.",
        },
        {
          name: "Nguyen Dinh Cuong",
          role: "Master's student",
          img: "/people/NguyenDinhCuong.jpg",
          about:
            "Researcher in software and system security, automated program analysis, and binary security. Top contestant in CTFs and programming contests.",
        },
      ],
    },
    {
      title: "RESEARCH ASSOCIATE",
      members: [
        {
          name: "Vu Anh Le (Luffy Le)",
          role: "Research Associate",
          img: "/people/LuffyLe.JPG",
          about:
            "Expert in quantum information science and algorithm design, focused on crafting hard computational challenges, developing quantum-resistant cryptographic protocols, and ensuring lightweight, secure implementations.",
          linkedin: "https://www.linkedin.com/in/luffyle/",
        },
      ],
    },
  ];

  return (
    <div className="text-[#000022] py-10 pt-20 px-4">
      {groups.map((group, groupIndex) => (
        <div key={generateSlug(group.title, groupIndex)} className="mb-12">
          <h2 className="text-4xl font-bold mb-6">{group.title}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {group.members.map((member, memberIndex) => (
              <div key={generateSlug(member.name, memberIndex)} className="flex items-center">
                <div className="flex items-start gap-6">
                  <div className="w-32 h-32 flex-shrink-0">
                    <Image
                      src={member.img || '/default-profile.jpg'}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover rounded-lg border-4 border-gray-700"
                    />
                  </div>
                  <div>
                    <a href={`/people/${generateSlug(member.name, memberIndex)}`}>
                      <h3 className="font-bold text-2xl text-blue-600 hover:underline">
                        {member.name}
                      </h3>
                    </a>
                    <p className="text-lg text-gray-600 italic">{member.role}</p>
                    <p className="mt-2 text-black text-base leading-relaxed">{member.about}</p>
                    {member.linkedin && (
                      <p className="mt-1">
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          LinkedIn
                        </a>
                      </p>
                    )}
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
