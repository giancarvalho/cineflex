function alertIncompleteData(incompleteFields) {
  let seats = "";

  incompleteFields.forEach((buyer) => {
    seats += ` ${buyer.idAssento} `;
  });

  alert(
    `Por favor, verifique os campos do(s) seguintes assento(s): ${seats}. Confira se digitou um nome e um CPF válido para cada assento.`
  );
}

//verifies if the conditions are met to make the reservation
export default function isReadytoReserve(orderInfo) {
  const incompleteFields = orderInfo.compradores.filter(
    (comprador) => comprador.nome.length === 0 || comprador.cpf.length !== 11
  );

  if (orderInfo.ids.length === 0) {
    alert("Por favor, escolha um assento.");
    return false;
  }

  if (incompleteFields.length === 0) {
    return true;
  }

  alertIncompleteData(incompleteFields);
  return false;
}
