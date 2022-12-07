<?php

$idUser = $_GET['idUser'];
$lista = array();

$lista[] = $idUser;

$filename = './icons/profile/'.$idUser.'.jpg';

if (file_exists($filename)) {
    echo json_encode('true');
} else {
    echo json_encode('false');
}
?>