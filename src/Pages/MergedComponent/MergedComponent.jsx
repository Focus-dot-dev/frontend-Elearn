"use client";

import React, { useState, useEffect } from "react";
import { Carousel, Accordion, ProgressBar } from "react-bootstrap";
import axios from "axios";

const MergedComponent = () => {
  const [isVisible, setIsVisible] = useState(false); // For progress bar animation
  const [courses, setCourses] = useState([]); // State to store courses
  const [progressData, setProgressData] = useState([]); // State to store progress data
  const [loading, setLoading] = useState(true); // State to track loading
  const [error, setError] = useState(null); // State to track errors

  useEffect(() => {
    const fetchData = async () => {
      // try {
      //   // Fetch courses
      //   // const coursesResponse = await axios.get(
      //   //   "http://brainthrust-e-learning-api.onrender.com/api/courses"
      //   // );
      //   // setCourses(coursesResponse.data);

      //   // // Fetch progress data
      //   // const progressResponse = await axios.get(
      //   //   "http://brainthrust-e-learning-api.onrender.com/api/progress"
      //   // );
      //   setProgressData(progressResponse.data);

      //   setLoading(false); // Set loading to false
      // } catch (err) {
      //   console.error("Error fetching data:", err);
      //   setError("Failed to load data. Please try again later.");
      //   setLoading(false); // Set loading to false even if there's an error
      // }
    };

    fetchData();

    // Simulate visibility for progress bars
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="hero-main text-center py-5 bg-light">
        <Carousel id="car" className="mb-4">
          {loading && <p>Loading courses...</p>}
          {error && <p className="text-danger">{error}</p>}
          {!loading &&
            !error &&
            courses.slice(0, 3).map((course, index) => (
              <Carousel.Item key={index} interval={1000}>
                <a href="#">
                  <img
                    src={course.image || "/placeholder.png"}
                    alt={course.name}
                    className="d-block w-10"
                  />
                  <h3 className="mt-3">{course.name}</h3>
                </a>
              </Carousel.Item>
            ))}
        </Carousel>
        <p>Engaging video lessons for effortless learning and understanding.</p>
        <button className="btn btn-primary mt-3">Start Learning Now</button>
      </section>

      {/* About Section */}
      <section className="main-sect-div py-5 bg-white">
        <div className="container">
          <div className="row">
            <div className="col-md-6 left-sect-div">
              <h3>About the Subject</h3>
              <p>
                BrainThrust offers a free and comprehensive e-learning
                experience. Our courses are structured into engaging lessons,
                covering essential topics with interactive videos, quizzes, and
                practical exercises to enhance understanding and retention.
                Whether you’re a student preparing for exams, a professional
                looking to sharpen your skills, or a lifelong learner, our
                platform provides flexible, self-paced learning that fits your
                schedule. With expert guidance and real-world applications,
                you’ll gain the confidence to excel in academics and beyond.
              </p>
              <a href="#">
                <button className="btn btn-success">Join the Course</button>
              </a>
            </div>
            <div className="col-md-6 right-sect-div">
              <h6>Categories Progress</h6>
              {loading && <p>Loading progress...</p>}
              {error && <p className="text-danger">{error}</p>}
              {!loading &&
                !error &&
                progressData.map((progress, index) => (
                  <div key={index}>
                    <p>{progress.category}</p>
                    <ProgressBar
                      className="progress-bar"
                      variant={progress.color || "info"}
                      now={isVisible ? progress.percentage : 0}
                      label={`${isVisible ? progress.percentage : 0}%`}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h3 className="text-primary mb-4">Courses</h3>
          <Accordion flush>
            {loading && <p>Loading courses...</p>}
            {error && <p className="text-danger">{error}</p>}
            {!loading &&
              !error &&
              courses.map((course, index) => (
                <Accordion.Item key={index} eventKey={index.toString()}>
                  <Accordion.Header>
                    <img
                      height={20}
                      src={course.icon || "/placeholder-icon.png"}
                      alt={course.name}
                      className="mr-2"
                    />
                    <span>{course.name}</span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>{course.description}</p>
                    <a href="#">
                      <button className="btn btn-primary mt-3">
                        Start Learning Now
                      </button>
                    </a>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default MergedComponent;