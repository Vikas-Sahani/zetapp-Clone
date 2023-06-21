"use client";

import styles from "./page.module.css";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Home() {
  return (
    <main>
      <NavBar />
      <FinancialAdvisor />
      <TopBrands />
      <Footer />
    </main>
  );
}

function FinancialAdvisor() {
  return (
    <div className={styles.finAdvis}>
      <div className={styles.finText}>
        <h1>
          Become a Financial Advisor and <span> Earn Rs.1 Lakh/Month</span>
        </h1>
        <p>No investment required</p>
        <div className={styles.googlePlayLogo}>
          <img
            alt="google-play-logo"
            src="https://zetapp.in/_next/static/media/downloadBtnDark.a0f01343.svg"
          />
        </div>
      </div>
      <div className={styles.phoneImg}>
        <img
          style={{ width: "100%", height: "100%" }}
          alt="A Happy man with good earning"
          src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FHeroImgNew.d1d917dd.png&w=750&q=75"
        />
      </div>
    </div>
  );
}

function TopBrands() {
  return (
    <div className={styles.topBrands}>
      <div className={styles.topBrandsText}>
        <h2>Top Brands on ZET</h2>
        <p>We are trusted by best brand in the country</p>
      </div>
      <div className={styles.horizontalSlide}>
        <div className={styles.marquee}>
          <div>
            <img
              alt="AmericanExpress"
              src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAmex.7272fe32.png&w=256&q=75"
            />
          </div>
          <div>
            <img
              alt="AU"
              src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAufin.1cae185f.png&w=256&q=75"
            />
          </div>
          <div>
            <img
              alt="AxisBank"
              src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAxis.f45801e9.png&w=256&q=75"
            />
          </div>
          <div>
            <img
              alt="BajajFinserv"
              src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBajaj.6a41ddf3.png&w=256&q=75"
            />
          </div>
          <div>
            <img
              alt="ICICIBank"
              src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIcici.b8108647.png&w=256&q=75"
            />
          </div>
          <div>
            <img
              alt="BankOfBaroda"
              src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBOB.d87af468.png&w=256&q=75"
            />
          </div>
          <div>
            <img
              alt="IDFCFirstBank"
              src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIdfc.c2795d1e.png&w=256&q=75"
            />
          </div>
          <div>
            <img
              alt="InduIndBank"
              src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIndusInd.7f678225.png&w=256&q=75"
            />
          </div>
          <div>
            <img
              alt="YesBank"
              src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FYesBank.44b87df7.png&w=256&q=75"
            />
          </div>
          <div>
            <img
              alt="StandardChartered"
              src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStandardChartered.6a91f4a9.png&w=256&q=75"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
