<?php

include('conexao.php');

$lista = array();

$sql = "select * from videos";

$resultado = mysqli_query($conexao,$sql);

while($video = mysqli_fetch_assoc($resultado)){
    $lista[] = $video;
}

foreach($lista as $video){
    if(trim($video['id']) == trim($_GET['videoId'])){
        echo json_encode($video);
    }
}
mysqli_close($conexao);