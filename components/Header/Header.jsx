"use client"


import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { Api } from "../Context/Context";


const Header = () => {
    const { filmsData, setSearchStatus } = useContext(Api);

    const [menuHamburger, setMenuHamburger] = useState(false)
    const [dropDownMenu, setDropDownMenu] = useState(false)
    const [searchHandler, setSearchHandler] = useState("")


    useEffect(() => {
        let _mobileMenu = document.querySelector(".mobile-menu");
        if (menuHamburger) {
            _mobileMenu.style.right = "0%";
        } else {
            _mobileMenu.style.right = "-60%";
        }

    }, [menuHamburger])

    const HeaderOpenBtn = () => {
        document.querySelector(".parent-search-mobile").classList.remove("header__search-close-btn")
    }

    const HeaderCloseBtn = () => {
        document.querySelector(".parent-search-mobile").classList.add("header__search-close-btn")
    }

    const DropDownMenuToggleHandler = (e) => {
        setDropDownMenu(!dropDownMenu);
        e.stopPropagation()
    }

    useEffect(() => {

        window.addEventListener("click", () => {
            if (document.querySelector(".dropDownMenuBox").classList.contains("dropDownMenuBox-show")) {
                setDropDownMenu(false)
            }
        })

    }, [dropDownMenu])



    useEffect(() => {
        document.querySelectorAll(".movie-items>div").forEach(items => {
            let _figCaption = items.children[1]
            if (_figCaption.innerText.toLowerCase().includes(searchHandler.toLowerCase())) {
                items.style.display = "flex";
                setSearchStatus(false)
            } else {
                items.style.display = "none";

            }
            if(document.querySelectorAll(".movie-items>div[style='display: flex;']").length===0){
                setSearchStatus(true);
            }
        })
        
    }, [searchHandler , filmsData])


    return (
        <>
            <header className="w-full header text-white">
                <div className="parent-search-mobile flex header__search-close-btn lg:hidden">
                    <div className="flex container mx-auto px-3">
                        <div className="w-[95%] relative">
                            <input className="px-6 py-2 w-full rounded lg:hidden" value={searchHandler} onChange={(e) => setSearchHandler(e.target.value)} type="search" placeholder="Search..." />
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
                    <nav className="mx-auto flex gap-9 py-3 px-4">
                        <div className="w-[60%] nav-left flex items-center">
                            <Link href={"/"}>
                                <h1 className="brand-name"><span>hot</span>flix</h1>
                            </Link>
                            <ul className="desktop-menu hidden text-white lg:flex justify-evenly w-full">
                                <li className="uppercase font">home<i className="bi bi-arrow-down-short"></i></li>
                                <li className="uppercase font">catalog<i className="bi bi-arrow-down-short"></i></li>
                                <li className="uppercase font">pricing plan</li>
                                <li className="dropDownMenuToggle relative" onClick={DropDownMenuToggleHandler}>...
                                    <div className={`dropDownMenuBox ${dropDownMenu ? ("dropDownMenuBox-show") : ("dropDownMenuBox-hidden")}`}>
                                        <div>
                                            <ul>
                                                <li>about</li>
                                                <li>profile</li>
                                                <li>contacts</li>
                                                <li>help center</li>
                                                <li>privacy policy</li>
                                                <li>admin pages</li>
                                                <li>sign in</li>
                                                <li>sign up</li>
                                                <li>forgot password</li>
                                                <li>404 page</li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="w-[40%] nav-right flex items-center justify-between">
                            <i className="bi bi-search icons lg:hidden" onClick={HeaderOpenBtn}></i>
                            <div className="hidden lg:flex form">
                                <input className=" inp-search py-2 px-4 rounded" value={searchHandler} onChange={(e) => setSearchHandler(e.target.value)} placeholder="Search" type="search" />
                                <button>
                                    <i className="bi bi-search"></i>
                                </button>
                            </div>
                            <p className="cursor-pointer">EN<i className="bi bi-arrow-down-short"></i></p>
                            <i className="bi bi-door-open icons md:hidden"></i>
                            <button className="hidden sign-in-btn md:block px-6 py-1 rounded">sign in</button>
                            <i className={`${menuHamburger ? ("bi bi-x-lg") : ("bi bi-justify")} icons hamburger-menu lg:hidden`} onClick={() => setMenuHamburger(!menuHamburger)}></i>
                        </div>
                    </nav>
                </div>
            </header>

            <div className="mobile-menu lg:hidden">
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