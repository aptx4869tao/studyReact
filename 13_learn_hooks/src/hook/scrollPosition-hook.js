import { useEffect, useState } from 'react'

function useScrollPosition() {
    const [scrollPosition, setScrollPosition] = useState(0)
    useEffect(() => {
        const hanldScroll = () => {
            setScrollPosition(window.scrollY)
        }
        document.addEventListener('scroll', hanldScroll)
        return () => {
            document.removeEventListener('scroll', hanldScroll)
        }
    })
    return scrollPosition
}
export default useScrollPosition
