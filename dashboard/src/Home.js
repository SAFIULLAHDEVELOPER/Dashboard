import React from "react";

function Home() {
    return (
        <main id="main-container">
            <div className="home-content">
                <div className="profile">
                    <img
                        src="data:image/jpeg;base64,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"
                        alt="Profile"
                        className="profile-image"
                    />
                    <div className="profile-details">
                        <h2 className="name">Your Name</h2>
                        <p>@yourhandle</p>
                        <p className="notes">Some notes</p>
                        <div className="buttons">
                            <button className="btn">Edit</button>
                            <button className="btn-de">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Home;
