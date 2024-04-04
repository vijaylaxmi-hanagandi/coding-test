import React from "react";
import {QUESTIONS} from "./questions";
import YesNoQuiz from "./YesNoQuiz";

function App(){ {
    return (
      <div className="main__wrap">
        <main className="container">
          <div>
        <YesNoQuiz />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
