import { Navigate } from 'react-router-dom'
import About, { About1, About2, About3 } from '../page/about'
import Datail2 from '../page/detail2'
import Detail from '../page/detail'
import Home from '../page/home'
import Profile from '../page/profile'
const routes = [
    { path: '/home', element: <Home /> },
    {
        path: '/about/*',
        element: <About />,
        children: [
            { path: 'about1', element: <About1 /> },
            { path: 'about2', element: <About2 /> },
            { path: 'about3', element: <About3 /> },
            // { path: '*', element: <Navigate to="/about/about1" /> }
            { path: '*', element: <About1 /> }
        ]
    },
    { path: '/profile', element: <Profile /> },
    { path: '/detail/:id', element: <Detail /> },
    { path: '/detail2', element: <Datail2 /> },
    { path: '/', element: <Home /> }
]

export default routes
