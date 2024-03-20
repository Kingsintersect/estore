
export const toCamelCase = (letter) => {
    const str = letter.toLowerCase();
    // str.charAt(0).toUpperCase() + str.slice(1);
    return str[0].toUpperCase() + str.slice(1);
}