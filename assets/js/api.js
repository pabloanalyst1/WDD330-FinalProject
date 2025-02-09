const NEWS_API_KEY = '44eb1044318d42de9866896ae12b341e';
const NEWS_API_URL = `https://newsapi.org/v2/everything?q=gaming OR technology&language=en&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`;

export async function fetchNews() {
    try {
        const response = await fetch(NEWS_API_URL, {
            headers: {
                'User-Agent': 'Mozilla/5.0',  // Añadimos esta cabecera
                'Accept': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        if (!data.articles || data.articles.length === 0) {
            throw new Error("No news articles found.");
        }

        return data.articles;
    } catch (error) {
        console.error('❌ Error fetching news:', error.message);
        return { error: error.message };
    }
}
