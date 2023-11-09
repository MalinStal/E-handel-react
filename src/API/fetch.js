export async function getAllProdukts() {
    const result = await fetch("https://dummyjson.com/products")
    const json = await result.json()
    return json
}
