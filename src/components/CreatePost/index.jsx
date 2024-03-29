import "./index.css";

import Profile from "../../assets/img/profile.jpg";
import { useState } from "react";

function CreatePost() {
  const [message, setMessage] = useState("Aucun fichier selectionné !");
  const displayNameFiles = () => {
    const file = document.getElementById("profileImg").files[0];
    if (file) {
      setMessage(file.name);
    } else {
      setMessage("Aucun fichier selectioné !");
    }
  };
  return (
    <>
      <div className="blockProfileCreatePost">
        <div className="profile">
          <img src={Profile} alt="profile de l'utilisateur" />
        </div>
        <div className="identity">
          <div className="name">Camille Crapat</div>
          <div className="work">Service entreprise</div>
        </div>
      </div>
      <textarea
        name="post"
        id="post"
        className="newPost"
        placeholder="Quoi de neuf ?"
      ></textarea>
      <div className="filesSelector">
        <label htmlFor="profileImg" className="imgButton">
          Image
        </label>
        <input
          type="file"
          name="profileImg"
          id="profileImg"
          accept="image/png, image/jpeg"
          onChange={() => displayNameFiles()}
        />
        <div className="profileImgName">{message}</div>
      </div>
      <button className="newPostButton">Publier</button>
    </>
  );
}

export default CreatePost;
