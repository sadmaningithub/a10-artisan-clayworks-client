import { BsCurrencyDollar } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyListItems = ({ item }) => {

    const { _id, itemName, itemPrice, imageUrl, rate, custom, stockInfo } = item

    const handleDelete = _id => {
        // console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/items/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                        // console.log(data)
                    })
            }
        });

    }

    return (
        <div className="">
            <div className="card card-compact bg-base-100 shadow-xl ">
                <figure className="p-4">
                    <img
                        src={imageUrl}
                        alt="Product" />
                </figure>
                <div className="card-body text-left grow">
                    <h2 className="card-title flex-wrap">
                        {itemName}
                        <div className="badge text-white bg-green-500">{stockInfo}</div>
                    </h2>
                    <p className="flex flex-row items-center gap-1">{rate} <FaStar /></p>
                    <p>Customization: {custom}</p>
                    <div className="card-actions flex items-center justify-between">
                        <h4 className="font-bold text-lg flex flex-row items-center"><BsCurrencyDollar /> {itemPrice} </h4>
                        {/* <Link to={`/details/${_id}`}>View Details</Link> */}
                        <div className="flex flex-row gap-5">
                            <Link to={`/updateItem/${_id}`}> <button className="btn">Update</button>  </Link>
                            {/* <button className="btn">Delete</button> */}
                            <button onClick={() => handleDelete(_id)} className="btn">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyListItems;