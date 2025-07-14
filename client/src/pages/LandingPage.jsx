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
                    <img
                        src="/logos/gd.png"
                        alt="GameDex Logo"
                        className="landing-logo"
                    />
                    <div className="slogan-landing">
                        <label>All your games</label>
                        <br></br>
                        <label>In one place</label>
                    </div>
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
