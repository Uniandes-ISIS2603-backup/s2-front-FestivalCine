import { BandaAnuncioModule } from './bandaanuncio.module';

describe('BandaAnuncioModule', () => {
  let bandaanuncioModule: BandaAnuncioModule;

  beforeEach(() => {
    bandaanuncioModule = new BandaAnuncioModule();
  });

  it('should create an instance', () => {
    expect(bandaanuncioModule).toBeTruthy();
  });
});
