var API_ENDPOINT = 'https://packagist.org/packages/';

var REQUEST_DONE = 4;

var HTTP_OK = 200;
var HTTP_NOT_FOUND = 404;

var buttons = document.getElementsByClassName('js-fetch-info');
var downloadsInfo = document.getElementById('js-downloads-info');
var errorsContainer = document.getElementById('js-errors-container');

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', fetchInfo);
}

function fetchInfo(e) {
    var packageName = e.target.getAttribute('data-package-name');
    var apiUrl = API_ENDPOINT + packageName + '.json';

    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        errorsContainer.innerText = '';

        if (this.readyState === REQUEST_DONE && this.status === HTTP_OK) {
            var info = JSON.parse(this.responseText);
            console.log(info);

            downloadsInfo.innerHTML = 'Total downloads for "' + packageName + '" is: ' + info.package.downloads.total;
        } else if (this.readyState === REQUEST_DONE && this.status === HTTP_NOT_FOUND) {
            errorsContainer.innerHTML = 'Package "' + packageName + '" not found!';
            downloadsInfo.innerHTML = '';
        }
    };

    request.open('GET', apiUrl, true);
    request.send();
}
