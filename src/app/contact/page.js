"use client";
export { notFound } from "next/navigation";
import { FaUniversity, FaPhone, FaEnvelope } from "react-icons/fa";
import { useTranslation } from "../../hooks/useTranslation";

export default function ContactPage() {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Thông tin liên hệ */}
        <div className="flex flex-col justify-center text-center md:ml-20 md:text-left">
          <h1 className="text-5xl font-bold text-[#191938]">{t("contactUs")}</h1>
          <p className="mt-2 text-gray-600">{t("getInTouch")}</p>
          <h2 className="text-3xl pt-5 text-[#191938]">
            {t("drNguyenDinhDucNha")}
          </h2>

          <div className="mt-6 space-y-4">
            <p className="text-lg flex items-center gap-2">
              <FaUniversity size={35} />
              {t("vinUniversityAddress")}
            </p>
            <p className="text-lg flex items-center gap-2">
              <FaPhone/>
              {t("contactPhone")}
            </p>
            <p className="text-lg flex items-center gap-2">
              <FaEnvelope/>
              ndducnha@gmail.com | nha.ndd@vinuni.edu.vn
            </p>
          </div>
        </div>

        {/* Google Maps */}
        <div className="w-full h-96">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3846.366372227816!2d105.94190381086189!3d20.988371689083827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135afe809f342c5%3A0x136290b61ba411db!2sVinUniversity!5e1!3m2!1sen!2s!4v1740900582936!5m2!1sen!2s"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
