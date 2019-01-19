//format: getTheData(startYear, endYear, searchTerm, numberRecords);
//example: getTheData(2017, 2019, 'pickles', 5);

function getTheData(startYear, endYear, searchTerm, numberRecords) {
    theCurrentYear = new Date().getFullYear();
    if (startYear != '') {
        startDate = 'begin_date=' + startYear + '0101'
    } else {
        startDate = 'begin_date=17000101'
    };
    if (endYear != '') {
        endDate = '&end_date=' + endYear + '1231'
    } else {
        endDate = '&end_date=' + theCurrentYear + '1231'
    };
    if (searchTerm == '') {
        searchTerm = 'cats';
    }
    queryURL = 'https://cors-anywhere.herokuapp.com/https://api.nytimes.com/svc/search/v2/articlesearch.json?' + startDate + endDate + '&q=' + searchTerm + '&api-key=FYkBfK6ooEHCFI4wDgc9kUVbfj6iZHBE'

    $.get(queryURL).then(function (blob) {
        for (i = 0; i < numberRecords; i++) {
            if (typeof blob.response.docs[i].multimedia[2] !== 'undefined') {
                var thumbnail = blob.response.docs[i].multimedia[2].url;
            } else {
                var thumbnail = "https://picsum.photos/75/75"
            }
            let headline = blob.response.docs[i].headline.main;
            let snippet = blob.response.docs[i].snippet;
            let url = blob.response.docs[i].web_url;
            console.log(thumbnail, headline, snippet, url);
            createTheHTML(thumbnail, headline, snippet, url);
        }
    });
};

function createTheHTML(thumbnail, headline, snippet, url) {
    let theString = "<img src=" + thumbnail + "><div id='headline'>" + headline + "</div><div id='snippet'>" + snippet + "</div><a href='" + url + "'>Full Article</a>"
    $('#results').append(theString);
};