<template>
  <button class="hhcm-button" :class="[`hhcm-button--${type}`]">
    <span><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: 'HhcmButton',
  props: {
    type: {
      //  数据类型：字符串
      type: String,
      default: 'default'
    }
  },
  created () {
    console.log(this.type)
  }
}
</script>

<style lang="scss" scoped>
.hhcm-button {
  display: inline-block;
  line-height: 1;
  word-spacing: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
/* 禁止元素的文字被选中 */
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &:hover,
  &:focus {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}

.hhcm-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  &:hover,
  &:focus {
    color: #409eff;
    border-color: #409eff;
    background-color: #fff;
  }
}

.hhcm-button--success {
  color: #fff;
  background-color: #67C23A;
  border-color: #67C23A;
  &:hover,
  &:focus {
    color: #67C23A;
    border-color: #67C23A;
    background-color: #fff;
  }
}

.hhcm-button--info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
  &:hover,
  &:focus {
    color: #909399;
    border-color: #909399;
    background-color: #fff;
  }
}

.hhcm-button--waming {
  color: #fff;
  background-color: #E6A23C;
  border-color: #E6A23C;
  &:hover,
  &:focus {
    color: #E6A23C;
    border-color: #E6A23C;
    background-color: #fff;
  }
}

.hhcm-button--danger {
  color: #fff;
  background-color: #F56C6C;
  border-color: #F56C6C;
  &:hover,
  &:focus {
    color: #F56C6C;
    border-color: #F56C6C;
    background-color: #fff;
  }
}
</style>
