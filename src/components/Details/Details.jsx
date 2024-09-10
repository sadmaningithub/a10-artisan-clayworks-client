import { useLoaderData } from "react-router-dom";


const Details = () => {

    const item = useLoaderData()
    // console.log(item)

    const { itemName, subCategory, itemPrice, description, imageUrl, rate, custom, processTime, stockInfo } = item

    return (
        <div className="space-y-10 my-10">
            <h1 className="text-3xl">Product Details</h1>
            <div className="flex flex-col lg:flex-row gap-16 ">
                <div className="lg:w-1/2 ">
                    <img className="w-full" src={imageUrl} alt="" />
                </div>
                <div className="lg:w-1/2 space-y-5 ">
                    <h1 className="text-3xl font-semibold" >{itemName}</h1>
                    <p className="text-lg">Category: <span className="text-blue-400">{subCategory}</span></p>
                    <h3 className="text-3xl font-semibold">{itemPrice}</h3>
                    <p className="text-lg">Stock: <span className="text-green-500">{stockInfo}</span></p>
                    <div className="flex flex-row space-x-3">
                        <button className="btn btn-neutral">Add to Cart</button>
                        <button className="btn btn-neutral">Wishlist</button>
                    </div>
                </div>
            </div>

            <div className="space-y-5">
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" defaultChecked/>
                    <div className="collapse-title text-xl font-medium">Description</div>
                    <div className="collapse-content">
                        <p>{description}</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">More Information</div>
                    <div className="collapse-content">
                        <p className="">Rating: {rate}</p>
                        <p className="">Processing Time: {processTime}</p>
                        <p className="">Customization: {custom}</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Details;