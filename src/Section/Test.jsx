import React from 'react'
import CardGames from '../components/CardGames'
import CardTest from '../components/CardTest'
import testimg from '../assets/dern_test.svg'

export default function Test() {
  return (
    <div>
       <div className='my-5'>
       <div className=""><img src={testimg} className="" style={{width:'55%'}} alt="..."/></div>
       </div>
        <CardTest/>
        <div className='my-4 d-flex'>
          <button className="xboxbtnsm ms-auto">tout voir</button>
        </div>
    </div>
  )
}
