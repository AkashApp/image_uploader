import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [profileImage, setProfileImage] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
  );

  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setProfileImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <div className="page">
      <div className="container">
        <h1 className="heading">Add your Image</h1>
        <div className="img-holder">
          <img src={profileImage} alt="" id="img" className="img" />
        </div>
        <input
          type="file"
          name="image-upload"
          id="input"
          accept="image/*"
          onChange={imageHandler}
        />
        <div className="label">
          <label htmlFor="input" className="image-upload">
            <h3>&#128247;</h3>
            Choose your photo
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
