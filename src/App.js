import Navbar, { Sidenav } from "./components/Navbar";
import Sale from "./components/Saleimg";
import Categories from "./components/Categories";
import Recommeded from "./components/Recommended";
import Popular from "./components/Popular";
import Footer from "./components/Footer";


function App(){
  return(
    <div>
      
        <Navbar></Navbar>
        <Categories></Categories>
        <Sale></Sale>
       <Recommeded></Recommeded>
       <Popular></Popular>
       <Footer></Footer>
      
      
    </div>
  )
}
export default App