<?php 
echo '<pre>';
print_r($_POST);
echo '</pre>';
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nama = $_POST['NAMA'] ;
    $email = $_POST['EMAIL'] ;
    $number = $_POST['NUMBER'] ; 
    $pesan = $_POST['PESAN'] ;

    // Simpan file ke /database/kirim email
    echo "Terima kasih, $nama. Pesan Anda sudah diterima.";
}
?>
