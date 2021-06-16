import { atom } from "jotai";

const getUsuario: any = () => {
    const usuario = localStorage.getItem('estrella');
    if (usuario) {
        return JSON.parse(usuario);
    } 

    return {};
}

// const usuarioAtom = atom<string, number>(
//     get => get(getUsuario()),
//     (_get, set, num) => set(strAtom, String(num))
// )

const usuarioAtom = atom<any>(getUsuario());

export default usuarioAtom;