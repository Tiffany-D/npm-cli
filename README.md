# npm-cli

Node.JS: CLI

    Our first tool, with Node.JS

    Type of challenge: learning
    Repository : **\***-CLI** (name as you want with CLI)
    Deadline : 2 days
    Team : solo
    Submission : When the tool is published on npm, simply send us the page to your npm package.

About Node.JS

You may already know it: javascript is a programmation language executed in a web browser, which has an engine to run this language.
Node.JS (or just "node", if you want to be the cool guy in the room) is a runtime to execute javascript outside of a browser: it includes an engine (v8, the javascript engine of webkit/chrome) to run the langage, some librairies to interact with the system (manipulating files, executing sub-programs, etc…), and use a module structure, which depends on npm, a registry with more than one million packages (as for november 2019), created and maintained by the community.
Nearly everywhere?

Altough Node.JS is mainly used for back-end (where it competes with PHP, Java or Ruby), node allows us to write programs for command line, mobile apps (with ReactNative, for instance), desktop apps (with Electron, used to built apps like the Atom editor, and many more), robotics (with tools like Johnny-Five) or even IOT (with optimized runtimes like Node-RED).
Our first Node.JS program

To discover node, we will start by coding a small command-line tool.

It will be simple, allowing you to discover node, npm and their module architecture.

Just this once, I will kinda guide you through the process.

    ☝️ NOTE: we will not need Docker for the first (and fast) project - we will work locally

1. Install Node.JS & npm

You should already have node installed on your machine, since we used it for javascript exercises series at the beginning of our BeCode adventures.
But if you need to, simply go to the official Node.JS website and follow the instructions (for Ubuntu/Debian, the instructions are here).

    👉 Install at least version 14.x.y (version 10 is fine too, but, hey, it's 2021!)

2. Create the project workspace

Create a github repository for the project, and use the command npm init to initialize the project.

    ☝️ NOTE: for the question about the entry point, let the default answer, "index.js"

3. Your first script

Create a index.js file at the root of the repository, and add the following line to it:

console.log("Hello, Node.JS!");

Then, enter the following command in the terminal:

$ node .

Congrats! You've created your first Node.JS script! 4. Going further…

Now, I will let you experiment and dig further, with a complete statement.

You will code a command line tool that will take a country name as parameter, like this:

$ myNodeCLITool Belgium

The tool will verify that the parameter is a well-formatted country name, transform it onto a two-letters country code, then perform an HTTP request to the API of the nager.date service, like explained here.
You will show the results (a list of holidays dates for the current year) in a readable way in the terminal.

    👉 NOTE: when I say "for the current year", it means "retrieve the current year", not hardcoding 2020 somewhere in the code. 😅

    ⚠️ WARNING: your script will be executed in a specific context. For these kind of command line tools, it's recommanded to add the following line at the top of your entry point (here, your index.js file):

#!/usr/bin/env node

    🤓 This line, at the top of an executable file, is called the shebang

As result, you will have a tool to get the holidays of the current year for the given country. Always useful.
npm packages to use

There's a lot of packages on npm, including some doing exactly what I ask you to do.
That's not the point, obviously.

But to save you some trouble losing yourselves in this big pile of possibilities, I recommand you to use the following packages:

    country-list, to convert the country name onto a country code
    axios, to perform HTTP requests

even further…

For those of you wanting to make your tool pretty (and add more challenge), you can dig around the following packages:

    ora, to show a spinner (loading animation) while your request is pending
    chalk, to add some colors in your terminal
    figlet, add some style to your terminal

You can also handle a second parameter, asking the year to show the corresponding holidays (if the parameter is missing, stick to the default behavior of looking for the current year). 5. Testing your tool / Prepare for publication

You've been able to test your program all along the development process, but in a perfect world, it will be cool to give it a name, like holidates, to be able to execute it like this in a terminal:

$ holidates Belgium

To do so, you'll need to document about the bin property of the package.json file.
You can also use the npm link command to test your program locally before publishing it. 6. Publish on npm

Publishing on npm is free, but you need to create an account.

Then, before publishing your package, there's three important steps to follow:
6.1. Choose a name for your package

You're free to name your package freely.
But with more than 1 million packages on the npm registry, there's change the name you choose is already in use.
Don't cry! We can scope your package with your npm account's name. In your package.json file, prefix the name property with @yournpmlogin/, like this:

{
"name": "@leny/holidates"
}

You will then be able to publish your package without problem, even if the name is already in use.
6.2. Complete your README.md file

The content of your README.md file will be displayed as the presentation of your package on npm. Explain how your package work, how to install and use it. Get inspiration from other well-known packages.

    🇬🇧 IMPORTANT: write your README in english!

6.3. Update the version number

The first version of your package can be 1.0.0, 0.1.0 or 0.0.1, it's up to you.

But keep in mind that when you will update your package and publish a new version, you'll need to follow the rules of semantic versionning (aka semver).
Publish

Finally, to publish on npm, simply use the following command:

$ npm publish --access public

Good luck!
