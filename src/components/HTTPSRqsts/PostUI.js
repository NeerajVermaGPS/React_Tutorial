import React from 'react'

export default function PostUI(props) {
  return (
    <div className='userPost'>
        <div className="uId">{props.userId}</div>
        <h1 className="uTitle">{props.title}</h1>
        <div className="uPost">
            <p>{props.post}</p>
        </div>
    </div>
  )
}
