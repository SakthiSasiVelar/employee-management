import Body from "./Components/Body/Body";
import Header from "./Components/Header/Header";
import Styles from "./App.module.css";


function App(){
  return (
    <div className={Styles.outer_container}>
        <Header />
        <Body />
    </div>
  )
}

export default App;