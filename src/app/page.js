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
export default function Home() {
  // window.addEventListener("scroll", function (e) {
  //   let a = document.querySelectorAll(".companyInvestor");
  //   if (window.scrollY > 1300) {
  //     a[0].classList.add("slideUp");
  //   }
  //   if (window.scrollY < 900) {
  //     a[0].classList.remove("slideUp");
  //   }
  // });
  return (
    <main>
      <NavBar />
      <OurMission />
      <EvolvedOverYears />
      <Featured />
      <Investors />
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
        <div className="dwnldZET">
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
          top: "38%",
          left: "14%",
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
        alignItems: "center",
        flexDirection: "column",
        paddingBottom: "6rem",
        width: "100vw",
      }}
    >
      <h1>Got Featured</h1>

      <div
        style={{
          width: "80vw",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div className={styles.featuredImg}>
          <img
            alt="EconomicTimes"
            src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FEconomicTimes.5724030e.png&w=640&q=75"
          />
        </div>
        <div className={styles.featuredImg}>
          <img
            alt="Inc42"
            src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInc42.7697aec8.png&w=640&q=75"
          />
        </div>
        <div className={styles.featuredImg}>
          <img
            alt="Mint"
            src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmint.410f3a1a.png&amp;w=1080&amp;q=75"
          />
        </div>
        <div className={styles.featuredImg}>
          <img
            alt="YourStory"
            src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FYourStory.1efabc81.png&amp;w=1080&amp;q=75"
          />
        </div>
        <div className={styles.featuredImg}>
          <img
            alt="BusinessStandard"
            src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBusinessStandard.047c592d.png&amp;w=1080&amp;q=75"
          />
        </div>
      </div>
      <div className="swiper-pagination"></div>
    </div>
  );
}

function Investors() {
  const InvestorsArr = [
    {
      KunalShah: {
        img: "https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInv1.1c87bc0c.png&w=640&q=75",
        name: "Kunal Shah",
        founder: "Founder, CRED",
      },
    },
    {
      GauravMunjal: {
        img: "https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInv2.331b31f9.png&w=640&q=75",
        name: "Gaurav Munjal",
        founder: "Founder, UNACADEMY",
      },
    },
    {
      AakritVaish: {
        img: "https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInv3.1779e0d4.png&w=640&q=75",
        name: "Aakrit Vaish",
        founder: "Co-Founder, HAPTIK",
      },
    },
    {
      HarshilMathur: {
        img: "https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInv4.b9325fa0.png&w=640&q=75",
        name: "Harshil Mathur",
        founder: "Founder, RAZORPAY",
      },
    },
    {
      ViditAatrey: {
        img: "https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInv5.2e962217.png&w=640&q=75",
        name: "Vidit Aatrey",
        founder: "Founder & CEO, MEESHO",
      },
    },
    {
      AmrishRau: {
        img: "https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInv6.7a958b9d.png&w=640&q=75",
        name: "Amrish Rau",
        founder: "CEO, PINELABS",
      },
    },
    {
      LalitKeshre: {
        img: "https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInv7.3b8a633d.png&w=640&q=75",
        name: "Lalit Keshre",
        founder: "CEO, GROWW",
      },
    },
    {
      GokulRajaram: {
        img: "https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInv8.bcbe6091.png&w=640&q=75",
        name: "Gokul Rajaram",
        founder: "Product, DOORDASH",
      },
    },
  ];
  return (
    <div className="investors">
      <h1>Meet the Investors</h1>
      <div className="investorDetailed">
        <div className="companyInvestor slideUp">
          <div className="sequoia">
            <img
              alt="sequoia"
              src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInvCompany1.41d5c5bd.png&w=640&q=75"
            />
          </div>
          <div className="nexus">
            <img
              alt="nexus"
              src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInvCompany2.3f604866.png&w=640&q=75"
            />
          </div>
          <div className="generalcatalyst">
            <img
              alt="generalcatalyst"
              src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInvCompany3.c16095cb.png&w=640&q=75"
            />
          </div>
          <div className="waterbridge">
            <img
              alt="waterbridge"
              src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInvCompany4.9acb56c2.png&w=640&q=75"
            />
          </div>
        </div>
        <div className="personInvestor">
          {InvestorsArr.map((investor, i) => {
            return (
              <div className={Object.keys(investor)[0]}>
                <div className="investorImg">
                  <img
                    alt={investor[Object.keys(investor)[0]].name}
                    src={investor[Object.keys(investor)[0]].img}
                  />
                </div>
                <p className="investorName">
                  {investor[Object.keys(investor)[0]].name}
                </p>
                <p className="investorFound">
                  {investor[Object.keys(investor)[0]].founder}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
