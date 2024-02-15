

import Image from "next/image";
import Link from "next/link";

export default async function Dashboard(){


    const res=await fetch('https://api.imgflip.com/get_memes')
    const result=await res.json()
    console.log(result.data.memes)

    const meme=result.data.memes


    return <div>
    <div className="main">
    <div>
        <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/next.svg"
        alt="Next.js Logo"
        width={100}
        height={100}
        priority
        />
    </div>
    <div className="nav-btn">
        <ul style={{display:'flex',gap:'30px', cursor:'pointer', fontSize:'1.2rem'}}>
            <li>Home</li>
            <li>Gallery</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <img width={50} src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png"/>
        </ul>
    </div>
    <div className="hide"><img width={30}  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"/></div>
    </div>


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