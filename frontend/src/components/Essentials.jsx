import React, { useState, useEffect } from "react";

const Essentials = () => {
    // State to manage the visibility of items
    const [showAll, setShowAll] = useState(false);

    // Dummy data for items
    const items = [
        { id: 1, name: 'The Catalyzer', price: '$16.00', image: 'https://dummyimage.com/420x260' },
        { id: 2, name: 'Shooting Stars', price: '$21.15', image: 'https://dummyimage.com/421x261' },
        { id: 3, name: 'Neptune', price: '$12.00', image: 'https://dummyimage.com/422x262' },
        { id: 4, name: 'The 400 Blows', price: '$18.40', image: 'https://dummyimage.com/423x263' },
        { id: 5, name: 'The Catalyzer', price: '$16.00', image: 'https://dummyimage.com/424x264' },
        { id: 6, name: 'Shooting Stars', price: '$21.15', image: 'https://dummyimage.com/425x265' },
        { id: 7, name: 'Neptune', price: '$12.00', image: 'https://dummyimage.com/426x266' },
        { id: 8, name: 'The 400 Blows', price: '$18.40', image: 'https://dummyimage.com/427x267' },
        { id: 9, name: 'The Catalyzer', price: '$16.00', image: 'https://dummyimage.com/428x268' },
        { id: 10, name: 'Shooting Stars', price: '$21.15', image: 'https://dummyimage.com/429x269' },
    ];

    // Slice the items array based on the showAll state
    const displayedItems = showAll ? items : items.slice(0, 8);

    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-36 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {/* Map through displayed items and render cards */}
                        {displayedItems.map(item => (
                            <div key={item.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={item.image} />
                                </a>
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">{item.name}</h2>
                                    <p className="mt-1">{item.price}</p>
                                </div>
                            </div>
                        ))}
                        {/* Render "See More" button if there are more than 8 items */}
                        {items.length > 8 && !showAll && (
                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <button
                                    onClick={() => setShowAll(true)}
                                    className="border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-md focus:outline-none"
                                >
                                    See More
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Essentials;