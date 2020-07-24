$("#prcost").on("click", function (e) {
  e.preventDefault();
  var html = `
        <div class="row pt-5 justify-content-center">                
            <div class="col-lg-4 d-flex align-items-stretch">
                <h3 class="pl-5 pt-5 text-warning">Presentación Bloque</h3>
                <div class="card">
                    <div class="card-body">
                        <img src="img/queso-costeno.png" alt="" class="img-fluid rounded-circle">
                        <h3 class="pt-5 text-center text-warning">400g</h3>
                    </div>
                </div>
            </div>                
            <div class="col-lg-4 d-flex align-items-stretch">
                <h3 class="pl-5 pt-5 text-warning">Presentación Tajado</h3>
                <div class="card">
                    <div class="card-body">
                        <img src="img/queso-costeno.png" alt="" class="img-fluid rounded-circle">
                        <h3 class="pt-5 text-center text-warning">400g</h3>
                    </div>
                </div>
            </div>
        </div>
        `;
  $("#presentaciones .container").html(html);
});

$("#prdblcr").on("click", function (e) {
  e.preventDefault();
  var html = `<div class="row">
            <h3 class="pl-5 pt-5 text-warning">Presentación Bloque</h3>
        </div>
        <div class="row justify-content-center">
            <div class="col-lg-4 d-flex align-items-stretch">
                <div class="card">
                    <div class="card-body">
                        <img src="img/rsz_doblebl-230g.png" alt="" class="img-fluid rounded-circle">
                        <h3 class="pt-5 text-center text-warning">230g</h3>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 d-flex align-items-stretch">
                <div class="card">
                    <div class="card-body">
                        <img src="img/rsz_doblebl-400g.png" alt="" class="img-fluid rounded-circle">
                        <h3 class="pt-5 text-center text-warning">400g</h3>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 d-flex align-items-stretch">
                <div class="card">
                    <div class="card-body">
                        <img src="img/rsz_doblebl-2500g.png" alt="" class="img-fluid rounded-circle">
                        <h3 class="text-center text-warning">2500g</h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <h3 class="pl-5 pt-5 text-warning">Presentación Tajado</h3>
        </div>
        <div class="row justify-content-center">
            <div class="col-lg-4 d-flex align-items-stretch">
                <div class="card">
                    <div class="card-body">
                        <img src="img/rsz_dobletj-250g.png" alt="" class="img-fluid rounded-circle">
                        <h3 class="pt-5 text-center text-warning">230g</h3>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 d-flex align-items-stretch">
                <div class="card">
                    <div class="card-body">
                        <img src="img/rsz_dobletj-400g.png" alt="" class="img-fluid rounded-circle">
                        <h3 class="pt-5 text-center text-warning">400g</h3>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 d-flex align-items-stretch">
                <div class="card">
                    <div class="card-body">
                        <img src="img/rsz_dobletj-2500g.png" alt="" class="img-fluid rounded-circle">
                        <h3 class="text-center text-warning">2500g</h3>
                    </div>
                </div>
            </div>
        </div>`;
  $("#presentaciones .container").html(html);
});

$("#prmoz").on("click", function (e) {
  e.preventDefault();
  var html = `<div class="row">
            <h3 class="pl-5 pt-5 text-warning">Presentación Bloque</h3>
        </div>
        <div class="row justify-content-center">
            <div class="col-lg-4 d-flex align-items-stretch">
                <div class="card">
                    <div class="card-body">
                        <img src="img/rsz_mozabl-230g.png" alt="" class="img-fluid rounded-circle">
                        <h3 class="pt-5 text-center text-warning">230g</h3>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 d-flex align-items-stretch">
                <div class="card">
                    <div class="card-body">
                        <img src="img/rsz_mozabl-400g.png" alt="" class="img-fluid rounded-circle">
                        <h3 class="pt-5 text-center text-warning">400g</h3>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 d-flex align-items-stretch">
                <div class="card">
                    <div class="card-body">
                        <img src="img/rsz_mozabl-2500g.png" alt="" class="img-fluid rounded-circle">
                        <h3 class="text-center text-warning">2500g</h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <h3 class="pl-5 pt-5 text-warning">Presentación Tajado</h3>
        </div>
        <div class="row justify-content-center">
            <div class="col-lg-4 d-flex align-items-stretch">
                <div class="card">
                    <div class="card-body">
                        <img src="img/rsz_mozatj-230g.png" alt="" class="img-fluid rounded-circle">
                        <h3 class="pt-5 text-center text-warning">230g</h3>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 d-flex align-items-stretch">
                <div class="card">
                    <div class="card-body">
                        <img src="img/rsz_mozatj-400g.png" alt="" class="img-fluid rounded-circle">
                        <h3 class="pt-5 text-center text-warning">400g</h3>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 d-flex align-items-stretch">
                <div class="card">
                    <div class="card-body">
                        <img src="img/rsz_mozatj-2500g.png" alt="" class="img-fluid rounded-circle">
                        <h3 class="text-center text-warning">2500g</h3>
                    </div>
                </div>
            </div>
        </div>`;
  $("#presentaciones .container").html(html);
});

$("#prqllo").on("click", function (e) {
  e.preventDefault();
  var html = `
        <div class="row pt-5 justify-content-center">                
            <div class="col-lg-4 d-flex align-items-stretch">
                <h3 class="pl-5 pt-5 text-warning">Presentación Bloque</h3>
                <div class="card">
                    <div class="card-body">
                        <img src="img/rsz_quesillobl-400g.png" alt="" class="img-fluid rounded-circle">
                        <h3 class="pt-5 text-center text-warning">400g</h3>
                    </div>
                </div>
            </div>                
            <div class="col-lg-4 d-flex align-items-stretch">
                <h3 class="pl-5 pt-5 text-warning">Presentación Tajado</h3>
                <div class="card">
                    <div class="card-body">
                        <img src="img/rsz_quesillotj-400g.png" alt="" class="img-fluid rounded-circle">
                        <h3 class="pt-5 text-center text-warning">400g</h3>
                    </div>
                </div>
            </div>
        </div>
        `;
  $("#presentaciones .container").html(html);
});
