import { BsCurrencyDollar } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Item = ({ item }) => {
    
    // console.log(typeof item)

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
                        <div className="badge text-white bg-green-500 ">{stockInfo}</div>
                    </h2>
                    <p className="flex flex-row items-center gap-1" > {rate} <FaStar /></p>
                    <div className="card-actions flex items-center justify-between">
                        <h4 className="text-lg flex flex-row items-center "> <BsCurrencyDollar /> {itemPrice}   </h4>
                        <Link to={`/details/${_id}`}> <button className="btn">View Details</button> </Link>
                        {/* <button className="btn"></button> */}
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;

Item.propTypes = {
    item: PropTypes.object.isRequired
}