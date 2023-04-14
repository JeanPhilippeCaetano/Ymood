import React from "react";

const Presentation = () => {
    return(
        <div className="container mt-5">
        <div id="presentation" className="col-lg-12 text-center">
          <h1>Ymood</h1>
        </div>
        <div className="row">
          <div className="col-md-8 d-flex align-items-center">
            <p>
            Afin d'améliorer la vie étudiante, nous avons pensé un outil facile à utiliser et qui permettrait de sonder l'humeur des Yétudiants au sein d'une école.
            <br></br><br></br>
            La vie étudiante est un sujet beaucoup trop mis de côté et qui n'est pas que soirée. C'est une période qui peut se révéler très difficile pour de nombreuses raisons, difficultés financières, solitude, etc...
            <br></br><br></br>
            C'est pourquoi nous pensons que les Yécoles ont un vrai rôle à jouer dans la détection de cas d'étudiant en difficulté, de plus, dans une démarche d'amélioration continue, l'école peut récupérer l'humeur générale de ces étudiants.
            <br></br><br></br>
            Le Ysondage va prendre la forme d'un nuage, sur lequel différentes émotions vont apparaître. L'étudiant aura juste a cliquer sur une ou plusieurs émotions puis à valider son choix. 
            <br></br><br></br>
            Afin de garder l'anonymat mais aussi d'éviter les abus, le sondage sera idéalement placé dans un intranet où il est nécessaire d'être connecté pour y accéder. 
            </p>
          </div>

          <div className="col-md-4 d-flex align-items-center">
            <img src="mockup.png" alt="mockup" className="img-fluid mx-auto d-block" />
          </div>
          <a href="/extranet" className="btn btn-primary col-md-1 d-flex">En savoir plus</a>

        </div>
        <br />
        <br />
      </div>
    )
}



export default Presentation