import React from "react";

const Presentation = () => {
    return(
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
            <img src="mockup.png" alt="mockup" className="img-fluid mx-auto d-block" />
          </div>
          <a href="/extranet" class="btn btn-primary col-md-1 d-flex">En savoir plus</a>

        </div>
        <br />
        <br />
      </div>
    )
}



export default Presentation