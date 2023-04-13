import img from './logo_ynov_campus_rvb.png';
import './Extranet.css';

function Extranet() {
  return (
    <div className="conteneur">
      <nav className="navtop">
        <img id="Ymage" src={img} />
        <ul id="Yul">
          <div>fr</div>
          <div>en</div>
          <div>Ymail@ynov.com</div>
        </ul>
      </nav>
      <div className="Ycloud">JE SUIS LE YCLOUD</div>
      <div className="Ydoc">
        <button>Tout</button>
        <button>Scolarité</button>
        <button>Promotions et partenariats</button>
        <button>Documents</button>
      </div>
      <div className="Ybiggrid">
        <div className="Yhypperplan"><div className="texth">Hyperplanning</div></div>
        <div className="Ydossier"></div>
        <div className="Ymatch"></div>
        <div className="YoffreAuto"></div>
        <div className="Yprof"></div>
        <div className="YoffrePc"></div>
        <div className="Yisic"></div>
        <div className="Ymater"></div>
        <div className="Ymicro"></div>
        <div className="Yammer"></div>
        <div className="Ymail"></div>
        <div className="Yreglement"></div>
        <div className="Ylearning"></div>
        <div className="Ypeda"></div>
        <div className="Ybrand"></div>
        <div className="Yadobe"></div>
        <div className="Ychart"></div>
        <div className="Ysoftware"></div>
        <div className="Ygit"></div>
        <div className="Ydoss"></div>
        <div className="Yfisio"></div>
      </div>
    </div>
  )
}

export default Extranet;