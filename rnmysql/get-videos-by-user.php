<?php

/* PARA USAR ESTE LINK VC USA localhost/rnmysql/get-videos-by-user.php?channelUser={user} */

include('conexao.php');

$lista = array();
$videos = array();

$sql = "select * from videos";

$resultado = mysqli_query($conexao,$sql);

while($video = mysqli_fetch_assoc($resultado)){
    $lista[] = $video;
}

foreach($lista as $video){
    if(trim(strtolower($video['channelUser'])) == trim(strtolower($_GET['channelUser']))){
        $videos[] = $video;
    }
}
echo json_encode($videos);
mysqli_close($conexao);