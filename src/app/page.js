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
        <h3>Top Brands on ZET</h3>
        <p>We are trusted by best brand in the country</p>
      </div>
      <div className={styles.horizontalSlide}>
        list of top brands is remaining to add
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
