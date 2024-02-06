import express, { urlencoded } from 'express';
import shows from './data/shows.js';
const app = express();
const PORT = 8000;

app.use(express.json());

// console.log(shows);
let showlist = [...shows];

app.get("/shows", (req,res) => {
    res.json(showlist);
})

app.get("/shows/:year", (req,res) => {
    res.json(showlist.filter(s => s.yearCreated == req.params.year));
})

app.post("/shows", (req, res) => {
    showlist = [...showlist, req.body]
    res.json(req.body);
})

app.delete("/shows/:title", (req, res) => {
    showlist = shows.filter(s => s.tvShow !== req.params.title)
    res.json(showlist);
})

app.patch("/shows/:title", (req, res) => {
    // req.body = ["Heavens jessup", "Jargon"];
    let selected = showlist.findIndex(s => s.tvShow == req.params.title)
    const updatedShow = showlist[selected] = {...showlist[selected], starring: req.body };
    console.log(updatedShow)
    res.json(updatedShow);
})


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

