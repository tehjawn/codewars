// Airport Graph Example from Fireship

// Nodes are Airports
// Edges are Airplane Routes between two Airports
// -- Cycles not possible
// -- Undirected
// -- Unweighted

// Given a list of airports and routes, create a graph.

const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK'],
]

// Two ways to approach turning this into a graph: A Matrix or an Adjacency List

// Our Graph
const adjancencyList = new Map();

// Adding Nodes
let addNode = (airport) => {
    adjancencyList.set(airport, []);
}

// Add Undirected Edge
let addEdge = (origin, destination) => {
    adjancencyList.get(origin).push(destination);
    adjancencyList.get(destination).push(origin);
}

// Create Graph
airports.forEach(addNode);
routes.forEach(route => addEdge(...route))

// console.log(adjancencyList) // Show Graph

// Goal: Get Route from Phoenix to Bangkok

// BFS Breadth First Search

let bfs = (start) => {

    const visited = new Set(); // "Unique values"-only array that stores visited airports.
    const queue = [start]; // A queue where first item in is also the first item out.
    let steps = 1;

    while (queue.length > 0) {

        const airport = queue.shift(); // We can use .shift() to dequeue the first item in the array.
        const destinations = adjancencyList.get(airport); // Get airport connections.

        destinations.forEach(destination => {

            console.log(destination);

            if (destination === 'BKK') { // If destination is Bangkok...
                console.log(`Found it in ${steps} steps!`);
            }

            if (!visited.has(destination)) { // Check if destination exists in the visited set.
                visited.add(destination); // Add current destination to the visited set.
                queue.push(destination); // Add destination to queue if it has not been visited already.
                steps += 1;
            }

        })
    }
}

console.log("=== BFS ===");
bfs('PHX'); // Time Complexity: O(v+e) where v represents the vertices (nodes) and e represents the edges.
// Goes through 9 airports before hitting PHX. BFS is good for finding all possible routes for the most efficient route.

// If we only cared about Phoenix though, what would be a more efficient technique?

// DFS Depth First Search

let dfs = (start, visited = new Set(), steps = 1) => { // Uses recursion!

    console.log(start)

    visited.add(start);

    const destinations = adjancencyList.get(start);

    destinations.forEach(destination => {
        if (destination === 'BKK') {
            console.log(`Found it in ${steps} steps!`)
            return;
        }

        if (!visited.has(destination)) {
            dfs(destination, visited, steps + 1);
        }
    })
}

console.log("=== DFS ===");
dfs('PHX'); // Time Complexity: Same as BFS - O(v+e) where v represents the vertices (nodes) and e represents the edges.
// Only takes 3 function calls using Depth First Search! DFS better in this case.