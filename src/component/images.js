import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
const ImageView = () => {
  return (
    <AwesomeSlider animation="cubeAnimation">
      <div>
        <img src="https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg" />
      </div>
      <div>
        <img src="https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg" />
      </div>
      <div>
        <img src="https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg" />
      </div>
      <div>
        <img src="https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg" />
      </div>
    </AwesomeSlider>

  )
}

export default ImageView;