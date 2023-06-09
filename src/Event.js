import React, { useState } from 'react';
import{ AiOutlineHeart, AiFillHeart } from 'react-icons/ai/'
import { icons } from 'react-icons';

const Event = ({image, eventName, data, time, location}) => {
    const [isLiked, setIsLiked] = useState(false)

    const likeBtnHandler = ()=>{
        setIsLiked(!isLiked)
    }

   return (
    <div className="card">
      <img src={image} alt="" />
      <div className="card-content">
        <h2>{eventName}</h2>
        <p>{data}</p>
        <p><b>Time:</b> {time}</p>
        <p><b>Location:</b> {location}</p>
      </div>
      <div className="like-btn-container">
        <button onClick={likeBtnHandler} className={ isLiked ? "like-btn liked" : "like-btn"}>
            {isLiked ? <AiFillHeart/>: <AiOutlineHeart/>}
        </button>
      </div>
    </div>
  );
}

export default Event;
