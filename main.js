function changeTheImg() {
  var randomNumber1 = [
      "images/dice1.png",
      "images/dice2.png",
      "images/dice3.png",
      "images/dice4.png",
      "images/dice5.png",
      "images/dice6.png",
    ],
    randomNumber2 = [
      "images/dice1.png",
      "images/dice2.png",
      "images/dice3.png",
      "images/dice4.png",
      "images/dice5.png",
      "images/dice6.png",
    ];
  var firValue = Math.floor(Math.random() * randomNumber1.length),
    secValue = Math.floor(Math.random() * randomNumber2.length);
  document.querySelector(".img1").setAttribute("src", randomNumber1[firValue]);
  document.querySelector(".img2").setAttribute("src", randomNumber2[secValue]);
}
