

const Item = ({ item }) => {

    const { _id, itemName, subCategory, itemPrice, description, imageUrl, rate, custom, processTime, stockInfo, mail, name } = item
    console.log(_id)
    return (
        <div className="flex">
            <div className="card card-compact bg-base-100 shadow-xl ">
                <figure className="p-4">
                    <img
                        src={imageUrl}
                        alt="Product" />
                </figure>
                <div className="card-body grow">
                    <h2 className="card-title flex-wrap">
                        {itemName}
                        <div className="badge ">{stockInfo}</div>
                    </h2>
                    
                    <div className="card-actions flex items-center justify-between">
                        <h4 className="text-lg">{itemPrice} </h4>
                        <button className="btn">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;