# Gwen's Chapbook Addon Collection
## Installing the addon
To install the addon simply copy and paste the contents of the `.js` file into your `Story's JavaScript` page.
## {List Collection: \<collection> [, DisplayName: \<string>] [, Detailed: \<string>] [, AllowCount: true] }
Takes in an array or object collection to display it's contents as a list. <br>
Source Code: [ListCollection.js](https://github.com/GwenTastic/Chapbook-Addon-Collection/blob/master/LIst%20Collection/List%20Collection.js "List Collection.js") <br>

Arguments:
> - **`<collection>`** [Mandetory] the array or object of the collection which contents you want to be listed.
> - **`DisplayName`** [Optional, for `Objects` only] overwrites the default property `.Name` or `.name` that it looks for to display as name, which allows you to select any other property.
> - **`Detailed`** [Optional, for `Objects` only] takes in additional object property names to be displayed, multiple property names are simply separated by a space. There is a build in keyword `all` which will list all properties (except for the `DisplayName` choosen property).
> - **`AllowCount`** [Optional, for `Arrays` and `Objects`] will display a number at the front of the list which represents the index of the item inside the collection.

## Example Code:<br>
 > #### Display an Array Inventory:
> ```hs
> inventory: ["An apple", "A banana"]
> --
> {List Collection: inventory}
> ```
>  Expected Output:
> > An apple <br>
> > A banana

> #### Display an Array Inventory with counted numbers:
> ```hs
> inventory: ["An apple", "A banana"]
> --
> {List Collection: inventory, AllowCount: true}
> ```
> Expected Output:
> > 1 - An apple <br>
> > 2 - A banana


> #### Display an Object Inventory but show `color` instead of the `name` property:
> ```hs
> inventory: {Strawberries: {Name: "Strawberries", Count: 2, Color: "red", Value: 10}, Cherries: {Name: "Cherries", Count: 4, Color: "darkred", Value: 36}}
> --
> {List Collection: inventory, DisplayName: "color"}
> ```
> Expected Output:
> > red <br>
> > darkred

> #### Display an Object Inventory but with additional selected Properties (`color` and `count`):
> ```hs
> inventory: {Strawberries: {Name: "Strawberries", Count: 2, Color: "red", Value: 10}, Cherries: {Name: "Cherries", Count: 4, Color: "darkred", Value: 36}}
> --
> name - color - item count  <br>
> {List Collection: inventory, Detailed: "color count"}
> ```
> Expected Output:
> > name - color - item count  <br>
> > Strawberries - red - 2 <br>
> > Cherries - darkred - 4



> #### Display an Object Inventory with `Detailed: "all"` property which will show all properties:
> ```hs
> inventory: {Strawberries: {Name: "Strawberries", Count: 2, Color: "red", Value: 10}, Cherries: {Name: "Cherries", Count: 4, Color: "darkred", Value: 36}}
> --
> inv. nr. - name - item count - color - value
> {List Collection: inventory, Detailed: "all", AllowCount: true}
> ```
> Expected Output:
> > inv. nr. - name - item count - color - value <br>
> > 1 - Strawberries - 2 - red - 10 <br>
> > 2 - Cherries - 4 - darkred - 36
