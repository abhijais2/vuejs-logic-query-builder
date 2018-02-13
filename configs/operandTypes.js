const operandTypes = {
  text: {
    operators: [
      {
        label: 'equals',
        id: 'equals',
        value: '=='
      },
      {
        abel: 'contains',
        id: 'contain',
        value: 'contain'
      }
    ],
    inputType: 'text',
    id: 'text-field'
  },
  number: {
    operators: [
      {
        label: '=',
        id: '=',
        value: '=='
      },
      {
        label: '>=',
        id: '>=',
        value: '>='
      }
    ],
    inputType: 'number',
    id: 'number-field'
  },
  logical: {
    operators: [
      {
        'label': 'All',
        'id': 'all',
        'value': '&&'
      },
      {
        'label': 'Any',
        'id': 'any',
        'value': '||'
      }
    ],
    inputType: 'logical',
    id: 'logical'
  }
}

export default operandTypes
