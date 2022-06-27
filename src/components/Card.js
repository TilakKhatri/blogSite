

import React from 'react'

function Card(props) {
    const { id, title, description } = props.blog;
    return (
        <div className="card" key={id}>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href="#" className="btn btn-primary"><i className="fa-solid fa-trash-can "></i></a>
            </div>
        </div>
    )
}

export default Card