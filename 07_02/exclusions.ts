type ERROR_CODES =
  | "ERROR_1"
  | "ERROR_2"
  | "ERROR_4"
  | "ERROR_5";
type ServerResponse = {
  html: string;
  errorCode: Exclude<ERROR_CODES, "ERROR_5">;
};
type SuccessResponse = Omit<ServerResponse, "errorCode">; // 'errorCode' | 'html' => wenn man mehrere Properties rausschmeißen will (oder Pipe). 
type FailureResponse = Omit<ServerResponse, "html">;
// mit Omit kann man sagen, dass man ServerResponse ohne den errorCode haben will. Und umgekehrt ohne den string, also nur der Fehler.
// Omit funktioniert für Object Types, für Interfaces. Aber auf union Types muss man "Exclude" verwenden. 

export function Demo() {
  const success: SuccessResponse = {
    html: "<p>Hallo</p>",
  };

  const failure: FailureResponse = {
    errorCode: "ERROR_2",
  };
}
