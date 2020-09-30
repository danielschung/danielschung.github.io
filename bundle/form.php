<?php 

$name = $_POST['contactName'];
$email = $_POST['contactEmail'];
$message = $_POST['contactMessage'];
$formcontent="From: $name \n Message: $message";
$recipient = "danielschung@icloud.com";
$subject = "Portfolio Interest";
$mailheader = "From: $email \r\n";

mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!";

?>