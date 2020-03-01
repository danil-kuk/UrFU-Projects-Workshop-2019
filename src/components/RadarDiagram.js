import React from 'react'
import { ResponsiveRadar } from '@nivo/radar'
import '../styles/Diagrams.css'

const MyResponsiveRadar = (props) => (
    <div className='radar-diagram-holder'>
        <ResponsiveRadar
            data={props.data}
            keys={props.dataKeys}
            indexBy='measure'
            maxValue={props.maxValue}
            margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
            curve='linearClosed'
            borderWidth={2}
            borderColor={{ from: 'color' }}
            gridLevels={props.levels}
            gridShape='linear'
            gridLabelOffset={16}
            enableDots={true}
            dotSize={10}
            dotColor={{ theme: 'background' }}
            dotBorderWidth={2}
            dotBorderColor={{ from: 'color' }}
            enableDotLabel={true}
            dotLabel='value'
            dotLabelYOffset={4}
            colors={{ scheme: 'paired' }}
            fillOpacity={0.25}
            blendMode='normal'
            animate={true}
            motionStiffness={90}
            motionDamping={15}
            isInteractive={true}
            theme={{
                axis: {
                    ticks: {
                        text: {
                            fontSize: props.labelsFontSize,
                            fontFamily: ''
                        }
                    }
                },
                dots: {
                    text: {
                        fontSize: 16,
                        fontFamily: ''
                    }
                },
                grid: {
                    line: {
                        stroke: 'rgba(0, 0, 0, .1)'
                    },
                    stroke: 'rgba(0, 0, 0, .2)',
                    strokeWidth: 1
                }
            }}
        />
    </div>
)

export default MyResponsiveRadar