const RAWG_API_KEY = 'a5920673abf64ec78de3c31d4f43978f';
const RAWG_API_URL = `https://api.rawg.io/api/games?dates=2024-03-01,2024-12-31&ordering=released&key=${RAWG_API_KEY}`;

export async function fetchUpcomingGames() {
    try {
        const response = await fetch(RAWG_API_URL);
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('❌ Error fetching games:', error.message);
        return { error: error.message };
    }
}
