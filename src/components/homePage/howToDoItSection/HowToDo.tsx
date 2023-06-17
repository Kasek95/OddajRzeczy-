import React from 'react';
import { Link } from 'react-router-dom';
import DataToDo from './howToDoData';
import './howToDo.scss'
const HowToDo: React.FC = () => {
    return (
        <section className='howToDo'>
            <div className='container howToDoCont'>
                <article className='howToDoContainer'>
                     {DataToDo.map((el,idx)=> (
                        <div key={idx} className='dataContainer'>
                            <img src={el.img} alt="Zdjęcie"/>
                            <p>{el.paragraf1}</p>
                            <hr></hr>
                            <p>{el.paragraf2}</p>
                        </div>
                     ))}
                </article>
                <button className='btn'><Link to='/OddajRzeczy'>Oddaj<br></br>Rzeczy</Link></button>
            </div>
        </section>
    )
}
export default HowToDo;