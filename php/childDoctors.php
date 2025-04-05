<?php
$titre_page = "Les spécialistes enfants";
// $description = "MA DESCRIPTION.";
// $keywords = "MES MOTS CLES";
?>

<?php require 'header.php'; ?>
<!-- <script defer type="module" src="/static/childDoctors.js"> -->
<link rel="stylesheet" href="../styles/styleChildDoctors.css">
<div class="div-input-child">
    <label for="input-child-doctors"></label>
    <input type="text" id="input-child-doctors" name="input-child-doctors" placeholder="...Recherchez..."/>
</div>

<div class="child-doctors"></div>

<?php require 'footer.php'; ?>