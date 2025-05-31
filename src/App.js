import { useState, useEffect } from "react";

function App() {
  const [quote, setQuote] = useState("");
  const getQuote = () =>
    fetch("https://dummyjson.com/quotes")
      .then((res) => res.json())
      .then((data) => setQuote(data.quotes[Math.round(Math.random() * data.quotes.length)]));
  useEffect(() => {
    getQuote();
  }, []);
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <div className="card m-3">
        <div className="card-header fs-4">Alıntı</div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p className="fs-4">{quote.quote}</p>
            <footer className="blockquote-footer">
              <cite className="fs-4">{quote.author}</cite>
            </footer>
            <button className="btn btn-primary fs-4" onClick={getQuote}>
              Yeni Alıntı
            </button>
          </blockquote>
        </div>
      </div>
    </div>
  );
}

export default App;
