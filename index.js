#!/usr/bin/env node

// Prompt and Chalk Integration
import promptSync from 'prompt-sync';
const prompt = promptSync();
import chalk from 'chalk';
// ==================================

// JS DATA IMPORTS
import printStatus from './design/ui_header.js';
import printMenu from './design/ui_menu.js';
import printCat from './design/ui_body.js';
import printMode from './design/ui_mode.js';
import printMinusLine from './design/ui_minusLine.js';
import printSubLine from './design/ui_subline.js';
import needs_terminal_warnings from './design/ui_warnings.js';
// import break_The_Interval from './break_commands.js';
import interact from './interact_querry.js';
import printIntro from './design/ui_intro.js';
import loadingBar from './design/ui_loadingBar.js';
import printOutro from './design/ui_outro.js'
import printThankYou from './design/ui_thank-you.js'

// ==================================================
await printIntro();
console.clear()
await loadingBar();

const yoshi = {
    name: 'Yoshi',
    food: 100,
    drink: 100,
    mood: 100,
    health: 100,
    services: 0,
    mode: "",
    time: 0,

    // INTERACTIONS
    // FOOD
    feedTuna() {
        if ( this.mode === "Butler" ){
            if (this.food < 71){ 
            this.food += 30
            this.mood -= 25
            // console.log("that makes me full, but not satisfied");
            this.services++
            }else {
            this.food = 100;
            this.services++
            }
        }
        if (this.mode === "Valet"){
            if (this.food < 66){ 
                this.food += 35
                this.mood -= 20
                // console.log("that makes me full, but not satisfied");
                this.services++
                }else {
                this.food = 100;
                this.services++
                }
        }
        if (this.mode === "Footmen"){
            if (this.food < 61){ 
                this.food += 40
                this.mood -= 15
                // console.log("that makes me full, but not satisfied");
                this.services++
                }else {
                this.food = 100;
                this.services++
                }
        }
    },
    feedCatfood() {
        if ( this.mode === "Butler" ){
            if (this.food < 81){
            this.food += 20
            this.drink -= 25
            // console.log("are you Kidding me?");
            this.services++
            }else{
                this.food = 100;
                this.services++
            }
    }
        if ( this.mode === "Valet" ){
            if (this.food < 76){
            this.food += 25
            this.drink -= 20
            // console.log("are you Kidding me?");
            this.services++
            }else{
                this.food = 100;
                this.services++
            }
    }
        if ( this.mode === "Footmen" ){
            if (this.food < 71){
            this.food += 30
            this.drink -= 15
            // console.log("are you Kidding me?");
            this.services++
            }else{
                this.food = 100;
                this.services++
            }
    }   
    },
    feedLasagne() {
        if (this.mode === "Butler"){
            if (this.food < 81){
            this.food += 20
            this.drink -= 30
            // console.log("let's do the Garfield way, you may kiss the paw now");
            this.services++
            }else {
                this.food = 100;
                this.services++
            }
        }
        if (this.mode === "Valet"){
            if (this.food < 76){
            this.food += 25
            this.drink -= 25
            // console.log("let's do the Garfield way, you may kiss the paw now");
            this.services++
            }else {
                this.food = 100;
                this.services++
            }
        }
        if (this.mode === "Footmen"){
            if (this.food < 71){
            this.food += 30
            this.drink -= 20
            // console.log("let's do the Garfield way, you may kiss the paw now");
            this.services++
            }else {
                this.food = 100;
                this.services++
            }
        }
    },

    // DRINK
    drinkWater() {
        if ( this.mode === "Butler" ){
            if (this.drink < 71){
            this.drink += 30
            this.mood -= 25
            // console.log("Go away with the cheap booze.....but thanks loyal human");
            this.services++
        }else {
            this.drink = 100;
            this.services++
        }
    }
        if ( this.mode === "Valet" ){
            if (this.drink < 66){
            this.drink += 35
            this.mood -= 20
            // console.log("Go away with the cheap booze.....but thanks loyal human");
            this.services++
        }else {
            this.drink = 100;
            this.services++
        }
    }
        if ( this.mode === "Footmen" ){
            if (this.drink < 61){
            this.drink += 40
            this.mood -= 15
            // console.log("Go away with the cheap booze.....but thanks loyal human");
            this.services++
        }else {
            this.drink = 100;
            this.services++
        }
        }
    },
    drinkMilk() {
        if( this.mode === "Butler" ){
            if(this.drink < 81){
            this.drink += 20
            this.mood -= 20
            // console.log("uhh mewow");
            this.services++
            }else {
                this.drink = 100;
                this.services++
        }
    }
        if( this.mode === "Valet" ){
            if(this.drink < 76){
            this.drink += 25
            this.mood -= 15
            // console.log("uhh mewow");
            this.services++
            }else {
                this.drink = 100;
                this.services++
        }
    }
        if( this.mode === "Footmen" ){
            if(this.drink < 71){
            this.drink += 30
            this.mood -= 10
            // console.log("uhh mewow");
            this.services++
            }else {
                this.drink = 100;
                this.services++
        }
    }
    },
    drinkChampagne() {
        if ( this.mode === "Butler" )
            if(this.drink < 91){
            this.drink += 10
            this.food -= 30
            // console.log("just a little dropplet for my royal paw");
            this.services++
            }else {
                this.drink = 100;
                this.services++
        }
        if ( this.mode === "Valet" )
            if(this.drink < 86){
            this.drink += 15
            this.food -= 25
            // console.log("just a little dropplet for my royal paw");
            this.services++
            }else {
                this.drink = 100;
                this.services++
        }
        if ( this.mode === "Footmen" )
            if(this.drink < 81){
            this.drink += 20
            this.food -= 20
            // console.log("just a little dropplet for my royal paw");
            this.services++
            }else {
                this.drink = 100;
                this.services++
        }
    },

    // MOOD
    strokeBelly() {
        if( this.mode === "Butler" ){
            if(this.mood < 71){
            this.mood += 30
            this.food -= 25
            // console.log("purr purr....purr it's better now");
            this.services++
            }else {
                this.mood = 100;
                this.services++
            }
    }
        if( this.mode === "Valet" ){
            if(this.mood < 67){
            this.mood += 35
            this.food -= 20
            // console.log("purr purr....purr it's better now");
            this.services++
            }else {
                this.mood = 100;
                this.services++
            }
        }
        if( this.mode === "Footmen" ){
            if(this.mood < 61){
            this.mood += 40
            this.food -= 15
            // console.log("purr purr....purr it's better now");
            this.services++
            }else {
                this.mood = 100;
                this.services++
            }
    }
    },
    dance() {
        if( this.mode === "Butler" ){
            if(this.mood < 81){
            this.mood += 20
            this.drink -= 10
            // console.log("dance little monkey...dance!");
            this.services++
            }else {
                this.mood = 100;
                this.services++
            }
        }
        if( this.mode === "Valet" ){
            if(this.mood < 76){
            this.mood += 25
            this.drink -= 5
            // console.log("dance little monkey...dance!");
            this.services++
            }else {
                this.mood = 100;
                this.services++
            }
        }
        if( this.mode === "Footmen" ){
            if(this.mood < 71){
            this.mood += 30
            this.drink -= 0
            // console.log("dance little monkey...dance!");
            this.services++
            }else {
                this.mood = 100;
                this.services++
            }
        }
    },
    turnOnTv() {
        if( this.mode === "Butler" ){
            if(this.mood < 81){
            this.mood += 20
            this.food -= 30
            // console.log("Finally I can continue watching 'How to sell drugs online (fast)'. Do not disturb me");
            this.services++
            }else {
                this.mood = 100;
                this.services++
        }
    }
        if( this.mode === "Valet" ){
            if(this.mood < 76){
            this.mood += 25
            this.food -= 25
            // console.log("Finally I can continue watching 'How to sell drugs online (fast)'. Do not disturb me");
            this.services++
            }else {
                this.mood = 100;
                this.services++
        }
    }
        if( this.mode === "Footmen" ){
            if(this.mood < 71){
            this.mood += 30
            this.food -= 20
            // console.log("Finally I can continue watching 'How to sell drugs online (fast)'. Do not disturb me");
            this.services++
            }else {
                this.mood = 100;
                this.services++
        }
    }
    },
    serv(){
        if( this.services === 0 ){
            return "000"
        }
        if( this.services.toString().length === 1 ){
            return "00" + this.services
        }
        if( this.services.toString().length === 2 ){
            return "0" + this.services
        }
        if( this.services.toString().length === 3 ){
            return this.services
        }
    },
    lvl(){
        if (this.mode.length === 7){
            return this.mode
        }
        if( this.mode.length === 6 ){
            return this.mode + " "
        }        
        if( this.mode.length === 5 ){
            return this.mode + "  "
        }
    },
    tim() {
        if (this.time.toString().length === 1) {
            return "00" + this.time;
        }; 
        if (this.time.toString().length === 2) {
            return "0" + this.time;
        };
        if (this.time.toString().length === 3) {
            return this.time;
        }; 
    }
};


