import { useLoaderData } from "react-router-dom";


const Details = () => {

    const item = useLoaderData()
    console.log(item)
    return (
        <div>
            {/* <h1>{item}</h1> */}
        </div>
    );
};

export default Details;