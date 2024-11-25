
const Contact = () => {
    return (

        <div>
            <div className="">
                <h1 className="text-4xl mt-8 text-[#137548] font-bold">Let’s get this party started.</h1>
                <p className="mt-6 text-md">Our team is available for weddings all around Bangladesh. Say hello and share a bit about your plans.<br />
                    You will hear from us within 24 hours. If not, please hit us up via <br /> <span className="text-[#137548] font-bold"> WhatsApp: +8801690205129.</span><br />
                    If you are a planner, please send an e-mail to <span className="text-[#137548] font-bold">victorjoo12345@gmail.com.</span> </p>
            </div>
            <div className="max-w-lg mx-auto mt-20 p-6 bg-white shadow-md rounded-md">
                <h2 className="text-4xl md:5xl font-bold text-gray-700 text-center">Any message for us?</h2>
                <form className="mt-6">
                    <div className="mb-4">
                        <label className="block text-gray-600 font-medium mb-2">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-600 font-medium mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-600 font-medium mb-2">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            // rows="4"
                            placeholder="Enter your message"
                            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#1BC8D3] text-white py-2 px-4 rounded-md hover:text-black hover:bg-teal-200 transition duration-300"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>

    )
}

export default Contact