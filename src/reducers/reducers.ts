import orcamento from "../interfaces/interfaces";
import actionTypes from "../actions/actionTypes/actionTypes";
import businessRules from "../businessRules/businessRules";

const initialState: orcamento = {
  notas: [],
  formaDePagamento: {
    tipo: "AV"
  },
  cliente: {
    nome: "ANÔNIMO"
  },
  vendedor: {},
  entrega: {
    tipo: "LOJA/CLIENTE"
  },
  valorTotal: 0.0
};

const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.ADICIONA_NOTA: {
      return {
        ...state,
        notas: businessRules.nota.addNota(state, action)
      };
    }
    case actionTypes.REMOVE_NOTA: {
      return {
        ...state,
        notas: state.notas.splice(action.numeroDaNota, 1)
      };
    }
    case actionTypes.ADICIONA_ITEM: {
      const newNotas = [...state.notas];
      newNotas[action.numeroDaNota].items.push(action.item);
      return {
        ...state,
        notas: newNotas
      };
    }
    default:
      return state;
  }
};

export default reducer;
