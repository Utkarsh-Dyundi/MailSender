import React from "react";

function LandingPage() {
  return (
    <div color="#51C4D3">
      <img
        src="https://miro.medium.com/max/3840/1*b83_I0nGb9uzc_fZGchzTA.jpeg"
        alt="mailBox"
        style={{ position: "realtive", height: "40%", width: "100%" }}
      ></img>
      <p
        style={{
          position: "absolute",
          top: "30%",
          left: "2%",
          width: "37%",
          fontSize: "2rem",
          color: "#F8EDE3",
        }}
      >
        Tired of sending mails manually, so this is the one stop destination for
        you. <span style={{ color: "#1E6F5C" }}>JustMailIt</span> provides free
        access to sending multiple sending conveniently.
      </p>
      <button
        style={{
          borderRadius: "8px",
          position: "absolute",
          top: "59%",
          left: "2%",
          width: "15%",
          fontSize: "2rem",
          padding: "10px 24px",
        }}
      >
        <a href="/register" style={{ color: "#28B5B5" }}>
          Get Started
        </a>
      </button>
    </div>
  );
}

export default LandingPage;