import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {selectedCapital: countryAndCapitalsList[0].id}

  onSelectedCapital = event => {
    this.setState({selectedCapital: event.target.value})
  }

  getCountry = selectedCapital => {
    const {country} = countryAndCapitalsList.find(
      each => each.id === selectedCapital,
    )
    return country
  }

  render() {
    const {selectedCapital} = this.state
    const country = this.getCountry(selectedCapital)

    return (
      <div className="bg-container">
        <div className="country-container">
          <h1 className="heading">Countries And Capitals</h1>
          <select
            className="capital-select"
            value={selectedCapital}
            id="capital-select"
            onChange={this.onSelectedCapital}
          >
            {countryAndCapitalsList.map(eachCapital => (
              <option key={eachCapital.id} value={eachCapital.id}>
                {eachCapital.capitalDisplayText}
              </option>
            ))}
          </select>
          <label className="label" htmlFor="capital-select">
            is Capital of which country?
          </label>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
