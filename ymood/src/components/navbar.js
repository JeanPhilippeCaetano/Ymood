import React from "react"

const Navbar = () => {
    return (
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
    )
}



export default Navbar