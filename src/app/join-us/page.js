export default function JoinUsPage() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 text-center px-4">
            <div className="max-w-2xl p-8 bg-white rounded-2xl shadow-lg border border-gray-200">
                <h1 className="text-4xl font-bold mb-6">Join Us</h1>
                <p className="text-lg text-gray-700 leading-relaxed">
                    We are recruiting talented individuals for positions such as
                    <span className="font-semibold"> Research Assistant, PhD student,</span> and
                    <span className="font-semibold"> Postdoctoral researcher</span>.
                </p>
                <p className="mt-4 text-lg">
                    Please check the latest information at:
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
