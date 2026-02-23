import{l as as,r as Q,m as ge,d as ae,b as z,c as ue,F as Gt,f as lr,p as cs,e as V,t as ze,n as Vt,i as gn,g as De,q as rn,_ as ls,s as ds,v as fs,x as ps,y as hs,z as sn,A as jn,B as ku,D as bs,E as An,G as ms,H as dr,I as ft,J as Zt,K as gs,a as Wt,L as xs,M as _s,N as fr,O as mn,P as vs,Q as Ne,R as ys,S as pr,T as be,U as T,j as xe,w as ee,V as Dn,W as Ln,X as ks,Y as hr,Z as Es,o as br,$ as ws,a0 as Cs,a1 as mr,a2 as gr,a3 as Kt,a4 as xr,a5 as _r,a6 as As,a7 as Ds,a8 as Ss,a9 as Fs,h as Jn,aa as Ts,k as Ms}from"./index-CBW38MwU.js";const Eu=`# 快速开始

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
`,wu=`# 环境配置

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
`,Cu=`# 常见问题

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
`,Au=`# 响应式原理

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
`,Du=`# 组件系统

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
`,Su=`# 性能优化

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
`,Fu=`# Markdown测试文档

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
`,Tu=`---
author: 测试用户
date: 2026-02-23
password: 123456
display: true
---

# 测试密码保护文档

这是一个需要密码才能查看的测试文档。

## 测试内容

- 密码保护功能
- 文件头解析
- 内容渲染

## 测试步骤

1. 打开文档时应弹出密码输入框
2. 输入正确密码：123456
3. 验证文档内容是否正常显示
4. 测试密码错误的情况`,Os=as("knowledge",()=>{const e=Q([]),n=Q(null),t=Q(""),u=Q(!1),r=Q({}),o=ge(()=>n.value?.path||"");function s(y){return y.sort((g,x)=>g.order!==x.order?g.order-x.order:g.displayName.localeCompare(x.displayName)).map(g=>(g.children&&(g.children=s(g.children)),g))}function i(y,g){for(const x of y){if(x.path===g)return x;if(x.children){const E=i(x.children,g);if(E)return E}}return null}async function a(){if(!u.value)try{const y=Object.assign({"/docs/01-入门指南/01-快速开始.md":Eu,"/docs/01-入门指南/02-环境配置.md":wu,"/docs/01-入门指南/03-常见问题.md":Cu,"/docs/02-核心概念/01-响应式原理.md":Au,"/docs/02-核心概念/02-组件系统.md":Du,"/docs/03-进阶用法/01-性能优化.md":Su,"/docs/04-测试文档/01-Markdown测试.md":Fu,"/docs/04-测试文档/02-测试密码保护.md":Tu});r.value={},Object.entries(y).forEach(([E,D])=>{r.value[E]=D});const g=Object.keys(y);e.value=c(g);const x=l(e.value);x&&(n.value=x,t.value=r.value[x.path]||""),u.value=!0}catch(y){console.error("加载知识库失败:",y)}}function c(y){const g=[];return y.forEach(x=>{const E=x.split("/").filter(Boolean);if(!E.includes("docs"))return;const D=E.indexOf("docs"),I=E.slice(D+1);if(I.length===0)return;let K=g,F="";E.forEach((Z,de)=>{F+="/"+Z}),I.forEach((Z,de)=>{const fe=Z.endsWith(".md"),Ce=fe?Z.replace(".md","").replace(/^\d+[-_]/,""):Z.replace(/^\d+[-_]/,""),Fe=parseInt(Z.match(/^\d+/)?.[0]||"999");let le=F;fe||(le=E.slice(0,D+1+de+1).join("/"));let ne=K.find(ce=>ce.name===Z);ne||(ne={name:Z,path:le,type:fe?"file":"folder",displayName:Ce,order:Fe,children:fe?void 0:[]},K.push(ne)),!fe&&ne.children&&(K=ne.children)})}),s(g)}function l(y){for(const g of y){if(g.type==="file")return g;if(g.children){const x=l(g.children);if(x)return x}}return null}async function d(y){const g=i(e.value,y);if(g){n.value=g;try{const x=r.value[y];if(x)t.value=x;else{const D=Object.assign({"/docs/01-入门指南/01-快速开始.md":Eu,"/docs/01-入门指南/02-环境配置.md":wu,"/docs/01-入门指南/03-常见问题.md":Cu,"/docs/02-核心概念/01-响应式原理.md":Au,"/docs/02-核心概念/02-组件系统.md":Du,"/docs/03-进阶用法/01-性能优化.md":Su,"/docs/04-测试文档/01-Markdown测试.md":Fu,"/docs/04-测试文档/02-测试密码保护.md":Tu})[y]||"";t.value=D}}catch(x){console.error("加载文件失败:",x),t.value="加载失败"}}}function p(y){const g=i(e.value,y);return!g||!g.children?[]:g.children.filter(x=>x.type==="file")}function b(y){let g=[];for(const x of y)x.type==="file"&&g.push(x),x.children&&(g=g.concat(b(x.children)));return g}function h(y){return y.trim()?b(e.value).filter(x=>x.displayName.toLowerCase().includes(y.toLowerCase())):[]}function k(y){const g=b(e.value),x=g.findIndex(E=>E.path===y);return x>0?g[x-1]:null}function v(y){const g=b(e.value),x=g.findIndex(E=>E.path===y);return x<g.length-1?g[x+1]:null}return{fileTree:e,currentFile:n,currentContent:t,isLoaded:u,currentFilePath:o,loadKnowledgeBase:a,selectFile:d,getFilesInFolder:p,searchFiles:h,getPreviousFile:k,getNextFile:v}}),Mu={};function Ns(e){let n=Mu[e];if(n)return n;n=Mu[e]=[];for(let t=0;t<128;t++){const u=String.fromCharCode(t);n.push(u)}for(let t=0;t<e.length;t++){const u=e.charCodeAt(t);n[u]="%"+("0"+u.toString(16).toUpperCase()).slice(-2)}return n}function Sn(e,n){typeof n!="string"&&(n=Sn.defaultChars);const t=Ns(n);return e.replace(/(%[a-f0-9]{2})+/gi,function(u){let r="";for(let o=0,s=u.length;o<s;o+=3){const i=parseInt(u.slice(o+1,o+3),16);if(i<128){r+=t[i];continue}if((i&224)===192&&o+3<s){const a=parseInt(u.slice(o+4,o+6),16);if((a&192)===128){const c=i<<6&1984|a&63;c<128?r+="��":r+=String.fromCharCode(c),o+=3;continue}}if((i&240)===224&&o+6<s){const a=parseInt(u.slice(o+4,o+6),16),c=parseInt(u.slice(o+7,o+9),16);if((a&192)===128&&(c&192)===128){const l=i<<12&61440|a<<6&4032|c&63;l<2048||l>=55296&&l<=57343?r+="���":r+=String.fromCharCode(l),o+=6;continue}}if((i&248)===240&&o+9<s){const a=parseInt(u.slice(o+4,o+6),16),c=parseInt(u.slice(o+7,o+9),16),l=parseInt(u.slice(o+10,o+12),16);if((a&192)===128&&(c&192)===128&&(l&192)===128){let d=i<<18&1835008|a<<12&258048|c<<6&4032|l&63;d<65536||d>1114111?r+="����":(d-=65536,r+=String.fromCharCode(55296+(d>>10),56320+(d&1023))),o+=9;continue}}r+="�"}return r})}Sn.defaultChars=";/?:@&=+$,#";Sn.componentChars="";const Ou={};function Rs(e){let n=Ou[e];if(n)return n;n=Ou[e]=[];for(let t=0;t<128;t++){const u=String.fromCharCode(t);/^[0-9a-z]$/i.test(u)?n.push(u):n.push("%"+("0"+t.toString(16).toUpperCase()).slice(-2))}for(let t=0;t<e.length;t++)n[e.charCodeAt(t)]=e[t];return n}function Hn(e,n,t){typeof n!="string"&&(t=n,n=Hn.defaultChars),typeof t>"u"&&(t=!0);const u=Rs(n);let r="";for(let o=0,s=e.length;o<s;o++){const i=e.charCodeAt(o);if(t&&i===37&&o+2<s&&/^[0-9a-f]{2}$/i.test(e.slice(o+1,o+3))){r+=e.slice(o,o+3),o+=2;continue}if(i<128){r+=u[i];continue}if(i>=55296&&i<=57343){if(i>=55296&&i<=56319&&o+1<s){const a=e.charCodeAt(o+1);if(a>=56320&&a<=57343){r+=encodeURIComponent(e[o]+e[o+1]),o++;continue}}r+="%EF%BF%BD";continue}r+=encodeURIComponent(e[o])}return r}Hn.defaultChars=";/?:@&=+$,-_.!~*'()#";Hn.componentChars="-_.!~*'()";function Xt(e){let n="";return n+=e.protocol||"",n+=e.slashes?"//":"",n+=e.auth?e.auth+"@":"",e.hostname&&e.hostname.indexOf(":")!==-1?n+="["+e.hostname+"]":n+=e.hostname||"",n+=e.port?":"+e.port:"",n+=e.pathname||"",n+=e.search||"",n+=e.hash||"",n}function it(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}const Is=/^([a-z0-9.+-]+:)/i,Bs=/:[0-9]*$/,Ps=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,Ls=["<",">",'"',"`"," ","\r",`
`,"	"],zs=["{","}","|","\\","^","`"].concat(Ls),$s=["'"].concat(zs),Nu=["%","/","?",";","#"].concat($s),Ru=["/","?","#"],Us=255,Iu=/^[+a-z0-9A-Z_-]{0,63}$/,qs=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,Bu={javascript:!0,"javascript:":!0},Pu={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};function Qt(e,n){if(e&&e instanceof it)return e;const t=new it;return t.parse(e,n),t}it.prototype.parse=function(e,n){let t,u,r,o=e;if(o=o.trim(),!n&&e.split("#").length===1){const c=Ps.exec(o);if(c)return this.pathname=c[1],c[2]&&(this.search=c[2]),this}let s=Is.exec(o);if(s&&(s=s[0],t=s.toLowerCase(),this.protocol=s,o=o.substr(s.length)),(n||s||o.match(/^\/\/[^@\/]+@[^@\/]+/))&&(r=o.substr(0,2)==="//",r&&!(s&&Bu[s])&&(o=o.substr(2),this.slashes=!0)),!Bu[s]&&(r||s&&!Pu[s])){let c=-1;for(let h=0;h<Ru.length;h++)u=o.indexOf(Ru[h]),u!==-1&&(c===-1||u<c)&&(c=u);let l,d;c===-1?d=o.lastIndexOf("@"):d=o.lastIndexOf("@",c),d!==-1&&(l=o.slice(0,d),o=o.slice(d+1),this.auth=l),c=-1;for(let h=0;h<Nu.length;h++)u=o.indexOf(Nu[h]),u!==-1&&(c===-1||u<c)&&(c=u);c===-1&&(c=o.length),o[c-1]===":"&&c--;const p=o.slice(0,c);o=o.slice(c),this.parseHost(p),this.hostname=this.hostname||"";const b=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!b){const h=this.hostname.split(/\./);for(let k=0,v=h.length;k<v;k++){const y=h[k];if(y&&!y.match(Iu)){let g="";for(let x=0,E=y.length;x<E;x++)y.charCodeAt(x)>127?g+="x":g+=y[x];if(!g.match(Iu)){const x=h.slice(0,k),E=h.slice(k+1),D=y.match(qs);D&&(x.push(D[1]),E.unshift(D[2])),E.length&&(o=E.join(".")+o),this.hostname=x.join(".");break}}}}this.hostname.length>Us&&(this.hostname=""),b&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}const i=o.indexOf("#");i!==-1&&(this.hash=o.substr(i),o=o.slice(0,i));const a=o.indexOf("?");return a!==-1&&(this.search=o.substr(a),o=o.slice(0,a)),o&&(this.pathname=o),Pu[t]&&this.hostname&&!this.pathname&&(this.pathname=""),this};it.prototype.parseHost=function(e){let n=Bs.exec(e);n&&(n=n[0],n!==":"&&(this.port=n.substr(1)),e=e.substr(0,e.length-n.length)),e&&(this.hostname=e)};const js=Object.freeze(Object.defineProperty({__proto__:null,decode:Sn,encode:Hn,format:Xt,parse:Qt},Symbol.toStringTag,{value:"Module"})),vr=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,yr=/[\0-\x1F\x7F-\x9F]/,Hs=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,Yt=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,kr=/[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/,Er=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,Gs=Object.freeze(Object.defineProperty({__proto__:null,Any:vr,Cc:yr,Cf:Hs,P:Yt,S:kr,Z:Er},Symbol.toStringTag,{value:"Module"})),Vs=new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(e=>e.charCodeAt(0))),Zs=new Uint16Array("Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(e=>e.charCodeAt(0)));var Ct;const Ws=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]]),Ks=(Ct=String.fromCodePoint)!==null&&Ct!==void 0?Ct:function(e){let n="";return e>65535&&(e-=65536,n+=String.fromCharCode(e>>>10&1023|55296),e=56320|e&1023),n+=String.fromCharCode(e),n};function Xs(e){var n;return e>=55296&&e<=57343||e>1114111?65533:(n=Ws.get(e))!==null&&n!==void 0?n:e}var Ee;(function(e){e[e.NUM=35]="NUM",e[e.SEMI=59]="SEMI",e[e.EQUALS=61]="EQUALS",e[e.ZERO=48]="ZERO",e[e.NINE=57]="NINE",e[e.LOWER_A=97]="LOWER_A",e[e.LOWER_F=102]="LOWER_F",e[e.LOWER_X=120]="LOWER_X",e[e.LOWER_Z=122]="LOWER_Z",e[e.UPPER_A=65]="UPPER_A",e[e.UPPER_F=70]="UPPER_F",e[e.UPPER_Z=90]="UPPER_Z"})(Ee||(Ee={}));const Qs=32;var on;(function(e){e[e.VALUE_LENGTH=49152]="VALUE_LENGTH",e[e.BRANCH_LENGTH=16256]="BRANCH_LENGTH",e[e.JUMP_TABLE=127]="JUMP_TABLE"})(on||(on={}));function $t(e){return e>=Ee.ZERO&&e<=Ee.NINE}function Ys(e){return e>=Ee.UPPER_A&&e<=Ee.UPPER_F||e>=Ee.LOWER_A&&e<=Ee.LOWER_F}function Js(e){return e>=Ee.UPPER_A&&e<=Ee.UPPER_Z||e>=Ee.LOWER_A&&e<=Ee.LOWER_Z||$t(e)}function ei(e){return e===Ee.EQUALS||Js(e)}var ke;(function(e){e[e.EntityStart=0]="EntityStart",e[e.NumericStart=1]="NumericStart",e[e.NumericDecimal=2]="NumericDecimal",e[e.NumericHex=3]="NumericHex",e[e.NamedEntity=4]="NamedEntity"})(ke||(ke={}));var un;(function(e){e[e.Legacy=0]="Legacy",e[e.Strict=1]="Strict",e[e.Attribute=2]="Attribute"})(un||(un={}));class ni{constructor(n,t,u){this.decodeTree=n,this.emitCodePoint=t,this.errors=u,this.state=ke.EntityStart,this.consumed=1,this.result=0,this.treeIndex=0,this.excess=1,this.decodeMode=un.Strict}startEntity(n){this.decodeMode=n,this.state=ke.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1}write(n,t){switch(this.state){case ke.EntityStart:return n.charCodeAt(t)===Ee.NUM?(this.state=ke.NumericStart,this.consumed+=1,this.stateNumericStart(n,t+1)):(this.state=ke.NamedEntity,this.stateNamedEntity(n,t));case ke.NumericStart:return this.stateNumericStart(n,t);case ke.NumericDecimal:return this.stateNumericDecimal(n,t);case ke.NumericHex:return this.stateNumericHex(n,t);case ke.NamedEntity:return this.stateNamedEntity(n,t)}}stateNumericStart(n,t){return t>=n.length?-1:(n.charCodeAt(t)|Qs)===Ee.LOWER_X?(this.state=ke.NumericHex,this.consumed+=1,this.stateNumericHex(n,t+1)):(this.state=ke.NumericDecimal,this.stateNumericDecimal(n,t))}addToNumericResult(n,t,u,r){if(t!==u){const o=u-t;this.result=this.result*Math.pow(r,o)+parseInt(n.substr(t,o),r),this.consumed+=o}}stateNumericHex(n,t){const u=t;for(;t<n.length;){const r=n.charCodeAt(t);if($t(r)||Ys(r))t+=1;else return this.addToNumericResult(n,u,t,16),this.emitNumericEntity(r,3)}return this.addToNumericResult(n,u,t,16),-1}stateNumericDecimal(n,t){const u=t;for(;t<n.length;){const r=n.charCodeAt(t);if($t(r))t+=1;else return this.addToNumericResult(n,u,t,10),this.emitNumericEntity(r,2)}return this.addToNumericResult(n,u,t,10),-1}emitNumericEntity(n,t){var u;if(this.consumed<=t)return(u=this.errors)===null||u===void 0||u.absenceOfDigitsInNumericCharacterReference(this.consumed),0;if(n===Ee.SEMI)this.consumed+=1;else if(this.decodeMode===un.Strict)return 0;return this.emitCodePoint(Xs(this.result),this.consumed),this.errors&&(n!==Ee.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed}stateNamedEntity(n,t){const{decodeTree:u}=this;let r=u[this.treeIndex],o=(r&on.VALUE_LENGTH)>>14;for(;t<n.length;t++,this.excess++){const s=n.charCodeAt(t);if(this.treeIndex=ti(u,r,this.treeIndex+Math.max(1,o),s),this.treeIndex<0)return this.result===0||this.decodeMode===un.Attribute&&(o===0||ei(s))?0:this.emitNotTerminatedNamedEntity();if(r=u[this.treeIndex],o=(r&on.VALUE_LENGTH)>>14,o!==0){if(s===Ee.SEMI)return this.emitNamedEntityData(this.treeIndex,o,this.consumed+this.excess);this.decodeMode!==un.Strict&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}}return-1}emitNotTerminatedNamedEntity(){var n;const{result:t,decodeTree:u}=this,r=(u[t]&on.VALUE_LENGTH)>>14;return this.emitNamedEntityData(t,r,this.consumed),(n=this.errors)===null||n===void 0||n.missingSemicolonAfterCharacterReference(),this.consumed}emitNamedEntityData(n,t,u){const{decodeTree:r}=this;return this.emitCodePoint(t===1?r[n]&~on.VALUE_LENGTH:r[n+1],u),t===3&&this.emitCodePoint(r[n+2],u),u}end(){var n;switch(this.state){case ke.NamedEntity:return this.result!==0&&(this.decodeMode!==un.Attribute||this.result===this.treeIndex)?this.emitNotTerminatedNamedEntity():0;case ke.NumericDecimal:return this.emitNumericEntity(0,2);case ke.NumericHex:return this.emitNumericEntity(0,3);case ke.NumericStart:return(n=this.errors)===null||n===void 0||n.absenceOfDigitsInNumericCharacterReference(this.consumed),0;case ke.EntityStart:return 0}}}function wr(e){let n="";const t=new ni(e,u=>n+=Ks(u));return function(r,o){let s=0,i=0;for(;(i=r.indexOf("&",i))>=0;){n+=r.slice(s,i),t.startEntity(o);const c=t.write(r,i+1);if(c<0){s=i+t.end();break}s=i+c,i=c===0?s+1:s}const a=n+r.slice(s);return n="",a}}function ti(e,n,t,u){const r=(n&on.BRANCH_LENGTH)>>7,o=n&on.JUMP_TABLE;if(r===0)return o!==0&&u===o?t:-1;if(o){const a=u-o;return a<0||a>=r?-1:e[t+a]-1}let s=t,i=s+r-1;for(;s<=i;){const a=s+i>>>1,c=e[a];if(c<u)s=a+1;else if(c>u)i=a-1;else return e[a+r]}return-1}const ui=wr(Vs);wr(Zs);function Cr(e,n=un.Legacy){return ui(e,n)}function ri(e){return Object.prototype.toString.call(e)}function Jt(e){return ri(e)==="[object String]"}const oi=Object.prototype.hasOwnProperty;function si(e,n){return oi.call(e,n)}function pt(e){return Array.prototype.slice.call(arguments,1).forEach(function(t){if(t){if(typeof t!="object")throw new TypeError(t+"must be object");Object.keys(t).forEach(function(u){e[u]=t[u]})}}),e}function Ar(e,n,t){return[].concat(e.slice(0,n),t,e.slice(n+1))}function eu(e){return!(e>=55296&&e<=57343||e>=64976&&e<=65007||(e&65535)===65535||(e&65535)===65534||e>=0&&e<=8||e===11||e>=14&&e<=31||e>=127&&e<=159||e>1114111)}function at(e){if(e>65535){e-=65536;const n=55296+(e>>10),t=56320+(e&1023);return String.fromCharCode(n,t)}return String.fromCharCode(e)}const Dr=/\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g,ii=/&([a-z#][a-z0-9]{1,31});/gi,ai=new RegExp(Dr.source+"|"+ii.source,"gi"),ci=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;function li(e,n){if(n.charCodeAt(0)===35&&ci.test(n)){const u=n[1].toLowerCase()==="x"?parseInt(n.slice(2),16):parseInt(n.slice(1),10);return eu(u)?at(u):e}const t=Cr(e);return t!==e?t:e}function di(e){return e.indexOf("\\")<0?e:e.replace(Dr,"$1")}function Fn(e){return e.indexOf("\\")<0&&e.indexOf("&")<0?e:e.replace(ai,function(n,t,u){return t||li(n,u)})}const fi=/[&<>"]/,pi=/[&<>"]/g,hi={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};function bi(e){return hi[e]}function cn(e){return fi.test(e)?e.replace(pi,bi):e}const mi=/[.?*+^$[\]\\(){}|-]/g;function gi(e){return e.replace(mi,"\\$&")}function ie(e){switch(e){case 9:case 32:return!0}return!1}function zn(e){if(e>=8192&&e<=8202)return!0;switch(e){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}function $n(e){return Yt.test(e)||kr.test(e)}function Un(e){switch(e){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function ht(e){return e=e.trim().replace(/\s+/g," "),"ẞ".toLowerCase()==="Ṿ"&&(e=e.replace(/ẞ/g,"ß")),e.toLowerCase().toUpperCase()}const xi={mdurl:js,ucmicro:Gs},_i=Object.freeze(Object.defineProperty({__proto__:null,arrayReplaceAt:Ar,assign:pt,escapeHtml:cn,escapeRE:gi,fromCodePoint:at,has:si,isMdAsciiPunct:Un,isPunctChar:$n,isSpace:ie,isString:Jt,isValidEntityCode:eu,isWhiteSpace:zn,lib:xi,normalizeReference:ht,unescapeAll:Fn,unescapeMd:di},Symbol.toStringTag,{value:"Module"}));function vi(e,n,t){let u,r,o,s;const i=e.posMax,a=e.pos;for(e.pos=n+1,u=1;e.pos<i;){if(o=e.src.charCodeAt(e.pos),o===93&&(u--,u===0)){r=!0;break}if(s=e.pos,e.md.inline.skipToken(e),o===91){if(s===e.pos-1)u++;else if(t)return e.pos=a,-1}}let c=-1;return r&&(c=e.pos),e.pos=a,c}function yi(e,n,t){let u,r=n;const o={ok:!1,pos:0,str:""};if(e.charCodeAt(r)===60){for(r++;r<t;){if(u=e.charCodeAt(r),u===10||u===60)return o;if(u===62)return o.pos=r+1,o.str=Fn(e.slice(n+1,r)),o.ok=!0,o;if(u===92&&r+1<t){r+=2;continue}r++}return o}let s=0;for(;r<t&&(u=e.charCodeAt(r),!(u===32||u<32||u===127));){if(u===92&&r+1<t){if(e.charCodeAt(r+1)===32)break;r+=2;continue}if(u===40&&(s++,s>32))return o;if(u===41){if(s===0)break;s--}r++}return n===r||s!==0||(o.str=Fn(e.slice(n,r)),o.pos=r,o.ok=!0),o}function ki(e,n,t,u){let r,o=n;const s={ok:!1,can_continue:!1,pos:0,str:"",marker:0};if(u)s.str=u.str,s.marker=u.marker;else{if(o>=t)return s;let i=e.charCodeAt(o);if(i!==34&&i!==39&&i!==40)return s;n++,o++,i===40&&(i=41),s.marker=i}for(;o<t;){if(r=e.charCodeAt(o),r===s.marker)return s.pos=o+1,s.str+=Fn(e.slice(n,o)),s.ok=!0,s;if(r===40&&s.marker===41)return s;r===92&&o+1<t&&o++,o++}return s.can_continue=!0,s.str+=Fn(e.slice(n,o)),s}const Ei=Object.freeze(Object.defineProperty({__proto__:null,parseLinkDestination:yi,parseLinkLabel:vi,parseLinkTitle:ki},Symbol.toStringTag,{value:"Module"})),Ge={};Ge.code_inline=function(e,n,t,u,r){const o=e[n];return"<code"+r.renderAttrs(o)+">"+cn(o.content)+"</code>"};Ge.code_block=function(e,n,t,u,r){const o=e[n];return"<pre"+r.renderAttrs(o)+"><code>"+cn(e[n].content)+`</code></pre>
`};Ge.fence=function(e,n,t,u,r){const o=e[n],s=o.info?Fn(o.info).trim():"";let i="",a="";if(s){const l=s.split(/(\s+)/g);i=l[0],a=l.slice(2).join("")}let c;if(t.highlight?c=t.highlight(o.content,i,a)||cn(o.content):c=cn(o.content),c.indexOf("<pre")===0)return c+`
`;if(s){const l=o.attrIndex("class"),d=o.attrs?o.attrs.slice():[];l<0?d.push(["class",t.langPrefix+i]):(d[l]=d[l].slice(),d[l][1]+=" "+t.langPrefix+i);const p={attrs:d};return`<pre><code${r.renderAttrs(p)}>${c}</code></pre>
`}return`<pre><code${r.renderAttrs(o)}>${c}</code></pre>
`};Ge.image=function(e,n,t,u,r){const o=e[n];return o.attrs[o.attrIndex("alt")][1]=r.renderInlineAsText(o.children,t,u),r.renderToken(e,n,t)};Ge.hardbreak=function(e,n,t){return t.xhtmlOut?`<br />
`:`<br>
`};Ge.softbreak=function(e,n,t){return t.breaks?t.xhtmlOut?`<br />
`:`<br>
`:`
`};Ge.text=function(e,n){return cn(e[n].content)};Ge.html_block=function(e,n){return e[n].content};Ge.html_inline=function(e,n){return e[n].content};function Tn(){this.rules=pt({},Ge)}Tn.prototype.renderAttrs=function(n){let t,u,r;if(!n.attrs)return"";for(r="",t=0,u=n.attrs.length;t<u;t++)r+=" "+cn(n.attrs[t][0])+'="'+cn(n.attrs[t][1])+'"';return r};Tn.prototype.renderToken=function(n,t,u){const r=n[t];let o="";if(r.hidden)return"";r.block&&r.nesting!==-1&&t&&n[t-1].hidden&&(o+=`
`),o+=(r.nesting===-1?"</":"<")+r.tag,o+=this.renderAttrs(r),r.nesting===0&&u.xhtmlOut&&(o+=" /");let s=!1;if(r.block&&(s=!0,r.nesting===1&&t+1<n.length)){const i=n[t+1];(i.type==="inline"||i.hidden||i.nesting===-1&&i.tag===r.tag)&&(s=!1)}return o+=s?`>
`:">",o};Tn.prototype.renderInline=function(e,n,t){let u="";const r=this.rules;for(let o=0,s=e.length;o<s;o++){const i=e[o].type;typeof r[i]<"u"?u+=r[i](e,o,n,t,this):u+=this.renderToken(e,o,n)}return u};Tn.prototype.renderInlineAsText=function(e,n,t){let u="";for(let r=0,o=e.length;r<o;r++)switch(e[r].type){case"text":u+=e[r].content;break;case"image":u+=this.renderInlineAsText(e[r].children,n,t);break;case"html_inline":case"html_block":u+=e[r].content;break;case"softbreak":case"hardbreak":u+=`
`;break}return u};Tn.prototype.render=function(e,n,t){let u="";const r=this.rules;for(let o=0,s=e.length;o<s;o++){const i=e[o].type;i==="inline"?u+=this.renderInline(e[o].children,n,t):typeof r[i]<"u"?u+=r[i](e,o,n,t,this):u+=this.renderToken(e,o,n,t)}return u};function Me(){this.__rules__=[],this.__cache__=null}Me.prototype.__find__=function(e){for(let n=0;n<this.__rules__.length;n++)if(this.__rules__[n].name===e)return n;return-1};Me.prototype.__compile__=function(){const e=this,n=[""];e.__rules__.forEach(function(t){t.enabled&&t.alt.forEach(function(u){n.indexOf(u)<0&&n.push(u)})}),e.__cache__={},n.forEach(function(t){e.__cache__[t]=[],e.__rules__.forEach(function(u){u.enabled&&(t&&u.alt.indexOf(t)<0||e.__cache__[t].push(u.fn))})})};Me.prototype.at=function(e,n,t){const u=this.__find__(e),r=t||{};if(u===-1)throw new Error("Parser rule not found: "+e);this.__rules__[u].fn=n,this.__rules__[u].alt=r.alt||[],this.__cache__=null};Me.prototype.before=function(e,n,t,u){const r=this.__find__(e),o=u||{};if(r===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(r,0,{name:n,enabled:!0,fn:t,alt:o.alt||[]}),this.__cache__=null};Me.prototype.after=function(e,n,t,u){const r=this.__find__(e),o=u||{};if(r===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(r+1,0,{name:n,enabled:!0,fn:t,alt:o.alt||[]}),this.__cache__=null};Me.prototype.push=function(e,n,t){const u=t||{};this.__rules__.push({name:e,enabled:!0,fn:n,alt:u.alt||[]}),this.__cache__=null};Me.prototype.enable=function(e,n){Array.isArray(e)||(e=[e]);const t=[];return e.forEach(function(u){const r=this.__find__(u);if(r<0){if(n)return;throw new Error("Rules manager: invalid rule name "+u)}this.__rules__[r].enabled=!0,t.push(u)},this),this.__cache__=null,t};Me.prototype.enableOnly=function(e,n){Array.isArray(e)||(e=[e]),this.__rules__.forEach(function(t){t.enabled=!1}),this.enable(e,n)};Me.prototype.disable=function(e,n){Array.isArray(e)||(e=[e]);const t=[];return e.forEach(function(u){const r=this.__find__(u);if(r<0){if(n)return;throw new Error("Rules manager: invalid rule name "+u)}this.__rules__[r].enabled=!1,t.push(u)},this),this.__cache__=null,t};Me.prototype.getRules=function(e){return this.__cache__===null&&this.__compile__(),this.__cache__[e]||[]};function $e(e,n,t){this.type=e,this.tag=n,this.attrs=null,this.map=null,this.nesting=t,this.level=0,this.children=null,this.content="",this.markup="",this.info="",this.meta=null,this.block=!1,this.hidden=!1}$e.prototype.attrIndex=function(n){if(!this.attrs)return-1;const t=this.attrs;for(let u=0,r=t.length;u<r;u++)if(t[u][0]===n)return u;return-1};$e.prototype.attrPush=function(n){this.attrs?this.attrs.push(n):this.attrs=[n]};$e.prototype.attrSet=function(n,t){const u=this.attrIndex(n),r=[n,t];u<0?this.attrPush(r):this.attrs[u]=r};$e.prototype.attrGet=function(n){const t=this.attrIndex(n);let u=null;return t>=0&&(u=this.attrs[t][1]),u};$e.prototype.attrJoin=function(n,t){const u=this.attrIndex(n);u<0?this.attrPush([n,t]):this.attrs[u][1]=this.attrs[u][1]+" "+t};function Sr(e,n,t){this.src=e,this.env=t,this.tokens=[],this.inlineMode=!1,this.md=n}Sr.prototype.Token=$e;const wi=/\r\n?|\n/g,Ci=/\0/g;function Ai(e){let n;n=e.src.replace(wi,`
`),n=n.replace(Ci,"�"),e.src=n}function Di(e){let n;e.inlineMode?(n=new e.Token("inline","",0),n.content=e.src,n.map=[0,1],n.children=[],e.tokens.push(n)):e.md.block.parse(e.src,e.md,e.env,e.tokens)}function Si(e){const n=e.tokens;for(let t=0,u=n.length;t<u;t++){const r=n[t];r.type==="inline"&&e.md.inline.parse(r.content,e.md,e.env,r.children)}}function Fi(e){return/^<a[>\s]/i.test(e)}function Ti(e){return/^<\/a\s*>/i.test(e)}function Mi(e){const n=e.tokens;if(e.md.options.linkify)for(let t=0,u=n.length;t<u;t++){if(n[t].type!=="inline"||!e.md.linkify.pretest(n[t].content))continue;let r=n[t].children,o=0;for(let s=r.length-1;s>=0;s--){const i=r[s];if(i.type==="link_close"){for(s--;r[s].level!==i.level&&r[s].type!=="link_open";)s--;continue}if(i.type==="html_inline"&&(Fi(i.content)&&o>0&&o--,Ti(i.content)&&o++),!(o>0)&&i.type==="text"&&e.md.linkify.test(i.content)){const a=i.content;let c=e.md.linkify.match(a);const l=[];let d=i.level,p=0;c.length>0&&c[0].index===0&&s>0&&r[s-1].type==="text_special"&&(c=c.slice(1));for(let b=0;b<c.length;b++){const h=c[b].url,k=e.md.normalizeLink(h);if(!e.md.validateLink(k))continue;let v=c[b].text;c[b].schema?c[b].schema==="mailto:"&&!/^mailto:/i.test(v)?v=e.md.normalizeLinkText("mailto:"+v).replace(/^mailto:/,""):v=e.md.normalizeLinkText(v):v=e.md.normalizeLinkText("http://"+v).replace(/^http:\/\//,"");const y=c[b].index;if(y>p){const D=new e.Token("text","",0);D.content=a.slice(p,y),D.level=d,l.push(D)}const g=new e.Token("link_open","a",1);g.attrs=[["href",k]],g.level=d++,g.markup="linkify",g.info="auto",l.push(g);const x=new e.Token("text","",0);x.content=v,x.level=d,l.push(x);const E=new e.Token("link_close","a",-1);E.level=--d,E.markup="linkify",E.info="auto",l.push(E),p=c[b].lastIndex}if(p<a.length){const b=new e.Token("text","",0);b.content=a.slice(p),b.level=d,l.push(b)}n[t].children=r=Ar(r,s,l)}}}}const Fr=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,Oi=/\((c|tm|r)\)/i,Ni=/\((c|tm|r)\)/ig,Ri={c:"©",r:"®",tm:"™"};function Ii(e,n){return Ri[n.toLowerCase()]}function Bi(e){let n=0;for(let t=e.length-1;t>=0;t--){const u=e[t];u.type==="text"&&!n&&(u.content=u.content.replace(Ni,Ii)),u.type==="link_open"&&u.info==="auto"&&n--,u.type==="link_close"&&u.info==="auto"&&n++}}function Pi(e){let n=0;for(let t=e.length-1;t>=0;t--){const u=e[t];u.type==="text"&&!n&&Fr.test(u.content)&&(u.content=u.content.replace(/\+-/g,"±").replace(/\.{2,}/g,"…").replace(/([?!])…/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---(?=[^-]|$)/mg,"$1—").replace(/(^|\s)--(?=\s|$)/mg,"$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg,"$1–")),u.type==="link_open"&&u.info==="auto"&&n--,u.type==="link_close"&&u.info==="auto"&&n++}}function Li(e){let n;if(e.md.options.typographer)for(n=e.tokens.length-1;n>=0;n--)e.tokens[n].type==="inline"&&(Oi.test(e.tokens[n].content)&&Bi(e.tokens[n].children),Fr.test(e.tokens[n].content)&&Pi(e.tokens[n].children))}const zi=/['"]/,Lu=/['"]/g,zu="’";function et(e,n,t){return e.slice(0,n)+t+e.slice(n+1)}function $i(e,n){let t;const u=[];for(let r=0;r<e.length;r++){const o=e[r],s=e[r].level;for(t=u.length-1;t>=0&&!(u[t].level<=s);t--);if(u.length=t+1,o.type!=="text")continue;let i=o.content,a=0,c=i.length;e:for(;a<c;){Lu.lastIndex=a;const l=Lu.exec(i);if(!l)break;let d=!0,p=!0;a=l.index+1;const b=l[0]==="'";let h=32;if(l.index-1>=0)h=i.charCodeAt(l.index-1);else for(t=r-1;t>=0&&!(e[t].type==="softbreak"||e[t].type==="hardbreak");t--)if(e[t].content){h=e[t].content.charCodeAt(e[t].content.length-1);break}let k=32;if(a<c)k=i.charCodeAt(a);else for(t=r+1;t<e.length&&!(e[t].type==="softbreak"||e[t].type==="hardbreak");t++)if(e[t].content){k=e[t].content.charCodeAt(0);break}const v=Un(h)||$n(String.fromCharCode(h)),y=Un(k)||$n(String.fromCharCode(k)),g=zn(h),x=zn(k);if(x?d=!1:y&&(g||v||(d=!1)),g?p=!1:v&&(x||y||(p=!1)),k===34&&l[0]==='"'&&h>=48&&h<=57&&(p=d=!1),d&&p&&(d=v,p=y),!d&&!p){b&&(o.content=et(o.content,l.index,zu));continue}if(p)for(t=u.length-1;t>=0;t--){let E=u[t];if(u[t].level<s)break;if(E.single===b&&u[t].level===s){E=u[t];let D,I;b?(D=n.md.options.quotes[2],I=n.md.options.quotes[3]):(D=n.md.options.quotes[0],I=n.md.options.quotes[1]),o.content=et(o.content,l.index,I),e[E.token].content=et(e[E.token].content,E.pos,D),a+=I.length-1,E.token===r&&(a+=D.length-1),i=o.content,c=i.length,u.length=t;continue e}}d?u.push({token:r,pos:l.index,single:b,level:s}):p&&b&&(o.content=et(o.content,l.index,zu))}}}function Ui(e){if(e.md.options.typographer)for(let n=e.tokens.length-1;n>=0;n--)e.tokens[n].type!=="inline"||!zi.test(e.tokens[n].content)||$i(e.tokens[n].children,e)}function qi(e){let n,t;const u=e.tokens,r=u.length;for(let o=0;o<r;o++){if(u[o].type!=="inline")continue;const s=u[o].children,i=s.length;for(n=0;n<i;n++)s[n].type==="text_special"&&(s[n].type="text");for(n=t=0;n<i;n++)s[n].type==="text"&&n+1<i&&s[n+1].type==="text"?s[n+1].content=s[n].content+s[n+1].content:(n!==t&&(s[t]=s[n]),t++);n!==t&&(s.length=t)}}const At=[["normalize",Ai],["block",Di],["inline",Si],["linkify",Mi],["replacements",Li],["smartquotes",Ui],["text_join",qi]];function nu(){this.ruler=new Me;for(let e=0;e<At.length;e++)this.ruler.push(At[e][0],At[e][1])}nu.prototype.process=function(e){const n=this.ruler.getRules("");for(let t=0,u=n.length;t<u;t++)n[t](e)};nu.prototype.State=Sr;function Ve(e,n,t,u){this.src=e,this.md=n,this.env=t,this.tokens=u,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType="root",this.level=0;const r=this.src;for(let o=0,s=0,i=0,a=0,c=r.length,l=!1;s<c;s++){const d=r.charCodeAt(s);if(!l)if(ie(d)){i++,d===9?a+=4-a%4:a++;continue}else l=!0;(d===10||s===c-1)&&(d!==10&&s++,this.bMarks.push(o),this.eMarks.push(s),this.tShift.push(i),this.sCount.push(a),this.bsCount.push(0),l=!1,i=0,a=0,o=s+1)}this.bMarks.push(r.length),this.eMarks.push(r.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}Ve.prototype.push=function(e,n,t){const u=new $e(e,n,t);return u.block=!0,t<0&&this.level--,u.level=this.level,t>0&&this.level++,this.tokens.push(u),u};Ve.prototype.isEmpty=function(n){return this.bMarks[n]+this.tShift[n]>=this.eMarks[n]};Ve.prototype.skipEmptyLines=function(n){for(let t=this.lineMax;n<t&&!(this.bMarks[n]+this.tShift[n]<this.eMarks[n]);n++);return n};Ve.prototype.skipSpaces=function(n){for(let t=this.src.length;n<t;n++){const u=this.src.charCodeAt(n);if(!ie(u))break}return n};Ve.prototype.skipSpacesBack=function(n,t){if(n<=t)return n;for(;n>t;)if(!ie(this.src.charCodeAt(--n)))return n+1;return n};Ve.prototype.skipChars=function(n,t){for(let u=this.src.length;n<u&&this.src.charCodeAt(n)===t;n++);return n};Ve.prototype.skipCharsBack=function(n,t,u){if(n<=u)return n;for(;n>u;)if(t!==this.src.charCodeAt(--n))return n+1;return n};Ve.prototype.getLines=function(n,t,u,r){if(n>=t)return"";const o=new Array(t-n);for(let s=0,i=n;i<t;i++,s++){let a=0;const c=this.bMarks[i];let l=c,d;for(i+1<t||r?d=this.eMarks[i]+1:d=this.eMarks[i];l<d&&a<u;){const p=this.src.charCodeAt(l);if(ie(p))p===9?a+=4-(a+this.bsCount[i])%4:a++;else if(l-c<this.tShift[i])a++;else break;l++}a>u?o[s]=new Array(a-u+1).join(" ")+this.src.slice(l,d):o[s]=this.src.slice(l,d)}return o.join("")};Ve.prototype.Token=$e;const ji=65536;function Dt(e,n){const t=e.bMarks[n]+e.tShift[n],u=e.eMarks[n];return e.src.slice(t,u)}function $u(e){const n=[],t=e.length;let u=0,r=e.charCodeAt(u),o=!1,s=0,i="";for(;u<t;)r===124&&(o?(i+=e.substring(s,u-1),s=u):(n.push(i+e.substring(s,u)),i="",s=u+1)),o=r===92,u++,r=e.charCodeAt(u);return n.push(i+e.substring(s)),n}function Hi(e,n,t,u){if(n+2>t)return!1;let r=n+1;if(e.sCount[r]<e.blkIndent||e.sCount[r]-e.blkIndent>=4)return!1;let o=e.bMarks[r]+e.tShift[r];if(o>=e.eMarks[r])return!1;const s=e.src.charCodeAt(o++);if(s!==124&&s!==45&&s!==58||o>=e.eMarks[r])return!1;const i=e.src.charCodeAt(o++);if(i!==124&&i!==45&&i!==58&&!ie(i)||s===45&&ie(i))return!1;for(;o<e.eMarks[r];){const E=e.src.charCodeAt(o);if(E!==124&&E!==45&&E!==58&&!ie(E))return!1;o++}let a=Dt(e,n+1),c=a.split("|");const l=[];for(let E=0;E<c.length;E++){const D=c[E].trim();if(!D){if(E===0||E===c.length-1)continue;return!1}if(!/^:?-+:?$/.test(D))return!1;D.charCodeAt(D.length-1)===58?l.push(D.charCodeAt(0)===58?"center":"right"):D.charCodeAt(0)===58?l.push("left"):l.push("")}if(a=Dt(e,n).trim(),a.indexOf("|")===-1||e.sCount[n]-e.blkIndent>=4)return!1;c=$u(a),c.length&&c[0]===""&&c.shift(),c.length&&c[c.length-1]===""&&c.pop();const d=c.length;if(d===0||d!==l.length)return!1;if(u)return!0;const p=e.parentType;e.parentType="table";const b=e.md.block.ruler.getRules("blockquote"),h=e.push("table_open","table",1),k=[n,0];h.map=k;const v=e.push("thead_open","thead",1);v.map=[n,n+1];const y=e.push("tr_open","tr",1);y.map=[n,n+1];for(let E=0;E<c.length;E++){const D=e.push("th_open","th",1);l[E]&&(D.attrs=[["style","text-align:"+l[E]]]);const I=e.push("inline","",0);I.content=c[E].trim(),I.children=[],e.push("th_close","th",-1)}e.push("tr_close","tr",-1),e.push("thead_close","thead",-1);let g,x=0;for(r=n+2;r<t&&!(e.sCount[r]<e.blkIndent);r++){let E=!1;for(let I=0,K=b.length;I<K;I++)if(b[I](e,r,t,!0)){E=!0;break}if(E||(a=Dt(e,r).trim(),!a)||e.sCount[r]-e.blkIndent>=4||(c=$u(a),c.length&&c[0]===""&&c.shift(),c.length&&c[c.length-1]===""&&c.pop(),x+=d-c.length,x>ji))break;if(r===n+2){const I=e.push("tbody_open","tbody",1);I.map=g=[n+2,0]}const D=e.push("tr_open","tr",1);D.map=[r,r+1];for(let I=0;I<d;I++){const K=e.push("td_open","td",1);l[I]&&(K.attrs=[["style","text-align:"+l[I]]]);const F=e.push("inline","",0);F.content=c[I]?c[I].trim():"",F.children=[],e.push("td_close","td",-1)}e.push("tr_close","tr",-1)}return g&&(e.push("tbody_close","tbody",-1),g[1]=r),e.push("table_close","table",-1),k[1]=r,e.parentType=p,e.line=r,!0}function Gi(e,n,t){if(e.sCount[n]-e.blkIndent<4)return!1;let u=n+1,r=u;for(;u<t;){if(e.isEmpty(u)){u++;continue}if(e.sCount[u]-e.blkIndent>=4){u++,r=u;continue}break}e.line=r;const o=e.push("code_block","code",0);return o.content=e.getLines(n,r,4+e.blkIndent,!1)+`
`,o.map=[n,e.line],!0}function Vi(e,n,t,u){let r=e.bMarks[n]+e.tShift[n],o=e.eMarks[n];if(e.sCount[n]-e.blkIndent>=4||r+3>o)return!1;const s=e.src.charCodeAt(r);if(s!==126&&s!==96)return!1;let i=r;r=e.skipChars(r,s);let a=r-i;if(a<3)return!1;const c=e.src.slice(i,r),l=e.src.slice(r,o);if(s===96&&l.indexOf(String.fromCharCode(s))>=0)return!1;if(u)return!0;let d=n,p=!1;for(;d++,!(d>=t||(r=i=e.bMarks[d]+e.tShift[d],o=e.eMarks[d],r<o&&e.sCount[d]<e.blkIndent));)if(e.src.charCodeAt(r)===s&&!(e.sCount[d]-e.blkIndent>=4)&&(r=e.skipChars(r,s),!(r-i<a)&&(r=e.skipSpaces(r),!(r<o)))){p=!0;break}a=e.sCount[n],e.line=d+(p?1:0);const b=e.push("fence","code",0);return b.info=l,b.content=e.getLines(n+1,d,a,!0),b.markup=c,b.map=[n,e.line],!0}function Zi(e,n,t,u){let r=e.bMarks[n]+e.tShift[n],o=e.eMarks[n];const s=e.lineMax;if(e.sCount[n]-e.blkIndent>=4||e.src.charCodeAt(r)!==62)return!1;if(u)return!0;const i=[],a=[],c=[],l=[],d=e.md.block.ruler.getRules("blockquote"),p=e.parentType;e.parentType="blockquote";let b=!1,h;for(h=n;h<t;h++){const x=e.sCount[h]<e.blkIndent;if(r=e.bMarks[h]+e.tShift[h],o=e.eMarks[h],r>=o)break;if(e.src.charCodeAt(r++)===62&&!x){let D=e.sCount[h]+1,I,K;e.src.charCodeAt(r)===32?(r++,D++,K=!1,I=!0):e.src.charCodeAt(r)===9?(I=!0,(e.bsCount[h]+D)%4===3?(r++,D++,K=!1):K=!0):I=!1;let F=D;for(i.push(e.bMarks[h]),e.bMarks[h]=r;r<o;){const Z=e.src.charCodeAt(r);if(ie(Z))Z===9?F+=4-(F+e.bsCount[h]+(K?1:0))%4:F++;else break;r++}b=r>=o,a.push(e.bsCount[h]),e.bsCount[h]=e.sCount[h]+1+(I?1:0),c.push(e.sCount[h]),e.sCount[h]=F-D,l.push(e.tShift[h]),e.tShift[h]=r-e.bMarks[h];continue}if(b)break;let E=!1;for(let D=0,I=d.length;D<I;D++)if(d[D](e,h,t,!0)){E=!0;break}if(E){e.lineMax=h,e.blkIndent!==0&&(i.push(e.bMarks[h]),a.push(e.bsCount[h]),l.push(e.tShift[h]),c.push(e.sCount[h]),e.sCount[h]-=e.blkIndent);break}i.push(e.bMarks[h]),a.push(e.bsCount[h]),l.push(e.tShift[h]),c.push(e.sCount[h]),e.sCount[h]=-1}const k=e.blkIndent;e.blkIndent=0;const v=e.push("blockquote_open","blockquote",1);v.markup=">";const y=[n,0];v.map=y,e.md.block.tokenize(e,n,h);const g=e.push("blockquote_close","blockquote",-1);g.markup=">",e.lineMax=s,e.parentType=p,y[1]=e.line;for(let x=0;x<l.length;x++)e.bMarks[x+n]=i[x],e.tShift[x+n]=l[x],e.sCount[x+n]=c[x],e.bsCount[x+n]=a[x];return e.blkIndent=k,!0}function Wi(e,n,t,u){const r=e.eMarks[n];if(e.sCount[n]-e.blkIndent>=4)return!1;let o=e.bMarks[n]+e.tShift[n];const s=e.src.charCodeAt(o++);if(s!==42&&s!==45&&s!==95)return!1;let i=1;for(;o<r;){const c=e.src.charCodeAt(o++);if(c!==s&&!ie(c))return!1;c===s&&i++}if(i<3)return!1;if(u)return!0;e.line=n+1;const a=e.push("hr","hr",0);return a.map=[n,e.line],a.markup=Array(i+1).join(String.fromCharCode(s)),!0}function Uu(e,n){const t=e.eMarks[n];let u=e.bMarks[n]+e.tShift[n];const r=e.src.charCodeAt(u++);if(r!==42&&r!==45&&r!==43)return-1;if(u<t){const o=e.src.charCodeAt(u);if(!ie(o))return-1}return u}function qu(e,n){const t=e.bMarks[n]+e.tShift[n],u=e.eMarks[n];let r=t;if(r+1>=u)return-1;let o=e.src.charCodeAt(r++);if(o<48||o>57)return-1;for(;;){if(r>=u)return-1;if(o=e.src.charCodeAt(r++),o>=48&&o<=57){if(r-t>=10)return-1;continue}if(o===41||o===46)break;return-1}return r<u&&(o=e.src.charCodeAt(r),!ie(o))?-1:r}function Ki(e,n){const t=e.level+2;for(let u=n+2,r=e.tokens.length-2;u<r;u++)e.tokens[u].level===t&&e.tokens[u].type==="paragraph_open"&&(e.tokens[u+2].hidden=!0,e.tokens[u].hidden=!0,u+=2)}function Xi(e,n,t,u){let r,o,s,i,a=n,c=!0;if(e.sCount[a]-e.blkIndent>=4||e.listIndent>=0&&e.sCount[a]-e.listIndent>=4&&e.sCount[a]<e.blkIndent)return!1;let l=!1;u&&e.parentType==="paragraph"&&e.sCount[a]>=e.blkIndent&&(l=!0);let d,p,b;if((b=qu(e,a))>=0){if(d=!0,s=e.bMarks[a]+e.tShift[a],p=Number(e.src.slice(s,b-1)),l&&p!==1)return!1}else if((b=Uu(e,a))>=0)d=!1;else return!1;if(l&&e.skipSpaces(b)>=e.eMarks[a])return!1;if(u)return!0;const h=e.src.charCodeAt(b-1),k=e.tokens.length;d?(i=e.push("ordered_list_open","ol",1),p!==1&&(i.attrs=[["start",p]])):i=e.push("bullet_list_open","ul",1);const v=[a,0];i.map=v,i.markup=String.fromCharCode(h);let y=!1;const g=e.md.block.ruler.getRules("list"),x=e.parentType;for(e.parentType="list";a<t;){o=b,r=e.eMarks[a];const E=e.sCount[a]+b-(e.bMarks[a]+e.tShift[a]);let D=E;for(;o<r;){const ne=e.src.charCodeAt(o);if(ne===9)D+=4-(D+e.bsCount[a])%4;else if(ne===32)D++;else break;o++}const I=o;let K;I>=r?K=1:K=D-E,K>4&&(K=1);const F=E+K;i=e.push("list_item_open","li",1),i.markup=String.fromCharCode(h);const Z=[a,0];i.map=Z,d&&(i.info=e.src.slice(s,b-1));const de=e.tight,fe=e.tShift[a],Ce=e.sCount[a],Fe=e.listIndent;if(e.listIndent=e.blkIndent,e.blkIndent=F,e.tight=!0,e.tShift[a]=I-e.bMarks[a],e.sCount[a]=D,I>=r&&e.isEmpty(a+1)?e.line=Math.min(e.line+2,t):e.md.block.tokenize(e,a,t,!0),(!e.tight||y)&&(c=!1),y=e.line-a>1&&e.isEmpty(e.line-1),e.blkIndent=e.listIndent,e.listIndent=Fe,e.tShift[a]=fe,e.sCount[a]=Ce,e.tight=de,i=e.push("list_item_close","li",-1),i.markup=String.fromCharCode(h),a=e.line,Z[1]=a,a>=t||e.sCount[a]<e.blkIndent||e.sCount[a]-e.blkIndent>=4)break;let le=!1;for(let ne=0,ce=g.length;ne<ce;ne++)if(g[ne](e,a,t,!0)){le=!0;break}if(le)break;if(d){if(b=qu(e,a),b<0)break;s=e.bMarks[a]+e.tShift[a]}else if(b=Uu(e,a),b<0)break;if(h!==e.src.charCodeAt(b-1))break}return d?i=e.push("ordered_list_close","ol",-1):i=e.push("bullet_list_close","ul",-1),i.markup=String.fromCharCode(h),v[1]=a,e.line=a,e.parentType=x,c&&Ki(e,k),!0}function Qi(e,n,t,u){let r=e.bMarks[n]+e.tShift[n],o=e.eMarks[n],s=n+1;if(e.sCount[n]-e.blkIndent>=4||e.src.charCodeAt(r)!==91)return!1;function i(g){const x=e.lineMax;if(g>=x||e.isEmpty(g))return null;let E=!1;if(e.sCount[g]-e.blkIndent>3&&(E=!0),e.sCount[g]<0&&(E=!0),!E){const K=e.md.block.ruler.getRules("reference"),F=e.parentType;e.parentType="reference";let Z=!1;for(let de=0,fe=K.length;de<fe;de++)if(K[de](e,g,x,!0)){Z=!0;break}if(e.parentType=F,Z)return null}const D=e.bMarks[g]+e.tShift[g],I=e.eMarks[g];return e.src.slice(D,I+1)}let a=e.src.slice(r,o+1);o=a.length;let c=-1;for(r=1;r<o;r++){const g=a.charCodeAt(r);if(g===91)return!1;if(g===93){c=r;break}else if(g===10){const x=i(s);x!==null&&(a+=x,o=a.length,s++)}else if(g===92&&(r++,r<o&&a.charCodeAt(r)===10)){const x=i(s);x!==null&&(a+=x,o=a.length,s++)}}if(c<0||a.charCodeAt(c+1)!==58)return!1;for(r=c+2;r<o;r++){const g=a.charCodeAt(r);if(g===10){const x=i(s);x!==null&&(a+=x,o=a.length,s++)}else if(!ie(g))break}const l=e.md.helpers.parseLinkDestination(a,r,o);if(!l.ok)return!1;const d=e.md.normalizeLink(l.str);if(!e.md.validateLink(d))return!1;r=l.pos;const p=r,b=s,h=r;for(;r<o;r++){const g=a.charCodeAt(r);if(g===10){const x=i(s);x!==null&&(a+=x,o=a.length,s++)}else if(!ie(g))break}let k=e.md.helpers.parseLinkTitle(a,r,o);for(;k.can_continue;){const g=i(s);if(g===null)break;a+=g,r=o,o=a.length,s++,k=e.md.helpers.parseLinkTitle(a,r,o,k)}let v;for(r<o&&h!==r&&k.ok?(v=k.str,r=k.pos):(v="",r=p,s=b);r<o;){const g=a.charCodeAt(r);if(!ie(g))break;r++}if(r<o&&a.charCodeAt(r)!==10&&v)for(v="",r=p,s=b;r<o;){const g=a.charCodeAt(r);if(!ie(g))break;r++}if(r<o&&a.charCodeAt(r)!==10)return!1;const y=ht(a.slice(1,c));return y?(u||(typeof e.env.references>"u"&&(e.env.references={}),typeof e.env.references[y]>"u"&&(e.env.references[y]={title:v,href:d}),e.line=s),!0):!1}const Yi=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Ji="[a-zA-Z_:][a-zA-Z0-9:._-]*",ea="[^\"'=<>`\\x00-\\x20]+",na="'[^']*'",ta='"[^"]*"',ua="(?:"+ea+"|"+na+"|"+ta+")",ra="(?:\\s+"+Ji+"(?:\\s*=\\s*"+ua+")?)",Tr="<[A-Za-z][A-Za-z0-9\\-]*"+ra+"*\\s*\\/?>",Mr="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",oa="<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->",sa="<[?][\\s\\S]*?[?]>",ia="<![A-Za-z][^>]*>",aa="<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",ca=new RegExp("^(?:"+Tr+"|"+Mr+"|"+oa+"|"+sa+"|"+ia+"|"+aa+")"),la=new RegExp("^(?:"+Tr+"|"+Mr+")"),kn=[[/^<(script|pre|style|textarea)(?=(\s|>|$))/i,/<\/(script|pre|style|textarea)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+Yi.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(la.source+"\\s*$"),/^$/,!1]];function da(e,n,t,u){let r=e.bMarks[n]+e.tShift[n],o=e.eMarks[n];if(e.sCount[n]-e.blkIndent>=4||!e.md.options.html||e.src.charCodeAt(r)!==60)return!1;let s=e.src.slice(r,o),i=0;for(;i<kn.length&&!kn[i][0].test(s);i++);if(i===kn.length)return!1;if(u)return kn[i][2];let a=n+1;if(!kn[i][1].test(s)){for(;a<t&&!(e.sCount[a]<e.blkIndent);a++)if(r=e.bMarks[a]+e.tShift[a],o=e.eMarks[a],s=e.src.slice(r,o),kn[i][1].test(s)){s.length!==0&&a++;break}}e.line=a;const c=e.push("html_block","",0);return c.map=[n,a],c.content=e.getLines(n,a,e.blkIndent,!0),!0}function fa(e,n,t,u){let r=e.bMarks[n]+e.tShift[n],o=e.eMarks[n];if(e.sCount[n]-e.blkIndent>=4)return!1;let s=e.src.charCodeAt(r);if(s!==35||r>=o)return!1;let i=1;for(s=e.src.charCodeAt(++r);s===35&&r<o&&i<=6;)i++,s=e.src.charCodeAt(++r);if(i>6||r<o&&!ie(s))return!1;if(u)return!0;o=e.skipSpacesBack(o,r);const a=e.skipCharsBack(o,35,r);a>r&&ie(e.src.charCodeAt(a-1))&&(o=a),e.line=n+1;const c=e.push("heading_open","h"+String(i),1);c.markup="########".slice(0,i),c.map=[n,e.line];const l=e.push("inline","",0);l.content=e.src.slice(r,o).trim(),l.map=[n,e.line],l.children=[];const d=e.push("heading_close","h"+String(i),-1);return d.markup="########".slice(0,i),!0}function pa(e,n,t){const u=e.md.block.ruler.getRules("paragraph");if(e.sCount[n]-e.blkIndent>=4)return!1;const r=e.parentType;e.parentType="paragraph";let o=0,s,i=n+1;for(;i<t&&!e.isEmpty(i);i++){if(e.sCount[i]-e.blkIndent>3)continue;if(e.sCount[i]>=e.blkIndent){let b=e.bMarks[i]+e.tShift[i];const h=e.eMarks[i];if(b<h&&(s=e.src.charCodeAt(b),(s===45||s===61)&&(b=e.skipChars(b,s),b=e.skipSpaces(b),b>=h))){o=s===61?1:2;break}}if(e.sCount[i]<0)continue;let p=!1;for(let b=0,h=u.length;b<h;b++)if(u[b](e,i,t,!0)){p=!0;break}if(p)break}if(!o)return!1;const a=e.getLines(n,i,e.blkIndent,!1).trim();e.line=i+1;const c=e.push("heading_open","h"+String(o),1);c.markup=String.fromCharCode(s),c.map=[n,e.line];const l=e.push("inline","",0);l.content=a,l.map=[n,e.line-1],l.children=[];const d=e.push("heading_close","h"+String(o),-1);return d.markup=String.fromCharCode(s),e.parentType=r,!0}function ha(e,n,t){const u=e.md.block.ruler.getRules("paragraph"),r=e.parentType;let o=n+1;for(e.parentType="paragraph";o<t&&!e.isEmpty(o);o++){if(e.sCount[o]-e.blkIndent>3||e.sCount[o]<0)continue;let c=!1;for(let l=0,d=u.length;l<d;l++)if(u[l](e,o,t,!0)){c=!0;break}if(c)break}const s=e.getLines(n,o,e.blkIndent,!1).trim();e.line=o;const i=e.push("paragraph_open","p",1);i.map=[n,e.line];const a=e.push("inline","",0);return a.content=s,a.map=[n,e.line],a.children=[],e.push("paragraph_close","p",-1),e.parentType=r,!0}const nt=[["table",Hi,["paragraph","reference"]],["code",Gi],["fence",Vi,["paragraph","reference","blockquote","list"]],["blockquote",Zi,["paragraph","reference","blockquote","list"]],["hr",Wi,["paragraph","reference","blockquote","list"]],["list",Xi,["paragraph","reference","blockquote"]],["reference",Qi],["html_block",da,["paragraph","reference","blockquote"]],["heading",fa,["paragraph","reference","blockquote"]],["lheading",pa],["paragraph",ha]];function bt(){this.ruler=new Me;for(let e=0;e<nt.length;e++)this.ruler.push(nt[e][0],nt[e][1],{alt:(nt[e][2]||[]).slice()})}bt.prototype.tokenize=function(e,n,t){const u=this.ruler.getRules(""),r=u.length,o=e.md.options.maxNesting;let s=n,i=!1;for(;s<t&&(e.line=s=e.skipEmptyLines(s),!(s>=t||e.sCount[s]<e.blkIndent));){if(e.level>=o){e.line=t;break}const a=e.line;let c=!1;for(let l=0;l<r;l++)if(c=u[l](e,s,t,!1),c){if(a>=e.line)throw new Error("block rule didn't increment state.line");break}if(!c)throw new Error("none of the block rules matched");e.tight=!i,e.isEmpty(e.line-1)&&(i=!0),s=e.line,s<t&&e.isEmpty(s)&&(i=!0,s++,e.line=s)}};bt.prototype.parse=function(e,n,t,u){if(!e)return;const r=new this.State(e,n,t,u);this.tokenize(r,r.line,r.lineMax)};bt.prototype.State=Ve;function Gn(e,n,t,u){this.src=e,this.env=t,this.md=n,this.tokens=u,this.tokens_meta=Array(u.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[],this.backticks={},this.backticksScanned=!1,this.linkLevel=0}Gn.prototype.pushPending=function(){const e=new $e("text","",0);return e.content=this.pending,e.level=this.pendingLevel,this.tokens.push(e),this.pending="",e};Gn.prototype.push=function(e,n,t){this.pending&&this.pushPending();const u=new $e(e,n,t);let r=null;return t<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),u.level=this.level,t>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],r={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(u),this.tokens_meta.push(r),u};Gn.prototype.scanDelims=function(e,n){const t=this.posMax,u=this.src.charCodeAt(e),r=e>0?this.src.charCodeAt(e-1):32;let o=e;for(;o<t&&this.src.charCodeAt(o)===u;)o++;const s=o-e,i=o<t?this.src.charCodeAt(o):32,a=Un(r)||$n(String.fromCharCode(r)),c=Un(i)||$n(String.fromCharCode(i)),l=zn(r),d=zn(i),p=!d&&(!c||l||a),b=!l&&(!a||d||c);return{can_open:p&&(n||!b||a),can_close:b&&(n||!p||c),length:s}};Gn.prototype.Token=$e;function ba(e){switch(e){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}function ma(e,n){let t=e.pos;for(;t<e.posMax&&!ba(e.src.charCodeAt(t));)t++;return t===e.pos?!1:(n||(e.pending+=e.src.slice(e.pos,t)),e.pos=t,!0)}const ga=/(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;function xa(e,n){if(!e.md.options.linkify||e.linkLevel>0)return!1;const t=e.pos,u=e.posMax;if(t+3>u||e.src.charCodeAt(t)!==58||e.src.charCodeAt(t+1)!==47||e.src.charCodeAt(t+2)!==47)return!1;const r=e.pending.match(ga);if(!r)return!1;const o=r[1],s=e.md.linkify.matchAtStart(e.src.slice(t-o.length));if(!s)return!1;let i=s.url;if(i.length<=o.length)return!1;let a=i.length;for(;a>0&&i.charCodeAt(a-1)===42;)a--;a!==i.length&&(i=i.slice(0,a));const c=e.md.normalizeLink(i);if(!e.md.validateLink(c))return!1;if(!n){e.pending=e.pending.slice(0,-o.length);const l=e.push("link_open","a",1);l.attrs=[["href",c]],l.markup="linkify",l.info="auto";const d=e.push("text","",0);d.content=e.md.normalizeLinkText(i);const p=e.push("link_close","a",-1);p.markup="linkify",p.info="auto"}return e.pos+=i.length-o.length,!0}function _a(e,n){let t=e.pos;if(e.src.charCodeAt(t)!==10)return!1;const u=e.pending.length-1,r=e.posMax;if(!n)if(u>=0&&e.pending.charCodeAt(u)===32)if(u>=1&&e.pending.charCodeAt(u-1)===32){let o=u-1;for(;o>=1&&e.pending.charCodeAt(o-1)===32;)o--;e.pending=e.pending.slice(0,o),e.push("hardbreak","br",0)}else e.pending=e.pending.slice(0,-1),e.push("softbreak","br",0);else e.push("softbreak","br",0);for(t++;t<r&&ie(e.src.charCodeAt(t));)t++;return e.pos=t,!0}const tu=[];for(let e=0;e<256;e++)tu.push(0);"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e){tu[e.charCodeAt(0)]=1});function va(e,n){let t=e.pos;const u=e.posMax;if(e.src.charCodeAt(t)!==92||(t++,t>=u))return!1;let r=e.src.charCodeAt(t);if(r===10){for(n||e.push("hardbreak","br",0),t++;t<u&&(r=e.src.charCodeAt(t),!!ie(r));)t++;return e.pos=t,!0}let o=e.src[t];if(r>=55296&&r<=56319&&t+1<u){const i=e.src.charCodeAt(t+1);i>=56320&&i<=57343&&(o+=e.src[t+1],t++)}const s="\\"+o;if(!n){const i=e.push("text_special","",0);r<256&&tu[r]!==0?i.content=o:i.content=s,i.markup=s,i.info="escape"}return e.pos=t+1,!0}function ya(e,n){let t=e.pos;if(e.src.charCodeAt(t)!==96)return!1;const r=t;t++;const o=e.posMax;for(;t<o&&e.src.charCodeAt(t)===96;)t++;const s=e.src.slice(r,t),i=s.length;if(e.backticksScanned&&(e.backticks[i]||0)<=r)return n||(e.pending+=s),e.pos+=i,!0;let a=t,c;for(;(c=e.src.indexOf("`",a))!==-1;){for(a=c+1;a<o&&e.src.charCodeAt(a)===96;)a++;const l=a-c;if(l===i){if(!n){const d=e.push("code_inline","code",0);d.markup=s,d.content=e.src.slice(t,c).replace(/\n/g," ").replace(/^ (.+) $/,"$1")}return e.pos=a,!0}e.backticks[l]=c}return e.backticksScanned=!0,n||(e.pending+=s),e.pos+=i,!0}function ka(e,n){const t=e.pos,u=e.src.charCodeAt(t);if(n||u!==126)return!1;const r=e.scanDelims(e.pos,!0);let o=r.length;const s=String.fromCharCode(u);if(o<2)return!1;let i;o%2&&(i=e.push("text","",0),i.content=s,o--);for(let a=0;a<o;a+=2)i=e.push("text","",0),i.content=s+s,e.delimiters.push({marker:u,length:0,token:e.tokens.length-1,end:-1,open:r.can_open,close:r.can_close});return e.pos+=r.length,!0}function ju(e,n){let t;const u=[],r=n.length;for(let o=0;o<r;o++){const s=n[o];if(s.marker!==126||s.end===-1)continue;const i=n[s.end];t=e.tokens[s.token],t.type="s_open",t.tag="s",t.nesting=1,t.markup="~~",t.content="",t=e.tokens[i.token],t.type="s_close",t.tag="s",t.nesting=-1,t.markup="~~",t.content="",e.tokens[i.token-1].type==="text"&&e.tokens[i.token-1].content==="~"&&u.push(i.token-1)}for(;u.length;){const o=u.pop();let s=o+1;for(;s<e.tokens.length&&e.tokens[s].type==="s_close";)s++;s--,o!==s&&(t=e.tokens[s],e.tokens[s]=e.tokens[o],e.tokens[o]=t)}}function Ea(e){const n=e.tokens_meta,t=e.tokens_meta.length;ju(e,e.delimiters);for(let u=0;u<t;u++)n[u]&&n[u].delimiters&&ju(e,n[u].delimiters)}const Or={tokenize:ka,postProcess:Ea};function wa(e,n){const t=e.pos,u=e.src.charCodeAt(t);if(n||u!==95&&u!==42)return!1;const r=e.scanDelims(e.pos,u===42);for(let o=0;o<r.length;o++){const s=e.push("text","",0);s.content=String.fromCharCode(u),e.delimiters.push({marker:u,length:r.length,token:e.tokens.length-1,end:-1,open:r.can_open,close:r.can_close})}return e.pos+=r.length,!0}function Hu(e,n){const t=n.length;for(let u=t-1;u>=0;u--){const r=n[u];if(r.marker!==95&&r.marker!==42||r.end===-1)continue;const o=n[r.end],s=u>0&&n[u-1].end===r.end+1&&n[u-1].marker===r.marker&&n[u-1].token===r.token-1&&n[r.end+1].token===o.token+1,i=String.fromCharCode(r.marker),a=e.tokens[r.token];a.type=s?"strong_open":"em_open",a.tag=s?"strong":"em",a.nesting=1,a.markup=s?i+i:i,a.content="";const c=e.tokens[o.token];c.type=s?"strong_close":"em_close",c.tag=s?"strong":"em",c.nesting=-1,c.markup=s?i+i:i,c.content="",s&&(e.tokens[n[u-1].token].content="",e.tokens[n[r.end+1].token].content="",u--)}}function Ca(e){const n=e.tokens_meta,t=e.tokens_meta.length;Hu(e,e.delimiters);for(let u=0;u<t;u++)n[u]&&n[u].delimiters&&Hu(e,n[u].delimiters)}const Nr={tokenize:wa,postProcess:Ca};function Aa(e,n){let t,u,r,o,s="",i="",a=e.pos,c=!0;if(e.src.charCodeAt(e.pos)!==91)return!1;const l=e.pos,d=e.posMax,p=e.pos+1,b=e.md.helpers.parseLinkLabel(e,e.pos,!0);if(b<0)return!1;let h=b+1;if(h<d&&e.src.charCodeAt(h)===40){for(c=!1,h++;h<d&&(t=e.src.charCodeAt(h),!(!ie(t)&&t!==10));h++);if(h>=d)return!1;if(a=h,r=e.md.helpers.parseLinkDestination(e.src,h,e.posMax),r.ok){for(s=e.md.normalizeLink(r.str),e.md.validateLink(s)?h=r.pos:s="",a=h;h<d&&(t=e.src.charCodeAt(h),!(!ie(t)&&t!==10));h++);if(r=e.md.helpers.parseLinkTitle(e.src,h,e.posMax),h<d&&a!==h&&r.ok)for(i=r.str,h=r.pos;h<d&&(t=e.src.charCodeAt(h),!(!ie(t)&&t!==10));h++);}(h>=d||e.src.charCodeAt(h)!==41)&&(c=!0),h++}if(c){if(typeof e.env.references>"u")return!1;if(h<d&&e.src.charCodeAt(h)===91?(a=h+1,h=e.md.helpers.parseLinkLabel(e,h),h>=0?u=e.src.slice(a,h++):h=b+1):h=b+1,u||(u=e.src.slice(p,b)),o=e.env.references[ht(u)],!o)return e.pos=l,!1;s=o.href,i=o.title}if(!n){e.pos=p,e.posMax=b;const k=e.push("link_open","a",1),v=[["href",s]];k.attrs=v,i&&v.push(["title",i]),e.linkLevel++,e.md.inline.tokenize(e),e.linkLevel--,e.push("link_close","a",-1)}return e.pos=h,e.posMax=d,!0}function Da(e,n){let t,u,r,o,s,i,a,c,l="";const d=e.pos,p=e.posMax;if(e.src.charCodeAt(e.pos)!==33||e.src.charCodeAt(e.pos+1)!==91)return!1;const b=e.pos+2,h=e.md.helpers.parseLinkLabel(e,e.pos+1,!1);if(h<0)return!1;if(o=h+1,o<p&&e.src.charCodeAt(o)===40){for(o++;o<p&&(t=e.src.charCodeAt(o),!(!ie(t)&&t!==10));o++);if(o>=p)return!1;for(c=o,i=e.md.helpers.parseLinkDestination(e.src,o,e.posMax),i.ok&&(l=e.md.normalizeLink(i.str),e.md.validateLink(l)?o=i.pos:l=""),c=o;o<p&&(t=e.src.charCodeAt(o),!(!ie(t)&&t!==10));o++);if(i=e.md.helpers.parseLinkTitle(e.src,o,e.posMax),o<p&&c!==o&&i.ok)for(a=i.str,o=i.pos;o<p&&(t=e.src.charCodeAt(o),!(!ie(t)&&t!==10));o++);else a="";if(o>=p||e.src.charCodeAt(o)!==41)return e.pos=d,!1;o++}else{if(typeof e.env.references>"u")return!1;if(o<p&&e.src.charCodeAt(o)===91?(c=o+1,o=e.md.helpers.parseLinkLabel(e,o),o>=0?r=e.src.slice(c,o++):o=h+1):o=h+1,r||(r=e.src.slice(b,h)),s=e.env.references[ht(r)],!s)return e.pos=d,!1;l=s.href,a=s.title}if(!n){u=e.src.slice(b,h);const k=[];e.md.inline.parse(u,e.md,e.env,k);const v=e.push("image","img",0),y=[["src",l],["alt",""]];v.attrs=y,v.children=k,v.content=u,a&&y.push(["title",a])}return e.pos=o,e.posMax=p,!0}const Sa=/^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,Fa=/^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;function Ta(e,n){let t=e.pos;if(e.src.charCodeAt(t)!==60)return!1;const u=e.pos,r=e.posMax;for(;;){if(++t>=r)return!1;const s=e.src.charCodeAt(t);if(s===60)return!1;if(s===62)break}const o=e.src.slice(u+1,t);if(Fa.test(o)){const s=e.md.normalizeLink(o);if(!e.md.validateLink(s))return!1;if(!n){const i=e.push("link_open","a",1);i.attrs=[["href",s]],i.markup="autolink",i.info="auto";const a=e.push("text","",0);a.content=e.md.normalizeLinkText(o);const c=e.push("link_close","a",-1);c.markup="autolink",c.info="auto"}return e.pos+=o.length+2,!0}if(Sa.test(o)){const s=e.md.normalizeLink("mailto:"+o);if(!e.md.validateLink(s))return!1;if(!n){const i=e.push("link_open","a",1);i.attrs=[["href",s]],i.markup="autolink",i.info="auto";const a=e.push("text","",0);a.content=e.md.normalizeLinkText(o);const c=e.push("link_close","a",-1);c.markup="autolink",c.info="auto"}return e.pos+=o.length+2,!0}return!1}function Ma(e){return/^<a[>\s]/i.test(e)}function Oa(e){return/^<\/a\s*>/i.test(e)}function Na(e){const n=e|32;return n>=97&&n<=122}function Ra(e,n){if(!e.md.options.html)return!1;const t=e.posMax,u=e.pos;if(e.src.charCodeAt(u)!==60||u+2>=t)return!1;const r=e.src.charCodeAt(u+1);if(r!==33&&r!==63&&r!==47&&!Na(r))return!1;const o=e.src.slice(u).match(ca);if(!o)return!1;if(!n){const s=e.push("html_inline","",0);s.content=o[0],Ma(s.content)&&e.linkLevel++,Oa(s.content)&&e.linkLevel--}return e.pos+=o[0].length,!0}const Ia=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,Ba=/^&([a-z][a-z0-9]{1,31});/i;function Pa(e,n){const t=e.pos,u=e.posMax;if(e.src.charCodeAt(t)!==38||t+1>=u)return!1;if(e.src.charCodeAt(t+1)===35){const o=e.src.slice(t).match(Ia);if(o){if(!n){const s=o[1][0].toLowerCase()==="x"?parseInt(o[1].slice(1),16):parseInt(o[1],10),i=e.push("text_special","",0);i.content=eu(s)?at(s):at(65533),i.markup=o[0],i.info="entity"}return e.pos+=o[0].length,!0}}else{const o=e.src.slice(t).match(Ba);if(o){const s=Cr(o[0]);if(s!==o[0]){if(!n){const i=e.push("text_special","",0);i.content=s,i.markup=o[0],i.info="entity"}return e.pos+=o[0].length,!0}}}return!1}function Gu(e){const n={},t=e.length;if(!t)return;let u=0,r=-2;const o=[];for(let s=0;s<t;s++){const i=e[s];if(o.push(0),(e[u].marker!==i.marker||r!==i.token-1)&&(u=s),r=i.token,i.length=i.length||0,!i.close)continue;n.hasOwnProperty(i.marker)||(n[i.marker]=[-1,-1,-1,-1,-1,-1]);const a=n[i.marker][(i.open?3:0)+i.length%3];let c=u-o[u]-1,l=c;for(;c>a;c-=o[c]+1){const d=e[c];if(d.marker===i.marker&&d.open&&d.end<0){let p=!1;if((d.close||i.open)&&(d.length+i.length)%3===0&&(d.length%3!==0||i.length%3!==0)&&(p=!0),!p){const b=c>0&&!e[c-1].open?o[c-1]+1:0;o[s]=s-c+b,o[c]=b,i.open=!1,d.end=s,d.close=!1,l=-1,r=-2;break}}}l!==-1&&(n[i.marker][(i.open?3:0)+(i.length||0)%3]=l)}}function La(e){const n=e.tokens_meta,t=e.tokens_meta.length;Gu(e.delimiters);for(let u=0;u<t;u++)n[u]&&n[u].delimiters&&Gu(n[u].delimiters)}function za(e){let n,t,u=0;const r=e.tokens,o=e.tokens.length;for(n=t=0;n<o;n++)r[n].nesting<0&&u--,r[n].level=u,r[n].nesting>0&&u++,r[n].type==="text"&&n+1<o&&r[n+1].type==="text"?r[n+1].content=r[n].content+r[n+1].content:(n!==t&&(r[t]=r[n]),t++);n!==t&&(r.length=t)}const St=[["text",ma],["linkify",xa],["newline",_a],["escape",va],["backticks",ya],["strikethrough",Or.tokenize],["emphasis",Nr.tokenize],["link",Aa],["image",Da],["autolink",Ta],["html_inline",Ra],["entity",Pa]],Ft=[["balance_pairs",La],["strikethrough",Or.postProcess],["emphasis",Nr.postProcess],["fragments_join",za]];function Vn(){this.ruler=new Me;for(let e=0;e<St.length;e++)this.ruler.push(St[e][0],St[e][1]);this.ruler2=new Me;for(let e=0;e<Ft.length;e++)this.ruler2.push(Ft[e][0],Ft[e][1])}Vn.prototype.skipToken=function(e){const n=e.pos,t=this.ruler.getRules(""),u=t.length,r=e.md.options.maxNesting,o=e.cache;if(typeof o[n]<"u"){e.pos=o[n];return}let s=!1;if(e.level<r){for(let i=0;i<u;i++)if(e.level++,s=t[i](e,!0),e.level--,s){if(n>=e.pos)throw new Error("inline rule didn't increment state.pos");break}}else e.pos=e.posMax;s||e.pos++,o[n]=e.pos};Vn.prototype.tokenize=function(e){const n=this.ruler.getRules(""),t=n.length,u=e.posMax,r=e.md.options.maxNesting;for(;e.pos<u;){const o=e.pos;let s=!1;if(e.level<r){for(let i=0;i<t;i++)if(s=n[i](e,!1),s){if(o>=e.pos)throw new Error("inline rule didn't increment state.pos");break}}if(s){if(e.pos>=u)break;continue}e.pending+=e.src[e.pos++]}e.pending&&e.pushPending()};Vn.prototype.parse=function(e,n,t,u){const r=new this.State(e,n,t,u);this.tokenize(r);const o=this.ruler2.getRules(""),s=o.length;for(let i=0;i<s;i++)o[i](r)};Vn.prototype.State=Gn;function $a(e){const n={};e=e||{},n.src_Any=vr.source,n.src_Cc=yr.source,n.src_Z=Er.source,n.src_P=Yt.source,n.src_ZPCc=[n.src_Z,n.src_P,n.src_Cc].join("|"),n.src_ZCc=[n.src_Z,n.src_Cc].join("|");const t="[><｜]";return n.src_pseudo_letter="(?:(?!"+t+"|"+n.src_ZPCc+")"+n.src_Any+")",n.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",n.src_auth="(?:(?:(?!"+n.src_ZCc+"|[@/\\[\\]()]).)+@)?",n.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",n.src_host_terminator="(?=$|"+t+"|"+n.src_ZPCc+")(?!"+(e["---"]?"-(?!--)|":"-|")+"_|:\\d|\\.-|\\.(?!$|"+n.src_ZPCc+"))",n.src_path="(?:[/?#](?:(?!"+n.src_ZCc+"|"+t+`|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!`+n.src_ZCc+"|\\]).)*\\]|\\((?:(?!"+n.src_ZCc+"|[)]).)*\\)|\\{(?:(?!"+n.src_ZCc+'|[}]).)*\\}|\\"(?:(?!'+n.src_ZCc+`|["]).)+\\"|\\'(?:(?!`+n.src_ZCc+"|[']).)+\\'|\\'(?="+n.src_pseudo_letter+"|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!"+n.src_ZCc+"|[.]|$)|"+(e["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+",(?!"+n.src_ZCc+"|$)|;(?!"+n.src_ZCc+"|$)|\\!+(?!"+n.src_ZCc+"|[!]|$)|\\?(?!"+n.src_ZCc+"|[?]|$))+|\\/)?",n.src_email_name='[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*',n.src_xn="xn--[a-z0-9\\-]{1,59}",n.src_domain_root="(?:"+n.src_xn+"|"+n.src_pseudo_letter+"{1,63})",n.src_domain="(?:"+n.src_xn+"|(?:"+n.src_pseudo_letter+")|(?:"+n.src_pseudo_letter+"(?:-|"+n.src_pseudo_letter+"){0,61}"+n.src_pseudo_letter+"))",n.src_host="(?:(?:(?:(?:"+n.src_domain+")\\.)*"+n.src_domain+"))",n.tpl_host_fuzzy="(?:"+n.src_ip4+"|(?:(?:(?:"+n.src_domain+")\\.)+(?:%TLDS%)))",n.tpl_host_no_ip_fuzzy="(?:(?:(?:"+n.src_domain+")\\.)+(?:%TLDS%))",n.src_host_strict=n.src_host+n.src_host_terminator,n.tpl_host_fuzzy_strict=n.tpl_host_fuzzy+n.src_host_terminator,n.src_host_port_strict=n.src_host+n.src_port+n.src_host_terminator,n.tpl_host_port_fuzzy_strict=n.tpl_host_fuzzy+n.src_port+n.src_host_terminator,n.tpl_host_port_no_ip_fuzzy_strict=n.tpl_host_no_ip_fuzzy+n.src_port+n.src_host_terminator,n.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+n.src_ZPCc+"|>|$))",n.tpl_email_fuzzy="(^|"+t+'|"|\\(|'+n.src_ZCc+")("+n.src_email_name+"@"+n.tpl_host_fuzzy_strict+")",n.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+n.src_ZPCc+"))((?![$+<=>^`|｜])"+n.tpl_host_port_fuzzy_strict+n.src_path+")",n.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+n.src_ZPCc+"))((?![$+<=>^`|｜])"+n.tpl_host_port_no_ip_fuzzy_strict+n.src_path+")",n}function Ut(e){return Array.prototype.slice.call(arguments,1).forEach(function(t){t&&Object.keys(t).forEach(function(u){e[u]=t[u]})}),e}function mt(e){return Object.prototype.toString.call(e)}function Ua(e){return mt(e)==="[object String]"}function qa(e){return mt(e)==="[object Object]"}function ja(e){return mt(e)==="[object RegExp]"}function Vu(e){return mt(e)==="[object Function]"}function Ha(e){return e.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}const Rr={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function Ga(e){return Object.keys(e||{}).reduce(function(n,t){return n||Rr.hasOwnProperty(t)},!1)}const Va={"http:":{validate:function(e,n,t){const u=e.slice(n);return t.re.http||(t.re.http=new RegExp("^\\/\\/"+t.re.src_auth+t.re.src_host_port_strict+t.re.src_path,"i")),t.re.http.test(u)?u.match(t.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(e,n,t){const u=e.slice(n);return t.re.no_http||(t.re.no_http=new RegExp("^"+t.re.src_auth+"(?:localhost|(?:(?:"+t.re.src_domain+")\\.)+"+t.re.src_domain_root+")"+t.re.src_port+t.re.src_host_terminator+t.re.src_path,"i")),t.re.no_http.test(u)?n>=3&&e[n-3]===":"||n>=3&&e[n-3]==="/"?0:u.match(t.re.no_http)[0].length:0}},"mailto:":{validate:function(e,n,t){const u=e.slice(n);return t.re.mailto||(t.re.mailto=new RegExp("^"+t.re.src_email_name+"@"+t.re.src_host_strict,"i")),t.re.mailto.test(u)?u.match(t.re.mailto)[0].length:0}}},Za="a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",Wa="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");function Ka(e){e.__index__=-1,e.__text_cache__=""}function Xa(e){return function(n,t){const u=n.slice(t);return e.test(u)?u.match(e)[0].length:0}}function Zu(){return function(e,n){n.normalize(e)}}function ct(e){const n=e.re=$a(e.__opts__),t=e.__tlds__.slice();e.onCompile(),e.__tlds_replaced__||t.push(Za),t.push(n.src_xn),n.src_tlds=t.join("|");function u(i){return i.replace("%TLDS%",n.src_tlds)}n.email_fuzzy=RegExp(u(n.tpl_email_fuzzy),"i"),n.link_fuzzy=RegExp(u(n.tpl_link_fuzzy),"i"),n.link_no_ip_fuzzy=RegExp(u(n.tpl_link_no_ip_fuzzy),"i"),n.host_fuzzy_test=RegExp(u(n.tpl_host_fuzzy_test),"i");const r=[];e.__compiled__={};function o(i,a){throw new Error('(LinkifyIt) Invalid schema "'+i+'": '+a)}Object.keys(e.__schemas__).forEach(function(i){const a=e.__schemas__[i];if(a===null)return;const c={validate:null,link:null};if(e.__compiled__[i]=c,qa(a)){ja(a.validate)?c.validate=Xa(a.validate):Vu(a.validate)?c.validate=a.validate:o(i,a),Vu(a.normalize)?c.normalize=a.normalize:a.normalize?o(i,a):c.normalize=Zu();return}if(Ua(a)){r.push(i);return}o(i,a)}),r.forEach(function(i){e.__compiled__[e.__schemas__[i]]&&(e.__compiled__[i].validate=e.__compiled__[e.__schemas__[i]].validate,e.__compiled__[i].normalize=e.__compiled__[e.__schemas__[i]].normalize)}),e.__compiled__[""]={validate:null,normalize:Zu()};const s=Object.keys(e.__compiled__).filter(function(i){return i.length>0&&e.__compiled__[i]}).map(Ha).join("|");e.re.schema_test=RegExp("(^|(?!_)(?:[><｜]|"+n.src_ZPCc+"))("+s+")","i"),e.re.schema_search=RegExp("(^|(?!_)(?:[><｜]|"+n.src_ZPCc+"))("+s+")","ig"),e.re.schema_at_start=RegExp("^"+e.re.schema_search.source,"i"),e.re.pretest=RegExp("("+e.re.schema_test.source+")|("+e.re.host_fuzzy_test.source+")|@","i"),Ka(e)}function Qa(e,n){const t=e.__index__,u=e.__last_index__,r=e.__text_cache__.slice(t,u);this.schema=e.__schema__.toLowerCase(),this.index=t+n,this.lastIndex=u+n,this.raw=r,this.text=r,this.url=r}function qt(e,n){const t=new Qa(e,n);return e.__compiled__[t.schema].normalize(t,e),t}function Re(e,n){if(!(this instanceof Re))return new Re(e,n);n||Ga(e)&&(n=e,e={}),this.__opts__=Ut({},Rr,n),this.__index__=-1,this.__last_index__=-1,this.__schema__="",this.__text_cache__="",this.__schemas__=Ut({},Va,e),this.__compiled__={},this.__tlds__=Wa,this.__tlds_replaced__=!1,this.re={},ct(this)}Re.prototype.add=function(n,t){return this.__schemas__[n]=t,ct(this),this};Re.prototype.set=function(n){return this.__opts__=Ut(this.__opts__,n),this};Re.prototype.test=function(n){if(this.__text_cache__=n,this.__index__=-1,!n.length)return!1;let t,u,r,o,s,i,a,c,l;if(this.re.schema_test.test(n)){for(a=this.re.schema_search,a.lastIndex=0;(t=a.exec(n))!==null;)if(o=this.testSchemaAt(n,t[2],a.lastIndex),o){this.__schema__=t[2],this.__index__=t.index+t[1].length,this.__last_index__=t.index+t[0].length+o;break}}return this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&(c=n.search(this.re.host_fuzzy_test),c>=0&&(this.__index__<0||c<this.__index__)&&(u=n.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))!==null&&(s=u.index+u[1].length,(this.__index__<0||s<this.__index__)&&(this.__schema__="",this.__index__=s,this.__last_index__=u.index+u[0].length))),this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&(l=n.indexOf("@"),l>=0&&(r=n.match(this.re.email_fuzzy))!==null&&(s=r.index+r[1].length,i=r.index+r[0].length,(this.__index__<0||s<this.__index__||s===this.__index__&&i>this.__last_index__)&&(this.__schema__="mailto:",this.__index__=s,this.__last_index__=i))),this.__index__>=0};Re.prototype.pretest=function(n){return this.re.pretest.test(n)};Re.prototype.testSchemaAt=function(n,t,u){return this.__compiled__[t.toLowerCase()]?this.__compiled__[t.toLowerCase()].validate(n,u,this):0};Re.prototype.match=function(n){const t=[];let u=0;this.__index__>=0&&this.__text_cache__===n&&(t.push(qt(this,u)),u=this.__last_index__);let r=u?n.slice(u):n;for(;this.test(r);)t.push(qt(this,u)),r=r.slice(this.__last_index__),u+=this.__last_index__;return t.length?t:null};Re.prototype.matchAtStart=function(n){if(this.__text_cache__=n,this.__index__=-1,!n.length)return null;const t=this.re.schema_at_start.exec(n);if(!t)return null;const u=this.testSchemaAt(n,t[2],t[0].length);return u?(this.__schema__=t[2],this.__index__=t.index+t[1].length,this.__last_index__=t.index+t[0].length+u,qt(this,0)):null};Re.prototype.tlds=function(n,t){return n=Array.isArray(n)?n:[n],t?(this.__tlds__=this.__tlds__.concat(n).sort().filter(function(u,r,o){return u!==o[r-1]}).reverse(),ct(this),this):(this.__tlds__=n.slice(),this.__tlds_replaced__=!0,ct(this),this)};Re.prototype.normalize=function(n){n.schema||(n.url="http://"+n.url),n.schema==="mailto:"&&!/^mailto:/i.test(n.url)&&(n.url="mailto:"+n.url)};Re.prototype.onCompile=function(){};const Cn=2147483647,je=36,uu=1,qn=26,Ya=38,Ja=700,Ir=72,Br=128,Pr="-",ec=/^xn--/,nc=/[^\0-\x7F]/,tc=/[\x2E\u3002\uFF0E\uFF61]/g,uc={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},Tt=je-uu,He=Math.floor,Mt=String.fromCharCode;function tn(e){throw new RangeError(uc[e])}function rc(e,n){const t=[];let u=e.length;for(;u--;)t[u]=n(e[u]);return t}function Lr(e,n){const t=e.split("@");let u="";t.length>1&&(u=t[0]+"@",e=t[1]),e=e.replace(tc,".");const r=e.split("."),o=rc(r,n).join(".");return u+o}function zr(e){const n=[];let t=0;const u=e.length;for(;t<u;){const r=e.charCodeAt(t++);if(r>=55296&&r<=56319&&t<u){const o=e.charCodeAt(t++);(o&64512)==56320?n.push(((r&1023)<<10)+(o&1023)+65536):(n.push(r),t--)}else n.push(r)}return n}const oc=e=>String.fromCodePoint(...e),sc=function(e){return e>=48&&e<58?26+(e-48):e>=65&&e<91?e-65:e>=97&&e<123?e-97:je},Wu=function(e,n){return e+22+75*(e<26)-((n!=0)<<5)},$r=function(e,n,t){let u=0;for(e=t?He(e/Ja):e>>1,e+=He(e/n);e>Tt*qn>>1;u+=je)e=He(e/Tt);return He(u+(Tt+1)*e/(e+Ya))},Ur=function(e){const n=[],t=e.length;let u=0,r=Br,o=Ir,s=e.lastIndexOf(Pr);s<0&&(s=0);for(let i=0;i<s;++i)e.charCodeAt(i)>=128&&tn("not-basic"),n.push(e.charCodeAt(i));for(let i=s>0?s+1:0;i<t;){const a=u;for(let l=1,d=je;;d+=je){i>=t&&tn("invalid-input");const p=sc(e.charCodeAt(i++));p>=je&&tn("invalid-input"),p>He((Cn-u)/l)&&tn("overflow"),u+=p*l;const b=d<=o?uu:d>=o+qn?qn:d-o;if(p<b)break;const h=je-b;l>He(Cn/h)&&tn("overflow"),l*=h}const c=n.length+1;o=$r(u-a,c,a==0),He(u/c)>Cn-r&&tn("overflow"),r+=He(u/c),u%=c,n.splice(u++,0,r)}return String.fromCodePoint(...n)},qr=function(e){const n=[];e=zr(e);const t=e.length;let u=Br,r=0,o=Ir;for(const a of e)a<128&&n.push(Mt(a));const s=n.length;let i=s;for(s&&n.push(Pr);i<t;){let a=Cn;for(const l of e)l>=u&&l<a&&(a=l);const c=i+1;a-u>He((Cn-r)/c)&&tn("overflow"),r+=(a-u)*c,u=a;for(const l of e)if(l<u&&++r>Cn&&tn("overflow"),l===u){let d=r;for(let p=je;;p+=je){const b=p<=o?uu:p>=o+qn?qn:p-o;if(d<b)break;const h=d-b,k=je-b;n.push(Mt(Wu(b+h%k,0))),d=He(h/k)}n.push(Mt(Wu(d,0))),o=$r(r,c,i===s),r=0,++i}++r,++u}return n.join("")},ic=function(e){return Lr(e,function(n){return ec.test(n)?Ur(n.slice(4).toLowerCase()):n})},ac=function(e){return Lr(e,function(n){return nc.test(n)?"xn--"+qr(n):n})},jr={version:"2.3.1",ucs2:{decode:zr,encode:oc},decode:Ur,encode:qr,toASCII:ac,toUnicode:ic},cc={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}},lc={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["paragraph"]},inline:{rules:["text"],rules2:["balance_pairs","fragments_join"]}}},dc={options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["blockquote","code","fence","heading","hr","html_block","lheading","list","reference","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","html_inline","image","link","newline","text"],rules2:["balance_pairs","emphasis","fragments_join"]}}},fc={default:cc,zero:lc,commonmark:dc},pc=/^(vbscript|javascript|file|data):/,hc=/^data:image\/(gif|png|jpeg|webp);/;function bc(e){const n=e.trim().toLowerCase();return pc.test(n)?hc.test(n):!0}const Hr=["http:","https:","mailto:"];function mc(e){const n=Qt(e,!0);if(n.hostname&&(!n.protocol||Hr.indexOf(n.protocol)>=0))try{n.hostname=jr.toASCII(n.hostname)}catch{}return Hn(Xt(n))}function gc(e){const n=Qt(e,!0);if(n.hostname&&(!n.protocol||Hr.indexOf(n.protocol)>=0))try{n.hostname=jr.toUnicode(n.hostname)}catch{}return Sn(Xt(n),Sn.defaultChars+"%")}function Pe(e,n){if(!(this instanceof Pe))return new Pe(e,n);n||Jt(e)||(n=e||{},e="default"),this.inline=new Vn,this.block=new bt,this.core=new nu,this.renderer=new Tn,this.linkify=new Re,this.validateLink=bc,this.normalizeLink=mc,this.normalizeLinkText=gc,this.utils=_i,this.helpers=pt({},Ei),this.options={},this.configure(e),n&&this.set(n)}Pe.prototype.set=function(e){return pt(this.options,e),this};Pe.prototype.configure=function(e){const n=this;if(Jt(e)){const t=e;if(e=fc[t],!e)throw new Error('Wrong `markdown-it` preset "'+t+'", check name')}if(!e)throw new Error("Wrong `markdown-it` preset, can't be empty");return e.options&&n.set(e.options),e.components&&Object.keys(e.components).forEach(function(t){e.components[t].rules&&n[t].ruler.enableOnly(e.components[t].rules),e.components[t].rules2&&n[t].ruler2.enableOnly(e.components[t].rules2)}),this};Pe.prototype.enable=function(e,n){let t=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(r){t=t.concat(this[r].ruler.enable(e,!0))},this),t=t.concat(this.inline.ruler2.enable(e,!0));const u=e.filter(function(r){return t.indexOf(r)<0});if(u.length&&!n)throw new Error("MarkdownIt. Failed to enable unknown rule(s): "+u);return this};Pe.prototype.disable=function(e,n){let t=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(r){t=t.concat(this[r].ruler.disable(e,!0))},this),t=t.concat(this.inline.ruler2.disable(e,!0));const u=e.filter(function(r){return t.indexOf(r)<0});if(u.length&&!n)throw new Error("MarkdownIt. Failed to disable unknown rule(s): "+u);return this};Pe.prototype.use=function(e){const n=[this].concat(Array.prototype.slice.call(arguments,1));return e.apply(e,n),this};Pe.prototype.parse=function(e,n){if(typeof e!="string")throw new Error("Input data should be a String");const t=new this.core.State(e,this,n);return this.core.process(t),t.tokens};Pe.prototype.render=function(e,n){return n=n||{},this.renderer.render(this.parse(e,n),this.options,n)};Pe.prototype.parseInline=function(e,n){const t=new this.core.State(e,this,n);return t.inlineMode=!0,this.core.process(t),t.tokens};Pe.prototype.renderInline=function(e,n){return n=n||{},this.renderer.render(this.parseInline(e,n),this.options,n)};function xc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ot,Ku;function _c(){if(Ku)return Ot;Ku=1;function e(f){return f instanceof Map?f.clear=f.delete=f.set=function(){throw new Error("map is read-only")}:f instanceof Set&&(f.add=f.clear=f.delete=function(){throw new Error("set is read-only")}),Object.freeze(f),Object.getOwnPropertyNames(f).forEach(_=>{const A=f[_],U=typeof A;(U==="object"||U==="function")&&!Object.isFrozen(A)&&e(A)}),f}class n{constructor(_){_.data===void 0&&(_.data={}),this.data=_.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function t(f){return f.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function u(f,..._){const A=Object.create(null);for(const U in f)A[U]=f[U];return _.forEach(function(U){for(const pe in U)A[pe]=U[pe]}),A}const r="</span>",o=f=>!!f.scope,s=(f,{prefix:_})=>{if(f.startsWith("language:"))return f.replace("language:","language-");if(f.includes(".")){const A=f.split(".");return[`${_}${A.shift()}`,...A.map((U,pe)=>`${U}${"_".repeat(pe+1)}`)].join(" ")}return`${_}${f}`};class i{constructor(_,A){this.buffer="",this.classPrefix=A.classPrefix,_.walk(this)}addText(_){this.buffer+=t(_)}openNode(_){if(!o(_))return;const A=s(_.scope,{prefix:this.classPrefix});this.span(A)}closeNode(_){o(_)&&(this.buffer+=r)}value(){return this.buffer}span(_){this.buffer+=`<span class="${_}">`}}const a=(f={})=>{const _={children:[]};return Object.assign(_,f),_};class c{constructor(){this.rootNode=a(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(_){this.top.children.push(_)}openNode(_){const A=a({scope:_});this.add(A),this.stack.push(A)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(_){return this.constructor._walk(_,this.rootNode)}static _walk(_,A){return typeof A=="string"?_.addText(A):A.children&&(_.openNode(A),A.children.forEach(U=>this._walk(_,U)),_.closeNode(A)),_}static _collapse(_){typeof _!="string"&&_.children&&(_.children.every(A=>typeof A=="string")?_.children=[_.children.join("")]:_.children.forEach(A=>{c._collapse(A)}))}}class l extends c{constructor(_){super(),this.options=_}addText(_){_!==""&&this.add(_)}startScope(_){this.openNode(_)}endScope(){this.closeNode()}__addSublanguage(_,A){const U=_.root;A&&(U.scope=`language:${A}`),this.add(U)}toHTML(){return new i(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function d(f){return f?typeof f=="string"?f:f.source:null}function p(f){return k("(?=",f,")")}function b(f){return k("(?:",f,")*")}function h(f){return k("(?:",f,")?")}function k(...f){return f.map(A=>d(A)).join("")}function v(f){const _=f[f.length-1];return typeof _=="object"&&_.constructor===Object?(f.splice(f.length-1,1),_):{}}function y(...f){return"("+(v(f).capture?"":"?:")+f.map(U=>d(U)).join("|")+")"}function g(f){return new RegExp(f.toString()+"|").exec("").length-1}function x(f,_){const A=f&&f.exec(_);return A&&A.index===0}const E=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function D(f,{joinWith:_}){let A=0;return f.map(U=>{A+=1;const pe=A;let he=d(U),B="";for(;he.length>0;){const M=E.exec(he);if(!M){B+=he;break}B+=he.substring(0,M.index),he=he.substring(M.index+M[0].length),M[0][0]==="\\"&&M[1]?B+="\\"+String(Number(M[1])+pe):(B+=M[0],M[0]==="("&&A++)}return B}).map(U=>`(${U})`).join(_)}const I=/\b\B/,K="[a-zA-Z]\\w*",F="[a-zA-Z_]\\w*",Z="\\b\\d+(\\.\\d+)?",de="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",fe="\\b(0b[01]+)",Ce="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",Fe=(f={})=>{const _=/^#![ ]*\//;return f.binary&&(f.begin=k(_,/.*\b/,f.binary,/\b.*/)),u({scope:"meta",begin:_,end:/$/,relevance:0,"on:begin":(A,U)=>{A.index!==0&&U.ignoreMatch()}},f)},le={begin:"\\\\[\\s\\S]",relevance:0},ne={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[le]},ce={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[le]},Se={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},m=function(f,_,A={}){const U=u({scope:"comment",begin:f,end:_,contains:[]},A);U.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const pe=y("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return U.contains.push({begin:k(/[ ]+/,"(",pe,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),U},w=m("//","$"),R=m("/\\*","\\*/"),W=m("#","$"),Y={scope:"number",begin:Z,relevance:0},j={scope:"number",begin:de,relevance:0},re={scope:"number",begin:fe,relevance:0},Te={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[le,{begin:/\[/,end:/\]/,relevance:0,contains:[le]}]},Ie={scope:"title",begin:K,relevance:0},J={scope:"title",begin:F,relevance:0},We={begin:"\\.\\s*"+F,relevance:0};var Ke=Object.freeze({__proto__:null,APOS_STRING_MODE:ne,BACKSLASH_ESCAPE:le,BINARY_NUMBER_MODE:re,BINARY_NUMBER_RE:fe,COMMENT:m,C_BLOCK_COMMENT_MODE:R,C_LINE_COMMENT_MODE:w,C_NUMBER_MODE:j,C_NUMBER_RE:de,END_SAME_AS_BEGIN:function(f){return Object.assign(f,{"on:begin":(_,A)=>{A.data._beginMatch=_[1]},"on:end":(_,A)=>{A.data._beginMatch!==_[1]&&A.ignoreMatch()}})},HASH_COMMENT_MODE:W,IDENT_RE:K,MATCH_NOTHING_RE:I,METHOD_GUARD:We,NUMBER_MODE:Y,NUMBER_RE:Z,PHRASAL_WORDS_MODE:Se,QUOTE_STRING_MODE:ce,REGEXP_MODE:Te,RE_STARTERS_RE:Ce,SHEBANG:Fe,TITLE_MODE:Ie,UNDERSCORE_IDENT_RE:F,UNDERSCORE_TITLE_MODE:J});function Rn(f,_){f.input[f.index-1]==="."&&_.ignoreMatch()}function _n(f,_){f.className!==void 0&&(f.scope=f.className,delete f.className)}function Ao(f,_){_&&f.beginKeywords&&(f.begin="\\b("+f.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",f.__beforeBegin=Rn,f.keywords=f.keywords||f.beginKeywords,delete f.beginKeywords,f.relevance===void 0&&(f.relevance=0))}function Do(f,_){Array.isArray(f.illegal)&&(f.illegal=y(...f.illegal))}function So(f,_){if(f.match){if(f.begin||f.end)throw new Error("begin & end are not supported with match");f.begin=f.match,delete f.match}}function Fo(f,_){f.relevance===void 0&&(f.relevance=1)}const To=(f,_)=>{if(!f.beforeMatch)return;if(f.starts)throw new Error("beforeMatch cannot be used with starts");const A=Object.assign({},f);Object.keys(f).forEach(U=>{delete f[U]}),f.keywords=A.keywords,f.begin=k(A.beforeMatch,p(A.begin)),f.starts={relevance:0,contains:[Object.assign(A,{endsParent:!0})]},f.relevance=0,delete A.beforeMatch},Mo=["of","and","for","in","not","or","if","then","parent","list","value"],Oo="keyword";function su(f,_,A=Oo){const U=Object.create(null);return typeof f=="string"?pe(A,f.split(" ")):Array.isArray(f)?pe(A,f):Object.keys(f).forEach(function(he){Object.assign(U,su(f[he],_,he))}),U;function pe(he,B){_&&(B=B.map(M=>M.toLowerCase())),B.forEach(function(M){const $=M.split("|");U[$[0]]=[he,No($[0],$[1])]})}}function No(f,_){return _?Number(_):Ro(f)?0:1}function Ro(f){return Mo.includes(f.toLowerCase())}const iu={},fn=f=>{console.error(f)},au=(f,..._)=>{console.log(`WARN: ${f}`,..._)},vn=(f,_)=>{iu[`${f}/${_}`]||(console.log(`Deprecated as of ${f}. ${_}`),iu[`${f}/${_}`]=!0)},Zn=new Error;function cu(f,_,{key:A}){let U=0;const pe=f[A],he={},B={};for(let M=1;M<=_.length;M++)B[M+U]=pe[M],he[M+U]=!0,U+=g(_[M-1]);f[A]=B,f[A]._emit=he,f[A]._multi=!0}function Io(f){if(Array.isArray(f.begin)){if(f.skip||f.excludeBegin||f.returnBegin)throw fn("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Zn;if(typeof f.beginScope!="object"||f.beginScope===null)throw fn("beginScope must be object"),Zn;cu(f,f.begin,{key:"beginScope"}),f.begin=D(f.begin,{joinWith:""})}}function Bo(f){if(Array.isArray(f.end)){if(f.skip||f.excludeEnd||f.returnEnd)throw fn("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Zn;if(typeof f.endScope!="object"||f.endScope===null)throw fn("endScope must be object"),Zn;cu(f,f.end,{key:"endScope"}),f.end=D(f.end,{joinWith:""})}}function Po(f){f.scope&&typeof f.scope=="object"&&f.scope!==null&&(f.beginScope=f.scope,delete f.scope)}function Lo(f){Po(f),typeof f.beginScope=="string"&&(f.beginScope={_wrap:f.beginScope}),typeof f.endScope=="string"&&(f.endScope={_wrap:f.endScope}),Io(f),Bo(f)}function zo(f){function _(B,M){return new RegExp(d(B),"m"+(f.case_insensitive?"i":"")+(f.unicodeRegex?"u":"")+(M?"g":""))}class A{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(M,$){$.position=this.position++,this.matchIndexes[this.matchAt]=$,this.regexes.push([$,M]),this.matchAt+=g(M)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const M=this.regexes.map($=>$[1]);this.matcherRe=_(D(M,{joinWith:"|"}),!0),this.lastIndex=0}exec(M){this.matcherRe.lastIndex=this.lastIndex;const $=this.matcherRe.exec(M);if(!$)return null;const ye=$.findIndex((In,_t)=>_t>0&&In!==void 0),me=this.matchIndexes[ye];return $.splice(0,ye),Object.assign($,me)}}class U{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(M){if(this.multiRegexes[M])return this.multiRegexes[M];const $=new A;return this.rules.slice(M).forEach(([ye,me])=>$.addRule(ye,me)),$.compile(),this.multiRegexes[M]=$,$}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(M,$){this.rules.push([M,$]),$.type==="begin"&&this.count++}exec(M){const $=this.getMatcher(this.regexIndex);$.lastIndex=this.lastIndex;let ye=$.exec(M);if(this.resumingScanAtSamePosition()&&!(ye&&ye.index===this.lastIndex)){const me=this.getMatcher(0);me.lastIndex=this.lastIndex+1,ye=me.exec(M)}return ye&&(this.regexIndex+=ye.position+1,this.regexIndex===this.count&&this.considerAll()),ye}}function pe(B){const M=new U;return B.contains.forEach($=>M.addRule($.begin,{rule:$,type:"begin"})),B.terminatorEnd&&M.addRule(B.terminatorEnd,{type:"end"}),B.illegal&&M.addRule(B.illegal,{type:"illegal"}),M}function he(B,M){const $=B;if(B.isCompiled)return $;[_n,So,Lo,To].forEach(me=>me(B,M)),f.compilerExtensions.forEach(me=>me(B,M)),B.__beforeBegin=null,[Ao,Do,Fo].forEach(me=>me(B,M)),B.isCompiled=!0;let ye=null;return typeof B.keywords=="object"&&B.keywords.$pattern&&(B.keywords=Object.assign({},B.keywords),ye=B.keywords.$pattern,delete B.keywords.$pattern),ye=ye||/\w+/,B.keywords&&(B.keywords=su(B.keywords,f.case_insensitive)),$.keywordPatternRe=_(ye,!0),M&&(B.begin||(B.begin=/\B|\b/),$.beginRe=_($.begin),!B.end&&!B.endsWithParent&&(B.end=/\B|\b/),B.end&&($.endRe=_($.end)),$.terminatorEnd=d($.end)||"",B.endsWithParent&&M.terminatorEnd&&($.terminatorEnd+=(B.end?"|":"")+M.terminatorEnd)),B.illegal&&($.illegalRe=_(B.illegal)),B.contains||(B.contains=[]),B.contains=[].concat(...B.contains.map(function(me){return $o(me==="self"?B:me)})),B.contains.forEach(function(me){he(me,$)}),B.starts&&he(B.starts,M),$.matcher=pe($),$}if(f.compilerExtensions||(f.compilerExtensions=[]),f.contains&&f.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return f.classNameAliases=u(f.classNameAliases||{}),he(f)}function lu(f){return f?f.endsWithParent||lu(f.starts):!1}function $o(f){return f.variants&&!f.cachedVariants&&(f.cachedVariants=f.variants.map(function(_){return u(f,{variants:null},_)})),f.cachedVariants?f.cachedVariants:lu(f)?u(f,{starts:f.starts?u(f.starts):null}):Object.isFrozen(f)?u(f):f}var Uo="11.11.1";class qo extends Error{constructor(_,A){super(_),this.name="HTMLInjectionError",this.html=A}}const xt=t,du=u,fu=Symbol("nomatch"),jo=7,pu=function(f){const _=Object.create(null),A=Object.create(null),U=[];let pe=!0;const he="Could not find the language '{}', did you forget to load/include a language module?",B={disableAutodetect:!0,name:"Plain text",contains:[]};let M={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:l};function $(C){return M.noHighlightRe.test(C)}function ye(C){let L=C.className+" ";L+=C.parentNode?C.parentNode.className:"";const X=M.languageDetectRe.exec(L);if(X){const oe=Ye(X[1]);return oe||(au(he.replace("{}",X[1])),au("Falling back to no-highlight mode for this block.",C)),oe?X[1]:"no-highlight"}return L.split(/\s+/).find(oe=>$(oe)||Ye(oe))}function me(C,L,X){let oe="",_e="";typeof L=="object"?(oe=C,X=L.ignoreIllegals,_e=L.language):(vn("10.7.0","highlight(lang, code, ...args) has been deprecated."),vn("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),_e=C,oe=L),X===void 0&&(X=!0);const Le={code:oe,language:_e};Kn("before:highlight",Le);const Je=Le.result?Le.result:In(Le.language,Le.code,X);return Je.code=Le.code,Kn("after:highlight",Je),Je}function In(C,L,X,oe){const _e=Object.create(null);function Le(S,P){return S.keywords[P]}function Je(){if(!q.keywords){we.addText(se);return}let S=0;q.keywordPatternRe.lastIndex=0;let P=q.keywordPatternRe.exec(se),H="";for(;P;){H+=se.substring(S,P.index);const te=qe.case_insensitive?P[0].toLowerCase():P[0],Ae=Le(q,te);if(Ae){const[Xe,ss]=Ae;if(we.addText(H),H="",_e[te]=(_e[te]||0)+1,_e[te]<=jo&&(Yn+=ss),Xe.startsWith("_"))H+=P[0];else{const is=qe.classNameAliases[Xe]||Xe;Ue(P[0],is)}}else H+=P[0];S=q.keywordPatternRe.lastIndex,P=q.keywordPatternRe.exec(se)}H+=se.substring(S),we.addText(H)}function Xn(){if(se==="")return;let S=null;if(typeof q.subLanguage=="string"){if(!_[q.subLanguage]){we.addText(se);return}S=In(q.subLanguage,se,!0,yu[q.subLanguage]),yu[q.subLanguage]=S._top}else S=vt(se,q.subLanguage.length?q.subLanguage:null);q.relevance>0&&(Yn+=S.relevance),we.__addSublanguage(S._emitter,S.language)}function Oe(){q.subLanguage!=null?Xn():Je(),se=""}function Ue(S,P){S!==""&&(we.startScope(P),we.addText(S),we.endScope())}function gu(S,P){let H=1;const te=P.length-1;for(;H<=te;){if(!S._emit[H]){H++;continue}const Ae=qe.classNameAliases[S[H]]||S[H],Xe=P[H];Ae?Ue(Xe,Ae):(se=Xe,Je(),se=""),H++}}function xu(S,P){return S.scope&&typeof S.scope=="string"&&we.openNode(qe.classNameAliases[S.scope]||S.scope),S.beginScope&&(S.beginScope._wrap?(Ue(se,qe.classNameAliases[S.beginScope._wrap]||S.beginScope._wrap),se=""):S.beginScope._multi&&(gu(S.beginScope,P),se="")),q=Object.create(S,{parent:{value:q}}),q}function _u(S,P,H){let te=x(S.endRe,H);if(te){if(S["on:end"]){const Ae=new n(S);S["on:end"](P,Ae),Ae.isMatchIgnored&&(te=!1)}if(te){for(;S.endsParent&&S.parent;)S=S.parent;return S}}if(S.endsWithParent)return _u(S.parent,P,H)}function ns(S){return q.matcher.regexIndex===0?(se+=S[0],1):(wt=!0,0)}function ts(S){const P=S[0],H=S.rule,te=new n(H),Ae=[H.__beforeBegin,H["on:begin"]];for(const Xe of Ae)if(Xe&&(Xe(S,te),te.isMatchIgnored))return ns(P);return H.skip?se+=P:(H.excludeBegin&&(se+=P),Oe(),!H.returnBegin&&!H.excludeBegin&&(se=P)),xu(H,S),H.returnBegin?0:P.length}function us(S){const P=S[0],H=L.substring(S.index),te=_u(q,S,H);if(!te)return fu;const Ae=q;q.endScope&&q.endScope._wrap?(Oe(),Ue(P,q.endScope._wrap)):q.endScope&&q.endScope._multi?(Oe(),gu(q.endScope,S)):Ae.skip?se+=P:(Ae.returnEnd||Ae.excludeEnd||(se+=P),Oe(),Ae.excludeEnd&&(se=P));do q.scope&&we.closeNode(),!q.skip&&!q.subLanguage&&(Yn+=q.relevance),q=q.parent;while(q!==te.parent);return te.starts&&xu(te.starts,S),Ae.returnEnd?0:P.length}function rs(){const S=[];for(let P=q;P!==qe;P=P.parent)P.scope&&S.unshift(P.scope);S.forEach(P=>we.openNode(P))}let Qn={};function vu(S,P){const H=P&&P[0];if(se+=S,H==null)return Oe(),0;if(Qn.type==="begin"&&P.type==="end"&&Qn.index===P.index&&H===""){if(se+=L.slice(P.index,P.index+1),!pe){const te=new Error(`0 width match regex (${C})`);throw te.languageName=C,te.badRule=Qn.rule,te}return 1}if(Qn=P,P.type==="begin")return ts(P);if(P.type==="illegal"&&!X){const te=new Error('Illegal lexeme "'+H+'" for mode "'+(q.scope||"<unnamed>")+'"');throw te.mode=q,te}else if(P.type==="end"){const te=us(P);if(te!==fu)return te}if(P.type==="illegal"&&H==="")return se+=`
`,1;if(Et>1e5&&Et>P.index*3)throw new Error("potential infinite loop, way more iterations than matches");return se+=H,H.length}const qe=Ye(C);if(!qe)throw fn(he.replace("{}",C)),new Error('Unknown language: "'+C+'"');const os=zo(qe);let kt="",q=oe||os;const yu={},we=new M.__emitter(M);rs();let se="",Yn=0,pn=0,Et=0,wt=!1;try{if(qe.__emitTokens)qe.__emitTokens(L,we);else{for(q.matcher.considerAll();;){Et++,wt?wt=!1:q.matcher.considerAll(),q.matcher.lastIndex=pn;const S=q.matcher.exec(L);if(!S)break;const P=L.substring(pn,S.index),H=vu(P,S);pn=S.index+H}vu(L.substring(pn))}return we.finalize(),kt=we.toHTML(),{language:C,value:kt,relevance:Yn,illegal:!1,_emitter:we,_top:q}}catch(S){if(S.message&&S.message.includes("Illegal"))return{language:C,value:xt(L),illegal:!0,relevance:0,_illegalBy:{message:S.message,index:pn,context:L.slice(pn-100,pn+100),mode:S.mode,resultSoFar:kt},_emitter:we};if(pe)return{language:C,value:xt(L),illegal:!1,relevance:0,errorRaised:S,_emitter:we,_top:q};throw S}}function _t(C){const L={value:xt(C),illegal:!1,relevance:0,_top:B,_emitter:new M.__emitter(M)};return L._emitter.addText(C),L}function vt(C,L){L=L||M.languages||Object.keys(_);const X=_t(C),oe=L.filter(Ye).filter(mu).map(Oe=>In(Oe,C,!1));oe.unshift(X);const _e=oe.sort((Oe,Ue)=>{if(Oe.relevance!==Ue.relevance)return Ue.relevance-Oe.relevance;if(Oe.language&&Ue.language){if(Ye(Oe.language).supersetOf===Ue.language)return 1;if(Ye(Ue.language).supersetOf===Oe.language)return-1}return 0}),[Le,Je]=_e,Xn=Le;return Xn.secondBest=Je,Xn}function Ho(C,L,X){const oe=L&&A[L]||X;C.classList.add("hljs"),C.classList.add(`language-${oe}`)}function yt(C){let L=null;const X=ye(C);if($(X))return;if(Kn("before:highlightElement",{el:C,language:X}),C.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",C);return}if(C.children.length>0&&(M.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(C)),M.throwUnescapedHTML))throw new qo("One of your code blocks includes unescaped HTML.",C.innerHTML);L=C;const oe=L.textContent,_e=X?me(oe,{language:X,ignoreIllegals:!0}):vt(oe);C.innerHTML=_e.value,C.dataset.highlighted="yes",Ho(C,X,_e.language),C.result={language:_e.language,re:_e.relevance,relevance:_e.relevance},_e.secondBest&&(C.secondBest={language:_e.secondBest.language,relevance:_e.secondBest.relevance}),Kn("after:highlightElement",{el:C,result:_e,text:oe})}function Go(C){M=du(M,C)}const Vo=()=>{Wn(),vn("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function Zo(){Wn(),vn("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let hu=!1;function Wn(){function C(){Wn()}if(document.readyState==="loading"){hu||window.addEventListener("DOMContentLoaded",C,!1),hu=!0;return}document.querySelectorAll(M.cssSelector).forEach(yt)}function Wo(C,L){let X=null;try{X=L(f)}catch(oe){if(fn("Language definition for '{}' could not be registered.".replace("{}",C)),pe)fn(oe);else throw oe;X=B}X.name||(X.name=C),_[C]=X,X.rawDefinition=L.bind(null,f),X.aliases&&bu(X.aliases,{languageName:C})}function Ko(C){delete _[C];for(const L of Object.keys(A))A[L]===C&&delete A[L]}function Xo(){return Object.keys(_)}function Ye(C){return C=(C||"").toLowerCase(),_[C]||_[A[C]]}function bu(C,{languageName:L}){typeof C=="string"&&(C=[C]),C.forEach(X=>{A[X.toLowerCase()]=L})}function mu(C){const L=Ye(C);return L&&!L.disableAutodetect}function Qo(C){C["before:highlightBlock"]&&!C["before:highlightElement"]&&(C["before:highlightElement"]=L=>{C["before:highlightBlock"](Object.assign({block:L.el},L))}),C["after:highlightBlock"]&&!C["after:highlightElement"]&&(C["after:highlightElement"]=L=>{C["after:highlightBlock"](Object.assign({block:L.el},L))})}function Yo(C){Qo(C),U.push(C)}function Jo(C){const L=U.indexOf(C);L!==-1&&U.splice(L,1)}function Kn(C,L){const X=C;U.forEach(function(oe){oe[X]&&oe[X](L)})}function es(C){return vn("10.7.0","highlightBlock will be removed entirely in v12.0"),vn("10.7.0","Please use highlightElement now."),yt(C)}Object.assign(f,{highlight:me,highlightAuto:vt,highlightAll:Wn,highlightElement:yt,highlightBlock:es,configure:Go,initHighlighting:Vo,initHighlightingOnLoad:Zo,registerLanguage:Wo,unregisterLanguage:Ko,listLanguages:Xo,getLanguage:Ye,registerAliases:bu,autoDetection:mu,inherit:du,addPlugin:Yo,removePlugin:Jo}),f.debugMode=function(){pe=!1},f.safeMode=function(){pe=!0},f.versionString=Uo,f.regex={concat:k,lookahead:p,either:y,optional:h,anyNumberOfTimes:b};for(const C in Ke)typeof Ke[C]=="object"&&e(Ke[C]);return Object.assign(f,Ke),f},yn=pu({});return yn.newInstance=()=>pu({}),Ot=yn,yn.HighlightJS=yn,yn.default=yn,Ot}var vc=_c();const hn=xc(vc),Xu="[A-Za-z$_][0-9A-Za-z$_]*",yc=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends","using"],kc=["true","false","null","undefined","NaN","Infinity"],Gr=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],Vr=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],Zr=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],Ec=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],wc=[].concat(Zr,Gr,Vr);function Cc(e){const n=e.regex,t=(m,{after:w})=>{const R="</"+m[0].slice(1);return m.input.indexOf(R,w)!==-1},u=Xu,r={begin:"<>",end:"</>"},o=/<[A-Za-z0-9\\._:-]+\s*\/>/,s={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(m,w)=>{const R=m[0].length+m.index,W=m.input[R];if(W==="<"||W===","){w.ignoreMatch();return}W===">"&&(t(m,{after:R})||w.ignoreMatch());let Y;const j=m.input.substring(R);if(Y=j.match(/^\s*=/)){w.ignoreMatch();return}if((Y=j.match(/^\s+extends\s+/))&&Y.index===0){w.ignoreMatch();return}}},i={$pattern:Xu,keyword:yc,literal:kc,built_in:wc,"variable.language":Ec},a="[0-9](_?[0-9])*",c=`\\.(${a})`,l="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",d={className:"number",variants:[{begin:`(\\b(${l})((${c})|\\.)?|(${c}))[eE][+-]?(${a})\\b`},{begin:`\\b(${l})\\b((${c})\\b|\\.)?|(${c})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},p={className:"subst",begin:"\\$\\{",end:"\\}",keywords:i,contains:[]},b={begin:".?html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,p],subLanguage:"xml"}},h={begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,p],subLanguage:"css"}},k={begin:".?gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,p],subLanguage:"graphql"}},v={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,p]},g={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:u+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},x=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,b,h,k,v,{match:/\$\d+/},d];p.contains=x.concat({begin:/\{/,end:/\}/,keywords:i,contains:["self"].concat(x)});const E=[].concat(g,p.contains),D=E.concat([{begin:/(\s*)\(/,end:/\)/,keywords:i,contains:["self"].concat(E)}]),I={className:"params",begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:i,contains:D},K={variants:[{match:[/class/,/\s+/,u,/\s+/,/extends/,/\s+/,n.concat(u,"(",n.concat(/\./,u),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,u],scope:{1:"keyword",3:"title.class"}}]},F={relevance:0,match:n.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...Gr,...Vr]}},Z={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},de={variants:[{match:[/function/,/\s+/,u,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[I],illegal:/%/},fe={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function Ce(m){return n.concat("(?!",m.join("|"),")")}const Fe={match:n.concat(/\b/,Ce([...Zr,"super","import"].map(m=>`${m}\\s*\\(`)),u,n.lookahead(/\s*\(/)),className:"title.function",relevance:0},le={begin:n.concat(/\./,n.lookahead(n.concat(u,/(?![0-9A-Za-z$_(])/))),end:u,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},ne={match:[/get|set/,/\s+/,u,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},I]},ce="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",Se={match:[/const|var|let/,/\s+/,u,/\s*/,/=\s*/,/(async\s*)?/,n.lookahead(ce)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[I]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:i,exports:{PARAMS_CONTAINS:D,CLASS_REFERENCE:F},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),Z,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,b,h,k,v,g,{match:/\$\d+/},d,F,{scope:"attr",match:u+n.lookahead(":"),relevance:0},Se,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[g,e.REGEXP_MODE,{className:"function",begin:ce,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:i,contains:D}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:r.begin,end:r.end},{match:o},{begin:s.begin,"on:begin":s.isTrulyOpeningTag,end:s.end}],subLanguage:"xml",contains:[{begin:s.begin,end:s.end,skip:!0,contains:["self"]}]}]},de,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[I,e.inherit(e.TITLE_MODE,{begin:u,className:"title.function"})]},{match:/\.\.\./,relevance:0},le,{match:"\\$"+u,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[I]},Fe,fe,K,ne,{match:/\$[(.]/}]}}const lt="[A-Za-z$_][0-9A-Za-z$_]*",Wr=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends","using"],Kr=["true","false","null","undefined","NaN","Infinity"],Xr=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],Qr=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],Yr=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],Jr=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],eo=[].concat(Yr,Xr,Qr);function Ac(e){const n=e.regex,t=(m,{after:w})=>{const R="</"+m[0].slice(1);return m.input.indexOf(R,w)!==-1},u=lt,r={begin:"<>",end:"</>"},o=/<[A-Za-z0-9\\._:-]+\s*\/>/,s={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(m,w)=>{const R=m[0].length+m.index,W=m.input[R];if(W==="<"||W===","){w.ignoreMatch();return}W===">"&&(t(m,{after:R})||w.ignoreMatch());let Y;const j=m.input.substring(R);if(Y=j.match(/^\s*=/)){w.ignoreMatch();return}if((Y=j.match(/^\s+extends\s+/))&&Y.index===0){w.ignoreMatch();return}}},i={$pattern:lt,keyword:Wr,literal:Kr,built_in:eo,"variable.language":Jr},a="[0-9](_?[0-9])*",c=`\\.(${a})`,l="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",d={className:"number",variants:[{begin:`(\\b(${l})((${c})|\\.)?|(${c}))[eE][+-]?(${a})\\b`},{begin:`\\b(${l})\\b((${c})\\b|\\.)?|(${c})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},p={className:"subst",begin:"\\$\\{",end:"\\}",keywords:i,contains:[]},b={begin:".?html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,p],subLanguage:"xml"}},h={begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,p],subLanguage:"css"}},k={begin:".?gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,p],subLanguage:"graphql"}},v={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,p]},g={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:u+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},x=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,b,h,k,v,{match:/\$\d+/},d];p.contains=x.concat({begin:/\{/,end:/\}/,keywords:i,contains:["self"].concat(x)});const E=[].concat(g,p.contains),D=E.concat([{begin:/(\s*)\(/,end:/\)/,keywords:i,contains:["self"].concat(E)}]),I={className:"params",begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:i,contains:D},K={variants:[{match:[/class/,/\s+/,u,/\s+/,/extends/,/\s+/,n.concat(u,"(",n.concat(/\./,u),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,u],scope:{1:"keyword",3:"title.class"}}]},F={relevance:0,match:n.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...Xr,...Qr]}},Z={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},de={variants:[{match:[/function/,/\s+/,u,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[I],illegal:/%/},fe={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function Ce(m){return n.concat("(?!",m.join("|"),")")}const Fe={match:n.concat(/\b/,Ce([...Yr,"super","import"].map(m=>`${m}\\s*\\(`)),u,n.lookahead(/\s*\(/)),className:"title.function",relevance:0},le={begin:n.concat(/\./,n.lookahead(n.concat(u,/(?![0-9A-Za-z$_(])/))),end:u,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},ne={match:[/get|set/,/\s+/,u,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},I]},ce="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",Se={match:[/const|var|let/,/\s+/,u,/\s*/,/=\s*/,/(async\s*)?/,n.lookahead(ce)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[I]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:i,exports:{PARAMS_CONTAINS:D,CLASS_REFERENCE:F},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),Z,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,b,h,k,v,g,{match:/\$\d+/},d,F,{scope:"attr",match:u+n.lookahead(":"),relevance:0},Se,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[g,e.REGEXP_MODE,{className:"function",begin:ce,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:i,contains:D}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:r.begin,end:r.end},{match:o},{begin:s.begin,"on:begin":s.isTrulyOpeningTag,end:s.end}],subLanguage:"xml",contains:[{begin:s.begin,end:s.end,skip:!0,contains:["self"]}]}]},de,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[I,e.inherit(e.TITLE_MODE,{begin:u,className:"title.function"})]},{match:/\.\.\./,relevance:0},le,{match:"\\$"+u,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[I]},Fe,fe,K,ne,{match:/\$[(.]/}]}}function Dc(e){const n=e.regex,t=Ac(e),u=lt,r=["any","void","number","boolean","string","object","never","symbol","bigint","unknown"],o={begin:[/namespace/,/\s+/,e.IDENT_RE],beginScope:{1:"keyword",3:"title.class"}},s={beginKeywords:"interface",end:/\{/,excludeEnd:!0,keywords:{keyword:"interface extends",built_in:r},contains:[t.exports.CLASS_REFERENCE]},i={className:"meta",relevance:10,begin:/^\s*['"]use strict['"]/},a=["type","interface","public","private","protected","implements","declare","abstract","readonly","enum","override","satisfies"],c={$pattern:lt,keyword:Wr.concat(a),literal:Kr,built_in:eo.concat(r),"variable.language":Jr},l={className:"meta",begin:"@"+u},d=(k,v,y)=>{const g=k.contains.findIndex(x=>x.label===v);if(g===-1)throw new Error("can not find mode to replace");k.contains.splice(g,1,y)};Object.assign(t.keywords,c),t.exports.PARAMS_CONTAINS.push(l);const p=t.contains.find(k=>k.scope==="attr"),b=Object.assign({},p,{match:n.concat(u,n.lookahead(/\s*\?:/))});t.exports.PARAMS_CONTAINS.push([t.exports.CLASS_REFERENCE,p,b]),t.contains=t.contains.concat([l,o,s,b]),d(t,"shebang",e.SHEBANG()),d(t,"use_strict",i);const h=t.contains.find(k=>k.label==="func.def");return h.relevance=0,Object.assign(t,{name:"TypeScript",aliases:["ts","tsx","mts","cts"]}),t}function Sc(e){const n=e.regex,t={},u={begin:/\$\{/,end:/\}/,contains:["self",{begin:/:-/,contains:[t]}]};Object.assign(t,{className:"variable",variants:[{begin:n.concat(/\$[\w\d#@][\w\d_]*/,"(?![\\w\\d])(?![$])")},u]});const r={className:"subst",begin:/\$\(/,end:/\)/,contains:[e.BACKSLASH_ESCAPE]},o=e.inherit(e.COMMENT(),{match:[/(^|\s)/,/#.*$/],scope:{2:"comment"}}),s={begin:/<<-?\s*(?=\w+)/,starts:{contains:[e.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,className:"string"})]}},i={className:"string",begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,t,r]};r.contains.push(i);const a={match:/\\"/},c={className:"string",begin:/'/,end:/'/},l={match:/\\'/},d={begin:/\$?\(\(/,end:/\)\)/,contains:[{begin:/\d+#[0-9a-f]+/,className:"number"},e.NUMBER_MODE,t]},p=["fish","bash","zsh","sh","csh","ksh","tcsh","dash","scsh"],b=e.SHEBANG({binary:`(${p.join("|")})`,relevance:10}),h={className:"function",begin:/\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin:!0,contains:[e.inherit(e.TITLE_MODE,{begin:/\w[\w\d_]*/})],relevance:0},k=["if","then","else","elif","fi","time","for","while","until","in","do","done","case","esac","coproc","function","select"],v=["true","false"],y={match:/(\/[a-z._-]+)+/},g=["break","cd","continue","eval","exec","exit","export","getopts","hash","pwd","readonly","return","shift","test","times","trap","umask","unset"],x=["alias","bind","builtin","caller","command","declare","echo","enable","help","let","local","logout","mapfile","printf","read","readarray","source","sudo","type","typeset","ulimit","unalias"],E=["autoload","bg","bindkey","bye","cap","chdir","clone","comparguments","compcall","compctl","compdescribe","compfiles","compgroups","compquote","comptags","comptry","compvalues","dirs","disable","disown","echotc","echoti","emulate","fc","fg","float","functions","getcap","getln","history","integer","jobs","kill","limit","log","noglob","popd","print","pushd","pushln","rehash","sched","setcap","setopt","stat","suspend","ttyctl","unfunction","unhash","unlimit","unsetopt","vared","wait","whence","where","which","zcompile","zformat","zftp","zle","zmodload","zparseopts","zprof","zpty","zregexparse","zsocket","zstyle","ztcp"],D=["chcon","chgrp","chown","chmod","cp","dd","df","dir","dircolors","ln","ls","mkdir","mkfifo","mknod","mktemp","mv","realpath","rm","rmdir","shred","sync","touch","truncate","vdir","b2sum","base32","base64","cat","cksum","comm","csplit","cut","expand","fmt","fold","head","join","md5sum","nl","numfmt","od","paste","ptx","pr","sha1sum","sha224sum","sha256sum","sha384sum","sha512sum","shuf","sort","split","sum","tac","tail","tr","tsort","unexpand","uniq","wc","arch","basename","chroot","date","dirname","du","echo","env","expr","factor","groups","hostid","id","link","logname","nice","nohup","nproc","pathchk","pinky","printenv","printf","pwd","readlink","runcon","seq","sleep","stat","stdbuf","stty","tee","test","timeout","tty","uname","unlink","uptime","users","who","whoami","yes"];return{name:"Bash",aliases:["sh","zsh"],keywords:{$pattern:/\b[a-z][a-z0-9._-]+\b/,keyword:k,literal:v,built_in:[...g,...x,"set","shopt",...E,...D]},contains:[b,e.SHEBANG(),h,d,o,s,y,i,a,c,l,t]}}const Fc=e=>({IMPORTANT:{scope:"meta",begin:"!important"},BLOCK_COMMENT:e.C_BLOCK_COMMENT_MODE,HEXCOLOR:{scope:"number",begin:/#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/},FUNCTION_DISPATCH:{className:"built_in",begin:/[\w-]+(?=\()/},ATTRIBUTE_SELECTOR_MODE:{scope:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},CSS_NUMBER_MODE:{scope:"number",begin:e.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},CSS_VARIABLE:{className:"attr",begin:/--[A-Za-z_][A-Za-z0-9_-]*/}}),Tc=["a","abbr","address","article","aside","audio","b","blockquote","body","button","canvas","caption","cite","code","dd","del","details","dfn","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","html","i","iframe","img","input","ins","kbd","label","legend","li","main","mark","menu","nav","object","ol","optgroup","option","p","picture","q","quote","samp","section","select","source","span","strong","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","ul","var","video"],Mc=["defs","g","marker","mask","pattern","svg","switch","symbol","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feFlood","feGaussianBlur","feImage","feMerge","feMorphology","feOffset","feSpecularLighting","feTile","feTurbulence","linearGradient","radialGradient","stop","circle","ellipse","image","line","path","polygon","polyline","rect","text","use","textPath","tspan","foreignObject","clipPath"],Oc=[...Tc,...Mc],Nc=["any-hover","any-pointer","aspect-ratio","color","color-gamut","color-index","device-aspect-ratio","device-height","device-width","display-mode","forced-colors","grid","height","hover","inverted-colors","monochrome","orientation","overflow-block","overflow-inline","pointer","prefers-color-scheme","prefers-contrast","prefers-reduced-motion","prefers-reduced-transparency","resolution","scan","scripting","update","width","min-width","max-width","min-height","max-height"].sort().reverse(),Rc=["active","any-link","blank","checked","current","default","defined","dir","disabled","drop","empty","enabled","first","first-child","first-of-type","fullscreen","future","focus","focus-visible","focus-within","has","host","host-context","hover","indeterminate","in-range","invalid","is","lang","last-child","last-of-type","left","link","local-link","not","nth-child","nth-col","nth-last-child","nth-last-col","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","past","placeholder-shown","read-only","read-write","required","right","root","scope","target","target-within","user-invalid","valid","visited","where"].sort().reverse(),Ic=["after","backdrop","before","cue","cue-region","first-letter","first-line","grammar-error","marker","part","placeholder","selection","slotted","spelling-error"].sort().reverse(),Bc=["accent-color","align-content","align-items","align-self","alignment-baseline","all","anchor-name","animation","animation-composition","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-range","animation-range-end","animation-range-start","animation-timeline","animation-timing-function","appearance","aspect-ratio","backdrop-filter","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-position-x","background-position-y","background-repeat","background-size","baseline-shift","block-size","border","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-end-end-radius","border-end-start-radius","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-start-end-radius","border-start-start-radius","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-align","box-decoration-break","box-direction","box-flex","box-flex-group","box-lines","box-ordinal-group","box-orient","box-pack","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","color-scheme","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","contain-intrinsic-block-size","contain-intrinsic-height","contain-intrinsic-inline-size","contain-intrinsic-size","contain-intrinsic-width","container","container-name","container-type","content","content-visibility","counter-increment","counter-reset","counter-set","cue","cue-after","cue-before","cursor","cx","cy","direction","display","dominant-baseline","empty-cells","enable-background","field-sizing","fill","fill-opacity","fill-rule","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","flood-color","flood-opacity","flow","font","font-display","font-family","font-feature-settings","font-kerning","font-language-override","font-optical-sizing","font-palette","font-size","font-size-adjust","font-smooth","font-smoothing","font-stretch","font-style","font-synthesis","font-synthesis-position","font-synthesis-small-caps","font-synthesis-style","font-synthesis-weight","font-variant","font-variant-alternates","font-variant-caps","font-variant-east-asian","font-variant-emoji","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","forced-color-adjust","gap","glyph-orientation-horizontal","glyph-orientation-vertical","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphenate-character","hyphenate-limit-chars","hyphens","icon","image-orientation","image-rendering","image-resolution","ime-mode","initial-letter","initial-letter-align","inline-size","inset","inset-area","inset-block","inset-block-end","inset-block-start","inset-inline","inset-inline-end","inset-inline-start","isolation","justify-content","justify-items","justify-self","kerning","left","letter-spacing","lighting-color","line-break","line-height","line-height-step","list-style","list-style-image","list-style-position","list-style-type","margin","margin-block","margin-block-end","margin-block-start","margin-bottom","margin-inline","margin-inline-end","margin-inline-start","margin-left","margin-right","margin-top","margin-trim","marker","marker-end","marker-mid","marker-start","marks","mask","mask-border","mask-border-mode","mask-border-outset","mask-border-repeat","mask-border-slice","mask-border-source","mask-border-width","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","masonry-auto-flow","math-depth","math-shift","math-style","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","nav-down","nav-index","nav-left","nav-right","nav-up","none","normal","object-fit","object-position","offset","offset-anchor","offset-distance","offset-path","offset-position","offset-rotate","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-anchor","overflow-block","overflow-clip-margin","overflow-inline","overflow-wrap","overflow-x","overflow-y","overlay","overscroll-behavior","overscroll-behavior-block","overscroll-behavior-inline","overscroll-behavior-x","overscroll-behavior-y","padding","padding-block","padding-block-end","padding-block-start","padding-bottom","padding-inline","padding-inline-end","padding-inline-start","padding-left","padding-right","padding-top","page","page-break-after","page-break-before","page-break-inside","paint-order","pause","pause-after","pause-before","perspective","perspective-origin","place-content","place-items","place-self","pointer-events","position","position-anchor","position-visibility","print-color-adjust","quotes","r","resize","rest","rest-after","rest-before","right","rotate","row-gap","ruby-align","ruby-position","scale","scroll-behavior","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-stop","scroll-snap-type","scroll-timeline","scroll-timeline-axis","scroll-timeline-name","scrollbar-color","scrollbar-gutter","scrollbar-width","shape-image-threshold","shape-margin","shape-outside","shape-rendering","speak","speak-as","src","stop-color","stop-opacity","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","tab-size","table-layout","text-align","text-align-all","text-align-last","text-anchor","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-skip","text-decoration-skip-ink","text-decoration-style","text-decoration-thickness","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-indent","text-justify","text-orientation","text-overflow","text-rendering","text-shadow","text-size-adjust","text-transform","text-underline-offset","text-underline-position","text-wrap","text-wrap-mode","text-wrap-style","timeline-scope","top","touch-action","transform","transform-box","transform-origin","transform-style","transition","transition-behavior","transition-delay","transition-duration","transition-property","transition-timing-function","translate","unicode-bidi","user-modify","user-select","vector-effect","vertical-align","view-timeline","view-timeline-axis","view-timeline-inset","view-timeline-name","view-transition-name","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","white-space","white-space-collapse","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","x","y","z-index","zoom"].sort().reverse();function Pc(e){const n=e.regex,t=Fc(e),u={begin:/-(webkit|moz|ms|o)-(?=[a-z])/},r="and or not only",o=/@-?\w[\w]*(-\w+)*/,s="[a-zA-Z-][a-zA-Z0-9_-]*",i=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE];return{name:"CSS",case_insensitive:!0,illegal:/[=|'\$]/,keywords:{keyframePosition:"from to"},classNameAliases:{keyframePosition:"selector-tag"},contains:[t.BLOCK_COMMENT,u,t.CSS_NUMBER_MODE,{className:"selector-id",begin:/#[A-Za-z0-9_-]+/,relevance:0},{className:"selector-class",begin:"\\."+s,relevance:0},t.ATTRIBUTE_SELECTOR_MODE,{className:"selector-pseudo",variants:[{begin:":("+Rc.join("|")+")"},{begin:":(:)?("+Ic.join("|")+")"}]},t.CSS_VARIABLE,{className:"attribute",begin:"\\b("+Bc.join("|")+")\\b"},{begin:/:/,end:/[;}{]/,contains:[t.BLOCK_COMMENT,t.HEXCOLOR,t.IMPORTANT,t.CSS_NUMBER_MODE,...i,{begin:/(url|data-uri)\(/,end:/\)/,relevance:0,keywords:{built_in:"url data-uri"},contains:[...i,{className:"string",begin:/[^)]/,endsWithParent:!0,excludeEnd:!0}]},t.FUNCTION_DISPATCH]},{begin:n.lookahead(/@/),end:"[{;]",relevance:0,illegal:/:/,contains:[{className:"keyword",begin:o},{begin:/\s/,endsWithParent:!0,excludeEnd:!0,relevance:0,keywords:{$pattern:/[a-z-]+/,keyword:r,attribute:Nc.join(" ")},contains:[{begin:/[a-z-]+(?=:)/,className:"attribute"},...i,t.CSS_NUMBER_MODE]}]},{className:"selector-tag",begin:"\\b("+Oc.join("|")+")\\b"}]}}function Lc(e){const n=e.regex,t=n.concat(/[\p{L}_]/u,n.optional(/[\p{L}0-9_.-]*:/u),/[\p{L}0-9_.-]*/u),u=/[\p{L}0-9._:-]+/u,r={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},o={begin:/\s/,contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},s=e.inherit(o,{begin:/\(/,end:/\)/}),i=e.inherit(e.APOS_STRING_MODE,{className:"string"}),a=e.inherit(e.QUOTE_STRING_MODE,{className:"string"}),c={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:u,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[r]},{begin:/'/,end:/'/,contains:[r]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,unicodeRegex:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[o,a,i,s,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[o,s,a,i]}]}]},e.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},r,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,relevance:10,contains:[a]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[c],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[c],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:n.concat(/</,n.lookahead(n.concat(t,n.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:t,relevance:0,starts:c}]},{className:"tag",begin:n.concat(/<\//,n.lookahead(n.concat(t,/>/))),contains:[{className:"name",begin:t,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}const zc={class:"file-tree"},$c=["onClick"],Uc={class:"node-icon"},qc={class:"node-name"},jc={key:0,class:"node-children"},Hc=ae({__name:"FileTree",props:{nodes:{},currentFile:{},expandedFolders:{},level:{default:0}},emits:["select"],setup(e,{emit:n}){const t=e,u=n,r=ge(()=>`${t.level*1.5}rem`);function o(c){return c.type==="folder"}function s(c){return t.currentFile?.path===c.path}function i(c){return t.expandedFolders.has(c)}function a(c){u("select",c)}return(c,l)=>{const d=cs("FileTree",!0);return z(),ue("div",zc,[(z(!0),ue(Gt,null,lr(e.nodes,p=>(z(),ue("div",{key:p.path,class:"tree-node"},[V("div",{class:gn(["node-content",{"is-folder":o(p),"is-current":s(p),"is-expanded":o(p)&&i(p.path)}]),style:Vt({paddingLeft:r.value}),onClick:b=>a(p)},[V("span",Uc,ze(o(p)?i(p.path)?"📂":"📁":"📄"),1),V("span",qc,ze(p.displayName),1)],14,$c),o(p)&&p.children&&i(p.path)?(z(),ue("div",jc,[De(d,{nodes:p.children,"current-file":e.currentFile,"expanded-folders":e.expandedFolders,level:e.level+1,onSelect:l[0]||(l[0]=b=>u("select",b))},null,8,["nodes","current-file","expanded-folders","level"])])):rn("",!0)]))),128))])}}}),Gc=ls(Hc,[["__scopeId","data-v-98ad75b9"]]);function no(e,n){const t=typeof e=="string"&&!n?`${e}Context`:n,u=Symbol(t);return[s=>{const i=ds(u,s);if(i||i===null)return i;throw new Error(`Injection \`${u.toString()}\` not found. Component must be used within ${Array.isArray(e)?`one of the following components: ${e.join(", ")}`:`\`${e}\``}`)},s=>(fs(u,s),s)]}function an(){let e=document.activeElement;if(e==null)return null;for(;e!=null&&e.shadowRoot!=null&&e.shadowRoot.activeElement!=null;)e=e.shadowRoot.activeElement;return e}function to(e,n,t){const u=t.originalEvent.target,r=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:t});n&&u.addEventListener(e,n,{once:!0}),u.dispatchEvent(r)}function Vc(e){return e==null}function ru(e){return e?e.flatMap(n=>n.type===Gt?ru(n.children):[n]):[]}const[Zc]=no("ConfigProvider");function Nt(e){if(e===null||typeof e!="object")return!1;const n=Object.getPrototypeOf(e);return n!==null&&n!==Object.prototype&&Object.getPrototypeOf(n)!==null||Symbol.iterator in e?!1:Symbol.toStringTag in e?Object.prototype.toString.call(e)==="[object Module]":!0}function jt(e,n,t=".",u){if(!Nt(n))return jt(e,{},t,u);const r=Object.assign({},n);for(const o in e){if(o==="__proto__"||o==="constructor")continue;const s=e[o];s!=null&&(u&&u(r,o,s,t)||(Array.isArray(s)&&Array.isArray(r[o])?r[o]=[...s,...r[o]]:Nt(s)&&Nt(r[o])?r[o]=jt(s,r[o],(t?`${t}.`:"")+o.toString(),u):r[o]=s))}return r}function Wc(e){return(...n)=>n.reduce((t,u)=>jt(t,u,"",e),{})}const Kc=Wc(),Xc=hs(()=>{const e=Q(new Map),n=Q(),t=ge(()=>{for(const s of e.value.values())if(s)return!0;return!1}),u=Zc({scrollBody:Q(!0)});let r=null;const o=()=>{document.body.style.paddingRight="",document.body.style.marginRight="",document.body.style.pointerEvents="",document.documentElement.style.removeProperty("--scrollbar-width"),document.body.style.overflow=n.value??"",ku&&r?.(),n.value=void 0};return sn(t,(s,i)=>{if(!jn)return;if(!s){i&&o();return}n.value===void 0&&(n.value=document.body.style.overflow);const a=window.innerWidth-document.documentElement.clientWidth,c={padding:a,margin:0},l=u.scrollBody?.value?typeof u.scrollBody.value=="object"?Kc({padding:u.scrollBody.value.padding===!0?a:u.scrollBody.value.padding,margin:u.scrollBody.value.margin===!0?a:u.scrollBody.value.margin},c):c:{padding:0,margin:0};a>0&&(document.body.style.paddingRight=typeof l.padding=="number"?`${l.padding}px`:String(l.padding),document.body.style.marginRight=typeof l.margin=="number"?`${l.margin}px`:String(l.margin),document.documentElement.style.setProperty("--scrollbar-width",`${a}px`),document.body.style.overflow="hidden"),ku&&(r=bs(document,"touchmove",d=>Yc(d),{passive:!1})),An(()=>{document.body.style.pointerEvents="none",document.body.style.overflow="hidden"})},{immediate:!0,flush:"sync"}),e});function Qc(e){const n=Math.random().toString(36).substring(2,7),t=Xc();t.value.set(n,e);const u=ge({get:()=>t.value.get(n)??!1,set:r=>t.value.set(n,r)});return ps(()=>{t.value.delete(n)}),u}function uo(e){const n=window.getComputedStyle(e);if(n.overflowX==="scroll"||n.overflowY==="scroll"||n.overflowX==="auto"&&e.clientWidth<e.scrollWidth||n.overflowY==="auto"&&e.clientHeight<e.scrollHeight)return!0;{const t=e.parentNode;return!(t instanceof Element)||t.tagName==="BODY"?!1:uo(t)}}function Yc(e){const n=e||window.event,t=n.target;return t instanceof Element&&uo(t)?!1:n.touches.length>1?!0:(n.preventDefault&&n.cancelable&&n.preventDefault(),!1)}function gt(e){const n=ft(),t=n?.type.emits,u={};return t?.length||console.warn(`No emitted event found. Please check component: ${n?.type.__name}`),t?.forEach(r=>{u[ms(dr(r))]=(...o)=>e(r,...o)}),u}function Ze(){const e=ft(),n=Q(),t=ge(()=>["#text","#comment"].includes(n.value?.$el.nodeName)?n.value?.$el.nextElementSibling:Zt(n)),u=Object.assign({},e.exposed),r={};for(const s in e.props)Object.defineProperty(r,s,{enumerable:!0,configurable:!0,get:()=>e.props[s]});if(Object.keys(u).length>0)for(const s in u)Object.defineProperty(r,s,{enumerable:!0,configurable:!0,get:()=>u[s]});Object.defineProperty(r,"$el",{enumerable:!0,configurable:!0,get:()=>e.vnode.el}),e.exposed=r;function o(s){if(n.value=s,!!s&&(Object.defineProperty(r,"$el",{enumerable:!0,configurable:!0,get:()=>s instanceof Element?s:s.$el}),!(s instanceof Element)&&!Object.hasOwn(s,"$el"))){const i=s.$.exposed,a=Object.assign({},r);for(const c in i)Object.defineProperty(a,c,{enumerable:!0,configurable:!0,get:()=>i[c]});e.exposed=a}}return{forwardRef:o,currentRef:n,currentElement:t}}function ro(e){const n=ft(),t=Object.keys(n?.type.props??{}).reduce((r,o)=>{const s=(n?.type.props[o]).default;return s!==void 0&&(r[o]=s),r},{}),u=gs(e);return ge(()=>{const r={},o=n?.vnode.props??{};return Object.keys(o).forEach(s=>{r[dr(s)]=o[s]}),Object.keys({...t,...r}).reduce((s,i)=>(u.value[i]!==void 0&&(s[i]=u.value[i]),s),{})})}function oo(e,n){const t=ro(e),u=n?gt(n):{};return ge(()=>({...t.value,...u}))}var Jc=function(e){if(typeof document>"u")return null;var n=Array.isArray(e)?e[0]:e;return n.ownerDocument.body},En=new WeakMap,tt=new WeakMap,ut={},Rt=0,so=function(e){return e&&(e.host||so(e.parentNode))},el=function(e,n){return n.map(function(t){if(e.contains(t))return t;var u=so(t);return u&&e.contains(u)?u:(console.error("aria-hidden",t,"in not contained inside",e,". Doing nothing"),null)}).filter(function(t){return!!t})},nl=function(e,n,t,u){var r=el(n,Array.isArray(e)?e:[e]);ut[t]||(ut[t]=new WeakMap);var o=ut[t],s=[],i=new Set,a=new Set(r),c=function(d){!d||i.has(d)||(i.add(d),c(d.parentNode))};r.forEach(c);var l=function(d){!d||a.has(d)||Array.prototype.forEach.call(d.children,function(p){if(i.has(p))l(p);else try{var b=p.getAttribute(u),h=b!==null&&b!=="false",k=(En.get(p)||0)+1,v=(o.get(p)||0)+1;En.set(p,k),o.set(p,v),s.push(p),k===1&&h&&tt.set(p,!0),v===1&&p.setAttribute(t,"true"),h||p.setAttribute(u,"true")}catch(y){console.error("aria-hidden: cannot operate on ",p,y)}})};return l(n),i.clear(),Rt++,function(){s.forEach(function(d){var p=En.get(d)-1,b=o.get(d)-1;En.set(d,p),o.set(d,b),p||(tt.has(d)||d.removeAttribute(u),tt.delete(d)),b||d.removeAttribute(t)}),Rt--,Rt||(En=new WeakMap,En=new WeakMap,tt=new WeakMap,ut={})}},tl=function(e,n,t){t===void 0&&(t="data-aria-hidden");var u=Array.from(Array.isArray(e)?e:[e]),r=Jc(e);return r?(u.push.apply(u,Array.from(r.querySelectorAll("[aria-live], script"))),nl(u,r,t,"aria-hidden")):function(){return null}};function ul(e){let n;sn(()=>Zt(e),t=>{t?n=tl(t):n&&n()}),Wt(()=>{n&&n()})}function Qu(e,n="reka"){return`${n}-${xs?.()}`}function rl(e,n){const t=Q(e);function u(o){return n[t.value][o]??t.value}return{state:t,dispatch:o=>{t.value=u(o)}}}function ol(e,n){const t=Q({}),u=Q("none"),r=Q(e),o=e.value?"mounted":"unmounted";let s;const i=n.value?.ownerDocument.defaultView??_s,{state:a,dispatch:c}=rl(o,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}}),l=v=>{if(jn){const y=new CustomEvent(v,{bubbles:!1,cancelable:!1});n.value?.dispatchEvent(y)}};sn(e,async(v,y)=>{const g=y!==v;if(await An(),g){const x=u.value,E=rt(n.value);v?(c("MOUNT"),l("enter"),E==="none"&&l("after-enter")):E==="none"||E==="undefined"||t.value?.display==="none"?(c("UNMOUNT"),l("leave"),l("after-leave")):y&&x!==E?(c("ANIMATION_OUT"),l("leave")):(c("UNMOUNT"),l("after-leave"))}},{immediate:!0});const d=v=>{const y=rt(n.value),g=y.includes(CSS.escape(v.animationName)),x=a.value==="mounted"?"enter":"leave";if(v.target===n.value&&g&&(l(`after-${x}`),c("ANIMATION_END"),!r.value)){const E=n.value.style.animationFillMode;n.value.style.animationFillMode="forwards",s=i?.setTimeout(()=>{n.value?.style.animationFillMode==="forwards"&&(n.value.style.animationFillMode=E)})}v.target===n.value&&y==="none"&&c("ANIMATION_END")},p=v=>{v.target===n.value&&(u.value=rt(n.value))},b=sn(n,(v,y)=>{v?(t.value=getComputedStyle(v),v.addEventListener("animationstart",p),v.addEventListener("animationcancel",d),v.addEventListener("animationend",d)):(c("ANIMATION_END"),s!==void 0&&i?.clearTimeout(s),y?.removeEventListener("animationstart",p),y?.removeEventListener("animationcancel",d),y?.removeEventListener("animationend",d))},{immediate:!0}),h=sn(a,()=>{const v=rt(n.value);u.value=a.value==="mounted"?v:"none"});return Wt(()=>{b(),h()}),{isPresent:ge(()=>["mounted","unmountSuspended"].includes(a.value))}}function rt(e){return e&&getComputedStyle(e).animationName||"none"}var io=ae({name:"Presence",props:{present:{type:Boolean,required:!0},forceMount:{type:Boolean}},slots:{},setup(e,{slots:n,expose:t}){const{present:u,forceMount:r}=fr(e),o=Q(),{isPresent:s}=ol(u,o);t({present:s});let i=n.default({present:s.value});i=ru(i||[]);const a=ft();if(i&&i?.length>1){const c=a?.parent?.type.name?`<${a.parent.type.name} />`:"component";throw new Error([`Detected an invalid children for \`${c}\` for  \`Presence\` component.`,"","Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.","You can apply a few solutions:",["Provide a single child element so that `presence` directive attach correctly.","Ensure the first child is an actual element instead of a raw text node or comment node."].map(l=>`  - ${l}`).join(`
`)].join(`
`))}return()=>r.value||u.value||s.value?mn(n.default({present:s.value})[0],{ref:c=>{const l=Zt(c);return typeof l?.hasAttribute>"u"||(l?.hasAttribute("data-reka-popper-content-wrapper")?o.value=l.firstElementChild:o.value=l),l}}):null}});const sl=ae({name:"PrimitiveSlot",inheritAttrs:!1,setup(e,{attrs:n,slots:t}){return()=>{if(!t.default)return null;const u=ru(t.default()),r=u.findIndex(a=>a.type!==vs);if(r===-1)return u;const o=u[r];delete o.props?.ref;const s=o.props?Ne(n,o.props):n,i=ys({...o,props:{}},s);return u.length===1?i:(u[r]=i,u)}}}),il=["area","img","input"],Mn=ae({name:"Primitive",inheritAttrs:!1,props:{asChild:{type:Boolean,default:!1},as:{type:[String,Object],default:"div"}},setup(e,{attrs:n,slots:t}){const u=e.asChild?"template":e.as;return typeof u=="string"&&il.includes(u)?()=>mn(u,n):u!=="template"?()=>mn(e.as,n,{default:t.default}):()=>mn(sl,n,{default:t.default})}}),[ln,al]=no("DialogRoot");var cl=ae({inheritAttrs:!1,__name:"DialogRoot",props:{open:{type:Boolean,required:!1,default:void 0},defaultOpen:{type:Boolean,required:!1,default:!1},modal:{type:Boolean,required:!1,default:!0}},emits:["update:open"],setup(e,{emit:n}){const t=e,r=pr(t,"open",n,{defaultValue:t.defaultOpen,passive:t.open===void 0}),o=Q(),s=Q(),{modal:i}=fr(t);return al({open:r,modal:i,openModal:()=>{r.value=!0},onOpenChange:a=>{r.value=a},onOpenToggle:()=>{r.value=!r.value},contentId:"",titleId:"",descriptionId:"",triggerElement:o,contentElement:s}),(a,c)=>be(a.$slots,"default",{open:T(r),close:()=>r.value=!1})}}),ll=cl,dl=ae({__name:"DialogClose",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(e){const n=e;Ze();const t=ln();return(u,r)=>(z(),xe(T(Mn),Ne(n,{type:u.as==="button"?"button":void 0,onClick:r[0]||(r[0]=o=>T(t).onOpenChange(!1))}),{default:ee(()=>[be(u.$slots,"default")]),_:3},16,["type"]))}}),fl=dl;const pl="dismissableLayer.pointerDownOutside",hl="dismissableLayer.focusOutside";function ao(e,n){const t=n.closest("[data-dismissable-layer]"),u=e.dataset.dismissableLayer===""?e:e.querySelector("[data-dismissable-layer]"),r=Array.from(e.ownerDocument.querySelectorAll("[data-dismissable-layer]"));return!!(t&&(u===t||r.indexOf(u)<r.indexOf(t)))}function bl(e,n,t=!0){const u=n?.value?.ownerDocument??globalThis?.document,r=Q(!1),o=Q(()=>{});return Dn(s=>{if(!jn||!Ln(t))return;const i=async c=>{const l=c.target;if(!(!n?.value||!l)){if(ao(n.value,l)){r.value=!1;return}if(c.target&&!r.value){let p=function(){to(pl,e,d)};const d={originalEvent:c};c.pointerType==="touch"?(u.removeEventListener("click",o.value),o.value=p,u.addEventListener("click",o.value,{once:!0})):p()}else u.removeEventListener("click",o.value);r.value=!1}},a=window.setTimeout(()=>{u.addEventListener("pointerdown",i)},0);s(()=>{window.clearTimeout(a),u.removeEventListener("pointerdown",i),u.removeEventListener("click",o.value)})}),{onPointerDownCapture:()=>{Ln(t)&&(r.value=!0)}}}function ml(e,n,t=!0){const u=n?.value?.ownerDocument??globalThis?.document,r=Q(!1);return Dn(o=>{if(!jn||!Ln(t))return;const s=async i=>{if(!n?.value)return;await An(),await An();const a=i.target;!n.value||!a||ao(n.value,a)||i.target&&!r.value&&to(hl,e,{originalEvent:i})};u.addEventListener("focusin",s),o(()=>u.removeEventListener("focusin",s))}),{onFocusCapture:()=>{Ln(t)&&(r.value=!0)},onBlurCapture:()=>{Ln(t)&&(r.value=!1)}}}const Be=hr({layersRoot:new Set,layersWithOutsidePointerEventsDisabled:new Set,originalBodyPointerEvents:void 0,branches:new Set});var gl=ae({__name:"DismissableLayer",props:{disableOutsidePointerEvents:{type:Boolean,required:!1,default:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","dismiss"],setup(e,{emit:n}){const t=e,u=n,{forwardRef:r,currentElement:o}=Ze(),s=ge(()=>o.value?.ownerDocument??globalThis.document),i=ge(()=>Be.layersRoot),a=ge(()=>o.value?Array.from(i.value).indexOf(o.value):-1),c=ge(()=>Be.layersWithOutsidePointerEventsDisabled.size>0),l=ge(()=>{const b=Array.from(i.value),[h]=[...Be.layersWithOutsidePointerEventsDisabled].slice(-1),k=b.indexOf(h);return a.value>=k}),d=bl(async b=>{const h=[...Be.branches].some(k=>k?.contains(b.target));!l.value||h||(u("pointerDownOutside",b),u("interactOutside",b),await An(),b.defaultPrevented||u("dismiss"))},o),p=ml(b=>{[...Be.branches].some(k=>k?.contains(b.target))||(u("focusOutside",b),u("interactOutside",b),b.defaultPrevented||u("dismiss"))},o);return ks("Escape",b=>{a.value===i.value.size-1&&(u("escapeKeyDown",b),b.defaultPrevented||u("dismiss"))}),Dn(b=>{o.value&&(t.disableOutsidePointerEvents&&(Be.layersWithOutsidePointerEventsDisabled.size===0&&(Be.originalBodyPointerEvents=s.value.body.style.pointerEvents,s.value.body.style.pointerEvents="none"),Be.layersWithOutsidePointerEventsDisabled.add(o.value)),i.value.add(o.value),b(()=>{t.disableOutsidePointerEvents&&Be.layersWithOutsidePointerEventsDisabled.size===1&&!Vc(Be.originalBodyPointerEvents)&&(s.value.body.style.pointerEvents=Be.originalBodyPointerEvents)}))}),Dn(b=>{b(()=>{o.value&&(i.value.delete(o.value),Be.layersWithOutsidePointerEventsDisabled.delete(o.value))})}),(b,h)=>(z(),xe(T(Mn),{ref:T(r),"as-child":b.asChild,as:b.as,"data-dismissable-layer":"",style:Vt({pointerEvents:c.value?l.value?"auto":"none":void 0}),onFocusCapture:T(p).onFocusCapture,onBlurCapture:T(p).onBlurCapture,onPointerdownCapture:T(d).onPointerDownCapture},{default:ee(()=>[be(b.$slots,"default")]),_:3},8,["as-child","as","style","onFocusCapture","onBlurCapture","onPointerdownCapture"]))}}),xl=gl;const _l=Es(()=>Q([]));function vl(){const e=_l();return{add(n){const t=e.value[0];n!==t&&t?.pause(),e.value=Yu(e.value,n),e.value.unshift(n)},remove(n){e.value=Yu(e.value,n),e.value[0]?.resume()}}}function Yu(e,n){const t=[...e],u=t.indexOf(n);return u!==-1&&t.splice(u,1),t}const It="focusScope.autoFocusOnMount",Bt="focusScope.autoFocusOnUnmount",Ju={bubbles:!1,cancelable:!0};function yl(e,{select:n=!1}={}){const t=an();for(const u of e)if(nn(u,{select:n}),an()!==t)return!0}function kl(e){const n=co(e),t=er(n,e),u=er(n.reverse(),e);return[t,u]}function co(e){const n=[],t=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:u=>{const r=u.tagName==="INPUT"&&u.type==="hidden";return u.disabled||u.hidden||r?NodeFilter.FILTER_SKIP:u.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;t.nextNode();)n.push(t.currentNode);return n}function er(e,n){for(const t of e)if(!El(t,{upTo:n}))return t}function El(e,{upTo:n}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(n!==void 0&&e===n)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function wl(e){return e instanceof HTMLInputElement&&"select"in e}function nn(e,{select:n=!1}={}){if(e&&e.focus){const t=an();e.focus({preventScroll:!0}),e!==t&&wl(e)&&n&&e.select()}}var Cl=ae({__name:"FocusScope",props:{loop:{type:Boolean,required:!1,default:!1},trapped:{type:Boolean,required:!1,default:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["mountAutoFocus","unmountAutoFocus"],setup(e,{emit:n}){const t=e,u=n,{currentRef:r,currentElement:o}=Ze(),s=Q(null),i=vl(),a=hr({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}});Dn(l=>{if(!jn)return;const d=o.value;if(!t.trapped)return;function p(v){if(a.paused||!d)return;const y=v.target;d.contains(y)?s.value=y:nn(s.value,{select:!0})}function b(v){if(a.paused||!d)return;const y=v.relatedTarget;y!==null&&(d.contains(y)||nn(s.value,{select:!0}))}function h(v){d.contains(s.value)||nn(d)}document.addEventListener("focusin",p),document.addEventListener("focusout",b);const k=new MutationObserver(h);d&&k.observe(d,{childList:!0,subtree:!0}),l(()=>{document.removeEventListener("focusin",p),document.removeEventListener("focusout",b),k.disconnect()})}),Dn(async l=>{const d=o.value;if(await An(),!d)return;i.add(a);const p=an();if(!d.contains(p)){const h=new CustomEvent(It,Ju);d.addEventListener(It,k=>u("mountAutoFocus",k)),d.dispatchEvent(h),h.defaultPrevented||(yl(co(d),{select:!0}),an()===p&&nn(d))}l(()=>{d.removeEventListener(It,v=>u("mountAutoFocus",v));const h=new CustomEvent(Bt,Ju),k=v=>{u("unmountAutoFocus",v)};d.addEventListener(Bt,k),d.dispatchEvent(h),setTimeout(()=>{h.defaultPrevented||nn(p??document.body,{select:!0}),d.removeEventListener(Bt,k),i.remove(a)},0)})});function c(l){if(!t.loop&&!t.trapped||a.paused)return;const d=l.key==="Tab"&&!l.altKey&&!l.ctrlKey&&!l.metaKey,p=an();if(d&&p){const b=l.currentTarget,[h,k]=kl(b);h&&k?!l.shiftKey&&p===k?(l.preventDefault(),t.loop&&nn(h,{select:!0})):l.shiftKey&&p===h&&(l.preventDefault(),t.loop&&nn(k,{select:!0})):p===b&&l.preventDefault()}}return(l,d)=>(z(),xe(T(Mn),{ref_key:"currentRef",ref:r,tabindex:"-1","as-child":l.asChild,as:l.as,onKeydown:c},{default:ee(()=>[be(l.$slots,"default")]),_:3},8,["as-child","as"]))}}),Al=Cl;function Dl(e){return e?"open":"closed"}var Sl=ae({__name:"DialogContentImpl",props:{forceMount:{type:Boolean,required:!1},trapFocus:{type:Boolean,required:!1},disableOutsidePointerEvents:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(e,{emit:n}){const t=e,u=n,r=ln(),{forwardRef:o,currentElement:s}=Ze();return r.titleId||=Qu(void 0,"reka-dialog-title"),r.descriptionId||=Qu(void 0,"reka-dialog-description"),br(()=>{r.contentElement=s,an()!==document.body&&(r.triggerElement.value=an())}),(i,a)=>(z(),xe(T(Al),{"as-child":"",loop:"",trapped:t.trapFocus,onMountAutoFocus:a[5]||(a[5]=c=>u("openAutoFocus",c)),onUnmountAutoFocus:a[6]||(a[6]=c=>u("closeAutoFocus",c))},{default:ee(()=>[De(T(xl),Ne({id:T(r).contentId,ref:T(o),as:i.as,"as-child":i.asChild,"disable-outside-pointer-events":i.disableOutsidePointerEvents,role:"dialog","aria-describedby":T(r).descriptionId,"aria-labelledby":T(r).titleId,"data-state":T(Dl)(T(r).open.value)},i.$attrs,{onDismiss:a[0]||(a[0]=c=>T(r).onOpenChange(!1)),onEscapeKeyDown:a[1]||(a[1]=c=>u("escapeKeyDown",c)),onFocusOutside:a[2]||(a[2]=c=>u("focusOutside",c)),onInteractOutside:a[3]||(a[3]=c=>u("interactOutside",c)),onPointerDownOutside:a[4]||(a[4]=c=>u("pointerDownOutside",c))}),{default:ee(()=>[be(i.$slots,"default")]),_:3},16,["id","as","as-child","disable-outside-pointer-events","aria-describedby","aria-labelledby","data-state"])]),_:3},8,["trapped"]))}}),lo=Sl,Fl=ae({__name:"DialogContentModal",props:{forceMount:{type:Boolean,required:!1},trapFocus:{type:Boolean,required:!1},disableOutsidePointerEvents:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(e,{emit:n}){const t=e,u=n,r=ln(),o=gt(u),{forwardRef:s,currentElement:i}=Ze();return ul(i),(a,c)=>(z(),xe(lo,Ne({...t,...T(o)},{ref:T(s),"trap-focus":T(r).open.value,"disable-outside-pointer-events":!0,onCloseAutoFocus:c[0]||(c[0]=l=>{l.defaultPrevented||(l.preventDefault(),T(r).triggerElement.value?.focus())}),onPointerDownOutside:c[1]||(c[1]=l=>{const d=l.detail.originalEvent,p=d.button===0&&d.ctrlKey===!0;(d.button===2||p)&&l.preventDefault()}),onFocusOutside:c[2]||(c[2]=l=>{l.preventDefault()})}),{default:ee(()=>[be(a.$slots,"default")]),_:3},16,["trap-focus"]))}}),Tl=Fl,Ml=ae({__name:"DialogContentNonModal",props:{forceMount:{type:Boolean,required:!1},trapFocus:{type:Boolean,required:!1},disableOutsidePointerEvents:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(e,{emit:n}){const t=e,r=gt(n);Ze();const o=ln(),s=Q(!1),i=Q(!1);return(a,c)=>(z(),xe(lo,Ne({...t,...T(r)},{"trap-focus":!1,"disable-outside-pointer-events":!1,onCloseAutoFocus:c[0]||(c[0]=l=>{l.defaultPrevented||(s.value||T(o).triggerElement.value?.focus(),l.preventDefault()),s.value=!1,i.value=!1}),onInteractOutside:c[1]||(c[1]=l=>{l.defaultPrevented||(s.value=!0,l.detail.originalEvent.type==="pointerdown"&&(i.value=!0));const d=l.target;T(o).triggerElement.value?.contains(d)&&l.preventDefault(),l.detail.originalEvent.type==="focusin"&&i.value&&l.preventDefault()})}),{default:ee(()=>[be(a.$slots,"default")]),_:3},16))}}),Ol=Ml,Nl=ae({__name:"DialogContent",props:{forceMount:{type:Boolean,required:!1},disableOutsidePointerEvents:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(e,{emit:n}){const t=e,u=n,r=ln(),o=gt(u),{forwardRef:s}=Ze();return(i,a)=>(z(),xe(T(io),{present:i.forceMount||T(r).open.value},{default:ee(()=>[T(r).modal.value?(z(),xe(Tl,Ne({key:0,ref:T(s)},{...t,...T(o),...i.$attrs}),{default:ee(()=>[be(i.$slots,"default")]),_:3},16)):(z(),xe(Ol,Ne({key:1,ref:T(s)},{...t,...T(o),...i.$attrs}),{default:ee(()=>[be(i.$slots,"default")]),_:3},16))]),_:3},8,["present"]))}}),Rl=Nl,Il=ae({__name:"DialogOverlayImpl",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(e){const n=ln();return Qc(!0),Ze(),(t,u)=>(z(),xe(T(Mn),{as:t.as,"as-child":t.asChild,"data-state":T(n).open.value?"open":"closed",style:{"pointer-events":"auto"}},{default:ee(()=>[be(t.$slots,"default")]),_:3},8,["as","as-child","data-state"]))}}),Bl=Il,Pl=ae({__name:"DialogOverlay",props:{forceMount:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(e){const n=ln(),{forwardRef:t}=Ze();return(u,r)=>T(n)?.modal.value?(z(),xe(T(io),{key:0,present:u.forceMount||T(n).open.value},{default:ee(()=>[De(Bl,Ne(u.$attrs,{ref:T(t),as:u.as,"as-child":u.asChild}),{default:ee(()=>[be(u.$slots,"default")]),_:3},16,["as","as-child"])]),_:3},8,["present"])):rn("v-if",!0)}}),Ll=Pl,zl=ae({__name:"Teleport",props:{to:{type:null,required:!1,default:"body"},disabled:{type:Boolean,required:!1},defer:{type:Boolean,required:!1},forceMount:{type:Boolean,required:!1}},setup(e){const n=Cs();return(t,u)=>T(n)||t.forceMount?(z(),xe(ws,{key:0,to:t.to,disabled:t.disabled,defer:t.defer},[be(t.$slots,"default")],8,["to","disabled","defer"])):rn("v-if",!0)}}),$l=zl,Ul=ae({__name:"DialogPortal",props:{to:{type:null,required:!1},disabled:{type:Boolean,required:!1},defer:{type:Boolean,required:!1},forceMount:{type:Boolean,required:!1}},setup(e){const n=e;return(t,u)=>(z(),xe(T($l),mr(gr(n)),{default:ee(()=>[be(t.$slots,"default")]),_:3},16))}}),ql=Ul,jl=ae({__name:"DialogTitle",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"h2"}},setup(e){const n=e,t=ln();return Ze(),(u,r)=>(z(),xe(T(Mn),Ne(n,{id:T(t).titleId}),{default:ee(()=>[be(u.$slots,"default")]),_:3},16,["id"]))}}),Hl=jl;const Gl=ae({__name:"Dialog",props:{open:{type:Boolean},defaultOpen:{type:Boolean},modal:{type:Boolean}},emits:["update:open"],setup(e,{emit:n}){const r=oo(e,n);return(o,s)=>(z(),xe(T(ll),Ne({"data-slot":"dialog"},T(r)),{default:ee(i=>[be(o.$slots,"default",mr(gr(i)))]),_:3},16))}});const Vl=e=>{for(const n in e)if(n.startsWith("aria-")||n==="role"||n==="title")return!0;return!1};const nr=e=>e==="";const Zl=(...e)=>e.filter((n,t,u)=>!!n&&n.trim()!==""&&u.indexOf(n)===t).join(" ").trim();const tr=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const Wl=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(n,t,u)=>u?u.toUpperCase():t.toLowerCase());const Kl=e=>{const n=Wl(e);return n.charAt(0).toUpperCase()+n.slice(1)};var Bn={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};const Xl=({name:e,iconNode:n,absoluteStrokeWidth:t,"absolute-stroke-width":u,strokeWidth:r,"stroke-width":o,size:s=Bn.width,color:i=Bn.stroke,...a},{slots:c})=>mn("svg",{...Bn,...a,width:s,height:s,stroke:i,"stroke-width":nr(t)||nr(u)||t===!0||u===!0?Number(r||o||Bn["stroke-width"])*24/Number(s):r||o||Bn["stroke-width"],class:Zl("lucide",a.class,...e?[`lucide-${tr(Kl(e))}-icon`,`lucide-${tr(e)}`]:["lucide-icon"]),...!c.default&&!Vl(a)&&{"aria-hidden":"true"}},[...n.map(l=>mn(...l)),...c.default?[c.default()]:[]]);const Ql=(e,n)=>(t,{slots:u,attrs:r})=>mn(Xl,{...r,...t,iconNode:n,name:e},u);const Yl=Ql("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function fo(e){var n,t,u="";if(typeof e=="string"||typeof e=="number")u+=e;else if(typeof e=="object")if(Array.isArray(e)){var r=e.length;for(n=0;n<r;n++)e[n]&&(t=fo(e[n]))&&(u&&(u+=" "),u+=t)}else for(t in e)e[t]&&(u&&(u+=" "),u+=t);return u}function po(){for(var e,n,t=0,u="",r=arguments.length;t<r;t++)(e=arguments[t])&&(n=fo(e))&&(u&&(u+=" "),u+=n);return u}const Jl=(e,n)=>{const t=new Array(e.length+n.length);for(let u=0;u<e.length;u++)t[u]=e[u];for(let u=0;u<n.length;u++)t[e.length+u]=n[u];return t},e0=(e,n)=>({classGroupId:e,validator:n}),ho=(e=new Map,n=null,t)=>({nextPart:e,validators:n,classGroupId:t}),dt="-",ur=[],n0="arbitrary..",t0=e=>{const n=r0(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:u}=e;return{getClassGroupId:s=>{if(s.startsWith("[")&&s.endsWith("]"))return u0(s);const i=s.split(dt),a=i[0]===""&&i.length>1?1:0;return bo(i,a,n)},getConflictingClassGroupIds:(s,i)=>{if(i){const a=u[s],c=t[s];return a?c?Jl(c,a):a:c||ur}return t[s]||ur}}},bo=(e,n,t)=>{if(e.length-n===0)return t.classGroupId;const r=e[n],o=t.nextPart.get(r);if(o){const c=bo(e,n+1,o);if(c)return c}const s=t.validators;if(s===null)return;const i=n===0?e.join(dt):e.slice(n).join(dt),a=s.length;for(let c=0;c<a;c++){const l=s[c];if(l.validator(i))return l.classGroupId}},u0=e=>e.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const n=e.slice(1,-1),t=n.indexOf(":"),u=n.slice(0,t);return u?n0+u:void 0})(),r0=e=>{const{theme:n,classGroups:t}=e;return o0(t,n)},o0=(e,n)=>{const t=ho();for(const u in e){const r=e[u];ou(r,t,u,n)}return t},ou=(e,n,t,u)=>{const r=e.length;for(let o=0;o<r;o++){const s=e[o];s0(s,n,t,u)}},s0=(e,n,t,u)=>{if(typeof e=="string"){i0(e,n,t);return}if(typeof e=="function"){a0(e,n,t,u);return}c0(e,n,t,u)},i0=(e,n,t)=>{const u=e===""?n:mo(n,e);u.classGroupId=t},a0=(e,n,t,u)=>{if(l0(e)){ou(e(u),n,t,u);return}n.validators===null&&(n.validators=[]),n.validators.push(e0(t,e))},c0=(e,n,t,u)=>{const r=Object.entries(e),o=r.length;for(let s=0;s<o;s++){const[i,a]=r[s];ou(a,mo(n,i),t,u)}},mo=(e,n)=>{let t=e;const u=n.split(dt),r=u.length;for(let o=0;o<r;o++){const s=u[o];let i=t.nextPart.get(s);i||(i=ho(),t.nextPart.set(s,i)),t=i}return t},l0=e=>"isThemeGetter"in e&&e.isThemeGetter===!0,d0=e=>{if(e<1)return{get:()=>{},set:()=>{}};let n=0,t=Object.create(null),u=Object.create(null);const r=(o,s)=>{t[o]=s,n++,n>e&&(n=0,u=t,t=Object.create(null))};return{get(o){let s=t[o];if(s!==void 0)return s;if((s=u[o])!==void 0)return r(o,s),s},set(o,s){o in t?t[o]=s:r(o,s)}}},Ht="!",rr=":",f0=[],or=(e,n,t,u,r)=>({modifiers:e,hasImportantModifier:n,baseClassName:t,maybePostfixModifierPosition:u,isExternal:r}),p0=e=>{const{prefix:n,experimentalParseClassName:t}=e;let u=r=>{const o=[];let s=0,i=0,a=0,c;const l=r.length;for(let k=0;k<l;k++){const v=r[k];if(s===0&&i===0){if(v===rr){o.push(r.slice(a,k)),a=k+1;continue}if(v==="/"){c=k;continue}}v==="["?s++:v==="]"?s--:v==="("?i++:v===")"&&i--}const d=o.length===0?r:r.slice(a);let p=d,b=!1;d.endsWith(Ht)?(p=d.slice(0,-1),b=!0):d.startsWith(Ht)&&(p=d.slice(1),b=!0);const h=c&&c>a?c-a:void 0;return or(o,b,p,h)};if(n){const r=n+rr,o=u;u=s=>s.startsWith(r)?o(s.slice(r.length)):or(f0,!1,s,void 0,!0)}if(t){const r=u;u=o=>t({className:o,parseClassName:r})}return u},h0=e=>{const n=new Map;return e.orderSensitiveModifiers.forEach((t,u)=>{n.set(t,1e6+u)}),t=>{const u=[];let r=[];for(let o=0;o<t.length;o++){const s=t[o],i=s[0]==="[",a=n.has(s);i||a?(r.length>0&&(r.sort(),u.push(...r),r=[]),u.push(s)):r.push(s)}return r.length>0&&(r.sort(),u.push(...r)),u}},b0=e=>({cache:d0(e.cacheSize),parseClassName:p0(e),sortModifiers:h0(e),...t0(e)}),m0=/\s+/,g0=(e,n)=>{const{parseClassName:t,getClassGroupId:u,getConflictingClassGroupIds:r,sortModifiers:o}=n,s=[],i=e.trim().split(m0);let a="";for(let c=i.length-1;c>=0;c-=1){const l=i[c],{isExternal:d,modifiers:p,hasImportantModifier:b,baseClassName:h,maybePostfixModifierPosition:k}=t(l);if(d){a=l+(a.length>0?" "+a:a);continue}let v=!!k,y=u(v?h.substring(0,k):h);if(!y){if(!v){a=l+(a.length>0?" "+a:a);continue}if(y=u(h),!y){a=l+(a.length>0?" "+a:a);continue}v=!1}const g=p.length===0?"":p.length===1?p[0]:o(p).join(":"),x=b?g+Ht:g,E=x+y;if(s.indexOf(E)>-1)continue;s.push(E);const D=r(y,v);for(let I=0;I<D.length;++I){const K=D[I];s.push(x+K)}a=l+(a.length>0?" "+a:a)}return a},x0=(...e)=>{let n=0,t,u,r="";for(;n<e.length;)(t=e[n++])&&(u=go(t))&&(r&&(r+=" "),r+=u);return r},go=e=>{if(typeof e=="string")return e;let n,t="";for(let u=0;u<e.length;u++)e[u]&&(n=go(e[u]))&&(t&&(t+=" "),t+=n);return t},_0=(e,...n)=>{let t,u,r,o;const s=a=>{const c=n.reduce((l,d)=>d(l),e());return t=b0(c),u=t.cache.get,r=t.cache.set,o=i,i(a)},i=a=>{const c=u(a);if(c)return c;const l=g0(a,t);return r(a,l),l};return o=s,(...a)=>o(x0(...a))},v0=[],ve=e=>{const n=t=>t[e]||v0;return n.isThemeGetter=!0,n},xo=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,_o=/^\((?:(\w[\w-]*):)?(.+)\)$/i,y0=/^\d+\/\d+$/,k0=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,E0=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,w0=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,C0=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,A0=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,wn=e=>y0.test(e),G=e=>!!e&&!Number.isNaN(Number(e)),en=e=>!!e&&Number.isInteger(Number(e)),Pt=e=>e.endsWith("%")&&G(e.slice(0,-1)),Qe=e=>k0.test(e),D0=()=>!0,S0=e=>E0.test(e)&&!w0.test(e),vo=()=>!1,F0=e=>C0.test(e),T0=e=>A0.test(e),M0=e=>!O(e)&&!N(e),O0=e=>On(e,Eo,vo),O=e=>xo.test(e),bn=e=>On(e,wo,S0),Lt=e=>On(e,P0,G),sr=e=>On(e,yo,vo),N0=e=>On(e,ko,T0),ot=e=>On(e,Co,F0),N=e=>_o.test(e),Pn=e=>Nn(e,wo),R0=e=>Nn(e,L0),ir=e=>Nn(e,yo),I0=e=>Nn(e,Eo),B0=e=>Nn(e,ko),st=e=>Nn(e,Co,!0),On=(e,n,t)=>{const u=xo.exec(e);return u?u[1]?n(u[1]):t(u[2]):!1},Nn=(e,n,t=!1)=>{const u=_o.exec(e);return u?u[1]?n(u[1]):t:!1},yo=e=>e==="position"||e==="percentage",ko=e=>e==="image"||e==="url",Eo=e=>e==="length"||e==="size"||e==="bg-size",wo=e=>e==="length",P0=e=>e==="number",L0=e=>e==="family-name",Co=e=>e==="shadow",z0=()=>{const e=ve("color"),n=ve("font"),t=ve("text"),u=ve("font-weight"),r=ve("tracking"),o=ve("leading"),s=ve("breakpoint"),i=ve("container"),a=ve("spacing"),c=ve("radius"),l=ve("shadow"),d=ve("inset-shadow"),p=ve("text-shadow"),b=ve("drop-shadow"),h=ve("blur"),k=ve("perspective"),v=ve("aspect"),y=ve("ease"),g=ve("animate"),x=()=>["auto","avoid","all","avoid-page","page","left","right","column"],E=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],D=()=>[...E(),N,O],I=()=>["auto","hidden","clip","visible","scroll"],K=()=>["auto","contain","none"],F=()=>[N,O,a],Z=()=>[wn,"full","auto",...F()],de=()=>[en,"none","subgrid",N,O],fe=()=>["auto",{span:["full",en,N,O]},en,N,O],Ce=()=>[en,"auto",N,O],Fe=()=>["auto","min","max","fr",N,O],le=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],ne=()=>["start","end","center","stretch","center-safe","end-safe"],ce=()=>["auto",...F()],Se=()=>[wn,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...F()],m=()=>[e,N,O],w=()=>[...E(),ir,sr,{position:[N,O]}],R=()=>["no-repeat",{repeat:["","x","y","space","round"]}],W=()=>["auto","cover","contain",I0,O0,{size:[N,O]}],Y=()=>[Pt,Pn,bn],j=()=>["","none","full",c,N,O],re=()=>["",G,Pn,bn],Te=()=>["solid","dashed","dotted","double"],Ie=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],J=()=>[G,Pt,ir,sr],We=()=>["","none",h,N,O],dn=()=>["none",G,N,O],Ke=()=>["none",G,N,O],Rn=()=>[G,N,O],_n=()=>[wn,"full",...F()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Qe],breakpoint:[Qe],color:[D0],container:[Qe],"drop-shadow":[Qe],ease:["in","out","in-out"],font:[M0],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Qe],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Qe],shadow:[Qe],spacing:["px",G],text:[Qe],"text-shadow":[Qe],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",wn,O,N,v]}],container:["container"],columns:[{columns:[G,O,N,i]}],"break-after":[{"break-after":x()}],"break-before":[{"break-before":x()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:D()}],overflow:[{overflow:I()}],"overflow-x":[{"overflow-x":I()}],"overflow-y":[{"overflow-y":I()}],overscroll:[{overscroll:K()}],"overscroll-x":[{"overscroll-x":K()}],"overscroll-y":[{"overscroll-y":K()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:Z()}],"inset-x":[{"inset-x":Z()}],"inset-y":[{"inset-y":Z()}],start:[{start:Z()}],end:[{end:Z()}],top:[{top:Z()}],right:[{right:Z()}],bottom:[{bottom:Z()}],left:[{left:Z()}],visibility:["visible","invisible","collapse"],z:[{z:[en,"auto",N,O]}],basis:[{basis:[wn,"full","auto",i,...F()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[G,wn,"auto","initial","none",O]}],grow:[{grow:["",G,N,O]}],shrink:[{shrink:["",G,N,O]}],order:[{order:[en,"first","last","none",N,O]}],"grid-cols":[{"grid-cols":de()}],"col-start-end":[{col:fe()}],"col-start":[{"col-start":Ce()}],"col-end":[{"col-end":Ce()}],"grid-rows":[{"grid-rows":de()}],"row-start-end":[{row:fe()}],"row-start":[{"row-start":Ce()}],"row-end":[{"row-end":Ce()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":Fe()}],"auto-rows":[{"auto-rows":Fe()}],gap:[{gap:F()}],"gap-x":[{"gap-x":F()}],"gap-y":[{"gap-y":F()}],"justify-content":[{justify:[...le(),"normal"]}],"justify-items":[{"justify-items":[...ne(),"normal"]}],"justify-self":[{"justify-self":["auto",...ne()]}],"align-content":[{content:["normal",...le()]}],"align-items":[{items:[...ne(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...ne(),{baseline:["","last"]}]}],"place-content":[{"place-content":le()}],"place-items":[{"place-items":[...ne(),"baseline"]}],"place-self":[{"place-self":["auto",...ne()]}],p:[{p:F()}],px:[{px:F()}],py:[{py:F()}],ps:[{ps:F()}],pe:[{pe:F()}],pt:[{pt:F()}],pr:[{pr:F()}],pb:[{pb:F()}],pl:[{pl:F()}],m:[{m:ce()}],mx:[{mx:ce()}],my:[{my:ce()}],ms:[{ms:ce()}],me:[{me:ce()}],mt:[{mt:ce()}],mr:[{mr:ce()}],mb:[{mb:ce()}],ml:[{ml:ce()}],"space-x":[{"space-x":F()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":F()}],"space-y-reverse":["space-y-reverse"],size:[{size:Se()}],w:[{w:[i,"screen",...Se()]}],"min-w":[{"min-w":[i,"screen","none",...Se()]}],"max-w":[{"max-w":[i,"screen","none","prose",{screen:[s]},...Se()]}],h:[{h:["screen","lh",...Se()]}],"min-h":[{"min-h":["screen","lh","none",...Se()]}],"max-h":[{"max-h":["screen","lh",...Se()]}],"font-size":[{text:["base",t,Pn,bn]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[u,N,Lt]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Pt,O]}],"font-family":[{font:[R0,O,n]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[r,N,O]}],"line-clamp":[{"line-clamp":[G,"none",N,Lt]}],leading:[{leading:[o,...F()]}],"list-image":[{"list-image":["none",N,O]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",N,O]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:m()}],"text-color":[{text:m()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...Te(),"wavy"]}],"text-decoration-thickness":[{decoration:[G,"from-font","auto",N,bn]}],"text-decoration-color":[{decoration:m()}],"underline-offset":[{"underline-offset":[G,"auto",N,O]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:F()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",N,O]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",N,O]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:w()}],"bg-repeat":[{bg:R()}],"bg-size":[{bg:W()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},en,N,O],radial:["",N,O],conic:[en,N,O]},B0,N0]}],"bg-color":[{bg:m()}],"gradient-from-pos":[{from:Y()}],"gradient-via-pos":[{via:Y()}],"gradient-to-pos":[{to:Y()}],"gradient-from":[{from:m()}],"gradient-via":[{via:m()}],"gradient-to":[{to:m()}],rounded:[{rounded:j()}],"rounded-s":[{"rounded-s":j()}],"rounded-e":[{"rounded-e":j()}],"rounded-t":[{"rounded-t":j()}],"rounded-r":[{"rounded-r":j()}],"rounded-b":[{"rounded-b":j()}],"rounded-l":[{"rounded-l":j()}],"rounded-ss":[{"rounded-ss":j()}],"rounded-se":[{"rounded-se":j()}],"rounded-ee":[{"rounded-ee":j()}],"rounded-es":[{"rounded-es":j()}],"rounded-tl":[{"rounded-tl":j()}],"rounded-tr":[{"rounded-tr":j()}],"rounded-br":[{"rounded-br":j()}],"rounded-bl":[{"rounded-bl":j()}],"border-w":[{border:re()}],"border-w-x":[{"border-x":re()}],"border-w-y":[{"border-y":re()}],"border-w-s":[{"border-s":re()}],"border-w-e":[{"border-e":re()}],"border-w-t":[{"border-t":re()}],"border-w-r":[{"border-r":re()}],"border-w-b":[{"border-b":re()}],"border-w-l":[{"border-l":re()}],"divide-x":[{"divide-x":re()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":re()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...Te(),"hidden","none"]}],"divide-style":[{divide:[...Te(),"hidden","none"]}],"border-color":[{border:m()}],"border-color-x":[{"border-x":m()}],"border-color-y":[{"border-y":m()}],"border-color-s":[{"border-s":m()}],"border-color-e":[{"border-e":m()}],"border-color-t":[{"border-t":m()}],"border-color-r":[{"border-r":m()}],"border-color-b":[{"border-b":m()}],"border-color-l":[{"border-l":m()}],"divide-color":[{divide:m()}],"outline-style":[{outline:[...Te(),"none","hidden"]}],"outline-offset":[{"outline-offset":[G,N,O]}],"outline-w":[{outline:["",G,Pn,bn]}],"outline-color":[{outline:m()}],shadow:[{shadow:["","none",l,st,ot]}],"shadow-color":[{shadow:m()}],"inset-shadow":[{"inset-shadow":["none",d,st,ot]}],"inset-shadow-color":[{"inset-shadow":m()}],"ring-w":[{ring:re()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:m()}],"ring-offset-w":[{"ring-offset":[G,bn]}],"ring-offset-color":[{"ring-offset":m()}],"inset-ring-w":[{"inset-ring":re()}],"inset-ring-color":[{"inset-ring":m()}],"text-shadow":[{"text-shadow":["none",p,st,ot]}],"text-shadow-color":[{"text-shadow":m()}],opacity:[{opacity:[G,N,O]}],"mix-blend":[{"mix-blend":[...Ie(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":Ie()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[G]}],"mask-image-linear-from-pos":[{"mask-linear-from":J()}],"mask-image-linear-to-pos":[{"mask-linear-to":J()}],"mask-image-linear-from-color":[{"mask-linear-from":m()}],"mask-image-linear-to-color":[{"mask-linear-to":m()}],"mask-image-t-from-pos":[{"mask-t-from":J()}],"mask-image-t-to-pos":[{"mask-t-to":J()}],"mask-image-t-from-color":[{"mask-t-from":m()}],"mask-image-t-to-color":[{"mask-t-to":m()}],"mask-image-r-from-pos":[{"mask-r-from":J()}],"mask-image-r-to-pos":[{"mask-r-to":J()}],"mask-image-r-from-color":[{"mask-r-from":m()}],"mask-image-r-to-color":[{"mask-r-to":m()}],"mask-image-b-from-pos":[{"mask-b-from":J()}],"mask-image-b-to-pos":[{"mask-b-to":J()}],"mask-image-b-from-color":[{"mask-b-from":m()}],"mask-image-b-to-color":[{"mask-b-to":m()}],"mask-image-l-from-pos":[{"mask-l-from":J()}],"mask-image-l-to-pos":[{"mask-l-to":J()}],"mask-image-l-from-color":[{"mask-l-from":m()}],"mask-image-l-to-color":[{"mask-l-to":m()}],"mask-image-x-from-pos":[{"mask-x-from":J()}],"mask-image-x-to-pos":[{"mask-x-to":J()}],"mask-image-x-from-color":[{"mask-x-from":m()}],"mask-image-x-to-color":[{"mask-x-to":m()}],"mask-image-y-from-pos":[{"mask-y-from":J()}],"mask-image-y-to-pos":[{"mask-y-to":J()}],"mask-image-y-from-color":[{"mask-y-from":m()}],"mask-image-y-to-color":[{"mask-y-to":m()}],"mask-image-radial":[{"mask-radial":[N,O]}],"mask-image-radial-from-pos":[{"mask-radial-from":J()}],"mask-image-radial-to-pos":[{"mask-radial-to":J()}],"mask-image-radial-from-color":[{"mask-radial-from":m()}],"mask-image-radial-to-color":[{"mask-radial-to":m()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":E()}],"mask-image-conic-pos":[{"mask-conic":[G]}],"mask-image-conic-from-pos":[{"mask-conic-from":J()}],"mask-image-conic-to-pos":[{"mask-conic-to":J()}],"mask-image-conic-from-color":[{"mask-conic-from":m()}],"mask-image-conic-to-color":[{"mask-conic-to":m()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:w()}],"mask-repeat":[{mask:R()}],"mask-size":[{mask:W()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",N,O]}],filter:[{filter:["","none",N,O]}],blur:[{blur:We()}],brightness:[{brightness:[G,N,O]}],contrast:[{contrast:[G,N,O]}],"drop-shadow":[{"drop-shadow":["","none",b,st,ot]}],"drop-shadow-color":[{"drop-shadow":m()}],grayscale:[{grayscale:["",G,N,O]}],"hue-rotate":[{"hue-rotate":[G,N,O]}],invert:[{invert:["",G,N,O]}],saturate:[{saturate:[G,N,O]}],sepia:[{sepia:["",G,N,O]}],"backdrop-filter":[{"backdrop-filter":["","none",N,O]}],"backdrop-blur":[{"backdrop-blur":We()}],"backdrop-brightness":[{"backdrop-brightness":[G,N,O]}],"backdrop-contrast":[{"backdrop-contrast":[G,N,O]}],"backdrop-grayscale":[{"backdrop-grayscale":["",G,N,O]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[G,N,O]}],"backdrop-invert":[{"backdrop-invert":["",G,N,O]}],"backdrop-opacity":[{"backdrop-opacity":[G,N,O]}],"backdrop-saturate":[{"backdrop-saturate":[G,N,O]}],"backdrop-sepia":[{"backdrop-sepia":["",G,N,O]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":F()}],"border-spacing-x":[{"border-spacing-x":F()}],"border-spacing-y":[{"border-spacing-y":F()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",N,O]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[G,"initial",N,O]}],ease:[{ease:["linear","initial",y,N,O]}],delay:[{delay:[G,N,O]}],animate:[{animate:["none",g,N,O]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[k,N,O]}],"perspective-origin":[{"perspective-origin":D()}],rotate:[{rotate:dn()}],"rotate-x":[{"rotate-x":dn()}],"rotate-y":[{"rotate-y":dn()}],"rotate-z":[{"rotate-z":dn()}],scale:[{scale:Ke()}],"scale-x":[{"scale-x":Ke()}],"scale-y":[{"scale-y":Ke()}],"scale-z":[{"scale-z":Ke()}],"scale-3d":["scale-3d"],skew:[{skew:Rn()}],"skew-x":[{"skew-x":Rn()}],"skew-y":[{"skew-y":Rn()}],transform:[{transform:[N,O,"","none","gpu","cpu"]}],"transform-origin":[{origin:D()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:_n()}],"translate-x":[{"translate-x":_n()}],"translate-y":[{"translate-y":_n()}],"translate-z":[{"translate-z":_n()}],"translate-none":["translate-none"],accent:[{accent:m()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:m()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",N,O]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":F()}],"scroll-mx":[{"scroll-mx":F()}],"scroll-my":[{"scroll-my":F()}],"scroll-ms":[{"scroll-ms":F()}],"scroll-me":[{"scroll-me":F()}],"scroll-mt":[{"scroll-mt":F()}],"scroll-mr":[{"scroll-mr":F()}],"scroll-mb":[{"scroll-mb":F()}],"scroll-ml":[{"scroll-ml":F()}],"scroll-p":[{"scroll-p":F()}],"scroll-px":[{"scroll-px":F()}],"scroll-py":[{"scroll-py":F()}],"scroll-ps":[{"scroll-ps":F()}],"scroll-pe":[{"scroll-pe":F()}],"scroll-pt":[{"scroll-pt":F()}],"scroll-pr":[{"scroll-pr":F()}],"scroll-pb":[{"scroll-pb":F()}],"scroll-pl":[{"scroll-pl":F()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",N,O]}],fill:[{fill:["none",...m()]}],"stroke-w":[{stroke:[G,Pn,bn,Lt]}],stroke:[{stroke:["none",...m()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},$0=_0(z0);function xn(...e){return $0(po(e))}const U0=ae({__name:"DialogOverlay",props:{forceMount:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},setup(e){const n=e,t=Kt(n,"class");return(u,r)=>(z(),xe(T(Ll),Ne({"data-slot":"dialog-overlay"},T(t),{class:T(xn)("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",n.class)}),{default:ee(()=>[be(u.$slots,"default")]),_:3},16,["class"]))}}),q0=ae({inheritAttrs:!1,__name:"DialogContent",props:{forceMount:{type:Boolean},disableOutsidePointerEvents:{type:Boolean},asChild:{type:Boolean},as:{},class:{},showCloseButton:{type:Boolean,default:!0}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(e,{emit:n}){const t=e,u=n,r=Kt(t,"class"),o=oo(r,u);return(s,i)=>(z(),xe(T(ql),null,{default:ee(()=>[De(U0),De(T(Rl),Ne({"data-slot":"dialog-content"},{...s.$attrs,...T(o)},{class:T(xn)("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",t.class)}),{default:ee(()=>[be(s.$slots,"default"),e.showCloseButton?(z(),xe(T(fl),{key:0,"data-slot":"dialog-close",class:"ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"},{default:ee(()=>[De(T(Yl)),i[0]||(i[0]=V("span",{class:"sr-only"},"Close",-1))]),_:1})):rn("",!0)]),_:3},16,["class"])]),_:3}))}}),j0=ae({__name:"DialogHeader",props:{class:{}},setup(e){const n=e;return(t,u)=>(z(),ue("div",{"data-slot":"dialog-header",class:gn(T(xn)("flex flex-col gap-2 text-center sm:text-left",n.class))},[be(t.$slots,"default")],2))}}),H0=ae({__name:"DialogTitle",props:{asChild:{type:Boolean},as:{},class:{}},setup(e){const n=e,t=Kt(n,"class"),u=ro(t);return(r,o)=>(z(),xe(T(Hl),Ne({"data-slot":"dialog-title"},T(u),{class:T(xn)("text-lg leading-none font-semibold",n.class)}),{default:ee(()=>[be(r.$slots,"default")]),_:3},16,["class"]))}}),G0=ae({__name:"DialogFooter",props:{class:{}},setup(e){const n=e;return(t,u)=>(z(),ue("div",{"data-slot":"dialog-footer",class:gn(T(xn)("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",n.class))},[be(t.$slots,"default")],2))}}),ar=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,cr=po,V0=(e,n)=>t=>{var u;if(n?.variants==null)return cr(e,t?.class,t?.className);const{variants:r,defaultVariants:o}=n,s=Object.keys(r).map(c=>{const l=t?.[c],d=o?.[c];if(l===null)return null;const p=ar(l)||ar(d);return r[c][p]}),i=t&&Object.entries(t).reduce((c,l)=>{let[d,p]=l;return p===void 0||(c[d]=p),c},{}),a=n==null||(u=n.compoundVariants)===null||u===void 0?void 0:u.reduce((c,l)=>{let{class:d,className:p,...b}=l;return Object.entries(b).every(h=>{let[k,v]=h;return Array.isArray(v)?v.includes({...o,...i}[k]):{...o,...i}[k]===v})?[...c,d,p]:c},[]);return cr(e,s,a,t?.class,t?.className)},Z0=V0("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-white hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9","icon-sm":"size-8","icon-lg":"size-10"}},defaultVariants:{variant:"default",size:"default"}}),zt=ae({__name:"Button",props:{variant:{},size:{},class:{},asChild:{type:Boolean},as:{default:"button"}},setup(e){const n=e;return(t,u)=>(z(),xe(T(Mn),{as:e.as,"as-child":e.asChild,class:gn(T(xn)(T(Z0)({variant:e.variant,size:e.size}),n.class))},{default:ee(()=>[be(t.$slots,"default")]),_:3},8,["as","as-child","class"]))}}),W0=ae({__name:"Input",props:{defaultValue:{},modelValue:{},class:{}},emits:["update:modelValue"],setup(e,{emit:n}){const t=e,r=pr(t,"modelValue",n,{passive:!0,defaultValue:t.defaultValue});return(o,s)=>xr((z(),ue("input",{"onUpdate:modelValue":s[0]||(s[0]=i=>As(r)?r.value=i:null),class:gn(T(xn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",t.class))},null,2)),[[_r,T(r)]])}}),K0={class:"min-h-screen relative",style:{backgroundColor:"var(--color-white)"}},X0={class:"py-24"},Q0={class:"relative"},Y0={class:"flex gap-6 px-4"},J0={class:"py-4"},ed={key:0,class:"mt-2 text-sm text-destructive"},nd={class:"w-80 flex-shrink-0 sticky top-24 self-start"},td={class:"rounded-xl overflow-hidden max-h-[calc(80vh)] flex flex-col shadow-sm",style:{backgroundColor:"var(--color-bg-muted)",border:"1px solid var(--color-border)"}},ud={class:"p-4 sticky top-0 z-10",style:{borderBottom:"1px solid var(--color-border)",backgroundColor:"var(--color-white)"}},rd={key:0,class:"text-2xl font-bold mb-2",style:{color:"var(--color-text-heading)"}},od={key:1,class:"text-xl font-bold mb-1",style:{color:"var(--color-text-heading)"}},sd={key:2,class:"text-sm",style:{color:"var(--color-text-muted)"}},id={key:3,class:"text-xs font-medium",style:{color:"var(--color-primary)"}},ad={class:"p-4",style:{borderBottom:"1px solid var(--color-border)"}},cd={class:"flex-1 overflow-y-auto p-2"},ld={class:"flex-1 pr-80 pt-8"},dd={key:0,class:"mb-6 top-20 z-10",style:{backgroundColor:"var(--color-white)"}},fd={class:"text-2xl font-bold mb-2",style:{color:"var(--color-text-heading)"}},pd={class:"text-sm font-medium",style:{color:"var(--color-primary)"}},hd={key:1,class:"flex items-center justify-center py-20"},bd={key:2,class:"flex items-center justify-center py-20"},md={key:3},gd={key:0,class:"prose max-w-none py-12 flex flex-col items-center justify-center text-center"},xd=["innerHTML"],_d={class:"mt-12 flex justify-between gap-6"},vd={key:0,class:"flex-1"},yd={class:"flex items-center gap-2 mb-2"},kd={xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 group-hover:-translate-x-1 transition-transform duration-300",style:{color:"var(--color-primary)"},fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},Ed={class:"text-base font-bold transition-colors duration-300",style:{color:"var(--color-text-heading)","&:hover":{color:"var(--color-primary)"}}},wd={key:1,class:"flex-1"},Cd={key:2,class:"flex-1"},Ad={class:"flex items-center gap-2 mb-2"},Dd={xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 group-hover:translate-x-1 transition-transform duration-300",style:{color:"var(--color-primary)"},fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},Sd={class:"text-base font-bold transition-colors duration-300",style:{color:"var(--color-text-heading)","&:hover":{color:"var(--color-primary)"}}},Fd={key:3,class:"flex-1"},Td={class:"rounded-lg h-full flex flex-col shadow-md",style:{backgroundColor:"var(--color-white)",border:"1px solid var(--color-border)"}},Md={class:"p-4 flex justify-between items-center",style:{borderBottom:"1px solid var(--color-border)"}},Od={key:0,class:"p-4 space-y-1 flex-1 overflow-y-auto"},Nd=["onClick"],Id=ae({__name:"KnowledgePage",setup(e){const n=Q(!1),t=Q(""),u=Q(""),r=Q(!1),o=Q(null),s=Q(!1);hn.registerLanguage("javascript",Cc),hn.registerLanguage("typescript",Dc),hn.registerLanguage("bash",Sc),hn.registerLanguage("css",Pc),hn.registerLanguage("html",Lc);const i=new Pe({html:!0,linkify:!0,typographer:!0,breaks:!0,xhtmlOut:!0,langPrefix:"language-",highlight:function(m,w){if(w&&hn.getLanguage(w))try{return`<pre class="hljs" data-language="${w}"><code>${hn.highlight(m,{language:w}).value}</code></pre>`}catch{}return`<pre class="hljs" data-language="plaintext"><code>${i.utils.escapeHtml(m)}</code></pre>`}});i.use(function(m){m.core.ruler.before("inline","tasklist",function(w){let R=null;w.tokens.forEach(function(W,Y){if(W.type==="list_open")R=W;else if(W.type==="list_item_open"&&R){const j=w.tokens[Y+1];if(j&&j.type==="inline"){const re=j.content;re.match(/^\[([ x])\]/)&&(W.attrSet("class","task-list-item"),R.attrSet("class","task-list"),j.content=re.replace(/^\[([ x])\]/,function(Te,Ie){return`<input type="checkbox" ${Ie==="x"?"checked":""} disabled>`}))}}else W.type==="list_close"&&(R=null)})})}),Ms();const a=Os(),c=Q(""),l=Q(new Set),d=Q(null),p=Q(!1),b=Q(!1),h=Q(!1),{fileTree:k,currentFile:v,currentContent:y,isLoaded:g,currentFilePath:x}=Ds(a),E=ge(()=>x.value?a.getPreviousFile(x.value):null),D=ge(()=>x.value?a.getNextFile(x.value):null),I=ge(()=>v.value?v.value.path.replace(/^\/docs\//,""):""),K=ge(()=>{if(!y.value)return[];const m=[],w=y.value,R=/```[\s\S]*?```/g,W=[];let Y;for(;(Y=R.exec(w))!==null;)W.push([Y.index,Y.index+Y[0].length]);const j=/^(#{1,3})\s+(.+)$/gm;let re;for(;(re=j.exec(w))!==null;){const Te=re.index;if(!W.some(([J,We])=>Te>=J&&Te<We)){const J=re[1].length,We=re[2].trim(),dn=We.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"");m.push({id:dn,text:We,level:J})}}return m});function F(m){const w=/^---\n([\s\S]*?)\n---\n/,R=m.match(w);if(!R)return{header:null,content:m};const W=R[1],Y=m.replace(R[0],""),j={};return W.split(`
`).forEach(re=>{const Te=re.match(/^\s*(\w+):\s*(.+)$/);if(Te){const Ie=Te[1],J=Te[2];Ie==="author"?j.author=J:Ie==="date"?j.date=J:Ie==="password"?j.password=J:Ie==="display"&&(j.display=J==="true")}}),{header:j,content:Y}}const Z=ge(()=>y.value?F(y.value):{header:null,content:""});sn(x,()=>{r.value=!1,o.value=null,s.value=!1,n.value=!1}),sn(Z,m=>{o.value=m.header,s.value=!!m.header?.password,m.header?.password&&!r.value&&(n.value=!0)},{deep:!0});function de(){o.value?.password&&(t.value===o.value.password?(r.value=!0,n.value=!1,u.value=""):u.value="密码错误，请重试")}const fe=ge(()=>{if(!y.value)return"";const{header:m,content:w}=Z.value;if(m?.password&&!r.value)return"";let R=i.render(w);return R=R.replace(/<h([1-6])>(.+?)<\/h[1-6]>/g,(W,Y,j)=>{const re=j.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"");return`<h${Y} id="${re}">${j}</h${Y}>`}),R}),Ce=ge(()=>c.value.trim()?a.searchFiles(c.value):k.value);function Fe(m){const w=document.getElementById(m);if(w){const j=w.getBoundingClientRect().top+window.pageYOffset-105;window.scrollTo({top:j,behavior:"smooth"})}}async function le(m){if(m.type==="folder")l.value.has(m.path)?l.value.delete(m.path):l.value.add(m.path);else{const w=m.path.split("/").filter(Boolean);let R="";for(let W=0;W<w.length-1;W++)R===""?R=w[W]:R+="/"+w[W],l.value.add(R);await a.selectFile(m.path),d.value&&(d.value.scrollTop=0),window.scrollTo({top:0,behavior:"smooth"})}}function ne(){if(!d.value)return;const m=d.value.scrollTop,w=d.value.scrollHeight,R=d.value.clientHeight,W=m/(w-R)*100;window.dispatchEvent(new CustomEvent("scrollProgress",{detail:{progress:W}}))}function ce(){b.value=window.pageYOffset>window.innerHeight,h.value=window.pageYOffset>100}function Se(){window.scrollTo({top:0,behavior:"smooth"})}return sn(x,m=>{if(m){const w=m.split("/").filter(Boolean);let R="";w.forEach((W,Y)=>{Y<w.length-1&&(R+="/"+w[Y],l.value.add(R))})}}),br(async()=>{if(await a.loadKnowledgeBase(),k.value.length>0){const m=k.value[0];m.type==="folder"&&l.value.add(m.path)}if(y.value){const{header:m}=F(y.value);o.value=m,s.value=!!m?.password}d.value&&d.value.addEventListener("scroll",ne),window.addEventListener("scroll",ce)}),Wt(()=>{d.value&&d.value.removeEventListener("scroll",ne),window.removeEventListener("scroll",ce)}),Ss(()=>{if(y.value){const{header:m}=F(y.value);o.value=m,s.value=!!m?.password}}),(m,w)=>(z(),ue("div",K0,[V("div",X0,[V("div",Q0,[V("div",Y0,[De(Gl,{open:n.value,"onUpdate:open":w[2]||(w[2]=R=>n.value=R)},{default:ee(()=>[De(q0,null,{default:ee(()=>[De(j0,null,{default:ee(()=>[De(H0,null,{default:ee(()=>[...w[8]||(w[8]=[Jn("文档需要密码",-1)])]),_:1})]),_:1}),V("div",J0,[w[9]||(w[9]=V("p",{class:"mb-4 text-sm text-muted-foreground"},"该文档已设置密码保护，请输入密码查看内容",-1)),De(W0,{modelValue:t.value,"onUpdate:modelValue":w[0]||(w[0]=R=>t.value=R),type:"password",placeholder:"请输入密码",onKeyup:Ts(de,["enter"])},null,8,["modelValue"]),u.value?(z(),ue("p",ed,ze(u.value),1)):rn("",!0)]),De(G0,null,{default:ee(()=>[De(zt,{variant:"outline",onClick:w[1]||(w[1]=R=>n.value=!1)},{default:ee(()=>[...w[10]||(w[10]=[Jn("取消",-1)])]),_:1}),De(zt,{onClick:de},{default:ee(()=>[...w[11]||(w[11]=[Jn("确认",-1)])]),_:1})]),_:1})]),_:1})]),_:1},8,["open"]),V("div",nd,[V("div",td,[V("div",ud,[!h.value||!T(v)?(z(),ue("h1",rd," 知识库 ")):(z(),ue("h1",od,ze(T(v).displayName),1)),!h.value||!T(v)?(z(),ue("p",sd," 探索技术文档和学习笔记 ")):(z(),ue("p",id,ze(I.value),1))]),V("div",ad,[xr(V("input",{"onUpdate:modelValue":w[3]||(w[3]=R=>c.value=R),type:"text",placeholder:"搜索文档...",class:"w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 transition-all duration-300",style:{backgroundColor:"var(--color-white)",border:"1px solid var(--color-border)",color:"var(--color-text-heading)",placeholderColor:"var(--color-text-muted)","&:focus":{ringColor:"var(--color-primary)",ringWidth:"2px"}}},null,512),[[_r,c.value]])]),V("div",cd,[De(Gc,{nodes:Ce.value,"current-file":T(v),"expanded-folders":l.value,onSelect:le},null,8,["nodes","current-file","expanded-folders"])])])]),V("div",ld,[T(v)&&!h.value?(z(),ue("div",dd,[V("h2",fd,ze(T(v).displayName),1),V("p",pd,ze(I.value),1)])):rn("",!0),T(g)?T(v)?(z(),ue("div",md,[s.value&&!r.value?(z(),ue("div",gd,[w[15]||(w[15]=Fs('<div class="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-red-100"><svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-.77-2.694-.77-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg></div><h3 class="text-xl font-bold mb-2" style="color:var(--color-text-heading);"> 该文档已设置密码保护 </h3><p class="mb-6 text-sm" style="color:var(--color-text-body);">请输入密码查看内容</p>',3)),De(zt,{onClick:w[4]||(w[4]=R=>n.value=!0)},{default:ee(()=>[...w[14]||(w[14]=[Jn("输入密码",-1)])]),_:1})])):(z(),ue("div",{key:1,class:"prose max-w-none",innerHTML:fe.value,ref_key:"contentRef",ref:d,onScroll:ne},null,40,xd)),V("div",_d,[E.value?(z(),ue("div",vd,[V("button",{onClick:w[5]||(w[5]=R=>le(E.value)),class:"w-full group relative overflow-hidden rounded-2xl p-5 transition-all duration-300 shadow-md hover:shadow-lg flex flex-col items-start text-left",style:{background:"linear-gradient(to bottom right, rgba(41, 94, 172, 0.05), rgba(74, 127, 212, 0.05))",border:"1px solid rgba(41, 94, 172, 0.1)","&:hover":{background:"linear-gradient(to bottom right, rgba(41, 94, 172, 0.1), rgba(74, 127, 212, 0.1))",boxShadow:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 10px rgba(41, 94, 172, 0.1)"}}},[V("div",yd,[(z(),ue("svg",kd,[...w[16]||(w[16]=[V("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"},null,-1)])])),w[17]||(w[17]=V("span",{class:"text-sm font-semibold tracking-wide",style:{color:"var(--color-primary)"}},"上一篇",-1))]),V("span",Ed,ze(E.value.displayName),1)])])):(z(),ue("div",wd)),D.value?(z(),ue("div",Cd,[V("button",{onClick:w[6]||(w[6]=R=>le(D.value)),class:"w-full group relative overflow-hidden rounded-2xl p-5 transition-all duration-300 shadow-md hover:shadow-lg flex flex-col items-end text-right",style:{background:"linear-gradient(to bottom right, rgba(41, 94, 172, 0.05), rgba(74, 127, 212, 0.05))",border:"1px solid rgba(41, 94, 172, 0.1)","&:hover":{background:"linear-gradient(to bottom right, rgba(41, 94, 172, 0.1), rgba(74, 127, 212, 0.1))",boxShadow:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 10px rgba(41, 94, 172, 0.1)"}}},[V("div",Ad,[w[19]||(w[19]=V("span",{class:"text-sm font-semibold tracking-wide",style:{color:"var(--color-primary)"}},"下一篇",-1)),(z(),ue("svg",Dd,[...w[18]||(w[18]=[V("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"},null,-1)])]))]),V("span",Sd,ze(D.value.displayName),1)])])):(z(),ue("div",Fd))])])):(z(),ue("div",bd,[...w[13]||(w[13]=[V("div",{style:{color:"var(--color-text-muted)"}},"请选择一个文档",-1)])])):(z(),ue("div",hd,[...w[12]||(w[12]=[V("div",{style:{color:"var(--color-text-muted)"}},"加载中...",-1)])]))])]),V("div",{class:gn(["hidden lg:block fixed right-4 top-24 w-64 transition-all duration-300 ease-in-out",p.value?"h-12":"h-[calc(100vh-120px)]"])},[V("div",Td,[V("div",Md,[w[20]||(w[20]=V("h3",{class:"text-sm font-semibold",style:{color:"var(--color-text-heading)"}},"目录",-1)),V("button",{class:"text-xs transition-colors duration-300",onClick:w[7]||(w[7]=R=>p.value=!p.value),style:{color:"var(--color-text-muted)","&:hover":{color:"var(--color-text-heading)"}}},ze(p.value?"展开":"收起"),1)]),p.value?rn("",!0):(z(),ue("div",Od,[(z(!0),ue(Gt,null,lr(K.value,(R,W)=>(z(),ue("div",{key:W,class:gn(["text-sm",{"pl-0 font-medium":R.level===1,"pl-2":R.level===2,"pl-4":R.level===3}]),style:Vt({color:R.level===1?"var(--color-text-heading)":R.level===2?"var(--color-text-body)":"var(--color-text-muted)"})},[V("span",{class:"cursor-pointer block py-1 transition-colors duration-300",onClick:Y=>Fe(R.id),style:{"&:hover":{color:"var(--color-primary)"}}},ze(R.text),9,Nd)],6))),128))]))])],2),b.value?(z(),ue("button",{key:0,class:"fixed right-72 bottom-12 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50",onClick:Se,"aria-label":"回到顶部",style:{backgroundColor:"var(--color-primary)",color:"white","&:hover":{backgroundColor:"var(--color-primary-dark)"}}},[...w[21]||(w[21]=[V("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[V("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 15l7-7 7 7"})],-1)])])):rn("",!0)])])]))}});export{Id as default};
