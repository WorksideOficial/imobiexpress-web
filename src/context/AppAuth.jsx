import { useContext } from "react"
import { AppContext } from "./AppContext"

export const AppAuth = () => {
  const context = useContext(AppContext);
  return context;
}