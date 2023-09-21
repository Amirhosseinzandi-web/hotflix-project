"use client"

const getData = async () => {
    const data = await fetch("https://moviesapi.ir/api/v1/movies?page={page}")
    return data.json()
}





const MoviesData = async () => {
    const { data } = await getData()
    console.log(data[0]);
    return (
        <>
            <section className="content__head text-white mt-5">
                <h1>New items</h1>
                <p className="mt-3">NEW RELEASES <i className="bi bi-filter-left"></i></p>
            </section>

            <section className="movie-items">
                <h4 className="text-white">hiiiii</h4>
            </section>
        </>
    );
}

export default MoviesData;