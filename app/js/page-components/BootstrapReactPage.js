import React from 'react'
import NavBar from "../components/NavBar";
import ClickCountButton from "../components/ClickCountButton";

function BootstrapReactPage(props) {

    const container =
        <div className="container" style={{marginTop: '4em'}} key="2">
            <div className="row">
                <div className="col">
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <ClickCountButton />
                    </div>
                </div>
            </div>
        </div>

    return [<NavBar key="1" />,container]
}

export default BootstrapReactPage
