import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div>
      <h1 className="text-4xl flex justify-center text-purple-400">
        hello
      </h1>
    </div>
    <div>
      <p className="justify-left flex-auto">
        Hello
      </p>
    </div>
  </Layout>
)

export default IndexPage
