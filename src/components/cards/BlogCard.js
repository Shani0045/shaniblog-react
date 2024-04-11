import React from 'react'

function BlogCard() {
  return (
    <div class="courses-item position-relative">
        <img class="img-fluid d-block" src='img/courses-1.jpg' alt="{{course.name}}" />
        <div class="courses-text">
            <h4 class="text-center text-white px-3">Python</h4>
            <div class="border-top w-100 mt-3">
                <div class="d-flex justify-content-between p-4">
                    <span class="text-white"><i class="fa fa-user mr-2"></i>Shani Kumar</span>
                    <span class="text-white"><small>this is all about python</small></span>
                </div>
            </div>
            <div class="w-100 bg-white text-center p-4" >
                <a class="btn btn-primary btn-block" href="{% url 'content' course.id %}">View</a>
            </div>
        </div>
    </div>
  )
}

export default BlogCard