
function Die(props) {
    const styles ={
        backgroundColor : props.isHeld ? "#59E391" : "#FFFFFF"
    }

    return(
        // <div>
        //     <div className="die">
        //         <div class="sub-die">1</div>
        //         <div class="sub-die">2</div>
        //         <div class="sub-die">3</div>
        //         <div class="sub-die">4</div>
        //         <div class="sub-die">5</div>
        //         <div class="sub-die">6</div>
        //         <div class="sub-die">4</div>
        //         <div class="sub-die">2</div>
        //         <div class="sub-die">2</div>
        //         <div class="sub-die">3</div>
        //     </div>
        // </div>
        <div className="die" style={styles} onClick={props.holdDice}>
            <h2 className="die-num">{props.value}</h2>
        </div>
    )
}

export default Die