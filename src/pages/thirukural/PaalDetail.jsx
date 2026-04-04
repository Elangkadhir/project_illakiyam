import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPaalKurals } from "../../services/kuralServices";

function PaalDetail() {
    const { id } = useParams();
    const [list, setList] = useState([]);

    useEffect(() => {
        getPaalKurals(id).then(setList);
    }, [id]);

    return (
        <div className="grid md:grid-cols-2 gap-6">
            {list.map((item) => (
                <div key={item.id} className="p-5  rounded-xl shadow">
                    <p className="text-sm">குறள் #{item.id}</p>
                    <h2 className="whitespace-pre-line">
                        {item.kural.replace("$", "\n")}
                    </h2>
                </div>
            ))}
        </div>
    );
}

export default PaalDetail;