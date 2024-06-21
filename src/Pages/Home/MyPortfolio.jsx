import React from "react";
import data from "../../data/index.json";

export default function MyPortfolio() {
  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <h2 className="section--heading">Recent Projects</h2>
        </div>
        <div>
          <a
            href="https://github.com/MrSirThe1st"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-github"
          >
            <img
              src="../img/github-icon-1.svg"
              alt="GitHub Icon"
              width="32"
              height="32"
              className="github-icon"
            />
            Check out My GitHub
          </a>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            {item.videos.map((video, idx) => (
              <div key={idx} className="portfolio--section--img">
                <video
                  width="100%"
                  height="auto"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="portfolio--section--card--content">
                  <div>
                    <h3 className="portfolio--section--title">{video.title}</h3>
                    <p className="text-md">{video.description}</p>
                  </div>
                </div>
              </div>
            ))}
            {/* Render "View in GitHub" link after the first three videos */}
            {index === 0 && (
              <div className="portfolio--section--card--content">
                <a
                  href={item.videos[0].link} // Adjusted to match the first video link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm portfolio--link"
                >
                  View In GitHub
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 20 19"
                    fill="none"
                  >
                    <path
                      d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                      stroke="currentColor"
                      strokeWidth="2.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                {/* <a
                  href="/public/apk/1.apk" // Link to your first APK file
                  className="text-sm portfolio--link"
                  download
                >
                  Download APK
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 20 19"
                    fill="none"
                    
                  >
                    <path
                      d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                      stroke="currentColor"
                      strokeWidth="2.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a> */}
              </div>
            )}
            {/* Render "View in GitHub" link after the fourth video */}
            {index === 1 && (
              <div className="portfolio--section--card--content">
                <a
                  href={item.videos[0].link} // Adjusted to match the first video link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm portfolio--link"
                >
                  View In GitHub
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 20 19"
                    fill="none"
                  >
                    <path
                      d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                      stroke="currentColor"
                      strokeWidth="2.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                {/* <a
                  href="/public/apk/17.apk "
                  className="text-sm portfolio--link"
                  download
                >
                  Download APK
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 20 19"
                    fill="none"
                  >
                    <path
                      d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                      stroke="currentColor"
                      strokeWidth="2.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a> */}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
