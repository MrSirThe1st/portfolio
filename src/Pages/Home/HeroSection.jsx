import React from "react";
import Lottie from "react-lottie";
import Animation from "../../Animation.json"; 
import Animation1 from "../../Animation1.json";

export default function HeroSection() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Animation1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Marc</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">React Native</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            I am a react native developer.
            <br />
            Cheers to coffee, sleepless nights and debugging sessions
          </p>
        </div>
        {/* <button className="btn btn-primary">Get In Touch</button> */}
      </div>
      <div className="hero--section--img">
        <Lottie options={defaultOptions} height={420} width={420} />
      </div>
    </section>
  );
}
