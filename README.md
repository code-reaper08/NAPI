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

    **_example :_**
    ![SS](Image link "HomePage")

+ **NAME :**
This route gives the Nobel laureates data based on their name.
To access this route,
`https://nobelapi.herokuapp.com/name/{name_of_laureate}`

    **_example :_**

    **Req :** `https://nobelapi.herokuapp.com/name/rogerpenrose`

    **Res :** 
    ```
    {
    "id": "988",
    "firstname": "Roger",
    "surname": "Penrose",
    "born": "1931-08-08",
    "died": "0000-00-00",
    "bornCountry": "United Kingdom",
    "bornCountryCode": "GB",
    "bornCity": "Colchester",
    "gender": "male",
    "prizes": [
    {
    "year": "2020",
    "category": "physics",
    "share": "2",
    "motivation": "\"for the discovery that black hole formation is a robust prediction of the general theory of relativity\"",
    "affiliations": [
    {
    "name": "University of Oxford",
    "city": "Oxford",
    "country": "United Kingdom"
    }
    ]
    }
    ]
    }
    ```
+ **BORNAT :**
This route gives a list of laureates for the given born country code.This route can be accessed by `https://nobelapi.herokuapp.com/bornat/{Country_Code}`

    **_example :_**

    **Req :** `https://nobleapi.herokuapp.com/bornat/IN`

    **Res :**
    Use the below url to get a view of response. 
    
    [https://gist.github.com/code-reaper08/4645b73ef92a6f029ab4aa6225742612](https://gist.github.com/code-reaper08/4645b73ef92a6f029ab4aa6225742612)
    

+ **DIEDAT :**
This route gives a list of laureates for the given died country code.This route can be accessed using `https://nobelapi.herokuapp.com/diedat/{Country_Code}`

    **_example :_**

    **Req :** `https://nobleapi.herokuapp.com/diedat/IN`

    **Res :**
    Use the below url to get a view of response. 
    
    [https://gist.github.com/code-reaper08/fcdceeb9d809dc3cf0c829b9350b88ed](https://gist.github.com/code-reaper08/fcdceeb9d809dc3cf0c829b9350b88ed)
    

+ **GENDER :**
This gives a list of laureates for a given gender.This can be accessed using `https://nobelapi.herokuapp.com/gender/{GENDER}`. The parameter {GENDER} should be a `male` or `female` in Lowercase.

    **_example :_**

    **Req :** `https://nobleapi.herokuapp.com/gender/female`

    **Res :**
    Use the below url to get a view of response. 
    
    [https://gist.github.com/code-reaper08/31235c8af64c55edc38a193593c8bb42](https://gist.github.com/code-reaper08/31235c8af64c55edc38a193593c8bb42)

+ **GENDER AND BORN COUNTRY :**
This gives a list of laureates for a given gender born at given country. This can be accessed using `https://nobelapi.herokuapp.com/{GENDER}/{Country_Code}`. Here `{Country_Code}`denotes the **born country**.

    **_example :_**

    **Req :** `https://nobleapi.herokuapp.com/gender/female/PL`

    **Res :**
    Use the below url to get a view of response. 
    
    [https://gist.github.com/code-reaper08/29d55cc2668021e57f3e8cb0059710a9](https://gist.github.com/code-reaper08/29d55cc2668021e57f3e8cb0059710a9)

+ **BORNAT AND DIEDAT :**
This gives a a list of laureates based on their born country and died country. One can combine parameters to get desired results using this route. This route can be accessed by `https://nobelapi.herokuapp.com/bornat/{Country_Code_1}/diedat/{Country_code_2}`. Here `Country_Code_1` denotes **born country** and `Country_Code_2` denotes **died country**.

    **_example :_**

    **Req :** `https://nobleapi.herokuapp.com/bornat/IN/diedat/IN`

    **Res :**
    Use the below url to get a view of response. 
    
    [https://gist.github.com/code-reaper08/fef2c2bae52e5d96dbbc1b208b381304](https://gist.github.com/code-reaper08/fef2c2bae52e5d96dbbc1b208b381304)

## Something's not right ?
Please open an issue, I'll be happy to look into it.

## Need some more ?
Please open an issue again, clearly stating, what feautre you would like to add. We'll make it better.

## License:

```
    MIT License

    Copyright (c) 2021 Vishwa.R
```