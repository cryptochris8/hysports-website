import Link from 'next/link';

// Re-using the Game interface and data from the main page for consistency
// In a larger app, this might be imported from a shared types or data file.
interface Game {
  id: string;
  name: string;
  icon: string; 
  pageUrl: string;
  shortDescription?: string; // Optional short description for this page
}

const games: Game[] = [
  { id: 'soccer', name: 'Soccer', icon: '⚽', pageUrl: '/games/soccer', shortDescription: 'The beautiful game, reimagined.' },
  { id: 'basketball', name: 'Basketball', icon: '🏀', pageUrl: '/games/basketball', shortDescription: 'Hit the courts and dominate.' },
  { id: 'pool', name: 'Pool', icon: '🎱', pageUrl: '/games/pool', shortDescription: 'Classic 8-ball and 9-ball action.' },
  { id: 'puttputt', name: 'Putt Putt Golf', icon: '⛳', pageUrl: '/games/putt-putt', shortDescription: 'Fun and challenging mini-golf courses.' },
];

export default function GamesOverviewPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-800">Explore Our Games</h1>
        <p className="text-xl text-gray-600 mt-4">Dive into the exciting sports experiences we are crafting for the Hytopia metaverse.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {games.map((game) => (
          <Link 
            key={game.id} 
            href={game.pageUrl} 
            className="block bg-white rounded-xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 overflow-hidden group"
          >
            <div className="p-8">
              <div className="text-6xl mb-6 text-center transition-transform duration-300 group-hover:scale-110">{game.icon}</div>
              <h3 className="text-3xl font-semibold text-center text-gray-700 mb-2">{game.name}</h3>
              {game.shortDescription && (
                <p className="text-gray-500 text-center text-sm mb-6">{game.shortDescription}</p>
              )}
              <div className="text-center mt-6">
                <span className="inline-block bg-purple-600 text-white text-sm font-medium py-2 px-5 rounded-lg group-hover:bg-purple-700 transition-colors duration-300">
                  Learn More
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Link href="/" className="text-purple-600 hover:text-purple-800 font-medium">
          &larr; Back to Home
        </Link>
      </div>
    </div>
  );
} 