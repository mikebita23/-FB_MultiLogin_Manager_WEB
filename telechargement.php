<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">

  <title>Simple Sidebar - Start Bootstrap Template</title>

  <!-- Bootstrap core CSS -->
  <link href="./vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

  <!-- Custom styles for this template -->
  <link href="./css/simple-sidebar.css" rel="stylesheet">

</head>

<body>

  <div class="container">
      <div class="row">
        <div class="d-flex" id="wrapper">

        <!-- Page Content -->
          <div id="page-content-wrapper">

            <?php include './vendor/header/header.php'; ?>

            <div class="container-fluid">
                <div class="row">
                  <div class="card-body">
                      <h5 class="card-title text-right">
                          <br>
                          <button type="button" class="btn btn-outline-dark">Reserver un call stratégique</button>
                      </h5>
                      <h2>
                      <h1>
                        <p>Lorem ipsum</p>
                        <p>del erta</p>
                      </h1>
                      <br>
                      <br>
                      <br>
                      </h2>
                      <div class="text-center">
                        <p><h2><b>Télécharger le logiciel</b></h2></p>
                        <p>Disponible sur Mac et Windows</p>
                        <br>
                        <br>
                        <button type="button" class="btn btn-outline-primary">Télécharger</button>
                      </div>
                      <br>
                      <br>
                      <br>
                      <div class="row">
                        <div class="col">
                          <p><h3><b>Lorem ipsum</b></h3></p>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div class="col">
                          <p><h3><b>Lorem ipsum</b></h3></p>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div class="col">
                          <p><h3><b>Lorem ipsum</b></h3></p>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                      </div>
                  </div>
                  <br>
                  <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                      <div class="card card-signin my-5">
                          <div class="card-body">
                              <h5 class="card-title text-center">Prise de contact</h5>
                              <form class="form-signin">
                                  <div class="form-label-group">
                                      <br>
                                      <input type="text" id="prenom" class="form-control" placeholder="Prénom" required>
                                  </div>
                                  <div class="form-label-group">
                                      <br>
                                      <input type="text" id="nom" class="form-control" placeholder="Nom" required>
                                  </div>
                                  <div class="form-label-group">
                                      <br>
                                      <input type="tel" id="tel" class="form-control" placeholder="Numéro de téléphone" required>
                                  </div>
                                  <br>
                                  <div class="text-center">
                                      <button type="submit" class="btn btn-outline-success">Réserver</button>
                                  </div>
                              </form>
                          </div>
                       </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- /#page-content-wrapper -->

          </div>
          <!-- /#wrapper -->

          <!-- Bootstrap core JavaScript -->
          <script src="./vendor/jquery/jquery.min.js"></script>
          <script src="./vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

          <!-- Menu Toggle Script -->
          <script>
            $("#menu-toggle").click(function(e) {
              e.preventDefault();
              $("#wrapper").toggleClass("toggled");
            });
          </script>
        </div>
    </div>

</body>

</html>
