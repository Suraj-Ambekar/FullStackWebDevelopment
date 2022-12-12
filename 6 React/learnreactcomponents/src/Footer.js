const Footer = ()=>{
    // created new Date object
    let date = new Date();
    return (
        <footer>
            <p>
                {/* accessed full year info using Date methods */}
                Copyright &copy; {date.getFullYear()}
            </p>
        </footer>
    );
}

export default Footer