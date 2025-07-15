import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function LandingPage() {
  const navigate = useNavigate();
  const [isHost, setIsHost] = useState(false);

  const handleJoin = () => {
    const role = isHost ? 'host' : 'viewer';
    navigate(`/room?role=${role}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Welcome to WebinarMeet</h1>

      <label className="mb-2">
        <input
          type="checkbox"
          onChange={(e) => setIsHost(e.target.checked)}
          className="mr-2"
        />
        Join as Host?
      </label>

      <button
        onClick={handleJoin}
        className="px-6 py-2 bg-blue-500 text-white rounded"
      >
        Join Meeting
      </button>
    </div>
  );
}

export default LandingPage;
