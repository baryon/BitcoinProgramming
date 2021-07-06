import {FieldElement} from '../src/FieldElement'

describe('FieldElement', () => {
  test('FieldElement_13(3)', () => {
    const f13=new FieldElement(3,13)
    expect(f13.toString()).toBe('FieldElement_13(3)');
  });
  test('F13(3) to equal F13(3)', () => {
    const f13=new FieldElement(3,13)

    expect(f13.eq(new FieldElement(3,13))).toBe(true);
  });

  test('F13(3) to notequal F13(4)', () => {
    const f13=new FieldElement(3,13)

    expect(f13.eq(new FieldElement(4,13))).not.toBe(true);
  });

  test('mod 7%3', () => {
    // expect(7%3).toBe(1);
    expect(FieldElement.mod(7,3)).toBe(1)
  });

  test('mod -27%13', () => {
    //expect(-27%13).toBe(12);
    expect(FieldElement.mod(-27,13)).toBe(12)
  });

  test('add 7+8=15', () => {
    const f19_7 = new FieldElement(7,19)
    const f19_8 = new FieldElement(8,19)
    const result = f19_7.add(f19_8)
    expect(result.eq(new FieldElement(15,19))).toBe(true);
  });

  test('add 11+17=9', () => {
    const f19_11 = new FieldElement(11,19)
    const f19_17 = new FieldElement(17,19)
    const result = f19_11.add(f19_17)
    expect(result.eq(new FieldElement(9,19))).toBe(true);
  });

  test('ne -9=10', () => {
    const f19_9 = new FieldElement(9,19)
    const result = f19_9.ne()
    expect(result.eq(new FieldElement(10,19))).toBe(true);
  });

  test('sub 11-9=2', () => {
    const f19_11 = new FieldElement(11,19)
    const f19_9 = new FieldElement(9,19)
    const result = f19_11.sub(f19_9)
    expect(result.eq(new FieldElement(2,19))).toBe(true);
  });

  test('sub 6-13=12', () => {
    const f19_6 = new FieldElement(6,19)
    const f19_13 = new FieldElement(13,19)
    const result = f19_6.sub(f19_13)
    expect(result.eq(new FieldElement(12,19))).toBe(true);
  });

  test('mul 5*3=15', () => {
    const f19_5 = new FieldElement(5,19)
    const f19_3 = new FieldElement(3,19)
    const result = f19_5.mul(f19_3)
    expect(result.eq(new FieldElement(15,19))).toBe(true);
  });

  test('mul 8*17=3', () => {
    const f19_8 = new FieldElement(8,19)
    const f19_17 = new FieldElement(17,19)
    const result = f19_8.mul(f19_17)
    expect(result.eq(new FieldElement(3,19))).toBe(true);
  });

  test('pow 7**3=1', () => {
    const f19_7 = new FieldElement(7,19)
    const f19_3 = new FieldElement(3,19)
    const result = f19_7.pow(f19_3)
    expect(result.eq(new FieldElement(1,19))).toBe(true);
  });

  test('pow 9**12=7', () => {
    const f19_9 = new FieldElement(9,19)
    const f19_12 = new FieldElement(12,19)
    const result = f19_9.pow(f19_12)
    expect(result.eq(new FieldElement(7,19))).toBe(true);
  });

  // test('ex 1,3,7,13,18', () => {
  //   const kList=[1,3,7,13,18]
  //   for(const k of kList) {
  //     const f19_k = new FieldElement(k,19)
  //     console.log(f19_k)
  //     for(let i=0; i<=18; i++) {
  //       const f19_i = new FieldElement(i,19)
  //       const result = f19_k.mul(f19_i)
  //       console.log(result)
  //     }
  //   }
  //   // expect(result.eq(new FieldElement(7,19))).toBe(true);
  // });

  test('div 2/7=3', () => {
    const f19_2 = new FieldElement(2,19)
    const f19_7 = new FieldElement(7,19)
    const result = f19_2.div(f19_7)
    console.log(result)
    expect(result.eq(new FieldElement(3,19))).toBe(true);
  });

  test('div 7/5=8', () => {
    const f19_7 = new FieldElement(7,19)
    const f19_5 = new FieldElement(5,19)
    const result = f19_7.div(f19_5)
    console.log(result)
    expect(result).toStrictEqual(new FieldElement(9,19));
  });

  // test('pow 7**-3=8', () => {
  //   const f19_7 = new FieldElement(7,19)
  //   const f19_n3 = (new FieldElement(3,19)).ne()
  //   const result = f19_7.pow(f19_n3)
  //   console.log(result)
  //   expect(result.eq(new FieldElement(8,19))).toBe(true);
  // });

})