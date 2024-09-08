import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const Item = ({ item }) => {

    const { _id, itemName, itemPrice, imageUrl, rate, stockInfo} = item
    // console.log(_id)

    const handleDelete = _id =>{
        console.log(_id)
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
                if(data.deletedCount > 0){
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
                        <button onClick={() => handleDelete(_id)} className="btn">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;