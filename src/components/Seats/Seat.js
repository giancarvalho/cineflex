import { useState } from "react";

export default function Seat({ seat, orderInfo, setOrderInfo }) {
  const [seatSelected, setSeatSelected] = useState(null);

  function selectSeat(id) {
    if (!seatSelected) {
      setOrderInfo((orderInfo) => ({
        ids: [...orderInfo.ids, id],
        compradores: [
          ...orderInfo.compradores,
          { idAssento: id, nome: "", cpf: "" },
        ],
      }));
      setSeatSelected("selected");
    } else {
      removeSelected(id);
    }
  }

  function removeSelected(id) {
    const objToBeRemoved = orderInfo["compradores"].find(
      (customer) => customer.idAssento === id
    );

    if (objToBeRemoved.nome.length > 0 || objToBeRemoved.cpf.length > 0) {
      if (
        window.confirm(
          `Você excluirá o assento ${id} do seu pedido e perderá os dados preenchidos. Pressione OK para continuar.`
        )
      ) {
        proceedRemoval(id);
      } else {
        return;
      }
    }
    proceedRemoval(id);
  }

  function proceedRemoval(id) {
    setOrderInfo(() => ({
      compradores: [
        ...orderInfo["compradores"].filter(
          (customer) => customer.idAssento !== id
        ),
      ],
      ids: [...orderInfo["ids"].filter((seatId) => seatId !== id)],
    }));
    setSeatSelected(null);
  }
  function seatUnavailable() {
    alert("Assento não disponível");
  }

  return (
    <div
      className={seat.isAvailable ? `seat ${seatSelected}` : "seat occupied"}
      onClick={() => {
        seat.isAvailable ? selectSeat(seat.id) : seatUnavailable();
      }}
    >
      {seat.id}
    </div>
  );
}
