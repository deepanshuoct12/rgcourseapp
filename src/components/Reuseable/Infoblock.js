import React from 'react'
import Heading from "./Heading";
import { Link } from 'gatsby'

export default function Infoblock({ heading }) {
    return (
        <section className="bg-theme my-5 py-4">
        <div className="container">
            <Heading title={heading}/>
            <div className="row">
              <div className="col-10 col-sm-8 mx-auto text-center">
                <p className="lead text-white mb-4">
                This website is made by Deepanshu, He is a undergraduate student from Delhi technological university pursuing B.tech in Information technology. This website provides online courses at reasonable prices various courses are available in mobile, web development etc. Sites For Online Education helps you to learn courses at your comfortable place. The courses of these websites are offered by top universities. You can learn a specific subject without much investment. These websites offer many audio, video, articles, and e-books to increase your knowledge. The platforms enable you to learn the best online courses.
                </p>
                <Link to="/about/">
                    <button className="btn btn-warning btn-lg">{heading}</button>
                </Link>
              </div>
            </div>
        </div>
        </section>
    )
}
