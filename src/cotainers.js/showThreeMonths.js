import { connect } from "react-redux";
import ThreeMonths from "../components/ThreeMonths";
import changeState from "../reducers/changeState";

const mapStateToProps = (state)=>{
    return ({
    value: state
    })
}

const mapDispatchToProps = (dispatch)=>{
   return ({ 
    increase: ()=> dispatch(changeState.actions.increment()),
    decrease: ()=> dispatch(changeState.actions.decrement()),
    current: ()=> dispatch(changeState.actions.current())
})
}



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThreeMonths)