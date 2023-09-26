import React from 'react'
import CardGames from '../components/CardGames'
import CardTest from '../components/CardTest'

export default function Test() {
  return (
    <div>
       <div className='my-5'>
       <h1 className='text-center line'>Nos dérniers tests</h1>
       </div>
        <CardTest/>
        <div className='my-4 d-flex'>
          <button className="xboxbtnsm ms-auto">tout voir</button>
        </div>
    </div>
  )
}
