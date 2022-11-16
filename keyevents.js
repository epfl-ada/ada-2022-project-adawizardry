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

url = "https://en.wikipedia.org/wiki/Key_events_of_the_20th_century#Information_and_communications_technology"

find_key_events(url)

async function find_key_events(url) {
  const events = []
  await axios(url)
    .then (response => {
      const html = response.data 
      const $ = cheerio.load(html)

      $ ('.mw-headline', html).each( function (index, x ){
        const event = {}
        event.name = $(x).text()
        events.push(event)
      })
    })

  fs.writeFileSync("keyEventsWikipedia", JSON.stringify(events))
}