import React from "react";

export default function Info() {
  return (
    <div>
      <img
        className="photo"
        src="./images/photo.jpg"
        alt="profile photo of Ulla van Sprang"
        width="317"
        height="317"
      />
      <div className="header-text">
        <h1>Ulla van Sprang</h1>
        <h2>Front-end Web Developer</h2>
        <a href="https://ullavs.nl" className="url">
          ullavs.nl
        </a>
        <div className="buttons-header">
          <a className="email-button" href="mailto:ullavansprang@gmail.com">
            <img src="./images/email.png" width="12.8px" height="9.6px" />
            Email
          </a>
          <a
            className="linkedin-button"
            href="https://www.linkedin.com/in/ullavansprang/"
          >
            <img src="./images/linkedin.png" width="13.33px" height="13.33px" />
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
