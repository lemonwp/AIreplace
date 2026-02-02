[README.md](https://github.com/user-attachments/files/24998442/README.md)
# AI替代风险评估工具

一个基于Web的AI替代风险评估应用，允许用户通过对五个特定维度进行评分，自动计算总分并基于预设标准提供工作替代风险评估及未来职业发展建议。

## 功能特点

### 🎨 直观的用户界面
- 简洁现代的设计风格
- 响应式布局，适配桌面和移动设备
- 为每个评估维度添加了直观的图标

### 📊 五维度评估
- **任务重复性**：工作内容的标准化和可重复性程度
- **决策复杂度**：工作中处理模糊信息和复杂决策的需求
- **创造需求度**：工作对原创性思维和情感表达的要求
- **人际交互深度**：工作中建立信任关系和情感共鸣的需求
- **专业壁垒高度**：工作所需的经验积累和行业洞察深度

### 🔢 智能计算
- 自动计算总分：`总分 = (6-任务重复性) + 决策复杂度 + 创造需求度 + 人际交互深度 + 专业壁垒高度`
- 基于总分判定风险等级：
  - 总分≤8分：高风险区（替代率可能超60%）
  - 9-12分：中风险区（部分任务自动化）
  - ≥13分：安全区（AI作为增效工具）

### 📱 结果分享
- 支持分享到微信、朋友圈
- 支持分享到微博
- 支持复制结果到剪贴板

### 📚 相关资源
- AI与职业发展
- 未来就业趋势
- AI技能提升
- 创新思维培养

### ✨ 用户体验优化
- 实时评分反馈
- 平滑的动画效果
- 表单验证
- 重置功能

## 技术栈

- **前端**：HTML5, CSS3, JavaScript
- **图标库**：Font Awesome 6
- **样式**：原生CSS（响应式设计）
- **部署**：支持静态网站托管（Vercel, Netlify, GitHub Pages等）

## 快速开始

### 本地运行

1. **克隆项目**
   ```bash
   git clone https://github.com/your-username/ai-risk-assessment.git
   cd ai-risk-assessment
   ```

2. **启动本地服务器**
   ```bash
   # 使用Python 3
   python3 -m http.server 8000
   
   # 或使用Node.js
   npx http-server -p 8000
   
   # 或使用PHP
   php -S localhost:8000
   ```

3. **访问应用**
   打开浏览器访问 `http://localhost:8000`

### 部署到线上

#### 方案一：Vercel
```bash
# 安装Vercel CLI
npm i -g vercel

# 登录
vercel login

# 部署
vercel
```

#### 方案二：Netlify
```bash
# 安装Netlify CLI
npm install -g netlify-cli

# 登录
netlify login

# 部署
netlify deploy --prod
```

#### 方案三：GitHub Pages
1. 推送到GitHub仓库
2. 在仓库设置中启用GitHub Pages
3. 选择分支并保存

## 使用方法

1. **评分**：对五个评估维度分别进行1-5分的评分
2. **计算**：点击"计算结果"按钮
3. **查看结果**：查看总分、风险等级和未来发展建议
4. **分享**：使用分享按钮分享评估结果
5. **重置**：点击"重置"按钮重新评分

## 项目结构

```
ai-risk-assessment/
├── index.html          # 主页面
├── styles.css          # 样式文件
├── script.js           #  JavaScript逻辑
├── erweima.png         # 二维码图片
└── README.md           # 项目说明
```

## 浏览器支持

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 注意事项

- 本工具仅供参考，非专业职业咨询
- 评估结果基于预设算法，实际情况可能因行业、具体岗位等因素有所不同
- 建议结合自身实际情况和专业建议进行职业规划

## 贡献

欢迎提交Issue和Pull Request来改进这个项目！

## 许可证

MIT License

## 联系方式

如有问题或建议，欢迎联系我们。

---

**AI替代风险评估工具** - 帮助你了解AI时代的职业发展趋势，提前做好职业规划！
