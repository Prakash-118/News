import React from 'react'
import './News.css';

const Card = ({data}) => {
    console.log(data);



  return (
    <div className="cardContainer">  
    {data && data.map((curItem,index)=>{
        if(!curItem.urlToImage || !curItem.description){
            return null;
        }
        return(
            <div className='card'>
                <img src={curItem.urlToImage} alt={curItem.title || 'Image'}/>
                <div className='content'>
                    <a className='title' href={curItem.url || '#'}>{curItem.title}</a>
                    <p className='description'>{curItem.description}</p>
                    <button onClick={()=>window.open(curItem.url)}>Read More</button>
                </div>
            </div>
        )
    })}    
    </div>
  )
}

export default Card
