import { EccPoint } from '../src/EccPoint'
import { FieldElement } from '../src/FieldElement'

describe('EccPoint', () => {
  test('EccPoint construct', () => {
    const prime = 223
    const a=new FieldElement(0,prime)
    const b=new FieldElement(7,prime)
    const x1=new FieldElement(192,prime)
    const y1=new FieldElement(105,prime)
    const x2=new FieldElement(17,prime)
    const y2=new FieldElement(56,prime)
    const p1 = new EccPoint(x1, y1, a, b)
    const p2 = new EccPoint(x2, y2, a, b)
    const p3 = p1.add(p2)
    console.log(p3, p3.toString())
    expect(p3.toString()).toBe('Point_FieldElement_223(142)^2=FieldElement_223(170)^3+FieldElement_223(0)*FieldElement_223(170)+FieldElement_223(7)');
  });

  test('EccPoint mul g', () => {
    const prime = 223
    const a=new FieldElement(0,prime)
    const b=new FieldElement(7,prime)
    const x1=new FieldElement(192,prime)
    const y1=new FieldElement(105,prime)
    const x2=new FieldElement(142,prime)
    const y2=new FieldElement(98,prime)
    const x3=new FieldElement(47,prime)
    const y3=new FieldElement(71,prime)
    const p1 = new EccPoint(x1, y1, a, b)
    // const p2 = new EccPoint(x2, y2, a, b)
    const p3 = new EccPoint(x3, y3, a, b)
    console.log(p1, p1.toString())
    // console.log(p2, p2.toString())
    console.log(p3, p3.toString())
    console.log(p1.mul(2))
    // console.log(p2.mul(2))
    console.log(p3.mul(2))
    console.log(p3.mul(4))
    console.log(p3.mul(8))
    console.log(p3.mul(20))
    // expect(p3.toString()).toBe('Point_FieldElement_223(142)^2=FieldElement_223(170)^3+FieldElement_223(0)*FieldElement_223(170)+FieldElement_223(7)');
  });

  // test('Point construct exception', () => {
  //   expect(() => {
  //     const p1=new Point(-1,-2,5,7)
  //     console.log(p1);
  //     expect(true).not.toBe(true)
  //   }).toThrowError(/invalid point/);
    
  // });

  // test('ne ', () => {
  //   const p1=new Point(-1,-1,5,7)
  //   const p1n = p1.ne()
  //   expect(p1n.toString()).toBe('Point_1^2=-1^3+5*-1+7');
  // });

  // test('NaN', () => {
  //   const p1=new Point(NaN,NaN,5,7)
  //   expect(p1.toString()).toBe('Point(infinity)');
  // });

  // test('add p + NaN', () => {
  //   const p1=new Point(-1,-1,5,7)
  //   const p2=new Point(NaN,NaN,5,7)

  //   expect(p1.add(p2)).toBe(p1);
  // });

  // test('add NaN + p', () => {
  //   const p1=new Point(-1,-1,5,7)
  //   const p2=new Point(NaN,NaN,5,7)

  //   expect(p2.add(p1)).toBe(p1);
  // });

  // test('add NaN + p', () => {
  //   const p1=new Point(-1,-1,5,7)
  //   const p2=new Point(-1,1,5,7)

  //   expect(p2.add(p1)).toStrictEqual(new Point(NaN,NaN,5,7));
  // });

  // test('add p1 + p2', () => {
  //   const p1=new Point(3,7,5,7)
  //   const p2=new Point(-1,-1,5,7)

  //   expect(p2.add(p1)).toStrictEqual(new Point(2,-5,5,7));
  //   expect(p1.add(p2)).toStrictEqual(new Point(2,-5,5,7));
  // });


  // test('add p1 + p1', () => {
  //   const p1=new Point(-1,-1,5,7)
  //   const p2=new Point(-1,-1,5,7)

  //   expect(p1.add(p2)).toStrictEqual(new Point(18,77,5,7));
  // });

})