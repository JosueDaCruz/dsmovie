import {ReactComponent as GithubIcon} from 'assets/img/github.svg';


function Navbar (){
 return (
    <header>
    <nav>
      <div>
         <h1>DSmovie</h1> 
      <a href="https://github.com/JosueDaCruz">
<div>
<GithubIcon/>
<p>/JosueDaCruz</p>

</div>
      </a>
      </div>
      </nav> 
   </header>
 );

}
export default Navbar;