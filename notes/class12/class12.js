/*****************************************************************************/
/*****************************************************************************/
/************************ C L A S S  1 2  N O T E S **************************/
/*****************************************************************************/
/*****************************************************************************/


/* DESIGN PATTERNS ******************************************************/

// --> in programming, one identifies a problem and solve it by writing code

// --> many of the problems were encountered by many other programmers

// --> design patterns are well-thought solutions to some of these problems

/* OBSERVER DESIGN PATTERN **********************************************/

// --> assume you have creatd a window with many shapes on it

// --> Somebody is trying to resize the window: iterate through all of the 
//     elements and perform a resize function
//      --> takes time to iterate through all of the elements
//      --> some might not need to be resized

// ------------------------------------------------------------------------- //

// --> Community has a design pattern for this problem: the Observer

// --> When an element is affected by a change in another element
//      --> it registers itself
//      --> it can then be notified of changes

// --> How will you use the Oberver to solve our window resizing problem?
//      --> everything can be observed/observant
//      --> it can then be notified of changes

// ---------------------------- E V E N T S ------------------------------- //

// --> resizing a window can be considered as an event

// --> any interaction with the user can be considered as an event
//      --> such as: moving, scrolling, logging in

// --> some don't require user interaction...
//      --> automatic update,finish uploading,etc

/* ACTIONS ******************************************************/

// --> when an event occurs, an action is sometimes required
//      --> this action might affect other elements

// --> **
//      --> **

// ---------------------- E V E N T  T A R G E T --------------------------- //

// --> an element which can fire an event is an event target

// --> an element which should be notified when events happen is an event listener

// --> event targets hav esupport for event listeners

// --> any interaction with the user can be considered as an event
//      --> such as: moving, scrolling, logging in

// --> even targets in Java Script
//      --> elements, windows, etc, inherit from EventTarget
//              --> they can set event handlers

//      --> types of events:
//              --> mouse-related: movement, clicks, enter/leave element
//              --> keyboard-related:
//              --> focus-related: focus in, focus out (blur)
//              --> input filed changed, form submitted
//              --> timer events
//              --> miscellaneous: content of an element has changed, page 
//                  loaded/unloaded, image loaded, uncaught exception


/* EVENT HANDLING ******************************************************/

// --> event handlers require to know
//      --> what happened
//      --> where it happened
//      --> what to do next?

// ------------------------ H A N D L E R S ----------------------------- //

<button onlick="myfun();">Button</button>
//wont work unless you define myfun()

// create js

/* EVENT LISTENERS ******************************************************/

// --> adding event listeners inside the html breaks the content/behavior separation

// --> binding shoudl be doen in the JS file

b.addEventListener("click", myfun)

/* EVENT OBJECTS *********************************************************/

// --> event handlers recieve an EventObject as argument

let myfun = function(event)

// --> try to log this object to console. which event did you get

/* CALLBACK FUNCTIONS ******************************************************/
