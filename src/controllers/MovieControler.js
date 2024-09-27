import MovieService from "../services/MovieService.js";
import { formatMovieObject } from "../ultis/helpers.js";

class MovieController {
    static async getMoviePlot (req,res) {
        const movieName = req.query.movie;
        try{
            const moviePlot = await MovieService.getMovieInfo(movieName)
            const response = formatMovieObject(moviePlot)
            res.status(200).json(response)
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }
}

export default MovieController