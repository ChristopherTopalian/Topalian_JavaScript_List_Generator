// makeInterface.js

function makeInterface()
{
    let mainDiv = ce("div");
    mainDiv.id = 'mainDivApp';
    ba(mainDiv);

    //-//

    let buttonAdd = ce("button");
    buttonAdd.textContent = "Add Text Box";
    buttonAdd.onmouseover = function()
    {
        hoverSound();
    };
    buttonAdd.onclick = function()
    {
        clickSound();
        makeTextEntryInput();
    };
    mainDiv.append(buttonAdd);

    //-//

    let reportContainer = ce("div");
    reportContainer.id = "reportContainer";
    reportContainer.className = 'reportContainer';
    mainDiv.append(reportContainer);

    //-//

    let stringifiedArrayDiv = ce("div");
    stringifiedArrayDiv.id = 'stringifiedArrayDiv';
    stringifiedArrayDiv.title = 'stringifiedArrayDiv';
    stringifiedArrayDiv.innerHTML = 'Array';
    stringifiedArrayDiv.className = "stringifiedArrayDiv";
    stringifiedArrayDiv.onmouseover = function()
    {
        hoverSound();
    };
    reportContainer.append(stringifiedArrayDiv);

    //-//

    let listRowDiv = ce("div");
    listRowDiv.id = 'listRowDiv';
    listRowDiv.title = 'listRowDiv';
    listRowDiv.innerHTML = 'Comma Separated List in a Row';
    listRowDiv.className = 'listRowDiv';
    listRowDiv.onmouseover = function()
    {
        hoverSound();
    };
    reportContainer.append(listRowDiv);

    //-//

    let listColumnDiv = ce("div");
    listColumnDiv.id = 'listColumnDiv';
    listColumnDiv.title = 'listColumnDiv';
    listColumnDiv.innerHTML = 'List in a Column';
    listColumnDiv.className = 'listColumnDiv';
    listColumnDiv.onmouseover = function()
    {
        hoverSound();
    };
    reportContainer.append(listColumnDiv);

    //-//

    let csvListDiv = ce("div");
    csvListDiv.id = 'csvListDiv';
    csvListDiv.title = 'csvListDiv';
    csvListDiv.innerHTML = 'Comma Separated List in a Column';
    csvListDiv.className = 'csvListDiv';
    csvListDiv.onmouseover = function()
    {
        hoverSound();
    };
    reportContainer.append(csvListDiv);

    //-//

    mainDiv.append(ce('br'));
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

