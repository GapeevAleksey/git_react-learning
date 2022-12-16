import { func } from 'prop-types';
import { Component, useState, useEffect, useCallback } from 'react';
import './aaUseState.css';
// class Slider extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       autoplay: false,
//       slide: 0,
//     };
//   }

//   changeSlide = (i) => {
//     this.setState(({ slide }) => ({
//       slide: slide + i,
//     }));
//   };

//   toggleAutoplay = () => {
//     this.setState(({ autoplay }) => ({
//       autoplay: !autoplay,
//     }));
//   };

//   render() {
//     return (
//       <>
//         <div className="slider w-50 m-auto">
//           <img
//             className="d-block w-100"
//             src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
//             alt="slide"
//           />
//           <div className="text-center mt-5">
//             Active slide {this.state.slide} <br />{' '}
//             {this.state.autoplay ? 'auto' : null}
//           </div>
//           <div className="buttons mt-3">
//             <button
//               className="btn btn-primary me-2"
//               onClick={() => this.changeSlide(-1)}
//             >
//               -1
//             </button>
//             <button
//               className="btn btn-primary me-2"
//               onClick={() => this.changeSlide(1)}
//             >
//               +1
//             </button>
//             <button
//               className="btn btn-primary me-2"
//               onClick={this.toggleAutoplay}
//             >
//               toggle autoplay
//             </button>
//           </div>
//         </div>
//       </>
//     );
//   }
// }

const Slider = (props) => {
  const [slide, setSlide] = useState(10);
  const [autoplay, setAutoplay] = useState(false);
  const changeTitle = () => {
    console.log('useEffect');
    document.title = 'Slide: ' + slide;
    window.addEventListener('click', logging);
    return () => {
      window.removeEventListener('click', logging);
    };
  };
  const logging = () => {
    console.log('log!');
  };
  useEffect(changeTitle, [slide]);
  useEffect(() => {
    console.log('autoplay');
  }, [autoplay]);
  function changeSlide(i) {
    setSlide((slide) => slide + i);
  }
  function toggleAutoplay() {
    setAutoplay((autoplay) => !autoplay);
  }
  const getSomeImg = useCallback(() => {
    console.log('fetching...');
    return [
      'https://images.satom.ru/i3/firms/28/323/323828/almaznaya-mozaika-ryzhiy-kot-shchenok-i-ryzhiy-kotenok-acg047_86a5ba90e5f6f80_800x600.webp.jpg',
      'https://adella.ru/wp-content/uploads/2019/01/sobaka.jpeg',
    ];
  }, [slide]);

  return (
    <>
      <div className="slider w-50 m-auto">
        <Slide getSomeImg={getSomeImg} />
        <div className="text-center mt-5">
          Active slide {slide} <br /> AutoPlay: {autoplay ? 'ВКЛ.' : 'ВЫКЛ.'}
        </div>
        <div className="buttons mt-3">
          <button
            className="btn btn-primary me-2"
            onClick={() => changeSlide(-1)}
          >
            -1
          </button>
          <button
            className="btn btn-primary me-2"
            onClick={() => changeSlide(1)}
          >
            +1
          </button>
          <button className="btn btn-primary me-2" onClick={toggleAutoplay}>
            toggle autoplay
          </button>
        </div>
      </div>
    </>
  );
};

function Applic() {
  const [slider, setSlider] = useState(true);

  return (
    <>
      <button onClick={() => setSlider(false)}>Click</button>
      {slider ? <Slider /> : null}
    </>
  );
}

const Slide = ({ getSomeImg }) => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    setImages(getSomeImg());
  }, [getSomeImg]);
  return (
    <>
      {images.map((img, index) => {
        return (
          <img className="d-block w-100" src={img} alt="slide" key={index} />
        );
      })}
    </>
  );
};

export default Applic;
