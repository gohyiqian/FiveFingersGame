![Guitar Image](/images/guitar.jpg)

# Five Keys Songs
[Try the Game Here](https://gohyiqian.github.io/GA-Project1/)
## An Overview
Hello!

Five Keys Songs is specially designed for people who do not have much music talent, like myself, but aspire to be able to play some simple piano notes to impress your friends and family. Songs that can be played using just 5 keys, namely 'C','D','E','F' and 'G', are being selected for this game so that anyone with no piano background can pick it up easily!

This game is therefore a simple adaptation of the popular *Guitar Hero* and *Piano Tiles* games.
Players will time the descending target and receive points when they keypress 'A','S','D','F','G' or mouseclick at the correct timing.

[Guitar Image](/images/screenshot.jpg)
Format: ![Alt Text](url)

The game is created using custom functions of HTML canvas element.
Canvas is an HTML element that allows a user to create graphics, on the fly, using Javascript. It can be used to create animations, interactive graphics, and browser games.
One thing to note is that the coordinate system for canvas starts from the top left.

Basic Animation Steps using canvas elements:
1. Draw the shapes to be animated
2. Define motion of shapes (transform in y-direction)
3. Clear the canvas using *clearRect* function to remove previous frame
4. Update the canvas. To constantly update the canvas, we need to define a drawing loop using JavaScript timing function such as *setInterval*, *setTimeout* or *requestAnimationFrame* functions


## Some To-Do List I have set for myself

- [ ] Create Wireframe
- [ ] Add Start Scene
- [ ] Add How to Play Scene
- [ ] Add Playing Scene
- [ ] Add Game Over Scene
- [x] Create a canvas and add 5 buttons
- [x] Add mouse-click & keypress eventlisteners
- [x] Add corresponding colors when button is activated
- [x] Add some music effects when button is activated correctly vs wrongly
- [x] Add requestAnimationFrame or setInterval function to loop animations
- [x] Define a threshold for 'correct' button hit
- [ ] Add scoring based of # of correct timing of activating the buttons
- [ ] Add gradient trail for movement
- [ ] Add songs that is broken down into 5 notes
- [ ] Add progress bar
- [ ] Add ability to save game progress


## Implementation

## Future Improvements
- [ ] Add different songs
- [ ] Add combos or streaks
- [ ] Add different levels


###### This is an <h6> tag

*This text will be italic*
_This will also be italic_

**This text will be bold**
__This will also be bold__

_You **can** combine them_

* Item 1
* Item 2
  * Item 2a
  * Item 2b




[GitHub](http://github.com)

As Kanye West said:

> We're living the future so
> the present is our past.

I think you should use an
`<addr>` element here instead.

    function fancyAlert(arg) {
      if(arg) {
        $.facebox({div:'#foo'})
      }
    }

First Header | Second Header
------------ | -------------
Content from cell 1 | Content from cell 2
Content in the first column | Content in the second column