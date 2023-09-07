const HeroSection = () =>{
    return(
    
        <div className="w-full h-[90vh]">
        <img
            className="w-full h-full object-cover" 
            src="../assets/Hero.jpg" alt="hero" />
        <div className="max-w-[1200px] m-auto">
            <div className="px-5 absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white">
            <h1 className="font-bold text-4xl">Welcome to Traveller</h1>
            <h2 className="font-bold italic text-3xl py-2">Gateway to Adventure</h2>
            <p>Explore the world, discover new horizons, and embark on unforgettable journeys with Traveller.</p>
            </div>
        </div>
        </div>

        
    
    )
}

export default HeroSection;