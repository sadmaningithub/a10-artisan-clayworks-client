
import { Link, useLoaderData } from "react-router-dom";


const AllItems = () => {

    const allItems = useLoaderData();

    // console.log(allItems)

    return (
        <div className="text-center my-10 space-y-5">
            <h1 className="text-3xl font-bold">All Art & Craft Items</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="">
                        <tr className="">
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Stock Info</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {/* row 1 */}
                        {/* <tr className="hover">
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>Purple</td>
                        </tr> */}
                        {
                            allItems.map(item =>
                                <tr className="hover" key={item._id} >
                                    <th> <img src={item.imageUrl} className="max-w-xs" alt="" /> </th>
                                    <td>{item.itemName}</td>
                                    <td className="">{item.itemPrice}  </td>
                                    <td>{item.itemStock}</td>
                                    <td><Link to={`/details/${item._id}`}> <button className="btn">View Details</button> </Link></td>
                                </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllItems;