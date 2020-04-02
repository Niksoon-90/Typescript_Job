import React, {useEffect, useState} from "react";
import {useHistory} from 'react-router-dom'
import {ITodo} from "../components/interfaces";

export const ABoutPage: React.FC = () => {
    const history = useHistory();
    let [exist, setExist] = useState<number>(0);
    let [noexist, setNoexist] = useState<number>(0);

    useEffect(() => {
        const saveds = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
        saveds.filter(item => {
            if(item.completed === true){
                setExist(exist += 1);
            } else {
                setNoexist( noexist += 1);
            }
        })
    }, [])
    return(
    <>
        <h1>Информация по списку дел</h1>
        <p>Кол-во выполненных задач: {exist}</p>
        <p>Кол-во не законченных задач: {noexist}</p>
        <button className="btn" onClick={() => history.push('/')}>Список дел</button>
        </>
    )
}