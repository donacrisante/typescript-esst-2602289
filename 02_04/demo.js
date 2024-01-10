// @ts-check

export const name = "Foobar";
name = "Hello";

/** @type {boolean} */
let isOn = "test";


// ces commentaires permettent d'activer une "Typunterstützung". C'est souligné en rouge, car on ne peut pas définir deux fois "name" et dans le deuxième exemple, on s'attend à avoir un bouléen, pas un string.