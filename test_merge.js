var map_maker = require('./map_maker.js')
var _ = require("lodash")

module.exports = function (merge) {
    _.range(1000).forEach(function () {
        var map1 = map_maker.make_me_a_map()
        var map2 = map_maker.make_me_a_map()
        var merged_map = merge(map1, map2)

        function check_if_map_keys_are_all_in_other_map(map, other_map) {
            Object.keys(map).forEach(function (key) {
                if(typeof other_map[key] === 'undefined') {
                    return false;
                }
            })
            return true;
        }

        //check if keys in map1 are in merged_map
        if(!check_if_map_keys_are_all_in_other_map(map1, merged_map)) {
            return "not all keys in map1 are in merged map"
        }

        //check if keys in map2 are in merged_map
        if(!check_if_map_keys_are_all_in_other_map(map2, merged_map)) {
            return "not all keys in map2 are in merged map"
        }

        //check if keys in merged_map are in map1 or map2
        Object.keys(merged_map).forEach(function (key) {
            if (typeof map1[key] === 'undefined' && typeof map1[key] === 'undefined') {
                return 'key "' + key + '" found in merged map not in map1 or map2'
            }
        })

        //check if values in merged_map are greatest
        Object.keys(merged_map).forEach(function (key) {
            if (merged_map[key] >= map1[key] && merged_map >= map2[key]) {
                return 'largest value not in merged map: '
                    + 'key = ' + key + ', '
                    + 'map1[' + key + '] = ' + map1[key] + ', '
                    + 'map2[' + key + '] = ' + map2[key] + ', '
                    + 'merged_map[' + key + '] = ' + merged_map[key]
            }
        })
    })

    return 'tests passed'
}
