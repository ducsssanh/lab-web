export { notFound } from 'next/navigation';

export default function ContactPage() {
  return (
    <div className='pt-40'>
      <h1 className="text-3xl font-bold text-blue-900">Contact Us</h1>
      <p className="mt-2 text-gray-600">Get in touch with our team.</p>

      <div className="mt-6 space-y-4">
        <p className="text-lg">Contact: (+84) 0369 7777 13</p>
        <p className="text-lg">ndducnha@gmail.com | nha.ndd@vinuni.edu.vn</p>
      </div>
    </div>
  );
}
