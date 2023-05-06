import "./index.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import profileTest from "../../assets/img/profile.jpg";

import { Link } from "react-router-dom";
import Post from "../../components/Post";

function AllPosts() {
  return (
    <>
      <Header />
      <div className="allPosts">
        <div className="createPost">
          <div className="profile">
            <img src={profileTest} alt="profile de l'utilisateur" />
          </div>
          <Link to="/createpost" className="linkCreatePost">
            Bonjour Camille, quoi de neuf ?
          </Link>
        </div>
        <div className="posts">
          {/*
            <div className="notPost">
              Actuellement, il n'y a aucun article...
            </div> */}
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AllPosts;
