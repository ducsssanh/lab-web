export { notFound } from 'next/navigation';

export default function PeoplePage() {
    const members = [
        { name: "Professor Nha Nguyen", role: "Group Leader", img: "people/nha.jpg", about: "Dr. Nha Nguyen is the group leader with extensive experience in research and development." },
        { name: "Duc Anh Tran", role: "Researcher Assistant", img: "people/avatar.jpg", about: "Tran Duc Anh is a dedicated researcher assistant focusing on data analysis." },
        { name: "Hoang Anh Nguyen", role: "Researcher Assistant", img: "people/NguyenHoangAnh.jpg", about: "Hoang Anh Fourth-year Cyber Security student at Hanoi University of Science and Technology, with a strong foundation in Advanced Cryptography and Applied Mathematics. Currently a Network Security Engineer Intern at Viettel Cyber Security, with hands-on experience in network security and threat defense." },
        { name: "Charlie", role: "Researcher", img: "people/avatar.jpg", about: "Charlie is a researcher specializing in artificial intelligence and robotics." }
    ];

    return (
        <div className="text-white py-10 px-4">
            <h1 className="text-3xl font-bold text-center">Our People</h1>
            <p className="mt-2 text-center text-gray-300">
                Meet our talented researchers and faculty members.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-6 max-w-5xl mx-auto">
                {members.map((member, index) => (
                    <div key={index} className="text-center">
                        <img
                            src={member.img}
                            alt={member.name}
                            className="w-32 h-32 mx-auto mb-4 rounded-full border-4 border-gray-700 object-cover"
                        />
                        <h2 className="text-xl font-semibold">
                            {member.name}
                        </h2>
                        <p className="text-gray-400 italic">{member.role}</p>
                        <p className="mt-2 text-gray-300">{member.about}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
