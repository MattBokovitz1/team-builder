// import React from 'react';

// const FormResults = props => {
//     return(
//        props.name.map(values => {
//                 return(
//                 <div className="details" key={details.id}>
//                     <p>{details.name}</p>
//                     <p>{details.email}</p>
//                     <p>{details.role}</p>
//                 </div>
//        )})

//     )
// }

// export default FormResults;
import React from 'react'

export default function Friend(props) {
  const { details } = props

  if (!details) {
    return <h3>Working fetching your team&apos;s details...</h3>
  }

  return (
    <div className='friend container'>
      <h2>{details.username}</h2>
      <p>Email: {details.email}</p>
      <p>Role: {details.role}</p>
    </div>
  )
}