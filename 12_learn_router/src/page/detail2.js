import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Profile() {
    const data = useLocation()
    console.log(data)
    return (
        <>
            {/* ?. 可选链操作符 */}
            <div>detail2</div>
            <hr />
            <div>{data?.state.name}</div>
            <div>{data?.state.age}</div>
        </>
    )
}
