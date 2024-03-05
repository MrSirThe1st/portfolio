import React from "react";
import Lottie from "react-lottie";
import Animation1 from "../../Animation1.json";
import Animation from "../../Animation.json";

export default function AboutMe() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <Lottie options={defaultOptions} height={420} width={420} />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
            I am a full-stack mobile developer who specializes in React Native.
            I take products from concepts to fully functional solutions.
            Although I didn't have the opportunity to study computer science, I
            found my passion for solving real-world problems through computer
            engineering. Over the past few years, I have dedicated myself to
            cross-platform development, continuously learning, experimenting,
            and refining my skills. Based in Africa, my goal is to bring
            successful global products and apps to the African market.
          </p>
          <p className="hero--section-description">
            Additionally, I aim to create new products tailored to the needs of
            the African market, facilitating the exchange of goods and data. If
            you're interested in collaborating with me, need assistance with a
            project, or have a great idea to discuss, please don't hesitate to
            reach out.
          </p>
        </div>
      </div>
    </section>
  );
}
