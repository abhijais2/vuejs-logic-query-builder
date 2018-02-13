<template>
  <div>
    <el-container>
      <el-main>
        <el-form size="small">
          <query-builder-header :logical-operators="logicalOperators"
                                :operands="operands"
                                :on-form-query-add="addQuery"
                                :selected-logical-operator="query.logicalOperator">
          </query-builder-header>

          <query-builder-rule :queryChildren="query.children"
                              :operands="operands"
                              :operandTypes="operandTypes"
                              style="margin-top:30px;">
          </query-builder-rule>
        </el-form>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import QueryBuilderHeader from './components/QueryBUilderHeader'
import QueryBuilderRule from './components/QueryBuilderRule'
import operandTypes from './configs/operandTypes'
import util from './util'

const logicalOperators = operandTypes['logical'].operators

export default {
  components: {QueryBuilderRule, QueryBuilderHeader},

  props: {
    operands: Array,
    value: String
  },

  data () {
    return {
      logicalOperators: logicalOperators,
      operandTypes: operandTypes,
      query: {},
      queryChildren: []
    }
  },

  mounted () {
    // TODO: set logicalOperator via default reference
    this.query = util.strRuleToJson(this.value, this.operandTypes, this.operands)
    this.query = this.query || {}
    this.queryChildren = this.query.children || []
  },

  watch: {
    query: {
      handler: function (val, oldVal) {
        this.value = util.jsonToStrRule(val, this.operandTypes, this.operands)
      },
      deep: true
    }
  },

  methods: {
    addQuery: function (operandId) {
      this.query.children.push({
        type: 'query-builder-rule',
        query: {
          operandId: operandId
        }
      })
    }
  }
}
</script>
