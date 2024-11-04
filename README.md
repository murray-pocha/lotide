# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @murray-pocha/lotide`

**Require it:**

`const _ = require('@murray-pocha/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

  function: map                   Description: Creates a new array by calling a function on every element of the original array and storing the 
                                               results in a new array.

  function: head                  Description: Typically a utility function designed to return the first element of an array. 

  function: tail                  Description: A utility function that returns all elements of an array except for the first one. 

  function: middle                Description: A utility that returns the middle element(s) of an array.

  function: assertArraysEqual     Description: A custom assertion function used to compare two arrays for equality, prints a
                                               message indicating if they are the same or different. 
  function: assertEqual           Description: A function used to compare two primitive values (like numbers or strings) for equality and print a 
                                               message indicating whether the values are the same or different.
  function: assertObjectsEqual    Description: A custom assertion function used to compare two objects for equality and print a message indicating 
                                               whether they are the same or different.
  function: countLetters          Description: A utility function designed to count the frequency of each letter in a given string and return the 
                                               result as an object.
  function: countOnly             Description: Counts specific items in an array based on a provided criteria object. It allows you to specify 
                                               which items should be counted and which should be ignored. The function returns an object that contains the counts of only those items specified in the criteria object.
  function: eqArrays              Description: A utility function designed to compare two arrays for equality. It checks whether both arrays have 
                                               the same length and the same elements in the same order. Returns true, or false.

  function: eqObjects             Description: A utility designed to compare two objects for equality. It checks whether both objects have the 
                                               same keys with the same values.
  function: findKeyByValue        Description: A utility function designed to search through an object and find the first key that corresponds to 
                                               a given value. It iterates over the object's properties and returns the key associated with the specified value if found. If no key exists, it returns undefined.
  function: letterPositions       Description: Designed to identify and return all the indices of each letter in a given string. It 
                                               outputs an object where each key is a letter from the string, and each value is an array containing the indices where that letter appears.
  function: without               Description: Returns a new array that excludes specific elements.

  function: takeUntil             Description: A utility function often used with arrays in JavaScript. It iterates through an array and 
                                               constructs a new array containing elements from the original array until a specified condition is met. Once this condition is met it returns the accumulated results.
  function: findKey               Description: A utility often used with objects in JavaScript to search for the first key in an object that meets 
                                               a specified condition defined by a callback function. It iterates through the properties of the object and returns the key of the first property for which the callback returns a truthy value.