import React from 'react'
import Heading from "./Heading";
import { Link } from 'gatsby'


export default function DualInfoblock({ heading }) {
    return (
        
       <section className="my-4 py-4 bg-theme">
        <div className="container">
        <Heading title={heading}/>
            <div className="row">
              <div className="col-8 mx-auto">
                  <p className="lead text-white mb-5">
                  accumsan lacus vel facilisis volutpat est velit egestas dui id ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit sed vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero
                  </p>
              </div>
              <div className="col-4">

               <div className="card bg-dark" >
                 <img className="card-img-top" src="https://images.pexels.com/photos/1981443/pexels-photo-1981443.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="image goes here"/>
                   <div className="card-body">
                       <h5 className="card-title text-success">Just click photos</h5>
                       <p className="card-text text-white">eget duis at tellus at urna condimentum mattis pellentesque id nibh tortor id aliquet lectus proin nibh nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique senectus</p>
                       <a href="#" className="btn btn-warning btn-block">
                       {heading}
                       </a>
                     </div>
               </div>

              </div>
            </div>
        </div>
       </section>
    )
}
