import React from 'react';
import { Carousel } from 'antd';
import './Carousel.css'


function Card(props) {
  return (
    <div className="card" style={{width: "18rem"}}>
      <Carousel autoplay>
        {props.images.map((img, key)=>(
            <img className="card-img-top" src={img} key={key} alt="Card image cap" />
          ))
        }
        </Carousel>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.desc}</p>
        <a href="#" className="btn btn-primary btn-block ">View</a>
      </div>
  </div>
  )
};

export default Card;
