const Visu = () => {
    return (
        <>
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
                        <img src="lorem-ipsum.jpg" class="d-block w-100" alt="screenshot1" />
                        <div class="carousel-caption d-none d-md-block">
                            <h3>Screenshot n°1</h3>
                            <p>Légende screenshot n°1</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="lorem-ipsum.jpg" class="d-block w-100" alt="screenshot2" />
                        <div class="carousel-caption d-none d-md-block">
                            <h3>Screenshot n°2</h3>
                            <p>Légende screenshot n°2</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="lorem-ipsum.jpg" class="d-block w-100" alt="screenshot3" />
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
        </>
    )
}

export default Visu