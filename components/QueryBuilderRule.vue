<template>
  <div>
    <el-form size="small">
      <div v-for="(ele, index) in queryChildren">
        <el-row :gutter="24">
          <el-col :span="14">
            <el-col :span='4' >
              <el-form-item :label="getOperandLabel(ele.query.operandId) + ':'">
              </el-form-item>
            </el-col>

            <el-col :span='6'>
              <el-form-item>
                <el-select v-model="ele.query.operatorId"
                           placeholder="Select operator"
                           style="width:100%">
                  <el-option v-for="operator in getOperators(ele.query.operandId)"
                             :key="operator.id"
                             :label="operator.label"
                             :value="operator.id">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :span='14'>
              <el-form-item>
                <el-input v-model="ele.query.value" style="width:100%"></el-input>
              </el-form-item>
            </el-col>
          </el-col>

          <el-col :span="10">
            <el-form-item>
              <a @click="onQueryDelete(index)">Delete</a>
            </el-form-item>
          </el-col>
        </el-row>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    operands: Array,
    operandTypes: Object,
    queryChildren: Array
  },

  data () {
    return {}
  },

  methods: {
    getOperandLabel: function (operandId) {
      return this.operands.find(obj => obj.id === operandId).label
    },

    getOperators: function (operandId) {
      let operandObj = this.operands.find(obj => obj.id === operandId)
      return this.operandTypes[operandObj.type].operators
    },

    onQueryDelete: function (index) {
      this.queryChildren.splice(index, 1)
    }
  }
}
</script>
