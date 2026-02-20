import { createContext } from "react";

 const baseContext = createContext(1);
 const baseSetContext = createContext(() => {});

export { baseContext, baseSetContext };