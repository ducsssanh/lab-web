"use client";
import { useTranslation } from "../../hooks/useTranslation";

export default function JoinUsPage() {
    const { t } = useTranslation();
    
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 text-center px-4">
            <div className="max-w-2xl p-8 bg-white rounded-2xl shadow-lg border border-gray-200">
                <h1 className="text-4xl font-bold mb-6">{t("joinUsTitle")}</h1>
                <p className="text-lg text-gray-700 leading-relaxed">
                    {t("joinUsDescription")}{" "}
                    <span className="font-semibold">{t("researchAssistant")}, {t("phdStudent")},</span>{" "}
                    {t("and")}{" "}
                    <span className="font-semibold">{t("postdoctoralResearcher")}</span>.
                </p>
                <p className="mt-4 text-lg">
                    {t("checkLatestInfo")}{" "}
                    <a 
                        href="https://ducnha.work" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-blue-600 hover:underline ml-2"
                    >
                        https://ducnha.work
                    </a>
                </p>
            </div>
        </div>
    );
}
