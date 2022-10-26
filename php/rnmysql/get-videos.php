<?php

/* PARA USAR ESTE LINK VC USA localhost/rnmysql/search-video.php?videoId={id-do-video-q-quer-procurar} */

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
    }else{
        echo json_encode('Este vídeo não existe ou não está disponível!');
    }
}
mysqli_close($conexao);