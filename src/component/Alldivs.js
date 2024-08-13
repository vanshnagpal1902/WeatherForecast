import Homecomponent from "./Homecomponent";
import Cart from "./Cart";
import Contact from "./Contact"
import About from "./About"
import Laptop from"./Laptop";
import Mobile from "./Mobile";
import Headphones from "./Headphones";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
function Alldivs()
{
    return(
        <>
<div class="navbar">
<Homecomponent/>
<Cart/>
<About/>
<Contact/>
</div>
<div class="left">
<Laptop/>
<Mobile/>
<Headphones/>

</div>
<div className="right">
    <Card1/>
    <Card2/>
    <Card3/>
</div>
<div className="footer">abc</div>
</>
    );
}
export default Alldivs;