import React from 'react';

function Home() {
  return(
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="#">Ymood - Challenge 48h</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                <a class="nav-link" href="#presentation">Présentation</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#equipe">L'équipe</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="visuels">Visuels</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#liens-pratiques">Liens pratiques</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
        <div className="container mt-5">
            <div id="presentation" className="col-lg-12 text-center">
                <h1>Ymood</h1>
            </div>
            <div className="row">
                <div className="col-md-8 d-flex align-items-center">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rutrum fringilla neque at cursus. Phasellus feugiat erat in blandit laoreet. Nullam neque leo, luctus consectetur neque vel, blandit molestie nunc. Donec tellus sapien, tincidunt non leo dapibus, pellentesque ullamcorper augue. Suspendisse potenti. Mauris egestas ex ut tellus pulvinar cursus. Pellentesque vel tincidunt felis. Integer tempus risus tortor. Sed tincidunt, ex in tempus fermentum, nisi risus dignissim diam, quis elementum diam lectus venenatis arcu. Aliquam justo nibh, commodo eget metus sit amet, eleifend aliquet mi. Cras est leo, egestas sit amet placerat sollicitudin, blandit quis mi. Ut libero ligula, sagittis a ligula et, ultrices gravida purus.
                    </p>
                </div>
                
                <div className="col-md-4 d-flex align-items-center">
                    <img src="mockup.png" alt="mockup"  className="img-fluid mx-auto d-block" />
                </div>
                <a href="/extranet" class="btn btn-primary col-md-1 d-flex">En savoir plus</a>
                
            </div>
            <br/>
            <br/>
        </div>
        <div id="equipe" className="col-lg-12 text-center mb-5">
            <h2>L'ÉQUIPE</h2>
        </div>

      <div className="row justify-content-center mb-5">
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div className="card">
          <img src="lorem-ipsum.jpg" class="card-img-top" alt="Etudiant 1"/>
            <div class="card-body">
              <h5 class="card-title">NOM PRENOM</h5>
              <p class="card-text">Ici, je décris mon rôle et les tâches que j'ai effectuées</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div class="card">
          <img src="lorem-ipsum.jpg" class="card-img-top" alt="Etudiant 1"/>
            <div class="card-body">
              <h5 class="card-title">NOM PRENOM</h5>
              <p class="card-text">Ici, je décris mon rôle et les tâches que j'ai effectuées</p>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div class="card">
          <img src="lorem-ipsum.jpg" class="card-img-top" alt="Etudiant 1"/>
            <div class="card-body">
              <h5 class="card-title">NOM PRENOM</h5>
              <p class="card-text">Ici, je décris mon rôle et les tâches que j'ai effectuées</p>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div class="card">
          <img src="lorem-ipsum.jpg" class="card-img-top" alt="Etudiant 1"/>
            <div class="card-body">
              <h5 class="card-title">NOM PRENOM</h5>
              <p class="card-text">Ici, je décris mon rôle et les tâches que j'ai effectuées</p>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div class="card">
          <img src="lorem-ipsum.jpg" class="card-img-top" alt="Etudiant 1"/>
            <div class="card-body">
              <h5 class="card-title">NOM PRENOM</h5>
              <p class="card-text">Ici, je décris mon rôle et les tâches que j'ai effectuées</p>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div class="card">
          <img src="lorem-ipsum.jpg" class="card-img-top" alt="Etudiant 1"/>
            <div class="card-body">
              <h5 class="card-title">NOM PRENOM</h5>
              <p class="card-text">Ici, je décris mon rôle et les tâches que j'ai effectuées</p>
            </div>
          </div>
        </div>
      </div>

      <div id="visuels" class="col-lg-12 text-center mb-5">
        <h2>VISUELS DU PROJET</h2>
      </div>


      <div id="carouselExampleCaptions" class="carousel slide mb-5">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="lorem-ipsum.jpg" class="d-block w-100" alt="screenshot1"/>
            <div class="carousel-caption d-none d-md-block">
              <h3>Screenshot n°1</h3>
              <p>Légende screenshot n°1</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="lorem-ipsum.jpg" class="d-block w-100" alt="screenshot2"/>
            <div class="carousel-caption d-none d-md-block">
              <h3>Screenshot n°2</h3>
              <p>Légende screenshot n°2</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="lorem-ipsum.jpg" class="d-block w-100" alt="screenshot3"/>
            <div class="carousel-caption d-none d-md-block">
              <h3>Screenshot n°3</h3>
              <p>Légende screenshot n°3</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div id="liens-pratiques" class="col-lg-12 text-center mb-5">
        <h2>LIENS PRATIQUES</h2>
      </div>

      <div class="row justify-content-center mb-5">
        <div class="col-md-4 mb-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Github</h5>
              <p class="card-text">Consultez notre code source et notre organisation sur Github.</p>
              <a href="https://github.com/votrenom/votreprojet" class="btn btn-primary">Visiter</a>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">PDF</h5>
              <p class="card-text">Téléchargez notre dossier technique au format PDF.</p>
              <a href="mondossiertechnique.pdf" class="btn btn-primary">Télécharger</a>
            </div>
          </div>
        </div>
      </div>

    <hr/>

    <div class="text-center mb-3">
      Fait avec 😴 pour le Challenge 48h
    </div>
  </div>

  )
};


export default Home;