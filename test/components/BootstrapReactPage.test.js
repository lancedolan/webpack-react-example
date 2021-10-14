import React from "react";
import render from "react-test-renderer";
import BootstrapReactPage from "../../app/js/page-components/BootstrapReactPage";

describe('BootstrapReactPage',()=>{
    const comp = render.create(<BootstrapReactPage />)
    const compJson = comp.toJSON()

    it('should be an array of non-empty components', ()=>{
        for(let comp of compJson) {
            expect(comp.children.length).toBeGreaterThan(0)
        }
    })

    it('should match snapshot', ()=>{
        expect(compJson).toMatchSnapshot()
    })

})
