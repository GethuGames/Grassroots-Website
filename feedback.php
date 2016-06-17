<?php 

$email                  =   $_POST['InputEmail'];
$message                =   "Name : " . $_POST['InputName'] . "<br/>";
$message                =   $message . "Mail : " . $_POST['InputEmail'] . "<br/>";
$message                =   $message . "Message : " . $_POST['InputMessage'];

$headers                =   "MIME-Version: 1.0\r\n";
$headers                .=  "Content-type: text/html; charset=iso-8859-1\r\n";
$headers                .=  "From: " . $email;

$to                     =   "saiy2k@gmail.com";
$subject                =   "Grassroots - Contact Form";

mail($to, $subject, $message, $headers);

header('Location: ' . 'index.html#messageSubmitted');

?>

