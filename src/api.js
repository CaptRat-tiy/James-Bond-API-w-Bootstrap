window.onload = function Bond () {
  let characterNames = [];
  let bio = [];
  let isAlly = [];
  let isBondGirl = [];
  const url = `https://007api.co/api/characters/`

  var btn = document.getElementById("button");

  $.ajax({
    url: url
  }).done(function(data) {
    // console.log('The ORIGINAL, returned object is:', data);

  btn.addEventListener("click", function() {

      let results = data.results;
        // console.log(results);

      isAlly = results.filter(function(element,index) {
         return element.ally;
       })

         bio = results.filter(function(element,index) {
            return element.bio;
          })
          console.log('this is a test');

 document.getElementById("character").innerHTML= isAlly[0].name;
 document.getElementById("bio").innerHTML= isAlly[0].bio;
 document.getElementById("ally").src = "../images/allies/Valentine.jpeg";

    })
  })
}
