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
                  Personal Mission Statement - "I believe in making a impact" Working with this goal and Bring out the power of teams. Engineer with strong fundamentals in Data Structures and Algorithms. Deepanshu will graduate with a Bachelor's Degree in Information technology in May 2022. He has taken up courses in Data structure and algorithms, Web development(Node.js), Database management system, Object-Oriented Software Engineering, and Operating system and loves to work on different technology.
                  </p>
              </div>
              <div className="col-4">

               <div className="card bg-dark" >
                 <img className="card-img-top" src="https://images.pexels.com/photos/1981443/pexels-photo-1981443.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="image goes here"/>
                   <div className="card-body">
                       <h5 className="card-title text-success">Just computer geek</h5>
                       <p className="card-text text-white">Computer science, the study of computers and computing, including their theoretical and algorithmic foundations, hardware and software, and their uses for processing information. The discipline of computer science includes the study of algorithms and data structures, computer and network design, modeling data and information processes, and artificial intelligence.</p>
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
