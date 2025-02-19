// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$(document).ready(function () {
    $('#calculateBtn').click(function () {
        const hours = parseFloat($('#hoursInput').val());
        const rate = 50;

        if (!isNaN(hours) && hours > 0) {
            const total = hours * rate;
            $('#totalOutput').val(`$${total.toFixed(2)}`);
        } else {
            alert('Please enter a valid positive number for hours.');
        }
    });
});
