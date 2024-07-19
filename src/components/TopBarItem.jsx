import React from 'react'

const TopBarItem = ({ backgroundColor, color, text }) => {
    return (

        <div

            style={{
                backgroundColor: backgroundColor,
                color: color,
                flex: 1,
                display: "flex",
                alignItems: "center", // vertical direction
                justifyContent: "center", // horiztontal

                fontWeight: "bolder",
                fontSize: "1em",
                height: "10vh",
            }}
        >
            <span>{text}</span>
        </div>
    )
}

export default TopBarItem