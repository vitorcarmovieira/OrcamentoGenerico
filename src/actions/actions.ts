import actionTypes from "./actionTypes/actionTypes";

const actionNotas = {
  addNota(nota = undefined) {
    return {
      type: actionTypes.ADICIONA_NOTA,
      nota
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

export default {
  notas: actionNotas,
  items: actionItems
};
