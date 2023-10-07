
import { useNavigate } from "react-router-dom";
import Register from "../../components/forms/Register";
import {AuthContext} from '../../utils/context'
import { useContext, useEffect } from "react";
import Login from "../../components/forms/Login";


const style = {
    div: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      marginTop: "5%"
    }
}

function Index() {
    const authCtx = useContext(AuthContext)
    const navigate = useNavigate()
    const isLoggedIn = authCtx.isLoggedIn
    useEffect(() => {
        
    console.log('isLoggedIn :', isLoggedIn)
    if (isLoggedIn) {
        navigate('home')
    }


    }, [isLoggedIn, navigate])
 
    
    return(
        <div style={style.div}>
        <Register/>
        <Login/>
        </div>
    )

}
export default Index;