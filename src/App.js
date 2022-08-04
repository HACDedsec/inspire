import { Fifth, Firstsection, Firstsub, Fourth, SecondSection, ThirdSection, Sixth, Seven, Footersection } from "./component/Homepage";
import FadeIn from "./component/JsAnimate/Fadein";
import Login from "./component/Login";
import Navbar from "./component/Navbar";
import Signup from "./component/Signup";
import "./css/style.css";
import "./css/style.min.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Login />
      <Signup />

      <div>
        <FadeIn>
          <Firstsection />
        </FadeIn>
        <Firstsub />
      </div>
   
      <SecondSection />
      <ThirdSection/>
      <Fourth/>
      <Fifth/>
      <Sixth/>
      <Seven/>
      <Footersection/>

    </div>

  );
}

export default App;
