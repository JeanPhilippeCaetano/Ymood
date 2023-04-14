const Visu = () => {
    return (
        <>
            <div id="visuels" className="col-lg-12 text-center mb-5">
                <h2>VISUELS DU PROJET</h2>
            </div>
            <div id="carouselExampleCaptions" className="carousel slide mb-5">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="lorem-ipsum.jpg" className="d-block w-100" alt="screenshot1" />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Screenshot n°1</h3>
                            <p>Légende screenshot n°1</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="lorem-ipsum.jpg" className="d-block w-100" alt="screenshot2" />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Screenshot n°2</h3>
                            <p>Légende screenshot n°2</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="lorem-ipsum.jpg" className="d-block w-100" alt="screenshot3" />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Screenshot n°3</h3>
                            <p>Légende screenshot n°3</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Visu