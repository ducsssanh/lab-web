export { notFound } from 'next/navigation';

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
            ]
        }
    ];

    return (
        <div className=" text-white py-12 flex flex-col justify-center items-start">
            <h1 className="text-3xl mx-auto font-bold">Publications</h1>

            <div className="mt-6 mx-auto space-y-8">
                {publications.map((section, index) => (
                    <div key={index}>
                        <h2 className="text-2xl font-semibold text-gray-300">{section.year}</h2>
                        <ul className="mt-2 space-y-4">
                            {section.papers.map((paper, idx) => (
                                <li key={idx} className="border-l-4 border-gray-600 pl-4">
                                    <h3 className="text-lg font-semibold text-gray-200 hover:underline">
                                        <a href={paper.pdfLink}>{paper.title}</a>
                                    </h3>
                                    <p className="text-gray-400 text-sm">{paper.authors}</p>
                                    <p className="text-gray-500 italic">{paper.conference}</p>
                                    <div className="mt-1 space-x-3">
                                        {paper.pdfLink && (
                                            <a href={paper.pdfLink} className="text-gray-400 hover:text-white">📄 PDF</a>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
