function Filters()
{
    var minPriceField;
    var maxPriceField;

    var urlHasParam = function (paramName) {
        var currentUrl = window.location.search;
        var re = new RegExp('&' + paramName + '=' + '[\\d]*');

        return re.test(currentUrl);
    };

    var updateUrl = function (param, value) {
        var currentUrl = window.location.search;
        var urlPart = '&' + param + '=' + value;
        var re = new RegExp('&' + param + '=' + '[\\d]*');
        /*var urlWithParam = '';

        if (re.test(currentUrl)) {
            urlWithParam = currentUrl.replace(re, urlPart);
        } else {
            urlWithParam = currentUrl + urlPart;
        }*/

        // ternary operator
        var urlWithParam = urlHasParam(param)
            ? currentUrl.replace(re, urlPart)
            : currentUrl + urlPart;

        window.history.pushState(null, null, urlWithParam);
    };

    var urlValuesToInput = function (param, field) {
        if (urlHasParam(param)) {
            var currentUrl = window.location.search;

            var rawParamStartIndex = currentUrl.search('&' + param + '=' + '[\\d]*');
            var rawParamEndIndex = currentUrl.indexOf('&', rawParamStartIndex + 1);
            var urlPart = '';

            if (rawParamEndIndex === -1) {
                urlPart = currentUrl.slice(rawParamStartIndex);
            } else {
                urlPart = currentUrl.slice(
                    rawParamStartIndex,
                    rawParamEndIndex
                );
            }

            field.value = urlPart.slice(urlPart.indexOf('=') + 1);
        }
    };

    var initEventsHandlers = function () {
        minPriceField.addEventListener('input', function () {
            updateUrl('minPrice', this.value);
        });

        maxPriceField.addEventListener('input', function () {
            updateUrl('maxPrice', this.value);
        });

        document.addEventListener('DOMContentLoaded', function () {
            urlValuesToInput('minPrice', minPriceField);
            urlValuesToInput('maxPrice', maxPriceField);
        });
    };

    var constructor = function () {
        minPriceField = document.getElementById('js-min-price-filter');
        maxPriceField = document.getElementById('js-max-price-filter');
        initEventsHandlers();
    }();
}

Filters();
