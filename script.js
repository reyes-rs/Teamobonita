function showSurprise() {
  const el = document.getElementById('surprise');
  el.classList.remove('hidden');
}
const historia = `Yo desde el primer día que te vi me enamoraste. 
En 1er año de secundaria, cuando entramos, era una persona super penosa (y a veces aún lo soy), pero te vi y solo pensé en lo bonita que eras y te lo dije... como, no sé, pero desde ese día me gustaste y aún me acuerdo cómo vestías.

Luego un 13 de septiembre del 2023, te reaccioné a una historia que sinceramente no sabía que eras tú, y después te mandé un mensaje... y me contestaste. Vi quién eras y ni me lo creía.

Desde ahí surgió nuestra historia. Seguimos hablando, a veces dejábamos de hablar días o semanas porque te castigaban, pero yo me quedaba esperándote... y lo seguiré haciendo, como siempre lo he hecho.

Y un 14 de febrero del 2024 te pedí ser mi novia. Todo feo, pero lo hice... porque te dije que lo haría si ganaban los Chiefs de fútbol americano. Ganaron, y lo hice.

Ahora seguimos juntos, casi 2 años hablando, y 1 año y 3 meses de novios. Espero seguir mucho más, estar contigo en todo momento, apoyarte y amarte como lo mereces. 

Soy afortunado de haberte conocido y estar contigo. 
Te amo.`;

function escribirTexto(texto, elementoId, velocidad = 25) {
  const elemento = document.getElementById(elementoId);
  let i = 0;

  function escribir() {
    if (i < texto.length) {
      elemento.textContent += texto.charAt(i);
      i++;
      setTimeout(escribir, velocidad);
    }
  }

  escribir();
}

window.onload = function () {
  escribirTexto(historia, "typed-text", 30);
};
