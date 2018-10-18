import { TeatroModule } from './teatro.module';

describe('TeatroModule', () => {
  let teatroModule: TeatroModule;

  beforeEach(() => {
    teatroModule = new TeatroModule();
  });

  it('should create an instance', () => {
    expect(teatroModule).toBeTruthy();
  });
});
