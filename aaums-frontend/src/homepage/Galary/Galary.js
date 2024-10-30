import React ,{useState}from 'react'
import { FaEye, FaLink } from 'react-icons/fa';
import photo1 from './images/113-600x450.jpg'
import photo2 from './images/19-522x392.jpg'
import photo3 from './images/28-600x450.jpg'
import photo4 from './images/81-600x450.jpg'
import photo5 from './images/gettyimages-1188300050-612x612.jpg'
import photo6 from './images/gettyimages-165166482-612x612.jpg'
import photo7 from './images/gettyimages-452610908-612x612.jpg'
import photo8 from './images/gettyimages-944728718-612x612.jpg'

import './Galary.css';
export default function Galary() {
    return (
      <div className="gallery-container">
        <h2 className='GT'>AAU Photo Gallery</h2>
        <div className="gallery">
          {[photo1, photo2, photo3, photo4].map((photo, index) => (
            <div key={index} className="gallery-item">
              <img
                src={photo}
                alt={`AAU Gallery ${index + 1}`}
              />
              {/* Icons (Hidden by default, shown on hover) */}
              <div className="icons-container">
                <FaEye className="icon-eye" title="View Image" />
                <a href={`https://external-link-${index + 1}.com`} target="_blank" rel="noopener noreferrer">
                  <FaLink className="icon-link" title="Open Link" />
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* See More button */}
        <button className="see-more-btn">See More</button>
      </div>
    );
  }


  