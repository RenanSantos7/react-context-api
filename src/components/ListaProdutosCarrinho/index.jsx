import React from "react";
import ItemCarrinhoSuspenso from "@/components/CarrinhoSuspenso/ItemCarrinhoSuspenso";
import ItemCarrinho from "@/components/ItemCarrinho";
import { useLocation } from "react-router-dom";

export default function ListaProdutosCarrinho({ carrinho }) {
  
  const location = useLocation();
  
  return (
    <ul className="list-unstyled">
      {carrinho.length === 0
        ? (<p className="text-center my-5">Não há produtos no carrinho</p>)
        : (carrinho.map(itemCarrinho => location.pathname === "/carrinho"
          ? (<ItemCarrinho key={itemCarrinho.id} itemCarrinho={itemCarrinho} />)
          : (<ItemCarrinhoSuspenso key={itemCarrinho.id} itemCarrinho={itemCarrinho} />)
        ))
      }
    </ul>
  );
};
