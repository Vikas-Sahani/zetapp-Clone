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

export default function Home() {
  return (
    <main className={styles}>
      <NavBar />
    </main>
  );
}

function NavBar() {
  return (
    <nav>
      <a href="">
        <img
          src="https://zetapp.in/_next/static/media/zet_new_logo.7adcc993.svg"
          style={{ width: "90px", height: "45px" }}
        />
      </a>
      <div className="hamburgerMenu">
        <img
          src="https://zetapp.in/_next/static/media/menuIcon.bc0b4f4a.svg"
          style={{ color: "transparent" }}
        />
      </div>
    </nav>
  );
}

// function
