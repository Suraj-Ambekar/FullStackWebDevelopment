
function Card(prop){
    let badgeText;
    if (prop.item.openSpot === 0) {
        badgeText = "SOLD OUT";
    }else if (prop.item.location === "Online") {
        badgeText = "ONLINE";
    }
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
            {/* {prop.openSpot ===0 ? <div className="card-badge">SOLD OUT</div> : <div className="card-badge">ONLINE</div>} */}
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img className="card-img" src={prop.item.coverImg} alt="png" />
            <div>
                <img className="star" src="./images/star.png" alt="start"/>
                <span>{prop.item.stats.rating}</span>
                <span className="gray">({prop.item.stats.reviewCount})</span>
                <span className="gray">{prop.item.location}</span>
            </div>
            <p className="desc">{prop.item.description}</p>
            <p className="price"><span className="bold">From ${prop.item.price}</span> / person</p>
        </section>
    )
}

export default Card