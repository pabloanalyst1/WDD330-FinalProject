const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
const NEWS_API_URL = `https://newsapi.org/v2/everything?q=gaming OR technology&language=en&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`;

export async function fetchNews() {
    try {
        const response = await fetch(PROXY_URL + NEWS_API_URL, {
            headers: {
                'User-Agent': 'Mozilla/5.0',
                'Accept': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        return data.articles;
    } catch (error) {
        console.error('❌ Error fetching news:', error.message);
        return { error: error.message };
    }
}
