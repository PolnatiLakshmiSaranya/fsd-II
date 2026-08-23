const express=require('express');
const app=express();
const PORT=3000;

app.use(express.json());

let movies=[
    {
        id:1,title: "Interstellar"
    },
    {
        id:2,title: "Avengers: Infinity War"
    }
];

app.get('/movies',(req,res)=>{
    res.json(movies);
});

app.post('/movies',(req,res)=>{
    const newMovie={
        id: req.body.id != null?req.body.id: movies.length+1,
        title: req.body.title
    };
    movies.push(newMovie);
    res.status(201).json(newMovie);
});

app.put('/movies/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    const movie=movies.find(m=>m.id===id);
    if(movie){
        movie.title=req.body.title;
        res.json({
            message: "Movie updated successfully",
            movie: movie
        });
    } else{
        res.status(404).json({
            error: "Movie not found"
        });
    }
});

app.delete('/movies/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    movies=movies.filter(movie=>movie.id!==id);
    res.json({
        message: `Movie ${id} deleted`,
        remainingMovies: movies
    });
});

app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});