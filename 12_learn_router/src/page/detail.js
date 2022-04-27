import { useParams } from 'react-router-dom'
export default function Detail() {
    let params = useParams() //使用hook获取params
    console.log(params)
    return <div>ID:{params.id}</div>
}
