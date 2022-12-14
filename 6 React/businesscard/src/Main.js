function Main(){
    return(
        <div className="main">
            <div className="overview">
                <span className="name">Suraj Ambekar</span>
                <span className="post">Frontend Developer</span>
                <span className="website">surajambekar.showwcase.com/</span>
                <div className="buttons">
                    <button className="btn" id="email">Email</button>
                    <button className="btn">LinkedIn</button>
                </div>
            </div>
            <div className="about">
                <h3>About</h3>
                <p style={{marginBottom: "0.9rem"}}>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                <h3>Interests</h3>
                <p>Food expert, Music scholar, Reader, Internet fanatic, Bacon buff, Entrepreneur, Travel geek, Pop culture ninja, Milk fanatic.</p>

            </div>
        </div>
    )
}

export default Main