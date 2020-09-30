<!DOCTYPE html>
<html>
<head>
  <title>Daniel S Chung | Contact</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" type="text/css" href="./bundle/daniel.css">
</head>

<body>
  <nav>
    <a href="/"><div class="logo">DC</div></a>
    <div class="links">
      <a href="/">Intro</a>
      <a href="/case">Case Studies</a>
      <a href="/about">About</a>
      <a href="/resume">Resume</a>
      <a href="/contact" class="active">Contact</a>
    </div>
    <div class="social">
      <a href="https://www.linkedin.com/in/danielschung/" target="_blank"><div class="link linkedin"></div></a>
    </div>
  </nav>

  <div class="mobile-nav">
    <div class="line"></div>
    <div class="line"></div>
    <div class="close"></div>
  </div>

  <header class="page wrapper">
    <h1>Contact</h1>
  </header>

  <section class="wrapper contact">
    <h2>Send me a message, and let’s chat.</h2>

    <form method="post" action=”form.php”>
      <div class="first">
        <div class="field">
          <label for="contactName">Name</label>
          <input type=”text” size=”19″ name=”contactName”>
        </div>
        <div class="field">
          <label for="contactEmail">Email</label>
          <input type="text" size="19" name="contactEmail">
        </div>
      </div>
      <div class="field">
        <label for="contactMessage">Message</label>
        <!-- <textarea name=”contactMessage” rows=”6″ cols=”20″></textarea> -->
        <span name="contactMessage" role="textbox" contenteditable="" 99></span>
      </div>
      <button type="submit" name="submit" class="open">Send</button>
    </form>
  </section>

  <footer class="wrapper">
    <p>What's Next?</p>
    <h1><a href="/resume">View Resume</a></h1>
  </footer>




  <!-- js -->
  <script src="./bundle/js/jquery.min.js"></script>
  <script src="./bundle/js/daniel.js"></script>

</body>
</html>