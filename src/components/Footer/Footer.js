import React, { useContext } from "react";
import LanguageContext from "../../Context/LanguageContext";

const Footer = () => {
  const { language,translations } = useContext(LanguageContext); // Get language and toggle function from context
  return (
    <div>
      <div
        className="container-fluid bg-dark text-light footer pt-5 mt-5 "
      
      >
        <div className="container py-5">
          <div className="row g-5" dir="ltr">
            <div className="col-lg-3 col-md-6">
              <h4 className={`section-title ff-secondary text-start text-primary fw-normal mb-4 ${language==="fa"?"farsi_font":""}`}>
                {translations[language].company}
              </h4>
              <a className={`btn btn-link ${language==="fa"?"farsi_font":""}`} href="#">
                {translations[language].about_us}
              </a>
              <a className={`btn btn-link ${language==="fa"?"farsi_font":""}`} href="#">
                {translations[language].contact_us}
              </a>
              <a className={`btn btn-link ${language==="fa"?"farsi_font":""}`} href="#">
                {translations[language].reservation}
              </a>
              <a className={`btn btn-link ${language==="fa"?"farsi_font":""}`} href="#">
                {translations[language].privacy_policy}
              </a>
              <a className={`btn btn-link ${language==="fa"?"farsi_font":""}`} href="#">
                {translations[language].terms_and_condition}
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className={`section-title ff-secondary text-start text-primary fw-normal mb-4 ${language==="fa"?"farsi_font":""}`}>
                {translations[language].contact1}
              </h4>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt me-3"></i>{translations[language].footer_address}
              </p>
              <p className="mb-2" >
                <i className="fa fa-phone-alt me-3"></i>{translations[language].number}
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope me-3"></i>{translations[language].info_example}
              </p>
              <div className="d-flex pt-2">
                <a className="btn btn-outline-light btn-social" href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="#">
                  <i className="fab fa-youtube"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className={`section-title ff-secondary text-start text-primary fw-normal mb-4 ${language==="fa"?"farsi_font":""}`}>
                {translations[language].opening}
              </h4>
              <h5 className={`text-light fw-normal ${language==="fa"?"farsi_font":""}`}>
                {language==="fa"
              ? "شنبه - دوشنبه"
              : "Monday - Saturday"
              }
              </h5>
              <p className={`${language==="fa"?"farsi_font":""}`}>
                {language==="fa"
                ? "۹ صبح - ۹ شب"
                : "09AM - 09PM"
                }</p>
        
              <h5 className={`text-light fw-normal ${language==="fa"?"farsi_font":""}`}>
                {language==="fa"
                ? "یکشنبه" 
                : "Sunday"
              }
              </h5>
              <p className={`${language==="fa"?"farsi_font":""}`}>
                {language==="fa"
                ? "۱۰ صبح - ۸ شب"
                : "10AM - 08PM"
                }
                </p>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className={`section-title ff-secondary text-start text-primary fw-normal mb-4 ${language==="fa"?"farsi_font":""}`}>
                {translations[language].newsletter}
              </h4>
              <p>{translations[language].footer_lorem}</p>
              <div
                className="position-relative mx-auto"
                style={{ maxWidth: "400px" }}
              >
                <input
                  className="form-control border-primary w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder={translations[language].your_email}
                />
                <button
                  type="button"
                  className={`btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2 ${language==="fa"?"farsi_font":""}`}
                >
                  {translations[language].sign_up}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy;{" "}
                <a className="border-bottom" href="#">
                  Restaurant
                </a>
                <br />
                Designed By {"Mohammadreza Mohammadi"}
              </div>
              <div className="col-md-6 text-center text-md-end">
                <div className="footer-menu">
                  <a href="#">{translations[language].home1}</a>
                  <a href="#">{translations[language].cookies}</a>
                  <a href="#">{translations[language].help}</a>
                  <a href="#">{translations[language].fqas}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        href="#"
        className="btn btn-lg btn-primary btn-lg-square back-to-top"
      >
        <i className="bi bi-arrow-up"></i>
      </a>
    </div>
  );
};

export default Footer;