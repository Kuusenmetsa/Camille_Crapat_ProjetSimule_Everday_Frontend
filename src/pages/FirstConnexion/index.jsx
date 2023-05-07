import "./index.css";

import Header from "../../components/HeaderHorsCo";
import Footer from "../../components/Footer";

function FirstConnexion() {
  return (
    <>
      <Header />
      <section className="connexion">
        <div className="connexionContainer">
          <div className="connexion--forms">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Nouveau mot de passe"
              className="input"
            />
            <input
              type="password"
              name="passwordReapeat"
              id="passwordReapeat"
              placeholder="Répétez le mot de passe"
              className="input"
            />
          </div>
          <button>Changer le mot de passe</button>
          <button className="buttonDeconnexion">Déconnexion</button>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default FirstConnexion;
