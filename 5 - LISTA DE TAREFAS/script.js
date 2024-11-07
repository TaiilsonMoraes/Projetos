var fonts = [
    'Arial', 'Verdana', 'Helvetica', 'Times New Roman', 'Courier New', 
    'Georgia', 'Palatino', 'Garamond', 'Bookman', 'Comic Sans MS'
];


let selctvalue = document.querySelector("#select_values");



fonts.forEach(function(fonts){
    let creatoption = document.createElement("option");
    creatoption.textContent = fonts;
    creatoption.style.fontFamily = fonts;
    selctvalue.appendChild(creatoption);
})