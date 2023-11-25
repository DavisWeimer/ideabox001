import React from 'react'
import './Ideas.css'
import Card from '../Card/Card.js'

function Ideas({ ideas, deleteIdea }) {
  
  const ideaCard = ideas.map(idea => {
    return <Card
      id={idea.id}
      key={idea.id}
      title={idea.title}
      description={idea.description}
      deleteIdea={deleteIdea}
    />

  })
  return (
    <div className='ideas-container'>
      {ideaCard}
    </div>
  )
}

export default Ideas;
