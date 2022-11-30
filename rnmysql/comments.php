<?php

/* PARA USAR ESTE LINK VC USA localhost/rnmysql/comments.php?videoId={id-do-canal-q-quer-procurar} */

include('conexao.php');

$lista = array();
$comments = array();

$sql = "select * from comments";

$resultado = mysqli_query($conexao,$sql);

while($channel = mysqli_fetch_assoc($resultado)){
    $lista[] = $channel;
}
foreach($lista as $channel){
    if(trim($channel['videoId']) == trim($_GET['videoId'])){
        $comments[] = $channel;
    }
}
echo json_encode($comments);
mysqli_close($conexao);