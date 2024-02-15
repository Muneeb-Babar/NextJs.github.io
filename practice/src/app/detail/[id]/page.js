
import Navbar from "@/components/navbar/page";
import Detail from "./Detail"

export default async function DetailContainer(props) {
    console.log(props)
    const memeId = props.params.id;
    const res = await fetch(`https://api.imgflip.com/get_memes`);
    const result = await res.json();
    const meme = result.data.memes.find(meme => meme.id === memeId);

    console.log(meme);
    return <div>
        <Navbar/>
        {/* {result.name}
        <div><img src={result.url} className="w-48 cursor-pointer"/></div> */}
        <Detail data={meme}/>
        </div>
    
}