import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllKural } from "../../services/kuralServices";

function KuralList() {
    const [list, setList] = useState([]);

    useEffect(() => {
        getAllKural().then(setList);
    }, []);

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {list?.map((item) => (
                <Link to={`/thirukural/kural/${item.id}`} key={item.id}>
                    <div className="p-5 rounded-xl shadow  hover:scale-105 transition">
                        <p className="text-sm ">குறள் #{item.id}</p>
                        <h2 className="mt-2 whitespace-pre-line font-semibold">
                            {item.kural.replace("$", "\n")}
                        </h2>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default KuralList;