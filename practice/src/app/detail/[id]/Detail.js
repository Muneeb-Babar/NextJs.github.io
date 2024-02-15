
export default function Detail(props){
    const {data}=props
    return <div>
    <div>{data.name}</div>
    <div><img src={data.url} className="w-48"/></div>
    </div>
}