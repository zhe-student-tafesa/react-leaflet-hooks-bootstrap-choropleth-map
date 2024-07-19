import React, { PureComponent } from 'react'
import TopBarItem from './TopBarItem';
import { connect } from 'react-redux';



// function TopBar() {
//     return (
//         <div
//             style={{
//                 display: "flex",
//                 alignItems: "stretch",
//             }}
//         >
//             <TopBarItem backgroundColor="blue" color="white" number={123} title={"Employees Number"}/>
//             <TopBarItem backgroundColor="orange" color="black" number={456} title={"Sales Data"}/>
//             <TopBarItem backgroundColor="green" color="white" number={789} title={"Profit"}/>

//         </div>
//     );

// }
class TopBar extends PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div
                style={{
                    display: "flex",
                    alignItems: "stretch",
                }}
            >
                <TopBarItem backgroundColor="blue" color="white" number={123} title={"Employees Number"} />
                <TopBarItem backgroundColor="orange" color="black" number={456} title={"Sales Data"} />
                <TopBarItem backgroundColor="green" color="white" number={789} title={"Profit"} />
                <div>{this.props.focused ? 't' : 'F'}</div>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.focused
    }
}
const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);