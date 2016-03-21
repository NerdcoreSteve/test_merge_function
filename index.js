//TODO test map_maker and the test module?
//TODO lint code?
//TODO Use test framework in test_merge?

"use strict"

let test_merge = require('./test_merge.js')

let object_to_kv_pairs = (object) => Object.keys(object).map((key) => ({key: key, value: object[key]}))

let kv_pairs_to_object = (kv_pairs, replace_duplicate_key_condition) =>
    kv_pairs.reduce(
        (object, kv_pair) => {
            if(typeof object[kv_pair.key] === 'undefined'
                || replace_duplicate_key_condition(object, kv_pair)) {
                object[kv_pair.key] = kv_pair.value
            }
            return object
        },
        {})

let merge = (map1, map2) =>
    kv_pairs_to_object(
        object_to_kv_pairs(map1).concat(object_to_kv_pairs(map2)),
        (object, kv_pair) => object[kv_pair.key] < kv_pair.value)

console.log(test_merge(merge))
