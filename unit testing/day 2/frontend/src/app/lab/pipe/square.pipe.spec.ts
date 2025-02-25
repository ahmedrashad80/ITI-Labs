import { SquarePipeForLab } from './square.pipe';

describe('1-square pipe (class only) testing:', () => {
  let pipe: SquarePipeForLab;

  beforeEach(() => {
    pipe = new SquarePipeForLab();
  });

  it('should return 16 when passing 4', () => {
    expect(pipe.transform(4)).toBe(16);
  });

  it("should return 9 when passing '3'", () => {
    expect(pipe.transform('3')).toBe(9);
  });

  it("should return 'not a number' when passing wrong parameter", () => {
    expect(pipe.transform('any string')).toBe('not a number');
  });

});