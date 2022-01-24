import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function Lista() {
    const opiskelijat = [
        { etunimi: 'Mimmi', sukunimi: 'Mielikäinen', aloitusvuosi: '2019' },
        { etunimi: 'Veera', sukunimi: 'Virmajoki', aloitusvuosi: '2020' },
        { etunimi: 'Verneri', sukunimi: 'Virtanen', aloitusvuosi: '2021' },
        { etunimi: 'Lilli', sukunimi: 'Puttinen', aloitusvuosi: '2022' }
    ];

    return (
        <div>
            <h1>Lista</h1>
            <ul>
                {opiskelijat.map((op) => <Rivi etunimi={op.etunimi} sukunimi={op.sukunimi} aloitusvuosi={op.aloitusvuosi} />)}
            </ul>
        </div>
    );

}

const Rivi = (props) => {
    return (
        <div>
            <li>{props.etunimi}, {props.sukunimi}, {props.aloitusvuosi}</li>
        </div>
    );
}








function Teht6() {


    const [visible, setVisible] = useState(true);



    const data = [
        { nimi: 'Mimmi', osoite: 'Mielitie 3', aloitusvuosi: '2019' },
        { nimi: 'Veera', osoite: 'Virmatie 7', aloitusvuosi: '2020' },
        { nimi: 'Verneri', osoite: 'Virtakuja 8', aloitusvuosi: '2021' },
        { nimi: 'Lilli', osoite: 'Puttipolku 9', aloitusvuosi: '2022' }
    ];
    const otsikot = [
        { nimi: 'NIMI', osoite: 'OSOITE', aloitusvuosi: 'ALOITUSVUOSI' }
    ];
    const otsikotENG = [
        { nimi: 'NAME', osoite: 'ADDRESS', aloitusvuosi: 'START' }
    ];



    return (
        <div>

            <button onClick={() => setVisible(!visible)}>{visible ? 'Piilota' : 'Näytä'}</button>
            {visible && <div><Taulukko otsikot={otsikot} data={data} />
                <Taulukko otsikot={otsikotENG} data={data} /></div>}

        </div>
    )
}

function Taulukko(props) {
    console.log("konsoliin propsit:", props);
    let o = props.otsikot || [];
    let d = props.data || [];

    return (
        <div>
            <h1 style={{ color: 'green' }}>Taulukko</h1>
            <table>
                <Otsikko otsikot={o} />
                <TauluRivi data={d} />
            </table>
        </div>
    );

}
const Otsikko = (props) => {
    console.log("otsikkoprops:", props)
    const otsikot = props.otsikot.map((ots, index) => {
        return (


            <tr key={index}>
                <th style={{ color: 'orange' }}>
                    {ots.nimi}
                </th>
                <th style={{ color: 'red' }}>
                    {ots.osoite}
                </th>
                <th style={{ color: 'brown' }}>
                    {ots.aloitusvuosi}
                </th>
            </tr>

        )
    }
    )
    return <thead>{otsikot}</thead>
}

const TauluRivi = (props) => {
    console.log("tauluriviprops:", props)
    const rivit = props.data.map((riv, index) => {
        return (
            <tr key={index}>
                <td>{riv.nimi}</td>
                <td>{riv.osoite}</td>
                <td>{riv.aloitusvuosi}</td>
            </tr>
        )
    })

    return <tbody>{rivit}</tbody>

}

export { Lista, Rivi, Teht6, Taulukko, Otsikko, TauluRivi};