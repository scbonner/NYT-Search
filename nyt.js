var searchTerm;
var numberRecords;
var startYear;
var endYear;
$('#Submit').on('click', function () {
    searchTerm = $('#searchTerm').val().trim();
    console.log(searchTerm);
    numberRecords = $('#numberRecords').val().trim();
    console.log(numberRecords);
    startYear = $('#startYear').val().trim();
    console.log(startYear);
    endYear = $('#endYear').val().trim();
    console.log(endYear);


    getTheData(startYear, endYear, searchTerm, numberRecords);
});