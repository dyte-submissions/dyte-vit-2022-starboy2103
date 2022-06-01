# Software Engineer:Take-Home Project
## By: S. Kowshal





This project is a CLI based on MERN for processing Github repositories (both public and private) and check the current version of one or multiple dependency passed in the CLI and returning the result


## Features

- Use of streams which makes the processing way faster
- Works on both public and private repositories
- Can pass multiple arguments to test the versions of the dependencies
- As it is modular, it is scalable



## Tech

The stack used in the project are:

- [Node Js](https://nodejs.org/en/) - evented I/O for the backend
- [Express Js ](https://expressjs.com/) - fast node.js network app framework [@tjholowaychuk]



## Installation

This project requires [Node.js](https://nodejs.org/) v10+ to run.
    ```
    nvm install node
    ```
- Firstly, download the file from the '/Code' folder of the submitted google Drive.

- Open a terminal at the downloaded location and run the following command to install all the depenencies:

    ```sh
    npm i
    ```
    or 
    ```sh
    npm install
    ```
- Add the .csv file to the location:
    ```sh
    Files/
    ```
```sh
**NOTE: Github deletes Personal access tokens on pushing it to github**
```
- Create a Personal access token from Github(You can find a tutorial [here](https://youtu.be/SzrETQdGzBM)) and add it to the 'TOKEN' variable in:
    ```sh
    sever/getObj.js
    ```    
- Now that the dependencies are ready, start execution(for mac and linux) by:
    ```sh
    verck <filename.csv> <dependency>@<version>
    ```
- Now that the dependencies are ready, start execution(for windows) by:
    ```sh
    node index.js <filename.csv> <dependency>@<version>
    ```
- The output folders are found in directory:
    ```sh
    Files/
    ```

#### Working

- The csv file is read and parsed for the repository link
- Now, we create a custom URL for API request to Github with token access
- The package.json is fetched from Github of the specified Repository and the dependencies are accessed
- Now the Version comparision takes place
- The final results are written in a .csv file in:

    ```sh
    Files/
    ```

## About me

S. Kowshal
kowshal.s2019@vitstudent.ac.in
7200088893
**Vellore Instutite of Technology**


