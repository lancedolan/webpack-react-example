import React from "react";
import render from "react-test-renderer";
import HelloWorldHook from "../../app/js/components/HelloWorldHook";

describe('ExampleHook',()=>{
    const comp = render.create(<HelloWorldHook />)
    const compJson = comp.toJSON()

    it('should have children', ()=>{
        expect(compJson.children.length).toBeGreaterThan(0)
    })

    it('should match snapshot', ()=>{
        expect(compJson).toMatchSnapshot()
    })

})
