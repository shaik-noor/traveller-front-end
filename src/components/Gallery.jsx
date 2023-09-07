const Gallery = () => {
    return (
        <div id="gallery" className="max-w-[1200px] m-auto w-full py-4 px-4">
            <h2 className="text-center font-bold text-2xl text-gray-800 p-4">Gallery</h2>
            <div className="grid sm:grid-cols-5 gap-2">
                <div className="sm:col-span-3 row-span-2 col-span-2">
                    <img className="w-full h-full object-cover border-4 border-white shadow-lg" src="../assets/Singapor.jpg" alt="singapore" />
                </div>
                <div>
                    <img className="w-full h-full object-cover border-4 border-white shadow-lg" src="../assets/maldives.jpg" alt="maldives" />
                </div>
                <div>
                    <img className="w-full h-full object-cover border-4 border-white shadow-lg" src="../assets/kateryna-t-RkyYEVHrRbo-unsplash.jpg" alt="kateryna" />
                </div>
                <div>
                    <img className="w-full h-full object-cover border-4 border-white shadow-lg" src="../assets/explore-3.jpg" alt="explore" />
                </div>
                <div>
                    <img className="w-full h-full object-cover border-4 border-white shadow-lg" src="../assets/hotel-2.jpg" alt="hotel-2" />
                </div>
            </div>
        </div>
    );
};

export default Gallery;
