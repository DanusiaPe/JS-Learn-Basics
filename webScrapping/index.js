const request = require("request-promise");
const cheerio = require("cheerio");
const fs = require("fs");
const json2csv = require("json2csv").Parser;


const game = "https://www.nhl.com/schedule"

(async() => {
    let nhlSchedule = [];

    // call for web data and get response 
    const response = await request({
        //  uri is URL of the request
        uri: game,
        // response headers coppied
        headers: { 
            // at least all the accept headers must be coppied
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-US,en;q=0.9,pl;q=0.8",
        },
        // content encoding
        gzip: true,
    })

    let $ = cheerio.load(response);
    let teamA 
    let teamB
    let gameTime
    let gameDate
    let gameNetworks




}



)();