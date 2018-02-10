import React from 'react'
import Card from './Card/Card'

const cards = (props) => (
  <ul>
    {
      props.data.map((content) => {
        return (
          <Card
            key={content.id}
            data={content}/>
        )
      })
    }
  </ul>
)

export default cards
