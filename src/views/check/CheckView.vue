<template>
  <div class="custom-view">
    <div class="custom-title custom-color">
      盘点记录
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
          <n-form-item-gi :span="9" />
          <n-form-item-gi :span="9" label="盘点人员筛选" path="inputValue">
            <n-input v-model:value="model.userName" placeholder="请选择盘点人" />
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
      <n-button type="primary" round ghost>
        <template #icon>
          <i class="i-line-md:rotate-270 text-20" />
        </template>
        重置搜索
      </n-button>
      <n-button type="primary" round ghost>
        <template #icon>
          <i class="i-line-md:search text-20" />
        </template>
        搜索
      </n-button>
    </ZBack>
  </div>
</template>

<script setup>
import ZBack from '@/components/ZBack.vue'

const formRef = ref(null)
const model = ref({ fileName: '', userName: '', action: '', time: [118313526e4, Date.now()] })

const data = [
  { action: 1, checkUserName: '漳卅', inBox: '58', outBox: '2', inFile: '20', outFile: '0', checkTime: '2024-09-10' },
  { action: 2, checkUserName: '张三', inBox: '60', outBox: '0', inFile: '18', outFile: '0', checkTime: '2024-09-10' },
  { action: 3, checkUserName: '李四', inBox: '58', outBox: '2', inFile: '12', outFile: '0', checkTime: '2024-09-10' },
  { action: 4, checkUserName: '王五', inBox: '58', outBox: '2', inFile: '12', outFile: '0', checkTime: '2024-09-10' },
  { action: 5, checkUserName: '周六', inBox: '58', outBox: '2', inFile: '12', outFile: '0', checkTime: '2024-09-10' },
  { action: 6, checkUserName: '赵七', inBox: '58', outBox: '0', inFile: '12', outFile: '0', checkTime: '2024-09-10' },
  { action: 7, checkUserName: '朱八', inBox: '58', outBox: '0', inFile: '12', outFile: '0', checkTime: '2024-09-10' },
  { action: 8, checkUserName: '用户8', inBox: '58', outBox: '0', inFile: '12', outFile: '0', checkTime: '2024-09-10' },
  { action: 9, checkUserName: '用户8', inBox: '58', outBox: '0', inFile: '12', outFile: '0', checkTime: '2024-09-10' },
  { action: 10, checkUserName: '用户8', inBox: '58', outBox: '0', inFile: '12', outFile: '0', checkTime: '2024-09-10' },
  { action: 11, checkUserName: '用户8', inBox: '58', outBox: '0', inFile: '12', outFile: '0', checkTime: '2024-09-10' },
  { action: 12, checkUserName: '用户8', inBox: '58', outBox: '0', inFile: '12', outFile: '0', checkTime: '2024-09-10' },
  { action: 13, checkUserName: '用户8', inBox: '58', outBox: '0', inFile: '12', outFile: '0', checkTime: '2024-09-10' },
  { action: 14, checkUserName: '用户8', inBox: '58', outBox: '0', inFile: '12', outFile: '0', checkTime: '2024-09-10' },
  { action: 15, checkUserName: '用户8', inBox: '58', outBox: '0', inFile: '12', outFile: '0', checkTime: '2024-09-10' },
  { action: 16, checkUserName: '用户8', inBox: '58', outBox: '0', inFile: '12', outFile: '0', checkTime: '2024-09-10' },
]
const pagination = { pageSize: 12, size: 'large' }
const createColumns = ({ showDetail }) => {
  return [
    { title: '序号', key: 'action', width: 60, align: 'center' },
    { title: '盘点时间', key: 'checkTime', align: 'center' },
    { title: '盘点人员', key: 'checkUserName', align: 'center' },
    { title: '当前在库档案盒', key: 'inBox', align: 'center' },
    { title: '当前借走档案盒', key: 'outBox', align: 'center' },
    { title: '当前在库文件', key: 'inFile', align: 'center' },
    { title: '当前借走文件', key: 'outFile', align: 'center' },
  ]
}
const columns = createColumns({
  // showDetail({ clientX, clientY }, row) {
  //   toggleAnimation(clientX, clientY, () => router.push('/archive'))
  // },
})
</script>

<style lang="scss" scoped></style>
