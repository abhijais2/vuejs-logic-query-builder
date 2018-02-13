const deepClone = function (obj) {
  if (Array.isArray(obj)) {
    return obj.map(deepClone)
  } else if (obj && typeof obj === 'object') {
    var cloned = {}
    var keys = Object.keys(obj)
    for (var i = 0, l = keys.length; i < l; i++) {
      var key = keys[i]
      cloned[key] = deepClone(obj[key])
    }
    return cloned
  } else {
    return obj
  }
}

const jsonToStrRule = function (jsonObj, operandTypes, operands) {
  let toReturn = ''

  if (!(jsonObj && jsonObj.children && jsonObj.children.length > 0)) return toReturn

  let logicalOperator = operandTypes['logical'].operators.find(obj => obj.id === jsonObj.logicalOperator).value

  jsonObj.children.forEach((obj, index) => {
    let operand = operands.find(temp => temp.id === obj.query.operandId)
    let operator = operandTypes[operand.type].operators.find(temp => temp.id === obj.query.operatorId)

    if (!operand || !operator) return false
    if (index === 0) {
      toReturn += `${operand.label} ${operator.value} ${obj.query.value}`
    } else {
      toReturn += ` ${logicalOperator} ${operand.label} ${operator.value} ${obj.query.value}`
    }
  })

  return toReturn
}

const strRuleToJson = function (strRule, operandTypes, operands) {
  let toReturn = {
    logicalOperator: 'all',
    children: []
  }

  if (!strRule) return toReturn

  let logicalOperator = strRule.indexOf('&&') >= 0 ? '&&' : '||'

  let arrQueries = strRule.split(logicalOperator)

  arrQueries.forEach(str => {
    let arrEle = str.split(' ')
    let operand = operands.find(temp => temp.label === arrEle[0])
    let operator = operandTypes[operand.type].operators.find(temp => temp.value === arrEle[1])
    let newObj = {
      type: 'query-builder-rule',
      query: {
        operandId: operand.id,
        operatorId: operator.id,
        value: arrEle[2]
      }
    }

    toReturn.children.push(newObj)
  })

  return toReturn
}

export default {
  deepClone,
  jsonToStrRule,
  strRuleToJson
}
