<template>
  <div class="item-used custom-color ml-26 text-22 fw-600 lh-22">
    文件列表
  </div>
  <n-data-table
    class="custom-table"
    :columns="columns"
    :data="data"
    :pagination="pagination"
    :bordered="false"
    :row-key="rowKey"
    :single-column="true"
    flex-height
    @update:checked-row-keys="handleCheck"
  />
  <div class="operation-group f-s-c-r ml-26">
    <NButton type="primary" round dashed>
      <i class="i-mingcute:exit-door-fill mx-8 text-19" /><span class="mx-8 text-18">领出文件</span>
    </NButton>
    <NButton type="primary" round dashed>
      <i class="i-mingcute:enter-door-fill mx-8 text-19" /><span class="mx-8 text-17">存入文件</span>
    </NButton>
    <NButton type="primary" round dashed @click="addBox">
      <i class="i-mingcute:classify-add-fill mx-8 text-19" /><span class="mx-8 text-18">新增文件</span>
    </NButton>
  </div>
</template>

<script setup>
import { NButton } from 'naive-ui'
import { toggleAnimation } from '@/utils/tools'

const emit = defineEmits(['addBox', 'showBox'])
const data = [
  { no: 1, title: '文件1', state: '在柜', attribute: '操作票', count: '2024-01', dueTime: '2024-09-10' },
  { no: 2, title: '文件2', state: '在柜', attribute: '操作票', count: '2024-01', dueTime: '2024-09-10' },
  { no: 3, title: '文件3', state: '在柜', attribute: '操作票', count: '2024-01', dueTime: '2024-09-10' },
  { no: 4, title: '文件4', state: '在柜', attribute: '操作票', count: '2024-01', dueTime: '2024-09-10' },
  { no: 5, title: '文件5', state: '在柜', attribute: '操作票', count: '2024-01', dueTime: '2024-09-10' },
  { no: 6, title: '文件6', state: '在柜', attribute: '操作票', count: '2024-01', dueTime: '2024-09-10' },
  { no: 7, title: '文件7', state: '在柜', attribute: '操作票', count: '2024-01', dueTime: '2024-09-10' },
  { no: 8, title: '文件8', state: '在柜', attribute: '操作票', count: '2024-01', dueTime: '2024-09-10' },
  { no: 9, title: '文件9', state: '在柜', attribute: '操作票', count: '2024-01', dueTime: '2024-09-10' },
  { no: 10, title: '文件10', state: '在柜', attribute: '操作票', count: '2024-01', dueTime: '2024-09-10' },
  { no: 11, title: '文件11', state: '在柜', attribute: '操作票', count: '2024-01', dueTime: '2024-09-10' },
  { no: 12, title: '文件12', state: '在柜', attribute: '操作票', count: '2024-01', dueTime: '2024-09-10' },
  { no: 13, title: '文件13', state: '在柜', attribute: '操作票', count: '2024-01', dueTime: '2024-09-10' },
  { no: 14, title: '文件14', state: '在柜', attribute: '操作票', count: '2024-01', dueTime: '2024-09-10' },
  { no: 15, title: '文件15', state: '在柜', attribute: '操作票', count: '2024-01', dueTime: '2024-09-10' },
  { no: 16, title: '文件16', state: '在柜', attribute: '操作票', count: '2024-01', dueTime: '2024-09-10' },
]
const pagination = { pageSize: 12, size: 'large' }
const createColumns = ({ showDetail }) => {
  return [
    { type: 'selection' },
    { title: '文件', key: 'title', align: 'center' },
    { title: '状态', key: 'state', align: 'center', width: 120, sorter: 'default' },
    { title: '属性', key: 'attribute', align: 'center' },
    { title: '版本号', key: 'count', align: 'center' },
    { title: '过期时间', key: 'dueTime', sorter: 'default', align: 'center' },
    { title: '操作', key: 'opera', align: 'center', fixd: 'right', render(row) {
      return h('span', [h(NButton, {
        strong: true,
        tertiary: true,
        size: 'small',
        class: 'mx-4',
        onClick: () => showDetail(row),
      }, { default: () => '查看文件' })])
    } },
  ]
}

const rowKey = row => row.no
const handleCheck = (val) => {
  console.log(val)
}

// 详情页
const router = useRouter()
const columns = createColumns({
  showDetail({ clientX, clientY }, row) {
    toggleAnimation(clientX, clientY, () => router.push('/archives'))
  },
})

const addBox = ({ clientX, clientY }) => {
  toggleAnimation(clientX, clientY, () => emit('addBox'))
}
</script>

<style scoped lang="scss">
.custom-table {
  height: calc(82% - 6px);
  margin-top: -3px;
  border-radius: 16px;
  padding: 6px;
}

:deep(.n-data-table-base-table-header) {
  border-radius: 16px 16px 0 0 !important;
}

:deep(.n-pagination) {
  margin-right: 6px !important;
  margin-bottom: 2px !important;
}
</style>
