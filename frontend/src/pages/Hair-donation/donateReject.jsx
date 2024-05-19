import React from "react";
import { useLocation } from "react-router-dom";
import HairReject from "../../assets/hair_r.png";

const DonationReject = () => {
	const location = useLocation();
	const message = location.state?.message;

	return (
		<div className="bg-white-100">
			<div>
				<h2
					className="text-4xl text-center"
					style={{
						marginTop: "150px",
						marginBottom: "20px",
						backgroundColor: "pink",
					}}
				>
					{message}
				</h2>
			</div>
			<section
				className="relative left-0 top-0 z-0 bg-cover bg-center h-80 md:h-screen flex items-center justify-center text-center text-white"
				style={{
					backgroundImage: `url(${HairReject})`,
				}}
			></section>
		</div>
	);
};

export default DonationReject;
