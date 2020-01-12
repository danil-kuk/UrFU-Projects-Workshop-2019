import React from 'react'
import { ResponsiveBar } from '@nivo/bar'

const MyResponsiveBar = (props) => (
    <div className="horizontal-bar-holder">
        <ResponsiveBar
            data={props.data}
            keys={['value']}
            indexBy="course"
            margin={{ top: 10, right: 60, bottom: 50, left: 170 }}
            padding={0.15}
            layout="horizontal"
            colors={["#A6CEE3"]}
            borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
            axisTop={null}
            axisRight={null}
            enableGridY={false}
            axisBottom={{
                tickSize: 8,
                tickPadding: 3,
                tickRotation: 0,
                legend: 'Количество человек',
                legendPosition: 'middle',
                legendOffset: 42,
                tickValues: 20
            }}
            axisLeft={{
                tickSize: 0,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Направления',
                legendPosition: 'middle',
                legendOffset: -150
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{ from: 'color', modifiers: [['darker', '20']] }}
            animate={true}
            tooltip={({ value, indexValue }) => (
                <div>
                    {indexValue}: <strong>{value}</strong>
                </div>
            )}
            motionStiffness={90}
            motionDamping={15}
            theme={{
                axis: {
                    legend: {
                        text: {
                            fontSize: 20,
                            fontFamily: ""
                        }
                    },
                    ticks: {
                        text:
                        {
                            fontSize: 14,
                            fontFamily: ""
                        }
                    }
                },
                labels: {
                    text: {
                        fontSize: 20,
                        fontFamily: ""
                    }
                }
            }}
        />
    </div>
)

export default MyResponsiveBar