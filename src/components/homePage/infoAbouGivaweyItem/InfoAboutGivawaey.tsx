import React from "react";
import InfoLaouyt from "./dataInfo";
import './infoAboutGivaweyItem.scss';

const InfoAboutGivaweyItem: React.FC = () => {
    
    return (
        <section className="InfoAboutGivawey">
            <article className="container info">
                {InfoLaouyt.map((el,idx) => (
                    <div key={idx} className="infoContainer">
                        <h2>{el.num}</h2>
                        <h3>{el.heading}</h3>
                        <p>{el.info}</p>
                    </div>
                ))}
            </article>
        </section>
    )
}

export default InfoAboutGivaweyItem;