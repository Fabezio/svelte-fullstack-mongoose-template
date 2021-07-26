export default function addSpace(str) {
        const arr = str.split("");
        arr.splice(8, 0, " ");
        arr.splice(6, 0, " ");
        arr.splice(4, 0, " ");
        arr.splice(2, 0, " ");
        str = arr.join("");
        return str;
    }