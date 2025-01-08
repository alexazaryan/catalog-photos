import { ImVk } from "react-icons/im";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

//
import { FaTelegram } from "react-icons/fa";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-general">
      <div className="footer">
        <div className="footer-wrap">
          <ul className="colum-firs">
            <li className="colum-firs__h2">
              <h2>About Catalog-Z</h2>
            </li>
            <li className="colum-firs__p">
              <p>
                Catalog-Z is free Bootstrap 5 Alpha 2 HTML Template for video
                and photo websites. You can freely use this TemplateMo layout
                for a front-end integration with any kind of CMS website.
              </p>
            </li>
          </ul>

          <ul className="colum-two">
            <li className="colum-two__li__title">Our Links</li>
            <li className="colum-two__li">Advertise</li>
            <li className="colum-two__li">Support</li>
            <li className="colum-two__li">Our Company</li>
            <li className="colum-two__li">Contact</li>
          </ul>

          <ul className="colum-three">
            <li className="colum-three__social-media-icons">
              <ul className="colum-three-wrap__img">
                <li className="colum-three-img">
                  <ImVk className="colum-react-img" />
                </li>
                <li className="colum-three-img">
                  <FaSquareFacebook className="colum-react-img" />
                </li>
                <li className="colum-three-img">
                  <a href="https://t.me/Student_JS" target="_blank">
                    <FaTelegram className="colum-react-img colum-react-img__telegram" />
                  </a>
                </li>
                <li className="colum-three-img">
                  <FaTwitterSquare className="colum-react-img" />
                </li>
                <li className="colum-three-img">
                  <FaInstagramSquare className="colum-react-img" />
                </li>
              </ul>
            </li>
            <li className="colum-three__title">Terms of Use</li>
            <li className="colum-three__title">Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-ears__wrap">
          <p>Copyright 2020 Catalog-Z Company. All rights reserved.</p>
          <p>Designed by TemplateMo</p>
        </div>
      </div>
    </div>
  );
}
