export default function BuyerInput({ buyer, orderInfo, setOrderInfo }) {
  function changeBuyer(e, key) {
    const buyerClone = { ...buyer };

    buyerClone[key] = e.target.value;

    updateBuyerObject(buyerClone);
  }

  function updateOrderList(updatedList) {
    setOrderInfo(() => ({
      ...orderInfo,
      compradores: [...updatedList],
    }));
  }

  function updateBuyerObject(buyerClone) {
    let updatedList = orderInfo.compradores.map((customer) => {
      if (customer.idAssento === buyerClone.idAssento) {
        return { ...buyerClone };
      } else {
        return customer;
      }
    });

    updateOrderList(updatedList);
  }

  return (
    <div className="buyer-details">
      <div className="name">
        <label>Nome do cliente (assento {buyer.idAssento})</label>
        <input
          type="text"
          placeholder="Digite seu nome..."
          value={buyer.nome}
          onChange={(e) => {
            changeBuyer(e, "nome");
          }}
        />
      </div>
      <div className="cpf">
        <label>CPF do comprador: </label>
        <input
          type="number"
          placeholder="Digite seu CPF..."
          value={buyer.cpf}
          onChange={(e) => {
            changeBuyer(e, "cpf");
          }}
        />
      </div>
    </div>
  );
}
