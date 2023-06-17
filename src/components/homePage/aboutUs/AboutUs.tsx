import React from "react";
import "./aboutUs.scss";
import name from "../../../assets/Signature.svg"

const AboutUs: React.FC = () => {
    return (
        <section className="aboutUS">
            <article className="aboutUSContainer container">
                <div className="LeftSection">
                    <div className="leftSectionBox">
                        <h2 className="heading">O nas</h2>
                        <div className="decoration"></div>
                        <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                        <img src={name} alt="name"/>
                    </div>
                </div>
                <div className="rightSection"></div>
            </article>
        </section>
    )
}

export default AboutUs;