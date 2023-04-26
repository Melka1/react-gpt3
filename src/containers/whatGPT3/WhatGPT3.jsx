import React from 'react'
import './whatGPT3.css'
import { Feature } from '../../components'

function WhatGPT3() {
  return (
    <div
      className='gpt3__whatgpt3 section__margin'
      id='wgpt3'
    >
      <div
        className='gpt3__whatgpt3-feature'
      >
        <Feature 
          title={'What is GPT3'} 
          text={'GPT-3 (Generative Pre-trained Transformer 3) is an advanced AI language model developed by OpenAI. It uses deep learning techniques and a large amount of training data to generate human-like text.'}
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature 
          title={'Chatbots'}
          text={'We so opinion friends me message as delight. Whole front do of plate heard oh ought.'}
        />
        <Feature 
          title={'Knowledgebase'}
          text={'At jointure ladyship as insisted so humanity he. Friendly bachelor entrance to on by. As out  impossible own apartments be.'}
        />
        <Feature 
          title={'Education'}
          text={'At jointure ladyship as insisted so humanity he. Friendly bachelor entrance to on by. As out  impossible own apartments be.'}
        />
      </div>
    </div>
  )
}

export default WhatGPT3