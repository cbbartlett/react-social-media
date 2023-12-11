import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { useMutation, gql } from '@apollo/client';
import Header from '../components/Header/Header2.jsx';
import Footer from '../components/Footer/index.jsx';
import { useNavigate } from 'react-router-dom';


const Homepage = () => {
    const [thoughts, setThoughts] = useState([]);
    const [newThoughtText, setNewThoughtText] = useState('');
    const [newCommentText, setNewCommentText] = useState('');
    const [selectedThoughtId, setSelectedThoughtId] = useState(null);
  
    useEffect(() => {
        // Fetch thoughts from the server
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
    
  
    const handleCreateThought = () => {
      // Send a mutation to create a new thought
      fetch('http://localhost:5500/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: `
            mutation {
              createThought(input: { thoughtText: "${newThoughtText}" }) {
                _id
                thoughtText
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
            // Refresh the thoughts after creating a new thought
            setNewThoughtText('');
            setThoughts([...thoughts, data.data.createThought]);
          }
        })
        .catch((error) => {
          console.error('Failed to create thought:', error.message);
        });
    };
  
    const handleCreateComment = () => {
      // Send a mutation to create a new comment
      fetch('http://localhost:5500/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: `
            mutation {
              createComment(input: { thoughtId: "${selectedThoughtId}", commentText: "${newCommentText}" }) {
                _id
                commentText
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
            // Refresh the thoughts after creating a new comment
            setNewCommentText('');
            const updatedThoughts = thoughts.map((thought) => {
              if (thought._id === selectedThoughtId) {
                return { ...thought, comments: [...thought.comments, data.data.createComment] };
              }
              return thought;
            });
            setThoughts(updatedThoughts);
          }
        })
        .catch((error) => {
          console.error('Failed to create comment:', error.message);
        });
    };
  
    const [selectedThought, setSelectedThought] = useState(null);

const handleUpdateThought = (thoughtId) => {
  // Implement the logic to update the thought with the given thoughtId
  console.log('Update thought:', thoughtId);

  // Assuming you have a form or input field to capture the updated thought text
  const updatedThoughtText = 'Updated thought text';

  // Send a mutation to update the thought
  fetch('http://localhost:5500/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
        mutation {
          updateThought(id: "${thoughtId}", thoughtText: "${updatedThoughtText}") {
            _id
            thoughtText
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
        // Update the thought in the thoughts state
        const updatedThoughts = thoughts.map((thought) => {
          if (thought._id === thoughtId) {
            return { ...thought, thoughtText: updatedThoughtText };
          }
          return thought;
        });
        setThoughts(updatedThoughts);
      }
    })
    .catch((error) => {
      console.error('Failed to update thought:', error.message);
    });
};

      
const handleDeleteThought = (thoughtId) => {
    // Send a mutation to delete the thought
    fetch('http://localhost:5500/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
          mutation DeleteThought($id: ID!) {
            deleteThought(id: $id) {
              _id
            }
          }
        `,
        variables: {
          id: thoughtId,
        },
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.errors) {
          throw new Error(data.errors[0].message);
        } else {
          // Remove the deleted thought from the thoughts state
          const updatedThoughts = thoughts.filter((thought) => thought._id !== thoughtId);
          setThoughts(updatedThoughts);
        }
      })
      .catch((error) => {
        console.error('Failed to delete thought:', error.message);
      });
  };
  

      return (
    <div>
        <div className="page">
          <Header />
          <section class="banana2">
            <h2 class="banana3">Recent Posts</h2>
            {thoughts && thoughts.length > 0 ? (
              thoughts.map((thought) => (
                <div className="LsContainer" key={thought._id}>
                  <h3>{thought.thoughtText}</h3>
                  <ul>
                    {thought.comments &&
                      thought.comments.map((comment) => (
                        <li key={comment._id}>
                          {comment.commentText}
                        </li>
                      ))}
                  </ul>
                  <div>
                    <input
                      type="text"
                      value={newCommentText}
                      onChange={(e) => setNewCommentText(e.target.value)}
                      placeholder="Add a comment"
                    />
                    <button className='LsButton' onClick={() => { handleCreateComment(); setSelectedThoughtId(thought._id); }}>
                      Add Comment
                    </button>
                  </div>
                  <div>
                    <button className='LsButton' onClick={() => setSelectedThought(thought._id)}>Update</button>
                    <button className='LsButton' onClick={() => handleDeleteThought(thought._id)}>Delete</button>
                  </div>
                  {selectedThought === thought._id && (
                    <div>
                      {/* Add input field and button for updating the thought */}
                      <input
                        type="text"
                        value={newThoughtText}
                        onChange={(e) => setNewThoughtText(e.target.value)}
                        placeholder="Update your thought"
                      />
                      <button onClick={() => { handleUpdateThought(thought._id); setSelectedThought(null); }}>
                        Save Update
                      </button>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p>No Posts found.</p>
            )}
          </section>
          <main class="bananas">
            <section>
              <h2>Create a New Post</h2>
              <div>
                <input
                  type="text"
                  value={newThoughtText}
                  onChange={(e) => setNewThoughtText(e.target.value)}
                  placeholder="Enter your new Post"
                />
                <button onClick={handleCreateThought}>Create Post</button>
              </div>
            </section>
            {/* Other sections... */}
          </main>
        </div>
    <Footer class="yolo" />
    </div>
      );
    };
    
    export default Homepage;