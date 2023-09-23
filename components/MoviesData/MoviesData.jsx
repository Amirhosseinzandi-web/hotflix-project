"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"




const MoviesData = () => {
    const [filmsData, setFilmsData] = useState([])
    const [filmsDataAllFilter, setFilmsDataAllFilter] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [MobilesMovieBtnFilterToggle, setMobilesMovieBtnFilterToggle] = useState(false)




    useEffect(() => {

        const getData = async () => {
            setLoading(true)

            try {
                const data = await fetch("https://moviesapi.ir/api/v1/movies?page={page}")
                const response = await data.json()
                setFilmsData(response.data)
                setFilmsDataAllFilter(response.data)
                setLoading(false)
            }
            catch (error) {
                setError(true)
                setLoading(false)
            }
        }
        getData()
    }, [])


    const MobileMoviesHandler = useCallback((e) => {
        setMobilesMovieBtnFilterToggle(!MobilesMovieBtnFilterToggle)
        e.stopPropagation()
    }, [MobilesMovieBtnFilterToggle])

    useEffect(() => {
        window.addEventListener("click", () => {
            if (MobilesMovieBtnFilterToggle === true) {
                setMobilesMovieBtnFilterToggle(false)
            }
        })
    }, [MobilesMovieBtnFilterToggle])



    const MovieFilterHandler = async (e) => {
        document.querySelector(".movie-items").style.transition = `0s`;
        document.querySelector(".movie-items").style.opacity = `0`;
        e.target.parentElement.parentElement.querySelectorAll("a").forEach(el=>{
            el.classList.remove("pointer-events-none")
        })
        e.target.classList.add("pointer-events-none");
        if(window.matchMedia("(min-width:768px)".match)){
            e.target.parentElement.parentElement.querySelectorAll("span").forEach(el=>{
                el.style.opacity = `0`;
                el.parentElement.style.color = `white`
            })
            e.target.parentElement.querySelector("span").style.opacity = `1`
            e.target.parentElement.style.color = `#DD9904`
        }
        let _innerText = e.target.innerText;

        switch (_innerText) {
            case "ALL": {
                setFilmsData(filmsDataAllFilter);
            } break;

            case "ABOVE 9.0": {
                setFilmsData(filmsDataAllFilter.filter(items => items.imdb_rating >= 9.0));
            }; break;

            case "BETWEEN 9 AND 8": {
                setFilmsData(filmsDataAllFilter.filter(items => items.imdb_rating < 9.0 && items.imdb_rating > 8.0));
            }; break;
        }
        await new Promise((resolve) => setTimeout(resolve, 400))
        document.querySelector(".movie-items").style.transition = `0.4s ease`
        document.querySelector(".movie-items").style.opacity = `1`

    }



    return (
        <>
            <section className="content__head text-white">
                <h1>New items</h1>
                <p onClick={MobileMoviesHandler} className="mt-3 flex md:hidden">NEW RELEASES <i className={`${MobilesMovieBtnFilterToggle ? ("bi bi-x-lg icons") : ("bi bi-filter-left")}`}></i></p>
                <div className={`mobile-filter-box md:hidden ${MobilesMovieBtnFilterToggle ? ("mobile-filter-box-show") : ("mobile-filter-box-hide")}`}>
                    <ul>
                        <li><a className="pointer-events-none" onClick={MovieFilterHandler}>ALL</a></li>
                        <li><a onClick={MovieFilterHandler}>ABOVE 9.0</a></li>
                        <li><a onClick={MovieFilterHandler}>BETWEEN 9 AND 8</a></li>
                    </ul>
                </div>

                <div className="desktop-filter-box hidden md:block mt-3">
                    <ul className="flex w-[50%] gap-16">
                        <li>
                            <a onClick={MovieFilterHandler}>ALL</a>
                            <span></span>
                        </li>

                        <li>
                            <a onClick={MovieFilterHandler}>ABOVE 9.0</a>
                            <span></span>
                        </li>

                        <li>
                            <a onClick={MovieFilterHandler}>BETWEEN 9 AND 8</a>
                            <span></span>
                        </li>

                    </ul>
                </div>
            </section>

            <p className="text-white">{loading && ("loading...")}</p>
            <p className="text-rose-400">{error && ("an error occured")}</p>


            <section className="movie-items flex flex-wrap justify-evenly gap-3 mt-5">

                {
                    filmsData && filmsData.map(items => (
                        <div key={items.id} className="text-white flex flex-col w-[45%] sm:w-[30%] md:w-[23%] lg:w-[18%]">
                            <figure className=" rounded-md overflow-hidden">
                                <Image src={items.poster} width={200} height={200} alt={items.title} property="true" />
                            </figure>
                            <figcaption className="py-2">{items.title}</figcaption>
                            <p>{items.genres.join(" , ")}</p>
                            <span className={`imdb-rate ${items.imdb_rating >= 9.0 && ("imdb-rate-border-green") || items.imdb_rating > 8.8 && ("imdb-rate-border-yellow") || items.imdb_rating <= 8.8 && ("imdb-rate-border-red")}`}>{items.imdb_rating}</span>
                        </div>
                    ))

                }

            </section>
        </>
    );
}

export default MoviesData;