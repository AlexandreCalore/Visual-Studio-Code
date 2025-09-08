<?php
// Simulação de processamento de formulário
if ($_SERVER["REQUEST_METHOD"] == "POST") {
$nome = $_POST["nome"];
$email = $_POST["email"];
$mensagem = $_POST["mensagem"];

echo "<h1>Mensagem Recebida!</h1>";
echo "<p>Obrigado, $nome. Seu e-mail ($email) foi registrado.</p>";
echo "<p>Mensagem enviada: <em>$mensagem</em></p>";
echo "<a href='index.html'>Voltar</a>";
}
?>