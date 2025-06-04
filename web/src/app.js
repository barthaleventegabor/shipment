/*
* File: app.js
* Author: Bartha Levente
* Copyright: 2025, Bartha Levente
* Group: IN
* Date: 2025-05-21
* Github: https://github.com/barthaleventegabor/
* Licenc: MIT
*/
const tbody = document.querySelector('#tbody')
const url = 'http://localhost:8000/api/shipments'
var shipmentList = []

function getShipments(){
    fetch(url)
    .then(response => response.json())
    .then(result => {
        console.log(result.data)
        shipmentList = result.data
        renderTbody()
    })
}

function renderTbody(){
    let rows = ""
    for(let shipment of shipmentList){
        
        rows += `
        <tr>
            <td>${shipment.id}</td>
            <td>${shipment.shipmentId}</td>
            <td>${shipment.sentDate}</td>
            <td>${shipment.endDate}</td>
            <td>${shipment.addressee}</td>
            <td>${shipment.targetCity}</td>
        </tr>
        `
        
        
    }
    console.log(rows)
    tbody.innerHTML = rows
}

getShipments()
