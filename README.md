# NAPI
An API which gives data on all Nobel laureates.

This API's source data is taken from public dataset [here](https://github.com/jdorfman/awesome-json-datasets#nobel-prize).

## What is different here :
This API do not have any database, and uses an external **JSON** file.
The API structures and provides various queries using client-side SQL like module called [alasql](https://www.npmjs.com/package/alasql).

## Routes :
Users can access the list of routes mentioned below to get JSON data.

+ **HOME ROUTE :**
This route is the home route of the API. This route can be accessed by `https://nobelapi.herokuapp.com/`

+ **NAME :**
This route gives the Nobel laureates data based on their name.
To access this route,
`https://nobelapi.herokuapp.com/name/{name_of_laureate}`

+ **BORNAT :**
This route gives a list of laureates for the given born country code.This route can be accessed by `https://nobelapi.herokuapp.com/bornat/{Country_Code}`

+ **DIEDAT :**
This route gives a list of laureates for the given died country code.This route can be accessed using `https://nobelapi.herokuapp.com/diedat/{Country_Code}`

+ **GENDER :**
This gives a list of laureates for a given gender.This can be accessed using `https://nobelapi.herokuapp.com/gender/{GENDER}`. The parameter {GENDER} should be a `male` or `female` in Lowercase.

+ **GENDER AND BORN COUNTRY :**
This gives a list of laureates for a given gender born at given country. This can be accessed using `https://nobelapi.herokuapp.com/{GENDER}/{Country_Code}`. Here `{Country_Code}`denotes the **born country**.

+ **BORNAT AND DIEDAT :**
This gives a a list of laureates based on their born country and died country. One can combine parameters to get desired results using this route. This route can be accessed by `https://nobelapi.herokuapp.com/bornat/{Country_Code_1}/diedat/{Country_code_2}`. Here `Country_Code_1` denotes **born country** and `Country_Code_2` denotes **died country**.

## Something's not right ?
Please open an issue, I'll be happy to look into it.

## Need some more ?
Please open an issue again, clearly stating, what feautre you would like to add. We'll make it better.

## License:
```
MIT License

Copyright (c) 2021 Vishwa.R

```