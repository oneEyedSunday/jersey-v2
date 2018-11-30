import { JerseyModule } from './jersey.module';

describe('JerseyModule', () => {
  let jerseyModule: JerseyModule;

  beforeEach(() => {
    jerseyModule = new JerseyModule();
  });

  it('should create an instance', () => {
    expect(jerseyModule).toBeTruthy();
  });
});
