import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateItem = () => {

    const item = useLoaderData()

    const { _id, itemName, subCategory, itemPrice, description, imageUrl, rate, custom, processTime, stockInfo, mail, name } = item

    // console.log(item)

    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const itemName = form.item_name.value;
        const subCategory = form.sub_category.value;
        const itemPrice = form.price.value;
        const description = form.description.value;
        const imageUrl = form.image.value;
        const rate = form.rating.value;
        const custom = form.customization.value;
        const processTime = form.time.value;
        const stockInfo = form.stock.value;
        const mail = form.email.value;
        const name = form.user_name.value;
        const updatedItem = { itemName, subCategory, itemPrice, description, imageUrl, rate, custom, processTime, stockInfo, mail, name }
        console.log(updatedItem)
        fetch(`http://localhost:5000/items/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(updatedItem)
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Success',
                    text: 'Item Updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Done'
                })
            }
            else{
                Swal.fire({
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    icon: "error",
                    confirmButtonText: 'Try again'
                  });
            }
            
        })
        
    }

    return (
        <div className="text-center my-10 space-y-5" >

            <h1 className="text-3xl font-bold">Update Arts & Craft Item</h1>

            <form onSubmit={handleUpdate} className="">

                <div className="max-w-3xl mx-auto space-y-5">

                    <div className="">
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Name</span>
                            </div>
                        </label>
                        <input type="text" placeholder="Type here" name="item_name" defaultValue={itemName} className="input input-bordered w-full" />
                    </div>

                    <div>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Subcategory</span>
                            </div>
                        </label>
                        <input type="text" placeholder="Type here" name="sub_category" defaultValue={subCategory} className="input input-bordered w-full" />
                    </div>

                    <div>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Price</span>
                            </div>
                        </label>
                        <input type="text" placeholder="Type here" name="price" defaultValue={itemPrice} className="input input-bordered w-full" />
                    </div>

                    <div>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Description</span>
                            </div>
                        </label>
                        <input type="text" placeholder="Type here" name="description" defaultValue={description} className="input input-bordered w-full" />
                    </div>

                    <div>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Image</span>
                            </div>
                        </label>
                        <input type="url" placeholder="Type here" name="image" defaultValue={imageUrl} className="input input-bordered w-full" />
                    </div>

                    <div>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Rating</span>
                            </div>
                        </label>
                        <input type="Text" placeholder="Type here" name="rating" defaultValue={rate} className="input input-bordered w-full" />
                    </div>

                    <div>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Customization</span>
                            </div>
                        </label>
                        <input type="text" placeholder="Type here" name="customization" defaultValue={custom} className="input input-bordered w-full" />
                    </div>

                    <div>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Processing Time</span>
                            </div>
                        </label>
                        <input type="text" placeholder="Type here" name="time" defaultValue={processTime} className="input input-bordered w-full" />
                    </div>

                    <div>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Stock</span>
                            </div>
                        </label>
                        <input type="text" placeholder="Type here" name="stock" defaultValue={stockInfo} className="input input-bordered w-full" />
                    </div>

                    <div>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">User Email</span>
                            </div>
                        </label>
                        <input type="email" placeholder="Type here" name="email" defaultValue={mail} className="input input-bordered w-full" />
                    </div>

                    <div className="">
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">User Name</span>
                            </div>
                        </label>
                        <input type="text" placeholder="Type here" name="user_name" defaultValue={name} className="input input-bordered w-full" />
                    </div>

                    <div className="flex justify-center">
                        <input type="submit" value="Update Item" className="btn btn-neutral px-6" />
                        {/* <input onClick={handleReset} type="submit" value="Reset Form" className="btn btn-neutral px-6" /> */}
                    </div>
                </div>

            </form>
        </div>
    );
};

export default UpdateItem;