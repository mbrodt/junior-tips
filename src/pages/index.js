import React from "react"
import "../tailwind.css"

export default function Home() {
  const [emailInput, setEmailInput] = React.useState("")
  const submitEmail = () => {
    console.log("SUBMIT", emailInput)
  }
  return (
    <>
      <div className="bg-gray-900 flex flex-col items-center justify-center h-screen">
        <div
          className="w-full max-w-4xl mx-auto text-white rounded-lg shadow-2xl pt-10 py-12"
          style={{
            background: "linear-gradient(90deg, #ff5b5d 0%, #de6baf 100%)",
          }}
        >
          <div className="w-full text-center flex flex-col items-center justify-center">
            <div>
              <h3 className="text-2xl">Join our newsletter</h3>
              <p>Weekly FREE UI resources straight to your inbox</p>
            </div>
            <div className="flex mt-8">
              <input
                onChange={e => {
                  setEmailInput(e.target.value)
                  console.log("EMAIL INPUT", emailInput)
                }}
                className="focus:outline-none focus:shadow-outline bg-transparent border-l border-t border-b border-white rounded-l px-4 py-2 text-lg text-white placeholder-white"
                style={{ width: 400 }}
                type="text"
                placeholder="Your email"
              />
              <button
                onClick={submitEmail}
                className="rounded-r bg-white text-gray-900 px-8 text-sm font-bold"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
