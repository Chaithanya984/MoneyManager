import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

const listofmanager = [
  {
    id: 1,
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png',
    name: 'balance',
    boxName: 'Balance',
    classnsame: 'li-container0',
    datatest: 'balanceAmount',
  },
  {
    id: 2,
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png ',
    name: 'income',
    boxName: 'Income',
    classnsame: 'li-container1',
    datatest: 'incomeAmount',
  },
  {
    id: 3,
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png',
    name: 'expenses',
    boxName: 'Expenses',
    classnsame: 'li-container2',
    datatest: 'expensesAmount',
  },
]

const mylist = []
class MoneyManager extends Component {
  state = {
    Title: '',
    Amount: '',
    Type: 'INCOME',
    oldList: mylist,
    balancese: 0,
    incomese: 0,
    expensive: 0,
  }

  iAm = (idMy, amoun) => {
    const {oldList, expensive} = this.state
    const news = oldList.filter(each => each.idMy !== idMy)

    console.log(news)
    if (expensive === 0) {
      this.setState(prevState => ({
        balancese: prevState.balancese - amoun,
        incomese: prevState.balancese - amoun,
        oldList: news,
      }))
    } else {
      this.setState(prevState => ({
        balancese: prevState.balancese + amoun,
        expensive: prevState.expensive - amoun,
        oldList: news,
      }))
    }

    console.log('hi')
  }

  callAndSubmit = event => {
    event.preventDefault()
    const {Title, Type, oldList, expensive} = this.state
    let {Amount} = this.state
    Amount = parseInt(Amount)

    const newon = {
      idMy: uuidv4(),
      names: Title,
      amoun: Amount,
      Typ: Type,
    }

    const useme = [...oldList, newon]
    console.log(useme)
    this.setState({
      oldList: useme,
      Title: '',
      Amount: '',
    })

    if (Type === 'INCOME') {
      this.setState(prevState => ({
        balancese: prevState.balancese + Amount,
        incomese: prevState.balancese + Amount,
      }))
      console.log(Amount + 1)
    }
    if (Type === 'EXPENSES') {
      this.setState(prevState => {
        if (prevState.balancese >= expensive) {
          if (prevState.expensive !== 0) {
            console.log(prevState.expensive)
            console.log(Amount)
            console.log(prevState.expensive + Amount)
            console.log('hi')
          }
          console.log('bal is high')
          return {
            balancese: prevState.balancese - Amount,
            expensive: prevState.expensive + Amount,
          }
        }

        const sub = prevState.balancese - Amount
        console.log('bal is low')
        return {balancese: sub, expensive: prevState.expensive + Amount}
      })
    }
  }

  callTitle = event => {
    this.setState({Title: event.target.value})
  }

  callAmount = event => {
    this.setState({Amount: event.target.value})
  }

  callIncome = event => {
    this.setState({Type: event.target.value})
  }

  render() {
    const {oldList, balancese, Title, Amount, incomese, expensive} = this.state

    return (
      <div className="bg-container">
        <div className="box-container">
          <h1 className="hi">Hi, Richard</h1>
          <p className="welcome">
            Welcome back to your <span className="spa">Money Manager</span>
          </p>
        </div>
        <ul className="ul-container">
          {listofmanager.map(each => (
            <MoneyDetails
              sendListof={each}
              sendBal={balancese}
              sendAmo={incomese}
              sendTyp={expensive}
              key={each.id}
            />
          ))}
        </ul>
        <div className="main-container">
          <div className="sub-container">
            <h1 className="add">Add Transaction</h1>
            <form className="form-container" onSubmit={this.callAndSubmit}>
              <label className="myLa" htmlFor="TITLES">
                Title
              </label>
              <br />
              <input
                id="TITLES"
                value={Title}
                placeholder="TITLE"
                onChange={this.callTitle}
              />
              <br />

              <label className="myLa" htmlFor="AMOUNTS">
                AMOUNT
              </label>
              <br />
              <input
                id="AMOUNTS"
                value={Amount}
                placeholder="AMOUNT"
                onChange={this.callAmount}
              />
              <br />
              <label className="myLa" htmlFor="INCOMES">
                INCOME
              </label>
              <br />
              <select id="INCOMES" onChange={this.callIncome}>
                {transactionTypeOptions.map(each => (
                  <option key={each.optionId} value={each.optionId}>
                    {each.displayText}
                  </option>
                ))}
              </select>

              <br />
              <button className="buton" type="submit">
                ADD
              </button>
            </form>
          </div>
          <div className="sub-sub-sub-container">
            <h1>History</h1>
            <div>
              <ul className="ul-li-container">
                <li className="box-li-cont">
                  <p className="para">Title</p>
                  <p className="para">Amount</p>
                  <p className="para">Type</p>
                </li>
                {oldList.map(each => (
                  <TransactionItem
                    sendinId={this.iAm}
                    sendanother={each}
                    key={each.idMy}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
