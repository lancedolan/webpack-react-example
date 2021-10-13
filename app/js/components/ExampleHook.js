import React, {useState} from 'react'

function ExampleHook(props) {

    const [mouseOuts, setMouseOuts] = useState(0)
    const [clicks, setClicks] = useState(0)

    return (<div
                onClick={()=>{setClicks(clicks+1)}}
                onMouseOut={(e)=>{setMouseOuts(mouseOuts+1);e.preventDefault();}}>
                Oh I'm a {props.type?props.type+' ':''}hook!!
                <ul onMouseOut={(e) =>{e.stopPropagation();}}>
                    <li>I've been clicked {clicks} time{clicks==1?'':'s'}.</li>
                    <li>A mouse has departed my vicinity {mouseOuts} time{mouseOuts==1?'':'s'}.</li>
                </ul>
            </div>
    );
}

export default ExampleHook
