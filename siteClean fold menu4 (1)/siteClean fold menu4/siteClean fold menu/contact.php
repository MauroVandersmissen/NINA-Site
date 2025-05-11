<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "speelzeker@outlook.be";
    $subject = "Nieuw contactformulier van SPEELZeker";

    // Veilig ophalen van formulierdata
    $naam = htmlspecialchars($_POST["naam"] ?? "");
    $functie = htmlspecialchars($_POST["functie"] ?? "");
    $email = filter_var($_POST["email"] ?? "", FILTER_SANITIZE_EMAIL);
    $tel = htmlspecialchars($_POST["tel"] ?? "");
    $bericht = htmlspecialchars($_POST["bericht"] ?? "");

    $diensten = [];
    foreach (["plaatsing", "onderhoud", "ontharden", "beplanting", "herstelling", "risicoanalyse"] as $dienst) {
        if (isset($_POST[$dienst])) {
            $diensten[] = ucfirst($dienst);
        }
    }

    $bereik = $_POST["bereik"] ?? "Niet opgegeven";

    $message = "Nieuw bericht via het contactformulier:\n\n";
    $message .= "Naam: $naam\n";
    $message .= "Functie: $functie\n";
    $message .= "E-mail: $email\n";
    $message .= "Telefoonnummer: $tel\n\n";
    $message .= "Geselecteerde diensten: " . implode(", ", $diensten) . "\n";
    $message .= "Voorkeur contactmoment: $bereik\n\n";
    $message .= "Bericht:\n$bericht";

    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n";

    if (mail($to, $subject, $message, $headers)) {
        echo "Bedankt! Je bericht is verzonden.";
    } else {
        echo "Er is iets misgegaan bij het verzenden.";
    }
} else {
    echo "Ongeldige aanvraag.";
}
?>
