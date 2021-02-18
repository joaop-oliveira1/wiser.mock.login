import { AxiosDatasource } from '../../datasource/axios.datasource';

describe('Testing axios datasource class', () => {
  let datasource: AxiosDatasource;
  beforeEach(() => {
    datasource = AxiosDatasource.instance();
  });
  describe('Testing definition', () => {
    it('should be defined', () => {
      expect(AxiosDatasource).toBeDefined();
      expect(datasource).toBeDefined();
    });
    it('should have all properties defined', () => {
      expect(datasource.post).toBeDefined();
    });
  });
  describe('Testing implementation', () => {
    it('should make a post request through post method', async () => {
      const spy = jest.spyOn(datasource.axios, 'post').mockResolvedValue(Promise.resolve('resolved'));
      const response = await datasource.post('/auth', { hello: 'world' }, { params: { foo: 'bar' } });
      expect(response).toBe('resolved');
      expect(spy).toHaveBeenCalledWith('/auth', { hello: 'world' }, { params: { foo: 'bar' } });
    });
  });
});
