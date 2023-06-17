"use client";
import Image from "next/image";
/* Problem 👆🏼
Parsing error: Cannot find module 'next/babel'
Require stack:
- D:\hp vikas\NextJS\Project\zetapp\node_modules\next\dist\compiled\babel\bundle.js
- D:\hp vikas\NextJS\Project\zetapp\node_modules\next\dist\compiled\babel\eslint-parser.js
- D:\hp vikas\NextJS\Project\zetapp\node_modules\eslint-config-next\parser.js
- D:\hp vikas\NextJS\Project\zetapp\node_modules\@eslint\eslintrc\dist\eslintrc.cjseslint

Soulution => https://stackoverflow.com/questions/68163385/parsing-error-cannot-find-module-next-babel
*/
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  return (
    <main className={styles.main}>
      <NavBar />
    </main>
  );
}

function NavBar() {
  const [blue, setBlue] = useState("blue");

  const setColor = function (e) {
    e.preventdefault();
    e.target.style.color === "blue" ? setBlue("") : setBlue("blue");
    console.log(e.target.style.color);
  };
  return (
    <nav>
      <a
        href=""
        style={{
          textAlign: "right",
          width: "19rem",
          height: "3rem",
          display: "flex",
          justifyContent: "start",
        }}
      >
        <img
          src="https://zetapp.in/_next/static/media/zet_new_logo.7adcc993.svg"
          style={{ position: "relative", left: "0px" }}
          className="logoImg"
        />
        abc
      </a>
      <div className="hamburgerMenu">
        <img
          src="https://zetapp.in/_next/static/media/menuIcon.bc0b4f4a.svg"
          alt="hamburgerMenu"
        />
      </div>
      <div className="menu">
        <a
          href="/"
          style={{ color: `${blue}`, padding: "0rem 1rem" }}
          onMouseover={(e) => setColor}
        >
          Home
        </a>
        <a
          href="/about"
          style={{ color: "", padding: "0rem 1rem" }}
          onMouseover={(e) => setColor}
        >
          About Us
        </a>
        <a
          href="/partner-with-us"
          style={{ color: "", padding: "0rem 1rem" }}
          onMouseover={(e) => setColor}
        >
          Partner With Us
        </a>
        <a
          href="/blog"
          style={{ color: "", padding: "0rem 1rem" }}
          onMouseover={(e) => setColor}
        >
          Blog
        </a>
        <div className="dwnldZET" style={{ margin: "10px" }}>
          <button>Download ZET</button>
        </div>
      </div>
    </nav>
  );
}

// function
