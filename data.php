    <!-- JavaScript Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous">
    </script>
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
    <script>
        $(function() {
            //$('[data-toggle="popover"]').popover()
            var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
            var popoverList = popoverTriggerList.map(function(popoverTriggerEl) {
                return new bootstrap.Popover(popoverTriggerEl, {
                    html: true
                });
            });
        });
    </script>
    <?php
    $vday = $_POST['vday'];
    $vmonth = $_POST['vmonth'];
    $vyear = $_POST['vyear'];
    if ($vday == 8) {
        $optlnks = "<a href='fees'  >Fees</a><br><a href='tests'  >Tests</a><br><a href='profile'  >Profile</a><br>";
        echo '<button type="button" class="btn btn-sm btn-success" data-bs-toggle="popover" title="Popover title" data-bs-content="' . $optlnks . '">Nadeem</button>';
    }
    ?>