import './App.css';
import Card from './components/card/card';
import img1 from './components/card/img/img1.jpg'
import img2 from './components/card/img/img2.jpg'
import img3 from './components/card/img/img3.jpg'
import img4 from './components/card/img/img4.jpg'
import img5 from './components/card/img/img5.jpg'
import img6 from './components/card/img/img6.jpg'
import img7 from './components/card/img/img7.jpg'
import img8 from './components/card/img/img8.jpg'
import img9 from './components/card/img/img9.jpg'
import img10 from './components/card/img/img10.jpg'
import { Nav } from './components/nav/nav';
import { Input } from './components/input/input';

function App() {




  //  dark = oui === true ?  darko={"bg-black text-white"} : darko={"bg-white text-black"} 


  let darko
  let oui = false
  oui === true ? darko = "bg-black text-white" : darko = "bg-white text-dark"

  return (




    <div className={`App ${darko}  `}>

      <Nav />
      
      <Input />
      <div className='flex dark w-full'>
        <div className='m-auto'>
          <div className='flex justify-center'>
            <Card img={img1} nom={"Coktail glass"} type={"A1"} />
            <Card img={img2} nom={"Shot glass"} type={"ABC"} />
            <Card img={img3} nom={"Martini Glass"} type={"Ace"} />
          </div>

          <div className='flex justify-center'>
            <Card img={img4} nom={"Coktail glass"} type={"Adam"} />
            <Card img={img5} nom={"Highball glass"} type={"AT&T"} />
            <Card img={img6} nom={"Shot glass"} type={"ACID"} />
          </div>

          <div className='flex justify-center'>
            <Card img={img7} nom={"Coktail glass"} type={"A. J."} />
            <Card img={img8} nom={"Highball glass"} type={"Karsk"} />
            <Card img={img9} nom={"Coffee glass"} type={"Meyla"} />
          </div>

          <div className='flex'>
            <Card img={img10} nom={"Coktail glass"} type={"A1"} />
          </div>



        </div>
      </div>
    </div>
  );
}

export default App;
