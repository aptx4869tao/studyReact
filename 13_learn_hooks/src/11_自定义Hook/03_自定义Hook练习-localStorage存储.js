import React, { useEffect, useState } from 'react'
import useStorage from '../hook/localStorage-hook'

export default function CustomLocalStorage() {
    const [name, setName] = useStorage('name')
    return (
        <div>
            <h2>CustomLocalStorage:{name}</h2>
            <button onClick={e => setName('why')}>按钮</button>
        </div>
    )
}
