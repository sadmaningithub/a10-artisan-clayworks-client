import { useEffect, useState } from "react";


const FeaturedItems = () => {

    const [items, setItems] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/items')
        .then(res => res.json())
        .then(data => {
            setItems(data)
        })
    },[])

    return (
        <div className="my-10">
            <h1>Featured Items: {items.length}  </h1>
        </div>
    );
};

export default FeaturedItems;