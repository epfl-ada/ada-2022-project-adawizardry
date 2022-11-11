const PORT = 8000
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
const app = express()
const cors = require('cors')
const fs = require('fs');
const { response } = require('express')
const { getRandomValues } = require('crypto')
const { json } = require('body-parser')
app.use(cors())

url = "https://www.imdb.com/chart/top/"

find_movies(url)

async function find_movies(url) {
  const topmovies = []
  await axios(url)
    .then(response => {
      const html = response.data
      const $ = cheerio.load(html)
      $('tr', html).each(function (index, x ){
        
        topmovies.push($(x).find('.titleColumn').find('a').text())
      })
      
    })
  fs.writeFileSync("imdb_250", JSON.stringify(topmovies))
}


