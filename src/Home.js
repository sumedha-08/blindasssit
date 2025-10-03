import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";

const Home = () => {
  const images = [
    "https://www.shutterstock.com/image-photo/wide-angle-shot-smiling-male-600nw-2545738775.jpg",
    "https://img.freepik.com/premium-photo/visually-impaired-student-using-braille-tablet-with-teacher-assistance-inclusive-classroom_416256-94994.jpg",
    "https://static.vecteezy.com/system/resources/thumbnails/039/051/987/small/ai-generated-an-old-globe-lies-on-a-book-in-a-library-retro-style-science-education-travel-vintage-background-education-history-and-geography-team-photo.jpeg",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="home-container">
      <Slider {...settings} className="slider">
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img src={image} alt={`Slide ${index}`} className="slide-image" />
          </div>
        ))}
      </Slider>

      <div className="overlay">
        <h1>Empowering Lives with BlindAssist</h1>
        <p>Connecting Ashrams & Helpers to create a brighter future. Join us in making a difference!</p>
        <div className="buttons">
          <Link to="/ashram" className="btn">Explore Ashrams</Link>
          <Link to="/register-helper" className="btn">Become a Helper</Link>
        </div>
      </div>
      
      {/* working */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <img src="https://us.123rf.com/450wm/faysalfarhan/faysalfarhan1711/faysalfarhan171142549/89590125-browse-isolated-on-green-round-button-abstract-illustration.jpg?ver=6" alt="Step 1" />
            <h3>Find an Ashram</h3>
            <p>Browse through registered ashrams and connect with them easily.</p>
          </div>
          <div className="step">
            <img src="https://www.transparentpng.com/download/register-button/WqEkyx-register-button-circle-background.png" alt="Step 2" />
            <h3>Register as a Helper</h3>
            <p>Sign up and offer your support to those in need.</p>
          </div>
          <div className="step">
            <img src="https://image.pngaaa.com/965/704965-middle.png" alt="Step 3" />
            <h3>Make an Impact</h3>
            <p>Your contribution helps in building a supportive community.</p>
          </div>
        </div>
      </section>

      {/* cta */}
      <section className="cta-section">
  <h2>Join Us in Making a Difference</h2>
  <p>Become a part of BlindAssist today and contribute towards a better future.</p>
  <Link to="/register-helper" className="btn">Get Started</Link>
</section>

      {/* stories */}
      <section className="success-stories">
  <h2>Our Success Stories</h2>
  <div className="story-container">
    <div className="story">
      <img src="https://www.fcriindia.com/wp-content/uploads/2016/03/693-Eldin-passport-size.jpg" alt="Success 1" />
      <p>"BlindAssist helped me find the perfect ashram where I feel safe and valued." - Rahul</p>
    </div>
    <div className="story">
      <img src="https://iimk.ac.in/uploads/admission_application/medium/EPGP1340381.jpg" alt="Success 2" />
      <p>"I registered as a helper and have been able to make a real difference in someone's life." - Anjali</p>
    </div>
  </div>
</section>


      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What People Say About Us</h2>
        <div className="testimonial-container">
          <div className="testimonial">
            <p>"BlindAssist has truly changed my life. The support from ashrams and helpers is incredible!"</p>
            <h4>- Ramesh Verma</h4>
          </div>
          <div className="testimonial">
            <p>"A wonderful platform that connects those in need with compassionate helpers. Highly recommended!"</p>
            <h4>- Sneha Sharma</h4>
          </div>
          <div className="testimonial">
            <p>"I found an amazing ashram through BlindAssist. The experience has been life-changing!"</p>
            <h4>- Arjun Patel</h4>
          </div>
        </div>
      </section>

      {/* chat */}
      <div className="chat-circle">
  <a href="https://wa.me/your-whatsapp-number" target="_blank" rel="noopener noreferrer">
    <img src="https://cdn-icons-png.flaticon.com/512/124/124034.png" alt="Chat" />
  </a>
</div>




      {/* Partners Section */}
      <section className="partners">
        <h2>Our Trusted Partners</h2>
        <div className="partner-logos">
          <img src="https://img.freepik.com/premium-vector/abstract-line-art-logo-design_568822-126.jpg" alt="Partner 1" className="partner-img" />
          <img src="https://img.freepik.com/premium-photo/colorful-circle-with-word-rainbow-it_1146250-28112.jpg" alt="Partner 2" className="partner-img" />
          <img src="https://img.freepik.com/free-vector/logo-unique-luxury-gradient-design-illustration_483537-1230.jpg" alt="Partner 3" className="partner-img" />
          <img src="https://t4.ftcdn.net/jpg/07/72/39/37/360_F_772393784_kIJcAuK3pI8t1vkngOKMrPFFdV9Zy7nR.jpg" alt="Partner 4" className="partner-img" />
        </div>
      </section>


      {/* Footer Section */}
      <footer className="footer">
        <p>© 2025 BlindAssist. All Rights Reserved.</p>
        <div className="footer-links">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
      </footer>
    </div>
  );
};

export default Home;
