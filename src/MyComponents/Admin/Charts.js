import React from 'react'
import { Activity } from './Activity'
import { Registrations } from './Registrations'
import { BarGraph } from './BarGraph'
import { PieChart } from './PieChart'

export const Charts = () => {
    return (
        <div>
            <div className="pieChart"><PieChart /></div>
            <div className="barGraph"><BarGraph /></div>
            <div className="registrations"><Registrations /></div>
            <div className="activity"><Activity /></div>
        </div>
    )
}
