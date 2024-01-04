import { useContext } from "react";
import { CarrinhoContext } from '@/context/CarrinhoContext'

export function useCarrinhoContext() {
    const { carrinho, setCarrinho } = useContext(CarrinhoContext)
    
    function adicionarProduto(novoProduto) {
      const existeProduto = carrinho.some(
        item => item.id === novoProduto.id
      )
  
      if (!existeProduto) {
        novoProduto.quantidade = 1
        return setCarrinho(carrinhoAnterior => [...carrinhoAnterior, novoProduto])
      }
  
      setCarrinho(
        carrinhoAnterior => carrinhoAnterior.map(
          item => {
            if (item.id === novoProduto.id) {
              item.quantidade += 1
            }
          }
        )
      )
    }
  
    function removerProduto(id) {
      const carrinhoMod = [...carrinho]
      const indProduto = carrinhoMod.findIndex(item => item.id === id)
      const produto = carrinhoMod[indProduto]
  
      if (produto.quantidade > 1) {
        produto.quantidade-- 
      } else {
        carrinhoMod = carrinhoMod.filter(item => item.id !== produto.id)
      }
      
      setCarrinho(carrinhoMod)
    }

    return {
        carrinho,
        setCarrinho,
        adicionarProduto,
        removerProduto
    }
}