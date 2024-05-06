import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

function Navbar() {
    const [isVisible, setIsVisible] = useState(false);
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    const signOutOnClick = () => {
        logout(); // Optionally, pass a configuration if needed
    };

    const signInOnClick = () => {
        loginWithRedirect(); // Optionally, pass a configuration if needed
    };

    return (
        <nav className="bg-black text-gray-300 py-4 px-2 sm:px-4">
            <div className="container mx-auto flex flex-wrap justify-between items-center">
                <div className="text-lg font-semibold">WINSTON</div>
                
                <div className={`md:flex md:space-x-4 ${!isVisible && 'hidden'}`}>
                    <Link to="/" className="hover:bg-beige-200 p-2 rounded">Home</Link>
                    <Link to="/library" className="hover:bg-beige-200 p-2 rounded">Library</Link>
                    <Link to="/dashboard" className="hover:bg-beige-200 p-2 rounded">Dashboard</Link>
                    <Link to="/contact" className="hover:bg-beige-200 p-2 rounded">Contact</Link>
                    {!isAuthenticated ? 
                        <Link to="/" onClick={signInOnClick} className="hover:bg-beige-200 p-2 rounded">
                            Sign In
                        </Link>
                        :
                        <Link to="/" onClick={signOutOnClick} className="hover:bg-beige-200 p-2 rounded">
                            Sign Out
                        </Link>
                    }
                </div>

                <button onClick={() => setIsVisible(!isVisible)} className="md:hidden">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                </button>
            </div>

            {isVisible && (
                <div className="md:hidden flex flex-col space-y-4 p-4">
                    <Link to="/" className="hover:bg-beige-200 p-2 rounded">Home</Link>
                    <Link to="/library" className="hover:bg-beige-200 p-2 rounded">Library</Link>
                    <Link to="/dashboard" className="hover:bg-beige-200 p-2 rounded">Dashboard</Link>
                    <Link to="/contact" className="hover:bg-beige-200 p-2 rounded">Contact</Link>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
