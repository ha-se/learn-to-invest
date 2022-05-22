import * as React from "react"
import Layout from "./components/layout"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Zhoudongyu"
        src="https://i.mydramalist.com/EoLeb_5c.jpg"
      />
      <StaticImage
        alt="Masizhun"
        src="../images/7d5d1bbc9c71c3446996e07cecd2a719.jpg"
      />
    </Layout>
      
  )
}

export default IndexPage
