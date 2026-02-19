import{l as hr,r as _e,m as $e,d as zn,b as Q,c as X,F as Un,f as $n,p as br,e as U,t as Ae,n as qn,i as Bu,g as Hn,q as fu,_ as gr,s as mr,v as _r,o as xr,a as kr,x as ve,y as Er,z as yr,k as vr}from"./index-2W9RSKf_.js";const dn=`# 快速开始

欢迎使用本知识库！本文档将帮助你快速了解如何使用本系统。

## 简介

这是一个基于 Vue 3 构建的纯前端文档管理系统，支持：

- 📁 动态扫描文档目录结构
- 🌲 树形导航展示
- 📝 实时 Markdown 预览
- 🎨 代码高亮显示
- 🚀 纯前端实现，无需后端

## 系统要求

- Node.js 18+
- Vue 3
- Vite

## 安装

\`\`\`bash
npm install
\`\`\`

## 运行

\`\`\`bash
npm run dev
\`\`\`

## 构建部署

\`\`\`bash
npm run build
\`\`\`

## 功能特性

### 1. 文档管理

- 支持多级目录结构
- 自动生成文件树
- 智能排序（按数字前缀）

### 2. Markdown 渲染

- 完整的 Markdown 语法支持
- 代码高亮
- 表格支持
- 图片引用

### 3. 导航体验

- 左侧树形导航
- 右侧内容预览
- 响应式设计

## 目录结构规范

\`\`\`
docs/
├── 01-入门指南/
│   ├── 01-快速开始.md
│   └── 02-环境配置.md
├── 02-核心概念/
│   └── 01-响应式原理.md
└── assets/
    └── images/
\`\`\`

## 命名约定

- 文件夹：使用数字前缀排序（如 \`01-入门指南\`）
- 文件：使用数字前缀排序（如 \`01-快速开始.md\`）
- 隐藏文件：以 \`.\` 或 \`_\` 开头的文件将被忽略

## 下一步

- [环境配置](./02-环境配置.md)
- [常见问题](./03-常见问题.md)
`,fn=`# 环境配置

本文档介绍如何配置开发环境以使用本知识库系统。

## 开发环境

### Node.js 版本

推荐使用 Node.js 18 或更高版本。

\`\`\`bash
node -v
\`\`\`

### 包管理器

推荐使用 npm 或 pnpm：

\`\`\`bash
# 使用 npm
npm install

# 使用 pnpm
pnpm install
\`\`\`

## 项目配置

### Vite 配置

项目使用 Vite 作为构建工具，配置文件位于 \`vite.config.ts\`。

### TypeScript 配置

项目使用 TypeScript，配置文件位于 \`tsconfig.json\`。

## 依赖说明

### 核心依赖

- **vue**: Vue 3 框架
- **vue-router**: 路由管理
- **pinia**: 状态管理
- **markdown-it**: Markdown 渲染引擎
- **highlight.js**: 代码高亮

### UI 组件

- **reka-ui**: UI 组件库
- **tailwindcss**: 样式框架

## 开发工具

### 推荐的 VS Code 插件

- Volar
- TypeScript Vue Plugin (Volar)
- Tailwind CSS IntelliSense
- ESLint
- Prettier

### 代码格式化

项目使用 Prettier 进行代码格式化：

\`\`\`bash
npm run format
\`\`\`

## 环境变量

创建 \`.env\` 文件配置环境变量：

\`\`\`env
VITE_APP_TITLE=知识库系统
VITE_APP_DESCRIPTION=基于 Vue 3 的文档管理系统
\`\`\`

## 构建优化

### 静态资源

图片等静态资源应放在 \`public/\` 目录下。

### 代码分割

使用动态导入实现路由懒加载：

\`\`\`typescript
const KnowledgePage = () => import('@/views/KnowledgePage.vue')
\`\`\`

## 常见问题

### 依赖安装失败

尝试清除缓存后重新安装：

\`\`\`bash
rm -rf node_modules package-lock.json
npm install
\`\`\`

### 端口冲突

修改 \`package.json\` 中的 dev 脚本：

\`\`\`json
{
  "scripts": {
    "dev": "vite --port 3000"
  }
}
\`\`\`

## 下一步

- [快速开始](./01-快速开始.md)
- [常见问题](./03-常见问题.md)
`,pn=`# 常见问题

本文档列出了使用本知识库系统时可能遇到的常见问题及其解决方案。

## 安装问题

### Q: npm install 失败怎么办？

**A:** 尝试以下解决方案：

1. 清除 npm 缓存：
\`\`\`bash
npm cache clean --force
\`\`\`

2. 删除 node_modules 和 package-lock.json：
\`\`\`bash
rm -rf node_modules package-lock.json
\`\`\`

3. 重新安装：
\`\`\`bash
npm install
\`\`\`

### Q: 依赖版本冲突如何解决？

**A:** 检查 package.json 中的依赖版本，确保兼容性。可以使用 npm 的版本范围：

\`\`\`json
{
  "dependencies": {
    "vue": "^3.0.0"
  }
}
\`\`\`

## 开发问题

### Q: 热更新不生效？

**A:** 尝试以下方法：

1. 重启开发服务器
2. 清除浏览器缓存
3. 检查 Vite 配置是否正确

### Q: TypeScript 类型错误？

**A:** 确保：

1. 安装了 \`@types/node\` 等类型定义
2. tsconfig.json 配置正确
3. 重启 TypeScript 服务器

## 构建问题

### Q: 构建失败怎么办？

**A:** 检查以下几点：

1. 运行类型检查：
\`\`\`bash
npm run type-check
\`\`\`

2. 检查是否有语法错误
3. 查看构建日志中的错误信息

### Q: 构建后文件过大？

**A:** 优化建议：

1. 使用路由懒加载
2. 压缩图片资源
3. 启用代码分割
4. 使用 Tree Shaking

## 部署问题

### Q: 部署后路由 404？

**A:** 配置服务器重写规则：

**Nginx 配置：**
\`\`\`nginx
location / {
  try_files $uri $uri/ /index.html;
}
\`\`\`

**Vercel 配置：**
\`\`\`json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
\`\`\`

### Q: 静态资源加载失败？

**A:** 检查：

1. 资源路径是否正确
2. 构建配置中的 publicPath
3. 服务器是否正确配置了静态资源目录

## 功能问题

### Q: Markdown 渲染不正确？

**A:** 确保：

1. Markdown 文件格式正确
2. markdown-it 配置正确
3. 检查是否有特殊字符需要转义

### Q: 代码高亮不显示？

**A:** 检查：

1. 是否正确引入了 highlight.js
2. 是否配置了语言支持
3. CSS 样式是否正确加载

## 性能问题

### Q: 页面加载慢？

**A:** 优化建议：

1. 启用 Gzip 压缩
2. 使用 CDN 加速
3. 优化图片大小
4. 减少不必要的依赖

### Q: 文件树渲染卡顿？

**A:** 优化建议：

1. 使用虚拟滚动
2. 懒加载子节点
3. 减少初始渲染节点数量

## 其他问题

### Q: 如何自定义主题？

**A:** 修改 Tailwind CSS 配置文件 \`tailwind.config.js\`：

\`\`\`javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#your-color'
      }
    }
  }
}
\`\`\`

### Q: 如何添加新的 Markdown 文件？

**A:** 按照以下步骤：

1. 在 \`docs/\` 目录下创建文件
2. 遵循命名约定（数字前缀）
3. 重启开发服务器
4. 文件会自动出现在导航中

## 获取帮助

如果以上解决方案无法解决你的问题，可以：

1. 查看项目文档
2. 搜索相关 issue
3. 提交新的 issue
4. 联系维护者

## 相关链接

- [快速开始](./01-快速开始.md)
- [环境配置](./02-环境配置.md)
- [Vue 3 官方文档](https://vuejs.org/)
- [Vite 官方文档](https://vitejs.dev/)
`,hn=`# 响应式原理

Vue 3 的响应式系统是其核心特性之一，本文将深入探讨其工作原理。

## 概述

Vue 3 使用 Proxy API 重新实现了响应式系统，相比 Vue 2 的 Object.defineProperty，提供了更好的性能和功能。

## 核心概念

### 1. 响应式对象

使用 \`ref\` 和 \`reactive\` 创建响应式对象：

\`\`\`typescript
import { ref, reactive } from 'vue'

// ref 用于基本类型
const count = ref(0)

// reactive 用于对象
const state = reactive({
  name: 'Vue 3',
  version: 3
})
\`\`\`

### 2. 依赖收集

Vue 3 使用 \`effect\` 函数来收集依赖：

\`\`\`typescript
import { effect } from 'vue'

effect(() => {
  console.log(count.value)
})
\`\`\`

### 3. 触发更新

当响应式数据发生变化时，会自动触发相关 effect 重新执行：

\`\`\`typescript
count.value = 1
\`\`\`

## Proxy vs Object.defineProperty

### Object.defineProperty (Vue 2)

- 只能监听对象属性的变化
- 无法监听数组索引和 length 的变化
- 需要递归遍历所有属性

### Proxy (Vue 3)

- 可以监听对象的所有操作
- 支持数组、Map、Set 等数据结构
- 懒响应式，按需处理

## 实现原理

### 基本实现

\`\`\`typescript
function reactive<T extends object>(target: T): T {
  return new Proxy(target, {
    get(target, key, receiver) {
      track(target, key)
      return Reflect.get(target, key, receiver)
    },
    set(target, key, value, receiver) {
      const result = Reflect.set(target, key, value, receiver)
      trigger(target, key)
      return result
    }
  })
}
\`\`\`

### 依赖跟踪

\`\`\`typescript
const targetMap = new WeakMap()

function track(target, key) {
  let depsMap = targetMap.get(target)
  if (!depsMap) {
    targetMap.set(target, (depsMap = new Map()))
  }
  let dep = depsMap.get(key)
  if (!dep) {
    depsMap.set(key, (dep = new Set()))
  }
  dep.add(activeEffect)
}
\`\`\`

### 触发更新

\`\`\`typescript
function trigger(target, key) {
  const depsMap = targetMap.get(target)
  if (!depsMap) return
  const dep = depsMap.get(key)
  if (dep) {
    dep.forEach(effect => effect())
  }
}
\`\`\`

## ref 和 reactive 的区别

### ref

- 用于基本类型（string、number、boolean）
- 访问值需要使用 \`.value\`
- 可以重新赋值

\`\`\`typescript
const count = ref(0)
count.value++
\`\`\`

### reactive

- 用于对象和数组
- 直接访问属性
- 不能重新赋值整个对象

\`\`\`typescript
const state = reactive({ count: 0 })
state.count++
\`\`\`

## computed

计算属性是基于响应式依赖的缓存值：

\`\`\`typescript
const doubled = computed(() => count.value * 2)
\`\`\`

## watch 和 watchEffect

### watch

监听特定数据源的变化：

\`\`\`typescript
watch(count, (newVal, oldVal) => {
  console.log(\`count changed from \${oldVal} to \${newVal}\`)
})
\`\`\`

### watchEffect

自动追踪依赖：

\`\`\`typescript
watchEffect(() => {
  console.log(\`count is \${count.value}\`)
})
\`\`\`

## 最佳实践

### 1. 选择合适的 API

- 基本类型使用 \`ref\`
- 对象使用 \`reactive\`
- 需要解构时使用 \`toRefs\`

### 2. 避免直接修改响应式对象

\`\`\`typescript
const state = reactive({ list: [] })

// ❌ 错误
state.list = [1, 2, 3]

// ✅ 正确
state.list.push(1)
state.list.push(2)
state.list.push(3)
\`\`\`

### 3. 使用 toRefs 解构

\`\`\`typescript
const state = reactive({ count: 0, name: 'Vue' })
const { count, name } = toRefs(state)
\`\`\`

## 性能优化

### 1. 避免不必要的响应式

\`\`\`typescript
// ❌ 不必要的响应式
const config = reactive({
  apiUrl: 'https://api.example.com'
})

// ✅ 使用常量
const API_URL = 'https://api.example.com'
\`\`\`

### 2. 使用 shallowRef 和 shallowReactive

\`\`\`typescript
const shallowState = shallowReactive({
  nested: { value: 1 }
})
\`\`\`

### 3. 手动触发更新

\`\`\`typescript
const state = reactive({ count: 0 })

// 批量更新
state.count++
state.count++
\`\`\`

## 总结

Vue 3 的响应式系统通过 Proxy API 提供了更强大和高效的响应式能力。理解其原理有助于我们更好地使用 Vue 3 进行开发。

## 相关链接

- [Vue 3 官方文档](https://vuejs.org/guide/essentials/reactivity-fundamentals.html)
- [组件系统](./02-组件系统.md)
`,bn=`# 组件系统

Vue 3 的组件系统是其核心特性之一，提供了强大的组件化开发能力。

## 组件基础

### 定义组件

使用 \`<script setup>\` 语法糖定义组件：

\`\`\`vue
<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
<\/script>

<template>
  <div>{{ count }}</div>
</template>
\`\`\`

### 组件注册

#### 全局注册

\`\`\`typescript
import { createApp } from 'vue'
import MyComponent from './MyComponent.vue'

const app = createApp(App)
app.component('MyComponent', MyComponent)
\`\`\`

#### 局部注册

\`\`\`vue
<script setup lang="ts">
import MyComponent from './MyComponent.vue'
<\/script>

<template>
  <MyComponent />
</template>
\`\`\`

## Props

### 定义 Props

\`\`\`typescript
interface Props {
  title: string
  count?: number
}

const props = withDefaults(defineProps<Props>(), {
  count: 0
})
\`\`\`

### Props 验证

\`\`\`typescript
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  count: {
    type: Number,
    default: 0,
    validator: (value: number) => value >= 0
  }
})
\`\`\`

## Emits

### 定义事件

\`\`\`typescript
const emit = defineEmits<{
  update: [value: number]
  change: [event: Event]
}>()

function handleClick() {
  emit('update', 1)
}
\`\`\`

### 使用事件

\`\`\`vue
<MyComponent @update="handleUpdate" />
\`\`\`

## Slots

### 默认插槽

\`\`\`vue
<template>
  <div>
    <slot></slot>
  </div>
</template>
\`\`\`

### 具名插槽

\`\`\`vue
<template>
  <div>
    <slot name="header"></slot>
    <slot></slot>
    <slot name="footer"></slot>
  </div>
</template>
\`\`\`

### 作用域插槽

\`\`\`vue
<template>
  <div>
    <slot :user="user"></slot>
  </div>
</template>
\`\`\`

\`\`\`vue
<MyComponent>
  <template #default="{ user }">
    {{ user.name }}
  </template>
</MyComponent>
\`\`\`

## 生命周期

### Composition API 生命周期

| Options API | Composition API |
|------------|----------------|
| beforeCreate | setup() |
| created | setup() |
| beforeMount | onBeforeMount |
| mounted | onMounted |
| beforeUpdate | onBeforeUpdate |
| updated | onUpdated |
| beforeUnmount | onBeforeUnmount |
| unmounted | onUnmounted |

### 使用示例

\`\`\`typescript
import { onMounted, onUnmounted } from 'vue'

onMounted(() => {
  console.log('组件已挂载')
})

onUnmounted(() => {
  console.log('组件已卸载')
})
\`\`\`

## Provide / Inject

### 提供数据

\`\`\`typescript
import { provide } from 'vue'

provide('theme', 'dark')
\`\`\`

### 注入数据

\`\`\`typescript
import { inject } from 'vue'

const theme = inject('theme')
\`\`\`

### 类型安全

\`\`\`typescript
import { provide, inject } from 'vue'

interface ThemeContext {
  theme: string
  toggleTheme: () => void
}

provide<ThemeContext>('theme', {
  theme: 'dark',
  toggleTheme: () => {}
})

const theme = inject<ThemeContext>('theme')
\`\`\`

## 组件通信

### Props Down, Events Up

\`\`\`vue
<script setup lang="ts">
const props = defineProps<{ value: number }>()
const emit = defineEmits<{ update: [value: number] }>()
<\/script>

<template>
  <button @click="emit('update', props.value + 1)">
    {{ value }}
  </button>
</template>
\`\`\`

### v-model

\`\`\`vue
<script setup lang="ts">
const modelValue = defineModel<number>()
<\/script>

<template>
  <input v-model="modelValue" />
</template>
\`\`\`

### 多个 v-model

\`\`\`vue
<script setup lang="ts">
const title = defineModel<string>('title')
const content = defineModel<string>('content')
<\/script>

<template>
  <input v-model="title" />
  <textarea v-model="content"></textarea>
</template>
\`\`\`

## 动态组件

### 基本使用

\`\`\`vue
<template>
  <component :is="currentComponent" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ComponentA from './ComponentA.vue'
import ComponentB from './ComponentB.vue'

const currentComponent = ref(ComponentA)
<\/script>
\`\`\`

### keep-alive

\`\`\`vue
<template>
  <keep-alive>
    <component :is="currentComponent" />
  </keep-alive>
</template>
\`\`\`

## 异步组件

### 基本使用

\`\`\`typescript
import { defineAsyncComponent } from 'vue'

const AsyncComponent = defineAsyncComponent(() =>
  import('./AsyncComponent.vue')
)
\`\`\`

### 加载状态

\`\`\`typescript
const AsyncComponent = defineAsyncComponent({
  loader: () => import('./AsyncComponent.vue'),
  loadingComponent: LoadingComponent,
  errorComponent: ErrorComponent,
  delay: 200,
  timeout: 3000
})
\`\`\`

## 组件最佳实践

### 1. 单一职责

每个组件只负责一个功能：

\`\`\`vue
<script setup lang="ts">
const props = defineProps<{ user: User }>()
<\/script>

<template>
  <div>{{ user.name }}</div>
</template>
\`\`\`

### 2. Props 命名

使用 kebab-case：

\`\`\`vue
<UserCard :user-name="name" />
\`\`\`

### 3. 事件命名

使用 kebab-case：

\`\`\`vue
<UserCard @user-click="handleClick" />
\`\`\`

### 4. 避免直接修改 Props

\`\`\`typescript
const props = defineProps<{ value: number }>()

// ❌ 错误
props.value++

// ✅ 正确
const localValue = ref(props.value)
\`\`\`

### 5. 使用 Composables 复用逻辑

\`\`\`typescript
function useCounter() {
  const count = ref(0)
  const increment = () => count.value++
  return { count, increment }
}
\`\`\`

## 组件设计模式

### 1. 容器组件 vs 展示组件

\`\`\`vue
<script setup lang="ts">
const data = await fetchData()
<\/script>

<template>
  <UserList :users="data" />
</template>
\`\`\`

### 2. 高阶组件

\`\`\`typescript
function withLoading<P extends object>(
  component: ComponentType<P>
) {
  return defineComponent({
    props: component.props,
    setup(props, { slots }) {
      const loading = ref(false)
      return () => h(component, props, slots)
    }
  })
}
\`\`\`

### 3. 插槽模式

\`\`\`vue
<template>
  <div class="card">
    <slot name="header">
      <h3>默认标题</h3>
    </slot>
    <slot></slot>
  </div>
</template>
\`\`\`

## 总结

Vue 3 的组件系统提供了强大而灵活的组件化开发能力。掌握这些概念和最佳实践，可以帮助我们构建可维护、可复用的组件。

## 相关链接

- [Vue 3 官方文档](https://vuejs.org/guide/essentials/component-basics.html)
- [响应式原理](./01-响应式原理.md)
- [性能优化](../03-进阶用法/01-性能优化.md)
`,gn=`# 性能优化

本文档介绍 Vue 3 应用的各种性能优化技巧和最佳实践。

## 渲染性能

### 1. 使用 v-once

静态内容只渲染一次：

\`\`\`vue
<template>
  <div v-once>
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
  </div>
</template>
\`\`\`

### 2. 使用 v-memo

条件缓存：

\`\`\`vue
<template>
  <div v-memo="[value]">
    <p>{{ value }}</p>
  </div>
</template>
\`\`\`

### 3. 合理使用 v-show vs v-if

- \`v-show\`: 频繁切换，CSS display 控制
- \`v-if\`: 条件很少改变，真正的条件渲染

\`\`\`vue
<template>
  <button v-show="isVisible">显示/隐藏</button>
  <div v-if="isLoggedIn">欢迎回来</div>
</template>
\`\`\`

## 计算属性优化

### 1. 使用 computed 缓存

\`\`\`typescript
import { computed } from 'vue'

const filteredList = computed(() => {
  return list.value.filter(item => item.active)
})
\`\`\`

### 2. 避免在 computed 中进行异步操作

\`\`\`typescript
// ❌ 错误
const data = computed(async () => {
  return await fetchData()
})

// ✅ 正确
const data = ref(null)
fetchData().then(result => {
  data.value = result
})
\`\`\`

## 列表渲染优化

### 1. 使用 key

\`\`\`vue
<template>
  <div v-for="item in list" :key="item.id">
    {{ item.name }}
  </div>
</template>
\`\`\`

### 2. 虚拟滚动

对于大列表，使用虚拟滚动：

\`\`\`vue
<template>
  <RecycleScroller
    :items="list"
    :item-size="50"
    key-field="id"
  >
    <template #default="{ item }">
      <div>{{ item.name }}</div>
    </template>
  </RecycleScroller>
</template>
\`\`\`

## 组件优化

### 1. 使用 shallowRef 和 shallowReactive

\`\`\`typescript
import { shallowRef, shallowReactive } from 'vue'

const shallowState = shallowReactive({
  nested: { value: 1 }
})

const shallowData = shallowRef({ data: [] })
\`\`\`

### 2. 使用 markRaw

标记对象为非响应式：

\`\`\`typescript
import { markRaw } from 'vue'

const staticData = markRaw({
  config: { /* ... */ }
})
\`\`\`

### 3. 组件懒加载

\`\`\`typescript
const LazyComponent = defineAsyncComponent(() =>
  import('./LazyComponent.vue')
)
\`\`\`

### 4. 使用 v-once 缓存子组件

\`\`\`vue
<template>
  <ExpensiveComponent v-once />
</template>
\`\`\`

## 事件监听优化

### 1. 使用 passive 事件

\`\`\`vue
<template>
  <div @scroll.passive="handleScroll">
    滚动内容
  </div>
</template>
\`\`\`

### 2. 防抖和节流

\`\`\`typescript
import { debounce } from 'lodash-es'

const handleSearch = debounce((query: string) => {
  search(query)
}, 300)
\`\`\`

### 3. 及时清理事件监听

\`\`\`typescript
import { onMounted, onUnmounted } from 'vue'

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
\`\`\`

## 状态管理优化

### 1. 合理拆分 Store

\`\`\`typescript
// stores/user.ts
export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>(null)
  return { user }
})

// stores/product.ts
export const useProductStore = defineStore('product', () => {
  const products = ref<Product[]>([])
  return { products }
})
\`\`\`

### 2. 使用 actions 避免直接修改

\`\`\`typescript
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)

  const increment = () => {
    count.value++
  }

  return { count, increment }
})
\`\`\`

## 图片优化

### 1. 懒加载

\`\`\`vue
<template>
  <img v-lazy="imageUrl" alt="description" />
</template>
\`\`\`

### 2. 使用 WebP 格式

\`\`\`vue
<picture>
  <source :srcset="webpUrl" type="image/webp" />
  <img :src="fallbackUrl" alt="description" />
</picture>
\`\`\`

### 3. 响应式图片

\`\`\`vue
<img
  :srcset="\`\${imageUrl}-small.jpg 480w,
             \${imageUrl}-medium.jpg 768w,
             \${imageUrl}-large.jpg 1024w\`"
  sizes="(max-width: 480px) 480px,
         (max-width: 768px) 768px,
         1024px"
  :src="imageUrl-large.jpg"
  alt="description"
/>
\`\`\`

## 代码分割

### 1. 路由懒加载

\`\`\`typescript
const routes = [
  {
    path: '/home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/about',
    component: () => import('@/views/About.vue')
  }
]
\`\`\`

### 2. 动态导入

\`\`\`typescript
const loadModule = async () => {
  const module = await import('./heavyModule')
  module.doSomething()
}
\`\`\`

## 构建优化

### 1. 配置 Vite

\`\`\`typescript
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vue-vendor': ['vue', 'vue-router', 'pinia'],
          'ui-library': ['reka-ui']
        }
      }
    }
  }
})
\`\`\`

### 2. Tree Shaking

\`\`\`typescript
// ✅ 按需导入
import { Button } from 'reka-ui'

// ❌ 全量导入
import * as UI from 'reka-ui'
\`\`\`

### 3. 压缩和混淆

\`\`\`typescript
export default defineConfig({
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  }
})
\`\`\`

## 内存优化

### 1. 及时清理引用

\`\`\`typescript
import { onUnmounted } from 'vue'

let timer: number

onMounted(() => {
  timer = setInterval(() => {
    // 定时任务
  }, 1000)
})

onUnmounted(() => {
  clearInterval(timer)
})
\`\`\`

### 2. 避免内存泄漏

\`\`\`typescript
import { onUnmounted, ref } from 'vue'

const eventBus = new EventBus()

onMounted(() => {
  eventBus.on('update', handleUpdate)
})

onUnmounted(() => {
  eventBus.off('update', handleUpdate)
})
\`\`\`

## 监控和分析

### 1. Vue DevTools

使用 Vue DevTools 分析组件性能：

- 组件渲染时间
- 组件更新频率
- 事件触发情况

### 2. Performance API

\`\`\`typescript
performance.mark('start')

// 执行操作

performance.mark('end')
performance.measure('operation', 'start', 'end')

const measure = performance.getEntriesByName('operation')[0]
console.log(\`操作耗时: \${measure.duration}ms\`)
\`\`\`

### 3. Lighthouse

使用 Lighthouse 进行性能审计：

\`\`\`bash
npm install -g lighthouse
lighthouse https://your-site.com --view
\`\`\`

## 最佳实践总结

### 1. 优先使用 computed

计算属性会自动缓存，避免重复计算。

### 2. 合理使用 key

在列表渲染时使用唯一且稳定的 key。

### 3. 懒加载组件

对于非首屏组件，使用懒加载。

### 4. 避免不必要的响应式

对于静态数据，使用 \`markRaw\` 或普通对象。

### 5. 及时清理副作用

在组件卸载时清理事件监听、定时器等。

### 6. 使用虚拟滚动

对于大列表，使用虚拟滚动减少 DOM 节点。

### 7. 优化图片资源

使用合适的格式、尺寸和懒加载。

### 8. 代码分割

合理拆分代码，按需加载。

## 相关链接

- [Vue 3 性能优化指南](https://vuejs.org/guide/best-practices/performance.html)
- [Vite 性能优化](https://vitejs.dev/guide/performance.html)
- [响应式原理](../02-核心概念/01-响应式原理.md)
- [组件系统](../02-核心概念/02-组件系统.md)
`,mn=`# Markdown测试文档

## 1. 标题测试

### 三级标题

#### 四级标题

##### 五级标题

###### 六级标题

## 2. 文本格式测试

**粗体文本**

*斜体文本*

***粗斜体文本***

~~删除线文本~~

<u>下划线文本</u>

\`行内代码\`

## 3. 列表测试

### 3.1 无序列表

- 项目1
- 项目2
- 项目3

### 3.2 有序列表

1. 第一步
2. 第二步
3. 第三步

### 3.3 嵌套列表

- 一级项目1
  - 二级项目1.1
    - 三级项目1.1.1
    - 三级项目1.1.2
  - 二级项目1.2
- 一级项目2
  1. 二级项目2.1
  2. 二级项目2.2

## 4. 任务列表

- [x] 已完成任务
- [ ] 未完成任务
- [x] 另一个已完成任务

## 5. 引用测试

> 这是一个引用
> 引用可以跨行

## 6. 代码块测试

### 6.1 JavaScript代码

\`\`\`javascript
function hello() {
  console.log('Hello, world!');
}
\`\`\`

### 6.2 TypeScript代码

\`\`\`typescript
interface User {
  name: string;
  age: number;
}

const user: User = {
  name: 'John',
  age: 30
};
\`\`\`

### 6.3 Bash代码

\`\`\`bash
# 这是一个bash命令
ls -la
\`\`\`

## 7. 表格测试

| 姓名 | 年龄 | 职业 |
|------|------|------|
| John | 30   | 工程师 |
| Jane | 25   | 设计师 |
| Bob  | 35   | 产品经理 |

## 8. 链接测试

[Google](https://www.google.com)

[GitHub](https://www.github.com "GitHub官方网站")

## 9. 图片测试

![测试图片](http://eng.chinamil.com.cn/2025xb/M_251449/P_251468/_attachment/2026/02/14/16443231_dddc63f29178a795d68e585cc389c550.jpg "测试图片")

- 图标2
![CSDN图标](https://csdnimg.cn/cdn/content-toolbar/csdn-logo_.png?v=20190924.1 "CSDN图标")

## 10. 水平分隔线测试

---

## 11. 脚注测试

这是一个脚注引用[^1]

[^1]: 这是脚注内容

## 12. 定义列表测试

术语1
: 术语1的定义

术语2
: 术语2的定义
: 术语2的另一个定义
`,_n=`# 一级标题\r
## 二级标题\r
### 三级标题\r
#### 四级标题\r
##### 五级标题\r
___\r
- 列表项1\r
- 列表项2\r
- 列表项3\r
\r
1. 有序列表项1\r
2. 有序列表项2\r
3. 有序列表项3\r
\r
| 表头1 | 表头2 | 表头3 |\r
| --- | --- | --- |\r
| 单元格1 | 单元格2 | 单元格3 |\r
| 单元格4 | 单元格5 | 单元格6 |\r
\r
`,Ar=hr("knowledge",()=>{const e=_e([]),u=_e(null),n=_e(""),t=_e(!1),r=_e({}),o=$e(()=>u.value?.path||"");function c(A){return A.sort((m,_)=>m.order!==_.order?m.order-_.order:m.displayName.localeCompare(_.displayName)).map(m=>(m.children&&(m.children=c(m.children)),m))}function i(A,m){for(const _ of A){if(_.path===m)return _;if(_.children){const k=i(_.children,m);if(k)return k}}return null}async function s(){if(!t.value)try{const A=Object.assign({"/docs/01-入门指南/01-快速开始.md":dn,"/docs/01-入门指南/02-环境配置.md":fn,"/docs/01-入门指南/03-常见问题.md":pn,"/docs/02-核心概念/01-响应式原理.md":hn,"/docs/02-核心概念/02-组件系统.md":bn,"/docs/03-进阶用法/01-性能优化.md":gn,"/docs/04-测试文档/01-Markdown测试.md":mn,"/docs/pdf测试/test.md":_n});r.value={},Object.entries(A).forEach(([k,w])=>{r.value[k]=w});const m=Object.keys(A);e.value=a(m);const _=d(e.value);_&&(u.value=_,n.value=r.value[_.path]||""),t.value=!0}catch(A){console.error("加载知识库失败:",A)}}function a(A){const m=[];return A.forEach(_=>{const k=_.split("/").filter(Boolean);if(!k.includes("docs"))return;const w=k.indexOf("docs"),M=k.slice(w+1);if(M.length===0)return;let H=m,N="";k.forEach((E,I)=>{N+="/"+E}),M.forEach((E,I)=>{const P=E.endsWith(".md"),W=P?E.replace(".md","").replace(/^\d+[-_]/,""):E.replace(/^\d+[-_]/,""),ue=parseInt(E.match(/^\d+/)?.[0]||"999");let K=N;P||(K=k.slice(0,w+1+I+1).join("/"));let J=H.find(le=>le.name===E);J||(J={name:E,path:K,type:P?"file":"folder",displayName:W,order:ue,children:P?void 0:[]},H.push(J)),!P&&J.children&&(H=J.children)})}),c(m)}function d(A){for(const m of A){if(m.type==="file")return m;if(m.children){const _=d(m.children);if(_)return _}}return null}async function f(A){const m=i(e.value,A);if(m){u.value=m;try{const _=r.value[A];if(_)n.value=_;else{const w=Object.assign({"/docs/01-入门指南/01-快速开始.md":dn,"/docs/01-入门指南/02-环境配置.md":fn,"/docs/01-入门指南/03-常见问题.md":pn,"/docs/02-核心概念/01-响应式原理.md":hn,"/docs/02-核心概念/02-组件系统.md":bn,"/docs/03-进阶用法/01-性能优化.md":gn,"/docs/04-测试文档/01-Markdown测试.md":mn,"/docs/pdf测试/test.md":_n})[A]||"";n.value=w}}catch(_){console.error("加载文件失败:",_),n.value="加载失败"}}}function g(A){const m=i(e.value,A);return!m||!m.children?[]:m.children.filter(_=>_.type==="file")}function b(A){let m=[];for(const _ of A)_.type==="file"&&m.push(_),_.children&&(m=m.concat(b(_.children)));return m}function p(A){return A.trim()?b(e.value).filter(_=>_.displayName.toLowerCase().includes(A.toLowerCase())):[]}function C(A){const m=b(e.value),_=m.findIndex(k=>k.path===A);return _>0?m[_-1]:null}function R(A){const m=b(e.value),_=m.findIndex(k=>k.path===A);return _<m.length-1?m[_+1]:null}return{fileTree:e,currentFile:u,currentContent:n,isLoaded:t,currentFilePath:o,loadKnowledgeBase:s,selectFile:f,getFilesInFolder:g,searchFiles:p,getPreviousFile:C,getNextFile:R}}),xn={};function Cr(e){let u=xn[e];if(u)return u;u=xn[e]=[];for(let n=0;n<128;n++){const t=String.fromCharCode(n);u.push(t)}for(let n=0;n<e.length;n++){const t=e.charCodeAt(n);u[t]="%"+("0"+t.toString(16).toUpperCase()).slice(-2)}return u}function Ze(e,u){typeof u!="string"&&(u=Ze.defaultChars);const n=Cr(u);return e.replace(/(%[a-f0-9]{2})+/gi,function(t){let r="";for(let o=0,c=t.length;o<c;o+=3){const i=parseInt(t.slice(o+1,o+3),16);if(i<128){r+=n[i];continue}if((i&224)===192&&o+3<c){const s=parseInt(t.slice(o+4,o+6),16);if((s&192)===128){const a=i<<6&1984|s&63;a<128?r+="��":r+=String.fromCharCode(a),o+=3;continue}}if((i&240)===224&&o+6<c){const s=parseInt(t.slice(o+4,o+6),16),a=parseInt(t.slice(o+7,o+9),16);if((s&192)===128&&(a&192)===128){const d=i<<12&61440|s<<6&4032|a&63;d<2048||d>=55296&&d<=57343?r+="���":r+=String.fromCharCode(d),o+=6;continue}}if((i&248)===240&&o+9<c){const s=parseInt(t.slice(o+4,o+6),16),a=parseInt(t.slice(o+7,o+9),16),d=parseInt(t.slice(o+10,o+12),16);if((s&192)===128&&(a&192)===128&&(d&192)===128){let f=i<<18&1835008|s<<12&258048|a<<6&4032|d&63;f<65536||f>1114111?r+="����":(f-=65536,r+=String.fromCharCode(55296+(f>>10),56320+(f&1023))),o+=9;continue}}r+="�"}return r})}Ze.defaultChars=";/?:@&=+$,#";Ze.componentChars="";const kn={};function wr(e){let u=kn[e];if(u)return u;u=kn[e]=[];for(let n=0;n<128;n++){const t=String.fromCharCode(n);/^[0-9a-z]$/i.test(t)?u.push(t):u.push("%"+("0"+n.toString(16).toUpperCase()).slice(-2))}for(let n=0;n<e.length;n++)u[e.charCodeAt(n)]=e[n];return u}function eu(e,u,n){typeof u!="string"&&(n=u,u=eu.defaultChars),typeof n>"u"&&(n=!0);const t=wr(u);let r="";for(let o=0,c=e.length;o<c;o++){const i=e.charCodeAt(o);if(n&&i===37&&o+2<c&&/^[0-9a-f]{2}$/i.test(e.slice(o+1,o+3))){r+=e.slice(o,o+3),o+=2;continue}if(i<128){r+=t[i];continue}if(i>=55296&&i<=57343){if(i>=55296&&i<=56319&&o+1<c){const s=e.charCodeAt(o+1);if(s>=56320&&s<=57343){r+=encodeURIComponent(e[o]+e[o+1]),o++;continue}}r+="%EF%BF%BD";continue}r+=encodeURIComponent(e[o])}return r}eu.defaultChars=";/?:@&=+$,-_.!~*'()#";eu.componentChars="-_.!~*'()";function Uu(e){let u="";return u+=e.protocol||"",u+=e.slashes?"//":"",u+=e.auth?e.auth+"@":"",e.hostname&&e.hostname.indexOf(":")!==-1?u+="["+e.hostname+"]":u+=e.hostname||"",u+=e.port?":"+e.port:"",u+=e.pathname||"",u+=e.search||"",u+=e.hash||"",u}function pu(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}const Dr=/^([a-z0-9.+-]+:)/i,Sr=/:[0-9]*$/,Fr=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,Tr=["<",">",'"',"`"," ","\r",`
`,"	"],Mr=["{","}","|","\\","^","`"].concat(Tr),Nr=["'"].concat(Mr),En=["%","/","?",";","#"].concat(Nr),yn=["/","?","#"],Rr=255,vn=/^[+a-z0-9A-Z_-]{0,63}$/,Ir=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,An={javascript:!0,"javascript:":!0},Cn={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};function $u(e,u){if(e&&e instanceof pu)return e;const n=new pu;return n.parse(e,u),n}pu.prototype.parse=function(e,u){let n,t,r,o=e;if(o=o.trim(),!u&&e.split("#").length===1){const a=Fr.exec(o);if(a)return this.pathname=a[1],a[2]&&(this.search=a[2]),this}let c=Dr.exec(o);if(c&&(c=c[0],n=c.toLowerCase(),this.protocol=c,o=o.substr(c.length)),(u||c||o.match(/^\/\/[^@\/]+@[^@\/]+/))&&(r=o.substr(0,2)==="//",r&&!(c&&An[c])&&(o=o.substr(2),this.slashes=!0)),!An[c]&&(r||c&&!Cn[c])){let a=-1;for(let p=0;p<yn.length;p++)t=o.indexOf(yn[p]),t!==-1&&(a===-1||t<a)&&(a=t);let d,f;a===-1?f=o.lastIndexOf("@"):f=o.lastIndexOf("@",a),f!==-1&&(d=o.slice(0,f),o=o.slice(f+1),this.auth=d),a=-1;for(let p=0;p<En.length;p++)t=o.indexOf(En[p]),t!==-1&&(a===-1||t<a)&&(a=t);a===-1&&(a=o.length),o[a-1]===":"&&a--;const g=o.slice(0,a);o=o.slice(a),this.parseHost(g),this.hostname=this.hostname||"";const b=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!b){const p=this.hostname.split(/\./);for(let C=0,R=p.length;C<R;C++){const A=p[C];if(A&&!A.match(vn)){let m="";for(let _=0,k=A.length;_<k;_++)A.charCodeAt(_)>127?m+="x":m+=A[_];if(!m.match(vn)){const _=p.slice(0,C),k=p.slice(C+1),w=A.match(Ir);w&&(_.push(w[1]),k.unshift(w[2])),k.length&&(o=k.join(".")+o),this.hostname=_.join(".");break}}}}this.hostname.length>Rr&&(this.hostname=""),b&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}const i=o.indexOf("#");i!==-1&&(this.hash=o.substr(i),o=o.slice(0,i));const s=o.indexOf("?");return s!==-1&&(this.search=o.substr(s),o=o.slice(0,s)),o&&(this.pathname=o),Cn[n]&&this.hostname&&!this.pathname&&(this.pathname=""),this};pu.prototype.parseHost=function(e){let u=Sr.exec(e);u&&(u=u[0],u!==":"&&(this.port=u.substr(1)),e=e.substr(0,e.length-u.length)),e&&(this.hostname=e)};const Or=Object.freeze(Object.defineProperty({__proto__:null,decode:Ze,encode:eu,format:Uu,parse:$u},Symbol.toStringTag,{value:"Module"})),jn=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,Gn=/[\0-\x1F\x7F-\x9F]/,Br=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,qu=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,Zn=/[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/,Vn=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,Lr=Object.freeze(Object.defineProperty({__proto__:null,Any:jn,Cc:Gn,Cf:Br,P:qu,S:Zn,Z:Vn},Symbol.toStringTag,{value:"Module"})),Pr=new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(e=>e.charCodeAt(0))),zr=new Uint16Array("Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(e=>e.charCodeAt(0)));var Su;const Ur=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]]),$r=(Su=String.fromCodePoint)!==null&&Su!==void 0?Su:function(e){let u="";return e>65535&&(e-=65536,u+=String.fromCharCode(e>>>10&1023|55296),e=56320|e&1023),u+=String.fromCharCode(e),u};function qr(e){var u;return e>=55296&&e<=57343||e>1114111?65533:(u=Ur.get(e))!==null&&u!==void 0?u:e}var ie;(function(e){e[e.NUM=35]="NUM",e[e.SEMI=59]="SEMI",e[e.EQUALS=61]="EQUALS",e[e.ZERO=48]="ZERO",e[e.NINE=57]="NINE",e[e.LOWER_A=97]="LOWER_A",e[e.LOWER_F=102]="LOWER_F",e[e.LOWER_X=120]="LOWER_X",e[e.LOWER_Z=122]="LOWER_Z",e[e.UPPER_A=65]="UPPER_A",e[e.UPPER_F=70]="UPPER_F",e[e.UPPER_Z=90]="UPPER_Z"})(ie||(ie={}));const Hr=32;var Oe;(function(e){e[e.VALUE_LENGTH=49152]="VALUE_LENGTH",e[e.BRANCH_LENGTH=16256]="BRANCH_LENGTH",e[e.JUMP_TABLE=127]="JUMP_TABLE"})(Oe||(Oe={}));function Lu(e){return e>=ie.ZERO&&e<=ie.NINE}function jr(e){return e>=ie.UPPER_A&&e<=ie.UPPER_F||e>=ie.LOWER_A&&e<=ie.LOWER_F}function Gr(e){return e>=ie.UPPER_A&&e<=ie.UPPER_Z||e>=ie.LOWER_A&&e<=ie.LOWER_Z||Lu(e)}function Zr(e){return e===ie.EQUALS||Gr(e)}var oe;(function(e){e[e.EntityStart=0]="EntityStart",e[e.NumericStart=1]="NumericStart",e[e.NumericDecimal=2]="NumericDecimal",e[e.NumericHex=3]="NumericHex",e[e.NamedEntity=4]="NamedEntity"})(oe||(oe={}));var Ie;(function(e){e[e.Legacy=0]="Legacy",e[e.Strict=1]="Strict",e[e.Attribute=2]="Attribute"})(Ie||(Ie={}));class Vr{constructor(u,n,t){this.decodeTree=u,this.emitCodePoint=n,this.errors=t,this.state=oe.EntityStart,this.consumed=1,this.result=0,this.treeIndex=0,this.excess=1,this.decodeMode=Ie.Strict}startEntity(u){this.decodeMode=u,this.state=oe.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1}write(u,n){switch(this.state){case oe.EntityStart:return u.charCodeAt(n)===ie.NUM?(this.state=oe.NumericStart,this.consumed+=1,this.stateNumericStart(u,n+1)):(this.state=oe.NamedEntity,this.stateNamedEntity(u,n));case oe.NumericStart:return this.stateNumericStart(u,n);case oe.NumericDecimal:return this.stateNumericDecimal(u,n);case oe.NumericHex:return this.stateNumericHex(u,n);case oe.NamedEntity:return this.stateNamedEntity(u,n)}}stateNumericStart(u,n){return n>=u.length?-1:(u.charCodeAt(n)|Hr)===ie.LOWER_X?(this.state=oe.NumericHex,this.consumed+=1,this.stateNumericHex(u,n+1)):(this.state=oe.NumericDecimal,this.stateNumericDecimal(u,n))}addToNumericResult(u,n,t,r){if(n!==t){const o=t-n;this.result=this.result*Math.pow(r,o)+parseInt(u.substr(n,o),r),this.consumed+=o}}stateNumericHex(u,n){const t=n;for(;n<u.length;){const r=u.charCodeAt(n);if(Lu(r)||jr(r))n+=1;else return this.addToNumericResult(u,t,n,16),this.emitNumericEntity(r,3)}return this.addToNumericResult(u,t,n,16),-1}stateNumericDecimal(u,n){const t=n;for(;n<u.length;){const r=u.charCodeAt(n);if(Lu(r))n+=1;else return this.addToNumericResult(u,t,n,10),this.emitNumericEntity(r,2)}return this.addToNumericResult(u,t,n,10),-1}emitNumericEntity(u,n){var t;if(this.consumed<=n)return(t=this.errors)===null||t===void 0||t.absenceOfDigitsInNumericCharacterReference(this.consumed),0;if(u===ie.SEMI)this.consumed+=1;else if(this.decodeMode===Ie.Strict)return 0;return this.emitCodePoint(qr(this.result),this.consumed),this.errors&&(u!==ie.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed}stateNamedEntity(u,n){const{decodeTree:t}=this;let r=t[this.treeIndex],o=(r&Oe.VALUE_LENGTH)>>14;for(;n<u.length;n++,this.excess++){const c=u.charCodeAt(n);if(this.treeIndex=Wr(t,r,this.treeIndex+Math.max(1,o),c),this.treeIndex<0)return this.result===0||this.decodeMode===Ie.Attribute&&(o===0||Zr(c))?0:this.emitNotTerminatedNamedEntity();if(r=t[this.treeIndex],o=(r&Oe.VALUE_LENGTH)>>14,o!==0){if(c===ie.SEMI)return this.emitNamedEntityData(this.treeIndex,o,this.consumed+this.excess);this.decodeMode!==Ie.Strict&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}}return-1}emitNotTerminatedNamedEntity(){var u;const{result:n,decodeTree:t}=this,r=(t[n]&Oe.VALUE_LENGTH)>>14;return this.emitNamedEntityData(n,r,this.consumed),(u=this.errors)===null||u===void 0||u.missingSemicolonAfterCharacterReference(),this.consumed}emitNamedEntityData(u,n,t){const{decodeTree:r}=this;return this.emitCodePoint(n===1?r[u]&~Oe.VALUE_LENGTH:r[u+1],t),n===3&&this.emitCodePoint(r[u+2],t),t}end(){var u;switch(this.state){case oe.NamedEntity:return this.result!==0&&(this.decodeMode!==Ie.Attribute||this.result===this.treeIndex)?this.emitNotTerminatedNamedEntity():0;case oe.NumericDecimal:return this.emitNumericEntity(0,2);case oe.NumericHex:return this.emitNumericEntity(0,3);case oe.NumericStart:return(u=this.errors)===null||u===void 0||u.absenceOfDigitsInNumericCharacterReference(this.consumed),0;case oe.EntityStart:return 0}}}function Wn(e){let u="";const n=new Vr(e,t=>u+=$r(t));return function(r,o){let c=0,i=0;for(;(i=r.indexOf("&",i))>=0;){u+=r.slice(c,i),n.startEntity(o);const a=n.write(r,i+1);if(a<0){c=i+n.end();break}c=i+a,i=a===0?c+1:c}const s=u+r.slice(c);return u="",s}}function Wr(e,u,n,t){const r=(u&Oe.BRANCH_LENGTH)>>7,o=u&Oe.JUMP_TABLE;if(r===0)return o!==0&&t===o?n:-1;if(o){const s=t-o;return s<0||s>=r?-1:e[n+s]-1}let c=n,i=c+r-1;for(;c<=i;){const s=c+i>>>1,a=e[s];if(a<t)c=s+1;else if(a>t)i=s-1;else return e[s+r]}return-1}const Kr=Wn(Pr);Wn(zr);function Kn(e,u=Ie.Legacy){return Kr(e,u)}function Qr(e){return Object.prototype.toString.call(e)}function Hu(e){return Qr(e)==="[object String]"}const Xr=Object.prototype.hasOwnProperty;function Jr(e,u){return Xr.call(e,u)}function mu(e){return Array.prototype.slice.call(arguments,1).forEach(function(n){if(n){if(typeof n!="object")throw new TypeError(n+"must be object");Object.keys(n).forEach(function(t){e[t]=n[t]})}}),e}function Qn(e,u,n){return[].concat(e.slice(0,u),n,e.slice(u+1))}function ju(e){return!(e>=55296&&e<=57343||e>=64976&&e<=65007||(e&65535)===65535||(e&65535)===65534||e>=0&&e<=8||e===11||e>=14&&e<=31||e>=127&&e<=159||e>1114111)}function hu(e){if(e>65535){e-=65536;const u=55296+(e>>10),n=56320+(e&1023);return String.fromCharCode(u,n)}return String.fromCharCode(e)}const Xn=/\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g,Yr=/&([a-z#][a-z0-9]{1,31});/gi,e0=new RegExp(Xn.source+"|"+Yr.source,"gi"),u0=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;function n0(e,u){if(u.charCodeAt(0)===35&&u0.test(u)){const t=u[1].toLowerCase()==="x"?parseInt(u.slice(2),16):parseInt(u.slice(1),10);return ju(t)?hu(t):e}const n=Kn(e);return n!==e?n:e}function t0(e){return e.indexOf("\\")<0?e:e.replace(Xn,"$1")}function Ve(e){return e.indexOf("\\")<0&&e.indexOf("&")<0?e:e.replace(e0,function(u,n,t){return n||n0(u,t)})}const r0=/[&<>"]/,o0=/[&<>"]/g,i0={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};function c0(e){return i0[e]}function Be(e){return r0.test(e)?e.replace(o0,c0):e}const s0=/[.?*+^$[\]\\(){}|-]/g;function a0(e){return e.replace(s0,"\\$&")}function V(e){switch(e){case 9:case 32:return!0}return!1}function Qe(e){if(e>=8192&&e<=8202)return!0;switch(e){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}function Xe(e){return qu.test(e)||Zn.test(e)}function Je(e){switch(e){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function _u(e){return e=e.trim().replace(/\s+/g," "),"ẞ".toLowerCase()==="Ṿ"&&(e=e.replace(/ẞ/g,"ß")),e.toLowerCase().toUpperCase()}const l0={mdurl:Or,ucmicro:Lr},d0=Object.freeze(Object.defineProperty({__proto__:null,arrayReplaceAt:Qn,assign:mu,escapeHtml:Be,escapeRE:a0,fromCodePoint:hu,has:Jr,isMdAsciiPunct:Je,isPunctChar:Xe,isSpace:V,isString:Hu,isValidEntityCode:ju,isWhiteSpace:Qe,lib:l0,normalizeReference:_u,unescapeAll:Ve,unescapeMd:t0},Symbol.toStringTag,{value:"Module"}));function f0(e,u,n){let t,r,o,c;const i=e.posMax,s=e.pos;for(e.pos=u+1,t=1;e.pos<i;){if(o=e.src.charCodeAt(e.pos),o===93&&(t--,t===0)){r=!0;break}if(c=e.pos,e.md.inline.skipToken(e),o===91){if(c===e.pos-1)t++;else if(n)return e.pos=s,-1}}let a=-1;return r&&(a=e.pos),e.pos=s,a}function p0(e,u,n){let t,r=u;const o={ok:!1,pos:0,str:""};if(e.charCodeAt(r)===60){for(r++;r<n;){if(t=e.charCodeAt(r),t===10||t===60)return o;if(t===62)return o.pos=r+1,o.str=Ve(e.slice(u+1,r)),o.ok=!0,o;if(t===92&&r+1<n){r+=2;continue}r++}return o}let c=0;for(;r<n&&(t=e.charCodeAt(r),!(t===32||t<32||t===127));){if(t===92&&r+1<n){if(e.charCodeAt(r+1)===32)break;r+=2;continue}if(t===40&&(c++,c>32))return o;if(t===41){if(c===0)break;c--}r++}return u===r||c!==0||(o.str=Ve(e.slice(u,r)),o.pos=r,o.ok=!0),o}function h0(e,u,n,t){let r,o=u;const c={ok:!1,can_continue:!1,pos:0,str:"",marker:0};if(t)c.str=t.str,c.marker=t.marker;else{if(o>=n)return c;let i=e.charCodeAt(o);if(i!==34&&i!==39&&i!==40)return c;u++,o++,i===40&&(i=41),c.marker=i}for(;o<n;){if(r=e.charCodeAt(o),r===c.marker)return c.pos=o+1,c.str+=Ve(e.slice(u,o)),c.ok=!0,c;if(r===40&&c.marker===41)return c;r===92&&o+1<n&&o++,o++}return c.can_continue=!0,c.str+=Ve(e.slice(u,o)),c}const b0=Object.freeze(Object.defineProperty({__proto__:null,parseLinkDestination:p0,parseLinkLabel:f0,parseLinkTitle:h0},Symbol.toStringTag,{value:"Module"})),De={};De.code_inline=function(e,u,n,t,r){const o=e[u];return"<code"+r.renderAttrs(o)+">"+Be(o.content)+"</code>"};De.code_block=function(e,u,n,t,r){const o=e[u];return"<pre"+r.renderAttrs(o)+"><code>"+Be(e[u].content)+`</code></pre>
`};De.fence=function(e,u,n,t,r){const o=e[u],c=o.info?Ve(o.info).trim():"";let i="",s="";if(c){const d=c.split(/(\s+)/g);i=d[0],s=d.slice(2).join("")}let a;if(n.highlight?a=n.highlight(o.content,i,s)||Be(o.content):a=Be(o.content),a.indexOf("<pre")===0)return a+`
`;if(c){const d=o.attrIndex("class"),f=o.attrs?o.attrs.slice():[];d<0?f.push(["class",n.langPrefix+i]):(f[d]=f[d].slice(),f[d][1]+=" "+n.langPrefix+i);const g={attrs:f};return`<pre><code${r.renderAttrs(g)}>${a}</code></pre>
`}return`<pre><code${r.renderAttrs(o)}>${a}</code></pre>
`};De.image=function(e,u,n,t,r){const o=e[u];return o.attrs[o.attrIndex("alt")][1]=r.renderInlineAsText(o.children,n,t),r.renderToken(e,u,n)};De.hardbreak=function(e,u,n){return n.xhtmlOut?`<br />
`:`<br>
`};De.softbreak=function(e,u,n){return n.breaks?n.xhtmlOut?`<br />
`:`<br>
`:`
`};De.text=function(e,u){return Be(e[u].content)};De.html_block=function(e,u){return e[u].content};De.html_inline=function(e,u){return e[u].content};function We(){this.rules=mu({},De)}We.prototype.renderAttrs=function(u){let n,t,r;if(!u.attrs)return"";for(r="",n=0,t=u.attrs.length;n<t;n++)r+=" "+Be(u.attrs[n][0])+'="'+Be(u.attrs[n][1])+'"';return r};We.prototype.renderToken=function(u,n,t){const r=u[n];let o="";if(r.hidden)return"";r.block&&r.nesting!==-1&&n&&u[n-1].hidden&&(o+=`
`),o+=(r.nesting===-1?"</":"<")+r.tag,o+=this.renderAttrs(r),r.nesting===0&&t.xhtmlOut&&(o+=" /");let c=!1;if(r.block&&(c=!0,r.nesting===1&&n+1<u.length)){const i=u[n+1];(i.type==="inline"||i.hidden||i.nesting===-1&&i.tag===r.tag)&&(c=!1)}return o+=c?`>
`:">",o};We.prototype.renderInline=function(e,u,n){let t="";const r=this.rules;for(let o=0,c=e.length;o<c;o++){const i=e[o].type;typeof r[i]<"u"?t+=r[i](e,o,u,n,this):t+=this.renderToken(e,o,u)}return t};We.prototype.renderInlineAsText=function(e,u,n){let t="";for(let r=0,o=e.length;r<o;r++)switch(e[r].type){case"text":t+=e[r].content;break;case"image":t+=this.renderInlineAsText(e[r].children,u,n);break;case"html_inline":case"html_block":t+=e[r].content;break;case"softbreak":case"hardbreak":t+=`
`;break}return t};We.prototype.render=function(e,u,n){let t="";const r=this.rules;for(let o=0,c=e.length;o<c;o++){const i=e[o].type;i==="inline"?t+=this.renderInline(e[o].children,u,n):typeof r[i]<"u"?t+=r[i](e,o,u,n,this):t+=this.renderToken(e,o,u,n)}return t};function de(){this.__rules__=[],this.__cache__=null}de.prototype.__find__=function(e){for(let u=0;u<this.__rules__.length;u++)if(this.__rules__[u].name===e)return u;return-1};de.prototype.__compile__=function(){const e=this,u=[""];e.__rules__.forEach(function(n){n.enabled&&n.alt.forEach(function(t){u.indexOf(t)<0&&u.push(t)})}),e.__cache__={},u.forEach(function(n){e.__cache__[n]=[],e.__rules__.forEach(function(t){t.enabled&&(n&&t.alt.indexOf(n)<0||e.__cache__[n].push(t.fn))})})};de.prototype.at=function(e,u,n){const t=this.__find__(e),r=n||{};if(t===-1)throw new Error("Parser rule not found: "+e);this.__rules__[t].fn=u,this.__rules__[t].alt=r.alt||[],this.__cache__=null};de.prototype.before=function(e,u,n,t){const r=this.__find__(e),o=t||{};if(r===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(r,0,{name:u,enabled:!0,fn:n,alt:o.alt||[]}),this.__cache__=null};de.prototype.after=function(e,u,n,t){const r=this.__find__(e),o=t||{};if(r===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(r+1,0,{name:u,enabled:!0,fn:n,alt:o.alt||[]}),this.__cache__=null};de.prototype.push=function(e,u,n){const t=n||{};this.__rules__.push({name:e,enabled:!0,fn:u,alt:t.alt||[]}),this.__cache__=null};de.prototype.enable=function(e,u){Array.isArray(e)||(e=[e]);const n=[];return e.forEach(function(t){const r=this.__find__(t);if(r<0){if(u)return;throw new Error("Rules manager: invalid rule name "+t)}this.__rules__[r].enabled=!0,n.push(t)},this),this.__cache__=null,n};de.prototype.enableOnly=function(e,u){Array.isArray(e)||(e=[e]),this.__rules__.forEach(function(n){n.enabled=!1}),this.enable(e,u)};de.prototype.disable=function(e,u){Array.isArray(e)||(e=[e]);const n=[];return e.forEach(function(t){const r=this.__find__(t);if(r<0){if(u)return;throw new Error("Rules manager: invalid rule name "+t)}this.__rules__[r].enabled=!1,n.push(t)},this),this.__cache__=null,n};de.prototype.getRules=function(e){return this.__cache__===null&&this.__compile__(),this.__cache__[e]||[]};function xe(e,u,n){this.type=e,this.tag=u,this.attrs=null,this.map=null,this.nesting=n,this.level=0,this.children=null,this.content="",this.markup="",this.info="",this.meta=null,this.block=!1,this.hidden=!1}xe.prototype.attrIndex=function(u){if(!this.attrs)return-1;const n=this.attrs;for(let t=0,r=n.length;t<r;t++)if(n[t][0]===u)return t;return-1};xe.prototype.attrPush=function(u){this.attrs?this.attrs.push(u):this.attrs=[u]};xe.prototype.attrSet=function(u,n){const t=this.attrIndex(u),r=[u,n];t<0?this.attrPush(r):this.attrs[t]=r};xe.prototype.attrGet=function(u){const n=this.attrIndex(u);let t=null;return n>=0&&(t=this.attrs[n][1]),t};xe.prototype.attrJoin=function(u,n){const t=this.attrIndex(u);t<0?this.attrPush([u,n]):this.attrs[t][1]=this.attrs[t][1]+" "+n};function Jn(e,u,n){this.src=e,this.env=n,this.tokens=[],this.inlineMode=!1,this.md=u}Jn.prototype.Token=xe;const g0=/\r\n?|\n/g,m0=/\0/g;function _0(e){let u;u=e.src.replace(g0,`
`),u=u.replace(m0,"�"),e.src=u}function x0(e){let u;e.inlineMode?(u=new e.Token("inline","",0),u.content=e.src,u.map=[0,1],u.children=[],e.tokens.push(u)):e.md.block.parse(e.src,e.md,e.env,e.tokens)}function k0(e){const u=e.tokens;for(let n=0,t=u.length;n<t;n++){const r=u[n];r.type==="inline"&&e.md.inline.parse(r.content,e.md,e.env,r.children)}}function E0(e){return/^<a[>\s]/i.test(e)}function y0(e){return/^<\/a\s*>/i.test(e)}function v0(e){const u=e.tokens;if(e.md.options.linkify)for(let n=0,t=u.length;n<t;n++){if(u[n].type!=="inline"||!e.md.linkify.pretest(u[n].content))continue;let r=u[n].children,o=0;for(let c=r.length-1;c>=0;c--){const i=r[c];if(i.type==="link_close"){for(c--;r[c].level!==i.level&&r[c].type!=="link_open";)c--;continue}if(i.type==="html_inline"&&(E0(i.content)&&o>0&&o--,y0(i.content)&&o++),!(o>0)&&i.type==="text"&&e.md.linkify.test(i.content)){const s=i.content;let a=e.md.linkify.match(s);const d=[];let f=i.level,g=0;a.length>0&&a[0].index===0&&c>0&&r[c-1].type==="text_special"&&(a=a.slice(1));for(let b=0;b<a.length;b++){const p=a[b].url,C=e.md.normalizeLink(p);if(!e.md.validateLink(C))continue;let R=a[b].text;a[b].schema?a[b].schema==="mailto:"&&!/^mailto:/i.test(R)?R=e.md.normalizeLinkText("mailto:"+R).replace(/^mailto:/,""):R=e.md.normalizeLinkText(R):R=e.md.normalizeLinkText("http://"+R).replace(/^http:\/\//,"");const A=a[b].index;if(A>g){const w=new e.Token("text","",0);w.content=s.slice(g,A),w.level=f,d.push(w)}const m=new e.Token("link_open","a",1);m.attrs=[["href",C]],m.level=f++,m.markup="linkify",m.info="auto",d.push(m);const _=new e.Token("text","",0);_.content=R,_.level=f,d.push(_);const k=new e.Token("link_close","a",-1);k.level=--f,k.markup="linkify",k.info="auto",d.push(k),g=a[b].lastIndex}if(g<s.length){const b=new e.Token("text","",0);b.content=s.slice(g),b.level=f,d.push(b)}u[n].children=r=Qn(r,c,d)}}}}const Yn=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,A0=/\((c|tm|r)\)/i,C0=/\((c|tm|r)\)/ig,w0={c:"©",r:"®",tm:"™"};function D0(e,u){return w0[u.toLowerCase()]}function S0(e){let u=0;for(let n=e.length-1;n>=0;n--){const t=e[n];t.type==="text"&&!u&&(t.content=t.content.replace(C0,D0)),t.type==="link_open"&&t.info==="auto"&&u--,t.type==="link_close"&&t.info==="auto"&&u++}}function F0(e){let u=0;for(let n=e.length-1;n>=0;n--){const t=e[n];t.type==="text"&&!u&&Yn.test(t.content)&&(t.content=t.content.replace(/\+-/g,"±").replace(/\.{2,}/g,"…").replace(/([?!])…/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---(?=[^-]|$)/mg,"$1—").replace(/(^|\s)--(?=\s|$)/mg,"$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg,"$1–")),t.type==="link_open"&&t.info==="auto"&&u--,t.type==="link_close"&&t.info==="auto"&&u++}}function T0(e){let u;if(e.md.options.typographer)for(u=e.tokens.length-1;u>=0;u--)e.tokens[u].type==="inline"&&(A0.test(e.tokens[u].content)&&S0(e.tokens[u].children),Yn.test(e.tokens[u].content)&&F0(e.tokens[u].children))}const M0=/['"]/,wn=/['"]/g,Dn="’";function lu(e,u,n){return e.slice(0,u)+n+e.slice(u+1)}function N0(e,u){let n;const t=[];for(let r=0;r<e.length;r++){const o=e[r],c=e[r].level;for(n=t.length-1;n>=0&&!(t[n].level<=c);n--);if(t.length=n+1,o.type!=="text")continue;let i=o.content,s=0,a=i.length;e:for(;s<a;){wn.lastIndex=s;const d=wn.exec(i);if(!d)break;let f=!0,g=!0;s=d.index+1;const b=d[0]==="'";let p=32;if(d.index-1>=0)p=i.charCodeAt(d.index-1);else for(n=r-1;n>=0&&!(e[n].type==="softbreak"||e[n].type==="hardbreak");n--)if(e[n].content){p=e[n].content.charCodeAt(e[n].content.length-1);break}let C=32;if(s<a)C=i.charCodeAt(s);else for(n=r+1;n<e.length&&!(e[n].type==="softbreak"||e[n].type==="hardbreak");n++)if(e[n].content){C=e[n].content.charCodeAt(0);break}const R=Je(p)||Xe(String.fromCharCode(p)),A=Je(C)||Xe(String.fromCharCode(C)),m=Qe(p),_=Qe(C);if(_?f=!1:A&&(m||R||(f=!1)),m?g=!1:R&&(_||A||(g=!1)),C===34&&d[0]==='"'&&p>=48&&p<=57&&(g=f=!1),f&&g&&(f=R,g=A),!f&&!g){b&&(o.content=lu(o.content,d.index,Dn));continue}if(g)for(n=t.length-1;n>=0;n--){let k=t[n];if(t[n].level<c)break;if(k.single===b&&t[n].level===c){k=t[n];let w,M;b?(w=u.md.options.quotes[2],M=u.md.options.quotes[3]):(w=u.md.options.quotes[0],M=u.md.options.quotes[1]),o.content=lu(o.content,d.index,M),e[k.token].content=lu(e[k.token].content,k.pos,w),s+=M.length-1,k.token===r&&(s+=w.length-1),i=o.content,a=i.length,t.length=n;continue e}}f?t.push({token:r,pos:d.index,single:b,level:c}):g&&b&&(o.content=lu(o.content,d.index,Dn))}}}function R0(e){if(e.md.options.typographer)for(let u=e.tokens.length-1;u>=0;u--)e.tokens[u].type!=="inline"||!M0.test(e.tokens[u].content)||N0(e.tokens[u].children,e)}function I0(e){let u,n;const t=e.tokens,r=t.length;for(let o=0;o<r;o++){if(t[o].type!=="inline")continue;const c=t[o].children,i=c.length;for(u=0;u<i;u++)c[u].type==="text_special"&&(c[u].type="text");for(u=n=0;u<i;u++)c[u].type==="text"&&u+1<i&&c[u+1].type==="text"?c[u+1].content=c[u].content+c[u+1].content:(u!==n&&(c[n]=c[u]),n++);u!==n&&(c.length=n)}}const Fu=[["normalize",_0],["block",x0],["inline",k0],["linkify",v0],["replacements",T0],["smartquotes",R0],["text_join",I0]];function Gu(){this.ruler=new de;for(let e=0;e<Fu.length;e++)this.ruler.push(Fu[e][0],Fu[e][1])}Gu.prototype.process=function(e){const u=this.ruler.getRules("");for(let n=0,t=u.length;n<t;n++)u[n](e)};Gu.prototype.State=Jn;function Se(e,u,n,t){this.src=e,this.md=u,this.env=n,this.tokens=t,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType="root",this.level=0;const r=this.src;for(let o=0,c=0,i=0,s=0,a=r.length,d=!1;c<a;c++){const f=r.charCodeAt(c);if(!d)if(V(f)){i++,f===9?s+=4-s%4:s++;continue}else d=!0;(f===10||c===a-1)&&(f!==10&&c++,this.bMarks.push(o),this.eMarks.push(c),this.tShift.push(i),this.sCount.push(s),this.bsCount.push(0),d=!1,i=0,s=0,o=c+1)}this.bMarks.push(r.length),this.eMarks.push(r.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}Se.prototype.push=function(e,u,n){const t=new xe(e,u,n);return t.block=!0,n<0&&this.level--,t.level=this.level,n>0&&this.level++,this.tokens.push(t),t};Se.prototype.isEmpty=function(u){return this.bMarks[u]+this.tShift[u]>=this.eMarks[u]};Se.prototype.skipEmptyLines=function(u){for(let n=this.lineMax;u<n&&!(this.bMarks[u]+this.tShift[u]<this.eMarks[u]);u++);return u};Se.prototype.skipSpaces=function(u){for(let n=this.src.length;u<n;u++){const t=this.src.charCodeAt(u);if(!V(t))break}return u};Se.prototype.skipSpacesBack=function(u,n){if(u<=n)return u;for(;u>n;)if(!V(this.src.charCodeAt(--u)))return u+1;return u};Se.prototype.skipChars=function(u,n){for(let t=this.src.length;u<t&&this.src.charCodeAt(u)===n;u++);return u};Se.prototype.skipCharsBack=function(u,n,t){if(u<=t)return u;for(;u>t;)if(n!==this.src.charCodeAt(--u))return u+1;return u};Se.prototype.getLines=function(u,n,t,r){if(u>=n)return"";const o=new Array(n-u);for(let c=0,i=u;i<n;i++,c++){let s=0;const a=this.bMarks[i];let d=a,f;for(i+1<n||r?f=this.eMarks[i]+1:f=this.eMarks[i];d<f&&s<t;){const g=this.src.charCodeAt(d);if(V(g))g===9?s+=4-(s+this.bsCount[i])%4:s++;else if(d-a<this.tShift[i])s++;else break;d++}s>t?o[c]=new Array(s-t+1).join(" ")+this.src.slice(d,f):o[c]=this.src.slice(d,f)}return o.join("")};Se.prototype.Token=xe;const O0=65536;function Tu(e,u){const n=e.bMarks[u]+e.tShift[u],t=e.eMarks[u];return e.src.slice(n,t)}function Sn(e){const u=[],n=e.length;let t=0,r=e.charCodeAt(t),o=!1,c=0,i="";for(;t<n;)r===124&&(o?(i+=e.substring(c,t-1),c=t):(u.push(i+e.substring(c,t)),i="",c=t+1)),o=r===92,t++,r=e.charCodeAt(t);return u.push(i+e.substring(c)),u}function B0(e,u,n,t){if(u+2>n)return!1;let r=u+1;if(e.sCount[r]<e.blkIndent||e.sCount[r]-e.blkIndent>=4)return!1;let o=e.bMarks[r]+e.tShift[r];if(o>=e.eMarks[r])return!1;const c=e.src.charCodeAt(o++);if(c!==124&&c!==45&&c!==58||o>=e.eMarks[r])return!1;const i=e.src.charCodeAt(o++);if(i!==124&&i!==45&&i!==58&&!V(i)||c===45&&V(i))return!1;for(;o<e.eMarks[r];){const k=e.src.charCodeAt(o);if(k!==124&&k!==45&&k!==58&&!V(k))return!1;o++}let s=Tu(e,u+1),a=s.split("|");const d=[];for(let k=0;k<a.length;k++){const w=a[k].trim();if(!w){if(k===0||k===a.length-1)continue;return!1}if(!/^:?-+:?$/.test(w))return!1;w.charCodeAt(w.length-1)===58?d.push(w.charCodeAt(0)===58?"center":"right"):w.charCodeAt(0)===58?d.push("left"):d.push("")}if(s=Tu(e,u).trim(),s.indexOf("|")===-1||e.sCount[u]-e.blkIndent>=4)return!1;a=Sn(s),a.length&&a[0]===""&&a.shift(),a.length&&a[a.length-1]===""&&a.pop();const f=a.length;if(f===0||f!==d.length)return!1;if(t)return!0;const g=e.parentType;e.parentType="table";const b=e.md.block.ruler.getRules("blockquote"),p=e.push("table_open","table",1),C=[u,0];p.map=C;const R=e.push("thead_open","thead",1);R.map=[u,u+1];const A=e.push("tr_open","tr",1);A.map=[u,u+1];for(let k=0;k<a.length;k++){const w=e.push("th_open","th",1);d[k]&&(w.attrs=[["style","text-align:"+d[k]]]);const M=e.push("inline","",0);M.content=a[k].trim(),M.children=[],e.push("th_close","th",-1)}e.push("tr_close","tr",-1),e.push("thead_close","thead",-1);let m,_=0;for(r=u+2;r<n&&!(e.sCount[r]<e.blkIndent);r++){let k=!1;for(let M=0,H=b.length;M<H;M++)if(b[M](e,r,n,!0)){k=!0;break}if(k||(s=Tu(e,r).trim(),!s)||e.sCount[r]-e.blkIndent>=4||(a=Sn(s),a.length&&a[0]===""&&a.shift(),a.length&&a[a.length-1]===""&&a.pop(),_+=f-a.length,_>O0))break;if(r===u+2){const M=e.push("tbody_open","tbody",1);M.map=m=[u+2,0]}const w=e.push("tr_open","tr",1);w.map=[r,r+1];for(let M=0;M<f;M++){const H=e.push("td_open","td",1);d[M]&&(H.attrs=[["style","text-align:"+d[M]]]);const N=e.push("inline","",0);N.content=a[M]?a[M].trim():"",N.children=[],e.push("td_close","td",-1)}e.push("tr_close","tr",-1)}return m&&(e.push("tbody_close","tbody",-1),m[1]=r),e.push("table_close","table",-1),C[1]=r,e.parentType=g,e.line=r,!0}function L0(e,u,n){if(e.sCount[u]-e.blkIndent<4)return!1;let t=u+1,r=t;for(;t<n;){if(e.isEmpty(t)){t++;continue}if(e.sCount[t]-e.blkIndent>=4){t++,r=t;continue}break}e.line=r;const o=e.push("code_block","code",0);return o.content=e.getLines(u,r,4+e.blkIndent,!1)+`
`,o.map=[u,e.line],!0}function P0(e,u,n,t){let r=e.bMarks[u]+e.tShift[u],o=e.eMarks[u];if(e.sCount[u]-e.blkIndent>=4||r+3>o)return!1;const c=e.src.charCodeAt(r);if(c!==126&&c!==96)return!1;let i=r;r=e.skipChars(r,c);let s=r-i;if(s<3)return!1;const a=e.src.slice(i,r),d=e.src.slice(r,o);if(c===96&&d.indexOf(String.fromCharCode(c))>=0)return!1;if(t)return!0;let f=u,g=!1;for(;f++,!(f>=n||(r=i=e.bMarks[f]+e.tShift[f],o=e.eMarks[f],r<o&&e.sCount[f]<e.blkIndent));)if(e.src.charCodeAt(r)===c&&!(e.sCount[f]-e.blkIndent>=4)&&(r=e.skipChars(r,c),!(r-i<s)&&(r=e.skipSpaces(r),!(r<o)))){g=!0;break}s=e.sCount[u],e.line=f+(g?1:0);const b=e.push("fence","code",0);return b.info=d,b.content=e.getLines(u+1,f,s,!0),b.markup=a,b.map=[u,e.line],!0}function z0(e,u,n,t){let r=e.bMarks[u]+e.tShift[u],o=e.eMarks[u];const c=e.lineMax;if(e.sCount[u]-e.blkIndent>=4||e.src.charCodeAt(r)!==62)return!1;if(t)return!0;const i=[],s=[],a=[],d=[],f=e.md.block.ruler.getRules("blockquote"),g=e.parentType;e.parentType="blockquote";let b=!1,p;for(p=u;p<n;p++){const _=e.sCount[p]<e.blkIndent;if(r=e.bMarks[p]+e.tShift[p],o=e.eMarks[p],r>=o)break;if(e.src.charCodeAt(r++)===62&&!_){let w=e.sCount[p]+1,M,H;e.src.charCodeAt(r)===32?(r++,w++,H=!1,M=!0):e.src.charCodeAt(r)===9?(M=!0,(e.bsCount[p]+w)%4===3?(r++,w++,H=!1):H=!0):M=!1;let N=w;for(i.push(e.bMarks[p]),e.bMarks[p]=r;r<o;){const E=e.src.charCodeAt(r);if(V(E))E===9?N+=4-(N+e.bsCount[p]+(H?1:0))%4:N++;else break;r++}b=r>=o,s.push(e.bsCount[p]),e.bsCount[p]=e.sCount[p]+1+(M?1:0),a.push(e.sCount[p]),e.sCount[p]=N-w,d.push(e.tShift[p]),e.tShift[p]=r-e.bMarks[p];continue}if(b)break;let k=!1;for(let w=0,M=f.length;w<M;w++)if(f[w](e,p,n,!0)){k=!0;break}if(k){e.lineMax=p,e.blkIndent!==0&&(i.push(e.bMarks[p]),s.push(e.bsCount[p]),d.push(e.tShift[p]),a.push(e.sCount[p]),e.sCount[p]-=e.blkIndent);break}i.push(e.bMarks[p]),s.push(e.bsCount[p]),d.push(e.tShift[p]),a.push(e.sCount[p]),e.sCount[p]=-1}const C=e.blkIndent;e.blkIndent=0;const R=e.push("blockquote_open","blockquote",1);R.markup=">";const A=[u,0];R.map=A,e.md.block.tokenize(e,u,p);const m=e.push("blockquote_close","blockquote",-1);m.markup=">",e.lineMax=c,e.parentType=g,A[1]=e.line;for(let _=0;_<d.length;_++)e.bMarks[_+u]=i[_],e.tShift[_+u]=d[_],e.sCount[_+u]=a[_],e.bsCount[_+u]=s[_];return e.blkIndent=C,!0}function U0(e,u,n,t){const r=e.eMarks[u];if(e.sCount[u]-e.blkIndent>=4)return!1;let o=e.bMarks[u]+e.tShift[u];const c=e.src.charCodeAt(o++);if(c!==42&&c!==45&&c!==95)return!1;let i=1;for(;o<r;){const a=e.src.charCodeAt(o++);if(a!==c&&!V(a))return!1;a===c&&i++}if(i<3)return!1;if(t)return!0;e.line=u+1;const s=e.push("hr","hr",0);return s.map=[u,e.line],s.markup=Array(i+1).join(String.fromCharCode(c)),!0}function Fn(e,u){const n=e.eMarks[u];let t=e.bMarks[u]+e.tShift[u];const r=e.src.charCodeAt(t++);if(r!==42&&r!==45&&r!==43)return-1;if(t<n){const o=e.src.charCodeAt(t);if(!V(o))return-1}return t}function Tn(e,u){const n=e.bMarks[u]+e.tShift[u],t=e.eMarks[u];let r=n;if(r+1>=t)return-1;let o=e.src.charCodeAt(r++);if(o<48||o>57)return-1;for(;;){if(r>=t)return-1;if(o=e.src.charCodeAt(r++),o>=48&&o<=57){if(r-n>=10)return-1;continue}if(o===41||o===46)break;return-1}return r<t&&(o=e.src.charCodeAt(r),!V(o))?-1:r}function $0(e,u){const n=e.level+2;for(let t=u+2,r=e.tokens.length-2;t<r;t++)e.tokens[t].level===n&&e.tokens[t].type==="paragraph_open"&&(e.tokens[t+2].hidden=!0,e.tokens[t].hidden=!0,t+=2)}function q0(e,u,n,t){let r,o,c,i,s=u,a=!0;if(e.sCount[s]-e.blkIndent>=4||e.listIndent>=0&&e.sCount[s]-e.listIndent>=4&&e.sCount[s]<e.blkIndent)return!1;let d=!1;t&&e.parentType==="paragraph"&&e.sCount[s]>=e.blkIndent&&(d=!0);let f,g,b;if((b=Tn(e,s))>=0){if(f=!0,c=e.bMarks[s]+e.tShift[s],g=Number(e.src.slice(c,b-1)),d&&g!==1)return!1}else if((b=Fn(e,s))>=0)f=!1;else return!1;if(d&&e.skipSpaces(b)>=e.eMarks[s])return!1;if(t)return!0;const p=e.src.charCodeAt(b-1),C=e.tokens.length;f?(i=e.push("ordered_list_open","ol",1),g!==1&&(i.attrs=[["start",g]])):i=e.push("bullet_list_open","ul",1);const R=[s,0];i.map=R,i.markup=String.fromCharCode(p);let A=!1;const m=e.md.block.ruler.getRules("list"),_=e.parentType;for(e.parentType="list";s<n;){o=b,r=e.eMarks[s];const k=e.sCount[s]+b-(e.bMarks[s]+e.tShift[s]);let w=k;for(;o<r;){const J=e.src.charCodeAt(o);if(J===9)w+=4-(w+e.bsCount[s])%4;else if(J===32)w++;else break;o++}const M=o;let H;M>=r?H=1:H=w-k,H>4&&(H=1);const N=k+H;i=e.push("list_item_open","li",1),i.markup=String.fromCharCode(p);const E=[s,0];i.map=E,f&&(i.info=e.src.slice(c,b-1));const I=e.tight,P=e.tShift[s],W=e.sCount[s],ue=e.listIndent;if(e.listIndent=e.blkIndent,e.blkIndent=N,e.tight=!0,e.tShift[s]=M-e.bMarks[s],e.sCount[s]=w,M>=r&&e.isEmpty(s+1)?e.line=Math.min(e.line+2,n):e.md.block.tokenize(e,s,n,!0),(!e.tight||A)&&(a=!1),A=e.line-s>1&&e.isEmpty(e.line-1),e.blkIndent=e.listIndent,e.listIndent=ue,e.tShift[s]=P,e.sCount[s]=W,e.tight=I,i=e.push("list_item_close","li",-1),i.markup=String.fromCharCode(p),s=e.line,E[1]=s,s>=n||e.sCount[s]<e.blkIndent||e.sCount[s]-e.blkIndent>=4)break;let K=!1;for(let J=0,le=m.length;J<le;J++)if(m[J](e,s,n,!0)){K=!0;break}if(K)break;if(f){if(b=Tn(e,s),b<0)break;c=e.bMarks[s]+e.tShift[s]}else if(b=Fn(e,s),b<0)break;if(p!==e.src.charCodeAt(b-1))break}return f?i=e.push("ordered_list_close","ol",-1):i=e.push("bullet_list_close","ul",-1),i.markup=String.fromCharCode(p),R[1]=s,e.line=s,e.parentType=_,a&&$0(e,C),!0}function H0(e,u,n,t){let r=e.bMarks[u]+e.tShift[u],o=e.eMarks[u],c=u+1;if(e.sCount[u]-e.blkIndent>=4||e.src.charCodeAt(r)!==91)return!1;function i(m){const _=e.lineMax;if(m>=_||e.isEmpty(m))return null;let k=!1;if(e.sCount[m]-e.blkIndent>3&&(k=!0),e.sCount[m]<0&&(k=!0),!k){const H=e.md.block.ruler.getRules("reference"),N=e.parentType;e.parentType="reference";let E=!1;for(let I=0,P=H.length;I<P;I++)if(H[I](e,m,_,!0)){E=!0;break}if(e.parentType=N,E)return null}const w=e.bMarks[m]+e.tShift[m],M=e.eMarks[m];return e.src.slice(w,M+1)}let s=e.src.slice(r,o+1);o=s.length;let a=-1;for(r=1;r<o;r++){const m=s.charCodeAt(r);if(m===91)return!1;if(m===93){a=r;break}else if(m===10){const _=i(c);_!==null&&(s+=_,o=s.length,c++)}else if(m===92&&(r++,r<o&&s.charCodeAt(r)===10)){const _=i(c);_!==null&&(s+=_,o=s.length,c++)}}if(a<0||s.charCodeAt(a+1)!==58)return!1;for(r=a+2;r<o;r++){const m=s.charCodeAt(r);if(m===10){const _=i(c);_!==null&&(s+=_,o=s.length,c++)}else if(!V(m))break}const d=e.md.helpers.parseLinkDestination(s,r,o);if(!d.ok)return!1;const f=e.md.normalizeLink(d.str);if(!e.md.validateLink(f))return!1;r=d.pos;const g=r,b=c,p=r;for(;r<o;r++){const m=s.charCodeAt(r);if(m===10){const _=i(c);_!==null&&(s+=_,o=s.length,c++)}else if(!V(m))break}let C=e.md.helpers.parseLinkTitle(s,r,o);for(;C.can_continue;){const m=i(c);if(m===null)break;s+=m,r=o,o=s.length,c++,C=e.md.helpers.parseLinkTitle(s,r,o,C)}let R;for(r<o&&p!==r&&C.ok?(R=C.str,r=C.pos):(R="",r=g,c=b);r<o;){const m=s.charCodeAt(r);if(!V(m))break;r++}if(r<o&&s.charCodeAt(r)!==10&&R)for(R="",r=g,c=b;r<o;){const m=s.charCodeAt(r);if(!V(m))break;r++}if(r<o&&s.charCodeAt(r)!==10)return!1;const A=_u(s.slice(1,a));return A?(t||(typeof e.env.references>"u"&&(e.env.references={}),typeof e.env.references[A]>"u"&&(e.env.references[A]={title:R,href:f}),e.line=c),!0):!1}const j0=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],G0="[a-zA-Z_:][a-zA-Z0-9:._-]*",Z0="[^\"'=<>`\\x00-\\x20]+",V0="'[^']*'",W0='"[^"]*"',K0="(?:"+Z0+"|"+V0+"|"+W0+")",Q0="(?:\\s+"+G0+"(?:\\s*=\\s*"+K0+")?)",et="<[A-Za-z][A-Za-z0-9\\-]*"+Q0+"*\\s*\\/?>",ut="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",X0="<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->",J0="<[?][\\s\\S]*?[?]>",Y0="<![A-Za-z][^>]*>",eo="<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",uo=new RegExp("^(?:"+et+"|"+ut+"|"+X0+"|"+J0+"|"+Y0+"|"+eo+")"),no=new RegExp("^(?:"+et+"|"+ut+")"),je=[[/^<(script|pre|style|textarea)(?=(\s|>|$))/i,/<\/(script|pre|style|textarea)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+j0.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(no.source+"\\s*$"),/^$/,!1]];function to(e,u,n,t){let r=e.bMarks[u]+e.tShift[u],o=e.eMarks[u];if(e.sCount[u]-e.blkIndent>=4||!e.md.options.html||e.src.charCodeAt(r)!==60)return!1;let c=e.src.slice(r,o),i=0;for(;i<je.length&&!je[i][0].test(c);i++);if(i===je.length)return!1;if(t)return je[i][2];let s=u+1;if(!je[i][1].test(c)){for(;s<n&&!(e.sCount[s]<e.blkIndent);s++)if(r=e.bMarks[s]+e.tShift[s],o=e.eMarks[s],c=e.src.slice(r,o),je[i][1].test(c)){c.length!==0&&s++;break}}e.line=s;const a=e.push("html_block","",0);return a.map=[u,s],a.content=e.getLines(u,s,e.blkIndent,!0),!0}function ro(e,u,n,t){let r=e.bMarks[u]+e.tShift[u],o=e.eMarks[u];if(e.sCount[u]-e.blkIndent>=4)return!1;let c=e.src.charCodeAt(r);if(c!==35||r>=o)return!1;let i=1;for(c=e.src.charCodeAt(++r);c===35&&r<o&&i<=6;)i++,c=e.src.charCodeAt(++r);if(i>6||r<o&&!V(c))return!1;if(t)return!0;o=e.skipSpacesBack(o,r);const s=e.skipCharsBack(o,35,r);s>r&&V(e.src.charCodeAt(s-1))&&(o=s),e.line=u+1;const a=e.push("heading_open","h"+String(i),1);a.markup="########".slice(0,i),a.map=[u,e.line];const d=e.push("inline","",0);d.content=e.src.slice(r,o).trim(),d.map=[u,e.line],d.children=[];const f=e.push("heading_close","h"+String(i),-1);return f.markup="########".slice(0,i),!0}function oo(e,u,n){const t=e.md.block.ruler.getRules("paragraph");if(e.sCount[u]-e.blkIndent>=4)return!1;const r=e.parentType;e.parentType="paragraph";let o=0,c,i=u+1;for(;i<n&&!e.isEmpty(i);i++){if(e.sCount[i]-e.blkIndent>3)continue;if(e.sCount[i]>=e.blkIndent){let b=e.bMarks[i]+e.tShift[i];const p=e.eMarks[i];if(b<p&&(c=e.src.charCodeAt(b),(c===45||c===61)&&(b=e.skipChars(b,c),b=e.skipSpaces(b),b>=p))){o=c===61?1:2;break}}if(e.sCount[i]<0)continue;let g=!1;for(let b=0,p=t.length;b<p;b++)if(t[b](e,i,n,!0)){g=!0;break}if(g)break}if(!o)return!1;const s=e.getLines(u,i,e.blkIndent,!1).trim();e.line=i+1;const a=e.push("heading_open","h"+String(o),1);a.markup=String.fromCharCode(c),a.map=[u,e.line];const d=e.push("inline","",0);d.content=s,d.map=[u,e.line-1],d.children=[];const f=e.push("heading_close","h"+String(o),-1);return f.markup=String.fromCharCode(c),e.parentType=r,!0}function io(e,u,n){const t=e.md.block.ruler.getRules("paragraph"),r=e.parentType;let o=u+1;for(e.parentType="paragraph";o<n&&!e.isEmpty(o);o++){if(e.sCount[o]-e.blkIndent>3||e.sCount[o]<0)continue;let a=!1;for(let d=0,f=t.length;d<f;d++)if(t[d](e,o,n,!0)){a=!0;break}if(a)break}const c=e.getLines(u,o,e.blkIndent,!1).trim();e.line=o;const i=e.push("paragraph_open","p",1);i.map=[u,e.line];const s=e.push("inline","",0);return s.content=c,s.map=[u,e.line],s.children=[],e.push("paragraph_close","p",-1),e.parentType=r,!0}const du=[["table",B0,["paragraph","reference"]],["code",L0],["fence",P0,["paragraph","reference","blockquote","list"]],["blockquote",z0,["paragraph","reference","blockquote","list"]],["hr",U0,["paragraph","reference","blockquote","list"]],["list",q0,["paragraph","reference","blockquote"]],["reference",H0],["html_block",to,["paragraph","reference","blockquote"]],["heading",ro,["paragraph","reference","blockquote"]],["lheading",oo],["paragraph",io]];function xu(){this.ruler=new de;for(let e=0;e<du.length;e++)this.ruler.push(du[e][0],du[e][1],{alt:(du[e][2]||[]).slice()})}xu.prototype.tokenize=function(e,u,n){const t=this.ruler.getRules(""),r=t.length,o=e.md.options.maxNesting;let c=u,i=!1;for(;c<n&&(e.line=c=e.skipEmptyLines(c),!(c>=n||e.sCount[c]<e.blkIndent));){if(e.level>=o){e.line=n;break}const s=e.line;let a=!1;for(let d=0;d<r;d++)if(a=t[d](e,c,n,!1),a){if(s>=e.line)throw new Error("block rule didn't increment state.line");break}if(!a)throw new Error("none of the block rules matched");e.tight=!i,e.isEmpty(e.line-1)&&(i=!0),c=e.line,c<n&&e.isEmpty(c)&&(i=!0,c++,e.line=c)}};xu.prototype.parse=function(e,u,n,t){if(!e)return;const r=new this.State(e,u,n,t);this.tokenize(r,r.line,r.lineMax)};xu.prototype.State=Se;function uu(e,u,n,t){this.src=e,this.env=n,this.md=u,this.tokens=t,this.tokens_meta=Array(t.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[],this.backticks={},this.backticksScanned=!1,this.linkLevel=0}uu.prototype.pushPending=function(){const e=new xe("text","",0);return e.content=this.pending,e.level=this.pendingLevel,this.tokens.push(e),this.pending="",e};uu.prototype.push=function(e,u,n){this.pending&&this.pushPending();const t=new xe(e,u,n);let r=null;return n<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),t.level=this.level,n>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],r={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(t),this.tokens_meta.push(r),t};uu.prototype.scanDelims=function(e,u){const n=this.posMax,t=this.src.charCodeAt(e),r=e>0?this.src.charCodeAt(e-1):32;let o=e;for(;o<n&&this.src.charCodeAt(o)===t;)o++;const c=o-e,i=o<n?this.src.charCodeAt(o):32,s=Je(r)||Xe(String.fromCharCode(r)),a=Je(i)||Xe(String.fromCharCode(i)),d=Qe(r),f=Qe(i),g=!f&&(!a||d||s),b=!d&&(!s||f||a);return{can_open:g&&(u||!b||s),can_close:b&&(u||!g||a),length:c}};uu.prototype.Token=xe;function co(e){switch(e){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}function so(e,u){let n=e.pos;for(;n<e.posMax&&!co(e.src.charCodeAt(n));)n++;return n===e.pos?!1:(u||(e.pending+=e.src.slice(e.pos,n)),e.pos=n,!0)}const ao=/(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;function lo(e,u){if(!e.md.options.linkify||e.linkLevel>0)return!1;const n=e.pos,t=e.posMax;if(n+3>t||e.src.charCodeAt(n)!==58||e.src.charCodeAt(n+1)!==47||e.src.charCodeAt(n+2)!==47)return!1;const r=e.pending.match(ao);if(!r)return!1;const o=r[1],c=e.md.linkify.matchAtStart(e.src.slice(n-o.length));if(!c)return!1;let i=c.url;if(i.length<=o.length)return!1;let s=i.length;for(;s>0&&i.charCodeAt(s-1)===42;)s--;s!==i.length&&(i=i.slice(0,s));const a=e.md.normalizeLink(i);if(!e.md.validateLink(a))return!1;if(!u){e.pending=e.pending.slice(0,-o.length);const d=e.push("link_open","a",1);d.attrs=[["href",a]],d.markup="linkify",d.info="auto";const f=e.push("text","",0);f.content=e.md.normalizeLinkText(i);const g=e.push("link_close","a",-1);g.markup="linkify",g.info="auto"}return e.pos+=i.length-o.length,!0}function fo(e,u){let n=e.pos;if(e.src.charCodeAt(n)!==10)return!1;const t=e.pending.length-1,r=e.posMax;if(!u)if(t>=0&&e.pending.charCodeAt(t)===32)if(t>=1&&e.pending.charCodeAt(t-1)===32){let o=t-1;for(;o>=1&&e.pending.charCodeAt(o-1)===32;)o--;e.pending=e.pending.slice(0,o),e.push("hardbreak","br",0)}else e.pending=e.pending.slice(0,-1),e.push("softbreak","br",0);else e.push("softbreak","br",0);for(n++;n<r&&V(e.src.charCodeAt(n));)n++;return e.pos=n,!0}const Zu=[];for(let e=0;e<256;e++)Zu.push(0);"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e){Zu[e.charCodeAt(0)]=1});function po(e,u){let n=e.pos;const t=e.posMax;if(e.src.charCodeAt(n)!==92||(n++,n>=t))return!1;let r=e.src.charCodeAt(n);if(r===10){for(u||e.push("hardbreak","br",0),n++;n<t&&(r=e.src.charCodeAt(n),!!V(r));)n++;return e.pos=n,!0}let o=e.src[n];if(r>=55296&&r<=56319&&n+1<t){const i=e.src.charCodeAt(n+1);i>=56320&&i<=57343&&(o+=e.src[n+1],n++)}const c="\\"+o;if(!u){const i=e.push("text_special","",0);r<256&&Zu[r]!==0?i.content=o:i.content=c,i.markup=c,i.info="escape"}return e.pos=n+1,!0}function ho(e,u){let n=e.pos;if(e.src.charCodeAt(n)!==96)return!1;const r=n;n++;const o=e.posMax;for(;n<o&&e.src.charCodeAt(n)===96;)n++;const c=e.src.slice(r,n),i=c.length;if(e.backticksScanned&&(e.backticks[i]||0)<=r)return u||(e.pending+=c),e.pos+=i,!0;let s=n,a;for(;(a=e.src.indexOf("`",s))!==-1;){for(s=a+1;s<o&&e.src.charCodeAt(s)===96;)s++;const d=s-a;if(d===i){if(!u){const f=e.push("code_inline","code",0);f.markup=c,f.content=e.src.slice(n,a).replace(/\n/g," ").replace(/^ (.+) $/,"$1")}return e.pos=s,!0}e.backticks[d]=a}return e.backticksScanned=!0,u||(e.pending+=c),e.pos+=i,!0}function bo(e,u){const n=e.pos,t=e.src.charCodeAt(n);if(u||t!==126)return!1;const r=e.scanDelims(e.pos,!0);let o=r.length;const c=String.fromCharCode(t);if(o<2)return!1;let i;o%2&&(i=e.push("text","",0),i.content=c,o--);for(let s=0;s<o;s+=2)i=e.push("text","",0),i.content=c+c,e.delimiters.push({marker:t,length:0,token:e.tokens.length-1,end:-1,open:r.can_open,close:r.can_close});return e.pos+=r.length,!0}function Mn(e,u){let n;const t=[],r=u.length;for(let o=0;o<r;o++){const c=u[o];if(c.marker!==126||c.end===-1)continue;const i=u[c.end];n=e.tokens[c.token],n.type="s_open",n.tag="s",n.nesting=1,n.markup="~~",n.content="",n=e.tokens[i.token],n.type="s_close",n.tag="s",n.nesting=-1,n.markup="~~",n.content="",e.tokens[i.token-1].type==="text"&&e.tokens[i.token-1].content==="~"&&t.push(i.token-1)}for(;t.length;){const o=t.pop();let c=o+1;for(;c<e.tokens.length&&e.tokens[c].type==="s_close";)c++;c--,o!==c&&(n=e.tokens[c],e.tokens[c]=e.tokens[o],e.tokens[o]=n)}}function go(e){const u=e.tokens_meta,n=e.tokens_meta.length;Mn(e,e.delimiters);for(let t=0;t<n;t++)u[t]&&u[t].delimiters&&Mn(e,u[t].delimiters)}const nt={tokenize:bo,postProcess:go};function mo(e,u){const n=e.pos,t=e.src.charCodeAt(n);if(u||t!==95&&t!==42)return!1;const r=e.scanDelims(e.pos,t===42);for(let o=0;o<r.length;o++){const c=e.push("text","",0);c.content=String.fromCharCode(t),e.delimiters.push({marker:t,length:r.length,token:e.tokens.length-1,end:-1,open:r.can_open,close:r.can_close})}return e.pos+=r.length,!0}function Nn(e,u){const n=u.length;for(let t=n-1;t>=0;t--){const r=u[t];if(r.marker!==95&&r.marker!==42||r.end===-1)continue;const o=u[r.end],c=t>0&&u[t-1].end===r.end+1&&u[t-1].marker===r.marker&&u[t-1].token===r.token-1&&u[r.end+1].token===o.token+1,i=String.fromCharCode(r.marker),s=e.tokens[r.token];s.type=c?"strong_open":"em_open",s.tag=c?"strong":"em",s.nesting=1,s.markup=c?i+i:i,s.content="";const a=e.tokens[o.token];a.type=c?"strong_close":"em_close",a.tag=c?"strong":"em",a.nesting=-1,a.markup=c?i+i:i,a.content="",c&&(e.tokens[u[t-1].token].content="",e.tokens[u[r.end+1].token].content="",t--)}}function _o(e){const u=e.tokens_meta,n=e.tokens_meta.length;Nn(e,e.delimiters);for(let t=0;t<n;t++)u[t]&&u[t].delimiters&&Nn(e,u[t].delimiters)}const tt={tokenize:mo,postProcess:_o};function xo(e,u){let n,t,r,o,c="",i="",s=e.pos,a=!0;if(e.src.charCodeAt(e.pos)!==91)return!1;const d=e.pos,f=e.posMax,g=e.pos+1,b=e.md.helpers.parseLinkLabel(e,e.pos,!0);if(b<0)return!1;let p=b+1;if(p<f&&e.src.charCodeAt(p)===40){for(a=!1,p++;p<f&&(n=e.src.charCodeAt(p),!(!V(n)&&n!==10));p++);if(p>=f)return!1;if(s=p,r=e.md.helpers.parseLinkDestination(e.src,p,e.posMax),r.ok){for(c=e.md.normalizeLink(r.str),e.md.validateLink(c)?p=r.pos:c="",s=p;p<f&&(n=e.src.charCodeAt(p),!(!V(n)&&n!==10));p++);if(r=e.md.helpers.parseLinkTitle(e.src,p,e.posMax),p<f&&s!==p&&r.ok)for(i=r.str,p=r.pos;p<f&&(n=e.src.charCodeAt(p),!(!V(n)&&n!==10));p++);}(p>=f||e.src.charCodeAt(p)!==41)&&(a=!0),p++}if(a){if(typeof e.env.references>"u")return!1;if(p<f&&e.src.charCodeAt(p)===91?(s=p+1,p=e.md.helpers.parseLinkLabel(e,p),p>=0?t=e.src.slice(s,p++):p=b+1):p=b+1,t||(t=e.src.slice(g,b)),o=e.env.references[_u(t)],!o)return e.pos=d,!1;c=o.href,i=o.title}if(!u){e.pos=g,e.posMax=b;const C=e.push("link_open","a",1),R=[["href",c]];C.attrs=R,i&&R.push(["title",i]),e.linkLevel++,e.md.inline.tokenize(e),e.linkLevel--,e.push("link_close","a",-1)}return e.pos=p,e.posMax=f,!0}function ko(e,u){let n,t,r,o,c,i,s,a,d="";const f=e.pos,g=e.posMax;if(e.src.charCodeAt(e.pos)!==33||e.src.charCodeAt(e.pos+1)!==91)return!1;const b=e.pos+2,p=e.md.helpers.parseLinkLabel(e,e.pos+1,!1);if(p<0)return!1;if(o=p+1,o<g&&e.src.charCodeAt(o)===40){for(o++;o<g&&(n=e.src.charCodeAt(o),!(!V(n)&&n!==10));o++);if(o>=g)return!1;for(a=o,i=e.md.helpers.parseLinkDestination(e.src,o,e.posMax),i.ok&&(d=e.md.normalizeLink(i.str),e.md.validateLink(d)?o=i.pos:d=""),a=o;o<g&&(n=e.src.charCodeAt(o),!(!V(n)&&n!==10));o++);if(i=e.md.helpers.parseLinkTitle(e.src,o,e.posMax),o<g&&a!==o&&i.ok)for(s=i.str,o=i.pos;o<g&&(n=e.src.charCodeAt(o),!(!V(n)&&n!==10));o++);else s="";if(o>=g||e.src.charCodeAt(o)!==41)return e.pos=f,!1;o++}else{if(typeof e.env.references>"u")return!1;if(o<g&&e.src.charCodeAt(o)===91?(a=o+1,o=e.md.helpers.parseLinkLabel(e,o),o>=0?r=e.src.slice(a,o++):o=p+1):o=p+1,r||(r=e.src.slice(b,p)),c=e.env.references[_u(r)],!c)return e.pos=f,!1;d=c.href,s=c.title}if(!u){t=e.src.slice(b,p);const C=[];e.md.inline.parse(t,e.md,e.env,C);const R=e.push("image","img",0),A=[["src",d],["alt",""]];R.attrs=A,R.children=C,R.content=t,s&&A.push(["title",s])}return e.pos=o,e.posMax=g,!0}const Eo=/^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,yo=/^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;function vo(e,u){let n=e.pos;if(e.src.charCodeAt(n)!==60)return!1;const t=e.pos,r=e.posMax;for(;;){if(++n>=r)return!1;const c=e.src.charCodeAt(n);if(c===60)return!1;if(c===62)break}const o=e.src.slice(t+1,n);if(yo.test(o)){const c=e.md.normalizeLink(o);if(!e.md.validateLink(c))return!1;if(!u){const i=e.push("link_open","a",1);i.attrs=[["href",c]],i.markup="autolink",i.info="auto";const s=e.push("text","",0);s.content=e.md.normalizeLinkText(o);const a=e.push("link_close","a",-1);a.markup="autolink",a.info="auto"}return e.pos+=o.length+2,!0}if(Eo.test(o)){const c=e.md.normalizeLink("mailto:"+o);if(!e.md.validateLink(c))return!1;if(!u){const i=e.push("link_open","a",1);i.attrs=[["href",c]],i.markup="autolink",i.info="auto";const s=e.push("text","",0);s.content=e.md.normalizeLinkText(o);const a=e.push("link_close","a",-1);a.markup="autolink",a.info="auto"}return e.pos+=o.length+2,!0}return!1}function Ao(e){return/^<a[>\s]/i.test(e)}function Co(e){return/^<\/a\s*>/i.test(e)}function wo(e){const u=e|32;return u>=97&&u<=122}function Do(e,u){if(!e.md.options.html)return!1;const n=e.posMax,t=e.pos;if(e.src.charCodeAt(t)!==60||t+2>=n)return!1;const r=e.src.charCodeAt(t+1);if(r!==33&&r!==63&&r!==47&&!wo(r))return!1;const o=e.src.slice(t).match(uo);if(!o)return!1;if(!u){const c=e.push("html_inline","",0);c.content=o[0],Ao(c.content)&&e.linkLevel++,Co(c.content)&&e.linkLevel--}return e.pos+=o[0].length,!0}const So=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,Fo=/^&([a-z][a-z0-9]{1,31});/i;function To(e,u){const n=e.pos,t=e.posMax;if(e.src.charCodeAt(n)!==38||n+1>=t)return!1;if(e.src.charCodeAt(n+1)===35){const o=e.src.slice(n).match(So);if(o){if(!u){const c=o[1][0].toLowerCase()==="x"?parseInt(o[1].slice(1),16):parseInt(o[1],10),i=e.push("text_special","",0);i.content=ju(c)?hu(c):hu(65533),i.markup=o[0],i.info="entity"}return e.pos+=o[0].length,!0}}else{const o=e.src.slice(n).match(Fo);if(o){const c=Kn(o[0]);if(c!==o[0]){if(!u){const i=e.push("text_special","",0);i.content=c,i.markup=o[0],i.info="entity"}return e.pos+=o[0].length,!0}}}return!1}function Rn(e){const u={},n=e.length;if(!n)return;let t=0,r=-2;const o=[];for(let c=0;c<n;c++){const i=e[c];if(o.push(0),(e[t].marker!==i.marker||r!==i.token-1)&&(t=c),r=i.token,i.length=i.length||0,!i.close)continue;u.hasOwnProperty(i.marker)||(u[i.marker]=[-1,-1,-1,-1,-1,-1]);const s=u[i.marker][(i.open?3:0)+i.length%3];let a=t-o[t]-1,d=a;for(;a>s;a-=o[a]+1){const f=e[a];if(f.marker===i.marker&&f.open&&f.end<0){let g=!1;if((f.close||i.open)&&(f.length+i.length)%3===0&&(f.length%3!==0||i.length%3!==0)&&(g=!0),!g){const b=a>0&&!e[a-1].open?o[a-1]+1:0;o[c]=c-a+b,o[a]=b,i.open=!1,f.end=c,f.close=!1,d=-1,r=-2;break}}}d!==-1&&(u[i.marker][(i.open?3:0)+(i.length||0)%3]=d)}}function Mo(e){const u=e.tokens_meta,n=e.tokens_meta.length;Rn(e.delimiters);for(let t=0;t<n;t++)u[t]&&u[t].delimiters&&Rn(u[t].delimiters)}function No(e){let u,n,t=0;const r=e.tokens,o=e.tokens.length;for(u=n=0;u<o;u++)r[u].nesting<0&&t--,r[u].level=t,r[u].nesting>0&&t++,r[u].type==="text"&&u+1<o&&r[u+1].type==="text"?r[u+1].content=r[u].content+r[u+1].content:(u!==n&&(r[n]=r[u]),n++);u!==n&&(r.length=n)}const Mu=[["text",so],["linkify",lo],["newline",fo],["escape",po],["backticks",ho],["strikethrough",nt.tokenize],["emphasis",tt.tokenize],["link",xo],["image",ko],["autolink",vo],["html_inline",Do],["entity",To]],Nu=[["balance_pairs",Mo],["strikethrough",nt.postProcess],["emphasis",tt.postProcess],["fragments_join",No]];function nu(){this.ruler=new de;for(let e=0;e<Mu.length;e++)this.ruler.push(Mu[e][0],Mu[e][1]);this.ruler2=new de;for(let e=0;e<Nu.length;e++)this.ruler2.push(Nu[e][0],Nu[e][1])}nu.prototype.skipToken=function(e){const u=e.pos,n=this.ruler.getRules(""),t=n.length,r=e.md.options.maxNesting,o=e.cache;if(typeof o[u]<"u"){e.pos=o[u];return}let c=!1;if(e.level<r){for(let i=0;i<t;i++)if(e.level++,c=n[i](e,!0),e.level--,c){if(u>=e.pos)throw new Error("inline rule didn't increment state.pos");break}}else e.pos=e.posMax;c||e.pos++,o[u]=e.pos};nu.prototype.tokenize=function(e){const u=this.ruler.getRules(""),n=u.length,t=e.posMax,r=e.md.options.maxNesting;for(;e.pos<t;){const o=e.pos;let c=!1;if(e.level<r){for(let i=0;i<n;i++)if(c=u[i](e,!1),c){if(o>=e.pos)throw new Error("inline rule didn't increment state.pos");break}}if(c){if(e.pos>=t)break;continue}e.pending+=e.src[e.pos++]}e.pending&&e.pushPending()};nu.prototype.parse=function(e,u,n,t){const r=new this.State(e,u,n,t);this.tokenize(r);const o=this.ruler2.getRules(""),c=o.length;for(let i=0;i<c;i++)o[i](r)};nu.prototype.State=uu;function Ro(e){const u={};e=e||{},u.src_Any=jn.source,u.src_Cc=Gn.source,u.src_Z=Vn.source,u.src_P=qu.source,u.src_ZPCc=[u.src_Z,u.src_P,u.src_Cc].join("|"),u.src_ZCc=[u.src_Z,u.src_Cc].join("|");const n="[><｜]";return u.src_pseudo_letter="(?:(?!"+n+"|"+u.src_ZPCc+")"+u.src_Any+")",u.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",u.src_auth="(?:(?:(?!"+u.src_ZCc+"|[@/\\[\\]()]).)+@)?",u.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",u.src_host_terminator="(?=$|"+n+"|"+u.src_ZPCc+")(?!"+(e["---"]?"-(?!--)|":"-|")+"_|:\\d|\\.-|\\.(?!$|"+u.src_ZPCc+"))",u.src_path="(?:[/?#](?:(?!"+u.src_ZCc+"|"+n+`|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!`+u.src_ZCc+"|\\]).)*\\]|\\((?:(?!"+u.src_ZCc+"|[)]).)*\\)|\\{(?:(?!"+u.src_ZCc+'|[}]).)*\\}|\\"(?:(?!'+u.src_ZCc+`|["]).)+\\"|\\'(?:(?!`+u.src_ZCc+"|[']).)+\\'|\\'(?="+u.src_pseudo_letter+"|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!"+u.src_ZCc+"|[.]|$)|"+(e["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+",(?!"+u.src_ZCc+"|$)|;(?!"+u.src_ZCc+"|$)|\\!+(?!"+u.src_ZCc+"|[!]|$)|\\?(?!"+u.src_ZCc+"|[?]|$))+|\\/)?",u.src_email_name='[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*',u.src_xn="xn--[a-z0-9\\-]{1,59}",u.src_domain_root="(?:"+u.src_xn+"|"+u.src_pseudo_letter+"{1,63})",u.src_domain="(?:"+u.src_xn+"|(?:"+u.src_pseudo_letter+")|(?:"+u.src_pseudo_letter+"(?:-|"+u.src_pseudo_letter+"){0,61}"+u.src_pseudo_letter+"))",u.src_host="(?:(?:(?:(?:"+u.src_domain+")\\.)*"+u.src_domain+"))",u.tpl_host_fuzzy="(?:"+u.src_ip4+"|(?:(?:(?:"+u.src_domain+")\\.)+(?:%TLDS%)))",u.tpl_host_no_ip_fuzzy="(?:(?:(?:"+u.src_domain+")\\.)+(?:%TLDS%))",u.src_host_strict=u.src_host+u.src_host_terminator,u.tpl_host_fuzzy_strict=u.tpl_host_fuzzy+u.src_host_terminator,u.src_host_port_strict=u.src_host+u.src_port+u.src_host_terminator,u.tpl_host_port_fuzzy_strict=u.tpl_host_fuzzy+u.src_port+u.src_host_terminator,u.tpl_host_port_no_ip_fuzzy_strict=u.tpl_host_no_ip_fuzzy+u.src_port+u.src_host_terminator,u.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+u.src_ZPCc+"|>|$))",u.tpl_email_fuzzy="(^|"+n+'|"|\\(|'+u.src_ZCc+")("+u.src_email_name+"@"+u.tpl_host_fuzzy_strict+")",u.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+u.src_ZPCc+"))((?![$+<=>^`|｜])"+u.tpl_host_port_fuzzy_strict+u.src_path+")",u.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+u.src_ZPCc+"))((?![$+<=>^`|｜])"+u.tpl_host_port_no_ip_fuzzy_strict+u.src_path+")",u}function Pu(e){return Array.prototype.slice.call(arguments,1).forEach(function(n){n&&Object.keys(n).forEach(function(t){e[t]=n[t]})}),e}function ku(e){return Object.prototype.toString.call(e)}function Io(e){return ku(e)==="[object String]"}function Oo(e){return ku(e)==="[object Object]"}function Bo(e){return ku(e)==="[object RegExp]"}function In(e){return ku(e)==="[object Function]"}function Lo(e){return e.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}const rt={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function Po(e){return Object.keys(e||{}).reduce(function(u,n){return u||rt.hasOwnProperty(n)},!1)}const zo={"http:":{validate:function(e,u,n){const t=e.slice(u);return n.re.http||(n.re.http=new RegExp("^\\/\\/"+n.re.src_auth+n.re.src_host_port_strict+n.re.src_path,"i")),n.re.http.test(t)?t.match(n.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(e,u,n){const t=e.slice(u);return n.re.no_http||(n.re.no_http=new RegExp("^"+n.re.src_auth+"(?:localhost|(?:(?:"+n.re.src_domain+")\\.)+"+n.re.src_domain_root+")"+n.re.src_port+n.re.src_host_terminator+n.re.src_path,"i")),n.re.no_http.test(t)?u>=3&&e[u-3]===":"||u>=3&&e[u-3]==="/"?0:t.match(n.re.no_http)[0].length:0}},"mailto:":{validate:function(e,u,n){const t=e.slice(u);return n.re.mailto||(n.re.mailto=new RegExp("^"+n.re.src_email_name+"@"+n.re.src_host_strict,"i")),n.re.mailto.test(t)?t.match(n.re.mailto)[0].length:0}}},Uo="a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",$o="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");function qo(e){e.__index__=-1,e.__text_cache__=""}function Ho(e){return function(u,n){const t=u.slice(n);return e.test(t)?t.match(e)[0].length:0}}function On(){return function(e,u){u.normalize(e)}}function bu(e){const u=e.re=Ro(e.__opts__),n=e.__tlds__.slice();e.onCompile(),e.__tlds_replaced__||n.push(Uo),n.push(u.src_xn),u.src_tlds=n.join("|");function t(i){return i.replace("%TLDS%",u.src_tlds)}u.email_fuzzy=RegExp(t(u.tpl_email_fuzzy),"i"),u.link_fuzzy=RegExp(t(u.tpl_link_fuzzy),"i"),u.link_no_ip_fuzzy=RegExp(t(u.tpl_link_no_ip_fuzzy),"i"),u.host_fuzzy_test=RegExp(t(u.tpl_host_fuzzy_test),"i");const r=[];e.__compiled__={};function o(i,s){throw new Error('(LinkifyIt) Invalid schema "'+i+'": '+s)}Object.keys(e.__schemas__).forEach(function(i){const s=e.__schemas__[i];if(s===null)return;const a={validate:null,link:null};if(e.__compiled__[i]=a,Oo(s)){Bo(s.validate)?a.validate=Ho(s.validate):In(s.validate)?a.validate=s.validate:o(i,s),In(s.normalize)?a.normalize=s.normalize:s.normalize?o(i,s):a.normalize=On();return}if(Io(s)){r.push(i);return}o(i,s)}),r.forEach(function(i){e.__compiled__[e.__schemas__[i]]&&(e.__compiled__[i].validate=e.__compiled__[e.__schemas__[i]].validate,e.__compiled__[i].normalize=e.__compiled__[e.__schemas__[i]].normalize)}),e.__compiled__[""]={validate:null,normalize:On()};const c=Object.keys(e.__compiled__).filter(function(i){return i.length>0&&e.__compiled__[i]}).map(Lo).join("|");e.re.schema_test=RegExp("(^|(?!_)(?:[><｜]|"+u.src_ZPCc+"))("+c+")","i"),e.re.schema_search=RegExp("(^|(?!_)(?:[><｜]|"+u.src_ZPCc+"))("+c+")","ig"),e.re.schema_at_start=RegExp("^"+e.re.schema_search.source,"i"),e.re.pretest=RegExp("("+e.re.schema_test.source+")|("+e.re.host_fuzzy_test.source+")|@","i"),qo(e)}function jo(e,u){const n=e.__index__,t=e.__last_index__,r=e.__text_cache__.slice(n,t);this.schema=e.__schema__.toLowerCase(),this.index=n+u,this.lastIndex=t+u,this.raw=r,this.text=r,this.url=r}function zu(e,u){const n=new jo(e,u);return e.__compiled__[n.schema].normalize(n,e),n}function he(e,u){if(!(this instanceof he))return new he(e,u);u||Po(e)&&(u=e,e={}),this.__opts__=Pu({},rt,u),this.__index__=-1,this.__last_index__=-1,this.__schema__="",this.__text_cache__="",this.__schemas__=Pu({},zo,e),this.__compiled__={},this.__tlds__=$o,this.__tlds_replaced__=!1,this.re={},bu(this)}he.prototype.add=function(u,n){return this.__schemas__[u]=n,bu(this),this};he.prototype.set=function(u){return this.__opts__=Pu(this.__opts__,u),this};he.prototype.test=function(u){if(this.__text_cache__=u,this.__index__=-1,!u.length)return!1;let n,t,r,o,c,i,s,a,d;if(this.re.schema_test.test(u)){for(s=this.re.schema_search,s.lastIndex=0;(n=s.exec(u))!==null;)if(o=this.testSchemaAt(u,n[2],s.lastIndex),o){this.__schema__=n[2],this.__index__=n.index+n[1].length,this.__last_index__=n.index+n[0].length+o;break}}return this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&(a=u.search(this.re.host_fuzzy_test),a>=0&&(this.__index__<0||a<this.__index__)&&(t=u.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))!==null&&(c=t.index+t[1].length,(this.__index__<0||c<this.__index__)&&(this.__schema__="",this.__index__=c,this.__last_index__=t.index+t[0].length))),this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&(d=u.indexOf("@"),d>=0&&(r=u.match(this.re.email_fuzzy))!==null&&(c=r.index+r[1].length,i=r.index+r[0].length,(this.__index__<0||c<this.__index__||c===this.__index__&&i>this.__last_index__)&&(this.__schema__="mailto:",this.__index__=c,this.__last_index__=i))),this.__index__>=0};he.prototype.pretest=function(u){return this.re.pretest.test(u)};he.prototype.testSchemaAt=function(u,n,t){return this.__compiled__[n.toLowerCase()]?this.__compiled__[n.toLowerCase()].validate(u,t,this):0};he.prototype.match=function(u){const n=[];let t=0;this.__index__>=0&&this.__text_cache__===u&&(n.push(zu(this,t)),t=this.__last_index__);let r=t?u.slice(t):u;for(;this.test(r);)n.push(zu(this,t)),r=r.slice(this.__last_index__),t+=this.__last_index__;return n.length?n:null};he.prototype.matchAtStart=function(u){if(this.__text_cache__=u,this.__index__=-1,!u.length)return null;const n=this.re.schema_at_start.exec(u);if(!n)return null;const t=this.testSchemaAt(u,n[2],n[0].length);return t?(this.__schema__=n[2],this.__index__=n.index+n[1].length,this.__last_index__=n.index+n[0].length+t,zu(this,0)):null};he.prototype.tlds=function(u,n){return u=Array.isArray(u)?u:[u],n?(this.__tlds__=this.__tlds__.concat(u).sort().filter(function(t,r,o){return t!==o[r-1]}).reverse(),bu(this),this):(this.__tlds__=u.slice(),this.__tlds_replaced__=!0,bu(this),this)};he.prototype.normalize=function(u){u.schema||(u.url="http://"+u.url),u.schema==="mailto:"&&!/^mailto:/i.test(u.url)&&(u.url="mailto:"+u.url)};he.prototype.onCompile=function(){};const Ge=2147483647,Ce=36,Vu=1,Ye=26,Go=38,Zo=700,ot=72,it=128,ct="-",Vo=/^xn--/,Wo=/[^\0-\x7F]/,Ko=/[\x2E\u3002\uFF0E\uFF61]/g,Qo={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},Ru=Ce-Vu,we=Math.floor,Iu=String.fromCharCode;function Re(e){throw new RangeError(Qo[e])}function Xo(e,u){const n=[];let t=e.length;for(;t--;)n[t]=u(e[t]);return n}function st(e,u){const n=e.split("@");let t="";n.length>1&&(t=n[0]+"@",e=n[1]),e=e.replace(Ko,".");const r=e.split("."),o=Xo(r,u).join(".");return t+o}function at(e){const u=[];let n=0;const t=e.length;for(;n<t;){const r=e.charCodeAt(n++);if(r>=55296&&r<=56319&&n<t){const o=e.charCodeAt(n++);(o&64512)==56320?u.push(((r&1023)<<10)+(o&1023)+65536):(u.push(r),n--)}else u.push(r)}return u}const Jo=e=>String.fromCodePoint(...e),Yo=function(e){return e>=48&&e<58?26+(e-48):e>=65&&e<91?e-65:e>=97&&e<123?e-97:Ce},Bn=function(e,u){return e+22+75*(e<26)-((u!=0)<<5)},lt=function(e,u,n){let t=0;for(e=n?we(e/Zo):e>>1,e+=we(e/u);e>Ru*Ye>>1;t+=Ce)e=we(e/Ru);return we(t+(Ru+1)*e/(e+Go))},dt=function(e){const u=[],n=e.length;let t=0,r=it,o=ot,c=e.lastIndexOf(ct);c<0&&(c=0);for(let i=0;i<c;++i)e.charCodeAt(i)>=128&&Re("not-basic"),u.push(e.charCodeAt(i));for(let i=c>0?c+1:0;i<n;){const s=t;for(let d=1,f=Ce;;f+=Ce){i>=n&&Re("invalid-input");const g=Yo(e.charCodeAt(i++));g>=Ce&&Re("invalid-input"),g>we((Ge-t)/d)&&Re("overflow"),t+=g*d;const b=f<=o?Vu:f>=o+Ye?Ye:f-o;if(g<b)break;const p=Ce-b;d>we(Ge/p)&&Re("overflow"),d*=p}const a=u.length+1;o=lt(t-s,a,s==0),we(t/a)>Ge-r&&Re("overflow"),r+=we(t/a),t%=a,u.splice(t++,0,r)}return String.fromCodePoint(...u)},ft=function(e){const u=[];e=at(e);const n=e.length;let t=it,r=0,o=ot;for(const s of e)s<128&&u.push(Iu(s));const c=u.length;let i=c;for(c&&u.push(ct);i<n;){let s=Ge;for(const d of e)d>=t&&d<s&&(s=d);const a=i+1;s-t>we((Ge-r)/a)&&Re("overflow"),r+=(s-t)*a,t=s;for(const d of e)if(d<t&&++r>Ge&&Re("overflow"),d===t){let f=r;for(let g=Ce;;g+=Ce){const b=g<=o?Vu:g>=o+Ye?Ye:g-o;if(f<b)break;const p=f-b,C=Ce-b;u.push(Iu(Bn(b+p%C,0))),f=we(p/C)}u.push(Iu(Bn(f,0))),o=lt(r,a,i===c),r=0,++i}++r,++t}return u.join("")},ei=function(e){return st(e,function(u){return Vo.test(u)?dt(u.slice(4).toLowerCase()):u})},ui=function(e){return st(e,function(u){return Wo.test(u)?"xn--"+ft(u):u})},pt={version:"2.3.1",ucs2:{decode:at,encode:Jo},decode:dt,encode:ft,toASCII:ui,toUnicode:ei},ni={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}},ti={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["paragraph"]},inline:{rules:["text"],rules2:["balance_pairs","fragments_join"]}}},ri={options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["blockquote","code","fence","heading","hr","html_block","lheading","list","reference","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","html_inline","image","link","newline","text"],rules2:["balance_pairs","emphasis","fragments_join"]}}},oi={default:ni,zero:ti,commonmark:ri},ii=/^(vbscript|javascript|file|data):/,ci=/^data:image\/(gif|png|jpeg|webp);/;function si(e){const u=e.trim().toLowerCase();return ii.test(u)?ci.test(u):!0}const ht=["http:","https:","mailto:"];function ai(e){const u=$u(e,!0);if(u.hostname&&(!u.protocol||ht.indexOf(u.protocol)>=0))try{u.hostname=pt.toASCII(u.hostname)}catch{}return eu(Uu(u))}function li(e){const u=$u(e,!0);if(u.hostname&&(!u.protocol||ht.indexOf(u.protocol)>=0))try{u.hostname=pt.toUnicode(u.hostname)}catch{}return Ze(Uu(u),Ze.defaultChars+"%")}function be(e,u){if(!(this instanceof be))return new be(e,u);u||Hu(e)||(u=e||{},e="default"),this.inline=new nu,this.block=new xu,this.core=new Gu,this.renderer=new We,this.linkify=new he,this.validateLink=si,this.normalizeLink=ai,this.normalizeLinkText=li,this.utils=d0,this.helpers=mu({},b0),this.options={},this.configure(e),u&&this.set(u)}be.prototype.set=function(e){return mu(this.options,e),this};be.prototype.configure=function(e){const u=this;if(Hu(e)){const n=e;if(e=oi[n],!e)throw new Error('Wrong `markdown-it` preset "'+n+'", check name')}if(!e)throw new Error("Wrong `markdown-it` preset, can't be empty");return e.options&&u.set(e.options),e.components&&Object.keys(e.components).forEach(function(n){e.components[n].rules&&u[n].ruler.enableOnly(e.components[n].rules),e.components[n].rules2&&u[n].ruler2.enableOnly(e.components[n].rules2)}),this};be.prototype.enable=function(e,u){let n=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(r){n=n.concat(this[r].ruler.enable(e,!0))},this),n=n.concat(this.inline.ruler2.enable(e,!0));const t=e.filter(function(r){return n.indexOf(r)<0});if(t.length&&!u)throw new Error("MarkdownIt. Failed to enable unknown rule(s): "+t);return this};be.prototype.disable=function(e,u){let n=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(r){n=n.concat(this[r].ruler.disable(e,!0))},this),n=n.concat(this.inline.ruler2.disable(e,!0));const t=e.filter(function(r){return n.indexOf(r)<0});if(t.length&&!u)throw new Error("MarkdownIt. Failed to disable unknown rule(s): "+t);return this};be.prototype.use=function(e){const u=[this].concat(Array.prototype.slice.call(arguments,1));return e.apply(e,u),this};be.prototype.parse=function(e,u){if(typeof e!="string")throw new Error("Input data should be a String");const n=new this.core.State(e,this,u);return this.core.process(n),n.tokens};be.prototype.render=function(e,u){return u=u||{},this.renderer.render(this.parse(e,u),this.options,u)};be.prototype.parseInline=function(e,u){const n=new this.core.State(e,this,u);return n.inlineMode=!0,this.core.process(n),n.tokens};be.prototype.renderInline=function(e,u){return u=u||{},this.renderer.render(this.parseInline(e,u),this.options,u)};function di(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ou,Ln;function fi(){if(Ln)return Ou;Ln=1;function e(l){return l instanceof Map?l.clear=l.delete=l.set=function(){throw new Error("map is read-only")}:l instanceof Set&&(l.add=l.clear=l.delete=function(){throw new Error("set is read-only")}),Object.freeze(l),Object.getOwnPropertyNames(l).forEach(h=>{const y=l[h],B=typeof y;(B==="object"||B==="function")&&!Object.isFrozen(y)&&e(y)}),l}class u{constructor(h){h.data===void 0&&(h.data={}),this.data=h.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function n(l){return l.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function t(l,...h){const y=Object.create(null);for(const B in l)y[B]=l[B];return h.forEach(function(B){for(const Y in B)y[Y]=B[Y]}),y}const r="</span>",o=l=>!!l.scope,c=(l,{prefix:h})=>{if(l.startsWith("language:"))return l.replace("language:","language-");if(l.includes(".")){const y=l.split(".");return[`${h}${y.shift()}`,...y.map((B,Y)=>`${B}${"_".repeat(Y+1)}`)].join(" ")}return`${h}${l}`};class i{constructor(h,y){this.buffer="",this.classPrefix=y.classPrefix,h.walk(this)}addText(h){this.buffer+=n(h)}openNode(h){if(!o(h))return;const y=c(h.scope,{prefix:this.classPrefix});this.span(y)}closeNode(h){o(h)&&(this.buffer+=r)}value(){return this.buffer}span(h){this.buffer+=`<span class="${h}">`}}const s=(l={})=>{const h={children:[]};return Object.assign(h,l),h};class a{constructor(){this.rootNode=s(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(h){this.top.children.push(h)}openNode(h){const y=s({scope:h});this.add(y),this.stack.push(y)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(h){return this.constructor._walk(h,this.rootNode)}static _walk(h,y){return typeof y=="string"?h.addText(y):y.children&&(h.openNode(y),y.children.forEach(B=>this._walk(h,B)),h.closeNode(y)),h}static _collapse(h){typeof h!="string"&&h.children&&(h.children.every(y=>typeof y=="string")?h.children=[h.children.join("")]:h.children.forEach(y=>{a._collapse(y)}))}}class d extends a{constructor(h){super(),this.options=h}addText(h){h!==""&&this.add(h)}startScope(h){this.openNode(h)}endScope(){this.closeNode()}__addSublanguage(h,y){const B=h.root;y&&(B.scope=`language:${y}`),this.add(B)}toHTML(){return new i(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function f(l){return l?typeof l=="string"?l:l.source:null}function g(l){return C("(?=",l,")")}function b(l){return C("(?:",l,")*")}function p(l){return C("(?:",l,")?")}function C(...l){return l.map(y=>f(y)).join("")}function R(l){const h=l[l.length-1];return typeof h=="object"&&h.constructor===Object?(l.splice(l.length-1,1),h):{}}function A(...l){return"("+(R(l).capture?"":"?:")+l.map(B=>f(B)).join("|")+")"}function m(l){return new RegExp(l.toString()+"|").exec("").length-1}function _(l,h){const y=l&&l.exec(h);return y&&y.index===0}const k=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function w(l,{joinWith:h}){let y=0;return l.map(B=>{y+=1;const Y=y;let ee=f(B),S="";for(;ee.length>0;){const D=k.exec(ee);if(!D){S+=ee;break}S+=ee.substring(0,D.index),ee=ee.substring(D.index+D[0].length),D[0][0]==="\\"&&D[1]?S+="\\"+String(Number(D[1])+Y):(S+=D[0],D[0]==="("&&y++)}return S}).map(B=>`(${B})`).join(h)}const M=/\b\B/,H="[a-zA-Z]\\w*",N="[a-zA-Z_]\\w*",E="\\b\\d+(\\.\\d+)?",I="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",P="\\b(0b[01]+)",W="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",ue=(l={})=>{const h=/^#![ ]*\//;return l.binary&&(l.begin=C(h,/.*\b/,l.binary,/\b.*/)),t({scope:"meta",begin:h,end:/$/,relevance:0,"on:begin":(y,B)=>{y.index!==0&&B.ignoreMatch()}},l)},K={begin:"\\\\[\\s\\S]",relevance:0},J={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[K]},le={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[K]},ke={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},$=function(l,h,y={}){const B=t({scope:"comment",begin:l,end:h,contains:[]},y);B.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const Y=A("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return B.contains.push({begin:C(/[ ]+/,"(",Y,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),B},ce=$("//","$"),fe=$("/\\*","\\*/"),ge=$("#","$"),Fe={scope:"number",begin:E,relevance:0},Le={scope:"number",begin:I,relevance:0},Ct={scope:"number",begin:P,relevance:0},wt={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[K,{begin:/\[/,end:/\]/,relevance:0,contains:[K]}]},Dt={scope:"title",begin:H,relevance:0},St={scope:"title",begin:N,relevance:0},Ft={begin:"\\.\\s*"+N,relevance:0};var tu=Object.freeze({__proto__:null,APOS_STRING_MODE:J,BACKSLASH_ESCAPE:K,BINARY_NUMBER_MODE:Ct,BINARY_NUMBER_RE:P,COMMENT:$,C_BLOCK_COMMENT_MODE:fe,C_LINE_COMMENT_MODE:ce,C_NUMBER_MODE:Le,C_NUMBER_RE:I,END_SAME_AS_BEGIN:function(l){return Object.assign(l,{"on:begin":(h,y)=>{y.data._beginMatch=h[1]},"on:end":(h,y)=>{y.data._beginMatch!==h[1]&&y.ignoreMatch()}})},HASH_COMMENT_MODE:ge,IDENT_RE:H,MATCH_NOTHING_RE:M,METHOD_GUARD:Ft,NUMBER_MODE:Fe,NUMBER_RE:E,PHRASAL_WORDS_MODE:ke,QUOTE_STRING_MODE:le,REGEXP_MODE:wt,RE_STARTERS_RE:W,SHEBANG:ue,TITLE_MODE:Dt,UNDERSCORE_IDENT_RE:N,UNDERSCORE_TITLE_MODE:St});function Tt(l,h){l.input[l.index-1]==="."&&h.ignoreMatch()}function Mt(l,h){l.className!==void 0&&(l.scope=l.className,delete l.className)}function Nt(l,h){h&&l.beginKeywords&&(l.begin="\\b("+l.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",l.__beforeBegin=Tt,l.keywords=l.keywords||l.beginKeywords,delete l.beginKeywords,l.relevance===void 0&&(l.relevance=0))}function Rt(l,h){Array.isArray(l.illegal)&&(l.illegal=A(...l.illegal))}function It(l,h){if(l.match){if(l.begin||l.end)throw new Error("begin & end are not supported with match");l.begin=l.match,delete l.match}}function Ot(l,h){l.relevance===void 0&&(l.relevance=1)}const Bt=(l,h)=>{if(!l.beforeMatch)return;if(l.starts)throw new Error("beforeMatch cannot be used with starts");const y=Object.assign({},l);Object.keys(l).forEach(B=>{delete l[B]}),l.keywords=y.keywords,l.begin=C(y.beforeMatch,g(y.begin)),l.starts={relevance:0,contains:[Object.assign(y,{endsParent:!0})]},l.relevance=0,delete y.beforeMatch},Lt=["of","and","for","in","not","or","if","then","parent","list","value"],Pt="keyword";function Wu(l,h,y=Pt){const B=Object.create(null);return typeof l=="string"?Y(y,l.split(" ")):Array.isArray(l)?Y(y,l):Object.keys(l).forEach(function(ee){Object.assign(B,Wu(l[ee],h,ee))}),B;function Y(ee,S){h&&(S=S.map(D=>D.toLowerCase())),S.forEach(function(D){const O=D.split("|");B[O[0]]=[ee,zt(O[0],O[1])]})}}function zt(l,h){return h?Number(h):Ut(l)?0:1}function Ut(l){return Lt.includes(l.toLowerCase())}const Ku={},Pe=l=>{console.error(l)},Qu=(l,...h)=>{console.log(`WARN: ${l}`,...h)},qe=(l,h)=>{Ku[`${l}/${h}`]||(console.log(`Deprecated as of ${l}. ${h}`),Ku[`${l}/${h}`]=!0)},ru=new Error;function Xu(l,h,{key:y}){let B=0;const Y=l[y],ee={},S={};for(let D=1;D<=h.length;D++)S[D+B]=Y[D],ee[D+B]=!0,B+=m(h[D-1]);l[y]=S,l[y]._emit=ee,l[y]._multi=!0}function $t(l){if(Array.isArray(l.begin)){if(l.skip||l.excludeBegin||l.returnBegin)throw Pe("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),ru;if(typeof l.beginScope!="object"||l.beginScope===null)throw Pe("beginScope must be object"),ru;Xu(l,l.begin,{key:"beginScope"}),l.begin=w(l.begin,{joinWith:""})}}function qt(l){if(Array.isArray(l.end)){if(l.skip||l.excludeEnd||l.returnEnd)throw Pe("skip, excludeEnd, returnEnd not compatible with endScope: {}"),ru;if(typeof l.endScope!="object"||l.endScope===null)throw Pe("endScope must be object"),ru;Xu(l,l.end,{key:"endScope"}),l.end=w(l.end,{joinWith:""})}}function Ht(l){l.scope&&typeof l.scope=="object"&&l.scope!==null&&(l.beginScope=l.scope,delete l.scope)}function jt(l){Ht(l),typeof l.beginScope=="string"&&(l.beginScope={_wrap:l.beginScope}),typeof l.endScope=="string"&&(l.endScope={_wrap:l.endScope}),$t(l),qt(l)}function Gt(l){function h(S,D){return new RegExp(f(S),"m"+(l.case_insensitive?"i":"")+(l.unicodeRegex?"u":"")+(D?"g":""))}class y{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(D,O){O.position=this.position++,this.matchIndexes[this.matchAt]=O,this.regexes.push([O,D]),this.matchAt+=m(D)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const D=this.regexes.map(O=>O[1]);this.matcherRe=h(w(D,{joinWith:"|"}),!0),this.lastIndex=0}exec(D){this.matcherRe.lastIndex=this.lastIndex;const O=this.matcherRe.exec(D);if(!O)return null;const re=O.findIndex((Ke,yu)=>yu>0&&Ke!==void 0),ne=this.matchIndexes[re];return O.splice(0,re),Object.assign(O,ne)}}class B{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(D){if(this.multiRegexes[D])return this.multiRegexes[D];const O=new y;return this.rules.slice(D).forEach(([re,ne])=>O.addRule(re,ne)),O.compile(),this.multiRegexes[D]=O,O}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(D,O){this.rules.push([D,O]),O.type==="begin"&&this.count++}exec(D){const O=this.getMatcher(this.regexIndex);O.lastIndex=this.lastIndex;let re=O.exec(D);if(this.resumingScanAtSamePosition()&&!(re&&re.index===this.lastIndex)){const ne=this.getMatcher(0);ne.lastIndex=this.lastIndex+1,re=ne.exec(D)}return re&&(this.regexIndex+=re.position+1,this.regexIndex===this.count&&this.considerAll()),re}}function Y(S){const D=new B;return S.contains.forEach(O=>D.addRule(O.begin,{rule:O,type:"begin"})),S.terminatorEnd&&D.addRule(S.terminatorEnd,{type:"end"}),S.illegal&&D.addRule(S.illegal,{type:"illegal"}),D}function ee(S,D){const O=S;if(S.isCompiled)return O;[Mt,It,jt,Bt].forEach(ne=>ne(S,D)),l.compilerExtensions.forEach(ne=>ne(S,D)),S.__beforeBegin=null,[Nt,Rt,Ot].forEach(ne=>ne(S,D)),S.isCompiled=!0;let re=null;return typeof S.keywords=="object"&&S.keywords.$pattern&&(S.keywords=Object.assign({},S.keywords),re=S.keywords.$pattern,delete S.keywords.$pattern),re=re||/\w+/,S.keywords&&(S.keywords=Wu(S.keywords,l.case_insensitive)),O.keywordPatternRe=h(re,!0),D&&(S.begin||(S.begin=/\B|\b/),O.beginRe=h(O.begin),!S.end&&!S.endsWithParent&&(S.end=/\B|\b/),S.end&&(O.endRe=h(O.end)),O.terminatorEnd=f(O.end)||"",S.endsWithParent&&D.terminatorEnd&&(O.terminatorEnd+=(S.end?"|":"")+D.terminatorEnd)),S.illegal&&(O.illegalRe=h(S.illegal)),S.contains||(S.contains=[]),S.contains=[].concat(...S.contains.map(function(ne){return Zt(ne==="self"?S:ne)})),S.contains.forEach(function(ne){ee(ne,O)}),S.starts&&ee(S.starts,D),O.matcher=Y(O),O}if(l.compilerExtensions||(l.compilerExtensions=[]),l.contains&&l.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return l.classNameAliases=t(l.classNameAliases||{}),ee(l)}function Ju(l){return l?l.endsWithParent||Ju(l.starts):!1}function Zt(l){return l.variants&&!l.cachedVariants&&(l.cachedVariants=l.variants.map(function(h){return t(l,{variants:null},h)})),l.cachedVariants?l.cachedVariants:Ju(l)?t(l,{starts:l.starts?t(l.starts):null}):Object.isFrozen(l)?t(l):l}var Vt="11.11.1";class Wt extends Error{constructor(h,y){super(h),this.name="HTMLInjectionError",this.html=y}}const Eu=n,Yu=t,en=Symbol("nomatch"),Kt=7,un=function(l){const h=Object.create(null),y=Object.create(null),B=[];let Y=!0;const ee="Could not find the language '{}', did you forget to load/include a language module?",S={disableAutodetect:!0,name:"Plain text",contains:[]};let D={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:d};function O(x){return D.noHighlightRe.test(x)}function re(x){let T=x.className+" ";T+=x.parentNode?x.parentNode.className:"";const q=D.languageDetectRe.exec(T);if(q){const G=Me(q[1]);return G||(Qu(ee.replace("{}",q[1])),Qu("Falling back to no-highlight mode for this block.",x)),G?q[1]:"no-highlight"}return T.split(/\s+/).find(G=>O(G)||Me(G))}function ne(x,T,q){let G="",te="";typeof T=="object"?(G=x,q=T.ignoreIllegals,te=T.language):(qe("10.7.0","highlight(lang, code, ...args) has been deprecated."),qe("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),te=x,G=T),q===void 0&&(q=!0);const me={code:G,language:te};iu("before:highlight",me);const Ne=me.result?me.result:Ke(me.language,me.code,q);return Ne.code=me.code,iu("after:highlight",Ne),Ne}function Ke(x,T,q,G){const te=Object.create(null);function me(v,F){return v.keywords[F]}function Ne(){if(!L.keywords){se.addText(Z);return}let v=0;L.keywordPatternRe.lastIndex=0;let F=L.keywordPatternRe.exec(Z),z="";for(;F;){z+=Z.substring(v,F.index);const j=ye.case_insensitive?F[0].toLowerCase():F[0],ae=me(L,j);if(ae){const[Te,fr]=ae;if(se.addText(z),z="",te[j]=(te[j]||0)+1,te[j]<=Kt&&(au+=fr),Te.startsWith("_"))z+=F[0];else{const pr=ye.classNameAliases[Te]||Te;Ee(F[0],pr)}}else z+=F[0];v=L.keywordPatternRe.lastIndex,F=L.keywordPatternRe.exec(Z)}z+=Z.substring(v),se.addText(z)}function cu(){if(Z==="")return;let v=null;if(typeof L.subLanguage=="string"){if(!h[L.subLanguage]){se.addText(Z);return}v=Ke(L.subLanguage,Z,!0,ln[L.subLanguage]),ln[L.subLanguage]=v._top}else v=vu(Z,L.subLanguage.length?L.subLanguage:null);L.relevance>0&&(au+=v.relevance),se.__addSublanguage(v._emitter,v.language)}function pe(){L.subLanguage!=null?cu():Ne(),Z=""}function Ee(v,F){v!==""&&(se.startScope(F),se.addText(v),se.endScope())}function on(v,F){let z=1;const j=F.length-1;for(;z<=j;){if(!v._emit[z]){z++;continue}const ae=ye.classNameAliases[v[z]]||v[z],Te=F[z];ae?Ee(Te,ae):(Z=Te,Ne(),Z=""),z++}}function cn(v,F){return v.scope&&typeof v.scope=="string"&&se.openNode(ye.classNameAliases[v.scope]||v.scope),v.beginScope&&(v.beginScope._wrap?(Ee(Z,ye.classNameAliases[v.beginScope._wrap]||v.beginScope._wrap),Z=""):v.beginScope._multi&&(on(v.beginScope,F),Z="")),L=Object.create(v,{parent:{value:L}}),L}function sn(v,F,z){let j=_(v.endRe,z);if(j){if(v["on:end"]){const ae=new u(v);v["on:end"](F,ae),ae.isMatchIgnored&&(j=!1)}if(j){for(;v.endsParent&&v.parent;)v=v.parent;return v}}if(v.endsWithParent)return sn(v.parent,F,z)}function cr(v){return L.matcher.regexIndex===0?(Z+=v[0],1):(Du=!0,0)}function sr(v){const F=v[0],z=v.rule,j=new u(z),ae=[z.__beforeBegin,z["on:begin"]];for(const Te of ae)if(Te&&(Te(v,j),j.isMatchIgnored))return cr(F);return z.skip?Z+=F:(z.excludeBegin&&(Z+=F),pe(),!z.returnBegin&&!z.excludeBegin&&(Z=F)),cn(z,v),z.returnBegin?0:F.length}function ar(v){const F=v[0],z=T.substring(v.index),j=sn(L,v,z);if(!j)return en;const ae=L;L.endScope&&L.endScope._wrap?(pe(),Ee(F,L.endScope._wrap)):L.endScope&&L.endScope._multi?(pe(),on(L.endScope,v)):ae.skip?Z+=F:(ae.returnEnd||ae.excludeEnd||(Z+=F),pe(),ae.excludeEnd&&(Z=F));do L.scope&&se.closeNode(),!L.skip&&!L.subLanguage&&(au+=L.relevance),L=L.parent;while(L!==j.parent);return j.starts&&cn(j.starts,v),ae.returnEnd?0:F.length}function lr(){const v=[];for(let F=L;F!==ye;F=F.parent)F.scope&&v.unshift(F.scope);v.forEach(F=>se.openNode(F))}let su={};function an(v,F){const z=F&&F[0];if(Z+=v,z==null)return pe(),0;if(su.type==="begin"&&F.type==="end"&&su.index===F.index&&z===""){if(Z+=T.slice(F.index,F.index+1),!Y){const j=new Error(`0 width match regex (${x})`);throw j.languageName=x,j.badRule=su.rule,j}return 1}if(su=F,F.type==="begin")return sr(F);if(F.type==="illegal"&&!q){const j=new Error('Illegal lexeme "'+z+'" for mode "'+(L.scope||"<unnamed>")+'"');throw j.mode=L,j}else if(F.type==="end"){const j=ar(F);if(j!==en)return j}if(F.type==="illegal"&&z==="")return Z+=`
`,1;if(wu>1e5&&wu>F.index*3)throw new Error("potential infinite loop, way more iterations than matches");return Z+=z,z.length}const ye=Me(x);if(!ye)throw Pe(ee.replace("{}",x)),new Error('Unknown language: "'+x+'"');const dr=Gt(ye);let Cu="",L=G||dr;const ln={},se=new D.__emitter(D);lr();let Z="",au=0,ze=0,wu=0,Du=!1;try{if(ye.__emitTokens)ye.__emitTokens(T,se);else{for(L.matcher.considerAll();;){wu++,Du?Du=!1:L.matcher.considerAll(),L.matcher.lastIndex=ze;const v=L.matcher.exec(T);if(!v)break;const F=T.substring(ze,v.index),z=an(F,v);ze=v.index+z}an(T.substring(ze))}return se.finalize(),Cu=se.toHTML(),{language:x,value:Cu,relevance:au,illegal:!1,_emitter:se,_top:L}}catch(v){if(v.message&&v.message.includes("Illegal"))return{language:x,value:Eu(T),illegal:!0,relevance:0,_illegalBy:{message:v.message,index:ze,context:T.slice(ze-100,ze+100),mode:v.mode,resultSoFar:Cu},_emitter:se};if(Y)return{language:x,value:Eu(T),illegal:!1,relevance:0,errorRaised:v,_emitter:se,_top:L};throw v}}function yu(x){const T={value:Eu(x),illegal:!1,relevance:0,_top:S,_emitter:new D.__emitter(D)};return T._emitter.addText(x),T}function vu(x,T){T=T||D.languages||Object.keys(h);const q=yu(x),G=T.filter(Me).filter(rn).map(pe=>Ke(pe,x,!1));G.unshift(q);const te=G.sort((pe,Ee)=>{if(pe.relevance!==Ee.relevance)return Ee.relevance-pe.relevance;if(pe.language&&Ee.language){if(Me(pe.language).supersetOf===Ee.language)return 1;if(Me(Ee.language).supersetOf===pe.language)return-1}return 0}),[me,Ne]=te,cu=me;return cu.secondBest=Ne,cu}function Qt(x,T,q){const G=T&&y[T]||q;x.classList.add("hljs"),x.classList.add(`language-${G}`)}function Au(x){let T=null;const q=re(x);if(O(q))return;if(iu("before:highlightElement",{el:x,language:q}),x.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",x);return}if(x.children.length>0&&(D.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(x)),D.throwUnescapedHTML))throw new Wt("One of your code blocks includes unescaped HTML.",x.innerHTML);T=x;const G=T.textContent,te=q?ne(G,{language:q,ignoreIllegals:!0}):vu(G);x.innerHTML=te.value,x.dataset.highlighted="yes",Qt(x,q,te.language),x.result={language:te.language,re:te.relevance,relevance:te.relevance},te.secondBest&&(x.secondBest={language:te.secondBest.language,relevance:te.secondBest.relevance}),iu("after:highlightElement",{el:x,result:te,text:G})}function Xt(x){D=Yu(D,x)}const Jt=()=>{ou(),qe("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function Yt(){ou(),qe("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let nn=!1;function ou(){function x(){ou()}if(document.readyState==="loading"){nn||window.addEventListener("DOMContentLoaded",x,!1),nn=!0;return}document.querySelectorAll(D.cssSelector).forEach(Au)}function er(x,T){let q=null;try{q=T(l)}catch(G){if(Pe("Language definition for '{}' could not be registered.".replace("{}",x)),Y)Pe(G);else throw G;q=S}q.name||(q.name=x),h[x]=q,q.rawDefinition=T.bind(null,l),q.aliases&&tn(q.aliases,{languageName:x})}function ur(x){delete h[x];for(const T of Object.keys(y))y[T]===x&&delete y[T]}function nr(){return Object.keys(h)}function Me(x){return x=(x||"").toLowerCase(),h[x]||h[y[x]]}function tn(x,{languageName:T}){typeof x=="string"&&(x=[x]),x.forEach(q=>{y[q.toLowerCase()]=T})}function rn(x){const T=Me(x);return T&&!T.disableAutodetect}function tr(x){x["before:highlightBlock"]&&!x["before:highlightElement"]&&(x["before:highlightElement"]=T=>{x["before:highlightBlock"](Object.assign({block:T.el},T))}),x["after:highlightBlock"]&&!x["after:highlightElement"]&&(x["after:highlightElement"]=T=>{x["after:highlightBlock"](Object.assign({block:T.el},T))})}function rr(x){tr(x),B.push(x)}function or(x){const T=B.indexOf(x);T!==-1&&B.splice(T,1)}function iu(x,T){const q=x;B.forEach(function(G){G[q]&&G[q](T)})}function ir(x){return qe("10.7.0","highlightBlock will be removed entirely in v12.0"),qe("10.7.0","Please use highlightElement now."),Au(x)}Object.assign(l,{highlight:ne,highlightAuto:vu,highlightAll:ou,highlightElement:Au,highlightBlock:ir,configure:Xt,initHighlighting:Jt,initHighlightingOnLoad:Yt,registerLanguage:er,unregisterLanguage:ur,listLanguages:nr,getLanguage:Me,registerAliases:tn,autoDetection:rn,inherit:Yu,addPlugin:rr,removePlugin:or}),l.debugMode=function(){Y=!1},l.safeMode=function(){Y=!0},l.versionString=Vt,l.regex={concat:C,lookahead:g,either:A,optional:p,anyNumberOfTimes:b};for(const x in tu)typeof tu[x]=="object"&&e(tu[x]);return Object.assign(l,tu),l},He=un({});return He.newInstance=()=>un({}),Ou=He,He.HighlightJS=He,He.default=He,Ou}var pi=fi();const Ue=di(pi),Pn="[A-Za-z$_][0-9A-Za-z$_]*",hi=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends","using"],bi=["true","false","null","undefined","NaN","Infinity"],bt=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],gt=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],mt=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],gi=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],mi=[].concat(mt,bt,gt);function _i(e){const u=e.regex,n=($,{after:ce})=>{const fe="</"+$[0].slice(1);return $.input.indexOf(fe,ce)!==-1},t=Pn,r={begin:"<>",end:"</>"},o=/<[A-Za-z0-9\\._:-]+\s*\/>/,c={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:($,ce)=>{const fe=$[0].length+$.index,ge=$.input[fe];if(ge==="<"||ge===","){ce.ignoreMatch();return}ge===">"&&(n($,{after:fe})||ce.ignoreMatch());let Fe;const Le=$.input.substring(fe);if(Fe=Le.match(/^\s*=/)){ce.ignoreMatch();return}if((Fe=Le.match(/^\s+extends\s+/))&&Fe.index===0){ce.ignoreMatch();return}}},i={$pattern:Pn,keyword:hi,literal:bi,built_in:mi,"variable.language":gi},s="[0-9](_?[0-9])*",a=`\\.(${s})`,d="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",f={className:"number",variants:[{begin:`(\\b(${d})((${a})|\\.)?|(${a}))[eE][+-]?(${s})\\b`},{begin:`\\b(${d})\\b((${a})\\b|\\.)?|(${a})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},g={className:"subst",begin:"\\$\\{",end:"\\}",keywords:i,contains:[]},b={begin:".?html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,g],subLanguage:"xml"}},p={begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,g],subLanguage:"css"}},C={begin:".?gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,g],subLanguage:"graphql"}},R={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,g]},m={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:t+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},_=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,b,p,C,R,{match:/\$\d+/},f];g.contains=_.concat({begin:/\{/,end:/\}/,keywords:i,contains:["self"].concat(_)});const k=[].concat(m,g.contains),w=k.concat([{begin:/(\s*)\(/,end:/\)/,keywords:i,contains:["self"].concat(k)}]),M={className:"params",begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:i,contains:w},H={variants:[{match:[/class/,/\s+/,t,/\s+/,/extends/,/\s+/,u.concat(t,"(",u.concat(/\./,t),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,t],scope:{1:"keyword",3:"title.class"}}]},N={relevance:0,match:u.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...bt,...gt]}},E={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},I={variants:[{match:[/function/,/\s+/,t,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[M],illegal:/%/},P={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function W($){return u.concat("(?!",$.join("|"),")")}const ue={match:u.concat(/\b/,W([...mt,"super","import"].map($=>`${$}\\s*\\(`)),t,u.lookahead(/\s*\(/)),className:"title.function",relevance:0},K={begin:u.concat(/\./,u.lookahead(u.concat(t,/(?![0-9A-Za-z$_(])/))),end:t,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},J={match:[/get|set/,/\s+/,t,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},M]},le="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",ke={match:[/const|var|let/,/\s+/,t,/\s*/,/=\s*/,/(async\s*)?/,u.lookahead(le)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[M]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:i,exports:{PARAMS_CONTAINS:w,CLASS_REFERENCE:N},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),E,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,b,p,C,R,m,{match:/\$\d+/},f,N,{scope:"attr",match:t+u.lookahead(":"),relevance:0},ke,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[m,e.REGEXP_MODE,{className:"function",begin:le,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:i,contains:w}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:r.begin,end:r.end},{match:o},{begin:c.begin,"on:begin":c.isTrulyOpeningTag,end:c.end}],subLanguage:"xml",contains:[{begin:c.begin,end:c.end,skip:!0,contains:["self"]}]}]},I,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[M,e.inherit(e.TITLE_MODE,{begin:t,className:"title.function"})]},{match:/\.\.\./,relevance:0},K,{match:"\\$"+t,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[M]},ue,P,H,J,{match:/\$[(.]/}]}}const gu="[A-Za-z$_][0-9A-Za-z$_]*",_t=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends","using"],xt=["true","false","null","undefined","NaN","Infinity"],kt=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],Et=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],yt=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],vt=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],At=[].concat(yt,kt,Et);function xi(e){const u=e.regex,n=($,{after:ce})=>{const fe="</"+$[0].slice(1);return $.input.indexOf(fe,ce)!==-1},t=gu,r={begin:"<>",end:"</>"},o=/<[A-Za-z0-9\\._:-]+\s*\/>/,c={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:($,ce)=>{const fe=$[0].length+$.index,ge=$.input[fe];if(ge==="<"||ge===","){ce.ignoreMatch();return}ge===">"&&(n($,{after:fe})||ce.ignoreMatch());let Fe;const Le=$.input.substring(fe);if(Fe=Le.match(/^\s*=/)){ce.ignoreMatch();return}if((Fe=Le.match(/^\s+extends\s+/))&&Fe.index===0){ce.ignoreMatch();return}}},i={$pattern:gu,keyword:_t,literal:xt,built_in:At,"variable.language":vt},s="[0-9](_?[0-9])*",a=`\\.(${s})`,d="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",f={className:"number",variants:[{begin:`(\\b(${d})((${a})|\\.)?|(${a}))[eE][+-]?(${s})\\b`},{begin:`\\b(${d})\\b((${a})\\b|\\.)?|(${a})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},g={className:"subst",begin:"\\$\\{",end:"\\}",keywords:i,contains:[]},b={begin:".?html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,g],subLanguage:"xml"}},p={begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,g],subLanguage:"css"}},C={begin:".?gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,g],subLanguage:"graphql"}},R={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,g]},m={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:t+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},_=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,b,p,C,R,{match:/\$\d+/},f];g.contains=_.concat({begin:/\{/,end:/\}/,keywords:i,contains:["self"].concat(_)});const k=[].concat(m,g.contains),w=k.concat([{begin:/(\s*)\(/,end:/\)/,keywords:i,contains:["self"].concat(k)}]),M={className:"params",begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:i,contains:w},H={variants:[{match:[/class/,/\s+/,t,/\s+/,/extends/,/\s+/,u.concat(t,"(",u.concat(/\./,t),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,t],scope:{1:"keyword",3:"title.class"}}]},N={relevance:0,match:u.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...kt,...Et]}},E={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},I={variants:[{match:[/function/,/\s+/,t,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[M],illegal:/%/},P={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function W($){return u.concat("(?!",$.join("|"),")")}const ue={match:u.concat(/\b/,W([...yt,"super","import"].map($=>`${$}\\s*\\(`)),t,u.lookahead(/\s*\(/)),className:"title.function",relevance:0},K={begin:u.concat(/\./,u.lookahead(u.concat(t,/(?![0-9A-Za-z$_(])/))),end:t,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},J={match:[/get|set/,/\s+/,t,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},M]},le="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",ke={match:[/const|var|let/,/\s+/,t,/\s*/,/=\s*/,/(async\s*)?/,u.lookahead(le)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[M]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:i,exports:{PARAMS_CONTAINS:w,CLASS_REFERENCE:N},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),E,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,b,p,C,R,m,{match:/\$\d+/},f,N,{scope:"attr",match:t+u.lookahead(":"),relevance:0},ke,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[m,e.REGEXP_MODE,{className:"function",begin:le,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:i,contains:w}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:r.begin,end:r.end},{match:o},{begin:c.begin,"on:begin":c.isTrulyOpeningTag,end:c.end}],subLanguage:"xml",contains:[{begin:c.begin,end:c.end,skip:!0,contains:["self"]}]}]},I,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[M,e.inherit(e.TITLE_MODE,{begin:t,className:"title.function"})]},{match:/\.\.\./,relevance:0},K,{match:"\\$"+t,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[M]},ue,P,H,J,{match:/\$[(.]/}]}}function ki(e){const u=e.regex,n=xi(e),t=gu,r=["any","void","number","boolean","string","object","never","symbol","bigint","unknown"],o={begin:[/namespace/,/\s+/,e.IDENT_RE],beginScope:{1:"keyword",3:"title.class"}},c={beginKeywords:"interface",end:/\{/,excludeEnd:!0,keywords:{keyword:"interface extends",built_in:r},contains:[n.exports.CLASS_REFERENCE]},i={className:"meta",relevance:10,begin:/^\s*['"]use strict['"]/},s=["type","interface","public","private","protected","implements","declare","abstract","readonly","enum","override","satisfies"],a={$pattern:gu,keyword:_t.concat(s),literal:xt,built_in:At.concat(r),"variable.language":vt},d={className:"meta",begin:"@"+t},f=(C,R,A)=>{const m=C.contains.findIndex(_=>_.label===R);if(m===-1)throw new Error("can not find mode to replace");C.contains.splice(m,1,A)};Object.assign(n.keywords,a),n.exports.PARAMS_CONTAINS.push(d);const g=n.contains.find(C=>C.scope==="attr"),b=Object.assign({},g,{match:u.concat(t,u.lookahead(/\s*\?:/))});n.exports.PARAMS_CONTAINS.push([n.exports.CLASS_REFERENCE,g,b]),n.contains=n.contains.concat([d,o,c,b]),f(n,"shebang",e.SHEBANG()),f(n,"use_strict",i);const p=n.contains.find(C=>C.label==="func.def");return p.relevance=0,Object.assign(n,{name:"TypeScript",aliases:["ts","tsx","mts","cts"]}),n}function Ei(e){const u=e.regex,n={},t={begin:/\$\{/,end:/\}/,contains:["self",{begin:/:-/,contains:[n]}]};Object.assign(n,{className:"variable",variants:[{begin:u.concat(/\$[\w\d#@][\w\d_]*/,"(?![\\w\\d])(?![$])")},t]});const r={className:"subst",begin:/\$\(/,end:/\)/,contains:[e.BACKSLASH_ESCAPE]},o=e.inherit(e.COMMENT(),{match:[/(^|\s)/,/#.*$/],scope:{2:"comment"}}),c={begin:/<<-?\s*(?=\w+)/,starts:{contains:[e.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,className:"string"})]}},i={className:"string",begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,n,r]};r.contains.push(i);const s={match:/\\"/},a={className:"string",begin:/'/,end:/'/},d={match:/\\'/},f={begin:/\$?\(\(/,end:/\)\)/,contains:[{begin:/\d+#[0-9a-f]+/,className:"number"},e.NUMBER_MODE,n]},g=["fish","bash","zsh","sh","csh","ksh","tcsh","dash","scsh"],b=e.SHEBANG({binary:`(${g.join("|")})`,relevance:10}),p={className:"function",begin:/\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin:!0,contains:[e.inherit(e.TITLE_MODE,{begin:/\w[\w\d_]*/})],relevance:0},C=["if","then","else","elif","fi","time","for","while","until","in","do","done","case","esac","coproc","function","select"],R=["true","false"],A={match:/(\/[a-z._-]+)+/},m=["break","cd","continue","eval","exec","exit","export","getopts","hash","pwd","readonly","return","shift","test","times","trap","umask","unset"],_=["alias","bind","builtin","caller","command","declare","echo","enable","help","let","local","logout","mapfile","printf","read","readarray","source","sudo","type","typeset","ulimit","unalias"],k=["autoload","bg","bindkey","bye","cap","chdir","clone","comparguments","compcall","compctl","compdescribe","compfiles","compgroups","compquote","comptags","comptry","compvalues","dirs","disable","disown","echotc","echoti","emulate","fc","fg","float","functions","getcap","getln","history","integer","jobs","kill","limit","log","noglob","popd","print","pushd","pushln","rehash","sched","setcap","setopt","stat","suspend","ttyctl","unfunction","unhash","unlimit","unsetopt","vared","wait","whence","where","which","zcompile","zformat","zftp","zle","zmodload","zparseopts","zprof","zpty","zregexparse","zsocket","zstyle","ztcp"],w=["chcon","chgrp","chown","chmod","cp","dd","df","dir","dircolors","ln","ls","mkdir","mkfifo","mknod","mktemp","mv","realpath","rm","rmdir","shred","sync","touch","truncate","vdir","b2sum","base32","base64","cat","cksum","comm","csplit","cut","expand","fmt","fold","head","join","md5sum","nl","numfmt","od","paste","ptx","pr","sha1sum","sha224sum","sha256sum","sha384sum","sha512sum","shuf","sort","split","sum","tac","tail","tr","tsort","unexpand","uniq","wc","arch","basename","chroot","date","dirname","du","echo","env","expr","factor","groups","hostid","id","link","logname","nice","nohup","nproc","pathchk","pinky","printenv","printf","pwd","readlink","runcon","seq","sleep","stat","stdbuf","stty","tee","test","timeout","tty","uname","unlink","uptime","users","who","whoami","yes"];return{name:"Bash",aliases:["sh","zsh"],keywords:{$pattern:/\b[a-z][a-z0-9._-]+\b/,keyword:C,literal:R,built_in:[...m,..._,"set","shopt",...k,...w]},contains:[b,e.SHEBANG(),p,f,o,c,A,i,s,a,d,n]}}const yi=e=>({IMPORTANT:{scope:"meta",begin:"!important"},BLOCK_COMMENT:e.C_BLOCK_COMMENT_MODE,HEXCOLOR:{scope:"number",begin:/#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/},FUNCTION_DISPATCH:{className:"built_in",begin:/[\w-]+(?=\()/},ATTRIBUTE_SELECTOR_MODE:{scope:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},CSS_NUMBER_MODE:{scope:"number",begin:e.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},CSS_VARIABLE:{className:"attr",begin:/--[A-Za-z_][A-Za-z0-9_-]*/}}),vi=["a","abbr","address","article","aside","audio","b","blockquote","body","button","canvas","caption","cite","code","dd","del","details","dfn","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","html","i","iframe","img","input","ins","kbd","label","legend","li","main","mark","menu","nav","object","ol","optgroup","option","p","picture","q","quote","samp","section","select","source","span","strong","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","ul","var","video"],Ai=["defs","g","marker","mask","pattern","svg","switch","symbol","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feFlood","feGaussianBlur","feImage","feMerge","feMorphology","feOffset","feSpecularLighting","feTile","feTurbulence","linearGradient","radialGradient","stop","circle","ellipse","image","line","path","polygon","polyline","rect","text","use","textPath","tspan","foreignObject","clipPath"],Ci=[...vi,...Ai],wi=["any-hover","any-pointer","aspect-ratio","color","color-gamut","color-index","device-aspect-ratio","device-height","device-width","display-mode","forced-colors","grid","height","hover","inverted-colors","monochrome","orientation","overflow-block","overflow-inline","pointer","prefers-color-scheme","prefers-contrast","prefers-reduced-motion","prefers-reduced-transparency","resolution","scan","scripting","update","width","min-width","max-width","min-height","max-height"].sort().reverse(),Di=["active","any-link","blank","checked","current","default","defined","dir","disabled","drop","empty","enabled","first","first-child","first-of-type","fullscreen","future","focus","focus-visible","focus-within","has","host","host-context","hover","indeterminate","in-range","invalid","is","lang","last-child","last-of-type","left","link","local-link","not","nth-child","nth-col","nth-last-child","nth-last-col","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","past","placeholder-shown","read-only","read-write","required","right","root","scope","target","target-within","user-invalid","valid","visited","where"].sort().reverse(),Si=["after","backdrop","before","cue","cue-region","first-letter","first-line","grammar-error","marker","part","placeholder","selection","slotted","spelling-error"].sort().reverse(),Fi=["accent-color","align-content","align-items","align-self","alignment-baseline","all","anchor-name","animation","animation-composition","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-range","animation-range-end","animation-range-start","animation-timeline","animation-timing-function","appearance","aspect-ratio","backdrop-filter","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-position-x","background-position-y","background-repeat","background-size","baseline-shift","block-size","border","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-end-end-radius","border-end-start-radius","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-start-end-radius","border-start-start-radius","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-align","box-decoration-break","box-direction","box-flex","box-flex-group","box-lines","box-ordinal-group","box-orient","box-pack","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","color-scheme","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","contain-intrinsic-block-size","contain-intrinsic-height","contain-intrinsic-inline-size","contain-intrinsic-size","contain-intrinsic-width","container","container-name","container-type","content","content-visibility","counter-increment","counter-reset","counter-set","cue","cue-after","cue-before","cursor","cx","cy","direction","display","dominant-baseline","empty-cells","enable-background","field-sizing","fill","fill-opacity","fill-rule","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","flood-color","flood-opacity","flow","font","font-display","font-family","font-feature-settings","font-kerning","font-language-override","font-optical-sizing","font-palette","font-size","font-size-adjust","font-smooth","font-smoothing","font-stretch","font-style","font-synthesis","font-synthesis-position","font-synthesis-small-caps","font-synthesis-style","font-synthesis-weight","font-variant","font-variant-alternates","font-variant-caps","font-variant-east-asian","font-variant-emoji","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","forced-color-adjust","gap","glyph-orientation-horizontal","glyph-orientation-vertical","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphenate-character","hyphenate-limit-chars","hyphens","icon","image-orientation","image-rendering","image-resolution","ime-mode","initial-letter","initial-letter-align","inline-size","inset","inset-area","inset-block","inset-block-end","inset-block-start","inset-inline","inset-inline-end","inset-inline-start","isolation","justify-content","justify-items","justify-self","kerning","left","letter-spacing","lighting-color","line-break","line-height","line-height-step","list-style","list-style-image","list-style-position","list-style-type","margin","margin-block","margin-block-end","margin-block-start","margin-bottom","margin-inline","margin-inline-end","margin-inline-start","margin-left","margin-right","margin-top","margin-trim","marker","marker-end","marker-mid","marker-start","marks","mask","mask-border","mask-border-mode","mask-border-outset","mask-border-repeat","mask-border-slice","mask-border-source","mask-border-width","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","masonry-auto-flow","math-depth","math-shift","math-style","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","nav-down","nav-index","nav-left","nav-right","nav-up","none","normal","object-fit","object-position","offset","offset-anchor","offset-distance","offset-path","offset-position","offset-rotate","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-anchor","overflow-block","overflow-clip-margin","overflow-inline","overflow-wrap","overflow-x","overflow-y","overlay","overscroll-behavior","overscroll-behavior-block","overscroll-behavior-inline","overscroll-behavior-x","overscroll-behavior-y","padding","padding-block","padding-block-end","padding-block-start","padding-bottom","padding-inline","padding-inline-end","padding-inline-start","padding-left","padding-right","padding-top","page","page-break-after","page-break-before","page-break-inside","paint-order","pause","pause-after","pause-before","perspective","perspective-origin","place-content","place-items","place-self","pointer-events","position","position-anchor","position-visibility","print-color-adjust","quotes","r","resize","rest","rest-after","rest-before","right","rotate","row-gap","ruby-align","ruby-position","scale","scroll-behavior","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-stop","scroll-snap-type","scroll-timeline","scroll-timeline-axis","scroll-timeline-name","scrollbar-color","scrollbar-gutter","scrollbar-width","shape-image-threshold","shape-margin","shape-outside","shape-rendering","speak","speak-as","src","stop-color","stop-opacity","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","tab-size","table-layout","text-align","text-align-all","text-align-last","text-anchor","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-skip","text-decoration-skip-ink","text-decoration-style","text-decoration-thickness","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-indent","text-justify","text-orientation","text-overflow","text-rendering","text-shadow","text-size-adjust","text-transform","text-underline-offset","text-underline-position","text-wrap","text-wrap-mode","text-wrap-style","timeline-scope","top","touch-action","transform","transform-box","transform-origin","transform-style","transition","transition-behavior","transition-delay","transition-duration","transition-property","transition-timing-function","translate","unicode-bidi","user-modify","user-select","vector-effect","vertical-align","view-timeline","view-timeline-axis","view-timeline-inset","view-timeline-name","view-transition-name","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","white-space","white-space-collapse","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","x","y","z-index","zoom"].sort().reverse();function Ti(e){const u=e.regex,n=yi(e),t={begin:/-(webkit|moz|ms|o)-(?=[a-z])/},r="and or not only",o=/@-?\w[\w]*(-\w+)*/,c="[a-zA-Z-][a-zA-Z0-9_-]*",i=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE];return{name:"CSS",case_insensitive:!0,illegal:/[=|'\$]/,keywords:{keyframePosition:"from to"},classNameAliases:{keyframePosition:"selector-tag"},contains:[n.BLOCK_COMMENT,t,n.CSS_NUMBER_MODE,{className:"selector-id",begin:/#[A-Za-z0-9_-]+/,relevance:0},{className:"selector-class",begin:"\\."+c,relevance:0},n.ATTRIBUTE_SELECTOR_MODE,{className:"selector-pseudo",variants:[{begin:":("+Di.join("|")+")"},{begin:":(:)?("+Si.join("|")+")"}]},n.CSS_VARIABLE,{className:"attribute",begin:"\\b("+Fi.join("|")+")\\b"},{begin:/:/,end:/[;}{]/,contains:[n.BLOCK_COMMENT,n.HEXCOLOR,n.IMPORTANT,n.CSS_NUMBER_MODE,...i,{begin:/(url|data-uri)\(/,end:/\)/,relevance:0,keywords:{built_in:"url data-uri"},contains:[...i,{className:"string",begin:/[^)]/,endsWithParent:!0,excludeEnd:!0}]},n.FUNCTION_DISPATCH]},{begin:u.lookahead(/@/),end:"[{;]",relevance:0,illegal:/:/,contains:[{className:"keyword",begin:o},{begin:/\s/,endsWithParent:!0,excludeEnd:!0,relevance:0,keywords:{$pattern:/[a-z-]+/,keyword:r,attribute:wi.join(" ")},contains:[{begin:/[a-z-]+(?=:)/,className:"attribute"},...i,n.CSS_NUMBER_MODE]}]},{className:"selector-tag",begin:"\\b("+Ci.join("|")+")\\b"}]}}function Mi(e){const u=e.regex,n=u.concat(/[\p{L}_]/u,u.optional(/[\p{L}0-9_.-]*:/u),/[\p{L}0-9_.-]*/u),t=/[\p{L}0-9._:-]+/u,r={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},o={begin:/\s/,contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},c=e.inherit(o,{begin:/\(/,end:/\)/}),i=e.inherit(e.APOS_STRING_MODE,{className:"string"}),s=e.inherit(e.QUOTE_STRING_MODE,{className:"string"}),a={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:t,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[r]},{begin:/'/,end:/'/,contains:[r]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,unicodeRegex:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[o,s,i,c,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[o,c,s,i]}]}]},e.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},r,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,relevance:10,contains:[s]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[a],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[a],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:u.concat(/</,u.lookahead(u.concat(n,u.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:n,relevance:0,starts:a}]},{className:"tag",begin:u.concat(/<\//,u.lookahead(u.concat(n,/>/))),contains:[{className:"name",begin:n,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}const Ni={class:"file-tree"},Ri=["onClick"],Ii={class:"node-icon"},Oi={class:"node-name"},Bi={key:0,class:"node-children"},Li=zn({__name:"FileTree",props:{nodes:{},currentFile:{},expandedFolders:{},level:{default:0}},emits:["select"],setup(e,{emit:u}){const n=e,t=u,r=$e(()=>`${n.level*1.5}rem`);function o(a){return a.type==="folder"}function c(a){return n.currentFile?.path===a.path}function i(a){return n.expandedFolders.has(a)}function s(a){t("select",a)}return(a,d)=>{const f=br("FileTree",!0);return Q(),X("div",Ni,[(Q(!0),X(Un,null,$n(e.nodes,g=>(Q(),X("div",{key:g.path,class:"tree-node"},[U("div",{class:Bu(["node-content",{"is-folder":o(g),"is-current":c(g),"is-expanded":o(g)&&i(g.path)}]),style:qn({paddingLeft:r.value}),onClick:b=>s(g)},[U("span",Ii,Ae(o(g)?i(g.path)?"📂":"📁":"📄"),1),U("span",Oi,Ae(g.displayName),1)],14,Ri),o(g)&&g.children&&i(g.path)?(Q(),X("div",Bi,[Hn(f,{nodes:g.children,"current-file":e.currentFile,"expanded-folders":e.expandedFolders,level:e.level+1,onSelect:d[0]||(d[0]=b=>t("select",b))},null,8,["nodes","current-file","expanded-folders","level"])])):fu("",!0)]))),128))])}}}),Pi=gr(Li,[["__scopeId","data-v-98ad75b9"]]),zi={class:"min-h-screen relative",style:{backgroundColor:"var(--color-white)"}},Ui={class:"py-24"},$i={class:"relative"},qi={class:"flex gap-6 px-4"},Hi={class:"w-80 flex-shrink-0 sticky top-24 self-start"},ji={class:"rounded-xl overflow-hidden max-h-[calc(80vh)] flex flex-col shadow-sm",style:{backgroundColor:"var(--color-bg-muted)",border:"1px solid var(--color-border)"}},Gi={class:"p-4 sticky top-0 z-10",style:{borderBottom:"1px solid var(--color-border)",backgroundColor:"var(--color-white)"}},Zi={key:0,class:"text-2xl font-bold mb-2",style:{color:"var(--color-text-heading)"}},Vi={key:1,class:"text-xl font-bold mb-1",style:{color:"var(--color-text-heading)"}},Wi={key:2,class:"text-sm",style:{color:"var(--color-text-muted)"}},Ki={key:3,class:"text-xs font-medium",style:{color:"var(--color-primary)"}},Qi={class:"p-4",style:{borderBottom:"1px solid var(--color-border)"}},Xi={class:"flex-1 overflow-y-auto p-2"},Ji={class:"flex-1 pr-80 pt-8"},Yi={key:0,class:"mb-6 top-20 z-10",style:{backgroundColor:"var(--color-white)"}},ec={class:"text-2xl font-bold mb-2",style:{color:"var(--color-text-heading)"}},uc={class:"text-sm font-medium",style:{color:"var(--color-primary)"}},nc={key:1,class:"flex items-center justify-center py-20"},tc={key:2,class:"flex items-center justify-center py-20"},rc={key:3},oc=["innerHTML"],ic={class:"mt-12 flex justify-between gap-6"},cc={key:0,class:"flex-1"},sc={class:"flex items-center gap-2 mb-2"},ac={xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 group-hover:-translate-x-1 transition-transform duration-300",style:{color:"var(--color-primary)"},fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},lc={class:"text-base font-bold transition-colors duration-300",style:{color:"var(--color-text-heading)","&:hover":{color:"var(--color-primary)"}}},dc={key:1,class:"flex-1"},fc={key:2,class:"flex-1"},pc={class:"flex items-center gap-2 mb-2"},hc={xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 group-hover:translate-x-1 transition-transform duration-300",style:{color:"var(--color-primary)"},fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},bc={class:"text-base font-bold transition-colors duration-300",style:{color:"var(--color-text-heading)","&:hover":{color:"var(--color-primary)"}}},gc={key:3,class:"flex-1"},mc={class:"rounded-lg h-full flex flex-col shadow-md",style:{backgroundColor:"var(--color-white)",border:"1px solid var(--color-border)"}},_c={class:"p-4 flex justify-between items-center",style:{borderBottom:"1px solid var(--color-border)"}},xc={key:0,class:"p-4 space-y-1 flex-1 overflow-y-auto"},kc=["onClick"],vc=zn({__name:"KnowledgePage",setup(e){Ue.registerLanguage("javascript",_i),Ue.registerLanguage("typescript",ki),Ue.registerLanguage("bash",Ei),Ue.registerLanguage("css",Ti),Ue.registerLanguage("html",Mi);const u=new be({html:!0,linkify:!0,typographer:!0,breaks:!0,xhtmlOut:!0,langPrefix:"language-",highlight:function(N,E){if(E&&Ue.getLanguage(E))try{return`<pre class="hljs" data-language="${E}"><code>${Ue.highlight(N,{language:E}).value}</code></pre>`}catch{}return`<pre class="hljs" data-language="plaintext"><code>${u.utils.escapeHtml(N)}</code></pre>`}});u.use(function(N){N.core.ruler.before("inline","tasklist",function(E){let I=null;E.tokens.forEach(function(P,W){if(P.type==="list_open")I=P;else if(P.type==="list_item_open"&&I){const ue=E.tokens[W+1];if(ue&&ue.type==="inline"){const K=ue.content;K.match(/^\[([ x])\]/)&&(P.attrSet("class","task-list-item"),I.attrSet("class","task-list"),ue.content=K.replace(/^\[([ x])\]/,function(J,le){return`<input type="checkbox" ${le==="x"?"checked":""} disabled>`}))}}else P.type==="list_close"&&(I=null)})})}),vr();const n=Ar(),t=_e(""),r=_e(new Set),o=_e(null),c=_e(!1),i=_e(!1),s=_e(!1),{fileTree:a,currentFile:d,currentContent:f,isLoaded:g,currentFilePath:b}=mr(n),p=$e(()=>b.value?n.getPreviousFile(b.value):null),C=$e(()=>b.value?n.getNextFile(b.value):null),R=$e(()=>{if(!f.value)return[];const N=[],E=f.value,I=/```[\s\S]*?```/g,P=[];let W;for(;(W=I.exec(E))!==null;)P.push([W.index,W.index+W[0].length]);const ue=/^(#{1,3})\s+(.+)$/gm;let K;for(;(K=ue.exec(E))!==null;){const J=K.index;if(!P.some(([ke,$])=>J>=ke&&J<$)){const ke=K[1].length,$=K[2].trim(),ce=$.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"");N.push({id:ce,text:$,level:ke})}}return N}),A=$e(()=>{if(!f.value)return"";let N=f.value,E=u.render(N);return E=E.replace(/<h([1-6])>(.+?)<\/h[1-6]>/g,(I,P,W)=>{const ue=W.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"");return`<h${P} id="${ue}">${W}</h${P}>`}),E}),m=$e(()=>t.value.trim()?n.searchFiles(t.value):a.value);function _(N){const E=document.getElementById(N);if(E){const ue=E.getBoundingClientRect().top+window.pageYOffset-105;window.scrollTo({top:ue,behavior:"smooth"})}}async function k(N){if(N.type==="folder")r.value.has(N.path)?r.value.delete(N.path):r.value.add(N.path);else{const E=N.path.split("/").filter(Boolean);let I="";for(let P=0;P<E.length-1;P++)I===""?I=E[P]:I+="/"+E[P],r.value.add(I);await n.selectFile(N.path),o.value&&(o.value.scrollTop=0),window.scrollTo({top:0,behavior:"smooth"})}}function w(){if(!o.value)return;const N=o.value.scrollTop,E=o.value.scrollHeight,I=o.value.clientHeight,P=N/(E-I)*100;window.dispatchEvent(new CustomEvent("scrollProgress",{detail:{progress:P}}))}function M(){i.value=window.pageYOffset>window.innerHeight,s.value=window.pageYOffset>100}function H(){window.scrollTo({top:0,behavior:"smooth"})}return _r(b,N=>{if(N){const E=N.split("/").filter(Boolean);let I="";E.forEach((P,W)=>{W<E.length-1&&(I+="/"+E[W],r.value.add(I))})}}),xr(async()=>{if(await n.loadKnowledgeBase(),a.value.length>0){const N=a.value[0];N.type==="folder"&&r.value.add(N.path)}o.value&&o.value.addEventListener("scroll",w),window.addEventListener("scroll",M)}),kr(()=>{o.value&&o.value.removeEventListener("scroll",w),window.removeEventListener("scroll",M)}),(N,E)=>(Q(),X("div",zi,[U("div",Ui,[U("div",$i,[U("div",qi,[U("div",Hi,[U("div",ji,[U("div",Gi,[!s.value||!ve(d)?(Q(),X("h1",Zi," 知识库 ")):(Q(),X("h1",Vi,Ae(ve(d).displayName),1)),!s.value||!ve(d)?(Q(),X("p",Wi," 探索技术文档和学习笔记 ")):(Q(),X("p",Ki,Ae(ve(d).path),1))]),U("div",Qi,[Er(U("input",{"onUpdate:modelValue":E[0]||(E[0]=I=>t.value=I),type:"text",placeholder:"搜索文档...",class:"w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 transition-all duration-300",style:{backgroundColor:"var(--color-white)",border:"1px solid var(--color-border)",color:"var(--color-text-heading)",placeholderColor:"var(--color-text-muted)","&:focus":{ringColor:"var(--color-primary)",ringWidth:"2px"}}},null,512),[[yr,t.value]])]),U("div",Xi,[Hn(Pi,{nodes:m.value,"current-file":ve(d),"expanded-folders":r.value,onSelect:k},null,8,["nodes","current-file","expanded-folders"])])])]),U("div",Ji,[ve(d)&&!s.value?(Q(),X("div",Yi,[U("h2",ec,Ae(ve(d).displayName),1),U("p",uc,Ae(ve(d).path),1)])):fu("",!0),ve(g)?ve(d)?(Q(),X("div",rc,[U("div",{class:"prose max-w-none",innerHTML:A.value,ref_key:"contentRef",ref:o,onScroll:w},null,40,oc),U("div",ic,[p.value?(Q(),X("div",cc,[U("button",{onClick:E[1]||(E[1]=I=>k(p.value)),class:"w-full group relative overflow-hidden rounded-2xl p-5 transition-all duration-300 shadow-md hover:shadow-lg flex flex-col items-start text-left",style:{background:"linear-gradient(to bottom right, rgba(41, 94, 172, 0.05), rgba(74, 127, 212, 0.05))",border:"1px solid rgba(41, 94, 172, 0.1)","&:hover":{background:"linear-gradient(to bottom right, rgba(41, 94, 172, 0.1), rgba(74, 127, 212, 0.1))",boxShadow:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 10px rgba(41, 94, 172, 0.1)"}}},[U("div",sc,[(Q(),X("svg",ac,[...E[6]||(E[6]=[U("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"},null,-1)])])),E[7]||(E[7]=U("span",{class:"text-sm font-semibold tracking-wide",style:{color:"var(--color-primary)"}},"上一篇",-1))]),U("span",lc,Ae(p.value.displayName),1)])])):(Q(),X("div",dc)),C.value?(Q(),X("div",fc,[U("button",{onClick:E[2]||(E[2]=I=>k(C.value)),class:"w-full group relative overflow-hidden rounded-2xl p-5 transition-all duration-300 shadow-md hover:shadow-lg flex flex-col items-end text-right",style:{background:"linear-gradient(to bottom right, rgba(41, 94, 172, 0.05), rgba(74, 127, 212, 0.05))",border:"1px solid rgba(41, 94, 172, 0.1)","&:hover":{background:"linear-gradient(to bottom right, rgba(41, 94, 172, 0.1), rgba(74, 127, 212, 0.1))",boxShadow:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 10px rgba(41, 94, 172, 0.1)"}}},[U("div",pc,[E[9]||(E[9]=U("span",{class:"text-sm font-semibold tracking-wide",style:{color:"var(--color-primary)"}},"下一篇",-1)),(Q(),X("svg",hc,[...E[8]||(E[8]=[U("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"},null,-1)])]))]),U("span",bc,Ae(C.value.displayName),1)])])):(Q(),X("div",gc))])])):(Q(),X("div",tc,[...E[5]||(E[5]=[U("div",{style:{color:"var(--color-text-muted)"}},"请选择一个文档",-1)])])):(Q(),X("div",nc,[...E[4]||(E[4]=[U("div",{style:{color:"var(--color-text-muted)"}},"加载中...",-1)])]))])]),U("div",{class:Bu(["hidden lg:block fixed right-4 top-24 w-64 transition-all duration-300 ease-in-out",c.value?"h-12":"h-[calc(100vh-120px)]"])},[U("div",mc,[U("div",_c,[E[10]||(E[10]=U("h3",{class:"text-sm font-semibold",style:{color:"var(--color-text-heading)"}},"目录",-1)),U("button",{class:"text-xs transition-colors duration-300",onClick:E[3]||(E[3]=I=>c.value=!c.value),style:{color:"var(--color-text-muted)","&:hover":{color:"var(--color-text-heading)"}}},Ae(c.value?"展开":"收起"),1)]),c.value?fu("",!0):(Q(),X("div",xc,[(Q(!0),X(Un,null,$n(R.value,(I,P)=>(Q(),X("div",{key:P,class:Bu(["text-sm",{"pl-0 font-medium":I.level===1,"pl-2":I.level===2,"pl-4":I.level===3}]),style:qn({color:I.level===1?"var(--color-text-heading)":I.level===2?"var(--color-text-body)":"var(--color-text-muted)"})},[U("span",{class:"cursor-pointer block py-1 transition-colors duration-300",onClick:W=>_(I.id),style:{"&:hover":{color:"var(--color-primary)"}}},Ae(I.text),9,kc)],6))),128))]))])],2),i.value?(Q(),X("button",{key:0,class:"fixed right-72 bottom-12 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50",onClick:H,"aria-label":"回到顶部",style:{backgroundColor:"var(--color-primary)",color:"white","&:hover":{backgroundColor:"var(--color-primary-dark)"}}},[...E[11]||(E[11]=[U("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[U("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 15l7-7 7 7"})],-1)])])):fu("",!0)])])]))}});export{vc as default};
