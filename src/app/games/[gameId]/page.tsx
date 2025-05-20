import Link from 'next/link';

// Placeholder data structure for a single game. 
// In a real app, you'd fetch this from a CMS/DB based on gameId.
interface GameDetails {
  id: string;
  name: string;
  bannerUrl?: string; // Optional: URL for a banner image
  description: string;
  features: string[];
  status: string;
}

// Sample function to get game details. Replace with actual data fetching.
const getGameDetails = (gameId: string): GameDetails | undefined => {
  const gamesData: { [key: string]: GameDetails } = {
    soccer: {
      id: 'soccer',
      name: 'Hysports Soccer',
      bannerUrl: 'https://via.placeholder.com/1200x400?text=Soccer+Banner',
      description: 'Experience the thrill of the beautiful game in the Hytopia metaverse. Dribble, pass, and score your way to victory!',
      features: ['Realistic physics', 'Multiplayer matches', 'Customizable avatars', 'Tournament mode'],
      status: 'In Development',
    },
    basketball: {
      id: 'basketball',
      name: 'Hysports Basketball',
      bannerUrl: 'https://via.placeholder.com/1200x400?text=Basketball+Banner',
      description: 'Hit the courts and show off your skills. Slam dunks, three-pointers, and intense matches await!',
      features: ['Streetball and pro modes', 'Online leaderboards', 'Skill challenges', 'Team creation'],
      status: 'In Development',
    },
    pool: {
      id: 'pool',
      name: 'Hysports Pool',
      bannerUrl: 'https://via.placeholder.com/1200x400?text=Pool+Banner',
      description: 'Chalk up and take your shot! Classic 8-ball and 9-ball pool with precise controls and realistic ball physics.',
      features: ['Multiple game modes', 'Trick shot challenges', 'Online multiplayer', 'Cue customization'],
      status: 'Alpha Testing',
    },
    'putt-putt': {
      id: 'putt-putt',
      name: 'Hysports Putt Putt Golf',
      bannerUrl: 'https://via.placeholder.com/1200x400?text=Putt+Putt+Banner',
      description: 'Navigate challenging and whimsical courses in this fun-for-all-ages putt putt adventure.',
      features: ['Creative course designs', 'Power-ups and obstacles', 'Local and online multiplayer', 'Unlockable cosmetics'],
      status: 'Coming Soon',
    },
  };
  return gamesData[gameId];
};

interface PageProps {
  params: {
    gameId: string;
  };
}

export default async function GamePage({ params }: PageProps) {
  const { gameId } = params;
  const game = getGameDetails(gameId);

  if (!game) {
    // Optionally, you can redirect to a 404 page or a games list page
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Game Not Found</h1>
        <p className="mb-8">Sorry, we couldn&apos;t find details for this game.</p>
        <Link href="/games" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Back to Games
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Banner Image */}
      {game.bannerUrl && (
        <div className="mb-8 h-64 md:h-96 bg-gray-300 rounded-lg shadow-md overflow-hidden">
          {/* In a real app, you'd use Next/Image here for optimization */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={game.bannerUrl} alt={`${game.name} banner`} className="w-full h-full object-cover" />
        </div>
      )}

      {/* Game Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center md:text-left">{game.name}</h1>
      
      {/* Game Status - prominently displayed */}
      <div className="mb-8 text-center md:text-left">
        <span className="inline-block bg-yellow-400 text-gray-800 text-sm font-semibold px-3 py-1 rounded-full">
          Status: {game.status}
        </span>
      </div>

      {/* Game Description */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">About the Game</h2>
        <p className="text-gray-600 leading-relaxed">{game.description}</p>
      </section>

      {/* Gameplay Features */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Gameplay Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          {game.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </section>

      {/* Back to Games Button */}
      <div className="text-center md:text-left">
        <Link href="/" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors duration-300">
          &larr; Back to All Games
        </Link>
      </div>
    </div>
  );
}

// This function tells Next.js which dynamic paths to pre-render at build time.
// This is important for SSG (Static Site Generation).
export async function generateStaticParams() {
  const gameIds = ['soccer', 'basketball', 'pool', 'putt-putt']; // Match the keys in getGameDetails
  return gameIds.map((id) => ({
    gameId: id,
  }));
} 