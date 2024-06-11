export const getCharacter = async (character) => {
    const url = ` https://narutodb.xyz/api/character/search?name=${character}`
    const response = await fetch(url)
    const disney = await response.json()

    return disney
}