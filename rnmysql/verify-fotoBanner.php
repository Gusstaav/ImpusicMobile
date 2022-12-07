<?php

$idUser = $_GET['idUser'];

$filename = './banner/'.$idUser.'.jpg';

if (file_exists($filename)) {
    echo json_encode('true');
} else {
    echo json_encode('false');
}
?>