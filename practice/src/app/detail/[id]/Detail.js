"use client";

import { useState} from "react";

export default function Detail(props) {
    const { data } = props;
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [generatedImageUrl, setGeneratedImageUrl] = useState("");

    async function postApi() {
const queryString = `template_id=${data.id}&username=MuneebAhmad3&password=muneeb.com123#&text0=${encodeURIComponent(input1)}&text1=${encodeURIComponent(input2)}`;
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: queryString
        };

    const res = await fetch('https://api.imgflip.com/caption_image', requestOptions);
    const result = await res.json();
    console.log(result);

    if (result.success) {
        setGeneratedImageUrl(result.data.url); 
    }
}

const hanleClick=()=>{
    postApi()
}

return (
    <div className="w-full">
        <div className="flex justify-center align-middle mt-20">
        <div>
        <div>{data.name}</div>
        <div>
            <img src={data.url} className="w-96 h-56" />
        </div>
        </div>
    </div>
      {/* Inputs */}
    <div className="flex justify-center gap-4 mt-10 flex-wrap ">
        <div>
        <input
            className="p-2"
            placeholder="Enter First Text"
            type="text"
            onChange={(e) => setInput1(e.target.value)}
        />
        </div>
        <div>
        <input
            className="p-2"
            placeholder="Enter Second Text"
            type="text"
            onChange={(e) => setInput2(e.target.value)}
        />
        </div>
        <button className="mx-8 rounded-xl  bg-black text-white px-3" onClick={hanleClick}>
        Submit
        </button>
    </div>
    {generatedImageUrl && (
                <div className="flex justify-center mt-10">
                    <img src={generatedImageUrl} className="w-80 h-56" alt="Generated Meme" />
                </div>
            )}
    </div>
);
}
