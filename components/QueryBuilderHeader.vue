<template>
  <div>
    <el-form size="small">
      <el-row :gutter="24">
        <el-col>
          <div style="float:left; margin-top:10px">
            Group should meet
          </div>
          <el-form-item prop="logicalOperator" style="padding-left:10px; float:left; width: 100px">
            <el-select v-model="selectedLogicalOperator"
                       default-first-option>
              <el-option v-for="operator in logicalOperators"
                         :key="operator.id"
                         :label="operator.label"
                         :value="operator.id">
              </el-option>
            </el-select>
          </el-form-item>
          <div style="margin-top:10px; padding-left:10px; float:left;">
            criteria.
          </div>
        </el-col>
      </el-row>

      <el-row :gutter="24">
        <el-col :span="14">
          <el-form-item prop="selectedOperand" label="Target Based on">
            <el-select v-model="selectedOperand"
                       value-key="id"
                       placeholder="Enter operand name"
                       style="width:100%">
              <el-option v-for="operand in operands"
                         :key="operand.id"
                         :label="operand.label"
                         :value="operand.id">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :span="10">
          <el-form-item style="margin-top: 33px">
            <el-button type="primary" @click="onQueryAdd(selectedOperand)">Add</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    logicalOperators: Array,
    selectedLogicalOperator: String,
    operands: Array,
    onFormQueryAdd: Function
  },

  data () {
    return {
      selectedOperand: ''
    }
  },

  methods: {
    onQueryAdd: function (param) {
      this.onFormQueryAdd(param)
    }
  }
}
</script>
