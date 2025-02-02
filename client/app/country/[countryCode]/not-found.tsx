import BackButton from '@/components/BackButton';
import HomeButton from '@/components/HomeButton';

export default function NotFound() {
  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-2xl font-bold text-red-600">Country not available</h1>
      <p className="mt-2 text-gray-600">The requested country is currently unavailable.</p>
      <div className="mt-4">
        <HomeButton />
        <BackButton />
      </div>
    </div>
  );
}
