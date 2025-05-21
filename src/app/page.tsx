import Link from 'next/link';
import Image from 'next/image';

// Define an interface for game details to ensure type safety
interface Game {
  id: string;
  name: string;
  icon?: string; // Optional emoji icon
  imageUrl?: string; // Optional image URL
  pageUrl: string;
}

// Sample game data - this would ideally come from a CMS or database
const games: Game[] = [
  { id: 'soccer', name: 'Soccer', imageUrl: '/images/hysports-banner.png', pageUrl: '/games/soccer' },
  { id: 'basketball', name: 'Basketball', icon: '🏀', pageUrl: '/games/basketball' },
  { id: 'pool', name: 'Pool', icon: '🎱', pageUrl: '/games/pool' },
  { id: 'puttputt', name: 'Putt Putt Golf', icon: '⛳', pageUrl: '/games/putt-putt' },
];

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white rounded-lg shadow-xl mb-16">
        <h1 className="text-5xl font-bold mb-4">Welcome to Hysports</h1>
        <p className="text-xl mb-8">
          Creating immersive sports gaming experiences in the Hytopia metaverse.
        </p>
        {/* Optional: A primary call to action button can be added here */}
        {/* <Link href="/games" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg text-lg">
          Explore Games
        </Link> */}
      </section>

      {/* Games Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Our Games</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {games.map((game) => (
            <Link key={game.id} href={game.pageUrl} className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1">
              <div className="text-5xl mb-4 text-center">
                {game.imageUrl ? (
                  <div className="relative h-32 w-full mb-4">
                    <Image
                      src={game.imageUrl}
                      alt={game.name}
                      fill
                      className="object-cover rounded-lg"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>
                ) : (
                  <div className="text-5xl">{game.icon}</div>
                )}
              </div>
              <h3 className="text-2xl font-semibold text-center text-gray-700">{game.name}</h3>
              {/* Short description or status can be added here if needed */}
            </Link>
          ))}
        </div>
      </section>

      {/* Hytopia Ecosystem Section */}
      <section className="py-12 bg-gray-100 rounded-lg shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Powered by Hytopia</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Hysports is proud to be developing innovative gaming experiences within the vibrant and rapidly expanding Hytopia ecosystem.
          </p>
          {/* It's good practice to use an environment variable for external links */}
          <a 
            href={process.env.NEXT_PUBLIC_HYTOPIA_LINK || "https://www.hytopia.com/"} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300">
            Explore Hytopia
          </a>
        </div>
      </section>
    </div>
  );
}
