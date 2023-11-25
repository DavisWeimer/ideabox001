import React from 'react'
import './Card.css'

function Card({ id, title, description, deleteIdea }) {
  return (
    <div className='card'>
      <h3 className='Idea-title'>{title}</h3>
      <p className='Idea-description'>{description}</p>
      <button className='delete-btn' onClick={()=> deleteIdea(id)}>Delete</button>
    </div>
  )
}

export default Card;