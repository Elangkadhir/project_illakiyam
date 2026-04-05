import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getKuralById } from "../../services/kuralServices";
import { Scroll } from "lucide-react";

function KuralDetail() {
    const { id } = useParams();
    const [kural, setKural] = useState(null);

    useEffect(() => {
        getKuralById(id).then(setKural);
    }, [id]);

    if (!kural) return <p>Loading...</p>;

    return (
        <div className="max-w-2xl mx-auto p-6  rounded-2xl shadow">
            <p className="flex items-center gap-2 text-sm  mb-3">
                <Scroll size={16} className="text-purple-600" /> குறள் #{kural.id}
            </p>

            <h2 className="text-2xl font-bold whitespace-pre-line leading-loose">
                {kural.kural.replace("$", "\n")}
            </h2>
        </div>
    );
}

export default KuralDetail;