import reducerSearch, { mudarBusca, resetarBusca } from './busca'

describe('Tests to search reducer', () => {
    test('search change', () => {
    expect(reducerSearch('', mudarBusca('test'))).toEqual('test');
    });

    test('seacrh reset', () => {
        expect(reducerSearch('new value', resetarBusca())).toEqual('');
    });
});