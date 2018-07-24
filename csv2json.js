"use strict"

// load required modules
const csv=require('csvtojson')
const path=require('path')
const fs=require('fs')

// file paths
var csvFilePath=path.join(__dirname, 'customer-data.csv')
var jsonFilePath=path.join(__dirname, 'customer-data.json')

// perform conversion
if (fs.existsSync(csvFilePath)) {
    console.log('Converting file...')
    csv().fromFile(csvFilePath).then((jsonObj) => {
        fs.writeFile(jsonFilePath,JSON.stringify(jsonObj, null, 4))
    })
    console.log('Conversion complete.')
} else {
    console.log(`Conversion not possible. File: ${csvFile} does not exist.`);
}