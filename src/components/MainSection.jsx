const MainSection = () =>{
    return(
        <div id="about" className="max-w-[1200px] m-auto w-full md:flex mt-[-75px]">
            <div className="relative p-4">
                <h3 className="absolute z-10 text-2xl top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-bold text-white">Destinations</h3>
                <img className ="w-full h-full object-cover relative border-4 border-white shadow-lg"src="./assets/Dubai.jpg" alt="dubai" />
            </div>
            <div className="relative p-4">
                <h3 className="absolute z-10 text-2xl top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-bold text-white">Hotels</h3>
                <img className ="w-full h-full object-cover relative border-4 border-white shadow-lg"src="./assets/hotel-1.jpg" alt="hotel" />
            </div>
            <div className="relative p-4">
                <h3 className="absolute z-10 text-2xl top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-bold text-white">Explore</h3>
                <img className ="w-full h-full object-cover relative border-4 border-white shadow-lg"src="./assets/explore-2.jpg" alt="under-water" />
            </div>
        </div>
    )
}

export default MainSection;
