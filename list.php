<?php 
$lista_json = file_get_contents(__DIR__."/store.json");
$lista = json_decode($lista_json);
header("content-type : application/json");
echo json_encode($lista);
?>