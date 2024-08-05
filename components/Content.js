'use client';

import Link from 'next/link';
import Header from './Header';
import Footer from './Footer';
import HealthCheckModal from './HealthCheckModal';
import UploadButton from './UploadButton';
import { useState, useRef } from 'react';

const Content = () => {
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileUploadClick = (e) => {
    e.preventDefault();
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
  <>
    <div id="preloader">
      <div id="loader"></div>
    </div>
    <div className="my-app home-four home-four-light">
      <header className="header header--light">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
                <Header />
            </div>
          </div>
        </div>
        <div className="backdrop"></div>
      </header>
      <div className="mobile-menu d-block d-xl-none">
        <nav className="mobile-menu__wrapper">
          <div className="mobile-menu__header">
            <div className="nav__logo">
              <Link href="/" legacyBehavior>
                <a aria-label="home page" title="logo">
                  <img src="/images/logo-four.png" alt="Image" />
                </a>
              </Link>
            </div>
            <button aria-label="close mobile menu" className="close-mobile-menu">
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
          <div className="mobile-menu__list"></div>
          <div className="mobile-menu__social social">
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
        </nav>
      </div>
      <div className="mobile-menu__backdrop"></div>
      <section className="banner-four pb-5" data-background="/images/home-four/bg-light.png">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 col-xxl-6">
              <div className="banner-four__content wow fadeInUp" data-wow-duration="600ms" data-wow-delay="600ms">
                <p className="fw-5">Trusted and preferred by millions.</p>
                <h2 className="h2-light">
                  Understand  
                  <span> Your Blood Test Result </span>
                  Instantly
                </h2>
                <p className="fw-5">
                Get Clear, Accurate Explanations for Your Blood Tests  Save time and avoid confusion with expert interpretations of your blood test results.
                </p>
                <UploadButton handleFileUploadClick={handleFileUploadClick} />
              </div>
            </div>
            <div className="col-12 col-lg-5 offset-lg-1 col-xxl-5 offset-xxl-1 d-none d-lg-block">
              <div className="banner-four__thumb">
                <img src="/images/svg/ai-blood-test.svg" alt="Image" className="unset" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="f-overview section pt-0 pb-4">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row items-gap">
              <HealthCheckModal file={file} setFile={setFile} fileInputRef={fileInputRef} />
              </div>
            </div>
          </div>
          <div className="section pb-0">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-7">
                <div className="section__header text-center">
                  <h2 className="text-white">
                  Our service offers clear, reliable explanations, making blood test results easy to understand.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section pb-0 pt-0 testimonial">
        {/* <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section__header--secondary">
                <div className="row align-items-center items-gap">
                  <div className="col-12 col-lg-8">
                    <h2 className="h2 wow fadeInUp" data-wow-duration="600ms" data-wow-delay="300ms">
                      awesome feedbacks
                    </h2>
                  </div>
                  <div className="col-12 col-lg-4">
                    <div className="cmn-pagination nt-pagination"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="testimonial__slider-wrapper">
          <div className="nt-slider">
            <div className="review__single">
              <div className="review-head">
                <div className="review__icons">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <img src="/images/review/icon-one.png" alt="Image" />
              </div>
              <div className="review-content">
                <p className="fw-7">
                no longer need to spend hours searching for what each blood test value means. This service is a lifesaver!
                </p>
              </div>
              <div className="review-meta">
                <div className="thumb">
                  <img src="/images/review/one.png" alt="Image" />
                </div>
                <div className="content">
                  <p className="h6">John D.</p>
                  <p>Engineer</p>
                </div>
              </div>
            </div>
            <div className="review__single">
              <div className="review-head">
                <div className="review__icons">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <img src="/images/review/icon-two.png" alt="Image" />
              </div>
              <div className="review-content">
                <p className="fw-7">
                The explanations are clear and easy to understand. I feel much more informed about my health now. Highly recommend!
                </p>
              </div>
              <div className="review-meta">
                <div className="thumb">
                  <img src="/images/review/two.png" alt="Image" />
                </div>
                <div className="content">
                  <p className="h6">Marcus G.</p>
                  <p>Community Manager</p>
                </div>
              </div>
            </div>
            <div className="review__single">
              <div className="review-head">
                <div className="review__icons">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <img src="/images/review/icon-three.png" alt="Image" />
              </div>
              <div className="review-content">
                <p className="fw-7">
                I used to struggle with interpreting my blood tests, but now it's so simple. The interpretations are fast and reliable!
                </p>
              </div>
              <div className="review-meta">
                <div className="thumb">
                  <img src="/images/review/two.png" alt="Image" />
                </div>
                <div className="content">
                  <p className="h6">Emily R.</p>
                  <p>Teacher</p>
                </div>
              </div>
            </div>
            <div className="review__single">
              <div className="review-head">
                <div className="review__icons">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <img src="/images/review/icon-one.png" alt="Image" />
              </div>
              <div className="review-content">
                <p className="fw-7">
                I used to struggle with interpreting my blood tests, but now it's so simple. The interpretations are fast and reliable!
                </p>
              </div>
              <div className="review-meta">
                <div className="thumb">
                  <img src="/images/review/two.png" alt="Image" />
                </div>
                <div className="content">
                  <p className="h6">Roderick D.</p>
                  <p>Nurse</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section faq faq-light pb-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-xl-6">
              <div className="section__header">
                <h2 className="h2">frequently ask questions</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-xl-10">
              <div className="accordion" id="accordion">
                <div className="accordion-item wow fadeInUp" data-wow-duration="600ms" data-wow-delay="600ms">
                  <h5 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      How do I upload my blood test results?
                    </button>
                  </h5>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordion"
                  >
                    <div className="accordion-body">
                      <p>
                      Our AI algorithms provide accurate interpretations based on up-to-date medical data
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item wow fadeInUp" data-wow-duration="600ms" data-wow-delay="900ms">
                  <h5 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Is my data secure?
                    </button>
                  </h5>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordion"
                  >
                    <div className="accordion-body">
                      <p>
                      Yes, we use advanced encryption and security measures to protect your information
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item content__space wow fadeInUp" data-wow-duration="600ms" data-wow-delay="1200ms">
                  <h5 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Can I get my results in another language?
                    </button>
                  </h5>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordion"
                  >
                    <div className="accordion-body">
                      <p>
                      Yes, our platform supports multiple languages for your convenience.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item content__space wow fadeInUp" data-wow-duration="600ms" data-wow-delay="1500ms">
                  <h5 className="accordion-header" id="headingFour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      How accurate are the interpretations
                    </button>
                  </h5>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordion"
                  >
                    <div className="accordion-body">
                      <p>
                      Our AI algorithms provide accurate interpretations based on up-to-date medical data
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>

    <div className="progress-wrap">
      <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
      </svg>
    </div>
    </>
  );
};

export default Content;
