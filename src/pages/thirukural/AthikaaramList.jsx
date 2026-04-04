import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllAthikaaram } from "../../services/kuralServices";

function AthikaaramList() {
    const [list, setList] = useState([]);

    useEffect(() => {
        getAllAthikaaram().then(setList);
    }, []);
    console.log(list)
    return (
        <div className="grid md:grid-cols-3 gap-6">
            {list.map((item) => (
                <Link to={`/thirukural/athikaaram/${item.id}`} key={item.id}>
                    <div className="p-5  rounded-xl shadow hover:scale-105 transition">
                        <h2 className="font-semibold">{item.athikaaram}</h2>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default AthikaaramList;