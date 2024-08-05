import Link from 'next/link';
// import { useCallback } from 'react';

const Header = () => {
  // const handleDropdownClick = useCallback((e) => {
  //   e.preventDefault();
  //   // Handle dropdown logic here
  // }, []);

  return (
  <>
  <nav className="nav">
  <div className="nav__content">
    <div className="nav__logo">
      <Link href="/" legacyBehavior>
        <a className="text-3xl font-bold">
          {/* <img src="/images/home-four/logo-light.png" alt="Logo" /> */}
          AI Blood Test
        </a>
      </Link>
    </div>
    {/* <div className="nav__menu">
      <ul className="nav__menu-items">
        <li className="nav__menu-item nav__menu-item--dropdown">
          <a href="#" onClick={handleDropdownClick} className="nav__menu-link nav__menu-link--dropdown">
            Home
          </a>
          <div className="nav__dropdown nav__dropdown--alt">
            <ul>
              <li className="atery">
                <i className="fa-solid fa-moon"></i>
                Dark
              </li>
              <li>
                <Link href="/" legacyBehavior>
                  <a className="nav__dropdown-item hide-nav">Voice Over</a>
                </Link>
              </li>
              <li>
                <Link href="/index-two" legacyBehavior>
                  <a className="nav__dropdown-item hide-nav">Content Writer</a>
                </Link>
              </li>
              <li>
                <Link href="/index-three" legacyBehavior>
                  <a className="nav__dropdown-item hide-nav">Background Remover</a>
                </Link>
              </li>
              <li>
                <Link href="/index-four" legacyBehavior>
                  <a className="nav__dropdown-item hide-nav">Resume Builder</a>
                </Link>
              </li>
              <li>
                <Link href="/index-five" legacyBehavior>
                  <a className="nav__dropdown-item hide-nav">Copy Writing</a>
                </Link>
              </li>
              <li>
                <Link href="/index-six" legacyBehavior>
                  <a className="nav__dropdown-item hide-nav">Write Code</a>
                </Link>
              </li>
              <li>
                <Link href="/index-seven" legacyBehavior>
                  <a className="nav__dropdown-item hide-nav">Image Generator</a>
                </Link>
              </li>
              <li>
                <Link href="/index-eight" legacyBehavior>
                  <a className="nav__dropdown-item hide-nav">Digital Agency</a>
                </Link>
              </li>
              <li>
                <Link href="/index-nine" legacyBehavior>
                  <a className="nav__dropdown-item hide-nav">Video Creation</a>
                </Link>
              </li>
              <li>
                <Link href="/index-ten" legacyBehavior>
                  <a className="nav__dropdown-item hide-nav">Personal Consultant</a>
                </Link>
              </li>
            </ul>
            <ul>
              <li className="atery">
                <i className="fa-regular fa-moon"></i>
                Light
              </li>
              <li>
                <Link href="/index-light" legacyBehavior>
                  <a className="nav__dropdown-item hide-nav">Voice Over</a>
                </Link>
              </li>
              <li>
                <Link href="/index-two-light" legacyBehavior>
                  <a className="nav__dropdown-item hide-nav">Content Writer</a>
                </Link>
              </li>
              <li>
                <Link href="/index-three-light" legacyBehavior>
                  <a className="nav__dropdown-item hide-nav">Background Remover</a>
                </Link>
              </li>
              <li>
                <Link href="/index-four-light" legacyBehavior>
                  <a className="nav__dropdown-item hide-nav">Resume Builder</a>
                </Link>
              </li>
              <li>
                <Link href="/index-five-light" legacyBehavior>
                  <a className="nav__dropdown-item hide-nav">Copy Writing</a>
                </Link>
              </li>
              <li>
                <Link href="/index-six-light" legacyBehavior>
                  <a className="nav__dropdown-item hide-nav">Write Code</a>
                </Link>
              </li>
              <li>
                <Link href="/index-seven-light" legacyBehavior>
                  <a className="nav__dropdown-item hide-nav">Image Generator</a>
                </Link>
              </li>
              <li>
                <Link href="/index-eight-light" legacyBehavior>
                  <a className="nav__dropdown-item hide-nav">Digital Agency</a>
                </Link>
              </li>
              <li>
                <Link href="/index-nine-light" legacyBehavior>
                  <a className="nav__dropdown-item hide-nav">Video Creation</a>
                </Link>
              </li>
              <li>
                <Link href="/index-ten-light" legacyBehavior>
                  <a className="nav__dropdown-item hide-nav">Personal Consultant</a>
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="nav__menu-item">
          <Link href="/about-us" legacyBehavior>
            <a className="nav__menu-link hide-nav">About Us</a>
          </Link>
        </li>
        <li className="nav__menu-item nav__menu-item--dropdown">
          <a href="#" onClick={handleDropdownClick} className="nav__menu-link nav__menu-link--dropdown">
            Use Case
          </a>
          <ul className="nav__dropdown">
            <li>
              <Link href="/use-case" legacyBehavior>
                <a className="nav__dropdown-item hide-nav">Use Case</a>
              </Link>
            </li>
            <li>
              <Link href="/use-case-single" legacyBehavior>
                <a className="nav__dropdown-item hide-nav">Use Case Details</a>
              </Link>
            </li>
          </ul>
        </li>
        <li className="nav__menu-item nav__menu-item--dropdown">
          <a href="#" onClick={handleDropdownClick} className="nav__menu-link nav__menu-link--dropdown">
            Pages
          </a>
          <ul className="nav__dropdown">
            <li>
              <Link href="/404" legacyBehavior>
                <a className="nav__dropdown-item hide-nav">Error</a>
              </Link>
            </li>
            <li>
              <Link href="/register" legacyBehavior>
                <a className="nav__dropdown-item hide-nav">Sign Up</a>
              </Link>
            </li>
            <li>
              <Link href="/sign-in" legacyBehavior>
                <a className="nav__dropdown-item hide-nav">Sign In</a>
              </Link>
            </li>
            <li>
              <Link href="/teams" legacyBehavior>
                <a className="nav__dropdown-item hide-nav">Our Teams</a>
              </Link>
            </li>
            <li>
              <Link href="/about-us" legacyBehavior>
                <a className="nav__dropdown-item hide-nav">About Us</a>
              </Link>
            </li>
            <li>
              <Link href="/contact-us" legacyBehavior>
                <a className="nav__dropdown-item hide-nav">Contact Us</a>
              </Link>
            </li>
          </ul>
        </li>
        <li className="nav__menu-item nav__menu-item--dropdown">
          <a href="#" onClick={handleDropdownClick} className="nav__menu-link nav__menu-link--dropdown">
            Blog
          </a>
          <ul className="nav__dropdown">
            <li>
              <Link href="/blog" legacyBehavior>
                <a className="nav__dropdown-item hide-nav">Blog Layout One</a>
              </Link>
            </li>
            <li>
              <Link href="/blog-two" legacyBehavior>
                <a className="nav__dropdown-item hide-nav">Blog Layout Two</a>
              </Link>
            </li>
            <li>
              <Link href="/blog-single" legacyBehavior>
                <a className="nav__dropdown-item hide-nav">Blog Single</a>
              </Link>
            </li>
          </ul>
        </li>
        <li className="nav__menu-item">
          <Link href="/contact-us" legacyBehavior>
            <a className="nav__menu-link hide-nav">Contact Us</a>
          </Link>
        </li>
      </ul>
      <div className="social">
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
    </div> */}
    <div className="nav__uncollapsed">
      <div className="nav__uncollapsed-item d-none d-md-flex">
        <Link href="/" legacyBehavior>
          <a className="btn btn--secondary">Start Analysis</a>
        </Link>
      </div>
      <button className="nav__bar d-block d-xl-none">
        <span className="icon-bar top-bar"></span>
        <span className="icon-bar middle-bar"></span>
        <span className="icon-bar bottom-bar"></span>
      </button>
    </div>
  </div>
</nav>
</>
  );
};

export default Header;
