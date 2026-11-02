(() => {
  'use strict';
  // Share the language preference with the Data Engine on the same origin.
  const STORAGE_KEY = 'railmind-language';
  const zh = {
    "RailMind | Railway Infrastructure Intelligence": "RailMind | 铁路基础设施智能巡检",
    "RailMind — multimodal railway infrastructure anomaly understanding and localization, with Rail-Security-Bench evaluation.": "RailMind：面向铁路基础设施的多模态异常理解与定位，结合 Rail-Security-Bench 进行评测。",
    "Overview": "研究概览",
    "Method": "方法",
    "Data Engine": "数据引擎",
    "Results": "研究结果",
    "Benchmark": "评测基准",
    "Showcase": "效果展示",
    "Resources": "研究资源",
    "Multimodal AI · Railway Infrastructure Intelligence": "多模态人工智能 · 铁路基础设施智能巡检",
    "Understanding and Localizing Railway Infrastructure Anomalies with Vision-Language Intelligence": "利用视觉语言智能理解与定位铁路基础设施异常",
    "An integrated research framework combining domain-specific multimodal post-training, open-vocabulary grounding and the Rail-Security-Bench evaluation suite.": "融合领域多模态后训练、开放词汇定位与 Rail-Security-Bench 评测的综合研究框架。",
    "Explore the Method ↗": "了解研究方法 ↗",
    "Explore Benchmark": "查看评测基准",
    "UAV Inspection": "无人机巡检",
    "Steel Bridge": "钢桥",
    "Catenary Pole": "接触网支柱",
    "Noise Barrier": "声屏障",
    "Environment": "线路环境",
    "Power Tower": "电力铁塔",
    "Rail Track": "轨道",
    "Rail-Security-Bench · UAV inspection scenes": "Rail-Security-Bench · 无人机巡检场景",
    "6 SCENARIOS": "6 类场景",
    "Benchmark test images": "基准测试图像",
    "Railway scene categories": "铁路场景类别",
    "SFT training examples": "SFT 训练样本",
    "RL training examples": "RL 训练样本",
    "01 / Research Overview": "01 / 研究概览",
    "One ecosystem, from visual evidence to verified anomalies.": "从视觉证据到异常核验的研究体系。",
    "RailMind and Rail-Security-Bench connect two complementary research components: an anomaly understanding and localization pipeline, and a domain-specific evaluation benchmark for realistic railway inspection.": "RailMind 与 Rail-Security-Bench 连接了两个互补的研究部分：异常理解与定位流程，以及面向真实铁路巡检的领域评测基准。",
    "MODEL · RAILMIND": "模型 · RAILMIND",
    "Multimodal anomaly understanding": "多模态异常理解",
    "A multimodal model identifies railway infrastructure anomalies from visual context. A detection model provides the localization stage for detected anomaly categories.": "多模态模型根据视觉上下文识别铁路基础设施异常，检测模型进一步定位已识别的异常类别。",
    "Visual Understanding": "视觉理解",
    "Anomaly Classification": "异常分类",
    "Bounding Boxes": "目标框",
    "EVALUATION · RAIL-SECURITY-BENCH": "评测 · RAIL-SECURITY-BENCH",
    "Realistic benchmark evaluation": "真实场景基准评测",
    "A curated evaluation suite of 820 test images spanning six railway infrastructure scenarios, reflecting an uneven, field-oriented distribution of anomalies.": "评测集包含 820 张测试图像，覆盖六类铁路基础设施场景，保留了实际巡检中不均衡的异常分布。",
    "Six Scenarios": "六类场景",
    "Long-tailed Distribution": "长尾分布",
    "UAV Imagery": "无人机图像",
    "02 / Method Overview": "02 / 方法概览",
    "RailMind architecture and training pipeline": "RailMind 架构与训练流程",
    "A structured workflow from curated inspection images and external teacher supervision to multimodal post-training and anomaly localization.": "从巡检图像整理与外部教师监督出发，构建多模态后训练与异常定位的完整流程。",
    "STAGE 01": "阶段 01",
    "STAGE 02": "阶段 02",
    "STAGE 03": "阶段 03",
    "STAGE 04": "阶段 04",
    "Railway Visual Data": "铁路视觉数据",
    "Raw images, annotated anomalies, provenance and dataset splits": "原始图像、异常标注、数据来源与数据集划分",
    "Data Engine ↗": "数据引擎 ↗",
    "NanoBanana augmentation + Gemini-generated textual supervision": "NanoBanana 图像增广 + Gemini 生成文本监督",
    "Multimodal Model SFT": "多模态模型监督微调",
    "Domain adaptation with anomaly-focused visual and text supervision": "利用面向异常的视觉与文本监督进行领域适配",
    "Post-training strategies for improved anomaly decisions": "利用后训练策略改善异常判断",
    "↓ Prediction + grounding ↓": "↓ 预测与定位 ↓",
    "Multimodal Model Anomaly Classification → Detection Model Localization → Evaluation": "多模态模型异常分类 → 检测模型定位 → 评测",
    "Parallel detection training: manually verified bounding-box annotations → detection dataset → Detection Model training. The figure is a conceptual overview; see the code repository for implementation details.": "并行检测训练：人工核验的目标框标注 → 检测数据集 → 检测模型训练。此图为概念性流程概览，实现细节请参阅代码仓库。",
    "Data Curation": "数据整理",
    "Grounded Data Construction": "有依据的数据构建",
    "Raw labeled/unlabeled image management, augmented imagery and Gemini-generated supervision with explicit review and filtering.": "管理有标注与无标注的原始图像、增广图像及 Gemini 生成的监督，并进行明确的复核与筛选。",
    "Multimodal Learning": "多模态学习",
    "SFT → RL Post-Training": "SFT → RL 后训练",
    "Supervised adaptation followed by RL variants to analyze the precision–recall trade-off.": "在监督适配后采用 RL 等策略，分析精确率与召回率之间的权衡。",
    "Localization": "目标定位",
    "Open-Vocabulary Grounding": "开放词汇定位",
    "Use classification results alongside a detection model for localized visual evidence and bounding-box evaluation.": "结合分类结果与 检测模型，获得局部视觉证据并进行目标框评测。",
    "03 / Main Results": "03 / 主要结果",
    "Quantitative research highlights": "研究结果概览",
    "Results reported in RailMind: Multimodal Reasoning for Railway Infrastructure Security. RailMind uses a multimodal model.": "以下结果来自 RailMind: Multimodal Reasoning for Railway Infrastructure Security。RailMind 使用 多模态模型。",
    "MEAN PRECISION IMPROVEMENT": "平均精确率提升",
    "MEAN RECALL IMPROVEMENT": "平均召回率提升",
    "MACRO-F1 IMPROVEMENT": "宏平均 F1 提升",
    "Anomaly detection · IoU = 0.5": "异常检测 · IoU = 0.5",
    "Over the strongest competing model": "相对于最强对比模型",
    "Image-level defect classification": "图像级缺陷分类",
    "Over the best same-scale open-source baseline": "相对于同规模最优开源基线",
    "Approximate improvements follow the manuscript abstract's notation, without conversion to percentage points. See the paper for absolute scores, baselines and averaging definitions. The public workflow demo does not independently reproduce these experiments.": "上述近似提升遵循论文摘要的表述，未换算为百分点。绝对分数、对比基线及平均方式请参阅论文。公开的流程演示不构成对论文实验的独立复现。",
    "Post-training Comparison": "后训练策略对比",
    "The manuscript compares supervised adaptation and reinforcement-learning variants for anomaly understanding and localization.": "论文比较了监督适配与不同强化学习策略在异常理解及定位任务中的表现。",
    "Classification Performance": "分类性能",
    "Multimodal Model": "多模态模型",
    "The manuscript reports classification performance comparable to the strongest closed-source Gemini model.": "论文报告的分类性能与最强闭源 Gemini 模型相当。",
    "Six real-world railway infrastructure scenarios": "六类真实铁路基础设施场景",
    "The original Rail-Security-Bench evaluation set contains 820 images with a naturally uneven scene distribution. Each category emphasizes safety-relevant anomalies encountered during railway infrastructure inspection.": "原始 Rail-Security-Bench 评测集包含 820 张图像，场景分布自然不均衡，各类场景关注铁路基础设施巡检中与安全相关的异常。",
    "DATA CONSTRUCTION · INTERACTIVE GUIDE": "数据构建 · 交互式介绍",
    "Explore the RailMind Data Engine": "探索 RailMind 数据引擎",
    "See how controlled visual synthesis and MLLM-generated textual supervision support training-data construction. Benchmark evaluation remains a separate stage.": "了解受控视觉生成与 MLLM 生成的文本监督如何支持训练数据构建。基准评测作为独立阶段开展。",
    "Explore Data Engine ↗": "探索数据引擎 ↗",
    "Foreign-object attachments such as bird nests that may affect overhead power supply infrastructure.": "鸟巢等附着异物，可能影响架空供电基础设施。",
    "Plastic films, accumulated waste and intrusive objects near railway infrastructure.": "铁路基础设施附近的塑料薄膜、堆积垃圾与侵入异物。",
    "Corroded panels and columns, along with aging or deterioration of mortar layers.": "面板与立柱腐蚀，以及砂浆层老化或劣化。",
    "Bird nests, foreign objects and loosened antenna bolts in elevated structures.": "高架结构中的鸟巢、异物与天线螺栓松动。",
    "Missing and cracked fasteners affecting railway track integrity and stability.": "影响轨道完整性与稳定性的扣件缺失和开裂。",
    "Missing bolts, coating corrosion and peeling, and corrosion of bridge guardrails.": "螺栓缺失、涂层腐蚀与剥落，以及桥梁护栏腐蚀。",
    "05 / Qualitative Analysis": "05 / 定性分析",
    "See what the model understands": "查看模型如何理解图像",
    "A dedicated area for side-by-side qualitative comparisons showing the original railway inspection image, RailMind's anomaly decision, Detection Model bounding boxes and ground truth.": "此区域用于并排展示原始铁路巡检图像、RailMind 异常判断、检测模型预测框与真实标注，便于进行定性比较。",
    "Reasoning & Classification": "分析与分类",
    "Reserved for verified examples with anomaly category and model output. No example predictions are fabricated.": "预留用于展示包含异常类别与模型输出的已核验样例，不填入虚构预测。",
    "Localization Visualization": "定位可视化",
    "Reserved for real predicted boxes alongside verified ground-truth annotations.": "预留用于对比真实预测框与已核验的真实标注。",
    "To complete this section, add selected qualitative examples to": "完善此区域时，可将选定的定性分析样例放入",
    "and replace the placeholders.": "并替换占位内容。",
    "06 / Resources & Release": "06 / 资源与发布",
    "Code, benchmark, and research resources": "代码、评测基准与研究资源",
    "Open-source resources": "开源资源",
    "Explore the source repository and the domain-specific benchmark. Links to model weights, datasets and paper can be added after public release.": "访问代码仓库与领域评测基准。模型权重、数据集与论文链接可在公开发布后补充。",
    "GitHub Repository ↗": "GitHub 仓库 ↗",
    "Interactive Data Engine ↗": "交互式数据引擎 ↗",
    "Paper · forthcoming": "论文 · 待发布",
    "Model · forthcoming": "模型 · 待发布",
    "Dataset access · check repository": "数据获取 · 请查看仓库",
    "News & citation": "动态与引用",
    "Project site update · 2026": "项目网站更新 · 2026",
    "RailMind research summary and Rail-Security-Bench benchmark unified into one project page.": "RailMind 研究介绍与 Rail-Security-Bench 评测基准整合至同一项目页面。",
    "Paper / citation": "论文与引用",
    "Bibliographic details have not been published here. Please check the repository for release updates before citing.": "此处尚未发布完整书目信息，引用前请查看仓库的发布更新。",
    "Citation status": "引用状态",
    "Copy project URL": "复制项目链接",
    "Copied!": "已复制！",
    "Copy unavailable": "暂时无法复制",
    "RailMind — Railway Infrastructure Anomaly Understanding and Localization": "RailMind — 铁路基础设施异常理解与定位",
    "Rail-Security-Bench — Domain-Specific Railway Infrastructure Evaluation": "Rail-Security-Bench — 铁路基础设施领域评测基准",
    "Official citation: forthcoming. Please use the final publication BibTeX when available.": "正式引用信息待发布，请在发布后使用最终出版记录的 BibTeX。",
    "RailMind · Rail-Security-Bench · Railway infrastructure intelligence": "RailMind · Rail-Security-Bench · 铁路基础设施智能巡检",
    "Research contact: BJTU Mepro Laboratory": "研究联系：BJTU Mepro 实验室",
    "© 2026 RailMind Research Project": "© 2026 RailMind 研究项目",
    "Toggle navigation": "展开或收起导航",
    "Explore training data construction": "了解训练数据构建",
    "Benchmark distribution": "评测基准场景分布",
    "Railway inspection benchmark example": "铁路巡检基准样例",
    "Catenary pole benchmark": "接触网支柱基准样例",
    "Environment benchmark": "线路环境基准样例",
    "Noise barrier benchmark": "声屏障基准样例",
    "Power tower benchmark": "电力铁塔基准样例",
    "Rail track benchmark": "轨道基准样例",
    "Steel bridge benchmark": "钢桥基准样例",
    "railway inspection scene": "铁路巡检场景",
    "View": "查看",
    "DEFECT OBSERVATION": "缺陷观察",
    "Coating deterioration": "涂层劣化",
    "Bird nest": "鸟巢",
    "Corrosion / deterioration": "腐蚀 / 劣化",
    "Foreign object": "侵入异物",
    "Fastener defect": "扣件缺陷",
    "Missing bolts, coating damage and guardrail corrosion may compromise connections and durability. Advanced deterioration can threaten structural or maintenance-access safety.": "螺栓缺失、涂层损伤和护栏腐蚀可能削弱连接可靠性与结构耐久性；严重劣化时可能危及结构或检修通行安全。",
    "Bird nests and other attachments may compromise overhead electrical clearances. Severe intrusion can contribute to flashover and traction-power interruption.": "鸟巢等附着异物可能侵占电气安全间隙，影响接触网供电安全；严重侵入时可能引发闪络或牵引供电中断。",
    "Panel and column corrosion, together with deteriorated mortar, may weaken barrier integrity. Advanced damage can cause loose or falling components near the railway.": "面板与立柱腐蚀、砂浆劣化可能削弱结构完整性；损伤进一步发展时可能导致邻近线路的部件松动或坠落。",
    "Plastic film, waste and intrusive objects may enter the track area or contact electrical equipment. Severe intrusion can disrupt train operation or power supply.": "塑料薄膜、堆积垃圾等异物可能侵入轨道区域或接触电气设备；严重侵入时可能影响列车运行或电力供应。",
    "Bird nests, foreign objects and loose antenna bolts may impair electrical clearances or attachment stability. Severe cases can involve electrical faults or falling components.": "鸟巢、异物及天线螺栓松动可能影响电气间隙或附属部件稳定性；严重时可能引发电气故障或部件坠落。",
    "Missing or cracked fasteners may weaken rail restraint and track stability. Widespread or progressive damage can pose a serious risk to safe train running.": "扣件缺失或开裂可能削弱钢轨约束和轨道稳定性；大范围或持续发展的损伤可能严重威胁列车运行安全。",
    "Existing benchmark annotations; consequences depend on defect extent and operating conditions.": "已有基准标注示例；风险随缺陷程度与运行条件变化。",
    "Detection Model": "检测模型"
  };
  let language = 'zh';
  try { language = localStorage.getItem(STORAGE_KEY) === 'en' ? 'en' : 'zh'; } catch (_) {}
  const normalize = value => value.replace(/\s+/g, ' ').trim();
  function t(value) {
    if (language === 'en') return value;
    const key = normalize(value);
    if (Object.prototype.hasOwnProperty.call(zh, key)) return zh[key];
    const count = key.match(/^(\d+) images$/);
    return count ? `${count[1]} 张图像` : value;
  }
  // Retain original text nodes so toggling back restores the exact English copy
  // and leaves links, image paths, metric values and nested markup intact.
  const originals = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    if (!normalize(node.nodeValue) || node.parentElement.closest('script,style,#hero-title,#hero-defect,#hero-risk,#copy-link,#language-toggle')) continue;
    originals.push([node, node.nodeValue]);
  }
  const attributes = [];
  document.querySelectorAll('[alt],[aria-label]').forEach(element => {
    if (element.id === 'hero-image' || element.id === 'language-toggle') return;
    ['alt', 'aria-label'].forEach(name => {
      if (element.hasAttribute(name)) attributes.push([element, name, element.getAttribute(name)]);
    });
  });
  const originalTitle = document.title;
  const description = document.querySelector('meta[name="description"]');
  const originalDescription = description.content;
  const button = document.getElementById('language-toggle');
  function render() {
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
    originals.forEach(([textNode, original]) => {
      const translated = t(original);
      textNode.nodeValue = language === 'en' || translated === original ? original : original.match(/^\s*/)[0] + translated + original.match(/\s*$/)[0];
    });
    attributes.forEach(([element, name, original]) => element.setAttribute(name, t(original)));
    document.title = t(originalTitle);
    description.content = t(originalDescription);
    button.textContent = language === 'zh' ? 'EN' : '中文';
    button.setAttribute('aria-label', language === 'zh' ? 'Switch to English' : '切换到中文');
    document.dispatchEvent(new CustomEvent('railmind:languagechange'));
  }
  function setLanguage(next, persist = true) {
    language = next === 'en' ? 'en' : 'zh';
    if (persist) { try { localStorage.setItem(STORAGE_KEY, language); } catch (_) {} }
    render();
  }
  window.RAILMIND_I18N = { t, getLanguage: () => language };
  button.addEventListener('click', () => setLanguage(language === 'zh' ? 'en' : 'zh'));
  window.addEventListener('storage', event => {
    if (event.key === STORAGE_KEY || event.key === null) setLanguage(event.newValue, false);
  });
  render();
})();
