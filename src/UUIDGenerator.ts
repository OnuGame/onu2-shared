function getRandomChar(chars: string): string {
    return chars.charAt(Math.floor(Math.random() * chars.length));
}

function generateRandomChars(chars: string, length: number): string {
    let random = "";
    for (let i = 0; i < length; i++) {
        random += getRandomChar(chars);
    }
    return random;
}

export function v4() {
    const chars = "012356789abcdef";

    const uuid =
        `${generateRandomChars(chars, 8)}-` +
        `${generateRandomChars(chars, 4)}-` +
        `${generateRandomChars(chars, 4)}-` +
        `${generateRandomChars(chars, 4)}-` +
        `${generateRandomChars(chars, 12)}`;

    // 8-4-4-4-12
    return uuid;
}
