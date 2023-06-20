export default function NavBar() {
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
