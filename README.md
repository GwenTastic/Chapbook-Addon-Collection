# Gwen's Chapbook Addon Collection
## Installing the addon
To install the addon simply copy and paste the contents of the `.js` file into your `Story's JavaScript` page.
## {List Collection: \<collection> [, DisplayName: \<string>] [, Detailed: \<string>] [, AllowCount: true] }
Takes in an array or object collection to display it's contents as a list. <br>
Source Code: [ListCollection.js]() <br>

Arguments:
> - **`<collection>`** [Mandetory] the array or object of the collection which contents you want to be listed.
> - **`DisplayName`** [Optional, for `Objects` only] overwrites the default property `.Name` or `.name` that it looks for to display as name, which allows you to select any other property.
> - **`Detailed`** [Optional, for `Objects` only] takes in additional object property names to be displayed, multiple property names are simply separated by a space. There is a build in keyword `all` which will list all properties (except for the `DisplayName` choosen property).
> - **`AllowCount`** [Optional, for `Arrays` and `Objects`] will display a number at the front of the list which represents the index of the item inside the collection.

Example Code:<br>
 > Display an Array Inventory:
 ```hs
 inventory: ["An apple", "A banana"]
 --
 {List Collection: inventory}
 -- Output:
 -- An apple
 -- A banana
 ```
 
> Display an Array Inventory with counted numbers:
```hs
inventory: ["An apple", "A banana"]
--
{List Collection: inventory, AllowCount: true}
-- Output:
-- 1 - An apple
-- 2 - A banana
```

> Display an Object Inventory but show `color` instead of the `name` property:
```hs
inventory2: { Strawberries: { name: "Strawberries", count: 2, color: "red", value: 10 }, Cherries: { name: "Cherries", count: 4, color: "darkred", value:  36} }
--
{List Collection: inventory2, DisplayName: "color"}
-- Output:
-- red
-- darkred
```

> Display an Object Inventory but with additional selected Properties (`color` and `count`):
```hs
inventory2: { Strawberries: { name: "Strawberries", count: 2, color: "red", value: 10 }, Cherries: { name: "Cherries", count: 4, color: "darkred", value:  36} }
--
Name - Color - Item Count: <br>
{List Collection: inventory2, Detailed: "color count"}
-- Output:
-- Name - Color - Item Count:
-- Strawberries - red - 2
-- Cherries - darkred - 4
```

> Display an Object Inventory with `Detailed: "all"` property which will show all properties:
```hs
inventory2: { Strawberries: { name: "Strawberries", count: 2, color: "red", value: 10 }, Cherries: { name: "Cherries", count: 4, color: "darkred", value:  36} }
--
Inv. Nr. - Name - Item Count - Color - Value:
{List Collection: inventory2, Detailed: "all", AllowCount: true}
-- Output:
-- Inv. Nr. - Name - Item Count - Color - Value:
-- 1 - Strawberries - 2 - red - 10
-- 2 - Cherries - 4 - darkred - 36
```