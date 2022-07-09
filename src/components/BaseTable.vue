<template>
  <div class="base-table">
    <div class="table-btn">
      <el-button
        v-for="(j, k) in props.tableBtn"
        :key="k"
        :size="j.size"
        :type="j.type"
        @click="handleEdit(j.method)"
        >{{ j.name }}</el-button
      >
    </div>

    <el-table :data="props.tableData" style="width: 100%">
      <template v-if="props.checkbox">
        <el-table-column type="selection" width="55" />
      </template>

      <template v-for="(v, i) in props.tableClum" :key="i">
        <template v-if="!v.type">
          <el-table-column v-bind="v" />
        </template>

        <template v-if="v.type === 'function'">
          <el-table-column v-bind="v">
            <template #default="scope">
              <span>{{ v.callback(scope.row) }}</span>
            </template>
          </el-table-column>
        </template>

        <template v-if="v.type === 'btn'">
          <el-table-column v-bind="v">
            <template #default="scope">
              <el-button
                v-for="(item, index) in v.btns"
                :key="index"
                :size="item.size"
                :type="item.type"
                @click="handleEdit(item.method, scope.$index, scope.row)"
                >{{ item.name }}</el-button
              ></template
            >
          </el-table-column>
        </template>
      </template>
    </el-table>

    <template v-if="props.page">
      <el-pagination background layout="prev, pager, next" :total="1000" />
    </template>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  checkbox: {
    type: Boolean,
    default: false
  },
  page: {
    type: Boolean,
    default: false
  },
  tableClum: {
    type: Array,
    default: () => []
  },
  tableBtn: {
    type: Array,
    default: () => []
  },
  tableData: {
    type: Array,
    default: () => []
  }
})
</script>

<style lang="scss" scoped>
.base-table {
  background: #fff;
  margin-bottom: 20px;
  border-radius: 5px;
  overflow: hidden;
  .table-btn {
    border-radius: 5px 5px 0 0;
    background: #fff;
    padding: 20px;
    border-bottom: 1px solid #ece8e8;
  }
  .el-pagination {
    margin: 15px;
    float: right;
  }
}
</style>
