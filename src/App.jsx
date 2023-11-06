import CakeView from './features/cake/CakeView'
import IcecreamView from "./features/icecream/IcecreamView";
import UserView from "./features/user/UserView";

const App = () => {
  return (
    <div>
     <CakeView></CakeView>
     <IcecreamView></IcecreamView>
     <UserView></UserView>
    </div>
  )
}

export default App