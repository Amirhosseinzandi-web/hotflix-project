import MoviesData from "@/components/MoviesData/MoviesData";

const page = () => {
  return (
    <section className="content">
      <div className="container mx-auto px-4 flex flex-col">
        <MoviesData />
      </div>
    </section>
  );
}

export default page;