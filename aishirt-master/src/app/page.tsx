'use client'

import ImageContainer from "@/components/ImageContainer";
import React, { useState } from "react";

const API_TOKEN = "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";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [output, setOutput] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    const form = event.target as HTMLFormElement;
    const input = form.elements.namedItem("input") as HTMLInputElement;
    const inputValue = input.value;

    const response = await fetch(
      "https://api-inference.huggingface.co/models/prompthero/openjourney",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_TOKEN}`,
        },
        body: JSON.stringify({ inputs: inputValue}),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to generate image");
    }

    const blob = await response.blob();
    setOutput(URL.createObjectURL(blob));
    setLoading(false);
  };

  return (
    <div className="mx-12 0 my-8 flex items-center flex-col">
      <div className="flex flex-col gap-16 mt-3 w-[1200px] " >
        <div>
          <h1 className="text-gray-600 mb-2 text-xs tracking-wide">Stable <span>Diffusion</span></h1>
          <form className="" onSubmit={handleSubmit}>
            <div className="flex">
              <input 
                type="text" 
                name="input" 
                placeholder="type your prompt here..." 
                className={`w-full shadow-xl rounded-l-lg px-4 py-2 text-sm outline-none ${shadow ? "shadow-xl" : "shadow-lg"}`}
                onClick={() => setShadow(true)}
              />
              <button type="submit" className="shadow-xl border-l px-6 py-2 font-semibold text-gray-500 hover:text-gray-600">Generate</button>
            </div>
          </form>
          <div className="bg-gray-50 flex flex-col justify-center items-center mt-8">
            {loading && <div className="loading">Loading...</div>}
            <div className="w-full flex justify-center">
              <div className="relative w-[600px]">
                <img className="mix-blend-darken" src="https://1-of-1-k5qs4b7iu-macmerise.vercel.app/_next/static/media/t-shirt.e034de02.png" alt="shirt-bg" />
                {!loading && output && (
                  <>
                  <div className="absolute flex inset-0 items-center justify-center w-full -translate-x-2">
                    <div className="relative w-[250px]">
                      <img className="opacity-80 mix-blend-lighten" src={output} alt="art" />
                    </div>
                  </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-1 flex-col">
          <div className="gap-1 grid grid-cols-5 grid-rows-2 h-[500px]">
            <div className="col-span-2 row-span-2">
              <ImageContainer 
                className="w-full h-full" 
                imgAlt="img one" 
                imgUrl="https://media.discordapp.net/attachments/1151677677279920248/1151677678278168606/pink_warrior_wing_2-2.jpg?width=355&height=468"
                hoverContent="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, impedit."
              />
            </div>
            <div className="col-span-1 row-span-1">
              <ImageContainer 
                className="w-full h-full" 
                imgAlt="img one" 
                imgUrl="https://cdn.openai.com/labs/images/A%20centered%20explosion%20of%20colorful%20powder%20on%20a%20black%20background.webp?v=1" 
                hoverContent="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, impedit."
              />
            </div>
            <div className="col-span-1 row-span-1">
              <ImageContainer 
                className="w-full h-full" 
                imgAlt="img one" 
                imgUrl="https://media.discordapp.net/attachments/1151679842438357114/1151679842757128304/pink_warrior_cowboy-1.jpg?width=355&height=468"
                hoverContent="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, impedit."
              />
            </div>
            <div className="col-span-1 row-span-1">
              <ImageContainer 
                className="w-full h-full" 
                imgAlt="img one" 
                imgUrl="https://media.discordapp.net/attachments/1038329663187062804/1149689506962870362/bluewing__Woman_at_the_beach_by_Sam_Kieth_Ghibli_Loud_Colors_pe_2b8f5b79-94dc-42fe-9035-a292c55e4d93.png?width=835&height=468"
                hoverContent="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, impedit."
              />
            </div>
            <div className="col-span-1 row-span-1">
              <ImageContainer 
                className="w-full h-full" 
                imgAlt="img one" 
                imgUrl="https://media.discordapp.net/attachments/941582479117127680/1152716006318411776/woalessia_Concept_art_of_four_different_emotes_sad_happy_angry__e85ef65d-11b7-4fbe-a203-f81f21718343.png?width=374&height=468"
                hoverContent="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, impedit."
              />
            </div>
            <div className="col-span-1 row-span-1">
              <ImageContainer 
                className="w-full h-full" 
                imgAlt="img one" 
                imgUrl="https://cdn.openai.com/labs/images/A%20photo%20of%20a%20white%20fur%20monster%20standing%20in%20a%20purple%20room.webp?v=1"
                hoverContent="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, impedit."
              />
            </div>
            <div className="col-span-1 row-span-1">
              <ImageContainer 
                className="w-full h-full" 
                imgAlt="img one" 
                imgUrl="https://media.discordapp.net/attachments/1038329663187062804/1150724459569872947/bluewing__Ink_head_by_artist_alisha_black_haired_eagle_mask_Inf_83e436b6-1d64-4003-8f67-9e67a20d9ac7.png?width=234&height=468"
                hoverContent="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, impedit."
              />
            </div>
          </div>
          <div className="gap-1 grid grid-cols-5 grid-rows-2 h-[500px]">
            <div className="col-span-1 row-span-1">
              <ImageContainer 
                className="w-full h-full" 
                imgAlt="img one" 
                imgUrl="https://cdn.openai.com/labs/images/A%20handpalm%20with%20a%20tree%20growing%20on%20top%20of%20it.webp?v=1"
                hoverContent="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, impedit."
              />
            </div>
            <div className="col-span-1 row-span-1">
              <ImageContainer 
                className="w-full h-full" 
                imgAlt="img one" 
                imgUrl="https://cdn.openai.com/labs/images/A%20cartoon%20of%20a%20cat%20catching%20a%20mouse.webp?v=1"
                hoverContent="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, impedit."
              />
            </div>
            <div className="col-span-1 row-span-1">
              <ImageContainer 
                className="w-full h-full" 
                imgAlt="img one" 
                imgUrl="https://cdn.openai.com/labs/images/A%20pencil%20and%20watercolor%20drawing%20of%20a%20bright%20city%20in%20the%20future%20with%20flying%20cars.webp?v=1"
                hoverContent="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, impedit."
              />
            </div>
            <div className="col-span-2 row-span-2">
              <ImageContainer 
                className="w-full h-full" 
                imgAlt="img one" 
                imgUrl="https://cdn.openai.com/labs/images/A%20synthwave%20style%20sunset%20above%20the%20reflecting%20water%20of%20the%20sea,%20digital%20art.webp?v=1"
                hoverContent="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, impedit."
              />
            </div>
            <div className="col-span-1 row-span-1">
              <ImageContainer 
                className="w-full h-full" 
                imgAlt="img one" 
                imgUrl="https://cdn.openai.com/labs/images/A%20Formula%201%20car%20driving%20on%20a%20neon%20road.webp?v=1"
                hoverContent="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, impedit."
              />
            </div>
            <div className="col-span-1 row-span-1">
              <ImageContainer 
                className="w-full h-full" 
                imgAlt="img one" 
                imgUrl="https://cdn.openai.com/labs/images/3D%20render%20of%20a%20pink%20balloon%20dog%20in%20a%20violet%20room.webp?v=1"
                hoverContent="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, impedit."
              />
            </div>
            <div className="col-span-1 row-span-1">
              <ImageContainer 
                className="w-full h-full" 
                imgAlt="img one" 
                imgUrl="https://cdn.openai.com/labs/images/A%20photograph%20of%20a%20sunflower%20with%20sunglasses%20on%20in%20the%20middle%20of%20the%20flower%20in%20a%20field%20on%20a%20bright%20sunny%20day.webp?v=1"
                hoverContent="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, impedit."
              />
            </div>
          </div>
          <div className="gap-1 grid grid-cols-5 grid-rows-2 h-[500px]">
              <div className="col-span-2 row-span-2">
                <ImageContainer 
                  className="w-full h-full" 
                  imgAlt="img one" 
                  imgUrl="https://media.discordapp.net/attachments/1038329663187062804/1151825468979429376/lebokeji_Text_a9ddc3ee-061c-41c4-9763-42e56f2cc09e.png?width=835&height=468"
                  hoverContent="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, impedit."
                />
              </div>
              <div className="col-span-1 row-span-1">
                <ImageContainer 
                  className="w-full h-full" 
                  imgAlt="img one" 
                  imgUrl="https://cdn.openai.com/labs/images/An%20expressive%20oil%20painting%20of%20a%20basketball%20player%20dunking,%20depicted%20as%20an%20explosion%20of%20a%20nebula.webp?v=1"
                  hoverContent="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, impedit."
                />
              </div>
              <div className="col-span-1 row-span-1">
                <ImageContainer 
                  className="w-full h-full" 
                  imgAlt="img one" 
                  imgUrl="https://cdn.openai.com/labs/images/A%20blue%20orange%20sliced%20in%20half%20laying%20on%20a%20blue%20floor%20in%20front%20of%20a%20blue%20wall.webp?v=1"
                  hoverContent="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, impedit."
                />
              </div>
              <div className="col-span-1 row-span-1">
                <ImageContainer 
                  className="w-full h-full" 
                  imgAlt="img one" 
                  imgUrl="https://cdn.openai.com/labs/images/A%203D%20render%20of%20an%20astronaut%20walking%20in%20a%20green%20desert.webp?v=1"
                  hoverContent="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, impedit."
                />
              </div>
              <div className="col-span-1 row-span-1">
                <ImageContainer 
                  className="w-full h-full" 
                  imgAlt="img one" 
                  imgUrl="https://cdn.openai.com/labs/images/A%20plush%20toy%20robot%20sitting%20against%20a%20yellow%20wall.webp?v=1"
                  hoverContent="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, impedit."
                />
              </div>
              <div className="col-span-1 row-span-1">
                <ImageContainer 
                  className="w-full h-full" 
                  imgAlt="img one" 
                  imgUrl="https://media.discordapp.net/attachments/1038329663187062804/1150724467501318165/bluewing__Ink_head_by_artist_alisha_black_haired_tiger_mask_Inf_128e3342-1009-46ab-8d2d-95e45473be5e.png?width=234&height=468"
                  hoverContent="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, impedit."
                />
              </div>
              <div className="col-span-1 row-span-1">
                <ImageContainer 
                  className="w-full h-full" 
                  imgAlt="img one" 
                  imgUrl="https://cdn.openai.com/labs/images/An%20armchair%20in%20the%20shape%20of%20an%20avocado.webp?v=1"
                  hoverContent="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, impedit."
                />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default Home;
