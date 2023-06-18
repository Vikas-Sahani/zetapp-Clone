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
export default function Home() {
  return (
    <main>
      <NavBar />
      <OurMission />
      <EvolvedOverYears />
      <Featured />
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
  const navArr = ["Home", "About Us", "Partner With Us", "Blog"];

  return (
    <nav>
      <a href="/" classNameName="logoImg">
        <img
          src="https://zetapp.in/_next/static/media/zet_new_logo.7adcc993.svg"
          alt="Zet-logo"
          style={{ height: "100%", width: "29%" }}
        />
      </a>
      <div className="hamburgerMenu">
        <img
          src="https://zetapp.in/_next/static/media/menuIcon.bc0b4f4a.svg"
          alt="hamburgerMenu"
        />
      </div>
      <div className="menu">
        {navArr.map((navEl, i) => (
          <>
            <a
              href={`${navEl === "Home" ? "/" : navEl}`}
              onClick={function (e) {
                e.preventDefault();
                let menus = e.target.parentNode.childNodes;
                for (let idx = 0; idx < 4; idx++) {
                  menus[idx].style.color = "";
                  e.target.style.color = "blue";
                }
              }}
            >
              {navEl}
            </a>
          </>
        ))}
        <div className="dwnldZET" style={{ margin: "10px" }}>
          <button>Download ZET</button>
        </div>
      </div>
    </nav>
  );
}

function OurMission() {
  return (
    <div className="ourMission">
      <img
        src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FOurMission.13d85461.png&w=3840&q=100"
        style={{ height: "auto", width: "100%" }}
      />
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "34%",
          color: "white",
          textAlign: "center",
          fontSize: "1.2rem",
        }}
      >
        <h1>OUR MISSION</h1>
        <p style={{ marginTop: "8px", fontSize: "1rem" }}>
          Enabling financial inclusion for the next billion Indians <br />&
          making their Zindagi Set. Building a platform that enables you <br />
          to sell financial products & earn up to Rs. 1 lakh every month.
        </p>
        <p
          style={{
            marginTop: "8px",
            fontFamily: "Graphie",
            fontWeight: 800,
            fontSize: "1rem",
            lineHeight: "43px",
            letterSpacing: "0.2em",
          }}
        >
          EARN BETTER. LIVE BETTER.
        </p>
      </div>
    </div>
  );
}

function EvolvedOverYears() {
  return (
    <div
      style={{
        width: "100vw",
        height: "auto",
        marginTop: "3rem",
        fontSize: "1rem",
        paddingBlock: "1.5rem",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "40px" }}>How we evolved over the years</h1>
      <div style={{ width: "100vw" }}>
        <img
          style={{ width: "80%", marginTop: "4.75rem" }}
          src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FGrowth.abe5b7d8.png&w=1920&q=100"
        />
      </div>
    </div>
  );
}

function Featured() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        paddingBottom: "6rem",
        width: "100vw",
        height: "18vw",
      }}
    >
      <div
        style={{
          width: "78vw",
          height: "6vh",
          margin: "32px 0px",
          alignItems: "start",
        }}
      >
        <h1 style={{ fontSize: "40px", lineHeight: "40px", fontWeight: 800 }}>
          Got Featured
        </h1>
      </div>

      <div className="swiper swiper-initialized swiper-horizontal swiper-free-mode swiper-backface-hidden">
        <div className="swiper-wrapper">
          <div
            className="swiper-slide swiper-slide-active"
            data-swiper-slide-index="0"
            style="width: 179px; margin-right: 10px;"
          >
            <div className="sc-iHDLbo iclhEX">
              <img
                alt="EconomicTimes"
                loading="lazy"
                width="472"
                height="320"
                decoding="async"
                data-nimg="1"
                className="sc-bxiBER khFTeX"
                style="color:transparent"
                srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FEconomicTimes.5724030e.png&amp;w=640&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FEconomicTimes.5724030e.png&amp;w=1080&amp;q=75 2x"
                src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FEconomicTimes.5724030e.png&amp;w=1080&amp;q=75"
              />
            </div>
          </div>
          <div
            className="swiper-slide swiper-slide-next"
            data-swiper-slide-index="1"
            style="width: 179px; margin-right: 10px;"
          >
            <div className="sc-iHDLbo iclhEX">
              <img
                alt="Inc42"
                loading="lazy"
                width="472"
                height="320"
                decoding="async"
                data-nimg="1"
                className="sc-bxiBER khFTeX"
                style="color:transparent"
                srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInc42.7697aec8.png&amp;w=640&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInc42.7697aec8.png&amp;w=1080&amp;q=75 2x"
                src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInc42.7697aec8.png&amp;w=1080&amp;q=75"
              />
            </div>
          </div>
          <div
            className="swiper-slide"
            data-swiper-slide-index="2"
            style="width: 179px; margin-right: 10px;"
          >
            <div className="sc-iHDLbo iclhEX">
              <img
                alt="Mint"
                loading="lazy"
                width="472"
                height="320"
                decoding="async"
                data-nimg="1"
                className="sc-bxiBER khFTeX"
                style="color:transparent"
                srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmint.410f3a1a.png&amp;w=640&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmint.410f3a1a.png&amp;w=1080&amp;q=75 2x"
                src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmint.410f3a1a.png&amp;w=1080&amp;q=75"
              />
            </div>
          </div>
          <div
            className="swiper-slide"
            data-swiper-slide-index="3"
            style="width: 179px; margin-right: 10px;"
          >
            <div className="sc-iHDLbo iclhEX">
              <img
                alt="YourStory"
                loading="lazy"
                width="472"
                height="320"
                decoding="async"
                data-nimg="1"
                className="sc-bxiBER khFTeX"
                style="color:transparent"
                srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FYourStory.1efabc81.png&amp;w=640&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FYourStory.1efabc81.png&amp;w=1080&amp;q=75 2x"
                src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FYourStory.1efabc81.png&amp;w=1080&amp;q=75"
              />
            </div>
          </div>
          <div
            className="swiper-slide"
            data-swiper-slide-index="4"
            style="width: 179px; margin-right: 10px;"
          >
            <div className="sc-iHDLbo iclhEX">
              <img
                alt="BusinessStandard"
                loading="lazy"
                width="472"
                height="320"
                decoding="async"
                data-nimg="1"
                className="sc-bxiBER khFTeX"
                style="color:transparent"
                srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBusinessStandard.047c592d.png&amp;w=640&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBusinessStandard.047c592d.png&amp;w=1080&amp;q=75 2x"
                src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBusinessStandard.047c592d.png&amp;w=1080&amp;q=75"
              />
            </div>
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
}
