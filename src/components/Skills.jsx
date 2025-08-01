function Skills() {
  const images = [
    { src: 'src/assets/icons8-html.svg', alt: 'HTML' },
    { src: 'src/assets/icons8-css3.svg', alt: 'CSS' },
    { src: 'src/assets/icons8-js.svg', alt: 'JavaScript' },
    { src: 'src/assets/icons8-react.svg', alt: 'React' },
    { src: 'src/assets/icons8-tailwind.svg', alt: 'Tailwind CSS' },
  ];

  return (
    <section className="p-8 bg-gray-300 text-center">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">My Skills</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {images.map((image, index) => (
          <div key={index} className="relative flex flex-col items-center">
            {/* Green glowing background */}
            <div className="absolute inset-0 rounded-full bg-green-400 blur-xl opacity-30 animate-pulse" />
            <img
              src={image.src}
              alt={image.alt}
              className="relative w-20 h-20 transition duration-300 transform hover:scale-105 hover:filter hover:drop-shadow-[0_0_10px_#22c55e]" // green shadow
            />
            <span className="mt-2 text-gray-700">{image.alt}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
