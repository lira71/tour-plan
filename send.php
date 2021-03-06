<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$send_form = $_POST['send_form'];
// Формирование самого письма
if ($send_form == 'send_message') {
  $title = "Новая подписка Best Tour Plan";
  $body = "
  <h2>Новая подписка на рассылку</h2>
  <b>email:</b> $email<br>
  ";
};

if ($send_form == 'send_feedback') {
  $title = "Новое обращение Best Tour Plan";
$body = "
<h2>Новое обращение</h2>
<b>Имя:</b> $name<br>
<b>Телефон:</b> $phone<br><br>
<b>Сообщение:</b><br>$message
";
  };

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'lidia.nikogosyan.93@gmail.com'; // Логин на почте
    $mail->Password   = '2kzM163pA2kzM163pA'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('lidia.nikogosyan.93@gmail.com', 'Лидия Никогосян'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('lida.lidina.93@mail.ru');

// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
if ($send_form == 'send_message') {
    header('Location: subscribe.html');
  }; 
if ($send_form == 'send_feedback') {
    header('Location: thanks.html');
  }; 

