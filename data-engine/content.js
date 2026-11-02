/* Approved example assets; null retains the designed placeholder. */
window.RAILMIND_CONTENT = {
  "assets": {
    "background": "assets/noise-barrier-background.webp",
    "reference": "assets/noise-barrier-reference.webp",
    "direct": "assets/noise-barrier-direct.webp",
    "refined": "assets/noise-barrier-refined.webp",
    "guided": "assets/noise-barrier-guided.webp",
    "supervision": null
  },
  "strategies": [
    {
      "asset": "direct",
      "zh": {
        "caption": "背景图 + 简单需求 → 生成图像",
        "prompt": "让图中的部分铁路声屏障立柱呈现锈蚀。",
        "tags": [
          "目标类别",
          "简单需求"
        ],
        "description": "以声屏障立柱锈蚀为例，用简单需求建立初始样例，观察模型如何理解锈蚀的位置、范围与外观。",
        "scene": "锈蚀是否出现在声屏障立柱上？分布是否符合构件的形状与连接位置？",
        "fidelity": "锈色、纹理与边缘是否自然？是否出现突兀的团块、变形或不合理的锈迹扩散？",
        "compliance": "修改对象是否为立柱？是否保留面板、轨道和背景？锈蚀范围是否符合需求？",
        "transition": "如何进一步限定锈蚀的位置、分布、材质和背景保持要求？",
        "next": "加入精细化约束"
      },
      "en": {
        "caption": "Background + simple request → generated image",
        "prompt": "Make some railway noise-barrier posts in this image appear corroded.",
        "tags": [
          "Target category",
          "Simple request"
        ],
        "description": "Use noise-barrier post corrosion as a baseline example. Inspect how a simple request controls the location, extent and appearance of rust.",
        "scene": "Does corrosion occur on the noise-barrier posts? Does its distribution follow the component shape and connection points?",
        "fidelity": "Are rust colors, textures and edges natural? Check for bulky artifacts, deformation or implausible rust spreading.",
        "compliance": "Are the edited components posts? Are panels, tracks and the background preserved? Does the rust extent match the request?",
        "transition": "How can the prompt better specify rust location, distribution, material appearance and background preservation?",
        "next": "Add detailed constraints"
      }
    },
    {
      "asset": "refined",
      "zh": {
        "caption": "背景图 + 多维文本约束 → 生成图像",
        "prompt": "在上下两排声屏障中各选择一根现有立柱，生成局部表面锈蚀。\n位置与范围：锈蚀沿立柱底部及边缘自然分布，不改变构件轮廓。\n材质与细节：呈现不规则的红褐色锈斑、局部涂层剥落及少量向下延伸的锈迹，避免夸张的块状堆积。\n光照与透视：匹配原图的视角、光照方向、清晰度和金属表面质感。\n背景保持：仅修改所选立柱及紧邻的少量锈迹区域，保留其余立柱、面板、轨道、植被与线缆。",
        "tags": [
          "位置与范围",
          "材质与细节",
          "光照与透视",
          "背景保持"
        ],
        "description": "将立柱锈蚀拆解为位置、范围、材质、光照和背景保持等约束，逐项检查精细化文本的控制效果。",
        "scene": "锈斑是否沿立柱表面、边缘和底部合理分布？与构件连接关系是否协调？",
        "fidelity": "锈蚀纹理、涂层边界和流挂锈迹是否自然？是否保留立柱原有形状与金属质感？",
        "compliance": "逐项核对所选立柱、锈蚀范围、材质细节及背景保持，检查是否改动无关区域。",
        "transition": "如果文字仍难以指定真实锈斑的形态与纹理，可以增加什么视觉依据？",
        "next": "加入目标视觉参考"
      },
      "en": {
        "caption": "Background + multidimensional constraints → generated image",
        "prompt": "Select one existing post in each of the upper and lower rows of noise barriers and add localized surface corrosion.\nLocation and extent: distribute rust naturally along the post bases and edges without changing component outlines.\nMaterial and detail: show irregular reddish-brown rust patches, local coating loss and limited downward rust streaks. Avoid exaggerated bulky deposits.\nLighting and perspective: match the original viewpoint, lighting direction, sharpness and metal surface appearance.\nBackground preservation: edit only the selected posts and small adjacent rust-streak regions. Preserve all other posts, panels, tracks, vegetation and wires.",
        "tags": [
          "Location & extent",
          "Material & detail",
          "Light & perspective",
          "Preserve background"
        ],
        "description": "Specify corrosion through location, extent, material, lighting and preservation constraints. Review how well detailed text controls each aspect.",
        "scene": "Does rust follow plausible areas on the post surfaces, edges and bases? Is it consistent with component connections?",
        "fidelity": "Are rust texture, coating boundaries and downward streaks natural? Are the original post geometry and metal appearance preserved?",
        "compliance": "Check the selected posts, rust extent, material detail and background preservation individually. Look for changes in unrelated regions.",
        "transition": "What visual evidence could help specify realistic rust shapes and textures that remain difficult to describe?",
        "next": "Add a visual reference"
      }
    },
    {
      "asset": "guided",
      "zh": {
        "caption": "背景图 + 目标参考 + 文本指导 → 生成图像",
        "prompt": "以背景图为编辑底图，参考目标图中声屏障立柱的锈斑形态、红褐色纹理和涂层剥落细节。\n在上排声屏障中选择两根现有立柱，将同类锈蚀特征自然融入其表面与边缘。\n根据背景调整锈斑尺度、分布、光照与清晰度；不要复制参考图的背景或整体结构。\n保留其余立柱、下排声屏障、轨道、植被和线缆，并核验锈蚀外观与参考的一致性。",
        "tags": [
          "锈蚀外观参考",
          "局部细节",
          "场景融合",
          "参考一致性"
        ],
        "description": "加入真实声屏障立柱锈蚀参考图，为锈斑形态、材质与涂层细节提供视觉依据，同时检查与原始场景的融合。",
        "scene": "参考中的锈蚀特征是否适用于背景立柱？生成后是否保持合理的构件形状与空间关系？",
        "fidelity": "锈色、斑块分布和涂层剥落是否与参考相符？是否引入参考图的无关背景或结构？",
        "compliance": "核验锈蚀外观的参考一致性、指定立柱及背景保持要求，记录需要修订或筛除的结果。",
        "transition": "图像通过复核后，如何转化为可用于训练的文本监督？",
        "next": "进入文本监督流程"
      },
      "en": {
        "caption": "Background + target reference + prompt → generated image",
        "prompt": "Use the background image as the editing canvas. Follow the rust patch shapes, reddish-brown texture and coating-loss details on the noise-barrier posts in the target reference.\nSelect two existing posts in the upper row and integrate similar corrosion naturally into their surfaces and edges.\nAdapt rust scale, distribution, lighting and sharpness to the background. Do not copy the reference background or overall structure.\nPreserve all other posts, the lower noise barrier, tracks, vegetation and wires. Inspect the corrosion appearance against the reference.",
        "tags": [
          "Corrosion reference",
          "Local detail",
          "Scene integration",
          "Reference consistency"
        ],
        "description": "Add a real reference of corroded noise-barrier posts to guide rust shape, material and coating detail, while checking integration with the original scene.",
        "scene": "Are the reference corrosion features appropriate for the background posts? Are component geometry and spatial relationships preserved?",
        "fidelity": "Do rust colors, patch distribution and coating loss follow the reference? Check for unwanted reference background or structural changes.",
        "compliance": "Review reference consistency, the specified posts and background preservation. Flag results requiring correction or rejection.",
        "transition": "Once the images pass review, how can they become training-ready textual supervision?",
        "next": "Explore textual supervision"
      }
    }
  ],
  "steps": [
    {
      "zh": {
        "label": "图像整理",
        "title": "整理场景与正负样本",
        "description": "按铁路场景整理真实图像与已复核的生成图像，保留来源、样本划分与正负样本信息。",
        "purpose": "先建立清晰的数据来源与样本边界。"
      },
      "en": {
        "label": "Curation",
        "title": "Curate scenes and samples",
        "description": "Organize real images and reviewed synthetic images by railway scene. Preserve provenance, dataset splits and positive or negative sample information.",
        "purpose": "Establish provenance and clear sample boundaries."
      }
    },
    {
      "zh": {
        "label": "提示词组装",
        "title": "用领域知识约束任务",
        "description": "组合专家角色、领域知识、分析任务、结构化输出与少量示例，明确教师模型需要完成的工作。",
        "purpose": "点击下方提示词要素，查看各自的作用。"
      },
      "en": {
        "label": "Prompt",
        "title": "Ground the task in domain knowledge",
        "description": "Combine an expert role, domain knowledge, analysis tasks, an output schema and few-shot examples to define the teacher model’s task.",
        "purpose": "Select a prompt component to inspect its role."
      }
    },
    {
      "zh": {
        "label": "模型分析",
        "title": "通用 MLLM 读取图像",
        "description": "将图像与任务提示词提供给教师模型，围绕可见对象、缺陷迹象和场景信息生成描述。",
        "purpose": "图中的教师模型仅表示流程节点。"
      },
      "en": {
        "label": "Teacher",
        "title": "Analyze images with a general MLLM",
        "description": "Provide the image and task prompt to a teacher model to describe visible objects, defect evidence and scene context.",
        "purpose": "The teacher is a workflow node in this demonstration."
      }
    },
    {
      "zh": {
        "label": "结构化监督",
        "title": "将描述组织成结构化信息",
        "description": "把场景、缺陷类别、可见证据和风险说明分开组织，便于检查一致性与构造不同监督任务。",
        "purpose": "右侧展示字段结构，不填入虚构模型结论。"
      },
      "en": {
        "label": "Structure",
        "title": "Organize structured supervision",
        "description": "Separate scene, defect categories, visible evidence and risk descriptions for consistency checks and multiple supervision tasks.",
        "purpose": "The schema lists fields without inventing model results."
      }
    },
    {
      "zh": {
        "label": "人工复核",
        "title": "检查证据与结论是否一致",
        "description": "检查描述是否有图像依据、类别是否正确、风险是否过度推断。需要修订的记录在更正前不进入训练导出。",
        "purpose": "复核通过是训练导出的前置条件。"
      },
      "en": {
        "label": "Review",
        "title": "Review evidence and conclusions",
        "description": "Check visual grounding, category correctness and unsupported risk claims. Records requiring correction remain excluded from training export until resolved.",
        "purpose": "Review approval is required before training export."
      }
    },
    {
      "zh": {
        "label": "任务导出",
        "title": "构造多任务文本监督",
        "description": "使用复核后的记录组织场景识别、缺陷判断、证据描述与风险说明等任务，保留样本与来源的关联。",
        "purpose": "向下查看不同任务的问答模板。"
      },
      "en": {
        "label": "Export",
        "title": "Build supervision for multiple tasks",
        "description": "Use approved records for scene recognition, defect decisions, evidence descriptions and risk explanations, while retaining sample provenance.",
        "purpose": "Explore task-specific question-and-answer templates below."
      }
    }
  ],
  "promptParts": [
    {
      "zh": {
        "label": "专家角色",
        "text": "定义任务角色：铁路基础设施巡检分析助手，围绕图像中的可见信息提供描述。"
      },
      "en": {
        "label": "Expert role",
        "text": "Define the role: a railway infrastructure inspection assistant describing visible information in the image."
      }
    },
    {
      "zh": {
        "label": "领域知识",
        "text": "提供场景与缺陷类别定义，说明相关构件及类别边界，帮助统一术语。"
      },
      "en": {
        "label": "Domain knowledge",
        "text": "Provide scene and defect definitions, component context and category boundaries to align terminology."
      }
    },
    {
      "zh": {
        "label": "分析任务",
        "text": "组织场景、对象状态、可见缺陷证据、类别对齐及风险说明，输出可核查的分析摘要。"
      },
      "en": {
        "label": "Analysis tasks",
        "text": "Organize scene context, object state, visible evidence, category alignment and risk descriptions into a verifiable summary."
      }
    },
    {
      "zh": {
        "label": "输出格式",
        "text": "指定结构化字段：scene、anomaly_classes、visual_evidence、risk_description 和 review_status。"
      },
      "en": {
        "label": "Output schema",
        "text": "Specify structured fields: scene, anomaly_classes, visual_evidence, risk_description and review_status."
      }
    },
    {
      "zh": {
        "label": "Few-shot",
        "text": "提供经过检查的输入与输出示例，统一回答格式、信息粒度和不确定性表述。"
      },
      "en": {
        "label": "Few-shot",
        "text": "Provide checked examples to align answer structure, level of detail and expressions of uncertainty."
      }
    }
  ],
  "tasks": [
    {
      "zh": {
        "label": "场景识别",
        "question": "这张图像属于哪类铁路巡检场景？",
        "answer": "{经过复核的场景类别}"
      },
      "en": {
        "label": "Scene",
        "question": "Which railway inspection scene is shown in this image?",
        "answer": "{reviewed scene category}"
      }
    },
    {
      "zh": {
        "label": "缺陷判断",
        "question": "图像中是否存在缺陷？如果存在，属于哪些类别？",
        "answer": "{缺陷存在性}；{经过复核的缺陷类别列表}"
      },
      "en": {
        "label": "Defect",
        "question": "Does this image contain defects? If so, which categories?",
        "answer": "{defect presence}; {reviewed defect categories}"
      }
    },
    {
      "zh": {
        "label": "证据描述",
        "question": "哪些可见信息支持这一缺陷判断？",
        "answer": "{对象或构件}；{可见状态}；{支持判断的图像证据}"
      },
      "en": {
        "label": "Evidence",
        "question": "Which visible details support the defect decision?",
        "answer": "{object or component}; {visible state}; {supporting visual evidence}"
      }
    },
    {
      "zh": {
        "label": "风险说明",
        "question": "该缺陷可能涉及哪些风险？哪些信息仍需人工确认？",
        "answer": "{有依据的风险说明}；{适用条件与不确定性}"
      },
      "en": {
        "label": "Risk",
        "question": "What risks may be associated with the defect, and what needs further review?",
        "answer": "{grounded risk description}; {conditions and uncertainty}"
      }
    }
  ]
};

