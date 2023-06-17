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
import { useState } from "react";

export default function Home() {
  return (
    <main>
      <NavBar />
      <div
        style={{ border: "1px solid red", width: "100vw", height: "454px" }}
      ></div>
      <div
        style={{ border: "1px solid red", width: "100vw", height: "226px" }}
      ></div>
      <div
        style={{ border: "1px solid red", width: "100vw", height: "626px" }}
      ></div>
      <div
        style={{ border: "1px solid red", width: "100vw", height: "628px" }}
      ></div>
      <div
        style={{ border: "1px solid red", width: "100vw", height: "894px" }}
      ></div>
      <div
        style={{ border: "1px solid red", width: "100vw", height: "982px" }}
      ></div>
      <div
        style={{ border: "1px solid red", width: "100vw", height: "307px" }}
      ></div>
    </main>
  );
}

function NavBar() {
  const [blue, setBlue] = useState("blue");
  const navArr = ["Home", "About Us", "Partner With Us", "Blog"];

  const setColor = function (e) {
    e.preventdefault();
    e.target.style.color === "blue" ? setBlue("") : setBlue("blue");
    console.log(e.target.style.color);
  };
  return (
    <nav>
      <a href="" className="logoImg">
        <img
          src="https://zetapp.in/_next/static/media/zet_new_logo.7adcc993.svg"
          style={{ position: "relative", left: "0px" }}
          className="logoImg"
        />
      </a>
      <div className="hamburgerMenu">
        <img
          src="https://zetapp.in/_next/static/media/menuIcon.bc0b4f4a.svg"
          alt="hamburgerMenu"
        />
      </div>
      <div className="menu">
        {navArr.map((navEl) => (
          <>
            <navArr href={`${navEl}`}>{navEl}</navArr>
          </>
        ))}
        <div className="dwnldZET" style={{ margin: "10px" }}>
          <button>Download ZET</button>
        </div>
      </div>
    </nav>
  );
}

// function
