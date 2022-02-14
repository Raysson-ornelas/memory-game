function getApi(){
    const baseUrl = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Dark Magician';
    fetch(baseUrl)
    .then(res=>res.json())
    .then(
        (result) =>{
            return result.data[0];
        }
    )
}
export default getApi;