export class Client {
  radius: number;
  constructor(radius: number) {
    this.radius = radius;
  }
  getRadius(): number {
    return this.radius;
  }
  fits(hole: RoundPeg): boolean {
    return this.getRadius() >= hole.getRadius();
  }
}

export class RoundPeg {
  radius: number;
  constructor(radius: number) {
    this.radius = radius;
  }
  getRadius(): number {
    return this.radius;
  }
}

export class SquarePeg {
  width: number;
  constructor(width: number) {
    this.width = width;
  }
  getWidth(): number {
    return this.width;
  }
}

export class SquarePegAdapter extends RoundPeg {
  private squarePeg: SquarePeg;
  constructor(squarePeg: SquarePeg) {
    super(0);
    this.squarePeg = squarePeg;
  }
  getRadius(): number {
    return (this.squarePeg.getWidth() * Math.sqrt(2)) / 2;
  }
}

const small_hole = new Client(5);
const small_peg = new RoundPeg(5);
const big_pig = new RoundPeg(10);

console.log(small_hole.fits(small_peg));
console.log(small_hole.fits(big_pig));

const small_square_peg = new SquarePeg(5);
const big_square_peg = new SquarePeg(10);

console.log(small_hole.fits(new SquarePegAdapter(small_square_peg)));
console.log(small_hole.fits(new SquarePegAdapter(big_square_peg)));
