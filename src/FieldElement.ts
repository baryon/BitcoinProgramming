// ref: https://github.com/jimmysong/programmingbitcoin/tree/master/code-ch01
export class FieldElement {
  private num: number;
  private prime: number;
  constructor(num: number, prime: number) {
    this.num = num;
    this.prime = prime;
  }

  zero():FieldElement {
    return new FieldElement(0, this.prime)
  }

  toString() {
    return `FieldElement_${this.prime}(${this.num})`
  }

  eq(other: FieldElement):boolean {
    return this.num === other.num && this.prime === other.prime
  }

  static mod(a:number, b:number) {
    return ((a%b)+b)%b
  }

  add(other: FieldElement):FieldElement {
    if(this.prime!==other.prime) throw 'prime is not equal'
    return new FieldElement(FieldElement.mod((this.num+other.num), this.prime), this.prime)
  }

  ne():FieldElement {
    return new FieldElement(FieldElement.mod(-this.num, this.prime), this.prime)
  }
  
  sub(other: FieldElement):FieldElement {
    if(this.prime!==other.prime) throw 'prime is not equal'
    return new FieldElement(FieldElement.mod((this.num-other.num), this.prime), this.prime)
  }

  mul(other: FieldElement):FieldElement {
    if(this.prime!==other.prime) throw 'prime is not equal'
    let result:FieldElement = this
    for(let i=0; i<other.num-1; i++) {
      result = result.add(this)
    }
    return result
  }

  pow(other: FieldElement):FieldElement {
    if(this.prime!==other.prime) throw 'prime is not equal'
    let result:FieldElement = this
    for(let i=0; i<other.num-1; i++) {
      result = result.mul(this)
    }
    return result
  }

  div(other: FieldElement):FieldElement {
    if(this.prime!==other.prime) throw 'prime is not equal'
    //费马小定理
    return this.mul(other.pow(new FieldElement(this.prime-2, this.prime)))
  }

}
