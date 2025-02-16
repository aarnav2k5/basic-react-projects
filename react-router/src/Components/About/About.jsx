export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img src="https://i.ibb.co/gZmbWcWd/Photo-1.jpg" alt="image" />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              About Me
            </h2>
            <p className="mt-6 text-gray-600">
              Hey there! Im Aarnav, a BTech student passionate about
              web development. Currently, Im deep into the MERN stack, building
              projects, and sharpening my JavaScript skills. Ive worked on event
              logging systems, to-do apps, and Nginx servers using Node.js
              Beyond coding, I like to stay updated on tech trends, and Im
              always looking for opportunities to grow, collaborate, and
              innovate.
            </p>
            <p className="mt-4 text-gray-600">
              Lets build something awesome! 🚀
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
