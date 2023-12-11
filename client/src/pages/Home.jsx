import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Header from '../components/Header/index.jsx';
import Footer from '../components/Footer/index.jsx';

const Homepage = () => {
  const [thoughts, setThoughts] = useState([]);

  useEffect(() => {
    // Fetch thoughts from the GraphQL server
    fetch('http://localhost:5500/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
          query {
            thoughts {
              _id
              thoughtText
              comments {
                _id
                commentText
              }
            }
          }
        `,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.errors) {
          throw new Error(data.errors[0].message);
        } else {
          setThoughts(data.data.thoughts);
        }
      })
      .catch((error) => {
        console.error('Failed to fetch thoughts:', error.message);
      });
  }, []);

  return (
    <div className="page">
      <Header />
      <main class="sidebubble">
        <section class="sidebubble">
          <p class="sidebubble1">
            Join our vibrant community and connect with friends, share your thoughts, or discover new content!
          </p>
        </section>
        <section class="sidebubble">
          <h2 class="sidebubble">About Us!</h2>
          <p class="sidebubble">
            Established in early December of 2023, Y Social Media is a platform where users can interact, share posts,
            comment, and engage with others. We provide a friendly and interactive space to connect with friends and 
            family, as well as form new connections.
          </p>
        </section>
        <section class="sidebubble">
          <h2 class="sidebubble">Features</h2>
          <ul class="sidebubble">
            <li>A Post Feed with all of your friends thoughts about the world!</li>            
            <li>Post about how you feel and what you think of others</li>
            <li>Comment on others posts. and if you feel like you didn't express yourself to your standard.. deleting your post is an option!</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;
