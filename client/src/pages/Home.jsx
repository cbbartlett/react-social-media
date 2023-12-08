import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Header from '../components/Header/index.jsx';
import Footer from '../components/Footer/index.jsx';

const Homepage = () => {
  return (
    <div className="homepage">
      <Header />
      <main>
        <section>
          <p>
            Join our vibrant community and connect with friends, share your thoughts, or discover new content!
          </p>
        </section>
        <section>
          <h2>About Us!</h2>
          <p>
            Established in early December of 2023, Y Social Media is a platform where users can interact, share posts,
            comment, and engage with others. We provide a friendly and interactive space to connect with friends and 
            family, as well as form new connections.
          </p>
        </section>
        <section>
          <h2>Features</h2>
          <ul>
            <li>⭐ Profile customization</li>
            <li>⭐News feed with personalized content</li>            
            <li>⭐Photo and video sharing</li>
            <li>⭐Real-time instant messaging</li>
          </ul>
        </section>
        <section>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;
