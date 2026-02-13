const marvel_heroes = ["thor", "ironman", "hulk", "captain america"]
const dc_heroes = ["superman", "batman","flash"]
marvel_heroes.push(dc_heroes) //adds the entire dc_heroes array as a single element at the end of the marvel_heroes array
console.log(marvel_heroes) //gives array in array
console.log(marvel_heroes.length) //gives 5 because the entire dc_heroes array is added as a single element
console.log(marvel_heroes[4][1])
const all_heroes = marvel_heroes.concat(dc_heroes) //combines the two arrays into a single array
console.log(all_heroes) //gives a single array with all the heroes
const another_arr = [1, 2, 3, [4, 5, 6], 7,[6, 7, [4,5]]]
const real_another_array = another_arr.flat(Infinity) //flattens the array to a single level, regardless of how many nested levels there are
console.log(real_another_array) //gives a single array with all the elements, including those from nested arrays