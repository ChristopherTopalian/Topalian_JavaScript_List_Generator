// makeTextEntryInput.js

function makeTextEntryInput()
{
    theTextEntryId += 1;

    let textEntry = ce("textarea");
    textEntry.id = theTextEntryId;
    textEntry.title = textEntry.id;
    textEntry.className = "textEntry";
    textEntry.style.height = 40 + 'px';
    textEntry.onclick = function()
    {
        clickSound();
    };
    textEntry.onkeyup = function()
    {
        getAllTextareas();
    };
    ge('entriesContainer').append(textEntry);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

