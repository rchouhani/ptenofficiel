<?php
$titre_page = 'Les spécialistes adultes';
// $description = "MA DESCRIPTION.";
// $keywords = "MES MOTS CLES";
?>

<?php require 'header.php'; ?>
<link rel="stylesheet" href="../styles/style-adult-doctors.css">
<script defer type="module" src="../static/scriptAdultDoctors.js"></script>
<div class="div-input-doctors">
    <label for="input-doctors"></label>
    <input type="text" id="input-doctors" name="input-doctors" placeholder="...Recherchez..."/>
</div>


<div class="adult-doctors"></div>

<?php require 'footer.php'; ?> 