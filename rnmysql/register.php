<?php

include('conexao.php');

$name = $_GET['name'] ?? '';
$user = $_GET['user'] ?? '';
$description = '';
$email = $_GET['email'] ?? '';
$password = $_GET['password'] ?? '';

if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
    echo json_encode(false);
    exit;
}

$date = date_create();
$timestamp = date_timestamp_get($date);

$sql = "insert into channel (name, user, description, email, password, date) values ('".$name."', '".$user."', '".$description."', '".$email."', '".password_hash($password,PASSWORD_DEFAULT)."', '".$timestamp."')";

$bd = mysqli_query($conexao,$sql);

echo json_encode(true);
exit;