import "./index.css";

import Header from "../../components/HeaderHorsCo";

function Error() {
  return (
    <div>
      <Header />
      <section className="error">
        <div className="error--oups">Oups...</div>
        <div className="error--404">404</div>
        <div className="error--errorPage">
          La page que vous demandez n'est pas disponible...
        </div>
      </section>
    </div>
  );
}

export default Error;
