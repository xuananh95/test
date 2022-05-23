import "./App.css";
import FoodCart from "./components/FoodCart";
import { useState, useEffect } from "react";

function App() {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetchData();
        console.log(data);
    }, []);
    const fetchData = async () => {
        const res = await fetch(
            "https://625a91bf0ab4013f94a2d9a8.mockapi.io/meals"
        );
        const res_json = await res.json();
        setData(res_json);
    };
    return (
        <div className="App">
            {data &&
                data.map((d) => (
                    <FoodCart
                        key={d.id}
                        name={d.name}
                        desc={d.desc}
                        price={d.price}
                        img={d.image}
                    />
                ))}
        </div>
    );
}

export default App;
