import React from 'react'
import '../styles/Boards.css'
import CustomerCard from './CustomerCard'
import Shuffle from './ArrayShuffle'

const CustomersBoard = (props) => {
    return (
        <div className='customers-cards-board'>
            {Shuffle(props.data).map(p => (
                <CustomerCard
                    title={p.title}
                    org_type={p.org_type}
                    activity_type={p.activity_type}
                    org_size={p.org_size}
                    img_link={p.img_link}
                    org_place={p.org_place}
                    courses={p.courses}
                    link={p.link}
                    key={p.title}
                />
            ))}
        </div>
    )
}

export default CustomersBoard