function Filters()
{
    var minPrice;
    var maxPrice;

    var updateUrl = function (param, value) {
        var currentUrl = window.location.search;
        var re = new RegExp('&' + param + '=' + '[\\d]*');
        var urlPart = '&' + param + '=' + value;
        /*var urlWithParam = '';

        if (re.test(currentUrl)) {
            urlWithParam = currentUrl.replace(re, urlPart);
        } else {
            urlWithParam = currentUrl + urlPart;
        }*/

        // ternary operator
        var urlWithParam = re.test(currentUrl)
            ? currentUrl.replace(re, urlPart)
            : currentUrl + urlPart;

        window.history.pushState(null, null, urlWithParam);
    };

    var initEventsHandlers = function () {
        minPrice.addEventListener('input', function () {
            updateUrl('minPrice', this.value);
        });

        maxPrice.addEventListener('input', function () {
            updateUrl('maxPrice', this.value);
        });

        document.addEventListener('DOMContentLoaded', function () {
            console.log('Page loaded!');
        });
    };

    var constructor = function () {
        minPrice = document.getElementById('js-min-price-filter');
        maxPrice = document.getElementById('js-max-price-filter');
        initEventsHandlers();
    }();
}

Filters();
