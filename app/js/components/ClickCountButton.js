import React, {useState} from "react";
import {Button} from 'bootstrap/js/dist/button';

export default function ClickCountButton() {

    const [clicks, setClicks] = useState(0)
    return <button className="btn btn-primary" type="button" onClick={()=>{setClicks(clicks+1)}}>
        { clicks < 1 && <span>I've never been clicked!</span>}
        { clicks >= 1 && <span>I've been clicked {clicks} time{clicks==1?'':'s'}</span>}
    </button>
}