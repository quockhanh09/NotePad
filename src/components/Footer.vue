<template>
  <div class="footer">

<div style="text-align: center">
    <p style="padding: 30px 0 10px 0">
        <a target="_blank" rel="nofollow" href="https://apps.apple.com/app/a-notepad-take-share-notes/id1494609935"><img alt="Download on the Apple Store" src="https://cdn.anotepad.com/images/badge_applestore.png" height="45"></a> &nbsp;
        <a target="_blank" rel="nofollow" href="https://play.google.com/store/apps/details?id=com.anotepad.android"><img alt="Get it on Google Play" src="https://cdn.anotepad.com/images/badge_playstore.png" height="45"></a>
    </p>
    <p>© 2009-2023 aNotepad.com</p>
</div>

<p>
    <a href="/about">About</a>
    | <a href="/privacy">Privacy</a>
    | <a href="/features">Features</a>
         | <a href="https://www.gotresumebuilder.com" target="_blank">Resume Builder</a>
         | <a href="https://www.gotfreefax.com" target="_blank">Free Fax</a>
    | <a href="/reportabuse">Report Abuse</a>
</p>

<p>aNotepad.com is your everyday online notepad. You can take notes and share notes online without having to login.
<br>
You can use a rich text editor and download your note as PDF or Word document.
<br>
Best of all - aNotepad is a fast, clean, and easy-to-use notepad online.<br><br></p>

</div>
</template>

<script>
import "./styles/style.css"
export default {
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>

<style scoped>
.footer {
    background-color: #4682b4;
    text-align: center;
    width: 100%;
    padding: 20px 0;
    position: relative;
    top : 300px;
}

.footer p {
    margin: 0;
    color: white;
    font-size: 14px;
}

.footer a {
    text-decoration: none;
    color: white;
    margin: 0 10px;
    font-weight: bold;
    font-size: 14px;
}


</style>

