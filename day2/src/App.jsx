/** @format */

import { NavBar } from "./Components/navBar.jsx";
import { Body, Greeting } from "./Components/Body.jsx";
import { Footer } from "./Components/Footer.jsx";
import { PlayGround } from "./Components/PlayGround1.jsx";
import { Body2 } from "./Components/Body2.jsx";
import { Body3 } from "./Components/Body3.jsx";
import { Body4 } from "./Components/ClaughterLessCall.jsx";
import { ToDo } from "./Components/NewTodo.jsx";
import { ProjectFour } from "./Components/Project4.jsx";
import { SnakeGame } from "./Components/SnakeGame/Main.jsx";
import Tik from "./Components/TickTackTho/Main.jsx";
let App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/*<NavBar />*/}

      <main className="flex-grow">
        {/* <Body />         <Body2 />
        <Body3 />        <Body4 />        <ToDo />

        <ProjectFour />        <KeyMove />
        <SnakeGame />*/}

        <Tik />
      </main>
      {/*<Footer />*/}
    </div>
  );
};

export default App;
