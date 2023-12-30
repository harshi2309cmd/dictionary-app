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
          <a href="https://github.com/harshi2309cmd/dictionary-app" target="_blank"  rel="noopener noreferrer">open-sourced on GitHub</a>{" "}
           and hosted on <a href="https://main--dashing-marshmallow-48776a.netlify.app/" target="_blank"  rel="noopener noreferrer">Netlify</a>
           </p>
        </footer>
      </div>
    </div>
  );
}
