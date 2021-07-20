import React from 'react'

//Components must be capitalised
//Components must be exported before they can be used
//Components must return a html element

export const Title = ({text}) => {
    return <h1>{text}</h1>
}