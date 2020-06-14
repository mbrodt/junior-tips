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
          content="An email series with applicable tips and tricks for navigating a tech career, improving your technical skills, and landing your dream developer job."
          name="description"
        />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="@madsbrodt" name="twitter:site" />
        <meta content="Junior developer tips" name="twitter:title" />
        <meta
          content="An email series with applicable tips and tricks for navigating a tech career, improving your technical skills, and landing your dream developer job."
          name="twitter:description"
        />
        <meta content="/devtips_metaimage.png" name="twitter:image" />
        <meta content="@madsbrodt" name="twitter:creator" />
        <meta
          content="https://junior-dev-tips.netlify.app/"
          property="og:url"
        />
        <meta content="article" property="og:type" />
        <meta content="Junior developer tips" property="og:title" />
        <meta
          content="An email series with applicable tips and tricks for navigating a tech career, improving your technical skills, and landing your dream developer job."
          property="og:description"
        />
        <meta content="/devtips_metaimage.png" property="og:image" />
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
