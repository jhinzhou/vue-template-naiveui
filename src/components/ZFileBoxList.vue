<template>
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
  <div class="operation-group f-s-c-r">
    <NButton type="primary" round dashed>
      <i class="i-mingcute:exit-door-fill mx-8 text-19" /><span class="mx-8 text-18">领出档案盒</span>
    </NButton>
    <NButton type="primary" round dashed>
      <i class="i-mingcute:enter-door-fill mx-8 text-19" /><span class="mx-8 text-17">存入档案盒</span>
    </NButton>
    <NButton type="primary" round dashed @click="addBox">
      <i class="i-mingcute:classify-add-fill mx-8 text-19" /><span class="mx-8 text-18">新增档案盒</span>
    </NButton>
  </div>
</template>

<script setup>
import { NButton } from 'naive-ui'
import { toggleAnimation } from '@/utils/tools'

const emit = defineEmits(['addBox', 'showBox'])
const data = [
  { no: 1, title: '档案盒1', state: '在柜', attribute: '操作票, 校准证书', count: '20', dueTime: '2024-09-10' },
  { no: 2, title: '档案盒2', state: '在柜', attribute: '操作票, 校准证书', count: '18', dueTime: '2024-09-10' },
  { no: 3, title: '档案盒3', state: '在柜', attribute: '操作票, 校准证书', count: '12', dueTime: '2024-09-10' },
  { no: 4, title: '档案盒4', state: '在柜', attribute: '操作票, 校准证书', count: '12', dueTime: '2024-09-10' },
  { no: 5, title: '档案盒5', state: '在柜', attribute: '操作票, 校准证书', count: '12', dueTime: '2024-09-10' },
  { no: 6, title: '档案盒6', state: '在柜', attribute: '操作票, 校准证书', count: '12', dueTime: '2024-09-10' },
  { no: 7, title: '档案盒7', state: '在柜', attribute: '操作票, 校准证书', count: '12', dueTime: '2024-09-10' },
  { no: 8, title: '档案盒8', state: '在柜', attribute: '操作票, 校准证书', count: '12', dueTime: '2024-09-10' },
  { no: 9, title: '档案盒9', state: '在柜', attribute: '操作票, 校准证书', count: '12', dueTime: '2024-09-10' },
  { no: 10, title: '档案盒10', state: '在柜', attribute: '操作票, 校准证书', count: '12', dueTime: '2024-09-10' },
  { no: 11, title: '档案盒11', state: '在柜', attribute: '操作票, 校准证书', count: '12', dueTime: '2024-09-10' },
  { no: 12, title: '档案盒12', state: '在柜', attribute: '操作票, 校准证书', count: '12', dueTime: '2024-09-10' },
  { no: 13, title: '档案盒13', state: '在柜', attribute: '操作票, 校准证书', count: '12', dueTime: '2024-09-10' },
  { no: 14, title: '档案盒14', state: '在柜', attribute: '操作票, 校准证书', count: '12', dueTime: '2024-09-10' },
  { no: 15, title: '档案盒15', state: '在柜', attribute: '操作票, 校准证书', count: '12', dueTime: '2024-09-10' },
  { no: 16, title: '档案盒16', state: '在柜', attribute: '操作票, 校准证书', count: '12', dueTime: '2024-09-10' },
]
const pagination = { pageSize: 12, size: 'large' }
const createColumns = ({ showDetail }) => {
  return [
    { type: 'selection' },
    { title: '位置', key: 'no', width: 60, align: 'center' },
    { title: '档案盒', key: 'title', align: 'center' },
    { title: '状态', key: 'state', align: 'center', width: 120, sorter: 'default' },
    { title: '属性', key: 'attribute', align: 'center' },
    { title: '文件数量', key: 'count', sorter: 'default', width: 120, align: 'center' },
    { title: '最早过期', key: 'dueTime', sorter: 'default', align: 'center' },
    { title: '操作', key: 'opera', align: 'center', fixd: 'right', render(row) {
      return h('span', [h(NButton, {
        strong: true,
        tertiary: true,
        size: 'small',
        class: 'mx-4',
        onClick: $event => showDetail($event, row),
      }, { default: () => '查看文件' }), h(NButton, {
        strong: true,
        tertiary: true,
        size: 'small',
        class: 'mx-4',
        onClick: () => play(row),
      }, { default: () => '点亮位置' })])
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
  height: 100%;
  border-radius: 16px;
}

:deep(.n-data-table-base-table-header) {
  border-radius: 16px 16px 0 0 !important;
}

:deep(.n-pagination) {
  margin-right: 6px !important;
  margin-bottom: 6px !important;
}
</style>
