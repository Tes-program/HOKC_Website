import React from 'react';
import { Link } from 'react-router-dom';
const Footer: React.FC = () => {
  return (
    <footer className="relative bg-neutral-100 border-t border-[#dde0e2] text-center text-neutral-600  lg:text-left">
      <div className=" p-9 ">
        <div className=" lg:flex justify-evenly">
          <div className=" ">
            <h3 className=" font-extrabold font-Rubik-Black text-black text-2xl md:text-3xl ">
              Join our Email Newsletter
            </h3>
            <p className="lg:w-9/12 font-Rubik-Regular sm:w-full">
              Sign up for our mailing list and we will let you know when we have
              new information or updates
            </p>
          </div>
          <div className=" relative p-3 ">
            <input
              type="text"
              className=" border-2 font-Rubik-Bold font-extrabold md:text-[16px] border-black rounded-full md:w-[384px] lg:w-96 sm:w-auto px-6 py-4"
              placeholder="Enter your mail"
            />
            <button
              className=" text-sm rounded-2xl mt-4 lg:m-0
                md:absolute md:top-[10px] lg:top-[25px] md:-translate-x-[135px] px-4 py-1 font-Rubik-Bold font-semibold bg-red-500 text-white w-[120px] h-8"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 mx-6 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* navigation */}
          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold font-Rubik-Bold uppercase md:justify-start">
              navigate
            </h6>
            <p className="mb-4">
              <Link to="/" className=" font-Rubik-Regular text-neutral-600">
                Home
              </Link>
            </p>
            <p className="mb-4">
              <Link to="/about" className="font-Rubik-Regular text-neutral-600">
                About
              </Link>
            </p>
            <p className="mb-4">
              <Link
                to="/contact"
                className="font-Rubik-Regular text-neutral-600"
              >
                Contact
              </Link>
            </p>
            <p className="mb-4">
              <Link to="/event" className="font-Rubik-Regular text-neutral-600">
                Events
              </Link>
            </p>
            <p className="mb-4">
              <Link
                to="/department"
                className="font-Rubik-Regular text-neutral-600"
              >
                Departments
              </Link>
            </p>
          </div>
          {/* other links section */}
          <div className="">
            <h6 className="mb-4 font-Rubik-Bold flex justify-center font-semibold uppercase md:justify-start">
              Other links
            </h6>
            <p className="mb-4">
              <Link to="/choir" className="font-Rubik-Regular text-neutral-600">
                Choir
              </Link>
            </p>
            <p className="mb-4">
              <Link to="/media" className="font-Rubik-Regular text-neutral-600">
                Media
              </Link>
            </p>
            <p className="mb-4">
              <Link
                to="/sanctuary-keepers"
                className="font-Rubik-Regular text-neutral-600"
              >
                Sanctuary Keepers
              </Link>
            </p>
            <p className="mb-4">
              <Link
                to="/protocol"
                className="font-Rubik-Regular text-neutral-600"
              >
                Protocol
              </Link>
            </p>
            <p className="mb-4">
              <Link to="/sound" className="font-Rubik-Regular text-neutral-600">
                Sound
              </Link>
            </p>
            <p className="mb-4">
              <Link
                to="/medical-team"
                className="font-Rubik-Regular text-neutral-600"
              >
                Medical Team
              </Link>
            </p>
          </div>
          {/* support */}
          <div className="">
            <h6 className="mb-4 flex justify-center font-Rubik-Bold font-semibold uppercase md:justify-start">
              Support
            </h6>
            <p className="mb-4">
              <Link
                to="/contact-us"
                className="font-Rubik-Bold text-neutral-600"
              >
                Contact Us
              </Link>
            </p>
            <p className="mb-4">
              <Link
                to="/account-number"
                className="font-Rubik-Bold text-neutral-600"
              >
                Account number
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* <!--Copyright section--> */}

      <div className="flex items-center flex-col bg-red-700 border-b-2  border-neutral-200 p-6 dark:border-neutral-500 md:justify-between md:flex-row">
        <div className=" text-slate-100 font-light font-Rubik-Light p-6 text-center">
          <span>© 2023 Copyright:</span>
          <a
            className=" text-white font-extrabold font-Rubik-Bold"
            href="https://google.com"
          >
            Heirs of the Kingdom Chapel
          </a>
        </div>
        {/* <!-- Social network icons container --> */}
        <div className="flex justify-center">
          <a className="mr-6 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </a>
          <a className="mr-6 text-white dark:text-neutral-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </a>
          <a className="mr-6 text-white ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a className="mr-6 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a className="mr-6 text-white ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
          </a>
          <a className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
