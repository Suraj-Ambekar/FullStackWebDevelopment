function Main(prop) {
    return (
        // <section className="main">
        //     <img src="./images/japan.jfif" alt="img"/>
        //     <div className="content">
        //         <span className="location">JAPAN</span> <a href="www.google.com">View on Google Maps</a>
        //         <h1 className="place">Mount Fuji</h1>
        //         <span className="start-date">12 Jan, 2021 - </span><span className="end-date">24 Jan, 2021</span>
        //         <p className="description">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
        //     </div>
        // </section>
        <section className="main">
            <img src={prop.item.img} alt="img"/>
            <div className="content">
                <span className="location">{prop.item.location}</span> <a href={prop.item.link}>View on Google Maps</a>
                <h1 className="place">{prop.item.place}</h1>
                <span className="start-date">{prop.item.startDate} - </span><span className="end-date">{prop.item.endDate}</span>
                <p className="description">{prop.item.description}</p>
            </div>
        </section>
    )
}

export default Main