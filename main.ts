/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Aden Hughes
 * Created on: Mar 12
 * This program Simulates rock paper sizzors game
*/

// Variables needed
let randomNumber: number = 0
let gameScore: number = 0

randomNumber = -1
basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onGesture(Gesture.Shake, function () {
    randomNumber = randint(0, 2)
    basic.clearScreen()

    // if randomNumber was 0
    if (randomNumber == 0) {
        basic.showIcon(IconNames.SmallSquare)
        basic.pause(5000)
    }

    // if randomNumber was 1
    if (randomNumber == 1) {
        basic.showIcon(IconNames.Square)
        basic.pause(5000)
    }

    // if randomNumber was 2
    if (randomNumber == 2) {
        basic.showIcon(IconNames.Scissors)
        basic.pause(5000)
    }

    // ready for next round
    basic.pause(1000)
    basic.showIcon(IconNames.Happy)
})

// adding your score
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    gameScore = gameScore + 1
    basic.showIcon(IconNames.Yes)
    basic.showIcon(IconNames.Happy)
})

// displaying your score
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showString('Score: ' + gameScore)
    basic.showIcon(IconNames.Happy)
})