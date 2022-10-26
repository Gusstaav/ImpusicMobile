<?php

/* PARA USAR ESTE LINK VC USA localhost/rnmysql/get-channel-by-id.php?channelId={id-do-canal-q-quer-procurar} */

include('conexao.php');

$lista = array();

$sql = "select * from channel";

$resultado = mysqli_query($conexao,$sql);

while($channel = mysqli_fetch_assoc($resultado)){
    $lista[] = $channel;
}
foreach($lista as $channel){
    if(trim($channel['id']) == trim($_GET['channelId'])){
        echo json_encode($channel);
    }else{
        echo json_encode('Este canal não existe ou não está disponível!');
    }
}
mysqli_close($conexao);