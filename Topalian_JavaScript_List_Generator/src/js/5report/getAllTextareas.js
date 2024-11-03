// getAllTextareas.js

function getAllTextareas()
{
    textArray = [];

    let theTextareas = document.getElementsByTagName("textarea");

    for (let x = 0; x < theTextareas.length; x++)
    {
        textArray.push(theTextareas[x].value);
    }

    cl(textArray);

    // show result as JSON stringified array
    ge("stringifiedArrayDiv").innerHTML = JSON.stringify(textArray);

    let theString = "";

    for (let z = 0; z < theTextareas.length; z++)
    {
        theString += theTextareas[z].value;

        theString += "<br>";
    }

    // send theString to listColumnDiv
    ge("listColumnDiv").innerHTML = theString;

    //----//

    let theString2 = "";

    for (let z = 0; z < textArray.length; z++)
    {
        theString2 += textArray[z] + ', ';
        theString2 += "<br>";
    }

    // send theString2 to csvListDiv
    ge('csvListDiv').innerHTML = theString2;

    //-//

    let theString3 = "";

    for (let j = 0; j < textArray.length; j++)
    {
        theString3 += textArray[j] + ', ';
    }

    // send theString3 to listRowDiv
    ge('listRowDiv').innerHTML = theString3;

    //-//

    return textArray;
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

