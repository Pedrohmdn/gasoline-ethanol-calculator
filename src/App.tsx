import "./styles/App.css";

import logoImg from "./assets/logo.png";
import { useState } from "react";

function App() {
  interface ResutlInfoProps {
    title?: string;
    gasolina: string;
    etanol: string;
  }
  const [infoResult, setinfoResult] = useState<ResutlInfoProps>();

  function calcular(formData: FormData): void {
    const gasolina = Number(formData.get("gasolina"));
    const etanol = Number(formData.get("alcool"));

    const calc = etanol / gasolina;
    let resultTitle: string;

    if (calc <= 0.7) {
      resultTitle = "Compensa usar o Etanol";
    } else {
      resultTitle = "Compensa usar a Gasolina";
    }

    setinfoResult({
      title: resultTitle,
      gasolina: formatCurrency(gasolina),
      etanol: formatCurrency(etanol),
    });
  }

  function formatCurrency(price: number): string {
    const formattedValue = price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    return formattedValue;
  }
  return (
    <main>
      <div className="container">
        <div className="imageContainer">
          <img src={logoImg} alt="Logo calculadora de gasolina ou alcool" />
        </div>
        <h1 className="title">Qual a melhor opção?</h1>
        <form className="form" action={calcular}>
          <div className="fieldContainer">
            <label htmlFor="etanol">Etanol (preço por litro):</label>
            <input
              type="number"
              min={1}
              step={0.01}
              name="etanol"
              id="etanol"
              placeholder="ex: 4,20"
              required
            />
          </div>
          <div className="fieldContainer">
            <label htmlFor="gasolina">Gasolina (preço por litro):</label>
            <input
              type="number"
              min={1}
              step={0.01}
              name="gasolina"
              id="gasolina"
              placeholder="ex: 4,20"
              required
            />
          </div>
          <button className="formButton" type="submit">
            Calcular
          </button>
        </form>

        {infoResult && (
          <section className="resultContainer">
            <h2>{infoResult?.title}</h2>
            <div className="pricesContainer">
              <span>Etanol: {infoResult?.etanol}</span>
              <span>Gasolina: {infoResult?.gasolina}</span>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

export default App;
