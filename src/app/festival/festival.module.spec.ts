import { FestivalModule } from './festival.module';

describe('FestivalModule', () => {
  let festivalModule: FestivalModule;

  beforeEach(() => {
    festivalModule = new FestivalModule();
  });

  it('should create an instance', () => {
    expect(festivalModule).toBeTruthy();
  });
});
