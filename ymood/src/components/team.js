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
                        <img src={Tanguy} class="card-img-top" alt="Etudiant 1" />
                        <div class="card-body">
                            <h5 class="card-title">MEIGNIER Tanguy</h5>
                            <p class="card-text">Documentation technique, Dataviz, remplissage template</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div class="card">
                        <img src={Hugo} class="card-img-top" alt="Etudiant 1" />
                        <div class="card-body">
                            <h5 class="card-title">ROUMAGNE Hugo</h5>
                            <p class="card-text">Panel admin</p>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div class="card">
                        <img src={JP} class="card-img-top" alt="Etudiant 1" />
                        <div class="card-body">
                            <h5 class="card-title">CAETANO Jean-Philippe</h5>
                            <p class="card-text">Chef d'équipe, organisation, Trello, BDD</p>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div class="card">
                        <img src={Emile} class="card-img-top" alt="Etudiant 1" />
                        <div class="card-body">
                            <h5 class="card-title">SEGURET Emile</h5>
                            <p class="card-text">BDD, login/register, cookie</p>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div class="card">
                        <img src={Aymeric} class="card-img-top" alt="Etudiant 1" />
                        <div class="card-body">
                            <h5 class="card-title">KREUZER Aymeric</h5>
                            <p class="card-text">Création/modification du sondage (nuage), Front</p>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div class="card">
                        <img src={Bastien} class="card-img-top" alt="Etudiant 1" />
                        <div class="card-body">
                            <h5 class="card-title">LOCATELLI Bastien</h5>
                            <p class="card-text">Front, Dataviz</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Team