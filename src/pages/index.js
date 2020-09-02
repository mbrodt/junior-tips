import React from "react"
import axios from "axios"
import ConvertKitForm from "convertkit-react"
import "../tailwind.css"

export default function Home() {
  const CONVERTKIT_FORM_ID = "1639535"
  const [emailInput, setEmailInput] = React.useState("")
  const [state, setState] = React.useState("idle")

  const states = {
    IDLE: "idle",
    LOADING: "loading",
    SUCCESS: "success",
    ERROR: "error",
  }
  const submitEmail = () => {
    setState(states.LOADING)
    const submitUrl = "/api/subscribe"
    axios
      .post(submitUrl, {
        email: emailInput,
        // The ID for the "Junior Devs 2" tag
        tagId: "370017",
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
        <h1 className="text-3xl sm:text-4xl lg:text-6xl text-white font-bold mb-8">
          Junior developer tips
        </h1>
        <div
          className="w-full max-w-4xl mx-auto text-white rounded-lg shadow-2xl pt-10 py-12 px-4 sm:px-8"
          style={{
            background: "linear-gradient(90deg, #ff5b5d 0%, #de6baf 100%)",
          }}
        >
          <div className="w-full text-center flex flex-col items-center justify-center">
            <div className="max-w-2xl">
              <p className="sm:text-lg">
                You'll receive 5 emails with applicable tips and tricks for
                navigating a tech career, improving your technical skills, and
                landing your dream developer job.
              </p>
            </div>
            <div className="mt-8">
              <form
                action="https://app.convertkit.com/forms/1639772/subscriptions"
                className="seva-form formkit-form"
                method="post"
                data-sv-form="1639772"
                data-uid="c4b4da441f"
                data-format="inline"
                data-version="5"
                data-options='{"settings":{"after_subscribe":{"action":"redirect","success_message":"Test Msg","redirect_url":"junior-dev-tips.netlify.app/thanks"},"powered_by":{"show":false,"url":"https://convertkit.com?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
                min-width="400 500 600 700 800"
              >
                <div data-style="clean">
                  <ul
                    className="formkit-alert formkit-alert-error"
                    data-element="errors"
                    data-group="alert"
                  ></ul>
                  <div
                    data-element="fields"
                    data-stacked="false"
                    className="flex"
                  >
                    <input
                      className="focus:outline-none focus:shadow-outline bg-transparent border-l border-t border-b border-white rounded-l px-4 py-2 text-lg text-white placeholder-gray-300 w-48 sm:w-64"
                      name="email_address"
                      aria-label="Your email address"
                      placeholder="Your email address"
                      required=""
                      type="email"
                    />
                    <button
                      data-element="submit"
                      className="formkit-submit formkit-submit rounded-r bg-white text-gray-900 px-8 text-sm font-bold hover:shadow-2xl duration-150 transition-shadow ease-in"
                    >
                      <div className="formkit-spinner">
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                      <span>Sign Up</span>
                    </button>
                  </div>
                </div>
              </form>
              {/* <ConvertKitForm template="clare" formId={CONVERTKIT_FORM_ID} /> */}
              {/* <input
                onChange={e => {
                  setEmailInput(e.target.value)
                }}
                className="focus:outline-none focus:shadow-outline bg-transparent border-l border-t border-b border-white rounded-l px-4 py-2 text-lg text-white placeholder-gray-300 w-48 sm:w-64"
                type="text"
                placeholder="Your email"
              />
              <button
                onClick={submitEmail}
                className="rounded-r bg-white text-gray-900 px-8 text-sm font-bold hover:shadow-2xl duration-150 transition-shadow ease-in"
              >
                Sign Up
              </button> */}
            </div>
            <div className="mt-2">
              <p class="text-sm">Join over 1100+ aspiring learners</p>
            </div>
          </div>
        </div>
        <div class="text-white mt-8">
          {state === "success" ? (
            <div class="text-xl max-w-4xl px-8 mx-auto">
              Success! Your email has been added, and the first email on dealing
              with self doubt as a developer is already on its way to your
              inbox. It might take a couple of minutes, and make sure to check
              your spam/promotions folder if you don't see it ✌
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
