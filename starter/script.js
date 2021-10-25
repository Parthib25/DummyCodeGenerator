const para = [
  `Dummy text refers to the bits of content that are used to fill a website mock-up. This text helps web designers better envision how the website will look as a finished product. It is important to understand that dummy text has no meaning whatsoever. Its sole purpose is to fill out blank spaces with “word-like” content, without making any copyright infringements.`,
  `A dummy text generator gives web designers the content they need. Then, they can use the typefaces and layout they prefer, thus obtaining the best mock-up of their work. It would be best to be impossible to understand and read because people might get distracted by the text itself and its nonsense rather than analyzing how the typefaces integrate into the design instead.`,
  `Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores. At solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles.`,
  `Nouvelle trouvait supplice lupanars revendre me la. Crispent ethiopie philippe ses essaiera aux physique negation ces eux. Gagnent car elancer moi effraie ici entendu entrevu. Cravaches annoncait ah epluchant ce. Ans chambrees mal dentelles tiendrons mystiques. Habilement crispation au ne asiatiques un pressaient tu renferment.`,
  `The woman now gave Dorothy a bed to sleep in, and Toto lay down beside her, while the Lion guarded the door of her room so she might not be disturbed. The Scarecrow and the Tin Woodman stood up in a corner and kept quiet all night, although of course they could not sleep.`,
  `Some of us may know that popular rapper Snoop Dogg coined his own language. Why he did it, no one is really sure, but it’s something that spread like wild fire. Commonly called the ‘izzle’ language, this text generator takes normal ‘lorem ipsum’ talk and converts it into the eloquent ‘izzle’ language.`,
  `I’m sure I’m not the only one that knows the theme song to most of my favorite shows, or their popular catch phrases. This text generator puts them on display by rendering random theme song lyrics, titles and catch phrases. It’s kind of fun to go through them and figure out where each phrase comes from.`,
  `They call him Flipper Flipper faster than lightning. No one you see is smarter than he. In a freak mishap Ranger 3 and its pilot Captain William Buck Rogers are blown out of their trajectory into an orbit which freezes his life support systems and returns Buck Rogers to Earth five-hundred years later. Didnt need no welfare states.`,
  `Miner’s Lettuce orache lagos bologi ensete broadleaf arrowhead canna wild leek chinese artichoke. Hamburg parsley, tarwi, broccoli rabe greater plantain welsh onion water chestnut onion. Moth bean, burdock, polk elephant foot yam elephant foot yam asparagus black-eyed pea good king henry.`,
  `99% of the time I love web design. I’m just glad I have a gym membership for the 1% that I don’t..sabado começo o curso de Web design. Done doing web design tonight.. let’s see what tomorrow morning brings!. Profit By Outsourcing, The Web Design India Company Sought to Sculpt The Prominent Property Portal. Took a web design class once coming in handy for my tumblr :).`,
];
const form = document.querySelector(".Lorem-form");
const enter = document.querySelector(".count");
const text = document.querySelector(".content");
const foot = document.querySelector(".footer");
const copy = document.querySelector(".copy1");
const note = document.querySelector(".note");
form.addEventListener("submit", function (a) {
  a.preventDefault();
  const value1 = Number(enter.value);
  let random = Math.trunc(Math.random() * para.length);
  if (isNaN(value1) || value1 <= 0 || value1 > 10) {
    text.innerHTML = `<p class="article-content">${para[random]}</p>`;
    foot.innerHTML = `THANK YOU 🙏`;
  } else {
    let temp = para.slice(0, value1);
    temp = temp.map(function (item) {
      return `<p class="each-para">${item}</p>`;
    });
    text.innerHTML = temp.join(" ");
    foot.innerHTML = `THANK YOU 🙏`;
    note.innerHTML = `<img src="starter/img/images.png" class="note1">`;
  }
});
copy.addEventListener("click", function () {
  var copyed = text.textContent;
  navigator.clipboard.writeText(copyed);
  if (copyed == "") {
    alert("No text to copy:(");
  } else {
    alert("Text Copied:)");
  }
});
