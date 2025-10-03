import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ashrams } from "./ExploreAshrams";
import "./AshramDetails.css";

const AshramDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Hook for navigation
  const ashram = ashrams.find((ashram) => ashram.id === parseInt(id));

  if (!ashram) {
    return <h2>Ashram not found</h2>;
  }

  return (
    <div className="ashram-details">
      <h1>{ashram.name}</h1>
      <p><strong>Location:</strong> {ashram.location}</p>
      
      <h2>Contact</h2>
      <p><strong>Phone:</strong> {ashram.contact.phone || "Not available"}</p>
      <p>
        <strong>Email:</strong> 
        <a href={`mailto:${ashram.contact.email}`}>
          {ashram.contact.email || "Not available"}
        </a>
      </p>
      <p>
        <strong>Website:</strong>{" "}
        <a href={ashram.contact.website} target="_blank" rel="noopener noreferrer">
          {ashram.contact.website || "Not available"}
        </a>
      </p>
      
      <p>
        <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">
          View on Map
        </a>
      </p>

      <h2>About the Ashram</h2>
      <p><strong>Founded By:</strong> {ashram.foundedBy} in {ashram.foundedYear}</p>
      <p><strong>Mission & Vision:</strong> {ashram.mission}</p>
      <p><strong>Key Services:</strong> {ashram.description}</p>

      <h2>Facilities Available</h2>
      <ul>
        <li><strong>Accommodation:</strong> Rooms, Dormitories, Accessibility Features</li>
        <li><strong>Food & Nutrition:</strong> Free meals, special diet plans</li>
        <li><strong>Medical Support:</strong> On-site doctors, hospital tie-ups</li>
        <li><strong>Education & Training:</strong> Braille education, skill development</li>
        <li><strong>Technology & Accessibility:</strong> Screen readers, mobility assistance</li>
        <li><strong>Recreation & Activities:</strong> Music, sports, cultural events</li>
      </ul>

      <h2>Residents' Information</h2>
      <ul>
        <li><strong>Capacity:</strong> (Total Capacity) residents</li>
        <li><strong>Age Group:</strong> Children, Adults, Elderly</li>
        <li><strong>Special Care Needs:</strong> Therapy, medical conditions</li>
      </ul>

      <h2>Success Stories & Testimonials</h2>
      <ul>
        {ashram.successStories && ashram.successStories.length > 0 ? (
          ashram.successStories.map((story, index) => <li key={index}>{story}</li>)
        ) : (
          <p>No success stories available.</p>
        )}
      </ul>

      <h3>Testimonials</h3>
      <ul>
        {ashram.testimonials && ashram.testimonials.length > 0 ? (
          ashram.testimonials.map((testimonial, index) => <li key={index}>"{testimonial}"</li>)
        ) : (
          <p>No testimonials available.</p>
        )}
      </ul>

      <h2>Events & Announcements</h2>
      <h3>Upcoming Events</h3>
      <ul>
        {ashram.events && ashram.events.length > 0 ? (
          ashram.events.map((event, index) => <li key={index}>{event}</li>)
        ) : (
          <p>No upcoming events.</p>
        )}
      </ul>

      <h3>Announcements</h3>
      <ul>
        {ashram.announcements && ashram.announcements.length > 0 ? (
          ashram.announcements.map((announcement, index) => <li key={index}>{announcement}</li>)
        ) : (
          <p>No announcements available.</p>
        )}
      </ul>

      <h2>Gallery & Media</h2>
      <div className="gallery">
        <img src={ashram.image} alt={ashram.name} />
      </div>

      {/* Interested Button - Navigates to BlindStudents.js */}
      <div className="interested">
      <button className="interested-button" onClick={() => navigate("/blind-students")}>
        I'm Interested
      </button>
      </div>
    </div>
  );
};

export default AshramDetails;
