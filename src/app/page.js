"use client";
import { useEffect } from "react";
import styles from "./page.module.css";
export default function Home() {
  // useEffect(function onFirstMount() {
  //   window.addEventListener("scroll", function () {
  //     let a = document.querySelectorAll(".companyInvestor");
  //     let b = document.querySelectorAll(".founders");
  //     if (a[0].getBoundingClientRect().top == 600) {
  //       a[0].classList.add("slideUp");
  //     }
  //     if (b[0].getBoundingClientRect().top == 600) {
  //       b[0].classList.add("slideUp");
  //     }
  //     if (a[0].getBoundingClientRect().top == 700) {
  //       a[0].classList.remove("slideUp");
  //     }
  //     if (b[0].getBoundingClientRect().top == 700) {
  //       b[0].classList.remove("slideUp");
  //     }
  //     console.log(a[0].getBoundingClientRect());
  //     console.log(b[0].getBoundingClientRect());
  //   });
  //   return () => {
  //     window.removeEventListener("scroll");
  //   };
  // }, []);
  useEffect(function onFirstMount() {
    window.addEventListener("scroll", function () {
      let a = document.querySelectorAll(".companyInvestor");
      if (window.scrollY > 1200) {
        a[0].classList.add("slideUp");
      }
      if (window.scrollY < 900) {
        a[0].classList.remove("slideUp");
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <main>
      <NavBar />
      <OurMission />
      <EvolvedOverYears />
      <Featured />
      <Investors />
      <Founder />
      <div style={{ width: "100vw" }}>
        <img src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAboutUsFooter.d2311d39.png&w=3840&q=100" />
      </div>
      <Footer />
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
        <div className="companyInvestor">
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

function Founder() {
  return (
    <div className="founderSection">
      <div
        style={{
          textAlign: "center",
          margin: "24px 0px",
        }}
      >
        <h1 style={{ width: "100%" }}>Meet our Founders</h1>
        <p>Few words from founders desk</p>
      </div>
      <div className="founders">
        <div className="founderDetail">
          <div className="founderImg">
            <img src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FManish.519c8845.png&w=640&q=75" />
          </div>
          <div>
            <p>Manish Shara Co-Founder & CEO</p>
            <div className="linkdinImg">
              <img src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLinkedIn.6d99003c.png&w=96&q=75" />
            </div>
          </div>
        </div>
        <div className="founderDetail">
          <div className="founderImg">
            <img src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FYash.126e24ca.png&w=640&q=75" />
          </div>
          <div>
            <p>Yash Desai Co- Founder</p>
            <div className="linkdinImg">
              <img src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLinkedIn.6d99003c.png&w=96&q=75" />
            </div>
          </div>
        </div>
        <div className="founderDetail">
          <div className="founderImg">
            <img src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLokesh.ead063e7.png&w=640&q=75" />
          </div>
          <div>
            <p>Lokesh Agarwal CTO</p>
            <div className="linkdinImg">
              <img src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLinkedIn.6d99003c.png&w=96&q=75" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      <img
        style={{ width: "100%" }}
        src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAboutUs.085fb7a2.png&w=1920&q=100"
        alt="footer"
      />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          className="zetLogo"
          style={{
            display: "flex",
            width: "100%",
            borderBottom: "1px solid white",
            padding: "20px 0px",
          }}
        >
          <img
            alt="Zet - Zindagi Set"
            style={{ color: "transparent" }}
            src="https://zetapp.in/_next/static/media/zet_logo_white.04e35c15.svg"
          />
        </div>
        <div className="footerContent">
          <div className="company"></div>
          <div className="legal"></div>
          <div className="contact"></div>
          <div className="social"></div>
        </div>
      </div>
    </div>
  );
}
