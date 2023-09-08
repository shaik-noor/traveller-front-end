
const ContactSection = () =>{
    return(
        <div id="contact" className="max-w-[1200px] m-auto w-full p-4 py-15">
            <h2 className="text-center font-bold text-2xl text-gray-800 p-4">Contact Us</h2>
            <p className="text-center text-gray-500 pb-4">Have a question or feedback? Contact us anytime, and we'll get back to you as soon as possible.</p>
            <div className="grid md:grid-cols-2">
                <img className="w-full md:h-full object-cover p-2 max-h-[450px] h-[200px]" 
                src='./assets/help_desk.webp' alt="desk" />
                <form>
                    <div className="grid grid-cols-2">
                        <input className="border m-2 p-2"type="text" placeholder="First Name"/>
                        <input className="border m-2 p-2"type="text" placeholder="Last Name"/>
                        <input className="border m-2 p-2" type="email" placeholder="Email"/>
                        <input className="border m-2 p-2" type="tel" placeholder="Phone"/>
                        <textarea className="border col-span-2 m-2 p-2"cols='30'rows='10' placeholder="Start Typing.."></textarea>
                        <button className='col-span-2 m-2 p-2 border rounded bg-gradient-to-r from-[#0646A7] to-[#3A62AE] text-white'>Send</button>
                        
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactSection;