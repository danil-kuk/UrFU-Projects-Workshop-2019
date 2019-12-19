import React from 'react'
import { ResponsiveChord } from '@nivo/chord'
import "../styles/Diagrams.css"

const MyResponsiveChordCanvas = (props) => (
    <div className="chord-diagram-holder">
        <ResponsiveChord
            matrix={props.matrix}
            keys={[
                'Машин. обучение', 'Боты', 'Инф. системы', 'VR/AR', 'Моб. разработка',
                'Игры', 'Мат. моделирование', 'Робототехника', 'Web-разработка', 'Цифр. маркетинг',
                'УрФУ', 'iRidium', 'НПОА', 'Сервис-Газиф.', 'Мор. Комп. с-мы',
                'UGA', 'УГМУ', 'Лаб. Будущего', 'Косм. монитор.', 'Демогр. исслед.',
                'Азб. Дет. Счастья','Naumen', 'Смартпроект'
            ]}
            margin={{ top: 100, right: 60, bottom: 100, left: 60 }}
            padAngle={0.05}
            innerRadiusRatio={0.98}
            innerRadiusOffset={0}
            arcOpacity={1}
            arcBorderWidth={1}
            arcBorderColor={{ from: 'color', modifiers: [['darker', 0.4]] }}
            ribbonOpacity={0.5}
            ribbonBorderWidth={1}
            ribbonBorderColor={{ from: 'color', modifiers: [['darker', 0.6]] }}
            enableLabel={true}
            label="id"
            labelOffset={4}
            labelRotation={-90}
            labelTextColor={{ from: 'color', modifiers: [['darker', 1.5]] }}
            colors={{ scheme: 'spectral' }}
            isInteractive={true}
            arcHoverOpacity={1}
            arcHoverOthersOpacity={0.25}
            ribbonHoverOpacity={0.75}
            ribbonHoverOthersOpacity={0.15}
            animate={true}
            motionStiffness={90}
            motionDamping={10}
            ribbonTooltip={({ ribbon }) => {
                return (
                    <div style={{
                        background: "white",
                        padding: "5px 9px",
                        borderRadius: "2px",
                        display: "flex-inline",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        color: "black",
                        boxShadow: "rgba(0, 0, 0, 0.25) 0px 1px 2px",
                    }}>
                        Проектов: <b>{ribbon.source.value}</b>
                    </div>
                )
            }
            }
            theme={{
                labels: {
                    text: {
                        fontSize: 14,
                        fontFamily: ""
                    }
                }
            }}
        />
    </div>
)

export default MyResponsiveChordCanvas