import { FuncionModule } from './funcion.module';

describe('FuncionModule', () => {
  let funcionModule: FuncionModule;

  beforeEach(() => {
    funcionModule = new FuncionModule();
  });

  it('should create an instance', () => {
    expect(funcionModule).toBeTruthy();
  });
});
