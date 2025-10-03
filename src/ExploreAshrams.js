import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaShareAlt } from "react-icons/fa";
import "./ExploreAshams.css"; // Import CSS

export const ashrams = [
  {
    id: 1,
    name: "Drishti Foundation Ashram",
    location: "Delhi, India",
    description: "Provides advanced education and vocational training for visually impaired students.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvEmHWYpms4J0-61eWbtKGY41syF_ttsTnZw&s",
    contact: {
      phone: "+91 98123 45678",
      email: "info@drishtiashram.org",
      website: "www.drishtiashram.org"
    },
    foundedBy: "Dr. Aarti Sharma",
    foundedYear: 1998,
    mission: "Empowering visually impaired individuals through education and skill development.",
    keyServices: ["Braille education", "Vocational training", "Assistive technology workshops"],
    successStories: ["Rahul, a former student, is now a software developer at a multinational company."],
    testimonials: ["'Drishti Ashram transformed my life and gave me a purpose.' - Priya S."],
    events: ["Annual Cultural Fest - Dec 2024", "Skill Training Workshop - March 2025"],
    announcements: ["New hostel facilities opening in 2025"]
  },
  {
    id: 2,
    name: "Jyoti Vikas Ashram",
    location: "Pune, India",
    description: "Offers technology-driven learning programs and skill development for blind individuals.",
    image: "https://s3.youthkiawaaz.com/wp-content/uploads/2019/04/27113502/Website-Thumbnail-DU-visually-impaired-students.jpg",
    contact: {
      phone: "+91 98765 12345",
      email: "contact@jyotivikas.org",
      website: "www.jyotivikas.org"
    },
    foundedBy: "Shri Ramesh Bhat",
    foundedYear: 2005,
    mission: "Enhancing accessibility through technology-driven education.",
    keyServices: ["AI-powered learning tools", "Digital literacy", "Job placement assistance"],
    successStories: ["Anjali secured a job as a data analyst after completing the training program."],
    testimonials: ["'The personalized training helped me achieve my dreams.' - Kunal R."],
    events: ["Tech for Blind Seminar - Jan 2025", "Coding Bootcamp - April 2025"],
    announcements: ["Partnership with IT firms for job placements"]
  },
  {
    id: 3,
    name: "Ananda Learning Ashram",
    location: "Chennai, India",
    description: "Focuses on inclusive education with Braille and digital learning tools.",
    image: "https://www.mrunalpawar.com/wp-content/uploads/2020/07/mp-pbs-3.jpg",
    contact: {
      phone: "+91 91234 56789",
      email: "ananda@learningashram.in",
      website: "www.anandaashram.in"
    },
    foundedBy: "Prof. Meena Kumar",
    foundedYear: 2010,
    mission: "Providing inclusive learning opportunities for the visually impaired.",
    keyServices: ["Braille education", "Scholarship programs", "Career counseling"],
    successStories: ["Vikram, a visually impaired student, topped his university exams."],
    testimonials: ["'The teachers here treat us like family.' - Arjun M."],
    events: ["Education Awareness Camp - May 2025", "Inclusive Learning Workshop - Aug 2025"],
    announcements: ["New scholarship program for top-performing students"]
  },
  {
    id: 4,
    name: "Nethra Vidya Ashram",
    location: "Bengaluru, India",
    description: "Equips blind students with higher education and career-oriented skills.",
    image: "https://newsd.in/wp-content/uploads/2018/09/Blind-students.jpg",
    contact: {
      phone: "+91 99876 54321",
      email: "nethravidya@ashram.org",
      website: "www.nethravidya.org"
    },
    foundedBy: "Dr. Rajesh Iyer",
    foundedYear: 2003,
    mission: "Building self-sufficient individuals through education and career guidance.",
    keyServices: ["Higher education courses", "Government exam coaching", "Corporate training"],
    successStories: ["Sonia cracked the UPSC exams after training at the ashram."],
    testimonials: ["'I gained confidence and knowledge that changed my life.' - Ravi T."],
    events: ["Competitive Exam Prep Camp - July 2025", "Career Guidance Webinar - Nov 2025"],
    announcements: ["New hostel block under construction"]
  },
  {
    id: 5,
    name: "Prakash Education Ashram",
    location: "Varanasi, India",
    description: "Specializes in competitive exam coaching and academic support for the visually impaired.",
    image: "https://content.jdmagicbox.com/comp/pune/e4/020pxx20.xx20.170919134622.t8e4/catalogue/mai-bal-bhavan-blind-school-dehu-road-pune-schools-for-blind-dleof9x1p4.JPG",
    contact: {
      phone: "+91 98765 87654",
      email: "prakash@eduashram.com",
      website: "www.prakashashram.com"
    },
    foundedBy: "Swami Vivekananda Trust",
    foundedYear: 2015,
    mission: "Making quality education accessible to all, regardless of physical limitations.",
    keyServices: ["Competitive exam coaching", "Free tutoring", "Library with Braille books"],
    successStories: ["Amit topped the state civil service exams with our support."],
    testimonials: ["'Best institute for visually impaired students.' - Neha J."],
    events: ["Annual Exam Preparation Camp - Feb 2025", "Educational Fair - Oct 2025"],
    announcements: ["New branch opening in Lucknow"]
  },
  {
    id: 6,
    name: "Divya Drishti Ashram",
    location: "Kolkata, India",
    description: "Provides free education, hostel facilities, and job training for blind youth.",
    image: "https://nirmawebsite.s3.ap-south-1.amazonaws.com/wp-content/uploads/sites/25/2021/04/BPA.jpg",
    contact: {
      phone: "+91 97654 23456",
      email: "divyadrishti@kolkata.org",
      website: "www.divyadrishti.org"
    },
    foundedBy: "Maa Shakti Foundation",
    foundedYear: 2000,
    mission: "Ensuring no visually impaired child is deprived of education.",
    keyServices: ["Free education", "Hostel facilities", "Vocational training"],
    successStories: ["Kiran became an entrepreneur after learning at Divya Drishti."],
    testimonials: ["'Best place for inclusive education.' - Shreya P."],
    events: ["Entrepreneurship Workshop - Sept 2025", "Job Fair - Dec 2025"],
    announcements: ["Launching new tech-based education programs"]
  },
  {
    id: 7,
    name: "Jyoti Vidya Ashram",
    location: "Pune, India",
    description: "Offers specialized coaching and academic support for visually impaired students preparing for competitive exams.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0ulkzMLvSoJJN-zMvJhIcyeqYnl_RFi1m-6tou_Cl7kfI8U5TwLIgiZpAXQafg1iVP4A&usqp=CAU",
    contact: {
      phone: "+91 99456 78901",
      email: "contact@jyotividya.org",
      website: "www.jyotividya.org"
    },
    foundedBy: "Dr. Shankar Deshmukh",
    foundedYear: 2012,
    mission: "Bridging the education gap for visually impaired students.",
    keyServices: ["Online coaching", "Mentorship programs", "Accessible study material"],
    successStories: ["Meera won a national scholarship after training here."],
    testimonials: ["'The mentors are very supportive and encouraging.' - Dev K."],
    events: ["Scholarship Awareness Drive - June 2025", "National Conference on Blind Education - Oct 2025"],
    announcements: ["Opening a research center for assistive technology"]
  },
  {
    id: 8,
    name: "Surya Prakash Ashram",
    location: "Bengaluru, India",
    description: "Provides free education, hostel facilities, and vocational training for visually impaired youth.",
    image: "https://stories.ourbetterworld.org/2019/12/photos-by-the-blind/assets/SkumLfVcBW/img_5926-2560x1707.jpeg",
    contact: {
      phone: "+91 98765 43210",
      email: "contact@suryaprakashashram.org",
      website: "www.suryaprakashashram.org"
    },
    foundedBy: "Dr. Rajesh Kumar",
    foundedYear: 2005,
    mission: "Empowering visually impaired individuals through education and skill training.",
    keyServices: [
      "Braille education",
      "Vocational training",
      "Hostel facilities"
    ],
    successStories: ["Several students have secured jobs in IT and government sectors after training here."],
    testimonials: ["Beneficiaries praise the ashram for providing independence and career opportunities."],
    events: ["Upcoming workshops on digital literacy and career development."],
    announcements: ["New Braille library launched; Scholarship applications open."]
  }

];

