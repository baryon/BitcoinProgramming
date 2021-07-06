import {Point} from '../src/Point'

describe('Point', () => {
  test('Point construct', () => {
    const p1=new Point(-1,-1,5,7)
    expect(p1.toString()).toBe('Point_-1^2=-1^3+5*-1+7');
  });

  test('Point construct exception', () => {
    expect(() => {
      const p1=new Point(-1,-2,5,7)
      console.log(p1);
      expect(true).not.toBe(true)
    }).toThrowError(/invalid point/);
    
  });

  test('ne ', () => {
    const p1=new Point(-1,-1,5,7)
    const p1n = p1.ne()
    expect(p1n.toString()).toBe('Point_1^2=-1^3+5*-1+7');
  });

  test('NaN', () => {
    const p1=new Point(NaN,NaN,5,7)
    expect(p1.toString()).toBe('Point(infinity)');
  });

  test('add p + NaN', () => {
    const p1=new Point(-1,-1,5,7)
    const p2=new Point(NaN,NaN,5,7)

    expect(p1.add(p2)).toBe(p1);
  });

  test('add NaN + p', () => {
    const p1=new Point(-1,-1,5,7)
    const p2=new Point(NaN,NaN,5,7)

    expect(p2.add(p1)).toBe(p1);
  });

  test('add NaN + p', () => {
    const p1=new Point(-1,-1,5,7)
    const p2=new Point(-1,1,5,7)

    expect(p2.add(p1)).toStrictEqual(new Point(NaN,NaN,5,7));
  });

  test('add p1 + p2', () => {
    const p1=new Point(3,7,5,7)
    const p2=new Point(-1,-1,5,7)

    expect(p2.add(p1)).toStrictEqual(new Point(2,-5,5,7));
    expect(p1.add(p2)).toStrictEqual(new Point(2,-5,5,7));
  });


  test('add p1 + p1', () => {
    const p1=new Point(-1,-1,5,7)
    const p2=new Point(-1,-1,5,7)

    expect(p1.add(p2)).toStrictEqual(new Point(18,77,5,7));
  });

})