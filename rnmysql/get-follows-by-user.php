<?php

/* PARA USAR ESTE LINK VC USA localhost/rnmysql/get-follows-by-user.php?channelUser={user} */

include('conexao.php');

$lista = array();
$follows = array();

$sql = "select * from follows";

$resultado = mysqli_query($conexao,$sql);

while($follow = mysqli_fetch_assoc($resultado)){
    $lista[] = $follow;
}

foreach($lista as $follow){
    if(trim(strtolower($follow['idUser'])) == trim(strtolower($_GET['id']))){
        $follows[] = $follow;
    }
}
echo json_encode($follows);
mysqli_close($conexao);