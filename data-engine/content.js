/* Add approved image paths here, relative to data-engine/. null keeps the designed placeholder. */
window.RAILMIND_CONTENT = {
  assets: {
    background: null,
    reference: null,
    direct: null,
    refined: null,
    guided: null,
    supervision: null
  },
  strategies: [
    {
      asset: 'direct',
      zh: {
        caption: '背景图 + 简单需求 → 生成图像',
        prompt: '在这张铁路接触网支柱图像中添加一个鸟巢。',
        tags: ['目标类别', '简单需求'],
        description: '用最直接的语言提出生成目标，建立初始样例，检查模型对场景和需求的基本理解。',
        scene: '目标是否出现在合理的构件或空间位置？是否符合该铁路场景？',
        fidelity: '目标形态、材质和边缘是否自然？是否存在悬浮、畸变或明显拼贴？',
        compliance: '目标类别是否正确？数量是否符合要求？原始背景是否得到保留？',
        transition: '当位置、尺度或融合方式不够明确时，如何把这些要求表达得更具体？',
        next: '加入精细化约束'
      },
      en: {
        caption: 'Background + simple request → generated image',
        prompt: 'Add a bird nest to this image of a railway catenary pole.',
        tags: ['Target category', 'Simple request'],
        description: 'Start with a direct request to establish a baseline example and inspect how the generator interprets the scene and target.',
        scene: 'Is the object attached to an appropriate component and placed in a plausible railway context?',
        fidelity: 'Are shape, material and edges natural? Check for floating objects, distortions and compositing artifacts.',
        compliance: 'Are the target category and object count correct? Is the original background preserved?',
        transition: 'How can the prompt make location, scale and visual integration more explicit?',
        next: 'Add detailed constraints'
      }
    },
    {
      asset: 'refined',
      zh: {
        caption: '背景图 + 多维文本约束 → 生成图像',
        prompt: '在接触网支柱横梁与支撑结构的连接处添加一个鸟巢。\n位置与尺度：稳定附着于构件，大小与周围结构相称。\n形态与材质：呈现交织枝条的自然结构，保留细节与不规则边缘。\n光照与透视：匹配原图的视角、光照方向、清晰度和遮挡关系。\n背景保持：只修改目标区域，保留其余构件、线缆与背景。',
        tags: ['位置与尺度', '形态与材质', '光照与透视', '背景保持'],
        description: '将直接需求拆解为多维约束，检查每条要求的落实情况，并观察仅靠文字仍难以控制的细节。',
        scene: '目标与构件的连接和遮挡是否合理？尺度与观察视角是否一致？',
        fidelity: '细节、光照和纹理是否与背景协调？局部修改是否破坏原有结构？',
        compliance: '逐项对照位置、尺度、材质和背景保持要求，记录未满足的约束。',
        transition: '如果文字仍难以准确指定目标的形态和细节，可以增加什么视觉依据？',
        next: '加入目标视觉参考'
      },
      en: {
        caption: 'Background + multidimensional constraints → generated image',
        prompt: 'Add a bird nest at the junction between the catenary pole crossarm and its supporting structure.\nLocation and scale: attach it stably to the component at a proportionate size.\nShape and material: show naturally interwoven twigs, fine detail and irregular edges.\nLighting and perspective: match the original viewpoint, light direction, sharpness and occlusion.\nBackground preservation: modify only the target region; preserve other components, wires and background.',
        tags: ['Location & scale', 'Shape & material', 'Light & perspective', 'Preserve background'],
        description: 'Translate the request into explicit constraints. Review each requirement and identify details that remain difficult to specify with language alone.',
        scene: 'Are attachment and occlusion plausible? Do scale and viewpoint match the background?',
        fidelity: 'Do detail, lighting and texture blend with the scene? Has the edit damaged existing structures?',
        compliance: 'Check location, scale, material and preservation requirements individually; record unmet constraints.',
        transition: 'What visual evidence could help specify a target shape that words alone cannot capture?',
        next: 'Add a visual reference'
      }
    },
    {
      asset: 'guided',
      zh: {
        caption: '背景图 + 目标参考 + 文本指导 → 生成图像',
        prompt: '以背景图为编辑底图，参考目标图中的鸟巢形态、枝条纹理和结构细节。\n将一个同类目标自然地融入指定的支柱横梁连接处。\n根据背景调整尺度、透视、光照与遮挡；不要直接复制参考图的背景。\n保持其余构件和背景不变，并核验目标形态与参考的一致性。',
        tags: ['目标形态参考', '局部细节', '场景融合', '参考一致性'],
        description: '用目标图或目标物体补充文字难以表达的视觉细节，同时检查目标参考和背景条件能否共同满足。',
        scene: '参考目标是否适合背景场景？融合后的放置、尺度和空间关系是否合理？',
        fidelity: '关键形态和缺陷细节是否得到保留？是否引入参考图的无关背景或伪影？',
        compliance: '核验目标参考一致性、文本条件和背景保持要求，记录需要人工筛除的结果。',
        transition: '图像通过复核后，如何转化为可用于训练的文本监督？',
        next: '进入文本监督流程'
      },
      en: {
        caption: 'Background + target reference + prompt → generated image',
        prompt: 'Use the background image as the editing canvas. Follow the nest shape, twig texture and structural detail in the target reference.\nIntegrate one instance naturally at the specified pole-crossarm junction.\nAdapt scale, perspective, lighting and occlusion to the background. Do not copy the reference background.\nPreserve all other components and inspect the target against its reference.',
        tags: ['Target appearance', 'Local detail', 'Scene integration', 'Reference consistency'],
        description: 'Supply a target image or object reference for visual details that are hard to describe. Check both reference consistency and integration with the background.',
        scene: 'Is the reference appropriate for the scene? Are placement, scale and spatial relationships plausible?',
        fidelity: 'Are key shapes and defect details preserved? Check for unwanted reference background or artifacts.',
        compliance: 'Review reference consistency, textual constraints and background preservation; flag results requiring rejection.',
        transition: 'Once the images pass review, how can they become training-ready textual supervision?',
        next: 'Explore textual supervision'
      }
    }
  ],
  steps: [
    {zh:{label:'图像整理',title:'整理场景与正负样本',description:'按铁路场景整理真实图像与已复核的生成图像，保留来源、样本划分与正负样本信息。',purpose:'先建立清晰的数据来源与样本边界。'},en:{label:'Curation',title:'Curate scenes and samples',description:'Organize real images and reviewed synthetic images by railway scene. Preserve provenance, dataset splits and positive or negative sample information.',purpose:'Establish provenance and clear sample boundaries.'}},
    {zh:{label:'提示词组装',title:'用领域知识约束任务',description:'组合专家角色、领域知识、分析任务、结构化输出与少量示例，明确教师模型需要完成的工作。',purpose:'点击下方提示词要素，查看各自的作用。'},en:{label:'Prompt',title:'Ground the task in domain knowledge',description:'Combine an expert role, domain knowledge, analysis tasks, an output schema and few-shot examples to define the teacher model’s task.',purpose:'Select a prompt component to inspect its role.'}},
    {zh:{label:'模型分析',title:'通用 MLLM 读取图像',description:'将图像与任务提示词提供给教师模型，围绕可见对象、缺陷迹象和场景信息生成描述。',purpose:'图中的教师模型仅表示流程节点。'},en:{label:'Teacher',title:'Analyze images with a general MLLM',description:'Provide the image and task prompt to a teacher model to describe visible objects, defect evidence and scene context.',purpose:'The teacher is a workflow node in this demonstration.'}},
    {zh:{label:'结构化监督',title:'将描述组织成结构化信息',description:'把场景、缺陷类别、可见证据和风险说明分开组织，便于检查一致性与构造不同监督任务。',purpose:'右侧展示字段结构，不填入虚构模型结论。'},en:{label:'Structure',title:'Organize structured supervision',description:'Separate scene, defect categories, visible evidence and risk descriptions for consistency checks and multiple supervision tasks.',purpose:'The schema lists fields without inventing model results.'}},
    {zh:{label:'人工复核',title:'检查证据与结论是否一致',description:'检查描述是否有图像依据、类别是否正确、风险是否过度推断。需要修订的记录在更正前不进入训练导出。',purpose:'复核通过是训练导出的前置条件。'},en:{label:'Review',title:'Review evidence and conclusions',description:'Check visual grounding, category correctness and unsupported risk claims. Records requiring correction remain excluded from training export until resolved.',purpose:'Review approval is required before training export.'}},
    {zh:{label:'任务导出',title:'构造多任务文本监督',description:'使用复核后的记录组织场景识别、缺陷判断、证据描述与风险说明等任务，保留样本与来源的关联。',purpose:'向下查看不同任务的问答模板。'},en:{label:'Export',title:'Build supervision for multiple tasks',description:'Use approved records for scene recognition, defect decisions, evidence descriptions and risk explanations, while retaining sample provenance.',purpose:'Explore task-specific question-and-answer templates below.'}}
  ],
  promptParts: [
    {zh:{label:'专家角色',text:'定义任务角色：铁路基础设施巡检分析助手，围绕图像中的可见信息提供描述。'},en:{label:'Expert role',text:'Define the role: a railway infrastructure inspection assistant describing visible information in the image.'}},
    {zh:{label:'领域知识',text:'提供场景与缺陷类别定义，说明相关构件及类别边界，帮助统一术语。'},en:{label:'Domain knowledge',text:'Provide scene and defect definitions, component context and category boundaries to align terminology.'}},
    {zh:{label:'分析任务',text:'组织场景、对象状态、可见缺陷证据、类别对齐及风险说明，输出可核查的分析摘要。'},en:{label:'Analysis tasks',text:'Organize scene context, object state, visible evidence, category alignment and risk descriptions into a verifiable summary.'}},
    {zh:{label:'输出格式',text:'指定结构化字段：scene、anomaly_classes、visual_evidence、risk_description 和 review_status。'},en:{label:'Output schema',text:'Specify structured fields: scene, anomaly_classes, visual_evidence, risk_description and review_status.'}},
    {zh:{label:'Few-shot',text:'提供经过检查的输入与输出示例，统一回答格式、信息粒度和不确定性表述。'},en:{label:'Few-shot',text:'Provide checked examples to align answer structure, level of detail and expressions of uncertainty.'}}
  ],
  tasks: [
    {zh:{label:'场景识别',question:'这张图像属于哪类铁路巡检场景？',answer:'{经过复核的场景类别}'},en:{label:'Scene',question:'Which railway inspection scene is shown in this image?',answer:'{reviewed scene category}'}},
    {zh:{label:'缺陷判断',question:'图像中是否存在缺陷？如果存在，属于哪些类别？',answer:'{缺陷存在性}；{经过复核的缺陷类别列表}'},en:{label:'Defect',question:'Does this image contain defects? If so, which categories?',answer:'{defect presence}; {reviewed defect categories}'}},
    {zh:{label:'证据描述',question:'哪些可见信息支持这一缺陷判断？',answer:'{对象或构件}；{可见状态}；{支持判断的图像证据}'},en:{label:'Evidence',question:'Which visible details support the defect decision?',answer:'{object or component}; {visible state}; {supporting visual evidence}'}},
    {zh:{label:'风险说明',question:'该缺陷可能涉及哪些风险？哪些信息仍需人工确认？',answer:'{有依据的风险说明}；{适用条件与不确定性}'},en:{label:'Risk',question:'What risks may be associated with the defect, and what needs further review?',answer:'{grounded risk description}; {conditions and uncertainty}'}}
  ]
};
