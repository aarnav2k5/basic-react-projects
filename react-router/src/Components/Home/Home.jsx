export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden p-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
          Welcome to Aarnav's World
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Explore my journey, thoughts, and experiences. Join me as I navigate
          through life and technology.
        </p>
        <div className="flex justify-center">
          <img
            className="rounded-lg w-64 sm:w-96 h-auto shadow-md"
            src="https://i.ibb.co/cXN92jJD/WIN-20240130-21-38-13-Pro.jpg"
            alt="Aarnav's Image"
          />
        </div>
      </div>
    </div>
  );
}
