import React from 'react'
import TopBarItem from './TopBarItem';

function TopBar() {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "stretch",
            }}
        >
            <TopBarItem backgroundColor="blue" color="white" text="123" />
            <TopBarItem backgroundColor="orange" color="black" text="456" />
            <TopBarItem backgroundColor="green" color="white" text="789" />

        </div>
    );

}

export default TopBar