import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Home() {
  return <div style={{color: `purple`, fontSize: `72px`}}>
      <Link to="/contact/">Contact</Link>
      <Header headerText="Hello Gatsby!"></Header>
      <p>What a world.</p>
    </div>
}
