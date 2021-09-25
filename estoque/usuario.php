<?php
include('conexao.php');

if(isset($_POST['nome'])){
    cadUsuario($_POST['nome'],$_POST['email'],$_POST['login'],$_POST['senha'],$_POST['nivel']);
}

if(isset($_GET['list'])){
    $users = listUsuario();
    $list = array();
    while($u = $users->fetch_object()){
        $list[] = $u;
    }
    echo json_encode($list);    
}


if(isset($_GET['id'])){
	delNivel($_GET['id']);
}
?>