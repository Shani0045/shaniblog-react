import React from 'react'

function Footer() {
  return (
    <div className="container-fluid bg-dark text-white-50 border-top py-2" style={{borderColor: "rgba(256, 256, 256, .1)",position:"fixed", bottom:0, zIndex:"99999999"}}>
        <div className="container">
            <div className="row">
                <div className="col-md-6 text-center text-md-left mb-3 mb-md-0">
                    <p className="m-0">Copyright &copy; <a className="text-white" href="#">E-Learning</a>. All Rights Reserved.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer