import React from "react";
import { useNavigate } from "react-router-dom";
import "./BlindStudents.css"; // Ensure the CSS file is created and linked

const students = [
  {
    id: 1,
    name: "Aarav Sharma",
    age: 16,
    standard: "10th",
    subject: "Mathematics",
    examTime: "10:00 AM",
    date: "10th March 2024",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs_0WUZg6KLD1vC4t3n6NLlAs3YIvUW3VB3xoK9JF1xTENhB2I_cjv0uFuxdVsgCItriU&usqp=CAU",
  },
  {
    id: 2,
    name: "Meera Joshi",
    age: 17,
    standard: "12th",
    subject: "Physics",
    examTime: "12:30 PM",
    date: "12th March 2024",
    image: "https://prodigy.net.in/assets/image/studentprofile/thumb/1563720805ashwini.JPG",
  },
  {
    id: 3,
    name: "Rohan Desai",
    age: 15,
    standard: "9th",
    subject: "English",
    examTime: "9:00 AM",
    date: "14th March 2024",
    image: "https://prodigy.net.in/assets/image/studentprofile/thumb/1564131042charanjitalc.JPG",
  },
  {
    id: 4,
    name: "Sanya Kapoor",
    age: 18,
    standard: "12th",
    subject: "Biology",
    examTime: "2:00 PM",
    date: "16th March 2024",
    image: "https://prodigy.net.in/assets/image/studentprofile/thumb/1564130812aniketalc.JPG",
  },
  {
    id: 5,
    name: "Kabir Malhotra",
    age: 14,
    standard: "8th",
    subject: "Science",
    examTime: "11:00 AM",
    date: "18th March 2024",
    image: "https://prodigy.net.in/assets/image/studentprofile/thumb/1563720840aneesh.JPG",
  },
  {
    id: 6,
    name: "Riya Malhotra",
    age: 14,
    standard: "8th",
    subject: "Science",
    examTime: "11:00 AM",
    date: "18th March 2024",
    image: "https://www.vikasconcept.com/wp-content/uploads/2021/10/Ananya-1.png",
  },
  {
        id: 7,
        name: "Sanya Kapoor",
        age: 18,
        standard: "12th",
        subject: "Biology",
        examTime: "2:00 PM",
        date: "16th March 2024",
        image: "https://shollaschoolcollege.edu.bd/front/img/students/5d5f7b2de45b025.JPG",
      },
      {
        id: 8,
        name: "Riya Malhotra",
        age: 14,
        standard: "8th",
        subject: "Science",
        examTime: "11:00 AM",
        date: "18th March 2024",
        image: "https://www.vikasconcept.com/wp-content/uploads/2021/10/Ananya-1.png",
      },
];

const BlindStudents = () => {
  const navigate = useNavigate();

  return (
    <div className="students-container">
      <h2 className="title">Blind Students Needing Assistance</h2>
      <div className="students-grid">
        {students.map((student) => (
          <div key={student.id} className="student-card">
            <img src={student.image} alt={student.name} className="student-img" />
            <h3 className="student-name">{student.name}</h3>
            <p><strong>Age:</strong> {student.age}</p>
            <p><strong>Class:</strong> {student.standard}</p>
            <p><strong>Exam Subject:</strong> {student.subject}</p>
            <p><strong>Exam Time:</strong> {student.examTime}</p>
            <p><strong>Exam Date:</strong> {student.date}</p>
            <button className="help-btn" onClick={() => navigate("/register-helper")}>
              Help
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlindStudents;

