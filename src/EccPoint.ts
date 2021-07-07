//ref: https://github.com/jimmysong/programmingbitcoin/tree/master/code-ch02
import { FieldElement } from "./FieldElement";
export class EccPoint {
  private x: FieldElement;
  private y: FieldElement;
  private a: FieldElement;
  private b: FieldElement;
  constructor(x: FieldElement | null, y: FieldElement | null, a: FieldElement, b: FieldElement) {
    this.x = x;
    this.y = y;
    this.a = a;
    this.b = b;
    if (x === null && y === null) {
      return;
    }

    if (!y.pow(2).eq(x.pow(3).add(a.mul(x)).add(b))) {
      throw 'invalid point';
    }
  }

  infinity(): EccPoint {
    return new EccPoint(null, null, this.a, this.b);
  }

  eq(other: EccPoint): boolean {
    return this.x === other.x && this.y === other.y && this.a === other.a && this.b === other.b;
  }

  toString() {
    if (null === this.x) {
      return 'Point(infinity)';
    }
    return `Point_${this.y}^2=${this.x}^3+${this.a}*${this.x}+${this.b}`;
  }

  ne() {
    return new EccPoint(this.x, this.y.ne(), this.a, this.b);
  }

  add(other: EccPoint) {
    if (this.a !== other.a || this.b !== other.b) {
      throw 'not on the same curve';
    }
    if (null === this.x) {
      return other;
    }
    if (null === other.x) {
      return this;
    }
    if (this.x === other.x && this.y.eq(other.y.ne())) {
      return this.infinity();
    }

    if (this.x !== other.x) {
      const s = other.y.sub(this.y).div(other.x.sub(this.x));
      const x3 = s.pow(2).sub(this.x).sub(other.x);
      const y3 = s.mul(this.x.sub(x3)).sub(this.y);
      return new EccPoint(x3, y3, this.a, this.b);
    }

    if (this.eq(other)) {
      if (this.y.eq(this.y.zero())) {
        return this.infinity();
      }
      const s = this.x.n(3).mul(this.x.pow(2)).add(this.a).div(this.y.n(2).mul(this.y));
      const x3 = s.pow(2).sub(this.x.n(2).mul(this.x));
      const y3 = s.mul(this.x.sub(x3)).sub(this.y);
      return new EccPoint(x3, y3, this.a, this.b);
    }

    throw 'NotImplemented';
  }

  mul(G: number):EccPoint {
    let result:EccPoint = this
    for(let i=0; i<G-1; i++) {
      result = result.add(this)
    }
    return result
  }
}
