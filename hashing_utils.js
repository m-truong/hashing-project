const hashString = (string) => {
    let hash = 0;
    if (string.length === 0) return hash;
    for (let i = 0; i < string.length; i++) {
        // note: .charCodeAt() is built-in method and converts the char to it's integer value
        charCode = string.charCodeAt(i);
        hash = (hash << 5) - hash + charCode;
        hash|= 0;
    }
    return hash;
}

const computeScore = (username, server) => {
    const usernameHash = hashString(username);
    const serverHash = hashString(server);
    return (usernameHash * 13 + serverHash * 11) % 67;
};

module.exports.hashString = hashString;
module.exports.computeScore = computeScore;