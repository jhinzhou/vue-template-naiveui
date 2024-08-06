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
        <NButton type="primary" round dashed @click="addBox">
          <i class="i-line-md:person-add mx-8 text-19" /><span class="mx-8 text-18">新增用户</span>
        </NButton>
      </div>
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
  { index: 1, userName: '漳卅', roleName: '管理员', jobNum: 'P199702301', count: '20', updateTime: '2024-09-10' },
  { index: 2, userName: '张三', roleName: '管理员', jobNum: 'P200702301', count: '18', updateTime: '2024-09-10' },
  { index: 3, userName: '李四', roleName: '管理员', jobNum: 'P200802301', count: '12', updateTime: '2024-09-10' },
  { index: 4, userName: '王五', roleName: '普通用户', jobNum: 'P200902301', count: '12', updateTime: '2024-09-10' },
  { index: 5, userName: '周六', roleName: '管理员', jobNum: 'P201702301', count: '12', updateTime: '2024-09-10' },
  { index: 6, userName: '赵七', roleName: '管理员', jobNum: 'P201802301', count: '12', updateTime: '2024-09-10' },
  { index: 7, userName: '朱八', roleName: '普通用户', jobNum: 'P200702301', count: '12', updateTime: '2024-09-10' },
  { index: 8, userName: '用户8', roleName: '管理员', jobNum: 'P200702301', count: '12', updateTime: '2024-09-10' },
  { index: 9, userName: '用户9', roleName: '管理员', jobNum: 'P200702301', count: '12', updateTime: '2024-09-10' },
  { index: 10, userName: '用户10', roleName: '管理员', jobNum: 'P200702301', count: '12', updateTime: '2024-09-10' },
  { index: 11, userName: '用户11', roleName: '管理员', jobNum: 'P200702301', count: '12', updateTime: '2024-09-10' },
  { index: 12, userName: '用户12', roleName: '管理员', jobNum: 'P200702301', count: '12', updateTime: '2024-09-10' },
  { index: 13, userName: '用户13', roleName: '管理员', jobNum: 'P200702301', count: '12', updateTime: '2024-09-10' },
  { index: 14, userName: '用户14', roleName: '管理员', jobNum: 'P200702301', count: '12', updateTime: '2024-09-10' },
  { index: 15, userName: '用户15', roleName: '管理员', jobNum: 'P200702301', count: '12', updateTime: '2024-09-10' },
  { index: 16, userName: '用户16', roleName: '管理员', jobNum: 'P200702301', count: '12', updateTime: '2024-09-10' },
]
const pagination = { pageSize: 12, size: 'large' }
const createColumns = ({ showDetail }) => {
  return [
    { title: '序号', key: 'index', width: 60, align: 'center' },
    { title: '姓名', key: 'userName', align: 'center' },
    { title: '工号', key: 'jobNum', align: 'center' },
    { title: '角色', key: 'roleName', align: 'center', sorter: 'default' },
    { title: '创建时间', key: 'updateTime', sorter: 'default', align: 'center' },
    { title: '操作', key: 'opera', align: 'center', render(row) {
      return h('span', [h(NButton, {
        strong: true,
        tertiary: true,
        size: 'small',
        type: 'primary',
        class: 'mx-4',
        onClick: $event => showDetail($event, row),
      }, { default: () => '编辑' }), h(NButton, {
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
