import React from "react";
import "../CSS/Home.css";
import ReactCardCarousel from "react-card-carousel";

function Home() {
  return (
    <div className="home">
      <div className="home_left">
        <h1>How We Can Help</h1>
        <div className="homeleft_text">
          <p>
            Infigon Futures is one of the fastest growing education and career
            planning platforms currently in the edutech segement. Using our
            industry leading Artificial Intelligence, individuals aging right
            from the tender age of 11 to 30, can plan for their educational and
            career goals.
          </p>
          <br></br>
          <h3>
            STEP 1 : <span>Career Analysis for 2nd to 7th class</span>
          </h3>
          <h3>
            STEP 2 : <span>Career Analysis for 8th, 9th & 10th Class</span>
          </h3>
          <h3>
            STEP 3 : <span>Subject Stream Selector</span>
          </h3>
          <h3>
            STEP 4 : <span>Career Analysis for 11th & 12th Class</span>
          </h3>
        </div>
      </div>
      <div className="home_right">
        <div className="container_style">
          <ReactCardCarousel
            className="rotated_card"
            autoplay={true}
            autoplay_speed={2500}
          >
            <img
              className="Card_float"
              src="https://media-exp1.licdn.com/dms/image/C4E22AQFZbghwdE5z_w/feedshare-shrink_800/0/1627469808933?e=1634169600&v=beta&t=78LCj1Yevr-EOipuGNYjau65eXgSjsnf7DvGX8Kt-6U"
            />
            <img
              className="Card_float"
              src="https://pbs.twimg.com/media/Ex0QDCiVcAQiZba.jpg"
            />
            <img
              className="Card_float"
              src="https://1.bp.blogspot.com/-5wuYjbjyzHE/YDSfAsCsrqI/AAAAAAAAAzY/PWGicLr5Lk4lUYXRfMr9_38XUs85oL4gQCLcBGAsYHQ/s1080/n5.jpg"
            />
          </ReactCardCarousel>
        </div>
      </div>
    </div>
  );
}

export default Home;
