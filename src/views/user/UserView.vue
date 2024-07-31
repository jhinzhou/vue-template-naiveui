<template>
  <div class="custom-view">
    <div class="custom-title custom-color">
      用户管理
    </div>
    <div class="px-25 pt-18">
      <n-form
        ref="formRef"
        :model="model"
        inline
        label-placement="left"
        :label-width="80"
      >
        <n-grid :cols="24" :x-gap="24" class="pt-12">
          <n-form-item-gi :span="9" label="姓名筛选" path="inputValue">
            <n-input v-model:value="model.name" placeholder="请输入姓名" />
          </n-form-item-gi>
          <n-form-item-gi :span="9" />
          <n-form-item-gi :span="9" label="角色筛选" path="inputValue">
            <n-input v-model:value="model.action" placeholder="请选择角色" />
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
      <div class="operation-group f-s-c-r pt-6">
        <n-button type="primary" round dashed @click="addBox">
          <i class="i-line-md:person-add mx-8 text-19" /><span class="mx-8 text-18">新增用户</span>
        </n-button>
      </div>
    </div>
    <ZBack>
      <n-button type="primary" round ghost>
        <template #icon>
          <i class="i-line-md:rotate-270 text-20" />
        </template>
        重置搜索
      </n-button>
      <n-button type="primary" ghost>
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
  { action: 1, title: '档案盒1', state: '在柜', attribute: '操作票, 校准证书', count: '20', dueTime: '2024-09-10' },
  { action: 2, title: '档案盒2', state: '在柜', attribute: '操作票, 校准证书', count: '18', dueTime: '2024-09-10' },
  { action: 3, title: '档案盒3', state: '在柜', attribute: '操作票, 校准证书', count: '12', dueTime: '2024-09-10' },
  { action: 4, title: '档案盒4', state: '在柜', attribute: '操作票, 校准证书', count: '12', dueTime: '2024-09-10' },
  { action: 5, title: '档案盒5', state: '在柜', attribute: '操作票, 校准证书', count: '12', dueTime: '2024-09-10' },
  { action: 6, title: '档案盒6', state: '在柜', attribute: '操作票, 校准证书', count: '12', dueTime: '2024-09-10' },
  { action: 7, title: '档案盒7', state: '在柜', attribute: '操作票, 校准证书', count: '12', dueTime: '2024-09-10' },
  { action: 8, title: '档案盒8', state: '在柜', attribute: '操作票, 校准证书', count: '12', dueTime: '2024-09-10' },
  { action: 9, title: '档案盒9', state: '在柜', attribute: '操作票, 校准证书', count: '12', dueTime: '2024-09-10' },
  { action: 10, title: '档案盒10', state: '在柜', attribute: '操作票, 校准证书', count: '12', dueTime: '2024-09-10' },
  { action: 11, title: '档案盒11', state: '在柜', attribute: '操作票, 校准证书', count: '12', dueTime: '2024-09-10' },
  { action: 12, title: '档案盒12', state: '在柜', attribute: '操作票, 校准证书', count: '12', dueTime: '2024-09-10' },
  { action: 13, title: '档案盒13', state: '在柜', attribute: '操作票, 校准证书', count: '12', dueTime: '2024-09-10' },
  { action: 14, title: '档案盒14', state: '在柜', attribute: '操作票, 校准证书', count: '12', dueTime: '2024-09-10' },
  { action: 15, title: '档案盒15', state: '在柜', attribute: '操作票, 校准证书', count: '12', dueTime: '2024-09-10' },
  { action: 16, title: '档案盒16', state: '在柜', attribute: '操作票, 校准证书', count: '12', dueTime: '2024-09-10' },
]
const pagination = { pageSize: 12, size: 'large' }
const createColumns = ({ showDetail }) => {
  return [
    { title: '动作', key: 'action', width: 60, align: 'center' },
    { title: '档案盒', key: 'title', align: 'center' },
    { title: '状态', key: 'state', align: 'center', width: 120, sorter: 'default' },
    { title: '属性', key: 'attribute', align: 'center' },
    { title: '文件数量', key: 'count', sorter: 'default', width: 120, align: 'center' },
    { title: '最早过期', key: 'dueTime', sorter: 'default', align: 'center' },
  ]
}
const columns = createColumns({
  // showDetail({ clientX, clientY }, row) {
  //   toggleAnimation(clientX, clientY, () => router.push('/archives'))
  // },
})
</script>

<style lang="scss" scoped></style>
