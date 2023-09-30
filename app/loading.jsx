import Image from "next/image";


const loading = () => {
    return (
        <div className="native-loading">
            <Image priority={true} width={100} height={100} src={"/loading.gif"} alt="loading"/>
        </div>
    );
}

export default loading;