import PDF from '../assets/Ymood.pdf'

const Links = () => {
    return (
        <>
            <div id="liens-pratiques" className="col-lg-12 text-center mb-5">
                <h2>LIENS PRATIQUES</h2>
            </div>

            <div className="row justify-content-center mb-5">
                <div className="col-md-4 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Github</h5>
                            <p className="card-text">Consultez notre code source et notre organisation sur Github.</p>
                            <a href="https://github.com/JeanPhilippeCaetano/Ymood/tree/main/ymood" className="btn btn-primary">Visiter</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">PDF</h5>
                            <p className="card-text">Téléchargez notre dossier technique au format PDF.</p>
                            <a href={PDF} className="btn btn-primary">Télécharger</a>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="text-center mb-3">
                Fait avec amour pour le Challenge 48h
            </div>
        </>
    )
}

export default Links;