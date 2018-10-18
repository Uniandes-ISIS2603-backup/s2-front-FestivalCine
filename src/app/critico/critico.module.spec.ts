import { CriticoModule } from './critico.module';

describe('CriticoModule', () => {
  let criticoModule: CriticoModule;

  beforeEach(() => {
    criticoModule = new CriticoModule();
  });

  it('should create an instance', () => {
    expect(criticoModule).toBeTruthy();
  });
});
