type SomeValueFunc = () =>
  | string
  | number
  | { name: string };

const getSomeValue: SomeValueFunc = () => {
  return 3;
};

export function Demo() {
  let value = getSomeValue();

  if (
    typeof value !== "number" &&
    typeof value !== "string"
  ) {

  // Dans TS on ne peut pas mettre seulement value.name, car le type pourrait être aussi un string ou un nombre. C'est pourquoi on utilise dans JS une procédure d'axclusion avec typeof ou instanceof.
  // En utilisant typeof, on exclut les deux premiers types et du coup, en faisant console.log, ca ne peut être que le troisième type défini plus haut. On appelle ca le Type Guarding.
    console.log(value.name);
  }

  if (value instanceof Object) {
    console.log(value.name);    
  }
  // Là aussi, on fait en sorte que seul le typ Object soit pris en compte. 

  const myObject: { foobar?: { foo: boolean } } = {};
  // Pareil avec les null et undefined values. Foobar est ici optionel. Si on veut émettre foo de foobar, par ex. en faisant console.log(myObject.foobar.foo), TS se plaint, car foobar pourrait aussi être undefined. En utilisant un "if", TS sait que foobar peut aussi être défini et on peut avoir accès à foobar.foo.

  if (myObject.foobar) {
    console.log(myObject.foobar.foo);
  }
}
