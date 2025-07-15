import { useSearchParams } from 'react-router-dom';

function RoomPage() {
  const [params] = useSearchParams();
  const role = params.get('role'); // host or viewer

  return (
    <div className="min-h-screen flex items-center justify-center">
      <h2 className="text-xl font-semibold">
        You joined as: {role === 'host' ? 'Host' : 'Viewer'}
      </h2>
    </div>
  );
}

export default RoomPage;
