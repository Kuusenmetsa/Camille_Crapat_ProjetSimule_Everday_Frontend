import "./index.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import profileTest from "../../assets/img/profile.jpg";
import CreatePost from "../../components/CreatePost";
import Modal from "../../components/Modal";

import { useState } from "react";
import Post from "../../components/Post";

function AllPosts() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <Header />
      <div className="allPosts" id="allPosts">
        {modalOpen && (
          <Modal
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            title="Créer une publication"
          >
            <CreatePost />
          </Modal>
        )}
        <div className="createPost">
          <div className="profile">
            <img src={profileTest} alt="profile de l'utilisateur" />
          </div>
          <div
            className="linkCreatePost"
            onClick={() => setModalOpen(!modalOpen)}
          >
            Bonjour Camille, quoi de neuf ?
          </div>
        </div>
        <div className="posts">
          {/*
            <div className="notPost">
              Actuellement, il n'y a aucun article...
            </div> */}
          <Post id="1" />
          <Post id="2" />
          <Post id="3" />
          <Post id="4" />
          <Post id="5" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AllPosts;
