# typescript-keusvc

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/typescript-keusvc)

# Observer Design Pattern using typescript

## The objects participating in this pattern are:

### Subject:

- maintains list of observers. Any number of Observer objects may observe a Subject
- implements an interface that lets observer objects subscribe or unsubscribe
- sends a notification to its observers when its state changes

### Observer

- has a function signature that can be invoked when Subject changes (i.e. event occurs)
