import Swal from 'sweetalert2'

const AddItem = () => {

    const handleAdd = e => {
        e.preventDefault()
        const form = e.target
        // console.log(form)
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
        const newItem = { itemName, subCategory, itemPrice, description, imageUrl, rate, custom, processTime, stockInfo, mail, name }
        console.log(newItem)

        fetch('http://localhost:5000/items', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newItem)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                Swal.fire({
                    title: 'Success',
                    text: 'Items added successfully',
                    icon: 'success',
                    confirmButtonText: 'Done'
                })
            })
    }

    return (
        <div className="my-10">

            <h1 className="text-3xl font-bold text-center my-10">Add Product</h1>

            <form onSubmit={handleAdd} className="">

                <div className="max-w-3xl mx-auto space-y-5">

                    <div className="">
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Name</span>
                            </div>
                        </label>
                        <input type="text" placeholder="Type here" name="item_name" className="input input-bordered w-full" />
                    </div>

                    <div>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Subcategory</span>
                            </div>
                        </label>
                        <input type="text" placeholder="Type here" name="sub_category" className="input input-bordered w-full" />
                    </div>

                    <div>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Price</span>
                            </div>
                        </label>
                        <input type="text" placeholder="Type here" name="price" className="input input-bordered w-full" />
                    </div>

                    <div>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Description</span>
                            </div>
                        </label>
                        <input type="text" placeholder="Type here" name="description" className="input input-bordered w-full" />
                    </div>

                    <div>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Image</span>
                            </div>
                        </label>
                        <input type="url" placeholder="Type here" name="image" className="input input-bordered w-full" />
                    </div>

                    <div>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Rating</span>
                            </div>
                        </label>
                        <input type="Text" placeholder="Type here" name="rating" className="input input-bordered w-full" />
                    </div>

                    <div>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Customization</span>
                            </div>
                        </label>
                        <input type="text" placeholder="Type here" name="customization" className="input input-bordered w-full" />
                    </div>

                    <div>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Processing Time</span>
                            </div>
                        </label>
                        <input type="text" placeholder="Type here" name="time" className="input input-bordered w-full" />
                    </div>

                    <div>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Stock</span>
                            </div>
                        </label>
                        <input type="text" placeholder="Type here" name="stock" className="input input-bordered w-full" />
                    </div>

                    <div>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">User Email</span>
                            </div>
                        </label>
                        <input type="email" placeholder="Type here" name="email" className="input input-bordered w-full" />
                    </div>

                    <div className="">
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">User Name</span>
                            </div>
                        </label>
                        <input type="text" placeholder="Type here" name="user_name" className="input input-bordered w-full" />
                    </div>

                    <div className="flex justify-center">
                        <input type="submit" value="Add Product" className="btn btn-neutral px-6" />
                    </div>
                </div>

            </form>
        </div>
    );
};

export default AddItem;