import logo from './logo.svg';
import './App.css';
import { useState} from 'react';



function Laskuri() {
    // State muuttujat! Vain näissä voidaan "säilyttää" data!
    const [arvo, setArvo] = useState(0);

    const kasvata = () => {
        // Huomaa miten state-muuttuja päivitetään 
               
            setArvo(arvo+1);
        console.log("kasvata-funktio kutsuttu")
    }
    const nollaa = () => { 
            setArvo(0);
        console.log("nollaa-funktio kutsuttu")
    }

    return (
        <div>
            <h1 style={{ color: 'red'}}>Laskuri</h1>
            
            <button onClick={() => kasvata()}>Kasvata</button>
            <br></br>
            <br></br>
            <button onClick={() => nollaa()}>Nollaa</button>
            {//<h1 style={{color: arvo >= 10 ? "red" : "black", fontWeight: arvo >= 10 ? "bold" : "normal"}} >Laskuri on {arvo}</h1>
            }
            <Arvo arvo={arvo} />
        </div>
    )
}

const Arvo = (props) => {

    console.log("arvo", props)
    return (
      <div>
        <h1 style={{color: props.arvo >= 10 ? "red" : "black", fontWeight: props.arvo >= 10 ? "bold" : "normal"}} >Laskuri on {props.arvo}</h1>
      </div>
    );
  }

export {Laskuri, Arvo};