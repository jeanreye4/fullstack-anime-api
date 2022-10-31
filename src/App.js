import './App.css';
import { animedata } from "./data.js"
import buttons from "./buttons.js"

function Anime() {
  console.log(animedata)
  return (
    <>
      <h1>Anime Quote API</h1>
      <div class="all-quotes">
      <div class="All-Might">
        <button id="onebutton" onClick="background1()">All Might</button>
      </div>
      <div class="Eraserhead">
        <button id="twobutton" onClick="background2()">Eraserhead</button>
      </div>
      <div class="Shigaraki-Tomura">
        <button id="threebutton" onClick="background3()">Shigaraki Tomura</button>
      </div>
      <div class="Midoriya-Izuku">
        <button id="fourbutton" onClick="background4()">Midoriya Izuku</button>
      </div>
      <div class="Bakugo-Katsuki">
        <button id="button" onClick="background5()">Bakugo Katsuki</button>
      </div>
      <div class="Levi-Ackerman">
        <button id="button" onClick="background6()">Levi Ackerman</button>
      </div>
      <div class="Escanor">
        <button id="button" onClick="background7()">Escanor</button>
      </div>
      <div class="meliodas">
        <button id="button" onClick="background8()">Meliodas</button>
      </div>
      <div class="Naurto-Uzumaki">
          <button id="button" onClick="background9()">Naruto Uzumaki</button>
      </div>
    </div>
    </>
  )
}

export default Anime;