<template>
  <div class="custom-view">
    <div class="custom-title custom-color">
      日志
    </div>
    <div class="px-25 pt-18">
      <n-form
        ref="formRef"
        :model="model"
        inline
        label-placement="left"
        :label-width="110"
      >
        <n-grid :cols="24" :x-gap="24" class="pt-12">
          <n-form-item-gi :span="9" label="时间范围筛选" path="inputValue">
            <n-date-picker v-model:value="model.time" type="daterange" clearable />
          </n-form-item-gi>
          <n-form-item-gi :span="9" label="名称筛选" path="inputValue">
            <n-input v-model:value="model.fileName" placeholder="请输入档案盒或文件名称" />
          </n-form-item-gi>
          <n-form-item-gi :span="9" label="动作类型筛选" path="inputValue">
            <n-input v-model:value="model.action" placeholder="请选择操作动作" />
          </n-form-item-gi>
          <n-form-item-gi :span="9" label="人员筛选" path="inputValue">
            <n-input v-model:value="model.userName" placeholder="请选择操作人" />
          </n-form-item-gi>
        </n-grid>
      </n-form>
    </div>
    <div class="custom-body">
      <n-data-table
        class="custom-table"
        :columns="columns"
        :data="data"
        :pagination="pagination"
        :bordered="false"
        :single-column="true"
        flex-height
      />
    </div>
    <ZBack>
      <NButton type="primary" round ghost>
        <template #icon>
          <i class="i-line-md:rotate-270 text-20" />
        </template>
        重置搜索
      </NButton>
      <NButton type="primary" round ghost>
        <template #icon>
          <i class="i-line-md:search text-20" />
        </template>
        搜索
      </NButton>
    </ZBack>
  </div>
</template>

<script setup>
import { NButton } from 'naive-ui'
import ZBack from '@/components/ZBack.vue'

const formRef = ref(null)
const model = ref({ fileName: '', userName: '', action: '', time: [118313526e4, Date.now()] })

const data = [
  { action: '领走', box: '档案盒1', position: '1-1', file: '操作票', userName: '张三', time: '2024-09-10', opera: '' },
  { action: '借用', box: '档案盒2', position: '1-2', file: '操作票', userName: '李四', time: '2024-09-10' },
  { action: '归还', box: '档案盒3', position: '1-3', file: '操作票', userName: '王五', time: '2024-09-10' },
  { action: '归还', box: '档案盒4', position: '1-4', file: '操作票', userName: '王五', time: '2024-09-10' },
  { action: '归还', box: '档案盒5', position: '1-5', file: '操作票', userName: '王五', time: '2024-09-10' },
  { action: '归还', box: '档案盒6', position: '1-6', file: '校准证书', userName: '王五', time: '2024-09-10' },
  { action: '归还', box: '档案盒7', position: '1-7', file: '校准证书', userName: '王五', time: '2024-09-10' },
  { action: '归还', box: '档案盒8', position: '1-8', file: '校准证书', userName: '王五', time: '2024-09-10' },
  { action: '归还', box: '档案盒9', position: '1-9', file: '校准证书', userName: '王五', time: '2024-09-10' },
  { action: '归还', box: '档案盒10', position: '1-10', file: '校准证书', userName: '王五', time: '2024-09-10' },
  { action: '归还', box: '档案盒11', position: '1-11', file: '校准证书', userName: '王五', time: '2024-09-10' },
  { action: '归还', box: '档案盒12', position: '1-12', file: '校准证书', userName: '王五', time: '2024-09-10' },
  { action: '归还', box: '档案盒13', position: '2-1', file: '校准证书', userName: '王五', time: '2024-09-10' },
  { action: '归还', box: '档案盒14', position: '2-2', file: '校准证书', userName: '王五', time: '2024-09-10' },
  { action: '归还', box: '档案盒15', position: '2-3', file: '校准证书', userName: '王五', time: '2024-09-10' },
  { action: '归还', box: '档案盒16', position: '2-4', file: '校准证书', userName: '王五', time: '2024-09-10' },
]
const pagination = { pageSize: 12, size: 'large' }
const createColumns = ({ showVideo }) => {
  return [
    { title: '动作', key: 'action', width: 60, align: 'center' },
    { title: '档案盒', key: 'box', align: 'center' },
    { title: '文件', key: 'file', align: 'center' },
    { title: '位置', key: 'position', align: 'center' },
    { title: '操作人', key: 'userName', align: 'center' },
    { title: '操作时间', key: 'time', sorter: 'default', align: 'center' },
    { title: '录像', key: 'opera', align: 'center', render(row) {
      return h('span', [h(NButton, {
        strong: true,
        tertiary: true,
        size: 'small',
        class: 'mx-4',
        onClick: $event => showVideo($event, row),
      }, { default: () => '查看录像' })])
    } },
  ]
}
const columns = createColumns({
  showVideo({ clientX, clientY }, row) {

  },
})
</script>

<style lang="scss" scoped></style>
