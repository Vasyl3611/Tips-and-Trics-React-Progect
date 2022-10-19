import { fetchify } from '../fetchify';

describe('fetchify', () => {
    it('should test if loading is in progress', () => {
        expect(fetchify(false, null)).toEqual('Загрузка...');
    });
    it('should test if loading is not in progress', () => {
        expect(fetchify(true, 'строка')).toEqual('строка');
    });
});
