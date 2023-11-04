import { BiLogoFacebook, BiSearchAlt2 } from "react-icons/bi"
import { GiBookshelf } from "react-icons/gi"
import { AiOutlineHeart } from "react-icons/ai"
import { FaInstagram } from "react-icons/fa"
import { TfiLinkedin } from "react-icons/tfi"
import { CiTwitter } from "react-icons/ci"
import {
    Link
} from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs"
import { useState } from "react";
function NavBar() {
    const [search, setSearch] = useState("")
    return (<div>
        <section className="p-3 bg-navBlue flex justify-between items-center text-white">
            <p className="pl-8">Algo Reads</p>
            <section className="pr-8 flex justify-around items-center">
                <BiLogoFacebook className="mr-3"/>
                <CiTwitter className="mr-3"/>
                <FaInstagram className="mr-3"/>
                <TfiLinkedin />
            </section>
        </section>
        <section className="flex justify-around mx-4 items-center border-b-[1px] border-zinc-500">
            <img src="../images/algologo.png" className="rounded-full border-spacing-1 w-20 h-auto"/>
            <div className="relative">
                <label>
                    <input className="bg-inputGray text-xs border-solid rounded-md h-7 text-left focus:outline-none pl-2" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search books" />
                </label>
                <div className="absolute top-2 right-2">
                    <BiSearchAlt2 className="relative " />
                </div>
            </div>
            <section className="text-navBlue flex justify-around items-center">
                <BsFillPersonFill />
                <p>Account</p>
            </section>
            <section className="text-navBlue flex justify-around items-center">
                <GiBookshelf />
                <p>My Shelf</p>
            </section>
            <section className="text-navBlue flex justify-around items-center">
                <AiOutlineHeart />
                <p>Wishlist</p>
            </section>
        </section>
        <section className="flex justify-center text-black mt-2 max-w-2xl mx-auto">
            <Link to='/'>
                <p className="hover:text-pink-500 pr-7 border-r-[1px] border-zinc-500">LIBRARY</p>
            </Link>
            <p className="hover:text-pink-500 pr-7 ml-7 border-r-[1px] border-zinc-500">ABOUT US</p>
            <p className="hover:text-pink-500 pr-7 ml-7  border-r-[1px] border-zinc-500">NEW READS</p>
        </section>
    </div>);
}

export default NavBar;