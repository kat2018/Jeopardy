//Start a New Game
    //When user click "New Game" then open the clueBoard
        //New game starts
            //Show how many rounds I have in this game with a "answerTracker"
            //Show a 3X4 "clueBoard"
                //For each column
                    //display the "clue" in the fist row
                    //display the "pointsCard" in the second to third rows
                        //for each "pointsCard" clicked, display a new page (modal)
                            //display a timer
                            //display the "questionArray[]" associated with the "pointsCard selected"
                            //display 3 alternatives "answers" associated with "questionArray"
                                //allow each answer to be clickable
                                    //if the answer is wrong (false)
                                        //deduct the X points for that category from player 1
                                        //highlight the correct answer
                                        //after X seconds, return to the clueBoard
                                        //replace the "pointsCard" selected with a blank card
                                    //if the answer is correct (true)
                                        //add X points for that category to player 1
                                        //highlight the correct answer
                                        //replace the "pointsCard" selected with a blank card
                        //run the rounds until reaching X out of X rounds
                            //if round completed, 
                                //then change color of round X
                            //if player reaches 5 rounds
                                //end the game
                                //display new "scoreSummary"page
                                    //display box with total points
                                    //display box with "answerTracker" summary
                                    //display button with "NewGame"
            //Display an exit button
                //on click, return to "Main Menu"



//See the Rules of the game
//View the "How to Play"
//Change settings