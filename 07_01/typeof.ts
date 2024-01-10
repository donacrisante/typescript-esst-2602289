export function Demo() {
  const myObject = { price: 300 };
  const typeOfTest = typeof myObject;

  type MyObjectType = typeof myObject;

  const myString = "hello";
  type MyStringType = typeof myString;

  // Hier ist der Typ "hello", weil es eine const ist und unveränderlich. Es kann also niemals etwas anderes sein als "hello".

  let myString2 = "hello";
  type MyStringType2 = typeof myString2;

  // Es ist jetzt keine Konstante mehr, sondern veränderlich, und TS leitet ab, es muss ein String sein. 
  
  // typeof verändert sich anders bei der Ausführung von Code, als bei der Definition innerhalb von Typen.

  console.log(typeOfTest);
}

Demo();
