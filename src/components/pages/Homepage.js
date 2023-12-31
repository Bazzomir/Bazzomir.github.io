import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/Homepage.css';
import logoTest1 from '../../assets/image/logoTest1.jpg';

function Homepage() {
    return (
        <div className="home">

            <header className="home-header">
                <h1>
                    Welcome
                </h1>
            </header>

            <main className="home-main">
                <div className='home-main-text'>
                    <h2>This is my portfolio</h2>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </div>
                <div className='home-main-image'>
                    <div>
                        <img src={logoTest1} alt="Logo Test 1" />
                        <p> Logo Test - 1</p>
                    </div>
                    <div>
                        <img src={logoTest1} alt="Logo Test 1" />
                        <p> Logo Test - 2</p>
                    </div>
                </div>
            </main>

            <footer className="home-footer">
                <img src="" alt="" className="home-footer-link" />
                <Link to="/">Home</Link>
                <Link to="/">About me, Why Me</Link>
                <Link to="/">Projects</Link>
                <Link to="/">Contact Me</Link>
                <Link to="/">link</Link>
                <Link to="/">link</Link>
            </footer>
        </div>
    );
}

export default Homepage;