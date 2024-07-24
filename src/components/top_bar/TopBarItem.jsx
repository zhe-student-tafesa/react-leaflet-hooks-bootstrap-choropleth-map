import React from 'react'
import { useSpring, animated } from 'react-spring';

function Number({n}){
    const {number} = useSpring(
        {
            from:{number: 0},
            number: n,
            delay: 800,

            config: { mass: 1, tension:10, friction: 10}
        }
    );
    return <animated.div>{number.to(
        (n)=>n.toFixed(1)
    )}</animated.div>
}

const TopBarItem = ({ backgroundColor, color, title, number }) => {
    return (
        <div
            style={{
                backgroundColor: backgroundColor,
                color: color,
                flex: 1,
                display: "flex",
                alignItems: "center", // vertical: align center
                justifyContent: "center", // horizetl center
                fontWeight: "bolder",
                fontSize: "2.0em",
                height: "10vh",
            }}
        >
            <div style={{
                display: "flex",
                flexDirection: "column", // vertical 
                alignItems: "center",
                justifyContent: "center"
            }}>
                <h5>{title}</h5>
                <Number n={number}/>
            </div>
        </div>
    );
}

export default TopBarItem