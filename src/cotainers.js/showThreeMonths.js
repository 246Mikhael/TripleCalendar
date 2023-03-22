import { connect } from "react-redux";
import ThreeMonths from "../components/ThreeMonths";

const mapStateToProps = (state)=>{
    return ({
    value: state.changeState.visible
    })
}

const mapDispatchToProps = (dispatch)=>{
   return ({ 
    increase: ()=> dispatch({type:"INCREASE"}),
    decrease: ()=> dispatch({type:"DECREASE"})
})
}



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThreeMonths)