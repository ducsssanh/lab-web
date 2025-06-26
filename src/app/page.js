"use client";
export { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useTranslation } from "../hooks/useTranslation";
import { en } from "../locales/en";
import { vi } from "../locales/vi";

const translations = { en, vi };

export default function Home() {
  const { language, t } = useTranslation();
  const researchAreas = translations[language].researchAreas;
  const [openIndex, setOpenIndex] = useState(null);
  const [openSubIndexes, setOpenSubIndexes] = useState(new Set());

  const toggleSubTopic = (subIndex) => {
    setOpenSubIndexes((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(subIndex)) {
        newSet.delete(subIndex);
      } else {
        newSet.add(subIndex);
      }
      return newSet;
    });
  };

  return (
    <div className="text-left">
      <section
        className="mx-auto md:px-8 lg:px-16 aspect-[27/9] flex flex-col justify-center items-start relative"
        style={{
          backgroundImage: "url('/background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></section>

      <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#000022] text-left leading-tight">
          {t("welcomeTo")} {" "}
          <span className="text-[#c10000]">{t("vinuniResearchLab")}</span> {t("for")} {" "}
          <span className="text-[#c10000]">{t("cybersecurity")}, {t("ai")},</span> {t("and")} {" "}
          <span className="text-[#c10000]">{t("postQuantumCryptography")}</span>
        </h1>

        <motion.p
          className="mt-6 text-base sm:text-lg text-[#191938]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {t("atVcyber")} {" "}
          <span className="text-[#c10000] font-semibold">
            {t("cybersecurityAI")}
          </span>
          , {t("and")} {" "}
          <span className="text-[#c10000] font-semibold">
            {t("postQuantumCryptographyPQC")}
          </span>
          , {t("weAreShaping")}
          <span className="text-[#c10000] font-semibold">
            {t("quantumResilient")}
          </span>
          , {t("and")} {" "}
          <span className="text-[#c10000] font-semibold">{t("trustworthy")}</span> {" "}
          {t("technologies")}
        </motion.p>

        <motion.p
          className="mt-4 text-base sm:text-lg text-[#191938]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {t("ourInterdisciplinaryTeam")} {" "}
          <span className="text-[#c10000] font-semibold">
            {t("computerScience")},
          </span> {" "}
          {t("and")} {" "}
          <span className="text-[#c10000] font-semibold">
            {t("urbanDigitalization")}
          </span>
          , {t("isCommittedTo")} {" "}
          <span className="text-[#c10000] font-semibold">
            {t("postQuantumCryptography")}
          </span>
          , {t("and")} {" "}
          <span className="text-[#c10000] font-semibold">
            {t("smartCity")}
          </span>
          , {t("weDeliver")}
        </motion.p>

        <motion.p
          className="mt-4 text-base sm:text-lg text-[#191938]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {t("byCombining")} {" "}
          <span className="text-[#c10000] font-semibold">
            {t("secureEthical")}
          </span> {" "}
          {t("inIncreasingly")}
        </motion.p>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#191938] text-left leading-tight">
          {t("ourResearchFocus")}
        </h1>

        {researchAreas.map((area, index) => (
          <div
            key={index}
            className="bg-[#191938] text-white py-4 mb-4 mt-6 p-6 rounded-md"
          >
            <button
              className="w-full text-left flex justify-between items-center text-xl font-semibold"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {area.title} {openIndex === index ? <FaAngleUp /> : <FaAngleDown />}
            </button>

            <motion.div
              className="overflow-hidden"
              initial={{ height: 0 }}
              animate={{ height: openIndex === index ? "auto" : 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <p className="mt-2">{area.description}</p>

              {area.subTopics.map((sub, subIndex) => (
                <div
                  key={subIndex}
                  className="mt-3 bg-[#32324e] p-5 rounded-md"
                >
                  <button
                    className="w-full font-semibold text-left flex justify-between items-center text-lg"
                    onClick={() => toggleSubTopic(`${index}-${subIndex}`)}
                  >
                    {sub.title} {openSubIndexes.has(`${index}-${subIndex}`) ? (
                      <FaAngleUp />
                    ) : (
                      <FaAngleDown />
                    )}
                  </button>

                  <motion.div
                    className="overflow-hidden"
                    initial={{ height: 0 }}
                    animate={{
                      height: openSubIndexes.has(`${index}-${subIndex}`)
                        ? "auto"
                        : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <p className="mt-2">{sub.content}</p>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>
        ))}
      </section>
    </div>
  );
}
