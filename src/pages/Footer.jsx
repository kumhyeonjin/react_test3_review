import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <section className="footer mw">
        <div className="ftCon">
          <div className="infoSite">
            <Link to="/">CONTACT</Link>
            <Link to="/">TERMS OF SERVICES</Link>
            <Link to="/">SHIPPING AND RETURNS</Link>
          </div>
          <form action="submit" className="email">
            <input
              type="text"
              placeholder="Give an email get the newsletter."
              className="emailForm"
            />
            <a href="">
              <i class="fa-solid fa-arrow-right"></i>
            </a>
          </form>
        </div>
        <div className="copy">
          <span>2021 Shelly. Terms of use and privacy policy.</span>
          <div className="familySite">
            <Link to="/">
              <i class="fa-brands fa-linkedin-in"></i>
            </Link>
            <Link to="/">
              <i class="fa-brands fa-instagram"></i>
            </Link>
            <Link to="/">
              <i class="fa-brands fa-facebook"></i>
            </Link>
            <Link to="/">
              <i class="fa-brands fa-twitter"></i>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
