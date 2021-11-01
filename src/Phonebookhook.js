import { useContext } from "react";
import PhonebookContext from "./PhonebookContext";

export default function usePhonebook() {
    return useContext(PhonebookContext)
}
