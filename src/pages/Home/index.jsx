import "./index.css";

import Header from "../../components/HeaderHorsCo";

function Home() {
  return (
    <div>
      <Header />
      <section className="connexion">
        <div className="connexion--forms">
          <input
            type="text"
            id="mail"
            name="mail"
            placeholder="Adresse e-mail"
            className="input"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Mot de passe"
            className="input"
          />
        </div>
        <button>Connexion</button>
      </section>
    </div>
  );
}

export default Home;
