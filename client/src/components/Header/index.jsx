
import style from './style.css'
import {AuthContext} from '../../utils/context'

import { useContext } from "react";






function Header() {
  const authCtx = useContext(AuthContext)
  const isLoggedIn = authCtx.isLoggedIn
 


  const headerSection = (
   <header className="site-header">
  <div className="site-identity">
    <h1><a href="/#">Site Name</a></h1>
  </div>  
  <nav className="site-navigation">
    <ul className="nav">
      <li><a href="/home">Accueil</a></li> 
      <li><a href="/company">Entreprise</a></li> 
      <li><a href="/employees">Employés</a></li> 
      <li><a href="/inventaires">Inventaires</a></li> 
      <li><a href="/#">Charges directes</a></li>
      <li><a href="/#">Charges indirectes</a></li>
      <li><a href="/contact">Contact</a></li> 
      <li><a href="/" onClick={authCtx.logout}>Déconnexion</a></li>
    </ul>
  </nav>
</header>
    
  )
    return isLoggedIn ? headerSection: ''





        
    

    
    


}
export default Header;