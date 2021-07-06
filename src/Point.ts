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
    if(y**2 !== x**3+a*x+b){
      throw 'invalid point'
    }
  }

  toString() {
    return `Point_${this.y}^2=${this.x}^3+${this.a}*${this.x}+${this.b}`
  }

  ne() {
    return new Point(this.x, -this.y, this.a, this.b)
  }
}