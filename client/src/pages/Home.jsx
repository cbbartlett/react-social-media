import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => 
{
    return (
        <div className="homepage">
            <header>
                <h1>
                    <ul>
                        <li><Link to="/signup">Sign Up</Link></li>
                        <li><Link to="/login">Log In</Link></li>
                    </ul>
                </h1>
            </header>
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
                <section>
                </section>
            </main>
            <footer>
                <div>
                    <div>
                        <h3>Contact Information</h3>
                        <p>Email: Stacysmom@gmail.com</p>
                        <p>Phone: 1-800-867-5309</p>
                        <p>Address: 123 Main Street, Totally Real City, Super Cool State, Amazing Zip Code</p>
                    </div>
                    <div>
                        <h3>Follow Us</h3>
                        <ul>
                            <li><a href="https://www.facebook.com/example" target="_blank">Facebook</a></li>
                            <li><a href="https://www.twitter.com/example" target="_blank">Twitter</a></li>
                            <li><a href="https://www.instagram.com/example" target="_blank">Instagram</a></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <p></p>
                </div>
            </footer>
        </div>
    );
};
export default Homepage;