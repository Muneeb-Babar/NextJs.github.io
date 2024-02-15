

import Navbar from "@/components/navbar/page";
import Image from "next/image";
import Link from "next/link";

export default async function Dashboard(){


    const res=await fetch('https://api.imgflip.com/get_memes')
    const result=await res.json()
    console.log(result.data.memes)

    const meme=result.data.memes


    return <div>
    
<Navbar/>

<div className="flex flex-wrap justify-around  align-middle gap-24 mx-20 mt-24 shadow-2xl">
{meme.map((item,index)=>{
    return <div  key={index}>
        <Link href={`/detail/${item.id}`}>
        <div >
            <h1 className="font-bold">{item.name}</h1>
            <br/>
            <img src={item.url} className="w-full h-64"/>
        </div>
    </Link>
    </div>

})}
</div>




{/* <div style={{display:'flex',flexWrap:'wrap', justifyContent:'center',alignItems:'center',gap:'40px',marginTop:'5%', boxShadow:'8px 8px 18px gray', textAlign:'center'}}>
{result.products.map((item,index)=>{

        return <div key={index} >
<Link href={`/detail/${item.id}`}>
<div style={{width:'28rem',cursor:'pointer'}}>
        <h1 className=" text-2xl text-left">{item.title}</h1>
        <img src={item.thumbnail}  className="h-auto:none h-56 w-80"/>
        <p>{item.description}</p>
        <br/>
        <h4>Rs-{item.price}$</h4>
        </div></Link>
        
        </div>
    })}
</div> */}
    </div>
}