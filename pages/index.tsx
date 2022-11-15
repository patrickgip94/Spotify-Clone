import type { NextPage } from 'next';
import Head from 'next/head';
import Sidebar from '../components/Sidebar';

const Home: NextPage = () => {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <main>
        <Sidebar />
        {/* Center */}
      </main>

      <div>
        {/* Player */}
        <p className="cursor-pointer">
          Playlist Name...
        </p>
      </div>
    </div>
  )
}

export default Home;
