import React from "react";
import Image from "next/image";

type ImageContainerProps = {
    className: string
    imgUrl: string
    imgAlt: string
    hoverContent: string
} 

const ImageContainer = ({ className, imgAlt, imgUrl, hoverContent }: ImageContainerProps) => {
  return( 
    <div className={`object-cover group relative ${className}`}>
        <Image
            src={ imgUrl }
            alt={ imgAlt }
            width={800}
            height={800}
            className="w-full h-full"
        ></Image>
        {/* <div className="absolute inset-0 p-2 text-sm text-gray-700 bg-white opacity-90 font-medium hidden group-hover:block 
        transition duration-700 ease-in">
            { hoverContent }
        </div> */}
    </div>
  )
}

export default ImageContainer;
