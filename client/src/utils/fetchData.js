export const animeOptions = {
  method: 'GET',

  headers: {
    'X-RapidAPI-Key': '97ca806481mshaa8976e614f5b5cp10b791jsn944e74ed2b37',
    'X-RapidAPI-Host': 'myanimelist.p.rapidapi.com'
  }
};


export const fetchData = async(url, options) => {
    const response = await fetch(url, options)
    const data = await response.json()

    return data
}
