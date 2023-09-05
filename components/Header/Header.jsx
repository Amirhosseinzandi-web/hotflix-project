"use client"


import Link from "next/link";
import { useEffect, useState } from "react";


const Header = () => {
    const [menuHamburger, setMenuHamburger] = useState(false)


    useEffect(() => {
        let _mobileMenu = document.querySelector(".mobile-menu");
        let _saye = document.querySelector(".saye")
        if (menuHamburger) {
            _mobileMenu.style.right = "0%";
            document.querySelector(".parde").classList.remove("birang")
            document.querySelector(".parde").classList.add("saye")

        } else {
            _mobileMenu.style.right = "-55%";
            document.querySelector(".parde").classList.add("birang")
            setTimeout(()=>{
                document.querySelector(".parde").classList.remove("saye")
            },250)
            
        }

    }, [menuHamburger])



    return (
        <>
            <header className="w-full header text-white">
                <nav className="w-[96%] mx-auto flex py-3">
                    <div className="w-[60%]">
                        <Link href={"/"}>
                            <h1 className="brand-name"><span>hot</span>flix</h1>
                        </Link>
                    </div>

                    <div className="w-[40%] nav-right flex items-center justify-between">
                        <i className="bi bi-search icons"></i>
                        <p className="cursor-pointer">EN<i className="bi bi-arrow-down-short"></i></p>
                        <i className="bi bi-door-open icons"></i>
                        <i className={`${menuHamburger ? ("bi bi-x-lg") : ("bi bi-justify")} icons hamburger-menu`} onClick={() => setMenuHamburger(!menuHamburger)}></i>
                    </div>
                </nav>
            </header>

            <div className="mobile-menu">
                <nav>
                    <ul className="text-black">
                        <li className="p-2">home</li>
                        <li className="p-2">catalog</li>
                        <li className="p-2">catalog</li>
                        <li className="p-2">pricing plan</li>
                        <li className="p-2">...</li>
                    </ul>
                </nav>
            </div>
            <div className="parde"></div>
        </>
    );
}

export default Header;