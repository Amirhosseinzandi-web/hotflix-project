"use client"

import { useEffect, useState } from "react"
import Image from "next/image"




const MoviesData = () => {
    const [filmsData, setFilmsData] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        const getData = async () => {
            setLoading(true)

            try {
                const data = await fetch("https://moviesapi.ir/api/v1/movies?page={page}")
                const response = await data.json()
                setFilmsData(response.data)
                setLoading(false)
            }
            catch (error) {
                setError(true)
                setLoading(false)
            }
        }
        getData()
    }, [])


    return (
        <>
            <section className="content__head text-white">
                <h1>New items</h1>
                <p className="mt-3">NEW RELEASES <i className="bi bi-filter-left"></i></p>
            </section>

            <p className="text-white">{loading && ("loading...")}</p>
            <p className="text-rose-400">{error && ("an error occured")}</p>


            <section className="movie-items flex flex-wrap justify-evenly gap-3">

                {
                    filmsData && filmsData.map(items => (
                        <div key={items.id} className="text-white flex flex-col w-[45%] sm:w-[30%] md:w-[23%] lg:w-[18%]">
                            <figure className=" rounded-md overflow-hidden">
                                <Image src={items.poster} width={200} height={200} alt={items.title} property="true" />
                            </figure>
                            <figcaption className="py-2">{items.title}</figcaption>
                            <p>{items.genres.join(" , ")}</p>
                            <span className={`imdb-rate ${items.imdb_rating>=9.0 && ("imdb-rate-border-green") || items.imdb_rating>8.8 && ("imdb-rate-border-yellow") || items.imdb_rating<=8.8 && ("imdb-rate-border-red")}`}>{items.imdb_rating}</span>
                        </div>
                    ))

                }

            </section>
        </>
    );
}

export default MoviesData;