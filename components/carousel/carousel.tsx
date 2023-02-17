import Image from "next/image"
import React from "react"
{/*<div className="relative flex flex-col justify-center gap-6 sm:flex-row md:flex-col lg:flex-row my-12">
          <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/240px-HTML5_logo_and_wordmark.svg.png" height={48} width={48} alt="html 5"/>
          <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/240px-CSS3_logo_and_wordmark.svg.png" height={48} width={48} alt="css 3"/>
          <Image src="https://pluralsight2.imgix.net/paths/images/javascript-542e10ea6e.png" height={48} width={48} alt="javascript" />
          <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Expressjs.png/240px-Expressjs.png" height={48} width={48} alt="express" />
          <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png" height={48} width={48} alt="node js" />
          <Image src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" height={48} width={48} alt="react js" />
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkSKpjWP2yvVBxiPJgB1hnAPKp-F4rvd6OZmVRk3xi6tCGZe_tcDzNek-nskxntA-dFKk&usqp=CAU" height={48} width={48} alt="wordpress" />
          <Image src="https://images.ctfassets.net/23aumh6u8s0i/c04wENP3FnbevwdWzrePs/1e2739fa6d0aa5192cf89599e009da4e/nextjs" height={48} width={48} alt="next js" />
          <Image src="https://miro.medium.com/max/1200/0*T6pKJjgoPIBy_u-_.png" height={48} width={48} alt="svelte" />
          <Image src="/solid-logo.svg" height={48} width={48} alt="solid js" />
          <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" height={48} width={48} alt="typescript" />
    </div>*/}
const images: string[] = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/240px-HTML5_logo_and_wordmark.svg.png", 
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/240px-CSS3_logo_and_wordmark.svg.png", 
  "https://pluralsight2.imgix.net/paths/images/javascript-542e10ea6e.png", 
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Expressjs.png/240px-Expressjs.png", 
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png",  
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkSKpjWP2yvVBxiPJgB1hnAPKp-F4rvd6OZmVRk3xi6tCGZe_tcDzNek-nskxntA-dFKk&usqp=CAU", 
  "https://images.ctfassets.net/23aumh6u8s0i/c04wENP3FnbevwdWzrePs/1e2739fa6d0aa5192cf89599e009da4e/nextjs", 
  "https://miro.medium.com/max/1200/0*T6pKJjgoPIBy_u-_.png", 
  "/solid-logo.svg", 
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" 
]

let count = 0

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0)

  React.useEffect(() => {
      startSlider();
    }, []);

    const startSlider = () => {
    setInterval(() => {
      handleNextClick();
    }, 3000);
  };

  const handlePreviousClick = () => {
    count = (count - 1) % images.length
    setCurrentIndex(count)
  }

  const handleNextClick = () => {
    count = (count + 1) % images.length
    setCurrentIndex(count)
  }

  return (
    <div className="m-auto">
      <div className="w-full relative select-none">
        <img src={images[currentIndex]} alt="" width={200} height={200}/>

        {/*<div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3">
          <button onClick={handlePreviousClick}>Previous</button>
          <button onClick={handleNextClick}>Next</button>
  </div>*/}
      </div>

    </div>
  )
}

export default Carousel