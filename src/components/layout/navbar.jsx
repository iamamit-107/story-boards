import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./signedInLink";
import SignedOutLinks from "./signedOutLink";

const NavBar = () => {
    return (
        <nav className="nav-wrapper blue-grey darken-4">
            <div className="container">
                <Link to="/" className="brand-logo">
                    StoryBoard
                </Link>
                <SignedInLinks />
                <SignedOutLinks />
            </div>
        </nav>
    );
};

export default NavBar;
