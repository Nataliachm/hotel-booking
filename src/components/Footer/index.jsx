import './Footer.scss';
import { useContext } from 'react';
import { AppContext } from '../../store/AppContext';

const Footer = () => {
  const store = useContext(AppContext);
  const { isLoading } = store;
  if (isLoading) return '';
  return (
    <footer>
      <div className="footerSection">
        <div className="footerSection__Contact">
          <div className="footerSection__Contact--Logo">
            <img
              src="https://themes.pixelstrap.com/rica/assets/images/icon/footer-logo.png"
              alt="logo"
            />
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries
          </p>
          <ul>
            <li>
              {' '}
              <i className="fas fa-map-marker-alt" />
              &nbsp;A-32, Albany, Newyork.
            </li>
            <li>
              {' '}
              <i className="fas fa-phone-alt" />
              &nbsp;518 - 457 - 5181
            </li>
            <li>
              <i className="fas fa-envelope" />
              &nbsp;contact@gmail.com
            </li>
          </ul>
        </div>
        <div className="footerSection__About">
          <h5>About</h5>
          <a href="/">About Us</a>
          <a href="/">FAQ</a>
          <a href="/">Login</a>
          <a href="/">Register</a>
          <a href="/">Terms & Co.</a>
          <a href="/">Privacy</a>
          <a href="/">Support</a>
        </div>
        <div className="footerSection__Places">
          <h5>Top Places</h5>
          <div className="footerSection__Places--imgs">
            <img
              src="https://themes.pixelstrap.com/rica/assets/images/tour/footer/1.jpg"
              alt="japan"
            />
            <img
              src="https://themes.pixelstrap.com/rica/assets/images/tour/footer/2.jpg"
              alt="beach"
            />
            <img
              src="https://themes.pixelstrap.com/rica/assets/images/tour/footer/3.jpg"
              alt="newyork"
            />
            <img
              src="https://themes.pixelstrap.com/rica/assets/images/tour/footer/4.jpg"
              alt="city"
            />
            <img
              src="https://themes.pixelstrap.com/rica/assets/images/tour/footer/5.jpg"
              alt="mountain"
            />
            <img
              src="https://themes.pixelstrap.com/rica/assets/images/tour/footer/6.jpg"
              alt="wild"
            />
          </div>
        </div>
        <div className="footerSection__Links">
          <h5>Useful Links</h5>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Our Vehical</a>
            </li>
            <li>
              <a href="/">Lastest Video</a>
            </li>
            <li>
              <a href="/">Sercises</a>
            </li>
            <li>
              <a href="/">Booking Deal</a>
            </li>
            <li>
              <a href="/">Emergency Call</a>
            </li>
            <li>
              <a href="/">Mobile App</a>
            </li>
          </ul>
        </div>
        <div className="footerSection__Topics">
          <h5>New Topics</h5>
          <div className="footerSection__Topics--media1">
            <div>
              <img
                src="https://themes.pixelstrap.com/rica/assets/images/cab/blog-footer/1.jpg"
                alt="new1"
              />
            </div>
            <div>
              <h5>Recent New</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum
              </p>
            </div>
          </div>
          <div className="footerSection__Topics--media2">
            <div>
              <img
                src="https://themes.pixelstrap.com/rica/assets/images/cab/blog-footer/2.jpg"
                alt="new2"
              />
            </div>
            <div>
              <h5>Recent New</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="subFooter">
        <div className="subFooter__Redes">
          <a href="https://es-la.facebook.com/">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="https://www.instagram.com/">
            <i className="fab fa-instagram" />
          </a>
          <a href="https://twitter.com/">
            <i className="fab fa-twitter" />
          </a>
          <a href="https://www.google.com/">
            <i className="fab fa-google" />
          </a>
        </div>
        <div className="subFooter__Copy">
          <p>
            Copyright 2019 rica by
            <i className="fas fa-heart" />
            &nbsp;pixelstrap
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