const ExploreAshrams = () => {
  const [search, setSearch] = useState("");
  const [filterLocation, setFilterLocation] = useState("");

  const filteredAshrams = ashrams.filter(
    (ashram) =>
      ashram.name.toLowerCase().includes(search.toLowerCase()) &&
      (filterLocation === "" || ashram.location.includes(filterLocation))
  );

  const handleShare = (name) => {
    alert(`✅Share link for ${name} copied!`);
  };

  return (
    <section className="explore-ashrams">
      <h2>Explore Ashrams</h2>

      {/* Search and Filter Section */}
      <div className="search-filter-container">
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search Ashram..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <select
          className="filter-dropdown"
          value={filterLocation}
          onChange={(e) => setFilterLocation(e.target.value)}
        >
          <option value="">All Locations</option>
          <option value="Delhi, India">Delhi</option>
          <option value="Pune, India">Pune</option>
          <option value="Chennai, India">Chennai</option>
          <option value="Bengaluru, India">Bengaluru</option>
          <option value="Varanasi, India">Varanasi</option>
          <option value="Kolkata, India">Kolkata</option>
        </select>
      </div>

      {/* Ashram Grid */}
      <div className="ashram-grid">
        {filteredAshrams.map((ashram) => (
          <div key={ashram.id} className="ashram-card">
            <img src={ashram.image} alt={ashram.name} />
            <div className="ashram-info">
              <h3>{ashram.name}</h3>
              <p>{ashram.location}</p>
              <p>{ashram.description}</p>
              <div className="button-group">
                <Link to={`/ashram/${ashram.id}`}>
                  <button className="view-details">View Details</button>
                </Link>
                <button className="share-btn" onClick={() => handleShare(ashram.name)}>
                  <FaShareAlt /> Share
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExploreAshrams;
