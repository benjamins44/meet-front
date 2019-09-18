const state = {
  titlePage: '',
  queries: {},
  defaultProfil: {
    id: null,
    title: null,
    surname: null,
    description: null,
    email: null,
    password: null,
    sexe: 'M',
    sexeSearch: 'F',
    age: null,
    localisation: null,
    rangeAge: {
      min: 18,
      max: 99
    }
  },
  item: {
    id: null,
    title: null,
    surname: null,
    description: null,
    email: null,
    password: null,
    sexe: 'M',
    sexeSearch: 'F',
    age: null,
    localisation: null,

    rangeAge: {
      min: 18,
      max: 99
    }
  },
  criterias: {
    keywords: '',
    localisation: {
      code: '',
      label: ''
    },

    sexe: 'F',
    rangeAge: {
      min: 18,
      max: 99
    }
  },
  result: [],
  hasMoreResult: false,
  total: 0,
  page: 0,
  nextPage: 0,
  totalPage: 0,
  suggestReferential: []
}

export default state
