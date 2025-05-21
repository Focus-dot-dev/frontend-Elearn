import React from 'react';
import Nav from '../../components/Nav';
import Footer from '../../components/footer';
import { Link } from 'react-router-dom';

const Modules = [
  { images: "/src/assets/english.png", title: "English Language", duration: "1-2 hours", learners: "130" },
  { images: "/src/assets/mathematics.png", title: "Mathematics", duration: "2 hours", learners: "130" },
  { images: "/src/assets/generalStudies.png", title: "General Studies", duration: "3 hours", learners: "90" },
  { images: "/src/assets/people_dey.jpg", title: "History", duration: "1.5 hours", learners: "70" },
  { images: "/src/assets/edey.jpg", title: "Geography", duration: "2 hours", learners: "100" },
  { images: "/src/assets/microscope.jpg", title: "Physics", duration: "2.5 hours", learners: "110" },
  { images: "/src/assets/chemistry.png", title: "Chemistry", duration: "1-2 hours", learners: "130" },
  { images: "/src/assets/biology.png", title: "Biology", duration: "1-2 hours", learners: "130" },
  { images: "/src/assets/arts.png", title: "Arts", duration: "1-2 hours", learners: "130" },
  { images: "/src/assets/music.png", title: "Music", duration: "1-2 hours", learners: "130" },
  { images: "/src/assets/sports.png", title: "Sports", duration: "1-2 hours", learners: "130" },
  { images: "/src/assets/computer.png", title: "Computer Science", duration: "1-2 hours", learners: "130" },
  { images: "/src/assets/languages.png", title: "Languages", duration: "1-2 hours", learners: "130" },
  { images: "/src/assets/health.png", title: "Health", duration: "1-2 hours", learners: "130" },
  { images: "/src/assets/finance.png", title: "Finance", duration: "1-2 hours", learners: "130" }
];

const Afterenroll = () => {
  return (
    <>
      <section className="bg-blue-100 min-h-screen text-gray-900 transition-colors duration-300">
        
        <Nav />
        <div className="max-w-7xl mx-auto px-4 md:px-10 py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Choose a Subject to learn
          </h1>
          <h5 className="text-lg font-semibold text-gray-700 mb-6">
            Available Subjects in all Categories
          </h5>

          {/* Category Buttons */}
          <div className="flex flex-wrap gap-4 mb-10">
            <button className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors text-sm md:text-base">
              All Categories
            </button>
            {Modules.slice(0, 3).map((module, index) => (
              <button
                key={index}
                className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors cursor-pointer text-sm md:text-base"
              >
                {module.title}
              </button>
            ))}
            <button className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors text-sm md:text-base">
             <Link to="/enrollmore"> More</Link>
            </button>
          </div>

          {/* Popular Topics */}
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Popular Topics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Modules.slice(0, 6).map((module, index) => (
              <div key={index} className="bg-blue-200  p-4 rounded-md shadow-md flex flex-col items-center transition-colors">
                <img src={module.images} alt={module.title} className="w-full h-48 object-contain bg-blue-100 mb-4 rounded" />
                <h1 className="text-sm text-gray-600 mb-1">Classes SSS 1-3</h1>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">{module.title}</h3>
                <div className="flex justify-between w-full text-sm mb-2">
                  <p className="text-gray-600">Duration: {module.duration}</p>
                  <p className="text-gray-600">Learners: {module.learners}</p>
                </div>
                <div className="flex justify-between gap-2 w-full mt-2">
                  <button className="bg-blue-500 text-white w-1/2 py-2 rounded-md hover:bg-orange-600 transition-colors text-sm">
                    More Info
                  </button>
                  <button className="bg-blue-500 text-white w-1/2 py-2 rounded-md hover:bg-orange-600 transition-colors text-sm">
                    Start Learning
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="flex justify-center mt-12">
            <button className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors text-sm md:text-base">
              Load More
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Afterenroll;
