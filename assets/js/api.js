const GNEWS_API_KEY = 'b4060212b0295057d1776747afc62d56';
const GNEWS_API_URL = `https://gnews.io/api/v4/search?q=gaming OR technology&lang=en&max=10&token=${GNEWS_API_KEY}`;

export async function fetchNews() {
    try {
        const response = await fetch(GNEWS_API_URL);

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
