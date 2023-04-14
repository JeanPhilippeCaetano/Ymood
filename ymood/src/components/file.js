const Links = () => {
    return (
        <>
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
        </>
    )
}

export default Links;