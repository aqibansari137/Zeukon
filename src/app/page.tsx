import "@/styles/homepage.scss";
import Image from "next/image";
import { Cards } from "@/components/Cards/Cards";
import { BackToTop } from "@/components/BackToTop/BackToTop";

export default function Home() {
  return (
    <div className="homepage">
      <div className="home-section main-container" id="home">
        <div className="left-col">
          <div className="inner">
            <span className="subtitle">WELCOME TO MY WORLD</span>
            <h1 className="title">
              Hi, I’m <span>Jone Lee a Developer</span>
            </h1>
            <div>
              <p className="description">
                I use animation as a third dimension by which to simplify
                experiences and kuiding thro each and every interaction. I’m not
                adding motion just to spruce things up, but doing it in ways
                that.
              </p>
            </div>
          </div>
        </div>
        <div className="right-col">
          <Image
            alt="Homepage banner"
            width="451"
            height="619"
            src="/images/homepage-banner.png"
          />
        </div>
      </div>
      <div className="divider"></div>
      <div className="what-i-do-section main-container" id="what-i-do">
        <h2>What I Do</h2>
        <Cards />
      </div>
      <div className="divider"></div>
      <div className="contact-us-section main-container" id="contact-me">
        <h2>Contact Me</h2>
        <div className="contact-items">
          <div className="col">
            <div className="icon-content">
              <i className="bi bi-geo-alt-fill"></i>
            </div>
            <h3>Address</h3>
            <p>Kolkata</p>
          </div>
          <div className="col">
            <div className="icon-content">
              <i className="bi bi-telephone-fill"></i>
            </div>
            <h3>Contact Number</h3>
            <a href="tel://1234567920">+91 1234567890</a>
          </div>
          <div className="col">
            <div className="icon-content">
              <i className="bi bi-send-fill"></i>
            </div>
            <h3>Email Address</h3>
            <a href="mailto:something@gmail.com">something@gmail.com</a>
          </div>
        </div>
      </div>
      <BackToTop />
    </div>
  );
}
