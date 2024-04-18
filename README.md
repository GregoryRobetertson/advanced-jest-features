# advanced-jest-features

# Running Tests and Utilizing Mocking

## fetchData Function

### Purpose:
The `fetchData` function is designed to simulate fetching data from a specified URL asynchronously using a Promise. It resolves with a message indicating that data has been fetched from the provided URL.

### Test Cases:
1. **Using `.then` syntax:**
    - **Scenario:** Test whether the `fetchData` function successfully fetches data using `.then` syntax.
    - **Rationale:** Ensure that the function behaves as expected when data is fetched asynchronously.
    - **Mocking:** No mocking is employed as the function under test does not interact with external services or dependencies.

2. **Using `async/await` syntax:**
    - **Scenario:** Test whether the `fetchData` function successfully fetches data using `async/await` syntax.
    - **Rationale:** Confirm that the function works correctly with modern asynchronous syntax.
    - **Mocking:** No mocking is employed here as well since the function is tested in its real environment.

```javascript
const fetchData = require('./dataFetcher');

describe('fetchData', () => {
    test('should fetch data using .then', () => { 
        const url = 'http://example.com';
        return fetchData(url).then(data => {
            expect(data).toBe(`Fetched data from ${url}`);
        });
    });

    test('should fetch data using async/await', async () => {
        const url = 'http://example.com';
        const data = await fetchData(url);
        expect(data).toBe(`Fetched data from ${url}`);
    });
});
