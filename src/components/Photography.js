import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from '@material-ui/core/Container';

// import { makeStyles } from '@material-ui/core/styles';
// import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//     overflow: 'hidden',
//     backgroundColor: theme.palette.background.paper,
//   },
//   gridList: {
//     width: 800,
//     height: 450,
//   },
// }));

/**
 * The example data is structured as follows:
 *
 * 
 * import image from 'path/to/image.jpg';
 * [etc...]
 */

// import image from '../../public/images/image.jpg';
// import image1 from '../../public/images/image1.jpg';
// import image2 from '../../public/images/image2.jpg';
// import image3 from '../../public/images/image3.jpg';
// import image4 from '../../public/images/image4.jpg';
// import image5 from '../../public/images/image5.jpg';
// import image6 from '../../public/images/image6.jpg';
// import image7 from '../../public/images/image7.jpg';
// import image8 from '../../public/images/image8.jpg';
// import image9 from '../../public/images/image9.jpg';


// const images = [
//    {
//      img: image,
//      title: 'Image',
//      author: 'author',
//      cols: 2,
//    },
//    {
//     img: image1,
//     title: 'Image',
//     author: 'author',
//     cols: 1,
//   },
//   {
//     img: image2,
//     title: 'Image',
//     author: 'author',
//     cols: 0,
//   },
//   {
//     img: image3,
//     title: 'Image',
//     author: 'author',
//     cols: 2,
//   },
//   {
//     img: image4,
//     title: 'Image',
//     author: 'author',
//     cols: 1,
//   },
//   {
//     img: image5,
//     title: 'Image',
//     author: 'author',
//     cols: 2,
//   },
//   {
//     img: image6,
//     title: 'Image',
//     author: 'author',
//     cols: 4,
//   },
//   {
//     img: image7,
//     title: 'Image',
//     author: 'author',
//     cols: 2,
//   },
//   {
//     img: image8,
//     title: 'Image',
//     author: 'author',
//     cols: 2,
//   },
//   {
//     img: image9,
//     title: 'Image',
//     author: 'author',
//     cols: 2,
//   },

// ];



export default function photography() {

  return (
    <section id="photography">
      <br />
      <br />
      <h1>Photos</h1>
      <br />
      <Container maxWidth="sm">


        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../images/image.jpg"
              alt="First slide"
            />

          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../images/image4.jpg"
              alt="Third slide"
            />


          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../images/image9.jpg"
              alt="Third slide"
            />


          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../images/image6.jpg"
              alt="Third slide"
            />


          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../images/image7.jpg"
              alt="Third slide"
            />


          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../images/image2.jpg"
              alt="Third slide"
            />


          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../images/image5.jpg"
              alt="Third slide"
            />


          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../images/image3.jpg"
              alt="Third slide"
            />


          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../images/image1.jpg"
              alt="Third slide"
            />


          </Carousel.Item>
        </Carousel>
      </Container>
      <br />
    </section>
  );
}