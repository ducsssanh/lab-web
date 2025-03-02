"use client";
export { notFound } from "next/navigation";
import { motion } from "framer-motion";

export default function PublicationsPage() {
    const publications = [
        {
            year: 2025,
            papers: [
                {
                    title: "Alleviating Data Sparsity to Enhance AI Models Robustness in IoT Network Security Context",
                    authors: "K Sood, S Liu, DDN Nguyen, N Kumar, B Feng, S Yu",
                    conference: "IEEE Transactions on Mobile Computing",
                    pdfLink: "#"
                }
            ]
        },
        {
            year: 2024,
            papers: [
                {
                    title: "Design and Robust Evaluation of Next Generation Node Authentication Approach",
                    authors: "DDN Nguyen, K Sood, Y Xiang, L Gao, L Chi, G Singh, S Yu",
                    conference: "IEEE Transactions on Dependable and Secure Computing",
                    pdfLink: "#"
                },
                {
                    title: "Double-Signed Fragmented DNSSEC for Countering Quantum Threat",
                    authors: "SWS Pan, DDN Nguyen, R Doss, W Armstrong, P Gauravaram",
                    conference: "arXiv preprint arXiv:2411.07535",
                    pdfLink: "#"
                },
                {
                    title: "Evaluating federated learning based intrusion detection scheme for next generation networks",
                    authors: "G Singh, K Sood, P Rajalakshmi, DDN Nguyen, Y Xiang",
                    conference: "IEEE Transactions on Network and Service Management",
                    pdfLink: "#"
                }
            ]
        },
        {
            year: 2023,
            papers: [
                {
                    title: "Toward IoT node authentication mechanism in next generation networks",
                    authors: "DDN Nguyen, K Sood, Y Xiang, L Gao, L Chi, S Yu",
                    conference: "IEEE Internet of Things Journal 10 (15), 13333-13341",
                    pdfLink: "#"
                },
                {
                    title: "Security Challenges and Potential Solutions in Aerial-Terrestrial Wireless Networking",
                    authors: "K Sood, DDN Nguyen, Y Qu, L Cui, KK Karmakar, S Yu",
                    conference: "IEEE Internet of Things Magazine 6 (4), 118-123",
                    pdfLink: "#"
                },
                {
                    title: "Performance evaluation of a novel intrusion detection system in next generation networks",
                    authors: "K Sood, DDN Nguyen, MR Nosouhi, N Kumar, F Jiang, M Chowdhury, ...",
                    conference: "IEEE Transactions on Network and Service Management 20 (3), 3831-3847",
                    pdfLink: "#"
                },
                {
                    title: "Intrusion detection scheme with dimensionality reduction in next generation networks",
                    authors: "K Sood, MR Nosouhi, DDN Nguyen, F Jiang, M Chowdhury, R Doss",
                    conference: "IEEE Transactions on Information Forensics and Security 18, 965-979",
                    pdfLink: "#"
                }
                
            ]
        },
        {
            year: 2022,
            papers: [
                {
                    title: "Impersonation attack detection in IoT networks",
                    authors: "DDN Nguyen, K Sood, Y Xiang, L Gao, L Chi",
                    conference: "GLOBECOM 2022-2022 IEEE Global Communications Conference, 6061-6066",
                    pdfLink: "#"
                },
                {
                    title: "RF fingerprinting-based IoT node authentication using Mahalanobis distance correlation theory",
                    authors: "DDN Nguyen, K Sood, MR Nosouhi, Y Xiang, L Gao, L Chi",
                    conference: "IEEE Networking Letters 4 (2), 78-81",
                    pdfLink: "#"
                }
            ]
        },
        {
            year: 2021,
            papers: [
                {
                    title: "A tutorial on next generation heterogeneous IoT networks and node authentication",
                    authors: "K Sood, S Yu, DDN Nguyen, Y Xiang, B Feng, X Zhang",
                    conference: "IEEE Internet of Things Magazine 4 (4), 120-126",
                    pdfLink: "#"
                }
            ]
        }
    ];

    return (
        <div className=" text-[#000022] py-12 flex flex-col justify-center items-start">
            <h1 className="text-3xl pt-20 mx-auto font-bold">Publications</h1>

            <div className="mt-6 mx-auto space-y-8">
                {publications.map((section, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl font-semibold text-[#000022]">{section.year}</h2>
                        <ul className="mt-2 space-y-4">
                            {section.papers.map((paper, idx) => (
                                <motion.li 
                                    key={idx}
                                    className="border-l-4 border-gray-600 pl-4"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                                    viewport={{ once: true }}
                                >
                                    <h3 className="text-lg font-semibold text-[#000022] hover:underline">
                                        <a href={paper.pdfLink}>{paper.title}</a>
                                    </h3>
                                    <p className="text-gray-400 text-sm">{paper.authors}</p>
                                    <p className="text-gray-500 italic">{paper.conference}</p>
                                    <div className="mt-1 space-x-3">
                                        {paper.pdfLink && (
                                            <a href={paper.pdfLink} className="text-[#c10000]">📄 PDF</a>
                                        )}
                                    </div>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
