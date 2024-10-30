import React, { useState } from 'react';
import './StudentTestimonials.css';
import { useSwipeable } from 'react-swipeable';
import photo1 from './images/photo_2024-10-14_10-20-58.jpg';
import photo2 from './images/anmut.jpg';
import photo3 from'./images/abe.jpg';

export default function StudentTestimonials() {
  const testimonials = [
    {
      photo: photo1,
      name: "Student One",
      feedback: "The university provided me with amazing opportunities, and the faculty members were always supportive."
    },
    {
      photo: photo2,
      name: "Student Two",
      feedback: "I had access to cutting-edge resources and was able to develop skills that made me competitive in the job market."
    },
    {
      photo: photo3,
      name: "Student Three",
      feedback: "The student community is welcoming, and I felt encouraged to pursue my academic and personal interests."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Handlers for swiping
  const handlers = useSwipeable({
    onSwipedLeft: () => goToNext(),
    onSwipedRight: () => goToPrev(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true // Allows swipe on desktop with mouse drag
  });

  // Function to go to the next testimonial
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  // Function to go to the previous testimonial
  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="testimonials-container">
      <h2 className="testimonials-title">What Our Students Say</h2>
      <div {...handlers} className="slideshow">
        <div className="testimonial-slide">
          <img
            src={testimonials[currentIndex].photo}
            alt={testimonials[currentIndex].name}
            className="testimonial-photo"
          />
          <h3 className="testimonial-name">{testimonials[currentIndex].name}</h3>
          <p className="testimonial-feedback">"{testimonials[currentIndex].feedback}"</p>
        </div>

        {/* Dots to indicate current testimonial */}
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}








