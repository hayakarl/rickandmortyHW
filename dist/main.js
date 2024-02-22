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
    function displaySdarot(sdarot) {
        $("tbody").empty();
        for (let i = 0; i < sdarot.results.length; i++) {
            const tr = `
                <tr>
                    <td>${sdarot.results[i].id}</td>
                    <td>${sdarot.results[i].name}</td>
                    <td>${sdarot.results[i].air_date}</td>
                    <td>${sdarot.results[i].episode}</td>
                    <td>${sdarot.results[i].url}</td>
                    <td>${sdarot.results[i].created}</td>
                </tr>`;
            $("tbody").append(tr);
        }
    }
});
