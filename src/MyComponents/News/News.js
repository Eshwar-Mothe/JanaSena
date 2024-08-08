import React from 'react'
import { Headings } from './Headings'
import { Card } from './Card'
import './news.css'

export const News = () => {
    return (
        <>
            <div className='headings'>
                <Headings />
            </div>

            <div className="newsCard">
                <Card />
            </div>

            {/* <div className="Districts">

            </div> */}
        </>
    )
}
