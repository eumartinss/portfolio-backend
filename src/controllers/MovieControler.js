class MovieController {
    static async getMoviePlot (req,res) {
        const MovieName = req.query.movie;
        try{
            //aqui vai o plot traduzido
            res.status(200).json(MovieName)
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }
}

export default MovieController