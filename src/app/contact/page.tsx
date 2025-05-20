export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-white shadow-xl rounded-lg p-8 md:p-12 max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Contact Us</h1>
        
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="text-lg mb-6">
            We&apos;d love to hear from you! Whether you have questions, feedback, or partnership inquiries, feel free to reach out.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-3">Email Us</h2>
          <p>
            For general inquiries, please email us at: <a href="mailto:contact@hysports.gg" className="text-purple-600 hover:text-purple-800">contact@hysports.gg</a> (placeholder email).
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-3">Follow Us</h2>
          <p>
            Stay updated with our latest news and developments by following us on our social media channels (links to be added).
          </p>
          {/* Placeholder for social media links */}
          {/* <div className="mt-4 flex space-x-4">
            <a href="#" className="text-blue-500 hover:text-blue-700">Twitter</a>
            <a href="#" className="text-purple-500 hover:text-purple-700">Discord</a>
          </div> */}
        </div>

        {/* Basic Contact Form Placeholder - Non-functional without backend logic */}
        <div className="mt-12 border-t pt-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">Send a Message</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input type="text" name="name" id="name" autoComplete="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm" placeholder="Your Name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" name="email" id="email" autoComplete="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm" placeholder="you@example.com" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" name="message" rows={4} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm" placeholder="Your message..."></textarea>
            </div>
            <div>
              <button type="submit" disabled className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:bg-gray-400 cursor-not-allowed">
                Send Message (Placeholder)
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 