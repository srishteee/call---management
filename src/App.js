import AvatarLogo from "./components/Avatar";
import Header from "./components/Header";
import Filters from "./components/Filters";
function App() {
  return (
    <>
      <div    style={{justifyContent: "flex-end", display:"flex"}}>
   
        <AvatarLogo/>
      </div>
      <div><Header/></div>
      <div><Filters/></div>
  
     
      
    </>
  );
}

export default App;
