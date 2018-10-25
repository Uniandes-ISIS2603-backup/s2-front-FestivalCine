import { PeliculaModule } from './pelicula.module';

describe('PeliculaModule', () => {
  let peliculaModule: PeliculaModule;

  beforeEach(() => {
    peliculaModule = new PeliculaModule();
  });

  it('should create an instance', () => {
    expect(peliculaModule).toBeTruthy();
  });
});
