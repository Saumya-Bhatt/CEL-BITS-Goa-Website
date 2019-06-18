<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $email_subject = 'New contact us message';
    $email_body = "User Name: $name\n".
                  "User email: $email\n".
                  "User message: $message"; 
                  
    $email_to = "saumi10600@gmail.com";

    $headers = 'From: $email \r\n';

    mail($email_to,$email_subject,$email_body,$headers);

    header("Location: index.html");
?>