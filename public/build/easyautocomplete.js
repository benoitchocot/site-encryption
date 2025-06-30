(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["easyautocomplete"],{

/***/ "./assets/js/easyautocomplete.js":
/*!***************************************!*\
  !*** ./assets/js/easyautocomplete.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
__webpack_require__(/*! easy-autocomplete */ "./node_modules/easy-autocomplete/dist/jquery.easy-autocomplete.js");
var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
var options = {
  url: function url(phrase) {
    return "/feature/search/".concat(phrase);
  },
  getValue: 'name'
};
$('#specific_feature_name').easyAutocomplete(options);
function clearInput() {
  $('#specific_feature_day').val('');
  $('#specific_feature_description').val('');
  $('#specific_feature_category').val('');
}
$('#specific_feature_name').on('change', function () {
  var input = $('#specific_feature_name').val();
  fetch("/feature/search/".concat(input)).then(function (response) {
    return response.json();
  }).then(function (features) {
    // eslint-disable-next-line no-undef
    if (!jQuery.isEmptyObject(features)) {
      $('#specific_feature_day').val(features[0].day);
      $('#specific_feature_description').val(features[0].description);
      $('#specific_feature_category').val(features[0].id);
    } else {
      clearInput();
    }
  });
});
$('.easy-autocomplete').removeAttr('style');
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

},[["./assets/js/easyautocomplete.js","runtime","vendors~easyautocomplete~securityjs~uploadform","vendors~app~easyautocomplete","vendors~easyautocomplete"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZWFzeWF1dG9jb21wbGV0ZS5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiJCIsIm9wdGlvbnMiLCJ1cmwiLCJwaHJhc2UiLCJjb25jYXQiLCJnZXRWYWx1ZSIsImVhc3lBdXRvY29tcGxldGUiLCJjbGVhcklucHV0IiwidmFsIiwib24iLCJpbnB1dCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImZlYXR1cmVzIiwialF1ZXJ5IiwiaXNFbXB0eU9iamVjdCIsImRheSIsImRlc2NyaXB0aW9uIiwiaWQiLCJyZW1vdmVBdHRyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUFBLG1CQUFPLENBQUMsNEZBQW1CLENBQUM7QUFDNUIsSUFBTUMsQ0FBQyxHQUFHRCxtQkFBTyxDQUFDLG9EQUFRLENBQUM7QUFFM0IsSUFBTUUsT0FBTyxHQUFHO0VBQ1pDLEdBQUcsRUFBRSxTQUFMQSxHQUFHQSxDQUFFQyxNQUFNO0lBQUEsMEJBQUFDLE1BQUEsQ0FBdUJELE1BQU07RUFBQSxDQUFFO0VBQzFDRSxRQUFRLEVBQUU7QUFDZCxDQUFDO0FBRURMLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUN0Qk0sZ0JBQWdCLENBQUNMLE9BQU8sQ0FBQztBQUU5QixTQUFTTSxVQUFVQSxDQUFBLEVBQUc7RUFDbEJQLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUNyQlEsR0FBRyxDQUFDLEVBQUUsQ0FBQztFQUNaUixDQUFDLENBQUMsK0JBQStCLENBQUMsQ0FDN0JRLEdBQUcsQ0FBQyxFQUFFLENBQUM7RUFDWlIsQ0FBQyxDQUFDLDRCQUE0QixDQUFDLENBQzFCUSxHQUFHLENBQUMsRUFBRSxDQUFDO0FBQ2hCO0FBRUFSLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUN0QlMsRUFBRSxDQUFDLFFBQVEsRUFBRSxZQUFNO0VBQ2hCLElBQU1DLEtBQUssR0FBR1YsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQ3BDUSxHQUFHLENBQUMsQ0FBQztFQUNWRyxLQUFLLG9CQUFBUCxNQUFBLENBQW9CTSxLQUFLLENBQUUsQ0FBQyxDQUM1QkUsSUFBSSxDQUFDLFVBQUFDLFFBQVE7SUFBQSxPQUFJQSxRQUFRLENBQUNDLElBQUksQ0FBQyxDQUFDO0VBQUEsRUFBQyxDQUNqQ0YsSUFBSSxDQUFDLFVBQUNHLFFBQVEsRUFBSztJQUNoQjtJQUNBLElBQUksQ0FBQ0MsTUFBTSxDQUFDQyxhQUFhLENBQUNGLFFBQVEsQ0FBQyxFQUFFO01BQ2pDZixDQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FDckJRLEdBQUcsQ0FBQ08sUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDRyxHQUFHLENBQUM7TUFDekJsQixDQUFDLENBQUMsK0JBQStCLENBQUMsQ0FDN0JRLEdBQUcsQ0FBQ08sUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDSSxXQUFXLENBQUM7TUFDakNuQixDQUFDLENBQUMsNEJBQTRCLENBQUMsQ0FDMUJRLEdBQUcsQ0FBQ08sUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDSyxFQUFFLENBQUM7SUFDNUIsQ0FBQyxNQUFNO01BQ0hiLFVBQVUsQ0FBQyxDQUFDO0lBQ2hCO0VBQ0osQ0FBQyxDQUFDO0FBQ1YsQ0FBQyxDQUFDO0FBRU5QLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUNsQnFCLFVBQVUsQ0FBQyxPQUFPLENBQUMsQyIsImZpbGUiOiJlYXN5YXV0b2NvbXBsZXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZSgnZWFzeS1hdXRvY29tcGxldGUnKTtcbmNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcblxuY29uc3Qgb3B0aW9ucyA9IHtcbiAgICB1cmw6IHBocmFzZSA9PiBgL2ZlYXR1cmUvc2VhcmNoLyR7cGhyYXNlfWAsXG4gICAgZ2V0VmFsdWU6ICduYW1lJyxcbn07XG5cbiQoJyNzcGVjaWZpY19mZWF0dXJlX25hbWUnKVxuICAgIC5lYXN5QXV0b2NvbXBsZXRlKG9wdGlvbnMpO1xuXG5mdW5jdGlvbiBjbGVhcklucHV0KCkge1xuICAgICQoJyNzcGVjaWZpY19mZWF0dXJlX2RheScpXG4gICAgICAgIC52YWwoJycpO1xuICAgICQoJyNzcGVjaWZpY19mZWF0dXJlX2Rlc2NyaXB0aW9uJylcbiAgICAgICAgLnZhbCgnJyk7XG4gICAgJCgnI3NwZWNpZmljX2ZlYXR1cmVfY2F0ZWdvcnknKVxuICAgICAgICAudmFsKCcnKTtcbn1cblxuJCgnI3NwZWNpZmljX2ZlYXR1cmVfbmFtZScpXG4gICAgLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gJCgnI3NwZWNpZmljX2ZlYXR1cmVfbmFtZScpXG4gICAgICAgICAgICAudmFsKCk7XG4gICAgICAgIGZldGNoKGAvZmVhdHVyZS9zZWFyY2gvJHtpbnB1dH1gKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oKGZlYXR1cmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgICAgICAgICAgICAgaWYgKCFqUXVlcnkuaXNFbXB0eU9iamVjdChmZWF0dXJlcykpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnI3NwZWNpZmljX2ZlYXR1cmVfZGF5JylcbiAgICAgICAgICAgICAgICAgICAgICAgIC52YWwoZmVhdHVyZXNbMF0uZGF5KTtcbiAgICAgICAgICAgICAgICAgICAgJCgnI3NwZWNpZmljX2ZlYXR1cmVfZGVzY3JpcHRpb24nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnZhbChmZWF0dXJlc1swXS5kZXNjcmlwdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICQoJyNzcGVjaWZpY19mZWF0dXJlX2NhdGVnb3J5JylcbiAgICAgICAgICAgICAgICAgICAgICAgIC52YWwoZmVhdHVyZXNbMF0uaWQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW5wdXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICB9KTtcblxuJCgnLmVhc3ktYXV0b2NvbXBsZXRlJylcbiAgICAucmVtb3ZlQXR0cignc3R5bGUnKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=