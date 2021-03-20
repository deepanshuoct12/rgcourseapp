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
                fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus viverra vitae congue eu consequat ac felis donec et odio
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
