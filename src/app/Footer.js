export default function Footer() {
  return (
    <div className="footer">
      <img
        style={{ width: "100%" }}
        src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAboutUs.085fb7a2.png&w=1920&q=100"
        alt="footer"
      />
      <div>
        <div className="zetLogo">
          <img
            alt="Zet - Zindagi Set"
            style={{ color: "transparent", width: "100%", height: "100%" }}
            src="https://zetapp.in/_next/static/media/zet_logo_white.04e35c15.svg"
          />
        </div>
        <div className="footerContent">
          <div className="company">
            <h3>COMPANY</h3>
            <a href="/about">About Us</a>
            <a href="/partner-with-us">Partner with us</a>
            <a href="/blog">Blog</a>
          </div>
          <div className="legal">
            <h3>LEGAL</h3>
            <a href="/privacy-ploicy">Privacy Policy</a>
            <a href="/terms-of-user">Terms of Use</a>
          </div>
          <div className="contact">
            <h3>CONTACT</h3>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hi@zetapp.in">
              <img src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FEmailIcon.58cee685.png&w=32&q=75" />
              &nbsp;&nbsp;hi@zetapp.in
            </a>
            <a href="tel://+919991110022">
              <img src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FPhoneIcon.dcc030db.png&w=32&q=75" />
              &nbsp;&nbsp;+91-7417274072
            </a>
          </div>
          <div className="social">
            <h3>SOCIAL</h3>
            <div>
              <a href="https://www.linkedin.com/company/zetapp-in/">
                <img src="https://zetapp.in/_next/static/media/linkedin.99e56649.svg" />
              </a>
              <a href="https://www.instagram.com/zetapp.in/">
                <img src="https://zetapp.in/_next/static/media/instagram.146ba33a.svg" />
              </a>
              <a href="https://www.facebook.com/zetapp.in/">
                <img src="https://zetapp.in/_next/static/media/facebook.cccadfff.svg" />
              </a>
              <a href="https://web.telegram.org/k/#@GetOneCode">
                <img src="https://zetapp.in/_next/static/media/TelegramImg.2d51b03f.svg" />
              </a>
              <a href="https://chat.whatsapp.com/HRlwYwVYRuaBuH3bRBrgMj">
                <img src="https://zetapp.in/_next/static/media/WhatsappImg.a5c0a9a6.svg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
