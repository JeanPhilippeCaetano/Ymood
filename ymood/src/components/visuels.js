import nuage from '../assets/nuage.png'
import panel from '../assets/panel-admin.png'
import chart from '../assets/Ydiagramme.png'

const Visu = () => {
    return (
        <>
            <div id="visuels" className="col-lg-12 text-center mb-5">
                <h2>VISUELS DU PROJET</h2>
            </div>
            <div id="carouselExampleCaptions" className="carousel slide mb-5">
                <center>
                    <div>Design du nuage</div>
                    <img src={nuage}/>
                    <br></br><br></br><br></br><br></br>
                    <div>Design du panel admin</div>
                    <img src={panel}/>
                    <br></br><br></br><br></br><br></br>
                    <div>Remontée BDD sous forme de graphique</div>
                    <img src={chart}/>
                </center>
            </div>
        </>
    )
}

export default Visu