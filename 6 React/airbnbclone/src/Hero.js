import photogrid from './photo-grid.png'

function Hero() {
    return (
        <section className="hero">
            <img src={photogrid} alt="photogrid" className="photogrid"/>
            <h1 className="heading">Online Experience</h1>
            <p className="para">Join unique interactive activites led by
            one-of-a-kind hosts--all without leaving
            home.</p>
        </section>
    )
}

export default Hero