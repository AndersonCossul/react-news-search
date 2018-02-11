import React from 'react'
import styles from './Cards.css'
import Card from './Card/Card'

const cards = (props) => (
  <ul className={styles.Cards}>
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
