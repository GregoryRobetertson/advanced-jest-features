function fetchData(url) {
    return new Promise( resolve => {
    setTimeout(() =>  {
       resolve (`Fetched data from ${url}`)
    }  ,"1000")
    })
}

module.exports = fetchData;