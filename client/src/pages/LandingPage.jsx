import React from "react";
import { Link } from "react-router-dom";
import "../styles/LandingPage.css";
import GradientBackground from "../components/LandingPage";

function LandingPage() {
    return (
        <div className="landing-page-background">
            <GradientBackground />
            <div className="landing-container">
                <div className="landing-div">
                    <img src="/logos/gd.png" alt="GameDex Logo" className="landing-logo" />
                    <p>All your games in one place.</p>
                    <div className="landing-actions">
                        <Link to="/login" className="landing-btn">
                            Log In
                        </Link>
                        <Link to="/signup" className="landing-btn">
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;


//3032 backend // <- mudar todas os FETCH para esta porta