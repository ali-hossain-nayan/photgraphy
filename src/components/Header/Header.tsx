import { NavLink, useLocation } from "react-router-dom"

const Header = () => {
    const location = useLocation()
    return (
        <div className="bg-white shadow-lg ">
            <ul className="flex justify-center mt-6 py-5">
                <li>
                    <NavLink to="/"
                        className={`ml-4 md:ml-[5rem] pb-2 ${location.pathname === "/" ?
                            "text-[#137548] font-bold border-b-2 border-[#137548]   " : "  hover:border-b-2 font-bold hover:text-[#137548] hover: border-[#137548]"
                            }`}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/gallery"
                        className={`ml-4 md:ml-[5rem]  pb-2 ${location.pathname === "/free-courses" ?
                            "text-[#137548] font-bold border-b-2 border-[#137548]   " : "  hover:border-b-2 font-bold hover:text-[#137548] hover: border-[#137548]"
                            }`}
                    >
                        Gallery
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/meet-founder"
                        className={`ml-4 md:ml-[5rem]  pb-2 ${location.pathname === "/meet-founder" ?
                            "text-[#137548] border-b-2 border-[#137548] font-bold" : "text-gray-700 hover:border-b-2 font-bold hover:text-[#137548] hover: border-[#137548]"
                            }`}
                    >
                        Meet The Founder
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/blogs"
                        className={`ml-4 md:ml-[5rem]  pb-2 ${location.pathname === "/blogs" ?
                            "text-[#137548] border-b-2 border-[#137548] font-bold" : "text-gray-700 hover:border-b-2 font-bold hover:text-[#137548] hover: border-[#137548]"
                            }`}
                    >
                        Blogs
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact"
                        className={`ml-4 md:ml-[5rem]  pb-2 ${location.pathname === "/contact" ?
                            "text-[#137548] border-b-2 border-[#137548] font-bold" : "text-gray-700 hover:border-b-2 font-bold hover:text-[#137548] hover: border-[#137548]"
                            }`}
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Header