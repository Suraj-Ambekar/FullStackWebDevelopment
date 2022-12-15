
function Card(prop){
    return(
        // <section className="card">
        //     <img className="card-img" src="./images/katie-zaferes.png" alt="png" />
        //     <div>
        //         <img className="star" src="./images/star.png" alt="start"/>
        //         <span>5.0</span>
        //         <span className="gray">(6)</span>
        //         <span className="gray">USA</span>
        //     </div>
        //     <p className="desc">Life lessons with Katie Zaferes</p>
        //     <p className="price"><span className="bold">From $136</span> / person</p>
        // </section>
        <section className="card">
            <img className="card-img" src={prop.img} alt="png" />
            <div>
                <img className="star" src={prop.star} alt="start"/>
                <span>{prop.rating}</span>
                <span className="gray">{prop.high}</span>
                <span className="gray">{prop.location}</span>
            </div>
            <p className="desc">{prop.dec}</p>
            <p className="price"><span className="bold">From ${prop.price}</span> / person</p>
        </section>
    )
}

export default Card