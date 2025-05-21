import React, { useState } from 'react';
import { FaLock } from 'react-icons/fa';
import Nav from '../../components/Nav';
import Footer from '../../components/footer';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [courses, setCourses] = useState([
    { id: 1, title: 'English Language', locked: false, completed: false },
    { id: 2, title: 'Mathematics', locked: true },
    { id: 3, title: 'General History', locked: true },
    { id: 4, title: 'ICT', locked: true },
  ]);

  const unlockNextCourse = (id) => {
    setCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.id === id + 1 ? { ...course, locked: false } : course
      )
    );
  };

  const completeCourse = (id) => {
    setCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.id === id ? { ...course, completed: true } : course
      )
    );
    unlockNextCourse(id);
  };

  return (
    <>
    <Nav/>
      <div className='bg-blue-100 min-h-screen'>
        <div className='p-5'>
          <h1 className='text-2xl text-blue-900 font-bold font-serif text-center'>
            Dashboard
          </h1>
        </div>
        <div className='flex flex-col md:flex-row justify-around p-5'>
          <div className='rounded-md p-5 w-full md:w-2/5 bg-white shadow-lg mb-5 md:mb-0'>
            <div className='mb-4'>
              <h2 className='text-xl text-blue-900 font-bold font-serif'>
                Start a new course
              </h2>
            </div>
            <div className='bg-white shadow-md rounded-md p-5'>
              <p className='mb-4'>Looking to learn something?</p>
              <Link to="/afterenroll">
              <button className='bg-blue-900 text-white p-2 rounded'>
                Click Here
              </button>
              </Link>
            </div>
          </div>
          <div className='flex justify-center'>
            <img src="/src/assets/sideimg.png" alt="e no dey" className='w-full md:w-1/2 lg:w-1/3' />
          </div>
        </div>
        <div className='flex flex-wrap justify-around p-5'>
          {courses.map((course) => (
            <div
              key={course.id}
              className={`rounded-md p-5 w-full md:w-2/5 bg-white shadow-md m-2 ${
                course.locked ? 'opacity-50' : ''
              }`}
            >
              <h2 className='text-xl text-blue-900 font-bold font-serif flex items-center mb-4 justify-between'>
                {course.title}
                {course.locked && (
                  <FaLock className='ml-2 text-red-500' size={10} />
                )}
              </h2>
              <div className='bg-white shadow-md rounded-md p-5'>
                {course.locked ? (
                  <p>This course is locked.</p>
                ) : (
                  <>
                    {course.id === 1 ? (
                      <>
                        <button
                          className='bg-blue-900 text-white p-2 rounded mb-4 cursor-pointer'
                        >
                          Continue Learning
                        </button>
                        <div className='flex items-center'>
                          <input
                            type='checkbox'
                            id='completeCourse1'
                            onChange={(e) => completeCourse(course.id)}
                          />
                          <label htmlFor='completeCourse1' className='ml-2'>
                            Mark as complete
                          </label>
                        </div>
                      </>
                    ) : (
                      <button
                        onClick={() => completeCourse(course.id)}
                        className='bg-blue-900 text-white p-2 rounded mb-4 cursor-pointer'
                      >
                        Complete Course
                      </button>
                    )}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;