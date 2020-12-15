import React from "react";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <div className="about">
        <h2 class="about__title">Contact me</h2>
        <div class="about__content">
          <ul>
            <li>
              <h3>Phone: </h3> 097 123 11111
            </li>
            <li>
              <h3>Address: </h3> Ha Noi
            </li>
            <li>
              <h3>Email: </h3> hieudeptrai@gmail.com
            </li>
          </ul>
        </div>       
        <p ><i>Thank for visiting my blog!</i></p>
      </div>
    </Layout>
  )
}
