import React from 'react'
import './blog.css'
import { Article } from '../../components'
import {blog01, blog02, blog03, blog04, blog05} from './images'

function Blog() {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, we are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container__groupA">
          <Article imageUrl={blog01} date='Sep 26, 2021' title='GPT-3 and Open AI is the future. Let us explore how it is?'/>
        </div>
        <div className="gpt3__blog-container__groupB">
          <Article imageUrl={blog02} date='Sep 26, 2021' title='GPT-3 and Open AI is the future. Let us explore how it is?'/>
          <Article imageUrl={blog03} date='Sep 26, 2021' title='GPT-3 and Open AI is the future. Let us explore how it is?'/>
          <Article imageUrl={blog04} date='Sep 26, 2021' title='GPT-3 and Open AI is the future. Let us explore how it is?'/>
          <Article imageUrl={blog05} date='Sep 26, 2021' title='GPT-3 and Open AI is the future. Let us explore how it is?'/>
        </div>
      </div>
    </div>
  )
}

export default Blog