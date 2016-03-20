//TODO test map_maker and the test module?
//TODO lint code?
//TODO Use test framework in test_merge?

var test_merge = require('./test_merge.js')

console.log(
    test_merge(function (map1, map2) {
        function array_of_pairs(object) {
            return Object.keys(object)
                .map(function (key) {
                    return {key: key, value: object[key]}
                })
        }

        function object(pairs) {
            var object = {}
            pairs.forEach(function (pair) {
                if(typeof object[pair.key] === 'undefined') {
                    object[pair.key] = pair.value
                } else if(object[pair.key] < pair.value) {
                    object[pair.key] = pair.value
                }
            })
            return object
        }

        return object(array_of_pairs(map1).concat(array_of_pairs(map2)))
    }))
