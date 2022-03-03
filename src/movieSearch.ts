import { API_KEY } from "./apiKey"

const API_URL = "https://api.nytimes.com/svc/movies/v2/reviews/search.json"

const getURL = (movieName: string) => {
    return `${API_URL}?query=${movieName}&api-key=${API_KEY}`
}

const getData = async () => {
    try {
        let url = getURL('batman')
        let response = await fetch(url)
        let json = await response.json()
        log(json.results)
      } catch {
        log("failed to reach the URL")
      }
}

export class MovieSearch extends Entity {

    constructor(){
        super()
        log('I created a stock ticker')

        this.addComponent(new BoxShape())
        this.addComponent(new Transform({
            position: new Vector3(8,1,8)
        }))
        engine.addEntity(this)

        executeTask(async () => {
            let data = await getData()
            log('DATA', data)
        })
    }
}