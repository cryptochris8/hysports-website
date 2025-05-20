import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-white shadow-xl rounded-lg p-8 md:p-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">About Hysports</h1>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="text-xl text-center mb-8">
            Hysports is dedicated to building the next generation of sports gaming experiences within the innovative Hytopia metaverse.
          </p>
          <h2 className="text-2xl font-semibold mt-10 mb-4">Our Vision</h2>
          <p>
            Our vision is to create immersive, fun, and competitive sports games that leverage the unique capabilities of the Hytopia platform. We believe in community-driven development and aim to deliver high-quality games that players love.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">The Team</h2>
          <p>
            We are a passionate team of developers, designers, and gaming enthusiasts excited about the potential of blockchain technology and the metaverse to revolutionize gaming. 
            {/* You can add more details about your team here later */}
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Join Us on Our Journey</h2>
          <p>
            Follow our progress and become part of the Hysports community as we bring our vision to life. We're just getting started!
          </p>
        </div>
        <div className="mt-12 text-center">
          <Link href="/games" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors duration-300">
            Explore Our Games
          </Link>
        </div>
      </div>
    </div>
  );
} 