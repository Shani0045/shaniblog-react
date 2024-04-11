import React from 'react'
import Typewriter from "typewriter-effect";

function Leftsidebar() {
  return (
    <div className="w-50">
        <h3>
        <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Welcome to E-learning Platform ...")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Welcome to E-learning Platform")
                        .start();
                }}
            />
        </h3>
        <p>Welcome to E-Learning, your ultimate destination for all things software development and programming! Whether you're a seasoned developer or just starting your coding journey, you'll find a wealth of resources, tutorials, and insights to fuel your passion for programming. Dive into our in-depth articles covering the latest trends, best practices, and emerging technologies in the world of software engineering. From coding challenges and project walkthroughs to expert tips and tricks, our blog is your trusted companion on the road to mastering the craft of coding. Join our vibrant community of developers, share your experiences, and embark on a journey of continuous learning and growth with E-Learning!
        </p>
        <button className="btn btn-primary">Open IDE</button>
        <button className="btn btn-primary mx-3"> Explore Blog</button>
    </div>
  )
}

export default Leftsidebar