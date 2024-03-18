import React, { useState, useEffect, useContext } from "react";
import DonorContext from "../../contexts/DonorContext";

const DonorRegister = () => {

    const { register } = useContext(DonorContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newUser = {
            name: e.target.name.value,
            email: e.target.email.value,
            contact: e.target.contact.value,
            nic: e.target.nic.value,
            password: e.target.password.value,
        };

        register(newUser);
    };

    return (

        <>

            <div className="mt-28 md:mb-4">
                <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">

                </h2>
            </div>
            <div className="flex items-center justify-center p-12">
                {/* Author: FormBold Team */}
                <div className="mx-auto w-full max-w-[550px] bg-white">
                    <form onSubmit={handleSubmit}>
                        <div className="-mx-3 flex flex-wrap">
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <label className="mb-3 block text-base font-medium text-[#07074D]">
                                        Name
                                    </label>
                                    <input type="text" id="name" name="name" placeholder="Enter your name" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                </div>
                            </div>
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <label htmlFor="lName" className="mb-3 block text-base font-medium text-[#07074D]">
                                        Email
                                    </label>
                                    <input type="email" id="email" placeholder="Enter your email" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                </div>
                            </div>
                        </div>
                        <div className="mb-5">
                            <label htmlFor="guest" className="mb-3 block text-base font-medium text-[#07074D]">
                                Contact Number
                            </label>
                            <input type="number" id="contact" placeholder="Enter contact number" className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                        <div className="-mx-3 flex flex-wrap">
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <label htmlFor="text" className="mb-3 block text-base font-medium text-[#07074D]">
                                        NIC
                                    </label>
                                    <input type="text" id="nic" placeholder="Enter NIC number" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                </div>
                            </div>
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <label htmlFor="time" className="mb-3 block text-base font-medium text-[#07074D]">
                                        Password
                                    </label>
                                    <input type="password" id="password" placeholder="Enter password" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center mt-6">
                            <button className="hover:shadow-form rounded-md bg-green-500 py-3 px-8 text-center text-base font-semibold text-white outline-none" type="submit">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>


        </>
    )



}

export default DonorRegister;