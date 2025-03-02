export { notFound } from 'next/navigation';

export default function PeoplePage() {
    const groups = [
        {
            title: "PRINCIPAL INVESTIGATOR (PI) AND LAB DIRECTOR",
            members: [
                {
                    name: "Professor Nha Nguyen",
                    role: "Group Leader",
                    img: "people/nha.jpg",
                    about: "Dr. Nha Nguyen is the group leader with extensive experience in research and development, leading multiple groundbreaking projects in AI and cybersecurity."
                }
            ]
        },
        {
            title: "MASTER'S STUDENT",
            members: [
                { 
                    name: "Dũng", 
                    role: "Master's Student", 
                    img: "people/avatar.jpg", 
                    about: "Master's student with research interest in data security, focusing on developing privacy-preserving algorithms for distributed systems."
                }
            ]
        },
        {
            title: "GRADUATE RESEARCHERS",
            members: [
                { 
                    name: "Mai", 
                    role: "Graduate Researcher", 
                    img: "people/avatar.jpg", 
                    about: "Working on distributed systems and cloud computing, with a special interest in serverless architectures."
                },
                { 
                    name: "Đông", 
                    role: "Graduate Researcher", 
                    img: "people/avatar.jpg", 
                    about: "Focused on bioinformatics and computational biology, leveraging machine learning for genomic data analysis."
                }
            ]
        },
        {
            title: "RESEARCH ASSISTANTS",
            members: [
                { 
                    name: "Luffy", 
                    role: "Research Assistant", 
                    img: "people/avatar.jpg", 
                    about: "Exploring blockchain technologies, researching consensus algorithms and decentralized applications."
                },
                { 
                    name: "Hoàng Anh", 
                    role: "Research Assistant", 
                    img: "people/NguyenHoangAnh.jpg", 
                    about: "Cybersecurity specialist with hands-on experience in threat detection, penetration testing, and security audits."
                },
                { 
                    name: "Đức Anh", 
                    role: "Research Assistant", 
                    img: "people/avatar.jpg", 
                    about: "Data analyst passionate about big data, developing advanced data visualization tools and predictive models."
                },
                { 
                    name: "Khanh", 
                    role: "Research Assistant", 
                    img: "people/avatar.jpg", 
                    about: "Cloud computing enthusiast, building scalable infrastructure solutions and optimizing Kubernetes deployments."
                }
            ]
        },
        {
            title: "SCIENTIFIC ADVISORS",
            members: [
                { 
                    name: "Lei Pan", 
                    role: "Scientific Advisor", 
                    img: "people/avatar.jpg", 
                    about: "Expert in machine learning and algorithm optimization, mentoring research projects across various domains."
                },
                { 
                    name: "Yong Xiang", 
                    role: "Scientific Advisor", 
                    img: "people/avatar.jpg", 
                    about: "Leading researcher in network security and cryptography, pioneering work in secure communication protocols."
                },
                { 
                    name: "Keshav", 
                    role: "Scientific Advisor", 
                    img: "people/avatar.jpg", 
                    about: "Specialized in distributed systems and cloud architectures, advising on scalability and fault tolerance strategies."
                }
            ]
        },
        {
            title: "COLLABORATORS",
            members: [
                { 
                    name: "Prof Dũng", 
                    role: "Collaborator", 
                    img: "people/avatar.jpg", 
                    about: "Collaborating on AI-driven healthcare innovations, integrating deep learning models for patient diagnosis."
                },
                { 
                    name: "Syed", 
                    role: "Collaborator", 
                    img: "people/avatar.jpg", 
                    about: "Working on secure communications and encryption protocols, enhancing data privacy for IoT devices."
                }
            ]
        }
    ];

    return (
        <div className="text-[#000022] py-10 pt-20 px-4">
            {groups.map((group, index) => (
                <div key={index} className="mb-12">
                    <h1 className="text-3xl font-bold mb-6">{group.title}</h1>
                    <div className="grid md:grid-cols-2 gap-6">
                        {group.members.map((member, idx) => (
                            <div key={idx} className="flex items-center">
                                <div className="flex items-start gap-6">
                                    <img
                                        src={member.img}
                                        alt={member.name}
                                        className="w-40 h-40 object-cover rounded-none border-4 border-gray-700"
                                    />
                                    <div>
                                        <h3 className="font-bold text-lg">{member.name}</h3>
                                        <p className="italic">{member.role}</p>
                                        <p className="text-gray-300">{member.about}</p>
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
