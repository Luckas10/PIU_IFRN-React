import './Info1V.css'
import { useState } from 'react'

export default function Info1V() {
    // let value = 0
    let [valueSum, setValueSum] = useState(0)
    let [valueMul, setValueMul] = useState(2)

    function numeric() {
        let aux = valueMul * 2
        setValueMul(aux)
    }

    return (
        <>
            <div className='buttonsClicks'>
                <h3>Click the button below to add +1</h3>
                <button className="btnClicks" onClick={() => {setValueSum(valueSum+1)}}>Clicks {valueSum}</button>
                <h3>Click the button below to multiply by 2</h3>
                <button className="btnClicks" onClick={numeric}>Clicks {valueMul}</button>
            </div>
        </>
    )
}