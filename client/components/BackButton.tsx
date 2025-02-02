'use client';

export default function BackButton() {
  return (
    <button onClick={() => history.back()} className="mb-4 px-4 py-2 bg-gray-200 rounded">
      Back
    </button>
  );
};