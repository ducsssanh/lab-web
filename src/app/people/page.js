"use client";
export { notFound } from 'next/navigation';
import { useTranslation } from "../../hooks/useTranslation";

export default function PeoplePage() {
  const { t } = useTranslation();
  
  const generateSlug = (name) => {
    const cleanedName = name.replace(/\(.*\)/, '').trim();
    return cleanedName.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  };

  const groups = [
    {
      title: t("principalInvestigator"),
      members: [
        {
          name: "Dr. Dinh Duc Nha Nguyen (Tony/Nhã)",
          role: t("principalInvestigatorFounder"),
          link: "https://ducnha.work/",
          img: "people/nha.jpg",
          about: t("nhaDescription"),
        },
      ],
    },
    {
      title: t("associateInvestigator"),
      members: [
        {
          name: "Dr. Le Duy Dung (Andrew)",
          role: t("associateInvestigatorRole"),
          img: "people/LeDuyDung.jpg",
          about: t("andrewDescription"),
        },
      ],
    },
    /*{
      title: t("researchScientists"),
      members: [
        {
          name: "Vu Anh Le (Luffy Le)",
          role: t("researchScientistRole"),
          img: "people/LuffyLe.jpg",
          about: "Works in algorithmic reasoning and cognitive-inspired symbolic computation. Designing lightweight, deterministic reasoning engines for embedded intelligent systems.",
        },
      ],
    },*/
    {
      title: t("graduateResearchers"),
      members: [
        {
          name: "Mai Do Thi Ngoc (Mia Do)",
          role: t("graduateResearcherRole"),
          img: "people/MiaDo.jpg",
          about: t("miaDescription"),
        },
        {
          name: "Pham Ngoc Van",
          role: t("graduateResearcherRole"),
          img: "people/phamngocvan.jpg",
          about: t("vanDescription"),
        },
        {
          name: "Tuan Nguyen Van",
          role: t("graduateResearcherRole"),
          img: "people/Tuan.jpg",
          about: t("tuanDescription"),
        },
        {
          name: "Long Vo Minh Thien",
          role: t("graduateResearcherRole"),
          img: "people/Long.jpg",
          about: t("longDescription"),
        },
      ],
    },
    {
      title: t("mastersStudents"),
      members: [
        {
          name: "Le Quoc Dung",
          role: t("mastersStudentRole"),
          img: "people/LeQuocDung.jpg",
          about: t("quocDungDescription"),
        },
        {
          name: "Nguyen Dinh Cuong",
          role: t("mastersStudentRole"),
          img: "people/NguyenDinhCuong.jpg",
          about: t("cuongDescription"),
        },
      ],
    },
    {
      title: t("researchAssistants"),
      members: [
        {
          name: "Tran Duc Anh",
          role: t("researchAssistantRole"),
          img: "people/TranDucAnh.jpg",
          about: t("ducAnhDescription"),
        },
        {
          name: "Nguyen Hoang Anh",
          role: t("researchAssistantRole"),
          img: "people/NguyenHoangAnh.jpg",
          about: t("hoangAnhDescription"),
        },
        {
          name: "Vo Hoang Khanh",
          role: t("researchAssistantRole"),
          img: "people/VoHoangKhanh.jpg",
          about: t("khanhDescription"),
        },
        {
          name: "Nguyen Ngoc Tu (Chrish)",
          role: t("researchAssistantRole"),
          img: "people/NguyenNgocTu.jpeg",
          about: t("tuDescription"),
        },
        {
          name: "Kiet Nguyen Ngoc",
          role: t("researchAssistantRole"),
          img: "people/Kiet.jpg",
          about: t("kietDescription"),
        },
      ],
    },
    {
      title: t("distinguishedResearchFellows"),
      members: [
        {
          name: "Dr. Keshav Sood",
          role: t("distinguishedResearchFellowRole"),
          img: "people/KeshavSood.jpg",
          about: t("keshavDescription"),
        },
        {
          name: "Dr. Syed Wajid Ali Shah",
          role: t("distinguishedResearchFellowRole"),
          img: "people/AliShah.jpg",
          about: t("aliShahDescription"),
        },
        {
          name: "Thai Mai Thanh",
          role: t("distinguishedResearchFellowRole"),
          img: "people/Thai-Mai-Thanh.png",
          about: t("thaiMaiDescription"),
        },
      ],
    },
    {
      title: t("scientificAdvisors"),
      members: [
        {
          name: "Assoc. Prof. Lei Pan",
          role: t("scientificAdvisorRole"),
          img: "people/LeiPan.jpg",
          about: t("leiPanDescription"),
        },
        {
          name: "Prof. Yong Xiang",
          role: t("professorRole"),
          img: "people/YongXiang.jpg",
          about: t("yongXiangDescription"),
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
