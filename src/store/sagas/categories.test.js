import { call, cancel, take } from 'redux-saga/effects';
import { categoriasSaga, observarCategorias } from './categorias';
import categoriasService from 'services/categorias';
import { adicionarTodasAsCategorias } from 'store/reducers/categorias';
import { createMockTask } from '@redux-saga/testing-utils';

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

    describe('watchers', () => {
        test('execute correctly the task', () => {
            const generatorFunction = categoriasSaga();
            generatorFunction.next();
            const expectFunction = take(adicionarTodasAsCategorias);

            expect(generatorFunction.next().value).toEqual(expectFunction);
        });

        test('execute the task only once', () => {
            const generatorFunction = categoriasSaga();
            const task = createMockTask();
            generatorFunction.next(task);
            const cancelExpectedFunction = cancel(task.cancel());
            generatorFunction.next();

            expect(generatorFunction.next().value).toEqual(cancelExpectedFunction);
        });
    });
});