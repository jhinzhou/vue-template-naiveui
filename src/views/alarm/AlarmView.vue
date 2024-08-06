<template>
  <div class="custom-view">
    <div class="custom-title custom-color">
      报警
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
          <n-form-item-gi :span="9" label="报警类型筛选" path="inputValue">
            <n-input v-model:value="model.action" placeholder="请选择报警类型" />
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
      <NButton type="primary" ghost>
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
  { type: '领用异常', title: '档案盒1', msg: '长时间未归还', time: '2024-09-10' },
  { type: '失效提醒', title: '档案盒2', msg: '文件xxx即将失效', time: '2024-09-10' },
  { type: '失效报警', title: '档案盒3', msg: '文件xxx已失效', time: '2024-09-10' },
  { type: '版本失效', title: '档案盒4', msg: '文件xxx版本已过期', time: '2024-09-10' },
  { type: '文件不足', title: '档案盒5', msg: '文件xxx柜内存量不足', time: '2024-09-10' },
  { type: '文件不足', title: '档案盒5', msg: '文件xxx柜内存量不足', time: '2024-09-10' },
  { type: '文件不足', title: '档案盒5', msg: '文件xxx柜内存量不足', time: '2024-09-10' },
  { type: '文件不足', title: '档案盒5', msg: '文件xxx柜内存量不足', time: '2024-09-10' },
  { type: '文件不足', title: '档案盒5', msg: '文件xxx柜内存量不足', time: '2024-09-10' },
  { type: '文件不足', title: '档案盒5', msg: '文件xxx柜内存量不足', time: '2024-09-10' },
  { type: '文件不足', title: '档案盒5', msg: '文件xxx柜内存量不足', time: '2024-09-10' },
  { type: '文件不足', title: '档案盒5', msg: '文件xxx柜内存量不足', time: '2024-09-10' },
]
const pagination = { pageSize: 12, size: 'large' }
const createColumns = ({ showDetail }) => {
  return [
    { title: '报警类型', key: 'type', width: 120, align: 'center' },
    { title: '所属档案盒', key: 'title', width: 200, align: 'center' },
    { title: '报警时间', key: 'time', width: 200, align: 'center', sorter: 'default' },
    { title: '报警信息', key: 'msg', align: 'left' },
    { title: '操作', key: 'opera', align: 'center', fixed: 'right', render(row) {
      return h('span', [h(NButton, {
        strong: true,
        tertiary: true,
        size: 'small',
        type: 'error',
        class: 'mx-4',
        onClick: () => showDetail(row),
      }, { default: () => '删除' })])
    } },
  ]
}
const columns = createColumns({
  // showDetail({ clientX, clientY }, row) {
  //   toggleAnimation(clientX, clientY, () => router.push('/archive'))
  // },
})
</script>

<style lang="scss" scoped></style>
