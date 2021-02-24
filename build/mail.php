<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'] ? $_POST['email'] : '<i>Не указано</i>';
$formcontent = "Заявка МЕТОД ТРИГГЕРА<br> 
            <ul>
              <li>Имя: $name</li>
              <li>Телефон: $phone</li>
              <li>Email: $email</li>
            </ul>
            ";

$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= "Content-type: text/html; charset=utf-8 \r\n";
$headers .= "From: МЕТОД ТРИГГЕРА — психологический тренинг <metodtrigger@yandex.ru>\r\n";

$recipient = "avtosity-as@yandex.ru";
$subject = "Заявка МЕТОД ТРИГГЕРА";

if(isset($name) && isset($phone)) {
    mail($recipient, $subject, $formcontent, $headers);
}
?>