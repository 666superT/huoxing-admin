<template>
  <query-form :queryClum="queryClum" :model="query"></query-form>
  <base-table
    :tableClum="tableClum"
    :checkbox="checkbox"
    :tableBtn="tableBtn"
    :tableData="tableData"
    :page="page"
  ></base-table>
</template>

<script setup>
import QueryForm from '../../components/QueryForm.vue'
import BaseTable from '../../components/BaseTable.vue'
import { getUserList } from '../../api/user'
import { reactive, ref } from 'vue'
// import dayjs from 'dayjs'

const checkbox = ref(true)
const page = ref(true)

const tableData = ref([])

const tableBtn = reactive([
  {
    name: '新增',
    method: 'add',
    size: 'default',
    type: 'primary'
  },
  {
    name: '批量删除',
    method: 'delAll',
    size: 'default',
    type: 'danger'
  }
])

const tableClum = reactive([
  {
    label: '用户ID',
    prop: 'userId'
  },
  {
    label: '用户名',
    prop: 'userName'
  },
  {
    label: '用户邮箱',
    prop: 'userEmail'
  },
  {
    type: 'function',
    label: '用户角色',
    prop: 'role',
    callback(val) {
      if (val.role === 1) return '普通用户'
    }
  },
  {
    type: 'function',
    label: '用户状态',
    prop: 'state',
    callback(val) {
      if (val.state === 0) return '所有'
      if (val.state === 1) return '在职'
      if (val.state === 2) return '离职'
      if (val.state === 3) return '试用期'
    }
  },
  {
    // type: 'function',
    label: '注册时间',
    prop: 'createTime'
    // cllback(val) {
    //   dayjs(val.createTime).format('YYYY-MM-DD HH:mm:ss')
    // }
  },
  {
    label: '最后登录时间',
    prop: 'lastLoginTime'
  },
  {
    type: 'btn',
    label: '操作',
    width: '300px',
    btns: [
      {
        name: '编辑',
        method: 'edit',
        size: 'default'
      },
      {
        name: '删除',
        method: 'del',
        size: 'default',
        type: 'danger'
      }
    ]
  }
])

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

const pageNum = ref('1')
const pageSize = ref('6')

/**
 * 渲染列表
 */
async function userList() {
  const res = await getUserList({
    pageNum: pageNum.value,
    pageSize: pageSize.value,
    userId: query.userId,
    userName: query.userName,
    state: query.state
  })
  console.log(res)
  tableData.value = res.list
}
userList()
</script>

<style lang="scss" scoped></style>
