import Link from 'next/link';

const Footer = () => (
  <footer className="footer footer-three section pb-0" data-background="/images/home-four/footer-l.png">
  <div className="container">
    <div className="row items-gap-two">
      <div className="col-12 col-sm-6 col-lg-3">
        <div className="footer__single f-t-f mt-0 wow fadeInUp" data-wow-duration="600ms">
          <div className="logo">
            <Link href="/" legacyBehavior>
              <a className="text-xl">
                {/* <img src="/images/home-four/logo-light.png" alt="Image" /> */}
                AI Blood Test
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-lg-3">
        <div className="footer__single wow fadeInUp" data-wow-duration="600ms" data-wow-delay="200ms">
        </div>
      </div>
      <div className="col-12 col-sm-6 col-lg-3">
        <div className="footer__single wow fadeInUp" data-wow-duration="600ms" data-wow-delay="400ms">

        </div>
      </div>
      <div className="col-12 col-sm-6 col-lg-3">
        <div className="footer__single wow fadeInUp" data-wow-duration="600ms" data-wow-delay="600ms">
          <div className="social justify-content-start">
            <Link href="/" legacyBehavior>
              <a aria-label="social media">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </Link>
            <Link href="/" legacyBehavior>
              <a aria-label="social media">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </Link>
            <Link href="/" legacyBehavior>
              <a aria-label="social media">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </Link>
            <Link href="/" legacyBehavior>
              <a aria-label="social media">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="copyright text-center">
    <p>
      Copyright &copy;
      <span id="copyYear"></span>
      <Link href="/" legacyBehavior>
        <a>AIBloodTest</a>
      </Link>
    </p>
  </div>
</footer>
  );
  
  export default Footer;
  