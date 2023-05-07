import React, { useState } from 'react';
import{ AiOutlineHeart, AiFillHeart } from 'react-icons/ai/'
import { icons } from 'react-icons';

const Event = ({imageSrc, title, subtitle}) => {
    const [isLiked, setIsLiked] = useState(false)

    const likeBtnHandler = ()=>{
        setIsLiked(!isLiked)
    }

   return (
    <div className="card">
      <img src={imageSrc} alt="" />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{subtitle}</p>
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
