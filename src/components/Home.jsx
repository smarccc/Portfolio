function Home() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-900 text-white">
      {/* Container 1: Text */}
      <div className="w-full md:w-1/2 flex items-center justify-center min-h-[60vh] p-6 mt-[10%] md:mt-0">
        <div className="px-4 ml-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Welcome to My Portfolio</h1>

          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Hi, I am [Your Name].
          </h2>
          <h3 className="text-lg md:text-xl font-medium mb-6">
            I am an aspiring frontend developer passionate about building beautiful and functional web applications.
          </h3>

         

         
        </div>
      </div>

      {/* Container 2: Image with background animation */}
      <div className="w-full md:w-1/2 flex items-center justify-center min-h-[50vh] p-6 ">
        <div className="relative">
          {/* Animated glowing background */}
          <div className="absolute inset-0 rounded-full bg-green-400 blur-2xl opacity-30 animate-pulse" />

          {/* Profile image */}
          <img
            src="src/assets/profile.jpg"
            alt="Profile"
            className="relative w-110 h-110 md:w-140 md:h-140 rounded-full object-cover shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
