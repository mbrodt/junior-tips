import React from "react"
import "../tailwind.css"

const confirmed = () => {
  return (
    <div className="bg-gray-900 flex flex-col items-center justify-center h-screen px-4">
      <h1 className="text-3xl sm:text-4xl lg:text-6xl text-white font-bold mb-8">
        All set!
      </h1>
      <div className="text-white text-lg text-center">
        <p>
          Your email has been confirmed, and you'll be getting the first lesson
          shortly! Thank you for your interest - I can't wait to share the
          series with you ✌
        </p>
      </div>
    </div>
  )
}

export default confirmed
