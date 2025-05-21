import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaGraduationCap } from "react-icons/fa6";
import Nav from '../../components/Nav';
import Footer from '../../components/footer';

const Modules = () => {
  const [modules, setModules] = useState([
    { id: 1, title: 'Pronunciations', details: "This pronunciation course is designed for anyone looking to improve their spoken English and communicate clearly." , Enrolled: 539032, completed: true },
    { id: 2, title: 'Prepositions', details: "This free online course is designed for learners who want to understand and use prepositions correctly in English.", Enrolled: 432339, completed: true },
    { id: 3, title: 'Antonyms', details: "This free online course is designed for learners who want to understand and use Antonyms correctly in English.", Enrolled: 233950, completed: false },
    { id: 4, title: 'Verbs', details: "This free online course is designed for learners who want to understand and use verbs correctly in English.  ",Enrolled: 1232750, completed: false },
    { id: 5, title: 'Adverbs', details: "This free online course is designed for learners who want to understand and use adverbs correctly in English. ", Enrolled: 803350, completed: false },
    { id: 6, title: 'Nouns', details: "This free online course is designed for learners who want to understand and use Nouns correctly in English. ", Enrolled: 564730, completed: false },
    { id: 7, title: 'Adjectival Phrase', details: "This free online course is designed for learners who want to understand and use adjectival phrase correctly in English.", Enrolled: 455342, completed: false },
    { id: 8, title: 'Adverbial Clause', details: "This free online course is designed for learners who want to understand and use adverbial clause correctly in English.", Enrolled: 443353, completed: false },
    { id: 9, title: 'Grammatical Structures', details: "This free online course is designed for learners who want to understand and use Grammatical Structures correctly in English. ", Enrolled: 803350, completed: false },
    { id: 10, title: 'Synonyms', details: "This free online course is designed for learners who want to understand and use Synonyms correctly in English. ", Enrolled: 564730, completed: false },
    { id: 11, title: 'Stress', details: "This free online course is designed for learners who want to understand and use Stress correctly in English.", Enrolled: 455342, completed: false },
    { id: 12, title: 'Idioms', details: "This free online course is designed for learners who want to understand and use idioms correctly in English.", Enrolled: 443353, completed: false },
  ]);
  const [user, setUser] = useState({
    name: 'Don Brown',
    studentId: 207660,
    module: 25
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCompleted, setFilterCompleted] = useState('all');

  const completedModules = modules.filter(module => module.completed).length;
  const totalModules = modules.length;
  const progressPercentage = Math.round((completedModules / totalModules) * 100);

  const toggleModuleCompletion = (id) => {
    setModules(modules.map(module => 
      module.id === id ? { ...module, completed: !module.completed } : module
    ));
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterCompleted(e.target.value);
  };

  const filteredModules = modules.filter(module => {
    const matchesSearch = module.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterCompleted === 'all' || (filterCompleted === 'completed' && module.completed) || (filterCompleted === 'incomplete' && !module.completed);
    return matchesSearch && matchesFilter;
  });

  return (
    <div className='bg-blue-100 w-full'>
      {/* Welcome Section */}
      <Nav/>
      <section className='w-full flex justify-center pt-10 md:pt-20 px-4'>
        <div className='bg-amber-950 rounded-2xl flex flex-col md:flex-row justify-between relative w-full max-w-5xl'>
          <div className='text-slate-50 flex flex-col p-4 md:p-6 font-serif w-full'>
            <h1 className='text-xl md:text-3xl'>Welcome, {user.name}</h1>
            <h5 className='text-sm md:text-base'>STUDENT ID: {user.studentId}</h5>
            <div className='pt-2 mt-2'>
              <h5 className='text-sm md:text-base'>You are currently in module {completedModules} of {totalModules}.</h5>
              <div className="w-full bg-gray-200 rounded-full h-4 mt-4">
                <div
                  className="bg-green-600 h-4 rounded-full transition-all duration-500 ease-in-out"
                  style={{ width: `${progressPercentage}%` }}
                  role="progressbar"
                  aria-valuenow={progressPercentage}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
          <div className='flex justify-center md:absolute md:right-10 md:-top-20'>
            <img src="/src/assets/face_write.png" alt="Student" className='w-32 h-32 md:w-40 md:h-40 object-contain' />
          </div>
        </div>
      </section>

      {/* Current Study Section */}
      <section className='w-full flex flex-col items-center mt-6 md:mt-10 px-4'>
        <h1 className='mb-4 text-xl md:text-2xl self-start ml-4 md:ml-[10%]'>Current Study</h1>
        <div className='flex flex-col md:flex-row w-full max-w-5xl rounded-2xl bg-blue-300 overflow-hidden'>
          <div className='bg-blue-600 w-full md:w-1/4 flex justify-center'>
            <img src="/src/assets/bkss.png" alt="books" className='w-full max-w-[250px] object-contain' />
          </div>
          <div className='flex flex-col md:flex-row items-start md:items-center justify-between p-4 md:p-6 w-full'>
            <div>
              <h1 className='text-xl md:text-3xl text-blue-950 mb-2 md:mb-5'>Pronouns</h1>
              <h2 className='text-sm md:text-base text-blue-950 mt-2 md:mt-10'>Recognize syllable division in words</h2>
            </div>
            <div className='mt-4 md:mt-0'>
              <Link to="/continue-learning">
                <button className='bg-blue-950 text-white p-2 rounded-md hover:bg-blue-800 transition-all w-full md:w-auto'>
                  Continue Learning
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Courses Section */}
      <section className='mt-8 md:mt-15 px-4'>
        <h1 className='text-xl md:text-2xl font-bold text-blue-500 mb-6 ml-2 md:ml-10'>Structured Courses</h1>
        
        {/* Search and Filter */}
        <div className='flex flex-col md:flex-row justify-between gap-4 mb-5 ml-2 md:ml-10'>
          <input
            type='text'
            placeholder='Search modules...'
            value={searchQuery}
            onChange={handleSearchChange}
            className='p-2 border rounded w-full md:w-auto'
          />
          <select 
            value={filterCompleted} 
            onChange={handleFilterChange} 
            className='p-2 border rounded w-full md:w-auto'
          >
            <option value='all'>All</option>
            <option value='completed'>Completed</option>
            <option value='incomplete'>Incomplete</option>
          </select>
        </div>
        
        {/* Module Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-2 md:p-10'>
          {filteredModules.map((module) => (
            <div
              key={module.id}
              className={`w-full p-4 mb-4 rounded-lg shadow-md ${module.completed ? 'bg-green-100' : 'bg-white'}`}
            >
              <div className='flex flex-col md:flex-row gap-4'>
                <div className='flex flex-col items-center md:items-start'>
                  <div className='bg-blue-950 w-full max-w-[160px] rounded-sm flex justify-center p-2'>
                    <img src="/src/assets/man_books.png" alt="Course icon" className='w-4/5 object-contain' />
                  </div>
                  <div className='flex items-center mt-2'>
                    <img src="/src/assets/small-logo.png" alt="Publisher logo" className='h-8 mr-2' />
                    <div className='text-xs'>
                      <p className='font-semibold'>COURSE PUBLISHER</p>
                      <p className='underline'>Advanced Learning- Learn English</p>
                    </div>
                  </div>
                </div>
                
                <div className='flex-1'>
                  <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-2'>
                    <h1 className='font-bold text-lg'>{module.title}</h1>
                    <h2 className='flex items-center text-sm text-gray-600'>
                      <FaGraduationCap className="mr-1" /> {module.Enrolled.toLocaleString()}
                    </h2>
                  </div>
                  
                  <div className='flex flex-col'>
                    <p className='text-sm text-gray-700 mb-4'>
                      {module.details}..
                      <Link className='font-bold ml-1 text-blue-600' to={`/modules/${module.id}`}>
                        Read More
                      </Link>
                    </p>
                    
                    <div className='flex flex-col sm:flex-row justify-between items-center gap-2 mt-2'>
                      <div className='flex items-center'>
                        <input
                          type='checkbox'
                          checked={module.completed}
                          onChange={() => toggleModuleCompletion(module.id)}
                          className='mr-2 h-5 w-5'
                          id={`module-${module.id}`}
                        />
                        <label htmlFor={`module-${module.id}`} className='text-sm'>
                          {module.completed ? 'Completed' : 'Incomplete'}
                        </label>
                      </div>
                      
                      <div className='flex gap-2'>
                        <button className='border-2 px-3 py-1 text-sm hover:bg-gray-100 transition-colors'>
                          <Link to={`/modules/${module.id}`}>More Info</Link>
                        </button>
                        <button className='bg-orange-400 px-3 py-1 text-sm rounded hover:bg-orange-500 transition-colors'>
                          <Link to={`/modules/${module.id}/begin`}>Begin Learning</Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default Modules