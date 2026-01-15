import React from 'react';
import './footer.css';
import amazonlogo from './Assets1/amazonlogo.jpg';

const Footer = () => {
  return (
    <div className="footer">

      {/* TOP FOOTER */}
      <div className="footercontent">
        <div className="footercont1">
          <a href="#" className="contentfootertitle">Get to Know Us</a>
          <div className="contentfootersubtitlediv">
            <a href="#" className="contentfootersubtitlecontent">About Amazon</a>
            <a href="#" className="contentfootersubtitlecontent">Careers</a>
            <a href="#" className="contentfootersubtitlecontent">Press Releases</a>
            <a href="#" className="contentfootersubtitlecontent">Amazon Science</a>
          </div>
        </div>

        <div className="footercont1">
          <a href="#" className="contentfootertitle">Connect with Us</a>
          <div className="contentfootersubtitlediv">
            <a href="#" className="contentfootersubtitlecontent">Facebook</a>
            <a href="#" className="contentfootersubtitlecontent">Twitter</a>
            <a href="#" className="contentfootersubtitlecontent">Instagram</a>
          </div>
        </div>

        <div className="footercont1">
          <a href="#" className="contentfootertitle">Make Money with Us</a>
          <div className="contentfootersubtitlediv">
            <a href="#" className="contentfootersubtitlecontent">Sell on Amazon</a>
            <a href="#" className="contentfootersubtitlecontent">Amazon Accelerator</a>
            <a href="#" className="contentfootersubtitlecontent">Build Your Brand</a>
            <a href="#" className="contentfootersubtitlecontent">Global Selling</a>
            <a href="#" className="contentfootersubtitlecontent">Affiliate</a>
          </div>
        </div>

        <div className="footercont1">
          <a href="#" className="contentfootertitle">Let Us Help You</a>
          <div className="contentfootersubtitlediv">
            <a href="#" className="contentfootersubtitlecontent">Your Account</a>
            <a href="#" className="contentfootersubtitlecontent">Returns Centre</a>
            <a href="#" className="contentfootersubtitlecontent">Help</a>
          </div>
        </div>
      </div>

      {/* AMAZON BAR */}
      <div className="amazonBar">
        <img className="amazonimgfooter" src={amazonlogo} alt="Amazon Logo" />

        <div className="amazonBarOptions">
          <div className="footerOption">🌐 English</div>
          <div className="footerOption">
            <img src="https://tse4.mm.bing.net/th/id/OIP.2A0rcBfwW_fDIuv9YM9JmQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3" />
            India
          </div>
        </div>
      </div>

      {/* BOTTOM LINKS */}
      <div className="footerBottomLinks">
        <span>AbeBooks</span>
        <span>Amazon Web Services</span>
        <span>Audible</span>
        <span>IMDb</span>
        <span>Shopbop</span>
        <span>Amazon Business</span>
        <span>Prime Music</span>
      </div>

      {/* LEGAL */}
      <div className="footerBottomLegal">
        <span>Conditions of Use & Sale</span>
        <span>Privacy Notice</span>
        <span>Interest-Based Ads</span>
      </div>

      <a href="#" className="footerCopyright">
        © 1996-2026, Amazon.com, Inc. or its affiliates
      </a>
    </div>
  );
};

export default Footer;
