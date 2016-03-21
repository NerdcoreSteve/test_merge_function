//TODO test map_maker and the test module?
//TODO lint code?
//TODO Use test framework in test_merge?

"use strict"

let test_merge = require('./test_merge.js')

let object_to_kv_pairs = (object) => Object.keys(object).map((key) => ({key: key, value: object[key]}))

let merge = (map1, map2) => {
    let merge_kv_pairs_to_object = (kv_pairs) =>
        kv_pairs.reduce(
            (object, kv_pair) => {
                if(typeof object[kv_pair.key] === 'undefined' || object[kv_pair.key] < kv_pair.value) {
                    object[kv_pair.key] = kv_pair.value
                }
                return object
            },
            {})

    return merge_kv_pairs_to_object(object_to_kv_pairs(map1).concat(object_to_kv_pairs(map2)))
}

console.log(test_merge(merge))
