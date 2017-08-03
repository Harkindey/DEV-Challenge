var config = {
  apiKey: "AIzaSyB8f3U26iDU_RhUorciAG_BdUe7bGSIaws",
  authDomain: "contact-database-95733.firebaseapp.com",
  databaseURL: "https://contact-database-95733.firebaseio.com",
  projectId: "contact-database-95733",
  storageBucket: "contact-database-95733.appspot.com",
  messagingSenderId: "362085595103"
};

firebase.initializeApp(config);


function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function Objectsize(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};
