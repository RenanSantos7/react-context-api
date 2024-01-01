import { createContext } from "react"

export const CarrinhoContext = createContext()

export function CarrinhoProvider({children}) {
    return (
        <CarrinhoContext.Provider>
            {children}
        </CarrinhoContext.Provider>
    )
}
