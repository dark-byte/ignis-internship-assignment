import React, { useState } from 'react';
import Navbar from './Navbar';
import Event from './Event';


const img = "https://picsum.photos/200/300"
const title = "Default Title"
const subtitle = "Default Subtitle"

const Main = () => {
  return (
    <div className='main-page'>
      <Navbar/>
        <div className="likes">
            <div className="title">
                <h2>Likes</h2>
            </div>
            <Event imageSrc={img} title={title} subtitle={subtitle}/>
            <Event imageSrc={img} title={title} subtitle={subtitle}/>
            <Event imageSrc={img} title={title} subtitle={subtitle}/>
            <Event imageSrc={img} title={title} subtitle={subtitle}/>
        </div>
    </div>
  );
}

export default Main;
