import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [profileImage, setProfileImage] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
  );

  return (
    <div className="page">
      <div className="container">
        <h1 className="heading">Add your Image</h1>
        <div className="img-holder">
          <img src={profileImage} alt="" id="img" className="img" />
        </div>
      </div>
    </div>
  );
}

export default App;
