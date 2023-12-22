import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faPhone, faDirections, faMessage } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <>
      <nav className="flex justify-between items-center py-6 px-16 shadow-md w-full fixed top-0 bg-white">
        <div className="flex items-center gap-6">
          <FontAwesomeIcon icon={faBars} className="text-primary-1 text-lg" />
          <h1 className="text-xl text-primary-1 font-semibold font-serif">
            Mohsin's Estate
          </h1>
        </div>
        <div className="md:flex hidden gap-8">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faMessage} className="text-primary-1" />
            <h1 className="text-lg text-primary-1 font-normal font-sans">
              Get Quote
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faPhone} className="text-primary-1" />
            <h1 className="text-lg text-primary-1 font-normal font-sans">
              Call Now
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faDirections} className="text-primary-1" />
            <h1 className="text-lg text-primary-1 font-normal font-sans">
              Get Directions
            </h1>
          </div>
        </div>
      </nav>

      <div className="flex flex-col items-center gap-20">

        <div className="w-full mt-40 flex flex-col items-center justify-center text-center">
          <h1 className="text-6xl text-primary-1 font-semibold font-serif">
            Mohsin's Estate
          </h1>
          <p className="text-lg my-8">
            Property Consultant in PWD Society, Bahria Town, Media town and all around.
            <span className="block">
              Open today until 21:00
            </span>
          </p>
          <button className="py-4 px-12 text-white bg-primary-1">
            GET QUOTE
          </button>
        </div>

        <div className="w-3/4">
          <img src="/images/main.jpg" alt="" className="w-full" />
        </div>

        <div className="flex flex-col items-center">
          <span className="w-20 h-0.5 bg-black block"></span>
          <p className="font-serif font-semibold text-lg py-2">
            UPDATES
          </p>
        </div>

        <div className="w-3/4 grid md:grid-cols-3 grid-cols-1">
          <div className="col-span-1">
            <p className="">
              <span className="block text-primary-1">
                Posted on Dec 27, 2022
              </span>
              We are happy to inform you that we have finally moved to a new place and are all set to reopen our company here at civic centre bahria town Islamabad.
              <br />
              We cordially invite you to join Us for grand opening of our office.
            </p>
            <button className="text-primary-1 underline underline-offset-8 font-medium py-8">
              CALL NOW
            </button>
          </div>
        </div>

      </div>

    </>
  )
}

export default App
