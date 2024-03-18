import React, { useState, useContext, useEffect } from "react";
import { ImCross } from "react-icons/im";

export default function ImageModal({ visible, onClose, image }) {
	const onCloseModel = () => {
		onClose();
	};

	if (visible == "false") return null;

	return (
		<>
			<div className=" mt-[8rem] fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
				<div className="absolute top-0 right-0 m-[12px]">
					<button onClick={onCloseModel}>
						<ImCross className="fill-red-600 hover:fill-red-400" />
					</button>
				</div>

				<div className="flex justify-center items-center">
					<img src={image} className="w-[15rem] h-[15rem]" alt="Modal" />
				</div>
			</div>
		</>
	);
}
