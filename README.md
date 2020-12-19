
# NOTE TAKER

## Description
This project is an application that allows the user to take notes and save them. Users can also delete notes. It saves titles and content to a db.json file. 

## Table of Contents

* [Installation](#installation)

* [Code](#code)

* [Usage](#usage)

* [Contributions](#contributions)

* [Tests](#tests)

* [License](#license)

* [Contact](#contact)

## Installation
To ensure prompts can work, run npm i
* path
*

## Code
```
application.post("/api/notes", function (req, res) {

        fs.readFile("./db/db.json", function (err, data) {
            if (err)
                throw err;
            notesss = JSON.parse(data);
            notesss.push(req.body);
            for (let i = 0; i < notesss.length; i++) {
                notesss[i].id = i
            }

            fs.writeFile("./db/db.json",
                JSON.stringify(notesss),
                function (err, data) {
                    if (err) {
                        console.log(err);
                    } else {
                        res.send(notesss);
                    }
                }
            )

        });
    });
```


## Usage

Currently deployed on [Heroku](https://mysterious-brook-39227.herokuapp.com/). See sample here:

![notetaker](https://user-images.githubusercontent.com/70240665/102681202-1abd4700-4185-11eb-9029-7faacf76c047.png)


## Contributions
Thank you for the support from my TAs, intructor, and classmates. 

I invite folks to pull or fork in order to practice, learn, reference. 


## Tests
N/A


## License
[MIT License](https://github.com/UrkelX/Note-Taker/blob/main/LICENSE)


## Contact
GitHub: @[UrkelX](https://github.com/UrkelX)

Email: jordon@blackbirdrevolt.com

