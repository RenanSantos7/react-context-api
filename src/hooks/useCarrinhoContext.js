import { useContext } from 'react'
import { CarrinhoContext } from '@/context/CarrinhoContext'

export function useCarrinhoContext() {
	const { carrinho, setCarrinho } = useContext(CarrinhoContext)

	function mudarQuantidade(id, qtd) {
		return carrinho.map(itemDoCarrinho => {
			if (itemDoCarrinho.id === id) itemDoCarrinho.quantidade += qtd
			return itemDoCarrinho
		})
	}

	function adicionarProduto(novoProduto) {
		const temOProduto = carrinho.some(itemDoCarrinho => {
			return itemDoCarrinho.id === novoProduto.id
		})

		if (!temOProduto) {
			novoProduto.quantidade = 1
			return setCarrinho(carrinhoAnterior => [...carrinhoAnterior, novoProduto])
		}

		const carrinhoMod = mudarQuantidade(novoProduto, 1)

		setCarrinho([...carrinhoMod])
	}

	function removerProduto(id) {
        let carrinhoMod = [...carrinho]
        let produto = carrinho.find(item => item.id === id)

		if (produto.quantidade > 1) {
			carrinhoMod = mudarQuantidade(id, -1)
		} else {
			carrinhoMod = carrinhoMod.filter(item => item.id !== produto.id)
		}

		setCarrinho(carrinhoMod)
	}

	return {
		carrinho,
		setCarrinho,
		adicionarProduto,
		removerProduto,
	}
}
