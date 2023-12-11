// Our import statements so we can use react and also imports our Header and Footer elements as well as our CSS styling.
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Header from '../components/Header/index.jsx';
import Footer from '../components/Footer/index.jsx';

const Homepage = () => {
  const [thoughts, setThoughts] = useState([]);

  useEffect(() => {
    // Fetch thoughts from the GraphQL server
    fetch('http://localhost:4000/graphql', {
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
    // Error handling
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
  // This is what the variable returns. It returns a string of HTML that the App.jsx displays.
  return (
    <div className="page">
      <Header />
      <section>
        <h2>Recent Thoughts</h2>
        {thoughts && thoughts.length > 0 ? (
          thoughts.map((thought) => (
            <div key={thought._id}>
              <h3>{thought.thoughtText}</h3>
              <ul>
                {thought.comments &&
                  thought.comments.map((comment) => (
                    <li key={comment._id}>{comment.commentText}</li>
                  ))}
              </ul>
            </div>
          ))
        ) : (
          <p>No thoughts found.</p>
        )}
      </section>
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
            <li>Profile customization</li>
            <li>News feed with personalized content</li>            
            <li>Photo and video sharing</li>
            <li>Real-time instant messaging</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
};
// Exporting our variable so it can be called in other files.
export default Homepage;