// EVERYTHING WHAT IS NEED FOR CHOOSE THE DIFFICULTY // 
const difficulty = [
    { Footmen: 3000 },   // => Hausdiener
    { Valet: 2000 },     // => Kammerdiener
    { Butler: 1000 },     // => (Chef-) Diener
];

// LET THE USER CHOOSE THE DIFFICULTY LEVEL
let catchTheNumArr = [];
const setDifficulty = () => {
    console.clear();
    printMode();
    printSubLine();
    //                             ('===============================================================================================')
    let queryTheDifficulty = prompt(`                     C H O O S E   Y O U R   G A M E   M O D E  >>    `);
    if( queryTheDifficulty != "1" && queryTheDifficulty != "2" && queryTheDifficulty != "3"){
        queryTheDifficulty = prompt(`                     C H O O S E   Y O U R   G A M E   M O D E  >>    `);
    }
    const catchTheNum = queryTheDifficulty-1;
    catchTheNumArr.push(catchTheNum);
};
setDifficulty();
yoshi.mode = Object.keys(difficulty[catchTheNumArr]).join("");

let countdownForNeeds = () => {
    // SET TIME (TIME PER UNIT) HIGHER
    if (catchTheNumArr.length > 0 ) {
        yoshi.time += (Object.values(difficulty[catchTheNumArr]) / 1000); 
    } 

    // TO CLEAR THE CONSOLE ON EVERY EXECUTION
    console.clear();  

    // NEEDS CALCULATION //
    yoshi.food -= 1;
    yoshi.drink -= 3;    
    yoshi.mood -= 2;    
    yoshi.health = parseInt(((yoshi.food + yoshi.drink + yoshi.mood) / 3).toFixed())    

    // PRINT STATUS //  
    console.log();       
    printStatus ( yoshi.food, yoshi.drink, yoshi.mood, yoshi.health ); 
    console.log(printCat(yoshi));

    // MENU //  
    printMenu();

    // PRINT THE WARNINGS OF THE 4 NEEDS //
    needs_terminal_warnings(yoshi.food, yoshi.drink, yoshi.mood, yoshi.health);
    printSubLine();
    console.log();

    // BREAK COMMAND //

    if (yoshi.health <= 0) {
        clearInterval(countdownMain);
        console.clear();
        console.log();
        printStatus(yoshi.food, yoshi.drink, yoshi.mood, yoshi.health);
        console.log(printCat(yoshi));
        printMenu();
//                                     ('===============================================================================================')
        console.log(chalk.redBrightbold('                               You make me sick!  YOU ARE FIRED!                               '));
//                          ('===============================================================================================')
        printSubLine();
        let enter = prompt('                                >>   P R E S S   E N T E R   <<                                ');
        console.clear();
        printOutro();
        printThankYou();
    }
    if (yoshi.mood <= 0) {
        clearInterval(countdownMain);
        console.clear();
        console.log();
        printStatus(yoshi.food, yoshi.drink, yoshi.mood, yoshi.health)
        console.log(printCat(yoshi));
        printMenu();
//                                      ('===============================================================================================')
        console.log(chalk.redBright.bold('                           I didn`t have enough fun!  YOU ARE FIRED!                           '));
//                        ('===============================================================================================')
        printSubLine();
        let enter = prompt('                                >>   P R E S S   E N T E R   <<                                ');
        console.clear();
        printOutro();
        printThankYou();
    }
    if (yoshi.food <= 0) {
        clearInterval(countdownMain);
        console.clear();
        console.log();
        printStatus(yoshi.food, yoshi.drink, yoshi.mood, yoshi.health);
        console.log(printCat(yoshi));
        printMenu();
//                                      ('===============================================================================================')
        console.log(chalk.redBright.bold('                               I was too hungry!  YOU ARE FIRED!                               '));
//                        ('===============================================================================================')
        printSubLine();
        let enter = prompt('                                >>   P R E S S   E N T E R   <<                                ');
        console.clear();
        printOutro();
        printThankYou();
    }
    if (yoshi.drink <= 0) {
        clearInterval(countdownMain);
        console.clear();
        console.log();
        printStatus(yoshi.food, yoshi.drink, yoshi.mood, yoshi.health);
        console.log(printCat(yoshi));
        printMenu();
//                                      ('===============================================================================================')
        console.log(chalk.redBright.bold('                              I got too thirsty!   YOU ARE FIRED!                              '));
//                          ('===============================================================================================')
        printSubLine();
        let enter = prompt('                                >>   P R E S S   E N T E R   <<                                ');
        console.clear();
        printOutro();
        printThankYou();
    }

    // INTERACTION BREAKPOINT
    if( yoshi.health < 70 && yoshi.health > 67 ){
        interact();
    }else if( yoshi.health < 55 && yoshi.health > 52 ){
        interact();
    }else if( yoshi.health < 25 && yoshi.health > 22 ){
        interact();
    }     
};


const countdownMain = (setInterval(function () { countdownForNeeds() }, Object.values(difficulty[catchTheNumArr])));

export default yoshi;
