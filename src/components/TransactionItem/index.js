import './index.css'

const TransactionItem = props => {
  const {sendanother, sendinId} = props
  const {names, amoun, idMy} = sendanother
  let {Typ} = sendanother
  if (Typ === 'INCOME') {
    Typ = 'Income'
  } else {
    Typ = 'Expenses'
  }
  const callingDel = () => {
    sendinId(idMy, amoun)
  }
  return (
    <li className="box-li-li-conts">
      <p className="para">{names}</p>
      <p className="para">Rs {amoun}</p>
      <p className="para">{Typ}</p>
      <button data-testid="delete" onClick={callingDel} type="submit">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="ims"
        />
      </button>
    </li>
  )
}

export default TransactionItem
