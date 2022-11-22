<?php
    $senha = $_GET['password'];
    $email = $_GET['email'];

    include('conexao.php');

    $lista = array();

    $sql = "select * from channel";

    $resultado = mysqli_query($conexao,$sql);

    while($channel = mysqli_fetch_assoc($resultado)){
        $lista[] = $channel;
    }
    foreach($lista as $channel){
        if(trim(strtolower($email)) == $channel['email']){

            if(password_verify($senha,$channel['password'])){
                echo json_encode($channel);
                exit;
            }
        }
    }
        echo json_encode(false);
    mysqli_close($conexao);
?>