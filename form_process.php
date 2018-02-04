<?php 

// define variables and set to empty values
$name_error = $message_error = $phone_error = $address_error = $address_error = $subject_error ="";
$name = $phone = $message = $address = $success = $subject = "";

//form is submitted with POST method
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (empty($_POST["name"])) {
    $name_error = "이름을 입력해주세요.";
  } else {
    $name = white_space_trim($_POST["name"]);
  }
  
  if (empty($_POST["phone"])) {
    $phone_error = "";
  } else {
    $phone = html_tag_trim($_POST["phone"]);
  }

  if (empty($_POST["address"])) {
    $address_error = "거주지 정보를 간단하게 입력해주세요.";
  } else {
    $address = html_tag_trim($_POST["address"]);
  }

  if (empty($_POST["subject"])) {
    $subject_error = "제목을 입력해주세요.";
  } else {
    $subject = html_tag_trim($_POST["subject"]);
  }

  if (empty($_POST["message"])) {
    $message_error = "후기를 남겨주세요.";
  } else {
    $message = html_tag_trim($_POST["message"]);
  }
  
  if ($subject_error == '' and $name_error == '' and $phone_error == '' and $address_error == '' and $message_error == '' ){
      $message_body = '';
      unset($_POST['submit']);
      foreach ($_POST as $key => $value){
          $message_body .=  "$key: $value\n";
      }
      
      $to = 'followyourinnercompass@gmail.com';
      $subject = '신세계치과 홈페이지 후기 도착';

      if (mail($to, $subject, $message_body)){
          $success = "소중한 후기 감사드립니다.";
          $name = $subject = $phone = $message = $address = '';
      }
  }
  else
  {

  }
  
}


function html_tag_trim($data) {
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

function white_space_trim($data) {
  $data = trim($data);
  $data = html_tag_trim($data);
  return $data;
}


?>
