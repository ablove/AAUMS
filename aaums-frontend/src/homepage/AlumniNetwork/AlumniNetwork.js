import React from 'react';
import './AlumniNetwork.css';
import { FaCalendarAlt, FaDonate, FaHandshake } from 'react-icons/fa'; // Importing some icons from react-icons

export default function AlumniNetwork() {
  return (
    <div className="alumni-network-container">
      <div className="alumni-card">
        <FaCalendarAlt className="alumni-icon" />
        <h3>Attend Events</h3>
        <p>Join fellow alumni at university events to network, reminisce, and support, fostering lifelong connections and cherished memories.</p>
      </div>

      <div className="alumni-card">
        <FaDonate className="alumni-icon" />
        <h3>Support Your University</h3>
        <p>Support the university by donating, volunteering, attending events, promoting its achievements and advocating for the university's advancement.</p>
      </div>

      <div className="alumni-card">
        <FaHandshake className="alumni-icon" />
        <h3>Reconnect With Your Friends</h3>
        <p>Rekindle old memories, forge new connections, and support the growth and development of Addis Ababa University together.</p>
      </div>
    </div>
  );
}