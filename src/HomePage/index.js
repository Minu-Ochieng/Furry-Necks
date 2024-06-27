import "./index.css";
import Navbar from "../Navbar";
// import landingpage from "./sr"

const LandingPage = () => {
  return (
    <>
      <div className="discount">
        <p>
          Get 25% Off This Summer Sale.Grab it Fast!! <b>15H: 45M :37S</b>
        </p>
      </div>
      <div className="navbar">
        <Navbar />
      </div>
      {/* <img src={landingpage} className="landing-page" /> */}
    </>
  );
};

export default LandingPage;
