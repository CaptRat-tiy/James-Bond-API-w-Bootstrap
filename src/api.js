window.onload = function Bond () {
  const characterNames = [];
  const bio = [];
  const isAlly = [];
  const isBondGirl = [];
  const movieTitle = [];
  const url = `http://007api.co/api/characters/`

  var btn = document.getElementById("characters");



  $.ajax({
    url: url
  }).done(function(data) {
    console.log('The returned object is:', data);

      const results = data.results;
      const resultsLength = results.length;

      for (let i = 0; i < resultsLength; i++) {
        characterNames.push(results[i].name);
        bio.push(results[i].bio);
        isAlly.push(results[i].ally);
        isBondGirl.push(results[i].bond_girl);
      }

// Add button to select character

      // btn('#characters').addEventListener("click", function() {
      //   alert("button pushed")


// name variables and concat after!
console.log(characterNames)

      // document.getElementById("characters").innerHTML = characterNames; // document.getElementById("bio").innerHTML = bio;
        // document.getElementById("ally").innerHTML = isAlly;
        // document.getElementById("bondgirl").innerHTML = isBondGirl;
        // for (let i = 0; i< resultsLength; i++)
        // {
        //   document.innerHTML += "The character " + (document.getElementById('names').innerHTML = characterNames[i])  + "Bio: " + (document.getElementById('bio').innerHTML =bio[i]) +" is James Bond's good friend.  Right? " + (document.getElementById('ally').innerHTML = isAlly[i]) + "!  Since Sean Connory rocked the 007 role, these women " + (document.getElementById('bondgirl').innerHTML = isBondGirl[i]) + " became the eye-candy necessary to keep us watching, until Daniel Craig, again, stirred the role!"
        // }

    })
  }
