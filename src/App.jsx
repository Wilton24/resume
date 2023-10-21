import "./styles/index.css";
import Header from "./components/Header";
import Body from "./components/Body";

export default function App() {
  return (
    <div className="app">
      <div className="resume-wrapper">
        <Header />
        <Body />
      </div>
    </div> //app closing tag
  );
}
