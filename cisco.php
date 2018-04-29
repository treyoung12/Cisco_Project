<?php

$AddressToEmailTo = "tloftin68@gmail.com";

$SubjectOfEmail = "Reset password";

$content =  "Click the following link to reset your password: http://localhost:63342/untitled/repswd.html?_ijt=io70gvjm65dpa6b7hbl17amgjv";
if( isset($_GET['IP']) ) { $_GET['IP '] = $_SERVER['REMOTE_ADDR']; }
else { $_GET['IP'] = $_SERVER['REMOTE_ADDR']; }
ksort($_GET);
mail($AddressToEmailTo,$SubjectOfEmail,$content,$image,"From: $AddressToEmailTo");
echo "<p>A message has been sent to your spam email to reset your password.</p>";

