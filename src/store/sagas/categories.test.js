import { call } from 'redux-saga/effects';
import { observarCategorias } from './categorias';
import categoriasService from 'services/categorias';

describe('Tests to categories saga', () => {
    describe('workers', () => {
        test('execute categoriasService.buscar', () => {
            const generatorFunction = observarCategorias();
            const expectFunction = call(categoriasService.buscar);

            generatorFunction.next(); //delay

            const executedFunction = generatorFunction.next();

            expect(executedFunction.value).toEqual(expectFunction);
        });
    });
});