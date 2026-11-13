import { Link } from "react-router-dom";
import { navLinks, services, contactInfo, socialLinks } from "../data";
import { FaLongArrowAltUp } from "react-icons/fa";

export default function Footer() {

  //* Current Year Method
  //* ===================
  const currentYear = new Date().getFullYear();


  //* GoTOTop Function 
  //* ================
  const GoMoveToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer>
      <div className="wrapper">
        <div className="flex justify-between flex-col sm:flex-row sm:flex-wrap gap-6 py-[50px] lg:py-[100px] border-b border-gray-300">

          {/* Logo and Description Section */}
          <div className="max-w-[335px]">
            <Link className="logo w-36" to="/" aria-label="Nail Design">
              <img src="/nailbar-design-logo.png" alt="Nail Design logo" />
            </Link>
            <div className="mt-4 mb-5">
              Welcome to our corner of beauty and elegance, located in the heart of Niš, where your satisfaction and care always come first.
            </div>
            <ul className="flex gap-4">
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    className="group h-[50px] w-[50px] flex justify-center items-center rounded-full border border-black hover:bg-black duration-200"
                    to={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.ariaLabel}
                  >
                    <link.icon className="text-xl group-hover:text-white duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Links Section */}
          <nav aria-label="Brzi linkovi">
            <h2 className="mb-4 text-xl font-serif">
              Quick Links
            </h2>
            <ul className="flex flex-wrap gap-2 sm:flex-col">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link className="hover:underline"
                    to={link.url}
                    aria-label={link.name}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services Section */}
          <nav aria-label="Usluge">
            <h2 className="mb-4 text-xl font-serif">
              Services
            </h2>
            <ul className="flex flex-wrap gap-2 sm:flex-col">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    className="capitalize hover:underline"
                    to={`/services/${service.pageUrl}`}
                    aria-label={`Pogledajte ${service.servicesTitle}`}>
                    {service.servicesTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div aria-labelledby="contact-info">
            <h2 id="contact-info" className="mb-4 text-xl font-serif">
              Contact Information
            </h2>
            <ul className="flex flex-col space-y-2">
              {contactInfo.map((contact, index) => (
                <li key={index}>
                  <Link
                    className="hover:underline"
                    target="_blank"
                    to={contact.info} aria-label={`Kontaktirajte nas putem ${contact.name}`}>
                    {contact.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col-reverse items-center justify-between gap-5 border-t border-pink-100 py-8 sm:flex-row">
          <p className="text-center text-sm font-medium text-slate-500 sm:text-left">
            &copy; {currentYear} Nail Design — All About Beauty. All Rights Reserved.
          </p>

          {/* <p>
            Developed By
            <Link
              className="ml-1 font-medium text-pink-500 hover:underline"
              to="https://www.linkedin.com/in/nikola-milosevic-dev/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Nikola Milosevic's LinkedIn profile">
              Faisal Nazir
            </Link>
          </p> */}

          <p className="text-center text-sm font-medium text-slate-500 sm:text-left">
            Developed By
            <Link
              className="ml-1 text-pink-500 hover:underline"
              to="https://faisal-nazir-portfolio.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Faisal Nazir's Portfolio">
              Faisal Nazir
            </Link>
          </p>

          <button
            type="button"
            onClick={GoMoveToTop}
            aria-label="Back to top"
            className="group flex h-11 w-11 items-center justify-center rounded-full
            border border-pink-200 bg-pink-50 text-lg text-pink-500
            shadow-sm transition-all duration-300
            hover:-translate-y-1 hover:bg-pink-500 hover:text-white hover:shadow-md
            focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-offset-2"
          >
            <FaLongArrowAltUp className="transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
