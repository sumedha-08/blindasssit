import React, { useState } from "react";
import "./Contacts.css"; // Styles for better UI
import PermContactCalendarTwoToneIcon from '@mui/icons-material/PermContactCalendarTwoTone';
import PhoneForwardedTwoToneIcon from '@mui/icons-material/PhoneForwardedTwoTone';
import MessageTwoToneIcon from '@mui/icons-material/MessageTwoTone';
import LanguageTwoToneIcon from '@mui/icons-material/LanguageTwoTone';

const Contacts = () => {
  // Sample Data (Replace with MongoDB data later)
  const [contacts, ] = useState([
    { id: 1, name: "Amit Sharma", role: "Helper", phone: "9876543210", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyCkDpzb276E-XCF9UzIqaVXYbqDHWiWjnnA&s" },
    { id: 2, name: "Priya Verma", role: "Blind Student", phone: "8765432109", image: "https://photosnow.org/wp-content/uploads/2024/04/anime-dp-for-boys_14.jpg" },
    { id: 3, name: "Rahul Singh", role: "Helper", phone: "7654321098", image: "https://i.pinimg.com/236x/9a/c3/d9/9ac3d91c0e6c951ae495d5fe5099d52b.jpg" },
    { id: 4, name: "Ananya Rao", role: "Blind Student", phone: "6543210987", image: "https://i.pinimg.com/736x/54/1b/4c/541b4cd677a75d81d995296798688eb0.jpg" }
  ]);

  // State for Search Filter
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="contacts-container">
      <h2><PermContactCalendarTwoToneIcon/> Contacts</h2>

      {/* Search Bar */}
      <input 
        type="text" 
        placeholder="Search by name..." 
        className="search-bar"
        onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
      />

      {/* Contact List */}
      <div className="contacts-list">
        {contacts
          .filter(contact => contact.name.toLowerCase().includes(searchTerm))
          .map((contact) => (
            <div key={contact.id} className="contact-card">
              <img src={contact.image} alt={contact.name} className="contact-img" />
              <div className="contact-info">
                <h3>{contact.name}</h3>
                <p className={contact.role === "Helper" ? "helper-badge" : "student-badge"}>{contact.role}</p>
                <p><LanguageTwoToneIcon/> {contact.phone}</p>
              </div>
              <div className="contact-actions">
                <button className="call-btn"><PhoneForwardedTwoToneIcon/> Call </button>
                <button className="msg-btn"><MessageTwoToneIcon/> Message</button>
              </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Contacts;
