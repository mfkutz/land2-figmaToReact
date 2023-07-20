import './Topics.css'
import { rectangle13big, group1, esqYellow, rectangle14, rectangle15, rectangle16, rectangle17, rectangle18 } from '../../assets/index'
import { useState } from 'react'

const Topics = () => {
  const [topicImg, setTopicImg] = useState(rectangle13big)
  return (
    <section id='topics' className='topics'>
      <div className="wrapper">

        <h2 className="title-topics">
          What will you learn?
        </h2>

        <div className='topics-container'>
          <ul>
            <li onMouseEnter={() => setTopicImg(rectangle13big)}>What are frequencies?</li>
            <li onMouseEnter={() => setTopicImg(rectangle14)}>Using DAW</li>
            <li onMouseEnter={() => setTopicImg(rectangle15)}>Vocals Processing</li>
            <li onMouseEnter={() => setTopicImg(rectangle16)}>Mixing</li>
            <li onMouseEnter={() => setTopicImg(rectangle17)}>Mixing Console</li>
            <li onMouseEnter={() => setTopicImg(rectangle18)}>Mastering</li>
          </ul>

          <div className='img'>
            <img src={topicImg} alt="topics" className='img-monitors' />
          </div>
        </div>
        
        
        <img src={esqYellow} alt="yellow" className='esqYellow'/>
        
      </div>
    </section>
  )
}

export default Topics