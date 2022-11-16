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

url_20th = "https://en.wikipedia.org/wiki/Timeline_of_the_20th_century"
url_21th = "https://en.wikipedia.org/wiki/Timeline_of_the_21st_century"


find_key_events(url_20th, "timeline20")
find_key_events(url_21th, "timeline21")


async function find_key_events(url, file_name) {
  const events = []
  await axios(url)
    .then (response => {
      const html = response.data 
      const $ = cheerio.load(html)

      $("h3, ul, li, a").each( function (index, x ){
        const event = {}
        if ($(x).prop('tagName') === "A") {
          event.a = $(x).attr('href')
        }
        if ($(x).prop('tagName') === "H3") {
          event.h3 = $(x).text()
        } 
        if ($(x).prop('tagName') === "LI")  {
          event.li = $(x).text()
        }
        if ($(x).prop('tagName') === "UL") {
          event.ul = $(x).text()
        }
        events.push(event)
      })
    })

  fs.writeFileSync(file_name, JSON.stringify(events))
}