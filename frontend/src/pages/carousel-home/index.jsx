import Carousel from "./Carousel";

import image1 from "../../assets/image.png";
import image2 from "../../assets/hospital_image.jpg";

import image3 from "../../assets/IMG_1760.jpeg";
import image4 from "../../assets/hospital_img1.jpg";

const slides = [image1, image2, image3, image4];

import React from "react";

function index() {
	return (
		<div className="max-w-lg">
			<Carousel autoSlide={true}>
				{...slides.map((image, index) => <img key={index} src={image} alt={`Slide ${index + 1}`} />)}
			</Carousel>
		</div>
	);
}

export default index;
