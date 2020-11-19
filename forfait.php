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
                    <div class="row">
                      <div class="col">
                        <p><h3><b>Forfait basique</b></h3></p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <div class="text-center">
                          <br>
                          <a href="#"><button type="submit" class="btn btn-outline-success">S'abonner</button></a>
                        </div>
                      </div>
                      <div class="col">
                        <p><h3><b>Forfait standard</b></h3></p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <div class="text-center">
                          <br>
                          <a href="#"><button type="submit" class="btn btn-outline-info">S'abonner</button></a>
                        </div>
                      </div>
                      <div class="col">
                        <p><h3><b>Forfait premium</b></h3></p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <div class="text-center">
                          <br>
                          <a href="#"><button type="submit" class="btn btn-outline-primary">S'abonner</button></a>
                        </div>
                      </div>
                      <br>
                    </div>
                  </div>
                  <br>
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
