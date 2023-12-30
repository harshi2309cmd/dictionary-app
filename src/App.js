import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <p>This project was coded by Harshithareddy and is {" "}
          <a href="https://github.com/harshi2309cmd/dictionary_project" target="_blank"  rel="noopener noreferrer">open-sourced on GitHub</a>{" "}
           and hosted on <a href="https://app.netlify.com/sites/cute-salmiakki-75e6aa/overview" target="_blank"  rel="noopener noreferrer">Netlify</a>
           </p>
        </footer>
      </div>
    </div>
  );
}
