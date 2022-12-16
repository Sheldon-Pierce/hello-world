function doYouBoard(){
    let choice = confirm("Do you like to ski and snowboard?");
    if (choice == false) {
        window.location.assign('https://www.tiktok.com/@zakki.mm/video/7100474006117108997?is_from_webapp=v1&item_id=7100474006117108997');
    }
}
    
function choosingBackgroundColor(){
    let color = prompt("What is your favorite color");
    let option = confirm("Would you like to change the background to your color?");
    if (option == true) {
         document.body.style.backgroundColor = color;
    } else {
        let option2 = confirm("Are you sure?")
        if (option2 == true) {
            document.body.style.backgroundColor = color;
        }
    }
}

function Name(){
    let name = prompt("What is your name?");
    document.write(name + " at Whistler") ;
}

function areYouOver21(){
    let age = confirm("Are you over 21")
    while (age != true){
        age = confirm("Try again, You need to be 21 to enter")
    }
}

function numOfSnowboards(){
    let num = prompt("How many snowboards would you like?")
    for (let i = 0; i < num; i++) {
        document.write("<img src='snowboard.webp' alt='snowboarding'>" + (i + 1))
    }
}