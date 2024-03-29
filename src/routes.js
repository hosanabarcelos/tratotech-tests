import PaginaPadrao from 'components/PaginaPadrao';
import Anuncie from 'pages/Anuncie';
import Carrinho from 'pages/Carrinho';
import Categoria from 'pages/Categoria';
import Home from 'pages/Home';
import Pagamento from 'pages/Pagamento';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const advertiseRoute = 'anuncie';
export const categoryRoute = 'categoria'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PaginaPadrao />}>
          <Route index element={<Home />} />
          <Route path={`/${categoryRoute}/:nomeCategoria`} element={<Categoria />} />
          <Route path='carrinho' element={<Carrinho />} />
          <Route path='anuncie/:nomeCategoria' element={<Anuncie />} />
          <Route path={advertiseRoute} element={<Anuncie />} />
          <Route path='pagamento' element={<Pagamento />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}