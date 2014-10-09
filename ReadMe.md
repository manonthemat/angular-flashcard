# angular-flashcard

A AngularJS flashcard directive.

## Usage in your HTML
Create a (div) container and give it the attribute flashcard.
You can pass in optional arguments.
Within that container you then define the front and back of the flashcard as its own directive (as elements).



    <div flashcard width='500' height='200' transition="0.5">
      <front style="background-color: pink">click me to flip me</front>
      <back style="background-color: yellow">vim vim vim vim vim vim vim vim vim vim vim vim vim vim vim vim vim vim vim vim vim vim vim vim vim vim vim vim vim vim</back>
    </div>

