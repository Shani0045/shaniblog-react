import React from 'react'

function RecentBlog() {
  return (
    <div className='recent-blog w-100'>
            <h3 className="display-5 mt-3">Recent Blogs</h3>
            <div className="owl-carousel courses-carousel d-flex">
                <div className="courses-item position-relative mx-2">
                    <img className="img-fluid d-block" src='img/courses-2.jpg' alt="{{course.name}}" />
                    <div className="courses-text">
                        <h4 className="text-center text-white px-3">Python</h4>
                        <div className="border-top w-100 mt-3">
                            <div className="d-flex justify-content-between p-4">
                                <span className="text-white"><i className="fa fa-user mr-2"></i>Shani Kumar</span>
                                <span className="text-white"><i className="fa fa-star mr-2"></i>4.5 <small>(250)</small></span>
                            </div>
                        </div>
                        <div className="w-100 bg-white text-center p-4" >
                            <a className="btn btn-primary btn-block" href="{% url 'content' course.id %}">View</a>
                        </div>
                    </div>
                </div>
                <div className="courses-item position-relative mx-2">
                    <img className="img-fluid d-block" src='img/courses-3.jpg' alt="{{course.name}}" />
                    <div className="courses-text">
                        <h4 className="text-center text-white px-3">Python</h4>
                        <div className="border-top w-100 mt-3">
                            <div className="d-flex justify-content-between p-4">
                                <span className="text-white"><i className="fa fa-user mr-2"></i>Shani Kumar</span>
                                <span className="text-white"><i className="fa fa-star mr-2"></i>4.5 <small>(250)</small></span>
                            </div>
                        </div>
                        <div className="w-100 bg-white text-center p-4" >
                            <a className="btn btn-primary btn-block" href="{% url 'content' course.id %}">View</a>
                        </div>
                    </div>
                </div>
                <div className="courses-item position-relative mx-2">
                    <img className="img-fluid d-block" src='img/courses-4.jpg' alt="{{course.name}}" />
                    <div className="courses-text">
                        <h4 className="text-center text-white px-3">Python</h4>
                        <div className="border-top w-100 mt-3">
                            <div className="d-flex justify-content-between p-4">
                                <span className="text-white"><i className="fa fa-user mr-2"></i>Shani Kumar</span>
                                <span className="text-white"><i className="fa fa-star mr-2"></i>4.5 <small>(250)</small></span>
                            </div>
                        </div>
                        <div className="w-100 bg-white text-center p-4" >
                            <a className="btn btn-primary btn-block" href="{% url 'content' course.id %}">View</a>
                        </div>
                    </div>
                </div>
                <div className="courses-item position-relative mx-2">
                    <img className="img-fluid d-block" src='img/courses-5.jpg' alt="{{course.name}}" />
                    <div className="courses-text">
                        <h4 className="text-center text-white px-3">Python</h4>
                        <div className="border-top w-100 mt-3">
                            <div className="d-flex justify-content-between p-4">
                                <span className="text-white"><i className="fa fa-user mr-2"></i>Shani Kumar</span>
                                <span className="text-white"><i className="fa fa-star mr-2"></i>4.5 <small>(250)</small></span>
                            </div>
                        </div>
                        <div className="w-100 bg-white text-center p-4" >
                            <a className="btn btn-primary btn-block" href="{% url 'content' course.id %}">View</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default RecentBlog