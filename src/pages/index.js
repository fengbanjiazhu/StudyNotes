import { useEffect, useState } from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import ChromeDinoGame from "react-chrome-dino";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
  const [gameMode, setGameMode] = useState(false);
  const { siteConfig } = useDocusaurusContext();

  function spaceJump() {
    const spaceEvent = new KeyboardEvent("keydown", { keyCode: 32 });
    document.dispatchEvent(spaceEvent);
  }

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <div>
          <ChromeDinoGame />
        </div>
        <div className="gameControl">
          <button onClick={() => setGameMode(!gameMode)}>
            {gameMode ? "Game Mode ON" : "Game Mode OFF"}
          </button>
          {gameMode && <button onClick={spaceJump}>JUMP</button>}
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
