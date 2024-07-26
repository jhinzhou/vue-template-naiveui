<template>
  <div class="side-view">
    <div class="file-body">
      <div class="file-title text-20">
        RFID智能档案柜
      </div>
      <div class="file-view">
        <div v-for="(item, index) in fileBoxList" :key="index" :class="classFormate(item)" class="file-item">
          <!-- {{ index + 1 }} -->
        </div>
      </div>
      <div class="file-footer">
        <div class="footer" />
        <div class="footer" />
      </div>
    </div>
  </div>
</template>

<script setup>
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const fileBoxList = ref([])
onMounted(() => {
  fileBoxList.value = []
  for (let i = 0; i < 60; i++) {
    fileBoxList.value.push({ index: i, state: getRandom(1, 1),
    })
  }
})
const classFormate = (val) => {
  if (val.state === 0) {
    return 'empty'
  }
  if (val.state === 1) {
    return 'normal'
  }
  if (val.state === 2) {
    return 'warning'
  }
  if (val.state === 3) {
    return 'danger'
  }
}
</script>

<style scoped>
.file-body {
  width: 80%;
  height: 90%;
  margin-left: 10%;
  margin-top: 4%;
  border: 4px solid #ffffff;
  background-color: #ffffff;
  border-radius: 8px 8px 4px 4px;
  color: #ffffff;
  box-shadow: 4px 4px 14px rgba(0, 0, 0, 0.4);
}
.file-view {
  width: 96%;
  height: 93%;
  margin-left: 2%;
  margin-top: 2%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 6px;
}
.file-title {
  width: 100%;
  height: 40px;
  border-radius: 8px 8px 0 0;
  background-color: #18a057bd;
  text-align: center;
  font-weight: 700;
  line-height: 40px;
}
.file-item {
  border-radius: 5px;
  display: flex;
  font-size: 12px;
  align-items: flex-end;
  justify-content: center;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.4);
}
.file-footer {
  display: flex;
  justify-content: space-between;
  .footer {
    width: 20px;
    height: 10px;
    margin-top: 16px;
    border-radius: 0 0 8px 8px;
    background: #ffffff;
  }
}
.empty {
  background: #ffffffbd;
}
.normal {
  background: #18a057bd;
}
.warning {
  background: #f0a020bd;
}
.danger {
  background: #d03050bd;
}
</style>
