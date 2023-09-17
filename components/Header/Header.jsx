"use client"


import Link from "next/link";
import { useEffect, useState } from "react";


const Header = () => {
    const [menuHamburger, setMenuHamburger] = useState(false)


    useEffect(() => {
        let _mobileMenu = document.querySelector(".mobile-menu");
        if (menuHamburger) {
            _mobileMenu.style.right = "0%";
        } else {
            _mobileMenu.style.right = "-60%";
        }

    }, [menuHamburger])

    const HeaderOpenBtn = () =>{
        document.querySelector(".parent-search-mobile").classList.remove("header__search-close-btn")
    }

    const HeaderCloseBtn = () =>{
        document.querySelector(".parent-search-mobile").classList.add("header__search-close-btn")
    }

    return (
        <>
            <header className="w-full header text-white">
                <div className="parent-search-mobile flex header__search-close-btn xl:hidden">
                    <div className="flex container mx-auto">
                        <div className="w-[95%] relative">
                            <input className="px-6 py-2 w-full rounded xl:hidden" type="search" placeholder="Search..." />
                            <button className="absolute text-white header__search-button">
                                <i className="bi bi-search"></i>
                            </button>
                        </div>

                        <div className="w-[5%] flex items-center justify-end ">
                            <button onClick={HeaderCloseBtn}><i className="bi bi-x-lg"></i></button>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto">
                    <nav className="w-[96%] mx-auto flex py-3 ">
                        <div className="w-[60%] nav-left flex items-center">
                            <Link href={"/"}>
                                <h1 className="brand-name"><span>hot</span>flix</h1>
                            </Link>
                            <ul className="hidden text-white xl:flex justify-evenly w-full">
                                <li className="">home<i className="bi bi-arrow-down-short"></i></li>
                                <li className="">catalog<i className="bi bi-arrow-down-short"></i></li>
                                <li className="">pricing plan</li>
                                <li className="">...</li>
                            </ul>
                        </div>

                        <div className="w-[40%] nav-right flex items-center justify-between">
                            <i className="bi bi-search icons xl:hidden" onClick={HeaderOpenBtn}></i>
                            <div className="hidden xl:flex form">
                                <input className=" inp-search py-2 px-4 rounded" placeholder="Search" type="search" />
                                <button>
                                    <i className="bi bi-search"></i>
                                </button>
                            </div>
                            <p className="cursor-pointer">EN<i className="bi bi-arrow-down-short"></i></p>
                            <i className="bi bi-door-open icons md:hidden"></i>
                            <button className="hidden sign-in-btn md:block px-6 py-1 rounded">sign in</button>
                            <i className={`${menuHamburger ? ("bi bi-x-lg") : ("bi bi-justify")} icons hamburger-menu xl:hidden`} onClick={() => setMenuHamburger(!menuHamburger)}></i>
                        </div>
                    </nav>
                </div>
            </header>

            <div className="mobile-menu xl:hidden">
                <nav>
                    <ul className="text-white">
                        <li className="p-5">home<i className="bi bi-arrow-down-short"></i></li>
                        <li className="p-5">catalog<i className="bi bi-arrow-down-short"></i></li>
                        <li className="p-5">pricing plan</li>
                        <li className="p-5">...</li>
                    </ul>
                </nav>
            </div>
            <div className={`shadow ${menuHamburger ? ("active") : ("deActive")}`}></div>
        </>
    );
}

export default Header;