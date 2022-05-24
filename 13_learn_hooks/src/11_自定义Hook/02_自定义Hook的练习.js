import React, { useEffect, useState } from 'react'
import useScrollPosition from '../hook/scrollPosition-hook'

export default function CustomHook() {
    const position = useScrollPosition()
    return (
        <div style={{ height: '1000px' }}>
            <h2 style={{ position: 'fixed', left: 0, top: 0 }}>{position}</h2>
        </div>
    )
}
