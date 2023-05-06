import "./index.css";

import imageTest from "../../assets/img/imageTest.jpg";
import thumbsUpWhite from "../../assets/img/thumbs-up-solid-white.svg";
import thumbsUpGrey from "../../assets/img/thumbs-up-regular-grey.svg";
// import thumbsUpBlue from "../../assets/img/thumbs-up-regular-blue.svg";
import ellipsis from "../../assets/img/ellipsis-solid.svg";
import commentGrey from "../../assets/img/comment-regular-grey.svg";
import profileTest from "../../assets/img/profile.jpg";
import pen from "../../assets/img/pen-solid.svg";
import trash from "../../assets/img/trash-solid.svg";

import { useState } from "react";

import formatName from "../../utils/functions/formatName";
import formatTime from "../../utils/functions/formatTime";

function Post() {
  const [nav, setNav] = useState(false);
  const openMenu = (id) => {
    setNav(!nav);
  };
  return (
    <div className="post" id="1">
      <div className="blockEntete">
        <div className="blockProfile">
          <div className="blockProfile__profile">
            <img src={profileTest} alt="profile de l'utilisateur" />
          </div>
          <div className="blockProfile__infos">
            <div className="blockProfile__infos__name">
              {formatName("CRAPAT", "Camille")}
            </div>
            <div className="blockProfile__infos__time">
              {formatTime(Date.now())}
            </div>
          </div>
        </div>
        <div className="blockMenu" onClick={() => openMenu()}>
          <img src={ellipsis} alt="icône menu" />
        </div>
        {nav === true && (
          <div className="nav">
            <div className="lineNav">
              <div className="lineNav--icone">
                <img src={pen} alt="" />
              </div>
              <div className="lineNav--text">Modifier</div>
            </div>
            <div className="lineNav">
              <div className="lineNav--icone">
                <img src={trash} alt="" />
              </div>
              <div className="lineNav--text">Supprimer</div>
            </div>
          </div>
        )}
      </div>

      <div className="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
        necessitatibus est, ducimus ab cum delectus consequatur aliquam, magnam
        suscipit id vero. Itaque officia qui reiciendis unde? Nam recusandae
        maxime sunt!
      </div>
      <div className="image">
        <img src={imageTest} alt="article" />
      </div>
      <div className="likeAndComment">
        <div className="likeAndComment__like">
          <div className="likeAndComment__like__likeIcone">
            <img src={thumbsUpWhite} alt="icône like" />
          </div>
          13
        </div>
        <div className="likeAndComment__comment">16 commentaires</div>
      </div>
      <div className="likeAndCommentBlockButton line">
        {/*
      <div className="likeButton">
        <div className="likeButton--icone">
          <img src={thumbsUpBlue} alt="icône like" />
        </div>
        <div className="likeButton--text selectLike">J'aime</div>
  </div>*/}
        <div className="likeButton">
          <div className="likeButton--icone">
            <img src={thumbsUpGrey} alt="icône like" />
          </div>
          <div className="likeButton--text">J'aime</div>
        </div>
        <div className="commentButton">
          <div className="commentButton--icone">
            <img src={commentGrey} alt="Icône comment" />
          </div>
          <div className="commentButton--text">Commenter</div>
        </div>
      </div>
      <div className="commentsAndCreateComment">
        <div className="createComment">
          <div className="profile">
            <img src={profileTest} alt="profile de l'utilisateur" />
          </div>
          <input
            type="text"
            className="createCommentInput"
            name="createComment"
            id="createComment"
            placeholder="Votre commentaire..."
          />
        </div>
        <div className="comments">
          <div className="commentContainer">
            <div className="profile">
              <img src={profileTest} alt="profile de l'utilisateur" />
            </div>
            <div className="comment">
              <div className="commentBlock">
                <div className="commentBlock--title">Camille Crapat</div>
                <div className="commentBlock--text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reiciendis doloribus doloremque unde eius quam pariatur
                  mollitia impedit ducimus autem cum sit et repellendus quasi,
                  ut nobis sed facilis iste molestiae?
                </div>
              </div>
              <div className="commentTime">Le 06/04/2023 à 18h08</div>
            </div>
          </div>
          <div className="commentContainer">
            <div className="profile">
              <img src={profileTest} alt="profile de l'utilisateur" />
            </div>
            <div className="comment">
              <div className="commentBlock">
                <div className="commentBlock--title">Camille Crapat</div>
                <div className="commentBlock--text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reiciendis doloribus doloremque unde eius quam pariatur
                  mollitia impedit ducimus autem cum sit et repellendus quasi,
                  ut nobis sed facilis iste molestiae?
                </div>
              </div>
              <div className="commentTime">Le 06/04/2023 à 18h08</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
