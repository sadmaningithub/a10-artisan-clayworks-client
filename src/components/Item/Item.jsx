import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const Item = ({ item }) => {

    const { _id, itemName, itemPrice, imageUrl, rate, stockInfo} = item
    // console.log(_id)


    return (
        <div className="flex">
            <div className="card card-compact bg-base-100 shadow-xl ">
                <figure className="p-4">
                    <img
                        src={imageUrl}
                        alt="Product" />
                </figure>
                <div className="card-body text-left grow">
                    <h2 className="card-title flex-wrap">
                        {itemName}
                        <div className="badge ">{stockInfo}</div>
                    </h2>
                    <p>Rating: {rate}</p>
                    <div className="card-actions flex items-center justify-between">
                        <h4 className="text-lg">{itemPrice} </h4>
                        <Link to={`/details/${_id}`}>View Details</Link>
                        {/* <button className="btn"></button> */}
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;