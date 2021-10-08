const capitalizeLetter = (string, index) => {
    return string.charAt(index).toUpperCase() + string.slice(index+1);
}

export default capitalizeLetter;