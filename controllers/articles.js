const db = require('../utils/db')

const getAllArticles = (req, res) => {
    let sql = 'SELECT * FROM article'
    db.query(sql, (error, result) => {
        res.render('index',{
            articles: result
        } )
    }) 
} 

//Kysime vajalikud andmed andmebaasiit
const getArticleBySlug = (req, res) => {
    let sql= `SELECT * FROM article WHERE slug="${req.params.slug}"`
    db.query(sql, (error, result) =>{
        //article.hbs faili t66le kutsumie
        res.render('article', {
            article: result
        })
    } )
}
module.exports = {
    getAllArticles,
    getArticleBySlug
} 