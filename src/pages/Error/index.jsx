import "./index.css";

import Header from "../../components/HeaderHorsCo";
import Footer from "../../components/Footer";

function Error() {
  return (
    <>
      <Header />
      <section className="error">
        <div className="error--oups">Oups...</div>
        <div className="error--404">404</div>
        <div className="error--errorPage">
          La page que vous demandez n'est pas disponible...
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Error;
