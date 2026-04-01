import { FaHome, FaUser, FaSearch } from "react-icons/fa"
import { CiSettings } from "react-icons/ci";


const Sidebar = () => {
    return <aside className="sidebar fixed top-0 left-0 h-screen w-20 bg-gray-600 text-yellow-200">
        <div className="p-4 flex flex-col justify-between items-center h-full">

            <ul className="top">
                <li className="mb-2">
                    <div className="flex items-center">
                        <FaHome className="text-2xl mr-2 mb-4" />
                    </div>
                </li>
                <li className="mb-2">
                    <div className="flex items-center">
                        <FaUser className="text-2xl mr-2 mb-4" />
                    </div>
                </li>
                <li className="mb-2">
                    <div className="flex items-center">
                        <FaSearch className="text-2xl mr-2 mb-4" />
                    </div>
                </li>
            </ul>
            <ul className="bottom">
                <li>
                    <div className="flex items-center">
                        <CiSettings  className="text-2xl mr-2 mb-4" />
                    </div>
                </li>
            </ul>
        </div>
    </aside>
}

export default Sidebar
