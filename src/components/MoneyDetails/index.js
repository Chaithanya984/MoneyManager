import './index.css'

const MoneyDetails = props => {
  const {sendListof, sendAmo, sendTyp, sendBal} = props
  const {imgUrl, name, classnsame, boxName, datatest} = sendListof
  const myVal = () => {
    if (name === 'balance') {
      return (
        <p data-testid={datatest} className="Rs">
          Rs {sendBal}
        </p>
      )
    }
    if (name === 'income') {
      return (
        <p data-testid={datatest} className="Rs">
          Rs {sendAmo}
        </p>
      )
    }
    return (
      <p data-testid={datatest} className="Rs">
        Rs {sendTyp}
      </p>
    )
  }
  return (
    <li className={classnsame}>
      <img src={imgUrl} alt={name} className="img1" />

      <div className="vf">
        <p className="yourb">Your {boxName}</p>
        {myVal()}
      </div>
    </li>
  )
}

export default MoneyDetails
