<?php
$titre_page = 'Les spécialistes enfants';
// $description = "MA DESCRIPTION.";
// $keywords = "MES MOTS CLES";
?>

<?php require 'header.php'; ?>
<link rel="stylesheet" href="../styles/style-child-doctors.css">
<div class="div-input-doctors">
    <label for="input-doctors"></label>
    <input type="text" id="input-doctors" name="input-doctors" placeholder="...Recherchez..."/>
</div>

<div class="child-doctors"></div>

<?php require 'footer.php'; ?>