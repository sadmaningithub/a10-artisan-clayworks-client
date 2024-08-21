import { useEffect, useState } from "react";
import Item from "../Item/Item";


const FeaturedItems = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => {
                setItems(data)
            })
    }, [])

    return (
        <div className="my-10 text-center font-bold space-y-10">
            <h1 className="text-4xl">Featured Items: {items.length}  </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    items.map(item => <Item key={item._id} item={item}></Item>)
                }
            </div>
        </div>
    );
};

export default FeaturedItems;