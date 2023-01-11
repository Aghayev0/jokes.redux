import axios from "axios";
import "components/Card/card.css"
import { BASE_URL } from "consts";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addJokeToFavorites, changeJokes } from "redux/slice/jokesSlice";
import { getJokes } from "service/getJokes";
const Card = () => {
    const [jokes, setJokes] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const dispatch = useDispatch()
    useEffect(() => {
        getJokes().then((res) => {
            if (res.status === 200) {
                setJokes(res.data);
                setLoading(false);

            }
        }, 3000);
    }, []);
    if (isLoading) {
        return (
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
            }}><div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div></div>
        );
    }
    return (

        <div class="container">
            <div class="content">
                <h1>{jokes.value}</h1>
                <div className="btns">
                    <button onClick={() => {
                        axios.get(BASE_URL).then(res => {
                            setJokes(res.data)
                        })
                    }}>❌</button>
                    <button onClick={() => {
                        dispatch(addJokeToFavorites(jokes))
                        axios.get(BASE_URL).then(res => {
                            setJokes(res.data)
                        })
                    }}>✓</button>
                </div>

            </div>
            <div class="flap"></div>
        </div>

    )
}

export default Card