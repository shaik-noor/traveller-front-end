const BookingSection = () =>{
    return(
        <div id="book" className="max-w-[1100px] m-auto w-full p-4">
            <form className="lg:flex lg:justify-between w-full items-center">
                <div className="flex flex-col my-2 py-2">
                    <label className="font-bold text-gray-600">Destination</label>
                    <select className="lg:w-[300px] md:w-full border rounded-md p-2">
                        <option>Dubai</option>
                        <option>Singapoor</option>
                        <option>Maldives</option>
                    </select>
                </div>
                <div className="flex w-full">
                    <div>
                        <label className="font-bold text-gray-600 flex">Check In</label>
                        <input className="border rounded-md m-2 p-2" type="date" />
                    </div>
                    <div>
                        <label className="font-bold text-gray-600 flex">Check Out</label>
                        <input className="border rounded-md m-2 p-2" type="date" />
                    </div>
                </div>
                <div className="flex flex-col my-2 p-2 w-full">
                    <button id="/" className='mt-4 px-4 py-2 border rounded bg-gradient-to-r from-[#0646A7] to-[#3A62AE] text-white'>Check Availability</button>
                </div>
            </form>

        </div>
    )
}

export default BookingSection;