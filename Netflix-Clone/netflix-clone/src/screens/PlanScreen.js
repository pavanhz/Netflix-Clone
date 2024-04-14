import React, { useState } from 'react'
import './PlanScreen.css'
import { useNavigate } from 'react-router-dom'

const PlanScreen = () => {
    const product = [
        {
            id: 1,
            name: 'Basic',
            description: '720p',

        },
        {
            id: 2,
            name: 'Standard',
            description: '1080p'
        },
        {
            id: 3,
            name: 'Premium',
            description: '4K+HDR'
        },
    ]
    const navigate = useNavigate()

  

    return (
        <div className='planscreen'>
            {product.map((event) => {
                return (
                    <div key={event.id} className="planscreen__plan">
                        <div className="planscreen__info">
                            <h5>{event.name}</h5>
                            <h6>{event.description}</h6>
                        </div>

                        <button onClick={()=>navigate('/')} >Subscribe</button>
                    </div>
                )
            })}

        </div>
    )
}

export default PlanScreen