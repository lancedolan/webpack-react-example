import React, { useState, useEffect } from 'react';
import css from '../../css/hello-world.scss'

export default function HelloWorldHook(props) {

    useEffect(()=>{
        // do things on render

        return function cleanup() {
            //do cleanup when done rendering (perhaps unmounting, perhaps re-rendering)
        }
    }, [])

    return <div className="hello">Hello world from hook?</div>;
}