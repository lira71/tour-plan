<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = isset($_POST['name']) ? $_POST['name'] : null;
$phone = isset($_POST['phone']) ? $_POST['phone'] : null;
$message = isset($_POST['message']) ? $_POST['message'] : null;
// отправка данных на подписку
$email = isset($_POST['email']) ? $_POST['email'] : null;

if (null === $email) {
	// Формирование самого письма
	$title = "Новое обращение Best Tour plan";
	$body = "
	<h2>Новое обращение</h2>
	<b>Имя:</b> $name<br>
	<b>Телефон:</b> $phone<br><br>
	<b>Сообщение:</b><br>$message
	";
} else {
	//Письмо на подписку новостей
	$title = "Подписка  на рассылку Best Tour Plan";
	$body = "
	<h2>Subscribe to our NEWSLETTER</h2>
	<b>Почта:</b> $email<br>
	<b>Сообщение:</b>
	Благодарим Вас за подписку на рассылку свежих новостей!
	";
}

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.yandex.ru'; // SMTP сервера вашей почты
    $mail->Username   = 'vasin.da93@yandex.ru'; // Логин на почте
    $mail->Password   = '_FwbF23Y4ZXrtdG'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('vasin.da93@yandex.ru', 'Денис Васин'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('vasin.da93@gmail.com');

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
if (null === $email) {
	echo file_get_contents('thanks.html');
} else {
	echo file_get_contents('subscribe.html');
}
