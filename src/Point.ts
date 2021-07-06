//ref: https://github.com/jimmysong/programmingbitcoin/tree/master/code-ch02
export class Point {
  private x: number;
  private y: number;
  private a: number;
  private b: number;
  constructor(x: number, y: number, a: number, b: number) {
    this.x = x;
    this.y = y;
    this.a = a;
    this.b = b;
    if (isNaN(x) && isNaN(y)) {
      return;
    }

    if (y ** 2 !== x ** 3 + a * x + b) {
      throw 'invalid point';
    }
  }

  infinity(): Point {
    return new Point(NaN, NaN, this.a, this.b);
  }

  eq(other: Point): boolean {
    return this.x === other.x && this.y === other.y && this.a === other.a && this.b === other.b;
  }

  toString() {
    if (isNaN(this.x)) {
      return 'Point(infinity)';
    }
    return `Point_${this.y}^2=${this.x}^3+${this.a}*${this.x}+${this.b}`;
  }

  ne() {
    return new Point(this.x, -this.y, this.a, this.b);
  }

  add(other: Point) {
    if (this.a !== other.a || this.b !== other.b) {
      throw 'not on the same curve';
    }
    if (isNaN(this.x)) {
      return other;
    }
    if (isNaN(other.x)) {
      return this;
    }
    if (this.x === other.x && this.y === -other.y) {
      return this.infinity();
    }

    if (this.x !== other.x) {
      const s = Math.trunc((other.y - this.y) / (other.x - this.x));
      const x3 = s ** 2 - this.x - other.x;
      const y3 = s * (this.x - x3) - this.y;
      return new Point(x3, y3, this.a, this.b);
    }

    if (this.eq(other)) {
      if (this.y === 0) {
        return this.infinity();
      }
      const s = Math.trunc((3 * this.x ** 2 + this.a) / (2 * this.y));
      const x3 = s ** 2 - 2 * this.x;
      const y3 = s * (this.x - x3) - this.y;
      return new Point(x3, y3, this.a, this.b);
    }

    throw 'NotImplemented';
  }
}
