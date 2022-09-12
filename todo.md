<h1>Todo List

- Maybe memoize the value of orderSummary in the useEffect or OrderSummary to increase performance and adhere to best practices.

- A small bug but when an option for grind is chosen then Capsule is chosen grind is closed. When another adjacent choice to Capsule is chosen and grind is no longer disabled the choice that was selected for grind is still highlighted green making it seem as if the app rembered the choice.

- Maybe move all data from the components and move it to another folder then import the data. Not sure if this is the best method or not but it seems logical.

- Remove the padding-top from the first accordion list item.

- Try to come up with a more elegant solution to adding and removing the background color to the cards in Accordion.js.


<h2>Steps to fix accordion

- Lift the state up to createPlanSectionTwo.js. Two components share the same state these are the Accordian and the OrderSummary. 

- Pull the OrderSummary out of the Accordion component. This is bad design. The reason it is there is to share state with the Accordion component and since the state is going to be lifted this does not need to happen anymore.

- The StepsLinks does not work at all. The StepsLinks might need access to the state as well.

<h2>Finished

- Change the createPlanSectionTwo into a grid layout with two columns and two rows. Now that I have pulled the OrderSummary out of the Accordion component the original flex layout does not work. The flex layout can still be applied on small screens.

- Disable the grind accordion item when Capsule is chosen.
    - maybe setup a piece of state that tracks if Capsule is chosen.
    - pass that grind state to the grind accordion item.

- The plans data needs to be moved from Accordion.js so that it can be used in the Modal.

- Go back over accordionCard.css and accordion.css and remove any unnecessary css and comments.

- Delete the Steps.js once the Accordion.js is finished

- Delete Steps from CreatePlanSectionTwo.js

- Clean up all the trial and error code from Accordion, AccordionItem and  AccordionCard.

- Fix the Services component on the createPlan page. The padding is not uniform for all elements. Most evident with the line and three dots.