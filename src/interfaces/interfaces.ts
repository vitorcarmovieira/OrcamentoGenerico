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

export default orcamento;
