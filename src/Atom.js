import { atom } from "recoil"

export const contactAtom = atom({
    key: "contact-info",
    default: {firstName: "", lastName: "", company: "", email: ""}
})