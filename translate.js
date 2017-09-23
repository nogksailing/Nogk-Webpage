//Translating

var translationsEN = [
    "NOGK - Nautical Club of Gazi, Crete",
    "Home",
    "Announcements",
    "Sailing",
    "Media",
    "Race Results",
    "Training",
    "Contact",
    "English",
    "Greek"
];
var translationsGR = [
    "ΝΟΓΚ - Ναυταθλητικός Όμιλος Γαζίου Κρήτης",
    "Αρχική",
    "Ανακοινώσεις",
    "Κλάσεις",
    "Εικόνες - Συνδέσεις",
    "Αποτελέσματα Αγώνων",
    "Προπονήσεις",
    "Επικοινωνία",
    "Αγγλικά",
    "Ελληνικά"
];


$(document).ready(function() {
    $(".js-translate-button-en").click(function() {
        for(var i = 0; i < translationsEN.length; i++) {
            $(".js-translate-"+ i).innerHTML = translationsEN[i];
        };
    });
    $(".js-translate-button-gr").click(function() {
        for(var i = 0; i < translationsGR.length; i++) {
            $(".js-translate-"+ i).innerHTML = translationsGR[i];
        };
    });
    
}

