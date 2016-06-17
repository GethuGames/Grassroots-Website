<?php 

$email                  =   $_POST['email'];
$message                =   "NGO Name: " . $_POST['name'] . "\n";
$message                =   $message . "NGO Mail: " . $_POST['email'] . "\n";
$message                =   $message . "NGO Mobile: " . $_POST['mobile'] . "\n";

$headers                =   "MIME-Version: 1.0\r\n";
$headers                .=  "Content-type: text/html; charset=iso-8859-1\r\n";
$headers                .=  "From: " . $email;

$to                     =   "saiy2k@gmail.com";
$subject                =   "Grassroots - NGO Registration";

mail($to, $subject, $message, $headers);

echo 'Mail sent';

?>

