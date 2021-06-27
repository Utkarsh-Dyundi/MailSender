import React from "react";
import img1 from './Screenshot 2021-06-27 191329.png';
import img2 from './2.png';
// import { auto } from "@popperjs/core";

function LandingPage() {
  return (
    <div color="#51C4D3">
      <img
        src= {img2}
        alt="mailBox"
        style={{ position: "realtive", height: "700px", width: "100%" }}
      ></img>
      <p
        style={{
          textAlign: "left",
          position: "absolute",
          top: "19%",
          left: "5%",
          width: "60%",
          margin: "auto",
        
          fontSize: "2rem",
          color: "#F8EDE3",
        }}
      >
        Tired of sending mails manually!<br/><b>JustMail</b> is here to help you.
      </p>
      {/* <img class="chidiya" src="https://cdn.pixabay.com/photo/2012/04/02/14/05/dove-24588_960_720.png"></img> */}
      <button
        style={{
          borderRadius: "8px",
          textDecoration: "none",
          position: "absolute",
          top: "45%",
          left: "5%",
          width: "15%",
          fontSize: "2rem",
          padding: "7px 18px",
          backgroundColor: "white"
        }}
      >
        <a href="/register" style={{ color: "black",textDecoration: "none" }}>
          Get Started
        </a>
      </button>
    </div>
  );
}

export default LandingPage;