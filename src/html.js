import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="An email series with applicable tips and tricks for navigating a tech career, improving your technical skills, and landing your dream developer job."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@madsbrodt" />
        <meta name="twitter:title" content="Junior developer tips" />
        <meta
          name="twitter:description"
          content="An email series with applicable tips and tricks for navigating a tech career, improving your technical skills, and landing your dream developer job."
        />
        <meta
          name="twitter:image"
          content="https://junior-dev-tips.netlify.app/devtips_metaimage.png"
        />
        <meta name="twitter:creator" content="@madsbrodt" />
        <meta
          property="og:url"
          content="https://junior-dev-tips.netlify.app/"
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Junior developer tips" />
        <meta
          property="og:description"
          content="An email series with applicable tips and tricks for navigating a tech career, improving your technical skills, and landing your dream developer job."
        />
        <meta
          property="og:image"
          content="https://junior-dev-tips.netlify.app/devtips_metaimage.png"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
