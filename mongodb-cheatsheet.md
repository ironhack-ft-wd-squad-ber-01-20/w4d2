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

### More operators

#### `$ne`

`{ year: { $ne: 1994 } }` return all movies where the value for the `year` field is NOT EQUAL to `1994`.

#### `$gt` `$gte`

`{ year: { $gt: 1995 } }` return all movies where the value for the `year` field is GREATER THAN `1995`

`{ year: { $gte: 1995 } }` return all movies where the value for the `year` field is GREATER THAN or EQUAL to `1995`

#### `$lt` `$lte`

`{ rate: { $lt: 8.5 } }` return all movies where the value for the `rate` field is LESS THAN `8.5`

`{$and: [{ year: { $gte: 1990 } }, { year: { $lt: 2000 } }]}` return all movies where the `year` is >= `1990` and < `2000`.

#### `$in`

`{director: { $in: ["Lana Wachowski", "David Fincher", "Joel Coen"] } }` return all movies where the `director` is in an array ["Lana Wachowski", "David Fincher", "Joel Coen"]

`{year: { $in: [1980, 1990, 2000] } }` return all movies where the value for `year` is in the `$in` array

`{genre: { $in: ["Crime", "Drama"] } }` return all movies where the `genre` array HAS any of the values in the `$in` array

#### `$nin`

`{year: { $nin: [1980, 1990, 2000] } }` return all movies where the value for `year` is NOT in the `$nin` array

`{genre: { $nin: ["Crime", "Drama"] } }` return all movies where the `genre` array doesn't have ANY of the values in the `$nin` array

#### `$all`

`{genre: { $all: ["Crime", "Drama"] } }` return all movies where the `genre` array has ALL of the values in the `$all` array
