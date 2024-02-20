// <reference path="jquery-3.6.0.js" />

"use strict";

$(function () {

    $("#ajaxButton").click(() => {

        $("#loadingContainer").show();
        
        $.ajax({
            url: "https://rickandmortyapi.com/api/episode",
            error: err => alert("Error: " + err.statusText),
            success: sdarot => {
                $("#loadingContainer").hide();
                displaySdarot(sdarot);
            }
        });

    });

    function displaySdarot(sdarot:any) {

        $("tbody").empty();

        for (let i = 0; i < sdarot.length; i++) {
            const tr = `
                <tr>
                    <td>${sdarot[i].id}</td>
                    <td>${sdarot[i].name}</td>
                    <td>${sdarot[i].air_date}</td>
                    <td>${sdarot[i].episode}</td>
                </tr>`;

            $("tbody").append(tr);
        }
        
    }

});