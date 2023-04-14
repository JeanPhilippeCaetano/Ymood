import Emile from '../assets/Emile.png'
import Bastien from '../assets/Bastien.jpg'
import JP from '../assets/JP.jpg'
import Hugo from '../assets/Hugo.png'
import Aymeric from '../assets/Aymeric.jpg'
import Tanguy from '../assets/Tanguy.png'

const Team = () => {
    return (
        <>
            <div id="equipe" className="col-lg-12 text-center mb-5">
                <h2>L'ÉQUIPE</h2>
            </div>
            <div className="row justify-content-center mb-5">
                <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div className="card">
                        <img src={Tanguy} className="card-img-top" alt="Etudiant 1" />
                        <div className="card-body">
                            <h5 className="card-title">MEIGNIER Tanguy</h5>
                            <p className="card-text">Documentation technique, Dataviz, remplissage template</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div className="card">
                        <img src={Hugo} className="card-img-top" alt="Etudiant 1" />
                        <div className="card-body">
                            <h5 className="card-title">ROUMAGNE Hugo</h5>
                            <p className="card-text">Panel admin</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div className="card">
                        <img src={JP} className="card-img-top" alt="Etudiant 1" />
                        <div className="card-body">
                            <h5 className="card-title">CAETANO Jean-Philippe</h5>
                            <p className="card-text">Chef d'équipe, organisation, Trello, BDD</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div className="card">
                        <img src={Emile} className="card-img-top" alt="Etudiant 1" />
                        <div className="card-body">
                            <h5 className="card-title">SEGURET Emile</h5>
                            <p className="card-text">BDD, login/register, cookie</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div className="card">
                        <img src={Aymeric} className="card-img-top" alt="Etudiant 1" />
                        <div className="card-body">
                            <h5 className="card-title">KREUZER Aymeric</h5>
                            <p className="card-text">Création/modification du sondage (nuage), Front</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div className="card">
                        <img src={Bastien} className="card-img-top" alt="Etudiant 1" />
                        <div className="card-body">
                            <h5 className="card-title">LOCATELLI Bastien</h5>
                            <p className="card-text">Front, Dataviz</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Team