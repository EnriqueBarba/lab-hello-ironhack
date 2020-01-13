import React from 'react'

const Card = ({img, title, text}) => (
    <div className="Card card text-center">
        <img className="card-img-top" src={img}/>
        <h4>{title}</h4>
        <p className="text-muted">{text}</p>
    </div>
    )

export default Card