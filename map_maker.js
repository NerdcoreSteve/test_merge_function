//TODO no checks on ranges or anything

var random = require("random-js")()
var _ = require("lodash")

function n_random_ints(n, begin_range, end_range) {
    return _.chain()
        .range(n)
        .map(function () { return random.integer(begin_range, end_range) })
        .value()
}

function n_random_lower_case_letters(n, begin_range, end_range) {
    return _.map(
        n_random_ints(n, begin_range.charCodeAt(0), end_range.charCodeAt(0)),
        function (number) { return String.fromCharCode(number) })
}

function random_map_of_letter_keys_number_values(
    n, begin_letter_range, end_letter_range, begin_number_range, end_number_range) {

    var random_map =
        _.zipObject(
            n_random_lower_case_letters(n, begin_letter_range, end_letter_range),
            n_random_ints(n, begin_number_range, end_number_range))

    if (_.keys(random_map).length === n) {
        return random_map
    } else {
        return random_map_of_letter_keys_number_values.apply(undefined, arguments)
    }
}

module.exports = {
    random_map_of_letter_keys_number_values: random_map_of_letter_keys_number_values,
    make_me_a_map: _.partial(random_map_of_letter_keys_number_values, 10, 'a', 'z', 1, 3)
}
