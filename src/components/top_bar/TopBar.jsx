import React, { PureComponent } from 'react'

import { connect } from 'react-redux';
import TopBarItem from './TopBarItem';



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
                <button onClick={this.props.handleFocus}>Focus</button>
                <button onClick={this.props.handleBlur}>Blur</button>

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
    return {
        handleFocus() {
            const action = {
                type: 'search_focus'
            };
            dispatch(action);
        },
        handleBlur() {
            // console.log('456');
            const action = {
                type: 'search_blur'
            };
            dispatch(action);
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);