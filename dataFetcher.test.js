const fetchData = require('./dataFetcher');


describe('fetchData', () => {
    test('should fetch data using .then', () => { 
        const url = 'http://example.com';
        return fetchData(url).then(data => {
expect(data).toBe(`Fetched data from ${url}`)
        })
     })
} )

test('should fetch data using async/await', async () => {
    const url = 'http://example.com';
    const data = await fetchData(url);
    expect(data).toBe(`Fetched data from ${url}`);
  });
  