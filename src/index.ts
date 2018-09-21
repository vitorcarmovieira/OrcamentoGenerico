import { createStore } from "redux";

interface item {
  descricao: string;
  valor: number;
}

interface nota {
  items: item[];
}

interface formaDePagamento {
  tipo: string;
}

interface cliente {
  nome: string;
}

interface vendedor {}

interface entrega {
  tipo: string;
}

interface orcamento {
  notas: nota[];
  formaDePagamento: formaDePagamento;
  cliente: cliente;
  vendedor: vendedor;
  entrega: entrega;
  valorTotal: number;
}

const actionTypes = {
  ADICIONA_NOTA: "ADICIONA_NOTA",
  REMOVE_NOTA: "REMOVE_NOTA",
  ADICIONA_ITEM: "ADICIONA_ITEM",
  REMOVE_ITEM: "REMOVE_ITEM"
};

const actionNotas = {
  addNota(items = undefined) {
    return {
      type: actionTypes.ADICIONA_NOTA,
      items
    };
  },
  removeNota(numeroDaNota) {
    return {
      type: actionTypes.REMOVE_NOTA,
      numeroDaNota
    };
  }
};

const actionItems = {
  addItem(item, numeroDaNota) {
    return {
      type: actionTypes.ADICIONA_ITEM,
      item,
      numeroDaNota
    };
  },
  removeItem(numeroDoItem, numeroDaNota) {
    return {
      type: actionTypes.REMOVE_ITEM,
      numeroDoItem,
      numeroDaNota
    };
  }
};

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
  }
};

const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.ADICIONA_NOTA: {
      return {
        ...state,
        notas: [...state.notas, action.items ? action.items : { items: [] }]
      };
    }
    case actionTypes.REMOVE_NOTA: {
      return {
        ...state,
        notas: state.notas.splice(action.numeroDaNota, 1)
      };
    }
    default:
      return state;
  }
};

const store = createStore(reducer);

store.dispatch(actionNotas.addNota());
store.dispatch(actionNotas.addNota({ items: [{ descricao: "teste" }] }));
store.dispatch(actionNotas.addNota());
store.dispatch(actionNotas.removeNota());
console.log(store.getState());
