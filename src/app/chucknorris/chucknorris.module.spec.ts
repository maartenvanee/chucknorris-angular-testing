import { ChucknorrisModule } from './chucknorris.module';

describe('ChucknorrisModule', () => {
    let chucknorrisModule: ChucknorrisModule;

    beforeEach(() => {
        chucknorrisModule = new ChucknorrisModule();
    });

    it('should create an instance', () => {
        expect(chucknorrisModule).toBeTruthy();
    });
});
