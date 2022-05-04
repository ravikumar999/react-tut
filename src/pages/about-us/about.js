import { useState, useEffect } from "react";
import axios from "axios";
const About  = () => {
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/photos").then(response => {
     console.log(response)
     let listImages = [...response.data];
     setImageList(listImages);
     console.log(listImages)
    })
  },[])

  return (
    <div>
      { imageList.map((img, index) => {
        return(
          <div key={index}>
            <img src={img.url}  />
          </div>
        )
      })}
    </div>
  )
}

export default About;