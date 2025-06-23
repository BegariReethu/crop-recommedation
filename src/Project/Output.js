import React, { useContext } from 'react'
import './Output.css'
import { ResultContext } from './ResultContextProvider'
import { useNavigate } from 'react-router-dom'

function Output() {

  let [result,] = useContext(ResultContext)
  const navigate = useNavigate()


  let toHome = () =>
  {
    navigate('/')
  }

  return (
    <div className='s1'>
        <div className='main1'>
        {
            result === "" ? null:<h1 className='text-black'>According to your weather and soil Content - ['{result}'] </h1>
        }
        </div>
        <div className='bn'>
        <button className='btn btn-success p-1 m-2' onClick={toHome}>Go to Home</button>
        </div>
    </div>
  )
}

export default Output