import { useEffect, useState } from 'react'
import CardInfo from './components/CardInfo/CardInfo'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import './index.css'

export interface Root {
  name?: string
  topLevelDomain?: string[]
  alpha2Code?: string
  alpha3Code?: string
  callingCodes?: string[]
  capital?: string
  altSpellings?: string[]
  subregion?: string
  region?: string
  population?: number
  latlng?: number[]
  demonym?: string
  area?: number
  timezones?: string[]
  borders?: string[]
  nativeName?: string
  numericCode?: string
  flags?: Flags
  currencies?: Currency[]
  languages?: Language[]
  translations?: Translations
  flag?: string
  regionalBlocs?: RegionalBloc[]
  cioc?: string
  independent?: boolean
}

export interface Currency {
  code?: string
  name?: string
  symbol?: string
}

export interface Flags {
  svg?: string
  png?: string
}

export interface Language {
  iso639_1?: string
  iso639_2?: string
  name?: string
  nativeName?: string
}

export interface RegionalBloc {
  acronym: string
  name: string
}

export interface Translations {
  br?: string
  pt?: string
  nl?: string
  hr?: string
  fa?: string
  de?: string
  es?: string
  fr?: string
  ja?: string
  it?: string
  hu?: string
}

function App() {
  const [theme, setTheme] = useState<boolean>(true)
  const [activeCard, setActiveCard] = useState<Root | undefined>(undefined)

  return (
    <div>
      <Header theme={theme} setTheme={setTheme} />
      {activeCard === undefined ? (
        <Main setActiveCard={setActiveCard} />
      ) : (
        <CardInfo activeCard={activeCard} setActiveCard={setActiveCard} />
      )}
    </div>
  )
}

export default App
