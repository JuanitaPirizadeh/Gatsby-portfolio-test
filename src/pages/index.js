import React from "react"
import picture from "../images/juan.jpg"
import Layout from "../components/layout"
import { rhythm } from "../utils/typography.js"

export default () => (
  <Layout>
    <h1>An aspiring front end developer!</h1>
    <p>
      Join in to follow my work and to see what projects Im working on! 
    </p>
    <div>
      <img 
        src={picture}
        alt="itsme"
      />
    </div>
    
  </Layout>
)