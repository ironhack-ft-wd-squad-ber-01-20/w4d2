## Import a JSON file into a collection

`mongoimport --db <name of db> --collection <name of collection> --file <path of file>`

## Queries

### Basic query

`{ field: value}`

`{ year: 1994 }` will return all the documents in the `movies` collection with the value for `year` equal to `1994`

`{ director: "Christopher Nolan" }` will return all documents in the `movies` collection with the value for `director` equal to `Christopher Nolan`

`{ director: "Christopher Nolan", year: 2005 }` will return all documents in the `movies` collection with the value for `director` equal to `Christopher Nolan` and the value for `year` equal to `2005`

### Logical operators

#### `$and`

`{ $and: [{ director: "Christopher Nolan" }, { year: 2005 }] }`

All filters passed to `$and` must match for a document to be returned.

#### `$or`

`{ $or: [{ director: "Christopher Nolan" }, { year: 2005 }] }` will return all documents in the `movies` collection that have either `Christopher Nolan` as `director` or `2005` as the year

At least one of the filters passed to `$or` must match for a document to be returned.

#### `$nor`

`{ $nor: [{ director: "Christopher Nolan" }, { year: 2005 }] }` will return all documents in the `movies` collection that have neither `Christopher Nolan` as `director` nor `2005` as `year`

None of the filters passed to `$nor` must match for a document to be returned.

### Project

`{ year: 1, title: 1, _id: 0 }` return only the `year` and `title` fields for the returned documents. By default every other field is set to `0` except for `_id` which is set to `1`.

### Sort

`{ title: 1 }` sort by ascending order of `title`.

`{ year: 1, rate: -1 }` sort by ascending order of `year` and descending order of `rate`.

### Skip and Limit

Skips `x` documents and limits to `y` documents.
