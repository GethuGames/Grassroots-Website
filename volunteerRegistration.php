<?php 

$email                  =   $_POST['email'];
$message                =   "volunteer mail: " . $_POST['email'];

$headers                =   "MIME-Version: 1.0\r\n";
$headers                .=  "Content-type: text/html; charset=iso-8859-1\r\n";
$headers                .=  "From: " . $email;

$to                     =   "saiy2k@gmail.com";
$subject                =   "Grassroots - Volunteer Registration";

mail($to, $subject, $message, $headers);

echo 'Mail sent';

?>

