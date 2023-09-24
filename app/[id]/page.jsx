import Image from "next/image";

const getData = async (id) => {
    const data = await fetch(`https://moviesapi.ir/api/v1/movies/${id}`)
    return await data.json()
}

const page = async ({ params }) => {
    const { id } = params;
    const data = await getData(id);
    return (
        <section className="w-full content py-9">
            <div className="bg bg-details"></div>
            <div className="container mx-auto px-4">
                <article className="article-details flex flex-wrap gap-2">
                    <div className="article-details-left  w-full flex flex-wrap xl:w-[48%]">
                        <section className="text-white w-full md:w-[50%] lg:w-[35%] xl:w-[45%]">
                            <h1>{data.title}</h1>
                            <figure className="rounded-md my-3">
                                <Image priority={true} width={250} height={370} src={data.poster} alt={data.title} />
                            </figure>
                            <div className="watch-trailer-btn rounded-md flex justify-center">
                                <div className="flex py-2">
                                    <i className="bi bi-play-circle-fill"></i>
                                    <p className="mx-2">WATCH TRAILER</p>
                                </div>
                            </div>
                        </section>

                        <section className="mt-3 w-full md:w-[50%] lg:w-[65%] xl:w-[55%] flex flex-col justify-between">
                            <div className="text-white w-[80%] sm:w-[60%] lg:mt-[38px] lg:w-full">
                                <p>Director: {data.director}</p>
                                <p>Actors: <span>{data.actors}</span></p>
                                <p>Genre: <span>{data.genres.join(" , ")}</span></p>
                                <p>Release year: {data.released}</p>
                                <p>Running time: {data.runtime}</p>
                                <p>Country: <span>{data.country}</span></p>
                                <p>Awards: <span>{data.awards}</span></p>
                                <p>Imdb rate: {data.imdb_rating}</p>
                            </div>

                            <div className="summary rounded-md p-4 sm:w-[80%] lg:w-full">
                                <p className="text-white pr-2">{data.plot}</p>
                            </div>

                        </section>

                    </div>

                    <div className="article-details-right w-[80%] mx-auto xl:mx-0 xl:w-[48%]">
                        <div className="text-white h-full other-pic rounded-md flex justify-between flex-wrap gap-3">

                            <div className="w-[47%] h-[50%]">
                                <figure>
                                    <Image priority={true} width={500} height={500} alt={data.title} src={data.images[0]} />
                                </figure>
                            </div>

                            <div className="w-[47%] h-[50%]">
                                <figure>
                                    <Image priority={true} width={500} height={500} alt={data.title} src={data.images[1]} />
                                </figure>
                            </div>

                            <div className="w-full h-[50%]">
                                <figure>
                                    <Image priority={true} width={500} height={500} alt={data.title} src={data.images[2]} />
                                </figure>
                            </div>


                        </div>
                    </div>

                </article>
            </div>

        </section>
    );
}

export default page;