const calcBodyStyle = {
  height: "500px",
  width: "400px",
  backgroundColor: "black",
  display: "grid",
  gridTemplateRows: "1fr 4fr",
};

const keypadStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(4 ,1fr)",
  gap: "5px",
  backgroundColor: "beige",
  fontSize: "2rem",
  borderRadius:"20px"
};

const screenStyle = {
  backgroundColor: "beige",
  color: "black",
  textAlign: "right",
  fontSize:"3.5rem",
  fontWeight:"700",
  borderRadius:"20px",
  overflow:"auto"
  // alignSelf:"self-end",
};

const mathSymbols = [
  { symbol: "reset", type: "reset", value: "C" },
  { symbol: "multiply", type: "operator", value: "*" },
  { symbol: "divide", type: "operator", value: "/" },
  { symbol: "add", type: "operator", value: "+" },

  { symbol: "seven", type: "number", value: "7" },
  { symbol: "eight", type: "number", value: "8" },
  { symbol: "nine", type: "number", value: "9" },
  { symbol: "subtract", type: "operator", value: "-" },

  { symbol: "four", type: "number", value: "4" },
  { symbol: "five", type: "number", value: "5" },
  { symbol: "six", type: "number", value: "6" },
  { symbol: "equal", type: "equate", value: "=" },

  { symbol: "one", type: "number", value: "1" },
  { symbol: "two", type: "number", value: "2" },
  { symbol: "three", type: "number", value: "3" },
  { symbol: "zero", type: "number", value: "0" },
];

export { keypadStyle, calcBodyStyle, mathSymbols,screenStyle };
