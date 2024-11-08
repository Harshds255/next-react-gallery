import { images } from "./data/images";
import { useRef } from 'react';

const gallery = () => {
  const maximiseRef = useRef(null);
  const imageRef = useRef(null);
  let elementPos = 0;
  
  const handleImageClick = (pos:any) => {
    maximiseRef.current!.style.display = "block";
    elementPos = pos;
    imageRef.current!.src = images[elementPos].img;
  }

  const handleClose = () => {
    maximiseRef.current!.style.display = 'none';
  }

  const handleLeftClick = () => {
    console.log(elementPos);
    if (elementPos > 0)
      imageRef.current!.src = images[--elementPos].img;
  }

  const handleRightClick = () => {
    if (elementPos < images.length - 1)
      imageRef.current!.src = images[++elementPos].img;
  }

  return (
    <div>
      <div className="p-5 md:p-10">
        <div className="columns-1 justify-center item-center text-center gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8 overflow-hidden image-container">
          {images.map((item, key) => {
            return (
              <img
                className="hover:scale-110 transition linear delay-200 duration-300 cursor-pointer"
                key={key}
                src={item.img}
                alt="images"
                onClick={()=>handleImageClick(key)}
              />
            );
          })}
        </div>
      </div>
      <div className="maximise fixed top-0 left-0 w-full h-full z-30 bg-gray-800 bg-opacity-90 hidden" ref={maximiseRef}>
        <span className="close top-0 right-10 absolute text-5xl z-50 text-white cursor-pointer" onClick={handleClose}>
          &times;
        </span>
        <span className="prev top-1/2 left-10 absolute text-5xl z-50 text-white cursor-pointer" onClick={handleLeftClick}>
          &lt;
        </span>
        <span className="next top-1/2 right-10 absolute text-5xl z-50 text-white cursor-pointer" onClick={handleRightClick}>
          &gt;
        </span>
        <div className="flex justify-center items-center w-full h-full">
          <img
            className="m-auto border-8 border-white-700 w-full h-full border border-double rounded-2xl object-scale-down object-fill"
            src=""
            alt=""
            ref={imageRef}
          />
        </div>
      </div>
    </div>
  );
};

export default gallery;
