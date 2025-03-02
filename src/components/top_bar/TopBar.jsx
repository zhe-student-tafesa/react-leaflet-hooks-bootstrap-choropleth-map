import React, { PureComponent } from 'react'

import { connect } from 'react-redux';
import TopBarItem from './TopBarItem';
import { actionCreators } from './store';



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
        const { salesData, miningName } = this.props;
        return (
            <div
                style={{
                    display: "flex",
                    alignItems: "stretch",
                }}
            >
                <TopBarItem backgroundColor="#0f1d41" color="white" number={423} title={"Employees Number"} />
                <TopBarItem backgroundColor="orange" color="black" number={this.getLastSalesData(salesData, miningName)} title={"Profit (Unit: Million)"} />
                <TopBarItem backgroundColor="green" color="white" number={4789} title={"Sales Data (Unit: Million)"} />
                {/* <div>{this.props.focused ? 't' : 'F'}</div>
                <button onClick={this.props.handleFocus}>Focus</button>
                <button onClick={this.props.handleBlur}>Blur</button> */}

            </div>
        );
    }
    getLastSalesData(salesDataIm, miningName) {
        if (salesDataIm != null && miningName != "") {
            const salesData = salesDataIm.toJS()
            const selectedSalesData = salesData.find((item) => item.mineName === miningName);
            // console.log(selectedSalesData);
            // console.log(miningName);
            const LastSalesData = (selectedSalesData.data)[selectedSalesData.data.length - 1].profit;
            return LastSalesData;
        } else {
            return 0;
        }

    }
}

const mapStateToProps = (state) => {
    return {
        //focused: state.get('topBar').get('focused')
        focused: state.getIn(['topBar', 'focused']),
        salesData: state.getIn(['map', 'salesData']),
        miningName: state.getIn(['popupContent', 'miningName']),
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleFocus() {
            const action = actionCreators.searchFocus();
            dispatch(action);
        },
        handleBlur() {
            // console.log('456');
            const action = actionCreators.searchBlur();
            dispatch(action);
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);