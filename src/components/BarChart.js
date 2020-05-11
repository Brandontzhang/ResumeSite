import React from 'react'
import { HorizontalBar } from 'react-chartjs-2'

const xAxis = [null, null, "Beginner", null, "Intermediate", null, "Expert"]

const BarChart = props =>
    <div style={{ postion: 'relative'}}>
        <h2>{props.data.title.text}</h2>
        <HorizontalBar
            data={props.data}
            color={'rgba(255,255,255,1'}
            options={{
                legend: {
                    display: false
                 },
                scales: {
                    yAxes: [{
                        ticks: {
                            fontColor: "white",
                        }
                    }],
                    xAxes: [{
                        position: 'left',
                        display: true,
                        ticks: {
                            callback: function(tickvalue, index, tick) {
                                return xAxis[index]
                            },
                            fontColor: "white",
                            max: 8
                        },
                    }],
                },
                tooltips: {
                    callbacks: {
                       title: function(t, d) {
                          return d.labels[t[0].index];
                       },
                       beforelabel: function() {
                           return ""
                       },
                       label: function() {
                           return "hello"
                       }
                    }
                 }
            }}
        />
    </div>


export default BarChart