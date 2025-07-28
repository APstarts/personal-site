import {Link} from 'react-router-dom';


function Navbar() {
    return (
        <div className="Nav-container sticky top-0">
            <div className="nav-list bg-black text-white">
                <ul className="flex gap-2 justify-center">
                    <Link to="/"><li className="p-5 hover:bg-orange-500 cursor-pointer">Home</li></Link>
                    <Link to="/blogs"><li className="p-5 hover:bg-orange-500 cursor-pointer">Blogs</li></Link>
                    <Link to=''><li className="p-5 hover:bg-orange-500 cursor-pointer">Contact</li></Link>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;