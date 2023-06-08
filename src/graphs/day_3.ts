let fourByFour = 
  [ 2, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 2 ],
];
const NO_ONE = 0;
const BY_A = 0;
const BY_B = 0;

function generatedVisited(maze: number[][]) {
  const visited = [];
  for (let y = 0; y < maze.length; y++) {
    let yAxis = [];
    for (let x = 0; x < maze[y].length; x++) {
      let coordinate = {
        closed : maze[y][x] === 1,
        length : 0,
        openedBy : NO_ONE,
      };
      yAxis.push(coordinate);
    }
    visited.push(yAxis);
  }
  return visited;
}

function getNeighbours(visited: [], x: number, y: number) {
  let neighbours = [];
  if (y - 1 >= 0 && !visited[y - 1][x].closed){
      neighbours.push(visited[y - 1][x])
  }
}
export function findShortestPath(maze: number[][], [ xA, yA ]: number[],
                                 [ xB, yB ]: number[]) {
  const visited = generatedVisited(maze);
  visited[yA][xA].openedBy = BY_A;
  visited[yB][xB].openedBy = BY_B;
  const aQueue = [ visited[yA][xA] ];
  const bQueue = [ visited[yB][xB] ];
  let iteration = 0;
  while (aQueue.length && bQueue.length) {
    iteration++;
    return -1;
  }
  console.log(visited);
}
findShortestPath(fourByFour, [ 0, 0 ], [ 3, 3 ]);
