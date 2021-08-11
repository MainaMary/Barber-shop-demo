import Navbar from "./Components/Navbar/Navbar";
import Heading from "./Components/Heading/Heading";
import "./Components/Navbar/Navbar.css";

function App() {
  return (
    <div class="main__container" style={{background: "url(/images/wallpaper.png)"}}>
      <div class="img__wrapper">
        <Navbar/>
        <Heading/>
      </div>
    </div>
  );
}

export default App;
