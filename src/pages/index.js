import React from "react"
import axios from "axios"
import "../tailwind.css"

export default function Home() {
  const [emailInput, setEmailInput] = React.useState("")
  const [state, setState] = React.useState("idle")

  const states = {
    IDLE: "idle",
    LOADING: "loading",
    SUCCESS: "success",
    ERROR: "error",
  }
  const submitEmail = () => {
    console.log("SUBMIT", emailInput)
    setState(states.LOADING)
    const submitUrl = "/api/subscribe"
    axios
      .post(submitUrl, {
        email: emailInput,
      })
      .then(res => {
        setState(states.SUCCESS)
      })
      .catch(err => {
        setState(states.ERROR)
      })
  }
  return (
    <>
      <div className="bg-gray-900 flex flex-col items-center justify-center h-screen px-4">
        <h1 class="text-3xl sm:text-4xl lg:text-6xl text-white font-bold mb-8">
          Junior developer tips
        </h1>
        <div
          className="w-full max-w-4xl mx-auto text-white rounded-lg shadow-2xl pt-10 py-12 px-8"
          style={{
            background: "linear-gradient(90deg, #ff5b5d 0%, #de6baf 100%)",
          }}
        >
          <div className="w-full text-center flex flex-col items-center justify-center">
            <div class="max-w-2xl">
              <p>
                You'll receive 5 emails with applicable tips and tricks for
                navigating a tech career, improving your technical skills, and
                landing your dream developer job.
              </p>
            </div>
            <div className="flex mt-8">
              <input
                onChange={e => {
                  setEmailInput(e.target.value)
                  console.log("EMAIL INPUT", emailInput)
                }}
                className="focus:outline-none focus:shadow-outline bg-transparent border-l border-t border-b border-white rounded-l px-4 py-2 text-lg text-white placeholder-gray-300 w-48 sm:w-full"
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
        <div class="text-white mt-8">
          {state === "success" ? (
            <div>
              Success! Your email has been added, and you'll be receiving the
              tips soon! I've also sent a welcome email, if you don't see it,
              please check your spam folder.
            </div>
          ) : null}
          {state === "error" ? (
            <div>
              Hmm, something went wrong. Perhaps you are already signed up? If
              not, please try again ✌️.
            </div>
          ) : null}
        </div>
      </div>
    </>
  )
}
