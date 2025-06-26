"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import { useTranslation } from "../../../hooks/useTranslation";

export default function TeamMemberPage() {
  const { t } = useTranslation();
  const pathname = usePathname();
  const slug = pathname.split("/").pop();

  const teamMembers = {
    "dr-dinh-duc-nha-nguyen": {
      name: "Dr. Dinh Duc Nha Nguyen",
      position: t("principalInvestigatorFounder"),
      imageUrl: "/people/nha.jpg",
      website: "https://ducnha.work/",
      description: t("nhaDetailedDescription"),
    },

    "dr-le-duy-dung": {
      name: "Dr. Le Duy Dung (Andrew)",
      position: t("associateInvestigatorRole"),
      imageUrl: "/people/LeDuyDung.jpg",
      website: "https://andrew-dungle.github.io",
      description: t("andrewDetailedDescription"),
    },

    "van-dong-bui": {
      name: "Van Dong Bui (Will Bui)",
      position: "Graduate Researcher",
      imageUrl: "/people/will_bui.jpeg",
      description: `Van Dong Bui explores intelligent diagnostics and symbolic interpretability in decision‑critical systems. His current work involves logic‑based anomaly detection, OSINT reasoning agents, and formal specification tools for trustworthy AI applications.

A former Senior Cybersecurity Analyst at Lynden Group and Group‑IB investigator, he has led red‑team operations for banks and crypto platforms and solved more than 200 cybercrime cases during his law‑enforcement tenure. Will earned a Master's in Cyber Security Analysis from Macquarie University and runs the non‑profit "Take Them Down," protecting Vietnamese users in cyberspace.`,
    },

    "mai-do-thi-ngoc": {
      name: "Mai Do Thi Ngoc (Mia Do)",
      position: t("graduateResearcherRole"),
      imageUrl: "/people/MiaDo.jpg",
      description: t("miaDetailedDescription"),
    },

    "le-quoc-dung": {
      name: "Lê Quốc Dũng",
      position: t("graduateResearcherRole"),
      imageUrl: "/people/LeQuocDung.jpg",
      description: t("quocDungDetailedDescription"),
    },

    "nguyen-dinh-cuong": {
      name: "Nguyễn Đình Cường",
      position: t("graduateResearcherRole"),
      imageUrl: "/people/NguyenDinhCuong.jpg",
      description: t("cuongDetailedDescription"),
    },

    "tran-duc-anh": {
      name: "Trần Đức Anh",
      position: t("researchAssistantRole"),
      imageUrl: "/people/TranDucAnh.jpg",
      description: t("ducAnhDetailedDescription"),
    },

    "nguyen-hoang-anh": {
      name: "Nguyễn Hoàng Anh",
      position: t("researchAssistantRole"),
      imageUrl: "/people/NguyenHoangAnh.jpg",
      description: t("hoangAnhDetailedDescription"),
    },

    "vo-hoang-khanh": {
      name: "Võ Hoàng Khanh",
      position: t("researchAssistantRole"),
      imageUrl: "/people/VoHoangKhanh.jpg",
      description: t("khanhDetailedDescription"),
    },

    "nguyen-ngoc-tu": {
      name: "Nguyễn Ngọc Tú",
      position: t("researchAssistantRole"),
      imageUrl: "/people/NguyenNgocTu.jpeg",
      description: t("tuDetailedDescription"),
    },

    "pham-ngoc-van": {
      name: "Phạm Ngọc Vân",
      position: t("graduateResearcherRole"),
      imageUrl: "/people/phamngocvan.jpg",
      description: t("vanDetailedDescription"),
    },

    "kiet-nguyen-ngoc": {
      name: "Kiet Ngoc Nguyen",
      position: t("researchAssistantRole"),
      imageUrl: "/people/Kiet.jpg",
      description: t("kietDetailedDescription"),
    },

    "tuan-nguyen-van": {
      name: "Tuan Nguyen Van",
      position: t("graduateResearcherRole"),
      imageUrl: "/people/Tuan.jpg",
      description: t("tuanDetailedDescription"),
    },

    "long-vo-minh-thien": {
      name: "Long Vo Minh Thien",
      position: t("graduateResearcherRole"),
      imageUrl: "/people/Long.jpg",
      description: t("longDetailedDescription"),
    },

    "michael-oduro-antwi": {
      name: "Michael Oduro-Antwi",
      position: "Graduate Researcher",
      imageUrl: "/people/michael_oduro_antwi.jpg",
      description: `Michael focuses on large‑scale deployment of reasoning AI into enterprise ecosystems. His current work centers on aligning organizational workflows with logic‑based automation for transparency and interpretability.`,
    },

    "dr-keshav-sood": {
      name: "Dr. Keshav Sood",
      position: t("distinguishedResearchFellowRole"),
      imageUrl: "/people/KeshavSood.jpg",
      description: t("keshavDetailedDescription"),
    },

    "dr-syed-wajid-ali-shah": {
      name: "Dr. Syed Wajid Ali Shah",
      position: t("distinguishedResearchFellowRole"),
      imageUrl: "/people/AliShah.jpg",
      description: t("aliShahDetailedDescription"),
    },

    "thai-mai-thanh": {
      name: "Dr. Thai Mai Thanh",
      position: t("distinguishedResearchFellowRole"),
      imageUrl: "/people/Thai-Mai-Thanh.png",
      description: t("thaiMaiDetailedDescription"),
    },

    "assoc-prof-lei-pan": {
      name: "Assoc. Prof. Lei Pan",
      position: t("scientificAdvisorRole"),
      imageUrl: "/people/LeiPan.jpg",
      description: t("leiPanDetailedDescription"),
    },

    "prof-yong-xiang": {
      name: "Prof. Yong Xiang",
      position: t("professorRole"),
      imageUrl: "/people/YongXiang.png",
      description: t("yongXiangDetailedDescription"),
    },
  };

  const member = teamMembers[slug];

  if (!member) {
    return <div>{t("teamMemberNotFound")}</div>;
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
              {t("visitWebsite")}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
