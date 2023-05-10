import React, { useState } from 'react';
import Navbar from './Navbar';
import Event from './Event';
import events from './data';


const img = "https://picsum.photos/200/300"
const title = "Default Title"
const subtitle = "Default Subtitle"
const time = "10:10"
const location = "103, Vikram Tower, Rajendra Place"

const Main = () => {
  return (
    <div className='main-page'>
      <Navbar/>
        <div className="likes">
            <div className="title">
                <h2>Likes</h2>
            </div>
            {events.map((event) =>{
              return(
                <Event {...event}/>
              )
            })}
        </div>
    </div>
  );
}

export default Main;
