<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $data = json_decode(file_get_contents("php://input"), true);

    $name = $data['name'];
    $email = $data['email'];

    // Process the form data here, e.g., save to database

    echo json_encode(["message" => "Form submitted successfully", "name" => $name, "email" => $email]);
} else {
    echo json_encode(["message" => "Invalid request"]);
}
?>