function Navbar() {
    return (
        <div className="Nav-container sticky top-0">
            <div className="nav-list bg-black text-white">
                <ul className="flex gap-2 justify-center">
                    <li className="p-5 hover:bg-orange-500 cursor-pointer">Home</li>
                    <li className="p-5 hover:bg-orange-500 cursor-pointer">Projects</li>
                    <li className="p-5 hover:bg-orange-500 cursor-pointer">Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;