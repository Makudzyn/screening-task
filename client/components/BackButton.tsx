'use client';

export default function BackButton() {
  return (
    <button
      onClick={() => history.back()}
      className="mb-4 rounded rounded-l-none border border-l-0 border-blue-500 px-4 py-2 transition hover:bg-gray-800"
    >
      Back
    </button>
  );
}
