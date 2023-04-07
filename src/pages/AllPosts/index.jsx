import "./index.css";
import Header from "../../components/Header";

import imageTest from "../../assets/img/imageTest.jpg";
import thumbsUpWhite from "../../assets/img/thumbs-up-solid-white.svg";
import thumbsUpGrey from "../../assets/img/thumbs-up-regular-grey.svg";
// import thumbsUpBlue from "../../assets/img/thumbs-up-regular-blue.svg";
import commentGrey from "../../assets/img/comment-regular-grey.svg";
import profileTest from "../../assets/img/profile.jpg";

function AllPosts() {
  return (
    <div>
      <Header />
      <div className="allPosts">
        <div className="createPost">
          <div className="profile">
            <img src={profileTest} alt="profile de l'utilisateur" />
          </div>
          <div className="linkCreatePost">Bonjour Camille, quoi de neuf ?</div>
        </div>
        <div className="posts">
          {/*
            <div className="notPost">
              Actuellement, il n'y a aucun article...
            </div> */}
          <div className="post">
            <div className="blockProfile">
              <div className="blockProfile__profile">
                <img src={profileTest} alt="profile de l'utilisateur" />
              </div>
              <div className="blockProfile__infos">
                <div className="blockProfile__infos__name">Camille Crapat</div>
                <div className="blockProfile__infos__time">22 min</div>
              </div>
            </div>
            <div className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              necessitatibus est, ducimus ab cum delectus consequatur aliquam,
              magnam suscipit id vero. Itaque officia qui reiciendis unde? Nam
              recusandae maxime sunt!
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
                        mollitia impedit ducimus autem cum sit et repellendus
                        quasi, ut nobis sed facilis iste molestiae?
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
                        mollitia impedit ducimus autem cum sit et repellendus
                        quasi, ut nobis sed facilis iste molestiae?
                      </div>
                    </div>
                    <div className="commentTime">Le 06/04/2023 à 18h08</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllPosts;
