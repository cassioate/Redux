import produce from 'immer'

export default function cart (state = [], action) {
    switch (action.type){
        case '@cart/ADD_TO_CART_SUCESS':
            return produce(state, draft =>{
                const { product } = action
                draft.push(product)
            }) 

        case '@cart/REMOVE_FROM_CART':
            return produce(state, draft =>{
                // Action é igual ao produto que vai ser recebido
                const productIndex = draft.findIndex(p => p.id === action.id)

                if (productIndex >= 0){
                   draft.splice(productIndex, 1)
                } 
            })

        case '@cart/UPDATE_AMOUNT':
            return produce(state, draft =>{

                // Action é igual ao produto que vai ser recebido
                if(action.amount <= 0){
                    return state
                }

                // Action é igual ao produto que vai ser recebido
                const productIndex = draft.findIndex(p => p.id === action.id)
    
                if (productIndex >= 0){
                // Action é igual ao produto que vai ser recebido, no caso é nele que vai ser modficiado o amount
                    draft[productIndex].amount = Number(action.amount)
                } 
            })

        default:
            return state;
    }
}