import React from "react";
import "./Home.css";
function Home() {
  return (
    <div>
      <header>
        <div className="jumbotron">
          <div className="container">
            <h1 className="display-3">Intro</h1>
            <p>
              This site is designed as a test project to join Jetcake! I figured
              I needed to fill the information section of this homepage and I
              felt why not go with jokes! Enjoy!
            </p>
          </div>
        </div>
      </header>
      <section className="container">
        <div className="card">
          <div className="card-body">
            <p className="card-text">
              A guy shows up late for work. The boss yells, ‘You should’ve been
              here at 8.30!’ He replies. ‘Why? What happened at 8.30?’
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <p className="card-text">
              China has a population of a billion people. One billion. That
              means even if you’re a one in a million kind of guy, there are
              still a thousand others exactly like you.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <p className="card-text">
              Three guys stranded on a desert island find a magic lantern
              containing a genie, who grants them each one wish. The first guy
              wishes he was off the island and back home. The second guy wishes
              the same. The third guy says: ‘I’m lonely. I wish my friends were
              back here.’
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <p className="card-text">
              A guy is sitting at home when he hears a knock at the door. He
              opens the door and sees a snail on the porch. He picks up the
              snail and throws it as far as he can. Three years later there’s a
              knock on the door. He opens it and sees the same snail. The snail
              says: ‘What the hell was that all about?’ content.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
