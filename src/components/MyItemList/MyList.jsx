import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyListItems from "../MyListItems/MyListItems";


const MyList = () => {

    const { user } = useContext(AuthContext) || {}

    // console.log(typeof user?.email);

    const [myList, setMyList] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/user/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)


                setMyList(data)


                // console.log(myList);
            })
    }, [user])

    // console.log(myList);

    return (
        <div className="text-center my-10">
            <h1 className="text-3xl font-bold">My Art&Craft List</h1>

            {/* {
                myList.map(item => <MyListItems item={item} key={item._id}></MyListItems>)
            } */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                {
                    myList?.map(item => <MyListItems item={item} key={item._id}></MyListItems>)
                }
            </div>

        </div>
    );
};

export default MyList;