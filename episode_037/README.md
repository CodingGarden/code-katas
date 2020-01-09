

* In redux store, have a property on state, that is an array of toast messages, initially empty
  * Includes:
    * text of the message
    * num of seconds to display
    * start time
* In the store, have an action that can remove a message from the array
* When you want to display a toast, add a message with the above properties to the array
  * Dispatch an action with message, num of seconds to display
  * add to array of messages
* A top level component, most likely in main App component
  * is connected to store, has access to array of toast messages
  * map over array, and show each toast message (absolute position, or fixed position)
    * have fade transition / slide transition on the list