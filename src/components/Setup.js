import '../css/Setup.css'
import {Link} from 'react-router-dom';
import { useState } from 'react';   


function Setup(props){
    const [room, setRoom] = useState(0)

    function hostRoom(e){
      
    }
    function joinRoom(e){
       
    }
    function changeRoom(e){
        setRoom(e.target.value);
    }

    function maxLengthCheck(e){

    }

    return(
        <div id="setup-div"> 
                <h1>Jeopardio</h1>
                <div id="form">
                <form>
                    <h4>{room}</h4>
                    <h4>{props.error}</h4>
                    <input onChange={changeRoom} max = "999" min ="000" type="number"></input>
                    <div id="button-div">
                        <Link onClick={hostRoom} to= "/game"> host game </Link>
                        <Link onClick={joinRoom} to= "/game"> join game</Link>
                    </div>
                </form>
                </div>
        </div>
    )
}

export default Setup