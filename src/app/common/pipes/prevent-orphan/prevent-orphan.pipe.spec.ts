import { MaPreventOrphanPipe } from './prevent-orphan.pipe';

describe('PreventOrphanPipe', () => {
  it('create an instance', () => {
    const pipe = new MaPreventOrphanPipe();
    expect(pipe).toBeTruthy();
  });
});
