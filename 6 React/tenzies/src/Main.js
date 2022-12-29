import Die from "./Die"
import {useState, useEffect} from 'react'
import {nanoid} from 'nanoid'
import Confetti from 'react-confetti'

function Main(){
    const [dice, setDice] = useState(allNewDice())
    function allNewDice() {
        const newDieValue = [];
        for (let i=0; i<10; i++){
            newDieValue.push({value: Math.ceil(Math.random()*6), isHeld: false, id: nanoid()});
        }
        return newDieValue;
    }

    function generateNewDie(){
        return {value: Math.ceil(Math.random()*6), isHeld: false, id: nanoid()}
    }

    function rollDice(){
        if(!tenzies){
           setDice(oldDice => oldDice.map(die => {
            return die.isHeld ? die : generateNewDie()
        })) 
        }else {
            setTenzies(false)
            setDice(allNewDice())
        }
        
    }

    function holdDice(id){
        setDice(oldDice => oldDice.map(die =>{
            return die.id === id ? {...die, isHeld: !die.isHeld} : die
        }))

    }

    const [tenzies, setTenzies] = useState(false)

    useEffect(()=> {
        const allHeld = dice.every(die => die.isHeld)
        const firstValue = dice[0].value
        const allSameValue = dice.every(die => die.value === firstValue)
        if (allHeld && allSameValue){
            setTenzies(true)
            alert("You Won!");
        }
        
    }, [dice])

    const diceElements =dice.map(die => <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={()=> holdDice(die.id)}/>)

    

    return(
        <main className="main">
            {tenzies && <Confetti className="con" />}
            <h1 className="heading">Tanzies</h1>
            <p className="para">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="container">
                {/* < Die /> */}
                {/* < Die value="1" />
                < Die value="2" />
                < Die value="3" />
                < Die value="4" />
                < Die value="5" />
                < Die value="6" />
                < Die value="4" />
                < Die value="2" />
                < Die value="4" />
                < Die value="5" /> */}
                {diceElements}
            </div>
            <button onClick={rollDice} className="btn">{tenzies ? "New Game": "Roll"}</button>            
        </main>
    )
}

export default Main