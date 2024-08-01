<template>
  <div class="file-card wh-full">
    <div class="item-used custom-color">
      档案盒信息
    </div>
    <n-form
      ref="formRef"
      :model="model"
      inline
      label-placement="top"
      :label-width="90"
      :disabled="updateDisabled"
    >
      <n-grid :cols="24" :x-gap="24" class="pt-12">
        <n-form-item-gi :span="6" label="档案盒名称" path="inputValue">
          <n-input v-model:value="model.inputValue" placeholder="请输入档案盒名称" />
        </n-form-item-gi>
        <n-form-item-gi :span="18" label="可存放的文件属性" path="dynamicTagsValue">
          <n-dynamic-tags v-model:value="model.dynamicTagsValue" size="large">
            <template #input="{ submit, deactivate }">
              <n-auto-complete
                ref="autoCompleteInstRef"
                v-model:value="inputValue"
                :options="options"
                placeholder="请选择或输入档案盒属性"
                :clear-after-select="true"
                @select="submit($event)"
                @blur="deactivate"
              />
            </template>
            <template #trigger="{ activate, disabled }">
              <NButton
                type="primary"
                dashed
                :disabled="disabled"
                @click="activate()"
              >
                <template #icon>
                  <i class="i-line-md:plus text-20" />
                </template>
                <span>添加</span>
              </NButton>
            </template>
          </n-dynamic-tags>
        </n-form-item-gi>
      </n-grid>
      <ZBack v-if="page === 'file'" />
      <n-button-group v-else class="custom-back">
        <NButton type="primary" round ghost @click="saveFileBox">
          <template #icon>
            <i class="i-line-md:confirm-circle text-20" />
          </template>
          提交档案信息
        </NButton>
        <NButton v-if="page === 'home'" type="primary" round ghost @click="cancel">
          <template #icon>
            <i class="i-line-md:arrow-left-circle text-20" />
          </template>
          返回
        </NButton>
      </n-button-group>
    </n-form>
  </div>
</template>

<script setup>
import { NButton } from 'naive-ui'
import { toggleAnimation } from '@/utils/tools'
import ZBack from '@/components/ZBack.vue'

defineProps({
  page: {
    type: String,
    default() {
      return 'file'
    },
  },
})
const emit = defineEmits(['back'])
const formRef = ref(null)
const updateDisabled = ref(false)
const model = ref({ inputValue: '', dynamicTagsValue: ['操作票', '校准证书'], typeCount: 12, count: 100 })

const autoCompleteInstRef = ref(null)
watch(autoCompleteInstRef, (value) => {
  if (value)
    nextTick(() => value.focus())
})

const inputValueRef = ref('')
const options = computed(() => {
  if (inputValueRef.value === null) {
    return []
  }
  const prefix = inputValueRef.value.split('@')[0]
  const inputSuffix = inputValueRef.value.split('@')[1]
  if (inputSuffix) {
    return [
      {
        label: `${prefix}@${inputSuffix}`,
        value: `${prefix}@${inputSuffix}`,
      },
    ]
  }
  return ['@gmail.com', '@163.com', '@qq.com'].map((suffix) => {
    return {
      label: prefix + suffix,
      value: prefix + suffix,
    }
  })
})

const back = (clientX, clientY) => {
  toggleAnimation(clientX, clientY, () => emit('back'))
}
const cancel = ({ clientX, clientY }) => {
  back(clientX, clientY)
}
const saveFileBox = ({ clientX, clientY }) => {
  back(clientX, clientY)
}
</script>

<style lang="scss" scoped>
.file-card {
  position: relative;
  padding-top: 29px;
  padding-left: 25px;
  border-radius: 12px;
  background: #fff;
  font-size: 22px;
  font-weight: 600;
  line-height: 22px;
  // border: 1px solid #18a05754;
  // box-shadow: 4px 4px 14px rgba(0, 0, 0, 0.4);
  // box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.24);
}
.action-btn {
  margin-top: -16px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
</style>
