import Image from "next/image"
import React from "react"
import { prefix } from "../../utils/prefix"

const images: string[] = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/240px-HTML5_logo_and_wordmark.svg.png", 
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/240px-CSS3_logo_and_wordmark.svg.png", 
  "https://pluralsight2.imgix.net/paths/images/javascript-542e10ea6e.png", 
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
  "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
  "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  "https://turbo.build/images/docs/repo/repo-hero-logo-dark.svg",
  "https://avatars.githubusercontent.com/in/15368?s=64&v=4",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Expressjs.png/240px-Expressjs.png", 
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png",  
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkSKpjWP2yvVBxiPJgB1hnAPKp-F4rvd6OZmVRk3xi6tCGZe_tcDzNek-nskxntA-dFKk&usqp=CAU", 
  "https://images.ctfassets.net/23aumh6u8s0i/c04wENP3FnbevwdWzrePs/1e2739fa6d0aa5192cf89599e009da4e/nextjs", 
  "https://miro.medium.com/max/1200/0*T6pKJjgoPIBy_u-_.png", 
  `${prefix}/solid-logo.svg`, 
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
  "https://images.ctfassets.net/vkdbses00qqt/3Id5VwofmvaFbjuSumaOmM/592c2d2e523187bd054a16b358d5a7ec/framework.svg"
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
        <Image src={images[currentIndex]} alt="" width={200} height={200}/>
      </div>

    </div>
  )
}

export default Carousel