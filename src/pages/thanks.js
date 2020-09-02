import React from "react"

const thanks = () => {
  return (
    <div className="bg-gray-900 flex flex-col items-center justify-center h-screen px-4">
      <h1 className="text-3xl sm:text-4xl lg:text-6xl text-white font-bold mb-8">
        Just one more step...
      </h1>
      <div className="text-white text-lg text-center">
        <p>
          You need to confirm your subscription in the email I just sent you -
          make sure to check the spam filter too!
        </p>
        <p>As soon as your email is confirmed, you'll get the first lesson.</p>
      </div>
    </div>
  )
}

export default thanks
