<template>
  <query-form :queryClum="queryClum" :model="query"></query-form>
  <div class="">用户管理</div>
</template>

<script setup>
import QueryForm from '../../components/QueryForm.vue'
import { reactive } from 'vue'

const query = reactive({
  userId: '',
  userName: '',
  state: ''
})
const queryClum = reactive([
  {
    label: '用户ID',
    prop: 'userId',
    type: 'text',
    placeholder: '请输入用户ID'
  },
  {
    label: '用户名称',
    prop: 'userName',
    type: 'text',
    placeholder: '请输入用户名称'
  },
  {
    label: '状态',
    prop: 'state',
    type: 'option',
    placeholder: '',
    options: [
      {
        label: '所有',
        value: 0
      },
      {
        label: '在职',
        value: 1
      },
      {
        label: '离职',
        value: 2
      },
      {
        label: '试用期',
        value: 3
      }
    ]
  },
  {
    type: 'btn',
    btns: [
      {
        name: '查询',
        type: 'primary',
        method: 'query',
        size: 'default'
      },
      {
        name: '重置',
        method: 'reset',
        size: 'default'
      }
    ]
  }
])
</script>

<style lang="scss" scoped></style>
