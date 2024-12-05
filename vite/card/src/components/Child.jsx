import React from 'react'

const Child = (props) => {
  return (
    <div>

            <h1>Hello, {props.name}!</h1>
            <h2>{JSON.stringify(props.date)}</h2>
            <h2 style={{marginBottom: "20px"}}>{props.date.toLocaleString()}</h2>
            <p style={{color: "red", fontSize: "60px"}}>{props.year.join(" ")}</p>
    

    </div>
  )
}

export default Child