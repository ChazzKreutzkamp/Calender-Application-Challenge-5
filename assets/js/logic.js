<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
    integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
  <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet" />
  <link rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css" />
  <link rel="stylesheet" href="./assets/css/style.css" />
  <title>Work Day Scheduler</title>
</head>

<body>
  <header class="jumbotron">
    <h1 class="display-3">Work Day Scheduler</h1>
    <p class="lead description">A simple calendar app for scheduling your work day</p>
    <p id="currentDay" class="lead"></p>
  </header>
  <div class="container">
    <!-- Timeblocks go here -->
    <div class="row time-block">
      <div class="col-2 hour">9am</div>
      <textarea class="col-8"  id="9-hundred"></textarea>
      <div class="col-2 d-flex">
        <button class="saveBtn" id="9"><span class="oi oi-clipboard"></span></button>
      </div>
    </div>

    <div class="row time-block">
      <div class="col-2 hour">10am</div>
      <textarea class="col-8" id="10-hundred"></textarea>
      <div class="col-2 d-flex">
        <button class="saveBtn" id="10"><span class="oi oi-clipboard"></span></button>
      </div>
    </div>

    <div class="row time-block">
      <div class="col-2 hour">11am</div>
      <textarea class="col-8"  id="11-hundred"></textarea>
      <div class="col-2 d-flex">
        <button class="saveBtn" id="11"><span class="oi oi-clipboard"></span></button>
      </div>
    </div>
 
    <div class="row time-block">
      <div class="col-2 hour">12pm</div>
      <textarea class="col-8" id="12-hundred"></textarea>
      <div class="col-2 d-flex">
        <button class="saveBtn" id="12"><span class="oi oi-clipboard"></span></button>
      </div>
    </div>

    <div class="row time-block">
      <div class="col-2 hour">1pm</div>
      <textarea class="col-8" id="13-hundred"></textarea>
      <div class="col-2 d-flex">
        <button class="saveBtn" id="13"><span class="oi oi-clipboard"></span></button>
      </div>
    </div>

    <div class="row time-block">
      <div class="col-2 hour">2pm</div>
      <textarea class="col-8" id="14-hundred"></textarea>
      <div class="col-2 d-flex">
        <button class="saveBtn" id="14"><span class="oi oi-clipboard"></span></button>
      </div>
    </div>

    <div class="row time-block">
      <div class="col-2 hour">3pm</div>
      <textarea class="col-8" id="15-hundred"></textarea>
      <div class="col-2 d-flex">
        <button class="saveBtn" id="15"><span class="oi oi-clipboard"></span></button>
      </div>
    </div>

    <div class="row time-block">
      <div class="col-2 hour">4pm</div>
      <textarea class="col-8" id="16-hundred"></textarea>
      <div class="col-2 d-flex">
        <button class="saveBtn" id="16"><span class="oi oi-clipboard"></span></button>
      </div>
    </div>

    <div class="row time-block">
      <div class="col-2 hour">5pm</div>
      <textarea class="col-8" id="17-hundred"></textarea>
      <div class="col-2 d-flex">
        <button class="saveBtn" id="17"><span class="oi oi-clipboard"></span></button>
      </div>
    </div>

  </div>
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
    <script src="./assets/js/logic.js"></script>
</body>

</html>
