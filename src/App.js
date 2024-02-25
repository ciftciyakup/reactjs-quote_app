import { useState, useEffect } from "react";

// Bootstrap Classes
const appClass = "card m-3";
const cardHeaderClass = "card-header";
const cardBodyClass = "card-body";
const blockQuoteClass = "blockquote mb-0";
const footerClass = "blockquote-footer";
const buttonClass = "btn btn-primary";

function App() {
  const [quote, setQuote] = useState("");
  const getQuote = () =>
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => setQuote(data[Math.round(Math.random() * data.length)]));
  useEffect(() => {
    getQuote();
  }, []);
  return (
    <div className={appClass}>
      <div className={cardHeaderClass}>Alıntı</div>
      <div className={cardBodyClass}>
        <blockquote className={blockQuoteClass}>
          <p>{quote.text}</p>
          <footer className={footerClass}>
            <cite>{quote.author}</cite>
          </footer>
          <button className={buttonClass} onClick={getQuote}>
            Yeni Alıntı
          </button>
        </blockquote>
      </div>
    </div>
  );
}

export default App;
