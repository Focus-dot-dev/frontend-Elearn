import React, { useState } from 'react';
import { FaCheckCircle, FaGraduationCap, FaThumbsDown, FaThumbsUp } from 'react-icons/fa';
import { IoCheckmark } from 'react-icons/io5';
import { VscCircleSlash } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav';
import Footer from '../../components/footer';

const Enroll = () => {
    const [likes, setLikes] = useState(734);
    const [dislikes, setDislikes] = useState(573);
    const [activeTab, setActiveTab] = useState('');
    const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);
    const [currentModuleIndex, setCurrentModuleIndex] = useState(0);

    const modules = [
        {
            title: 'MODULE 1',
            subtitle: 'Pronouns',
            description: `This module introduces English Pronouns, an essential part of English grammar...`,
            topics: [
                'Definition and Types of Pronouns',
                'Functions of Pronouns in Sentences',
                'Agreement of Pronouns with Antecedents',
                'Relative Pronouns and Their Usage',
                'Indefinite Pronouns and Their Correct Use',
                'Common Errors in Pronoun Usage',
                'Pronouns in Formal and Informal Writing',
                'Pronouns in Speech and Communication',
                'Complex Sentences with Pronouns',
            ],
        },
        {
            title: 'MODULE 2',
            subtitle: 'Verbs',
            description: `This module covers English verbs, including their types, tenses, and usage...`,
            topics: [
                'Introduction to Verbs',
                'Types of Verbs',
                'Verb Tenses and Their Usage',
                'Irregular Verbs',
                'Modal Verbs and Their Functions',
                'Common Errors in Verb Usage',
                'Verbs in Formal and Informal Writing',
                'Verbs in Speech and Communication',
                'Advanced Verb Constructions',
            ],
        },
    ];

    const handleLike = () => setLikes(likes + 1);
    const handleDislike = () => setDislikes(dislikes + 1);
    const handleTabClick = (tab) => setActiveTab(activeTab === tab ? '' : tab);
    const toggleAssessmentDropdown = () => setIsAssessmentOpen(!isAssessmentOpen);
    const handleNextModule = () => currentModuleIndex < modules.length - 1 && setCurrentModuleIndex(currentModuleIndex + 1);
    const handlePreviousModule = () => currentModuleIndex > 0 && setCurrentModuleIndex(currentModuleIndex - 1);

    const currentModule = modules[currentModuleIndex];

    return (
        <>
           
        <div className='bg-blue-200'>
            <Nav />
            <section className="bg-blue-200 min-h-screen flex flex-col md:flex-row p-5 gap-5">
            <aside className="w-full md:w-2/5 bg-white flex flex-col shadow-xl rounded-xl h-3/5 shadow-black p-5">
                <div className="py-10 space-y-5">
                    <h1>Learn English: Pronunciation</h1>
                    <div className="flex items-center gap-2">
                        <FaGraduationCap />
                        <div className="flex gap-1 font-thin">
                            <h2>187,298</h2>
                            <h3>students currently enrolled</h3>
                        </div>
                    </div>
                    <div className="bg-blue-950 flex justify-around items-center text-white w-full p-2">
                        <div className="flex items-center cursor-pointer" onClick={handleLike}>
                            <FaThumbsUp />
                            <h3 className="font-thin ml-2">{likes}</h3>
                        </div>
                        <div className="flex items-center cursor-pointer" onClick={handleDislike}>
                            <FaThumbsDown />
                            <h3 className="font-thin ml-2">{dislikes}</h3>
                        </div>
                        <div className="flex items-center">
                            <VscCircleSlash />
                            <h3 className="font-thin ml-2">Not Interested</h3>
                        </div>
                    </div>
                    <div>
                        <h3>This module includes:</h3>
                        {['Videos and Quizzes', 'Final Assessment', 'Certification'].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                                <IoCheckmark />
                                <h3>{item}</h3>
                            </div>
                        ))}
                    </div>
                    <Link to="/payment">
                        <button className="bg-blue-800 text-white p-2 m-2 rounded-md w-full md:w-auto hover:bg-blue-700 hover:scale-105 transition-transform duration-300">
                            Start button
                        </button>
                    </Link>
                    <div className="flex gap-3">
                        <img src="/src/assets/small-logo.png" alt="" width={50} />
                        <div>
                            <h2>COURSE PUBLISHER</h2>
                            <Link><small className="underline">Advance Learning: Learn English</small></Link>
                        </div>
                    </div>
                </div>
            </aside>

            <article className="w-full md:w-3/5 flex flex-col">
                <div>
                    <h1 className='font-bold text-2xl'>Learn English: Pronunciation</h1>
                    <h3 className='font-semibold text-lg'>In this free online course, you will learn the fundamentals of English pronunciation...</h3>
                    <small>This pronunciation course is designed for anyone looking to improve their spoken English...</small>
                </div>

                <div className='flex flex-col md:flex-row gap-5 items-center justify-center p-5 rounded-md shadow-md mt-5'>
                    <div className="flex gap-3 items-center">
                        <img src="/src/assets/small-logo.png" alt="" width={50} />
                        <div>
                            <h2>COURSE PUBLISHER</h2>
                            <Link><small className="underline">Advance Learning: Learn English</small></Link>
                        </div>
                    </div>
                    <Link to={""}>
                        <button className='bg-blue-800 text-white p-2 rounded-md w-full md:w-auto hover:bg-blue-700 hover:scale-105 transition-transform duration-300'>
                            Start Learning Now
                        </button>
                    </Link>
                </div>

                <div className='flex flex-col gap-5 p-5 bg-white rounded-md shadow-md mt-5'>
                    <h1>In This Free Course, You Will Learn How To</h1>
                    {[
                        'Sounds of English (Phonetics & Phonology)',
                        'Word Stress & Syllables',
                        'Intonation & Rhythm',
                        'Pronouncing Difficult Words',
                        'Connected Speech & Fluency',
                        'Pronunciation of English Contractions & Weak Forms',
                        'Reading Aloud & Public Speaking Skills'
                    ].map((text, index) => (
                        <small key={index} className='flex gap-2 items-center'>
                            <FaCheckCircle color='green' /> {text}
                        </small>
                    ))}
                </div>

                <div className="bingo flex flex-col gap-5 p-5 bg-white rounded-md shadow-md mt-5">
                    <div className="flex flex-col md:flex-row justify-around gap-2">
                        {['modules', 'description', 'certificates'].map(tab => (
                            <button
                                key={tab}
                                className={`p-2 rounded-md ${activeTab === tab ? 'text-black underline' : 'bg-white text-black'} cursor-pointer`}
                                onClick={() => handleTabClick(tab)}
                            >
                                {tab === 'modules' ? 'Course Modules' : tab === 'description' ? 'Course Descriptions' : 'BrainThrust Certificates'}
                            </button>
                        ))}
                    </div>

                    <div className="mt-5">
                        {activeTab === 'modules' && (
                            <div>
                                <div className="flex flex-col md:flex-row gap-5 items-center justify-between p-5 bg-white rounded-md shadow-md my-5">
                                    <div className="flex flex-col space-y-2">
                                        <h3>{currentModule.title}</h3>
                                        <h3>{currentModule.subtitle}</h3>
                                    </div>
                                    <button className="bg-blue-800 text-white p-2 rounded-md hover:bg-blue-700 hover:scale-105 transition-transform">
                                        <Link to="/learn">Start Learning Now</Link>
                                    </button>
                                </div>
                                <small className="text-start my-5">{currentModule.description}</small>
                                <ol className="mt-10 list-decimal text-start space-y-5 text-sm">
                                    {currentModule.topics.map((topic, index) => (
                                        <li key={index} className="pl-5 hover:shadow-md">
                                            <Link>{topic}</Link>
                                        </li>
                                    ))}
                                </ol>
                                <div className="flex justify-between mt-5">
                                    <button onClick={handlePreviousModule} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" disabled={currentModuleIndex === 0}>Previous Module</button>
                                    <button onClick={handleNextModule} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" disabled={currentModuleIndex === modules.length - 1}>Next Module</button>
                                </div>
                            </div>
                        )}
                        {activeTab === 'description' && (
                            <div>
                                <h2 className="text-lg font-bold">Course Descriptions</h2>
                                <p>This course is designed to help learners improve their English pronunciation skills...</p>
                            </div>
                        )}
                        {activeTab === 'certificates' && (
                            <div>
                                <h2 className="text-lg font-bold">BrainThrust Certificates</h2>
                                <p>Upon successful completion of this course, you will receive a BrainThrust Certificate...</p>
                            </div>
                        )}
                    </div>
                </div>

                <div className="bg-white rounded-md shadow-md mt-5 p-5">
                    <button className="w-full bg-blue-500 text-white p-2 rounded-md flex justify-between items-center" onClick={toggleAssessmentDropdown}>
                        Course Assessment
                        <span>{isAssessmentOpen ? '▲' : '▼'}</span>
                    </button>
                    {isAssessmentOpen && (
                        <ul className="mt-2 bg-blue-100 border border-gray-300 rounded-md shadow-lg p-3">
                            <li className="hover:bg-blue-200 p-2 rounded-md cursor-pointer">
                                <Link to="/assessment">Take Assessment</Link>
                            </li>
                        </ul>
                    )}
                </div>

                <div className="bg-blue-400 text-black p-5 rounded-md shadow-md mt-10 text-start flex flex-col items-start">
                    <h2 className="text-2xl font-bold mb-3">Not sure where to begin?</h2>
                    <p className="text-base md:text-lg mb-5">Find the career that suits you best and kickstart your journey with a step-by-step guide.</p>
                    <button className="bg-blue-950 text-white px-6 py-2 rounded-md font-semibold hover:bg-gray-200 transition-colors hover:text-black">Start Somewhere Now</button>
                </div>

                <div className="bg-white rounded-md shadow-md mt-5 pt-5 pl-2">
                    <h1 className='text-xl font-semibold text-left pl-5'>Knowledge & Skill You will Learn</h1>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-5 gap-5'>
                        {['English Grammar', 'English Language', 'English Vocabulary', 'English Pronunciations', 'English Conversation', 'Basic English', 'English Speaking', 'Oral English'].map((skill, i) => (
                            <button key={i} className='border-2 rounded-3xl p-1 hover:bg-blue-200'>{skill}</button>
                        ))}
                    </div>
                </div>
            </article>
        </section>
            <Footer/>
        </div>
        </>
    );
};

export default Enroll;
