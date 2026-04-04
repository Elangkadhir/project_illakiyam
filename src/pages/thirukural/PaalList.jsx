import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllPaal } from "../../services/kuralServices";

function PaalList() {
    const [list, setList] = useState([]);

    useEffect(() => {
        getAllPaal().then(setList);
    }, []);
    console.log(list)
    return (
        <div className="grid md:grid-cols-3 gap-6">
            {list.map((item) => (
                <Link to={`/thirukural/paal/${item.id}`} key={item.id}>
                    <div className="p-5  rounded-xl shadow hover:scale-105 transition">
                        <h2 className="font-semibold text-lg">{item.paal}</h2>
                        <h2 className="font-semibold text-lg">{item?.athikaaram.count}</h2>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default PaalList;