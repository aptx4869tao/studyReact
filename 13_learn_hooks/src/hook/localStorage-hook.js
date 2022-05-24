import { useEffect, useState } from 'react'
function useStorage(key) {
    const [name, setName] = useState(() => {
        const name = window.localStorage.getItem(key)
        return name
    })
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(name))
    }, [name])

    return [name, setName]
}

export default useStorage
