<?php 

if (isset($_POST['submit'])) {
  $name = $_POST['contactName'];
  $mailFrom = $_POST['contactEmail'];
  $message = $_POST['contactMessage'];
  $subject = "Portfolio Interest";

  $mailto = "danielschung@icloud.com";
  $mailheader = "From: ".$mailFrom;
  $formcontent=" You have recieved a message on danielschung.github.io.\n\n".$message;

  mail($mailto, $subject, $formcontent, $mailheader);
  header("Location: form.php?mailsend");
}

?>