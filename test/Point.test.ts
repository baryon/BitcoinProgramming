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
})