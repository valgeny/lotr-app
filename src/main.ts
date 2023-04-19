import { LotrClient, LotrClientConfig } from "@valgeny/lotr-sdk"

/**
 * Api Configuration
 */
const lotrConfig: LotrClientConfig = {
    baseUrl: 'https://the-one-api.dev'
}
const TOKEN = "DWXQJQdXMmAE8zZdEeif"    // Note: Token might expire eventually

async function main() {
    console.log('Hello, World')
    await doSomothingWithLotr()
    console.log('Bye')
}

async function doSomothingWithLotr() {
    /** 
     * Initialize the Client 
     **/
    const client = new LotrClient(lotrConfig, TOKEN)


    /** 
     * Retrieve Data using the API 
     * */
    try {
        /**
         * List the 3 first available movies
         */
        const { docs: movies, total: _nMovies } = await client.getAllMovies({ limit: 3 })
        console.log(movies)

        /**
         * Get Movie infos using the MovieId
         */
        const { docs: ReturnOfTheKing } = await client.getMovieById('5cd95395de30eff6ebccde5d')
        console.log(ReturnOfTheKing)


        /**
         * Get 5 Quotes from a specific movie
         */
        const { docs: quotesFromRotK } = await client.getQuotesFromMovie('5cd95395de30eff6ebccde5d', { limit: 5, offset: 50 })
        console.log(quotesFromRotK)


    } catch (err) {
        console.error('Oops, something went wrong', err)
    }

}

// Run main function
main()