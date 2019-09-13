const state = {
  titlePage: '',
  profil: {
    id: null,
    title: null,
    surname: null,
    description: null,
    email: null,
    password: null,
    sexe: 'M',
    sexeSearch: 'F',
    age: null,
    localisation: {
      code: '',
      label: ''
    },
    rangeAge: {
      min: 18,
      max: 99
    }
  },
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
    localisation: {
      code: '',
      label: ''
    },
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
    localisation: {
      code: '',
      label: ''
    },

    rangeAge: {
      min: 18,
      max: 99
    }
  },
  criteria: {
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
  nextPage: 0,
  suggestReferential: []
}

export default state
