import './App.css';
import Profile from './Profile/Profile';
// import ProfileBlock from './Profile/ProfileBlock';

function App() {
  const Personaldata ={ Bio:"from tunisia", Profession :"Coordinator",image: "https://th.bing.com/th/id/R.e10262585addf11fa80aa77e6210a931?rik=%2fVpDaX3%2fMyMGDA&pid=ImgRaw&r=0"}
  const handleName = (x)=> alert(`What is the price of that ${x.Fullname}`)

  return (
    <div className="App">
     <Profile list={Personaldata} alerta={handleName}><img alt='Med' src='https://th.bing.com/th/id/R.e10262585addf11fa80aa77e6210a931?rik=%2fVpDaX3%2fMyMGDA&pid=ImgRaw&r=0'/></Profile>
     {/* <ProfileBlock/> */}
     
    </div>
  );
}

export default App;
